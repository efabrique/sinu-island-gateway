
import React, { useState } from 'react';
import { Search, Book, User, Users, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MegaMenu from './MegaMenu';
import { megaMenuData } from '@/data/megaMenuData';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      {/* University Logo and Name */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-university-blue rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs sm:text-sm">SINU</span>
          </div>
          <span className="text-university-blue font-bold text-lg hidden md:block">
            Solomon Islands National University
          </span>
        </a>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <p className="text-university-dark-gray text-sm">Your Future, Our Commitment</p>
          </div>

          {/* Mobile menu toggle */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="ml-2 md:hidden"
              onClick={toggleMenu}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
        </div>
      </div>

      {/* Top Navigation Row */}
      <div className="bg-university-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex-1"></div>
            <div className={`${isMobile && !menuOpen ? 'hidden' : 'flex'} flex-col md:flex-row items-center w-full md:w-auto space-y-2 md:space-y-0 space-x-0 md:space-x-2 py-2`}>
              <Button variant="ghost" size="sm" className="text-white w-full md:w-auto hover:text-university-gold hover:bg-university-blue/90">
                <User className="mr-2 h-4 w-4" />
                <span>Staff Portal</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white w-full md:w-auto hover:text-university-gold hover:bg-university-blue/90">
                <Users className="mr-2 h-4 w-4" />
                <span>Student Portal</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white w-full md:w-auto hover:text-university-gold hover:bg-university-blue/90">
                <Book className="mr-2 h-4 w-4" />
                <span>Apply Now</span>
              </Button>
              <div className="relative w-full md:w-auto">
                <Button variant="ghost" size="sm" className="text-white w-full md:w-auto hover:text-university-gold hover:bg-university-blue/90">
                  <Search className="mr-2 h-4 w-4" />
                  <span>Search</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Row with Mega Menus - hidden in mobile unless menu is open */}
      <div className={`bg-university-light-gray border-t border-gray-200 ${isMobile && !menuOpen ? 'hidden' : 'block'}`}>
        <div className="container mx-auto px-4">
          <nav className={`flex ${isMobile ? 'flex-col' : 'justify-center'}`}>
            {Object.entries(megaMenuData).map(([key, menuData]) => (
              <MegaMenu 
                key={key} 
                title={key} 
                columns={menuData.columns}
                image={menuData.image}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
