
import React, { useState, useEffect, useRef } from 'react';
import { Search, Book, User, Users, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MegaMenu from './MegaMenu';
import { megaMenuData } from '@/data/megaMenuData';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        // Only update on scroll to top as header might change size
        updateMegaMenuPosition();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Run again after a short delay to ensure all elements are fully rendered
    const timer = setTimeout(() => {
      updateMegaMenuPosition();
    }, 200);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isMobile]);

  return (
    <header ref={headerRef} className="sticky top-0 w-full bg-white shadow-md z-50">
      {/* University Logo and Name */}
      <div className="container mx-auto px-4 py-2 flex items-center">
        {/* Logo on the left - Updated with new logo */}
        <a href="/" className="flex-shrink-0">
          <div className="h-12 sm:h-16 md:h-20 bg-white flex items-center justify-center">
            <img 
              src="/lovable-uploads/26f8db50-7fe6-4c6f-b38c-180f22a0a88b.png" 
              alt="SINU Logo" 
              className="h-full w-auto max-h-full object-contain"
            />
          </div>
        </a>
        
        {/* University name and catch phrase centered in the available space */}
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-[#0b2c55] font-bold text-xl sm:text-2xl md:text-3xl text-center" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
            Solomon Islands National University
          </h1>
          <p className="text-[#d7a12c] text-xs sm:text-sm md:text-base text-center" style={{ textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.2)' }}>
            Creating Your Future is Our Commitment
          </p>
        </div>
        
        {/* Mobile menu toggle - pushed to the right */}
        <div className="flex-shrink-0">
          {isMobile && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
        </div>
      </div>

      {/* Top Navigation Row */}
      <div className="bg-[#219ebc]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex-1"></div>
            <div className={`${isMobile && !menuOpen ? 'hidden' : 'flex'} flex-col md:flex-row items-center w-full md:w-auto space-y-2 md:space-y-0 space-x-0 md:space-x-2 py-2`}>
              <Button variant="ghost" size="sm" className="text-white w-full md:w-auto hover:text-[#ffb703] hover:bg-[#219ebc]/90">
                <User className="mr-2 h-4 w-4" />
                <span>Staff Portal</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white w-full md:w-auto hover:text-[#ffb703] hover:bg-[#219ebc]/90">
                <Users className="mr-2 h-4 w-4" />
                <span>Student Portal</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white w-full md:w-auto hover:text-[#ffb703] hover:bg-[#219ebc]/90">
                <Book className="mr-2 h-4 w-4" />
                <span>Apply Now</span>
              </Button>
              <div className="relative w-full md:w-auto">
                <Button variant="ghost" size="sm" className="text-white w-full md:w-auto hover:text-[#ffb703] hover:bg-[#219ebc]/90">
                  <Search className="mr-2 h-4 w-4" />
                  <span>Search</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Row with Mega Menus - hidden in mobile unless menu is open */}
      <div className={`bg-[#8ecae6] border-t border-[#66b2b2] ${isMobile && !menuOpen ? 'hidden' : 'block'}`}>
        <div className="container mx-auto px-4">
          <nav className="flex justify-center">
            {Object.entries(megaMenuData).map(([key, menuData], index) => (
              <MegaMenu 
                key={key} 
                title={key} 
                columns={menuData.columns}
                image={menuData.image}
                id={`menu-${index}`} // Add unique ID
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
