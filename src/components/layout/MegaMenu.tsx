import React, { useState, useRef, useEffect } from "react";

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
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const buttonClasses = `
    px-4 py-3 flex items-center justify-between w-full md:w-auto rounded-sm
    font-sans font-medium text-sm sm:text-base md:text-lg lg:text-xl
    transition-colors focus:outline-none
    ${
      isScrolled
        ? "text-white hover:text-[#222] hover:bg-[#22a2bf]/70"
        : "text-white hover:text-[#222] hover:bg-[#22a2bf]/70 pt-4"
    }
  `;

  return (
    <div
      ref={menuRef}
      className="relative w-full md:w-auto"
      onMouseEnter={() => window.innerWidth >= 768 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setIsOpen(false)}
    >
      {/* Menu Button */}
      <button
        className={buttonClasses}
        onClick={() => window.innerWidth < 768 && setIsOpen(!isOpen)}
        aria-controls={id}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {/* Mobile arrow indicator */}
        <span className="md:hidden ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Desktop Dropdown */}
      <div
        id={id}
        className={`
          absolute top-full left-0 z-50 hidden md:block bg-white border-t border-[#8ecae6] shadow-lg
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
        `}
      >
        <div className="p-4 md:px-6 md:py-4 flex flex-col md:flex-row gap-6 w-max">
          <ul className="flex-1 space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="block font-sans text-base text-[#222]/70 hover:text-[#222] font-bold transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Collapsible List */}
      {isOpen && (
        <div className="md:hidden pl-6 pr-4 py-6 bg-white border-l border-[#8ecae6]">
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="block font-sans text-sm text-[#222]/70 hover:text-[#222] text-bold transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
