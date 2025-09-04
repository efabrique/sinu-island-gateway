import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderLogoProps {
  handleLogoClick?: () => void;
}

export function HeaderLogo({ handleLogoClick }: HeaderLogoProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Logo container */}
      <div
        className={`fixed left-4 z-50 rounded-full p-1 transition-all duration-500 ease-in-out
          ${scrolled 
            ? "top-2 w-12 h-12"           // Smaller logo on scroll
            : "top-4 w-24 h-20 sm:w-32 sm:h-28 md:w-36 md:h-30" // Larger logo for desktop
          }`}
      >
        <Link
          to="/"
          onClick={handleLogoClick}
          className="w-full h-full flex items-center justify-center rounded-full overflow-hidden"
        >
          <img
            src="/lovable-uploads/e89a9d15-f230-44b8-8ecb-322ac2085582.png"
            alt="SINU Logo"
            className="w-full h-full object-contain p-1"
          />
        </Link>
      </div>

      {/* Text below the logo */}
      <div
        className={`fixed left-4 z-50 w-36 sm:w-40 text-center text-[#222222] transition-opacity duration-500 ease-in-out
          ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        style={{ top: scrolled ? '0px' : '100px', paddingTop: scrolled ? '0px' : '2rem' }}
      >
        <h1 className="font-bold text-xs sm:text-sm md:text-base leading-tight">
          Solomon Islands National University
        </h1>
      </div>
    </>
  );
}

export default HeaderLogo;
