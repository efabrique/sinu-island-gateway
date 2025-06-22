
import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLElement>(null);

  const toggleSubmenu = (menuKey: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuKey) 
        ? prev.filter(key => key !== menuKey)
        : [...prev, menuKey]
    );
  };

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

    const handleScroll = () => {
      if (window.scrollY === 0) {
        updateMegaMenuPosition();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    const timer = setTimeout(() => {
      updateMegaMenuPosition();
    }, 200);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isMobile]);

  // Reset expanded menus when drawer closes
  useEffect(() => {
    if (!menuOpen) {
      setExpandedMenus([]);
    }
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 w-full bg-white shadow-md z-50">
      {isMobile ? (
        <MobileHeader 
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          expandedMenus={expandedMenus}
          toggleSubmenu={toggleSubmenu}
        />
      ) : (
        <DesktopHeader />
      )}
    </header>
  );
};

export default Header;
