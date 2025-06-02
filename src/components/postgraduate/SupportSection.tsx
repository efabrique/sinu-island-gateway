
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, BookOpen, Users, Briefcase, Heart, Home } from 'lucide-react';

const SupportSection = () => {
  const supportServices = [
    {
      icon: <DollarSign className="h-8 w-8 text-[#219ebc]" />,
      title: "Financial Support",
      description: "Scholarships, research assistantships, and government funding opportunities for eligible students.",
      services: ["Merit-based scholarships", "Research grants", "Teaching assistantships", "Government scholarships"]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#219ebc]" />,
      title: "Academic Support",
      description: "Comprehensive academic resources to help you succeed in your postgraduate studies.",
      services: ["Supervisor allocation", "Research methodology training", "Writing workshops", "Library access"]
    },
    {
      icon: <Users className="h-8 w-8 text-[#219ebc]" />,
      title: "Research Community",
      description: "Join a vibrant community of researchers and access state-of-the-art facilities.",
      services: ["Research centers", "Conference funding", "Publication support", "Peer networks"]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-[#219ebc]" />,
      title: "Career Development",
      description: "Enhance your professional skills and prepare for your career after graduation.",
      services: ["Career counseling", "Industry partnerships", "Professional development", "Alumni network"]
    },
    {
      icon: <Heart className="h-8 w-8 text-[#219ebc]" />,
      title: "Wellbeing Support",
      description: "Comprehensive support services to maintain your physical and mental health.",
      services: ["Counseling services", "Health center", "Student support", "Peer mentoring"]
    },
    {
      icon: <Home className="h-8 w-8 text-[#219ebc]" />,
      title: "Accommodation",
      description: "On-campus and off-campus housing options for postgraduate students.",
      services: ["Postgraduate residences", "Family accommodation", "Housing assistance", "International student support"]
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Student Support Services
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            We provide comprehensive support to help you succeed in your postgraduate journey, 
            from financial assistance to academic resources and wellbeing services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-[#8ecae6]">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-[#082952]">{service.title}</CardTitle>
                <CardDescription className="text-[#082952]">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-[#082952]">
                      <span className="w-2 h-2 bg-[#219ebc] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
