
import React from 'react';
import { Search, Book, User, Users, ChevronDown, ChevronRight, X, Library, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { DrawerClose } from "@/components/ui/drawer";
import { megaMenuData } from '@/data/megaMenuData';

interface MobileDrawerMenuProps {
  expandedMenus: string[];
  toggleSubmenu: (menuKey: string) => void;
}

const MobileDrawerMenu: React.FC<MobileDrawerMenuProps> = ({ expandedMenus, toggleSubmenu }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold text-[#082952]">Menu</h2>
        <DrawerClose asChild>
          <Button variant="ghost" size="sm" className="hover:bg-[#082952] hover:text-white transition-colors">
            <X className="h-6 w-6" />
          </Button>
        </DrawerClose>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-semibold text-[#082952] uppercase tracking-wide mb-3">Quick Access</h3>
          
          {/* 2-column grid for Quick Access links */}
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start text-[#219ebc] hover:text-[#ffb703] hover:bg-[#219ebc]/10 p-3 h-auto flex-col items-center gap-1"
              asChild
            >
              <Link to="/staff-login">
                <User className="h-4 w-4" />
                <span className="text-xs text-center">Staff Portal</span>
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start text-[#219ebc] hover:text-[#ffb703] hover:bg-[#219ebc]/10 p-3 h-auto flex-col items-center gap-1"
              asChild
            >
              <Link to="/student-login">
                <Users className="h-4 w-4" />
                <span className="text-xs text-center">Student Portal</span>
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start text-[#219ebc] hover:text-[#ffb703] hover:bg-[#219ebc]/10 p-3 h-auto flex-col items-center gap-1"
              asChild
            >
              <Link to="#moodle">
                <GraduationCap className="h-4 w-4" />
                <span className="text-xs text-center">Moodle</span>
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start text-[#219ebc] hover:text-[#ffb703] hover:bg-[#219ebc]/10 p-3 h-auto flex-col items-center gap-1"
              asChild
            >
              <Link to="/library-services">
                <Library className="h-4 w-4" />
                <span className="text-xs text-center">Library</span>
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start text-[#219ebc] hover:text-[#ffb703] hover:bg-[#219ebc]/10 p-3 h-auto flex-col items-center gap-1"
              asChild
            >
              <Link to="/applicant-login">
                <Book className="h-4 w-4" />
                <span className="text-xs text-center">Apply Now</span>
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start text-[#219ebc] hover:text-[#ffb703] hover:bg-[#219ebc]/10 p-3 h-auto flex-col items-center gap-1"
              asChild
            >
              <Link to="/course-finder">
                <Search className="h-4 w-4" />
                <span className="text-xs text-center">Search</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-[#082952] uppercase tracking-wide mb-3">Main Menu</h3>
          {Object.entries(megaMenuData).map(([key, menuData]) => (
            <div key={key} className="border-b border-gray-100 last:border-b-0">
              <Button
                variant="ghost"
                className="w-full justify-between text-left p-3 h-auto font-medium text-[#082952] hover:bg-[#8ecae6]/20"
                onClick={() => toggleSubmenu(key)}
              >
                <span>{key}</span>
                {expandedMenus.includes(key) ? (
                  <ChevronDown className="h-4 w-4 text-[#219ebc]" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-[#219ebc]" />
                )}
              </Button>
              
              {expandedMenus.includes(key) && (
                <div className="bg-gray-50 py-2">
                  {menuData.columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="mb-4 last:mb-0">
                      <h4 className="text-sm font-semibold text-[#082952] px-6 py-2 uppercase tracking-wide">
                        {column.title}
                      </h4>
                      <div className="space-y-1">
                        {column.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start px-8 py-2 text-sm text-[#219ebc] hover:text-[#ffb703] hover:bg-[#219ebc]/10"
                            asChild
                          >
                            <Link to={link.url}>
                              {link.title}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileDrawerMenu;
