
import React from 'react';
import { Button } from '@/components/ui/button';
import { HeadphonesIcon, Users, BookOpen, GraduationCap } from 'lucide-react';

const SupportServicesSection = () => {
  const supportServices = [
    {
      icon: HeadphonesIcon,
      title: "24/7 Technical Support",
      description: "Get help with our learning platform, technical issues, and connectivity problems anytime.",
      contact: "Call: +677 TECH-HELP"
    },
    {
      icon: Users,
      title: "Academic Mentoring",
      description: "Connect with experienced mentors who provide guidance throughout your academic journey.",
      contact: "Email: mentors@sinu.edu.sb"
    },
    {
      icon: BookOpen,
      title: "Library & Resources",
      description: "Access digital library resources, research databases, and study materials online.",
      contact: "Online Portal Available"
    },
    {
      icon: GraduationCap,
      title: "Career Services",
      description: "Receive career counseling, job placement assistance, and professional development support.",
      contact: "Book Consultation"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Student Support Services
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Comprehensive support to ensure your success in distance and flexible learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {supportServices.map((service, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#8ecae6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-10 w-10 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-3">{service.title}</h3>
              <p className="text-[#082952] mb-3">{service.description}</p>
              <p className="text-sm font-medium text-[#219ebc]">{service.contact}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#edf4ff] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-[#082952] mb-4">
            Need Personal Support?
          </h3>
          <p className="text-[#082952] mb-6 max-w-2xl mx-auto">
            Our student support coordinators are available to help with personal challenges, 
            study planning, and connecting you with local resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#219ebc] hover:bg-[#082952] text-white px-8 py-3">
              Contact Support Coordinator
            </Button>
            <Button variant="outline" className="border-[#082952] text-[#082952] hover:bg-[#082952] hover:text-white px-8 py-3">
              Join Student Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportServicesSection;
