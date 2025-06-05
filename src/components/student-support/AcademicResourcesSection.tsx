
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Library, Laptop, Users2, Calendar } from 'lucide-react';

const AcademicResourcesSection = () => {
  const resources = [
    {
      icon: Library,
      title: "Library & Research Support",
      description: "Access to extensive digital and physical resources, research assistance, and information literacy training.",
      link: "/library-services"
    },
    {
      icon: Laptop,
      title: "Online Learning Platform",
      description: "Comprehensive digital learning environment with course materials, assignments, and collaboration tools.",
      link: "#"
    },
    {
      icon: Users2,
      title: "Peer Tutoring Program",
      description: "Connect with senior students for academic support and mentorship in your field of study.",
      link: "#"
    },
    {
      icon: Calendar,
      title: "Academic Calendar & Events",
      description: "Stay updated with important academic dates, workshops, seminars, and support events.",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Academic Resources
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Explore our wide range of academic resources designed to support your learning journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-white border-[#8ecae6] hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-[#ffb703] p-4 rounded-full">
                    <resource.icon className="h-8 w-8 text-[#082952]" />
                  </div>
                </div>
                <CardTitle className="text-lg text-[#082952]">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-6 text-sm">{resource.description}</p>
                <Button 
                  variant="outline" 
                  className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white w-full"
                  asChild
                >
                  <a href={resource.link}>Access Resource</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicResourcesSection;
