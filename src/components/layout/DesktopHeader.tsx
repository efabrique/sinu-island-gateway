
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
      <MainNavigation />
    </>
  );
};

export default DesktopHeader;
