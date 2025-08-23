import React from 'react';
import MegaMenu from './MegaMenu';
import { megaMenuData } from '@/data/megaMenuData';

interface MainNavigationProps {
  isScrolled?: boolean;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ isScrolled = false }) => {
  return (
    <nav className={`flex ${isScrolled ? 'justify-center' : 'justify-center'} space-x-4`}>
      {Object.entries(megaMenuData).map(([key, menuData], index) => (
        <MegaMenu
          key={key}
          id={`mega-menu-${index}`}  // unique id for aria-controls
          title={menuData.title || key} // fallback to key if title is missing
          links={menuData.links || []}  // fallback empty array if links missing
          image={menuData.image}        // optional
          isScrolled={isScrolled}
        />
      ))}
    </nav>
  );
};

export default MainNavigation;
