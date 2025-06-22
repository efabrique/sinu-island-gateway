
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderLogoProps {
  isMobile: boolean;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ isMobile }) => {
  if (isMobile) {
    return (
      <div className="flex-1 flex justify-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="h-16 w-16 flex items-center justify-center">
              <img 
                src="/lovable-uploads/23ead6eb-64a7-49ff-b85e-923f1ded7e0e.png" 
                alt="SINU Logo" 
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#082952] font-bold text-3xl">
            SINU
          </div>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Link to="/" className="flex-shrink-0 flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="relative">
          <div className="h-14 w-14 sm:h-18 sm:w-18 md:h-22 md:w-22 lg:h-24 lg:w-24 flex items-center justify-center">
            <img 
              src="/lovable-uploads/23ead6eb-64a7-49ff-b85e-923f1ded7e0e.png" 
              alt="SINU Logo" 
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="text-[#082952] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          SINU
        </div>
      </Link>
      
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-[#0b2c55] font-bold text-xl sm:text-2xl md:text-3xl text-center" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
          Solomon Islands National University
        </h1>
        <p className="text-[#d7a12c] text-xs sm:text-sm md:text-base text-center" style={{ textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.2)' }}>
          Creating Your Future is Our Commitment
        </p>
      </div>
    </>
  );
};

export default HeaderLogo;
