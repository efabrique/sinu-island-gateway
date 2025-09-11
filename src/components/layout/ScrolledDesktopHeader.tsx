import React, { useState } from 'react';
import HeaderLogo from './HeaderLogo';
import MainNavigation from './MainNavigation';

const ScrolledDesktopHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#22a2bf] shadow-md transition-all duration-300 ease-in-out">
      {/* Reduced height only on desktop */}
      <div className="container mx-auto px-4 flex items-center justify-between py-2 lg:py-1">
        <HeaderLogo isScrolled={true} />
        <MainNavigation isScrolled={true} />
        <button
          className="lg:hidden p-2 border rounded"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile dropdown (unchanged height) */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white shadow-lg transition-all duration-300">
          <MainNavigation isScrolled={true} />
        </div>
      )}
    </div>
  );
};

export default ScrolledDesktopHeader;
