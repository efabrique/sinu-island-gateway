
import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, Book, User, Users, Library, GraduationCap, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import MainNavigation from './MainNavigation';

const ScrolledDesktopHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="relative transform-gpu">
      {/* Main Navigation Bar with dark background */}
      <div className="bg-transparent border-t border-[#0b2c55]">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between">
            {/* SINU Text Logo - White color */}
            <div className="py-3 transition-all duration-200 ease-in-out">
              <Link to="/" className="text-white font-bold text-2xl hover:text-gray-200 transition-colors duration-200">
                SINU
              </Link>
            </div>

            {/* Main Navigation - Pass scrolled state */}
            <div className="flex-1 flex justify-center">
              <MainNavigation isScrolled={true} />
            </div>

            {/* Hamburger Menu with updated styling */}
            <div className="relative" ref={sidebarRef}>
              <Button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="bg-white hover:bg-[#edf4ff] text-[#082952] border border-gray-300 h-12 w-12 p-0 transition-all duration-200 ease-in-out hover:scale-105"
                size="lg"
              >
                {sidebarOpen ? (
                  <X className="h-6 w-6 transition-transform duration-200" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-200" />
                )}
              </Button>

              {/* Expanded Dropdown Sidebar with smooth animation */}
              <div className={`absolute top-full right-0 bg-white shadow-lg border border-gray-200 rounded-b-lg z-50 w-[480px] transition-all duration-300 ease-in-out transform-gpu ${
                sidebarOpen 
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                  : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
              }`}>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Staff Portal Card */}
                    <Link
                      to="/staff-login"
                      className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <User className="h-8 w-8 text-[#219ebc] mb-2 transition-transform duration-200" />
                      <span className="text-sm font-medium text-[#082952]">Staff Portal</span>
                    </Link>

                    {/* Student Portal Card */}
                    <Link
                      to="/student-login"
                      className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Users className="h-8 w-8 text-[#219ebc] mb-2 transition-transform duration-200" />
                      <span className="text-sm font-medium text-[#082952]">Student Portal</span>
                    </Link>

                    {/* Moodle Card */}
                    <Link
                      to="#"
                      className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <GraduationCap className="h-8 w-8 text-[#219ebc] mb-2 transition-transform duration-200" />
                      <span className="text-sm font-medium text-[#082952]">Moodle</span>
                    </Link>

                    {/* Library Card */}
                    <Link
                      to="/library-services"
                      className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Library className="h-8 w-8 text-[#219ebc] mb-2 transition-transform duration-200" />
                      <span className="text-sm font-medium text-[#082952]">Library</span>
                    </Link>

                    {/* Apply Now Card */}
                    <Link
                      to="/applicant-login"
                      className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Book className="h-8 w-8 text-[#219ebc] mb-2 transition-transform duration-200" />
                      <span className="text-sm font-medium text-[#082952]">Apply Now</span>
                    </Link>

                    {/* Search Card */}
                    <Link
                      to="/course-finder"
                      className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Search className="h-8 w-8 text-[#219ebc] mb-2 transition-transform duration-200" />
                      <span className="text-sm font-medium text-[#082952]">Search</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrolledDesktopHeader;
