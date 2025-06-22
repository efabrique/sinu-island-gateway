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
                src="/lovable-uploads/e89a9d15-f230-44b8-8ecb-322ac2085582.png" 
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
      {/* Floating Logo Card for Desktop/Tablet */}
      <div className="fixed top-4 left-4 z-50 bg-white hover:bg-[#edf4ff] rounded-lg shadow-lg p-2 transition-colors duration-300" 
           style={{ 
             width: '160px', 
             height: '140px'
           }}>
        <Link to="/" className="w-full h-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/e89a9d15-f230-44b8-8ecb-322ac2085582.png" 
            alt="SINU Logo" 
            className="w-full h-full object-contain"
          />
        </Link>
      </div>
      
      {/* Header Content without Logo */}
      <div className="flex-grow flex flex-col items-center justify-center ml-44">
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
