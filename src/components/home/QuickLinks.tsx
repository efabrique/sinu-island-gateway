
import React from 'react';
import { BookOpen, Calendar, Library, GraduationCap, Users, MapPin } from 'lucide-react';

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-university-blue text-center mb-12">Quick Links</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.link}
              className="flex items-center p-4 border rounded-lg hover:bg-university-light-gray hover:shadow-md transition-all"
            >
              <div className="h-12 w-12 bg-university-blue/10 rounded-full flex items-center justify-center text-university-blue mr-4">
                <link.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-university-blue">{link.title}</h3>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
