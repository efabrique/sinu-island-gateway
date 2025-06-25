
import React from 'react';
import { Search, Book, User, Users, Library, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const TopNavigation = () => {
  return (
    <div className="bg-[#219ebc]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex-1"></div>
          <div className="flex items-center space-x-2 py-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90 transition-colors duration-300"
              asChild
            >
              <Link to="/staff-login">
                <User className="mr-2 h-4 w-4" />
                <span>Staff Portal</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90 transition-colors duration-300"
              asChild
            >
              <Link to="/student-login">
                <Users className="mr-2 h-4 w-4" />
                <span>Student Portal</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90 transition-colors duration-300"
              asChild
            >
              <Link to="#moodle">
                <GraduationCap className="mr-2 h-4 w-4" />
                <span>Moodle</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90 transition-colors duration-300"
              asChild
            >
              <Link to="/library-services">
                <Library className="mr-2 h-4 w-4" />
                <span>Library</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90 transition-colors duration-300"
              asChild
            >
              <Link to="/applicant-login">
                <Book className="mr-2 h-4 w-4" />
                <span>Apply Now</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90 transition-colors duration-300"
              asChild
            >
              <Link to="/course-finder">
                <Search className="mr-2 h-4 w-4" />
                <span>Search</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
