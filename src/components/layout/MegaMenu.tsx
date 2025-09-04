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
    const contentWidth = dropdown.scrollWidth;
    const windowWidth = window.innerWidth;
    dropdown.style.display = "";
    dropdown.style.visibility = "";

    let left = buttonRect.left;
    if (left + contentWidth > windowWidth) {
      left = Math.max(10, windowWidth - contentWidth - 10);
    }
    setDropdownStyle({ left });
  };

  const handleToggle = () => {
    calculateDropdownPosition();
    setIsOpen(!isOpen);
  };

  const buttonClasses = `
    px-4 py-3 flex items-center justify-between w-full md:w-auto rounded-sm
    font-sans font-medium text-base transition-colors focus:outline-none
    ${isScrolled 
      ? "text-black hover:text-[#ffb703] hover:bg-[#0b2c55]/90" 
      : "text-black hover:text-[#ffb703] hover:bg-[#0b2c55]/90"
    }
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
        onClick={() => window.innerWidth < 768 && handleToggle()}
        aria-controls={id}
        aria-expanded={isOpen}
      >
        <span className="font-sans">{title}</span>
      </button>

      {/* Dropdown */}
      <div
        id={id}
        style={dropdownStyle}
        className={`
          absolute top-full z-50 origin-top bg-white border-t border-[#8ecae6]
          md:border-none md:shadow-lg transform transition-all duration-300 ease-in-out
          scale-y-0 opacity-0 ${isOpen ? "scale-y-100 opacity-100" : ""}
        `}
      >
        <div className="p-4 md:px-6 md:py-4 flex flex-col md:flex-row gap-6 w-max">
          {/* Links List */}
          <ul className="flex-1 space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="block font-sans text-base text-[#222] hover:text-[#ffb703] md:font-medium transition-colors"
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
