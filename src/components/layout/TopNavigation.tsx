import React from 'react';
import { Search, Book, User, Users, Library, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MainNavigation from './MainNavigation';

interface TopNavigationProps {
  isScrolled?: boolean;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ isScrolled = false }) => {
  const navItems = [
    { to: '/staff-login', icon: User, label: 'Staff Portal' },
    { to: '/student-portal', icon: Users, label: 'Student Portal' },
    { to: '/moodle', icon: GraduationCap, label: 'Moodle' },
    { to: '/library-services', icon: Library, label: 'Library' },
    { to: '/applicant-login', icon: Book, label: 'Apply Now' },
    { to: '/course-finder', icon: Search, label: 'Search' },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Top nav row */}
      <div
        className={`flex items-center justify-end transition-all duration-500 ${
          isScrolled ? 'hidden lg:flex' : 'flex'
        }`}
      >
        {navItems.map(({ to, icon: Icon, label }) => (
          <Button
            key={label}
            asChild
            variant="ghost"
            size="sm"
            className="flex items-center text-lg font-sans font-medium text-white hover:text-[#222] hover:bg-[#22a2bf]/70 transition-colors duration-300"
          >
            <Link to={to}>
              <Icon className="mr-2 h-4 w-4" />
              <span>{label}</span>
            </Link>
          </Button>
        ))}
      </div>

      {/* Main navigation row centered below */}
      <div className="w-full flex justify-center mt-10 hidden lg:flex">
        <MainNavigation isScrolled={isScrolled} />
      </div>
    </div>
  );
};

export default TopNavigation;
