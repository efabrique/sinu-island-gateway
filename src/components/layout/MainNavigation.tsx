
import React from 'react';
import MegaMenu from './MegaMenu';
import { megaMenuData } from '@/data/megaMenuData';

const MainNavigation = () => {
  return (
    <div className="bg-[#8ecae6] border-t border-[#66b2b2]">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center">
          {Object.entries(megaMenuData).map(([key, menuData], index) => (
            <MegaMenu 
              key={key} 
              title={key} 
              columns={menuData.columns}
              image={menuData.image}
              id={`menu-${index}`}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MainNavigation;
