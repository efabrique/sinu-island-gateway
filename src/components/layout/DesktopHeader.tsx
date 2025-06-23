
import React from 'react';
import HeaderLogo from './HeaderLogo';
import TopNavigation from './TopNavigation';
import MainNavigation from './MainNavigation';

const DesktopHeader = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-2 flex items-center">
        <HeaderLogo isMobile={false} />
      </div>
      <TopNavigation />
      <div className="bg-[#8ecae6] border-t border-[#66b2b2]">
        <div className="container mx-auto px-4">
          <MainNavigation />
        </div>
      </div>
    </>
  );
};

export default DesktopHeader;
