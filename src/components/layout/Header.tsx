
import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import ScrolledDesktopHeader from './ScrolledDesktopHeader';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLElement>(null);

  const toggleSubmenu = (menuKey: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuKey) 
        ? prev.filter(key => key !== menuKey)
        : [...prev, menuKey]
    );
  };

  // Handle scroll behavior for desktop/tablet with smoother transition
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 30; // Reduced threshold for earlier trigger
      
      // Only update state if it actually changes to prevent unnecessary re-renders
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isScrolled]);

  // Function to update mega menu position
  const updateMegaMenuPosition = () => {
    if (isMobile || !headerRef.current) return;
    
    const headerHeight = headerRef.current.offsetHeight;
    const megaMenus = document.querySelectorAll('.mega-menu') as NodeListOf<HTMLElement>;
    
    megaMenus.forEach(menu => {
      menu.style.top = `${headerHeight}px`;
    });
  };

  // Update position on mount, window resize, and scroll
  useEffect(() => {
    updateMegaMenuPosition();
    
    const handleResize = () => {
      updateMegaMenuPosition();
    };

    const handleScrollPosition = () => {
      if (window.scrollY === 0) {
        updateMegaMenuPosition();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScrollPosition);
    
    const timer = setTimeout(() => {
      updateMegaMenuPosition();
    }, 200);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScrollPosition);
      clearTimeout(timer);
    };
  }, [isMobile, isScrolled]);

  // Reset expanded menus when drawer closes
  useEffect(() => {
    if (!menuOpen) {
      setExpandedMenus([]);
    }
  }, [menuOpen]);

  return (
    <header 
      ref={headerRef} 
      className={`sticky top-0 w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out ${
        isScrolled && !isMobile ? 'transform-gpu' : ''
      }`}
    >
      {isMobile ? (
        <MobileHeader 
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          expandedMenus={expandedMenus}
          toggleSubmenu={toggleSubmenu}
        />
      ) : (
        <div className="relative">
          {/* Desktop Header - with smooth transition */}
          <div className={`transition-all duration-300 ease-in-out transform-gpu ${
            isScrolled 
              ? 'opacity-0 -translate-y-full absolute inset-x-0 pointer-events-none' 
              : 'opacity-100 translate-y-0 relative'
          }`}>
            <DesktopHeader />
          </div>
          
          {/* Scrolled Header - with smooth transition */}
          <div className={`transition-all duration-300 ease-in-out transform-gpu ${
            isScrolled 
              ? 'opacity-100 translate-y-0 relative' 
              : 'opacity-0 translate-y-full absolute inset-x-0 pointer-events-none'
          }`}>
            <ScrolledDesktopHeader />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
