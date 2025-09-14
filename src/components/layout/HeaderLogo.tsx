import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderLogoProps {
  isScrolled: boolean;
  handleLogoClick?: () => void;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ isScrolled, handleLogoClick }) => {
  return (
    <div
      className={`
        flex  items-center justify-center text-center 
        transition-all duration-500 ease-in-out
        ${isScrolled ? "scale-100 opacity-100  pl-10" : "scale-100 opacity-100 pt-0 flex-col"}
      `}
    >
      {/* Logo */}
      <Link
        to="/"
        onClick={handleLogoClick}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
      >
        <img
          src="/lovable-uploads/e89a9d15-f230-44b8-8ecb-322ac2085582.png"
          alt="SINU Logo"
          className="w-full h-full object-contain"
        />
      </Link>

      {/* Text below logo (always two lines) */}
      <div
        className={`
          mt-2 w-full max-w-xs sm:max-w-sm md:max-w-md
          transition-opacity duration-500 ease-in-out
          ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <h1 className="font-bold text-sm sm:text-base md:text-lg leading-tight text-center text-[#222]">
          Solomon Islands
        </h1>
        <h1 className="font-bold text-sm sm:text-base md:text-lg leading-tight text-center text-[#222]">
          National University
        </h1>
      </div>
    </div>
  );
};

export default HeaderLogo;
