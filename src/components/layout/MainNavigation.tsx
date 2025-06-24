
import React from 'react';
import MegaMenu from './MegaMenu';
import { megaMenuData } from '@/data/megaMenuData';

interface MainNavigationProps {
  isScrolled?: boolean;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ isScrolled = false }) => {
  return (
    <nav className={`flex ${isScrolled ? 'justify-center' : 'justify-center'}`}>
      {Object.entries(megaMenuData).map(([key, menuData], index) => (
        <MegaMenu 
          key={key} 
          title={key} 
          columns={menuData.columns}
          image={menuData.image}
          id={`menu-${index}`}
          isScrolled={isScrolled}
        />
      ))}
    </nav>
  );
};

export default MainNavigation;
