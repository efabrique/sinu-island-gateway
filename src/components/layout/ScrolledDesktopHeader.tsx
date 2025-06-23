
import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, Book, User, Users } from 'lucide-react';
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
    <div className="relative">
      {/* Main Navigation Bar */}
      <div className="bg-[#8ecae6] border-t border-[#66b2b2]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* SINU Text Logo */}
            <div className="py-3">
              <Link to="/" className="text-[#082952] font-bold text-2xl">
                SINU
              </Link>
            </div>

            {/* Main Navigation */}
            <div className="flex-1 flex justify-center">
              <MainNavigation />
            </div>

            {/* Hamburger Menu */}
            <div className="relative" ref={sidebarRef}>
              <Button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="bg-[#219ebc] hover:bg-white text-[#082952] border border-white h-12 w-12 p-0 transition-colors"
                size="lg"
              >
                <Menu className="h-6 w-6" />
              </Button>

              {/* Dropdown Sidebar */}
              {sidebarOpen && (
                <div className="absolute top-full right-0 bg-white shadow-lg border border-gray-200 rounded-b-lg z-50 w-96 animate-fade-in">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Staff Portal Card */}
                      <Link
                        to="/staff-login"
                        className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <User className="h-8 w-8 text-[#219ebc] mb-2" />
                        <span className="text-sm font-medium text-[#082952]">Staff Portal</span>
                      </Link>

                      {/* Student Portal Card */}
                      <Link
                        to="/student-login"
                        className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <Users className="h-8 w-8 text-[#219ebc] mb-2" />
                        <span className="text-sm font-medium text-[#082952]">Student Portal</span>
                      </Link>

                      {/* Apply Now Card */}
                      <Link
                        to="/applicant-login"
                        className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <Book className="h-8 w-8 text-[#219ebc] mb-2" />
                        <span className="text-sm font-medium text-[#082952]">Apply Now</span>
                      </Link>

                      {/* Search Card */}
                      <Link
                        to="/course-finder"
                        className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <Search className="h-8 w-8 text-[#219ebc] mb-2" />
                        <span className="text-sm font-medium text-[#082952]">Search</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrolledDesktopHeader;
