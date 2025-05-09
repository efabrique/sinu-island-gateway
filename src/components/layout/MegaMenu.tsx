
import React from 'react';
import { ChevronDown } from 'lucide-react';

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
}

const MegaMenu: React.FC<MegaMenuProps> = ({ title, columns, image }) => {
  return (
    <div className="mega-menu-container group relative">
      <button className="px-4 py-3 flex items-center text-sm font-medium hover:text-university-blue focus:outline-none">
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {/* Mega Menu Dropdown */}
      <div className="mega-menu absolute left-0 w-screen bg-white shadow-lg border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* First Column */}
            <div className="lg:col-span-4">
              <h3 className="text-lg font-bold text-university-blue mb-4">{columns[0].title}</h3>
              <ul className="space-y-2">
                {columns[0].links.map((link, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-university-green"></span>
                    <a href={link.url} className="text-gray-700 hover:text-university-blue hover:underline">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Second Column */}
            <div className="lg:col-span-4">
              <h3 className="text-lg font-bold text-university-blue mb-4">{columns[1].title}</h3>
              <ul className="space-y-2">
                {columns[1].links.map((link, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-university-green"></span>
                    <a href={link.url} className="text-gray-700 hover:text-university-blue hover:underline">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Image Column */}
            <div className="lg:col-span-4 h-64">
              <div className="h-full w-full overflow-hidden rounded-md">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="mega-menu-image" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
