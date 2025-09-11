import React, { useState } from 'react';
import HeaderLogo from './HeaderLogo';
import MainNavigation from './MainNavigation';
import TopNavigation from './TopNavigation';
import { Menu, X } from 'lucide-react'; // icons for mobile menu toggle

interface DesktopHeaderProps {
  isScrolled?: boolean;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isScrolled = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-transparent min-h-[80px]">
      <div className="container mx-auto px-4 py-4 sm:py-8 flex flex-col">
        {/* Top bar: Logo left, TopNavigation right */}
        <div className="w-full flex items-center justify-between">
          <HeaderLogo isScrolled={isScrolled} />

          {/* TopNavigation hidden on mobile */}
          <div className="hidden lg:flex flex-1 justify-end items-center">
            <TopNavigation isScrolled={isScrolled} />
          </div>

          {/* Mobile hamburger button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 w-full">
            <div className="bg-white shadow-lg rounded-lg p-4 animate-slide-down w-full">
              {/* MainNavigation in responsive grid layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 gap-4 relative">
                <MainNavigation isScrolled={isScrolled} isMobile={true} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopHeader;
