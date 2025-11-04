import React from 'react';
import MegaMenu from './MegaMenu';
import { megaMenuData } from '@/data/megaMenuData';

interface MainNavigationProps {
  isScrolled?: boolean;
  isMobile?: boolean;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ isScrolled = false, isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 relative">
        {Object.entries(megaMenuData).map(([key, menuData], index) => (
          <div key={key} className="relative">
            <MegaMenu
              id={`mega-menu-${index}`}
              title={menuData.title || key}
              links={menuData.links || []}
              image={menuData.image}
              isScrolled={isScrolled}
            />
          </div>
        ))}
      </div>
    );
  }

  // Desktop layout
  return (
    <nav className="flex justify-center gap-4 ">
      {Object.entries(megaMenuData).map(([key, menuData], index) => (
        <MegaMenu
          key={key}
          id={`mega-menu-${index}`}
          title={menuData.title || key}
          links={menuData.links || []}
          image={menuData.image}
          isScrolled={isScrolled}
        />
      ))}
    </nav>
  );
};

export default MainNavigation;
