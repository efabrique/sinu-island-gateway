
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Book, Heart, Briefcase, Home, Globe } from 'lucide-react';

const SupportSection = () => {
  const supportServices = [
    {
      title: "Academic Support",
      icon: <Book className="h-6 w-6" />,
      description: "Tutoring, study groups, and academic workshops to help you succeed in your studies."
    },
    {
      title: "Student Welfare",
      icon: <Heart className="h-6 w-6" />,
      description: "Counseling services, health support, and personal development programs."
    },
    {
      title: "Career Services",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Career guidance, internship opportunities, and employment preparation."
    },
    {
      title: "Accommodation",
      icon: <Home className="h-6 w-6" />,
      description: "On-campus housing options and assistance finding suitable accommodation."
    },
    {
      title: "International Students",
      icon: <Globe className="h-6 w-6" />,
      description: "Specialized support for international students including visa assistance."
    },
    {
      title: "Student Life",
      icon: <Users className="h-6 w-6" />,
      description: "Clubs, societies, sports, and cultural activities to enrich your university experience."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023047] mb-4">
            Student Support & Services
          </h2>
          <p className="text-lg text-[#023047] max-w-3xl mx-auto">
            At SINU, we're committed to supporting you throughout your undergraduate journey. 
            Our comprehensive support services ensure you have everything you need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-[#8ecae6] text-center">
              <CardHeader>
                <div className="bg-[#8ecae6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#023047]">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-[#023047]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#023047]">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#8ecae6] to-[#219ebc] rounded-lg p-8">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">24/7 Student Support</h3>
            <p className="mb-6">
              Our student support services are available around the clock to ensure you always have 
              the help you need, when you need it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Emergency Hotline</h4>
                <p>+677 87654321</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Online Support</h4>
                <p>support.sinu.edu.sb</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Student Portal</h4>
                <p>portal.sinu.edu.sb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
