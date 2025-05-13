
import React from 'react';
import { BookOpen, Calendar, Library, GraduationCap, Users, MapPin } from 'lucide-react';
import ErrorBoundary from '../common/ErrorBoundary';

const quickLinks = [
  {
    title: "Course Catalog",
    description: "Browse our comprehensive listing of courses",
    icon: BookOpen,
    link: "#"
  },
  {
    title: "Academic Calendar",
    description: "Important dates and deadlines",
    icon: Calendar,
    link: "#"
  },
  {
    title: "Library",
    description: "Access our digital and physical resources",
    icon: Library,
    link: "#"
  },
  {
    title: "Admission",
    description: "Application requirements and deadlines",
    icon: GraduationCap,
    link: "#"
  },
  {
    title: "Student Life",
    description: "Clubs, activities, and campus events",
    icon: Users,
    link: "#"
  },
  {
    title: "Campus Tour",
    description: "Explore our facilities virtually",
    icon: MapPin,
    link: "#"
  }
];

const QuickLinks = () => {
  return (
    <ErrorBoundary>
      <section className="py-8 md:py-16 bg-[#b2d8d8]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#219ebc] text-center mb-8 md:mb-12">Quick Links</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {quickLinks.map((link, index) => (
              <ErrorBoundary key={index}>
                <a 
                  href={link.link}
                  className="flex items-center p-3 md:p-4 border rounded-lg hover:bg-[#8ecae6]/10 hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 md:h-12 md:w-12 bg-[#8ecae6]/20 rounded-full flex items-center justify-center text-[#219ebc] mr-3 md:mr-4">
                    <link.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg text-[#219ebc]">{link.title}</h3>
                    <p className="text-xs md:text-sm text-[#023047]">{link.description}</p>
                  </div>
                </a>
              </ErrorBoundary>
            ))}
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default QuickLinks;
