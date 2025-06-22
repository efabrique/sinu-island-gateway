
import React from 'react';
import { Search, Book, User, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const TopNavigation = () => {
  return (
    <div className="bg-[#219ebc]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex-1"></div>
          <div className="flex items-center space-x-2 py-2">
            <Button variant="ghost" size="sm" className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90">
              <User className="mr-2 h-4 w-4" />
              <span>Staff Portal</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90">
              <Users className="mr-2 h-4 w-4" />
              <span>Student Portal</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90">
              <Book className="mr-2 h-4 w-4" />
              <span>Apply Now</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-[#ffb703] hover:bg-[#219ebc]/90"
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
