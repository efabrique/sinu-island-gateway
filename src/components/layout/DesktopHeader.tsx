import React, { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import TopNavigation from "./TopNavigation";
import MainNavigation from "./MainNavigation";
import { Menu, X } from "lucide-react";

const DesktopHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent">
      {/* Top bar with logo and hamburger */}
      <div className="container mx-auto px-4 py-4 sm:py-6 flex items-center justify-between">
        <HeaderLogo />

        {/* Desktop Top Navigation */}
        <div className="flex-1 flex justify-end lg:flex lg:items-center lg:space-x-4 pt-10">
          <TopNavigation />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-transparent">
        <div className="container mx-auto px-4">
          {/* Desktop Main Navigation */}
          <div className="hidden lg:block">
            <MainNavigation />
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white shadow-md rounded-md p-4 mt-2 space-y-4 font-sans text-base">
              <TopNavigation />
              <MainNavigation />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
