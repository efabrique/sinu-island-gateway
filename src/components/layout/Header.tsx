import React, { useState, useEffect } from 'react';
import DesktopHeader from './DesktopHeader';
import ScrolledDesktopHeader from './ScrolledDesktopHeader';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only enable scrolled header on desktop (>=1024px)
      if (window.innerWidth >= 1024) {
        setIsScrolled(window.scrollY > 30); // adjust trigger
      } else {
        setIsScrolled(false); // disable on smaller screens
      }
    };

    // Initial check in case page is already scrolled
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll); // handle resize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Default transparent header over Hero */}
      <div className="absolute top-0 left-0 w-full z-20">
        <DesktopHeader isScrolled={false} />
      </div>

      {/* Fixed scrolled header for desktop only */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ScrolledDesktopHeader />
      </div>
    </>
  );
};

export default Header;
