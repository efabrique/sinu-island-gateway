
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import HeaderLogo from './HeaderLogo';
import MobileDrawerMenu from './MobileDrawerMenu';

interface MobileHeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  expandedMenus: string[];
  toggleSubmenu: (menuKey: string) => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ 
  menuOpen, 
  setMenuOpen, 
  expandedMenus, 
  toggleSubmenu 
}) => {
  return (
    <div className="container mx-auto px-4 py-2 flex items-center">
      <HeaderLogo isMobile={true} />
      
      <div className="flex-shrink-0">
        <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
          <DrawerTrigger asChild>
            <Button 
              variant="ghost" 
              size="lg" 
              className="border border-gray-300 rounded-md p-3 hover:border-gray-400 hover:bg-[#082952] hover:text-white transition-colors"
            >
              <Menu className="h-8 w-8" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[90vh]">
            <MobileDrawerMenu 
              expandedMenus={expandedMenus}
              toggleSubmenu={toggleSubmenu}
            />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileHeader;
