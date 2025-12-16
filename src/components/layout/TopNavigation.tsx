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
    {
      href: "https://sinu.myhubintranet.com/Intranet-Login",
      icon: User,
      label: "Staff Portal",
      external: true,
    },
    {
      href: "https://sinu.myhubintranet.com/Intranet-Login",
      icon: Users,
      label: "Student Portal",
      external: true,
    },
    {
      href: "https://elearn.sinu.edu.sb/login/index.php",
      icon: GraduationCap,
      label: "Moodle",
      external: true,
    },
    { to: "/library-services", icon: Library, label: "Library" },
    { to: "/applicant-login", icon: Book, label: "Apply Now" },
    { to: "/course-finder", icon: Search, label: "Search" },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Top nav row - positioned top right */}
      <div
        className={`w-full flex justify-end items-center transition-all duration-500 ${isScrolled ? 'hidden lg:flex' : 'flex'
          }`}
      >
        <div className="flex items-center space-x-1">
          {navItems.map(({ to, href, icon: Icon, label, external }) => (
            <Button
              key={label}
              asChild
              variant="ghost"
              size="sm"
              className="flex items-center text-lg font-sans font-medium text-white 
                hover:text-[#222] hover:bg-[#22a2bf]/70 transition-colors duration-300"
            >
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ) : (
                <Link to={to} className="flex items-center">
                  <Icon className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Main navigation row - centered below top nav */}
      <div className="w-full flex justify-center mt-10">
        <MainNavigation isScrolled={isScrolled} />
      </div>
    </div>
  );
};

export default TopNavigation;