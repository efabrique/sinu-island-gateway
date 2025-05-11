
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import OptimizedImage from '../common/OptimizedImage';

interface Link {
  title: string;
  url: string;
}

interface Column {
  title: string;
  links: Link[];
}

interface MegaMenuProps {
  title: string;
  columns: Column[];
  image: {
    src: string;
    alt: string;
  };
  id: string; // Added unique ID prop
}

const MegaMenu: React.FC<MegaMenuProps> = ({ title, columns, image, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`${isMobile ? 'w-full' : 'mega-menu-container'}`} id={`menu-container-${id}`}>
      <button 
        className="px-4 py-3 flex items-center justify-between w-full md:w-auto text-sm font-medium hover:text-[#023047] focus:outline-none"
        onClick={toggleMenu}
        aria-controls={`mega-menu-${id}`}
        aria-expanded={isMobile ? isOpen : undefined}
      >
        {title}
        {isMobile ? 
          <ChevronRight className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} /> :
          <ChevronDown className="ml-1 h-4 w-4" />
        }
      </button>
      
      {/* Mobile Dropdown */}
      {isMobile && isOpen && (
        <div className="bg-white p-4 border-t border-[#8ecae6] animate-accordion-down" id={`mobile-menu-${id}`}>
          <div className="space-y-4">
            {columns.map((column, colIndex) => (
              <div key={colIndex}>
                <h3 className="text-lg font-bold text-[#219ebc] mb-2">{column.title}</h3>
                <ul className="space-y-2 pl-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#66b2b2]"></span>
                      <a href={link.url} className="text-[#023047] hover:text-[#219ebc] hover:underline">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="h-40 mt-4">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="rounded-md h-full w-full"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      )}
      
      {/* Desktop Mega Menu Dropdown */}
      {!isMobile && (
        <div 
          className="mega-menu" 
          id={`mega-menu-${id}`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* First Column */}
              <div className="col-span-1">
                <h3 className="text-lg font-bold text-[#219ebc] mb-4">{columns[0].title}</h3>
                <ul className="space-y-2">
                  {columns[0].links.map((link, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#66b2b2]"></span>
                      <a href={link.url} className="text-[#023047] hover:text-[#219ebc] hover:underline">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Second Column */}
              <div className="col-span-1">
                <h3 className="text-lg font-bold text-[#219ebc] mb-4">{columns[1].title}</h3>
                <ul className="space-y-2">
                  {columns[1].links.map((link, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#66b2b2]"></span>
                      <a href={link.url} className="text-[#023047] hover:text-[#219ebc] hover:underline">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Image Column */}
              <div className="col-span-1">
                <div className="h-full w-full overflow-hidden rounded-md">
                  <OptimizedImage 
                    src={image.src} 
                    alt={image.alt} 
                    className="h-60 w-full object-cover"
                    objectFit="cover"
                  />
                  <p className="mt-2 text-sm text-[#023047] italic">{image.alt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
