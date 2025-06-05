
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Video, Mail } from 'lucide-react';

const StudentServicesSection = () => {
  const studentServices = [
    {
      title: "Student Portal Access",
      description: "Secure access to academic records, course materials, and university services through our integrated student portal.",
      icon: GraduationCap,
      link: "#"
    },
    {
      title: "Learning Management System",
      description: "Access course content, submit assignments, participate in discussions, and track your academic progress online.",
      icon: BookOpen,
      link: "#"
    },
    {
      title: "Video Conferencing",
      description: "Join virtual classes, attend online lectures, and participate in remote learning activities with our video platform.",
      icon: Video,
      link: "#"
    },
    {
      title: "Student Email",
      description: "Official university email account with access to Microsoft Office 365 and collaboration tools.",
      icon: Mail,
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-[#8ecae6]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Services for Students
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Essential digital tools and services to support your academic journey and enhance your learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studentServices.map((service, index) => (
            <Card key={index} className="bg-white border-[#8ecae6] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-[#ffb703] p-3 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#082952]">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-6">{service.description}</p>
                <Button 
                  variant="outline" 
                  className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white"
                >
                  Access Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-[#219ebc] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Help Getting Started?</h3>
          <p className="text-white mb-6">
            Our ICT team provides orientation sessions and training for new students to help you make the most of our digital services.
          </p>
          <Button className="bg-[#ffb703] text-[#082952] hover:bg-[#ffb703]/90">
            Book Training Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentServicesSection;
