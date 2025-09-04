import React from "react";
import {
  Search,
  Book,
  User,
  Users,
  Library,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  const navItems = [
    { to: "/staff-login", icon: User, label: "Staff Portal" },
    { to: "/student-login", icon: Users, label: "Student Portal" },
    { to: "/moodle", icon: GraduationCap, label: "Moodle" },
    { to: "/library-services", icon: Library, label: "Library" },
    { to: "/applicant-login", icon: Book, label: "Apply Now" },
    { to: "/course-finder", icon: Search, label: "Search" },
  ];

  return (
    <div className="bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex-1" />
          <div className="flex flex-wrap items-center gap-2 py-2">
            {navItems.map(({ to, icon: Icon, label }) => (
              <Button
                key={label}
                asChild
                variant="ghost"
                size="sm"
                className="flex items-center text-sm font-sans font-medium text-black hover:text-[#ffb703] hover:bg-[#0b2c55]/90 transition-colors duration-300"
              >
                <Link to={to}>
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
