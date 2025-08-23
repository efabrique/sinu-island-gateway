import React, { useState, useRef, useEffect } from "react";
import OptimizedImage from "../common/OptimizedImage";

interface LinkItem {
  title: string;
  url: string;
}

interface ImageItem {
  src: string;
  alt: string;
}

interface MegaMenuProps {
  id: string;
  title: string;
  links: LinkItem[];
  image?: ImageItem;
  isScrolled?: boolean;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ id, title, links, image, isScrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Calculate dropdown position dynamically
  const calculateDropdownPosition = () => {
    if (!buttonRef.current || !menuRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const dropdown = menuRef.current.querySelector<HTMLDivElement>("#" + id);
    if (!dropdown) return;

    // Temporarily show dropdown to measure content width
    dropdown.style.visibility = "hidden";
    dropdown.style.display = "block";
    const contentWidth = dropdown.scrollWidth; // auto-width based on content
    const windowWidth = window.innerWidth;
    dropdown.style.display = "";
    dropdown.style.visibility = "";

    // Default left position aligned with button
    let left = buttonRect.left;

    // Prevent overflow right
    if (left + contentWidth > windowWidth) {
      left = Math.max(10, windowWidth - contentWidth - 10); // 10px margin from edges
    }

    setDropdownStyle({ left });
  };

  const handleOpen = () => {
    calculateDropdownPosition();
    setIsOpen(!isOpen);
  };

  const buttonClasses = `
    px-4 py-3 flex items-center justify-between w-full md:w-auto text-sm font-medium
    focus:outline-none transition-colors
    ${isScrolled ? "text-white hover:bg-[#f9c74f] hover:text-[#023047]" : "text-white hover:bg-[#f9c74f] hover:text-[#023047]"}
  `;

  return (
    <div
      ref={menuRef}
      className="relative group w-full md:w-auto"
      onMouseEnter={() => window.innerWidth >= 768 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setIsOpen(false)}
    >
      {/* Menu Button */}
      <button
        ref={buttonRef}
        className={buttonClasses}
        onClick={() => window.innerWidth < 768 && handleOpen()}
        aria-controls={id}
        aria-expanded={isOpen}
      >
        {title}
      </button>

      {/* Dropdown */}
      <div
        id={id}
        style={dropdownStyle}
        className={`
          absolute top-full z-50 origin-top
          bg-[#ADC5CF] md:bg-blue-600 border-t border-[#8ecae6] md:border-none md:shadow-lg
          transform transition-all duration-300 ease-in-out
          scale-y-0 opacity-0
          ${isOpen ? "scale-y-100 opacity-100" : ""}
          
        `}
      >
        <div className="p-4 md:px-6 md:py-4 flex flex-col md:flex-row gap-6 w-max">
          {/* Links List */}
          <ul className="flex-1 space-y-5 pl-2">
            {links.map((link, index) => (
              <li key={index} className="flex items-start">
                <a
                  href={link.url}
                  className=" hover:text-[#219ebc]  md:text-[#fff] md:hover:text-[#222222] md:font-medium"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

        
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
