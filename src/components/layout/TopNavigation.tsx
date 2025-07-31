
import React from 'react';
import { Search, Book, User, Users, Library, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const TopNavigation = () => {
  return (
    <div className="bg-[#0b2c55]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex-1"></div>
          {
          <div className="flex items-center space-x-2 py-2">
           {/*  If can combine Staff & Student portal navigation buttons in single component/page. Reduce the space in header*/}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#0b2c55]/90 transition-colors duration-300 font-semibold"
              asChild
            >
              <Link to="/staff-login">
                <User className="mr-2 h-4 w-4" />
                <span className="font-sans">Staff Portal</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#0b2c55]/90 transition-colors duration-300"
              asChild
            >
              <Link to="/student-login">
                <Users className="mr-2 h-4 w-4" />
                <span  className="font-sans">Student Portal</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#0b2c55]/90 transition-colors duration-300"
              asChild
            >
              <Link to="#moodle">
                <GraduationCap className="mr-2 h-4 w-4" />
                <span  className="font-sans">Moodle</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#0b2c55]/90 transition-colors duration-300"
              asChild
            >
              <Link to="/library-services">
                <Library className="mr-2 h-4 w-4" />
                <span  className="font-sans">Library</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#0b2c55]/90 transition-colors duration-300"
              asChild
            >
              <Link to="/applicant-login">
                <Book className="mr-2 h-4 w-4" />
                <span  className="font-sans">Apply Now</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#0b2c55]/90 transition-colors duration-300"
              asChild
            >
              <Link to="/course-finder">
                <Search className="mr-2 h-4 w-4" />
                <span  className="font-sans">Search</span>
              </Link>
            </Button>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
