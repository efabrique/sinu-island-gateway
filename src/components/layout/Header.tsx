import React, { useState, useEffect, useRef } from 'react';
import { Search, Book, User, Users, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MegaMenu from './MegaMenu';
import { megaMenuData } from '@/data/megaMenuData';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

  // Reset expanded menus when drawer closes
  useEffect(() => {
    if (!menuOpen) {
      setExpandedMenus([]);
    }
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 w-full bg-white shadow-md z-50">
      {/* University Logo and Name */}
      <div className="container mx-auto px-4 py-2 flex items-center">
        {/* Mobile Layout */}
        {isMobile ? (
          <>
            {/* Centered and enlarged logo for mobile */}
            <div className="flex-1 flex justify-center">
              <a href="/" className="flex items-center gap-3">
                <div className="relative">
                  {/* Enlarged logo for mobile - takes most of header height */}
                  <div className="h-16 w-16 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/23ead6eb-64a7-49ff-b85e-923f1ded7e0e.png" 
                      alt="SINU Logo" 
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                {/* Enlarged SINU text for mobile */}
                <div className="text-[#082952] font-bold text-3xl">
                  SINU
                </div>
              </a>
            </div>
            
            {/* Mobile hamburger menu on the right */}
            <div className="flex-shrink-0">
              <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="h-[90vh]">
                  <div className="flex flex-col h-full">
                    {/* Header with close button */}
                    <div className="flex justify-between items-center p-4 border-b">
                      <h2 className="text-lg font-semibold text-[#082952]">Menu</h2>
                      <DrawerClose asChild>
                        <Button variant="ghost" size="sm">
                          <X className="h-6 w-6" />
                        </Button>
                      </DrawerClose>
                    </div>
                    
                    {/* Scrollable content */}
                    <div className="flex-1 overflow-y-auto p-4">
                      {/* Top Navigation Links */}
                      <div className="space-y-3 mb-6">
                        <h3 className="text-sm font-semibold text-[#082952] uppercase tracking-wide mb-3">Quick Access</h3>
                        <Button variant="ghost" size="sm" className="w-full justify-start text-[#219ebc] hover:text-[#ffb703] hover:bg-[#219ebc]/10">
                          <User className="mr-3 h-4 w-4" />
                          <span>Staff Portal</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start text-[#219ebc] hover:text-[#ffb703] hover:bg-[#219ebc]/10">
                          <Users className="mr-3 h-4 w-4" />
                          <span>Student Portal</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start text-[#219ebc] hover:text-[#ffb703] hover:bg-[#219ebc]/10">
                          <Book className="mr-3 h-4 w-4" />
                          <span>Apply Now</span>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full justify-start text-[#219ebc] hover:text-[#ffb703] hover:bg-[#219ebc]/10"
                          asChild
                        >
                          <Link to="/course-finder">
                            <Search className="mr-3 h-4 w-4" />
                            <span>Search</span>
                          </Link>
                        </Button>
                      </div>

                      {/* Menu Sections */}
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-[#082952] uppercase tracking-wide mb-3">Main Menu</h3>
                        {Object.entries(megaMenuData).map(([key, menuData]) => (
                          <div key={key} className="border-b border-gray-100 last:border-b-0">
                            <Button
                              variant="ghost"
                              className="w-full justify-between text-left p-3 h-auto font-medium text-[#082952] hover:bg-[#8ecae6]/20"
                              onClick={() => toggleSubmenu(key)}
                            >
                              <span>{key}</span>
                              {expandedMenus.includes(key) ? (
                                <ChevronDown className="h-4 w-4 text-[#219ebc]" />
                              ) : (
                                <ChevronRight className="h-4 w-4 text-[#219ebc]" />
                              )}
                            </Button>
                            
                            {expandedMenus.includes(key) && (
                              <div className="bg-gray-50 py-2">
                                {menuData.columns.map((column, columnIndex) => (
                                  <div key={columnIndex} className="mb-4 last:mb-0">
                                    <h4 className="text-sm font-semibold text-[#082952] px-6 py-2 uppercase tracking-wide">
                                      {column.title}
                                    </h4>
                                    <div className="space-y-1">
                                      {column.links.map((link, linkIndex) => (
                                        <Button
                                          key={linkIndex}
                                          variant="ghost"
                                          size="sm"
                                          className="w-full justify-start px-8 py-2 text-sm text-[#219ebc] hover:text-[#ffb703] hover:bg-[#219ebc]/10"
                                          asChild
                                        >
                                          <Link to={link.url}>
                                            {link.title}
                                          </Link>
                                        </Button>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </>
        ) : (
          /* Desktop Layout */
          <>
            {/* Logo and SINU text on the left */}
            <a href="/" className="flex-shrink-0 flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="relative">
                {/* Desktop logo - responsive sizing */}
                <div className="h-14 w-14 sm:h-18 sm:w-18 md:h-22 md:w-22 lg:h-24 lg:w-24 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/23ead6eb-64a7-49ff-b85e-923f1ded7e0e.png" 
                    alt="SINU Logo" 
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              {/* SINU text - responsive sizing */}
              <div className="text-[#082952] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                SINU
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
          </>
        )}
      </div>

      {/* Top Navigation Row - Desktop only */}
      {!isMobile && (
        <div className="bg-[#219ebc]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex-1"></div>
              <div className="flex items-center space-x-2 py-2">
                <Button variant="ghost" size="sm" className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90">
                  <User className="mr-2 h-4 w-4" />
                  <span>Staff Portal</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Student Portal</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90">
                  <Book className="mr-2 h-4 w-4" />
                  <span>Apply Now</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90"
                  asChild
                >
                  <Link to="/course-finder">
                    <Search className="mr-2 h-4 w-4" />
                    <span>Search</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Row with Mega Menus - Desktop only */}
      {!isMobile && (
        <div className="bg-[#8ecae6] border-t border-[#66b2b2]">
          <div className="container mx-auto px-4">
            <nav className="flex justify-center">
              {Object.entries(megaMenuData).map(([key, menuData], index) => (
                <MegaMenu 
                  key={key} 
                  title={key} 
                  columns={menuData.columns}
                  image={menuData.image}
                  id={`menu-${index}`}
                />
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
