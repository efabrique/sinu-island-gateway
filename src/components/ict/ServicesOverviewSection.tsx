
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, Globe, Database, Users } from 'lucide-react';

const ServicesOverviewSection = () => {
  const services = [
    {
      title: "Digital Infrastructure",
      description: "State-of-the-art computing facilities, high-speed internet, and reliable network infrastructure across all campuses.",
      icon: Globe,
      features: ["High-speed fiber internet", "Campus-wide WiFi", "Network security", "Cloud services"]
    },
    {
      title: "Computing Resources",
      description: "Access to modern computer labs, software applications, and digital tools for learning and research.",
      icon: Laptop,
      features: ["Computer laboratories", "Software licensing", "Virtual desktops", "Mobile device support"]
    },
    {
      title: "Data Management",
      description: "Secure data storage, backup solutions, and information management systems for the university community.",
      icon: Database,
      features: ["Data backup", "File storage", "Database services", "Information security"]
    },
    {
      title: "User Support",
      description: "Comprehensive technical support and training services for students, staff, and faculty members.",
      icon: Users,
      features: ["Help desk support", "Training programs", "User guides", "Technical workshops"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Our ICT Services
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Comprehensive technology services designed to support teaching, learning, research, and administration at SINU.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-[#8ecae6] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-[#8ecae6] p-3 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-[#082952]" />
                  </div>
                  <CardTitle className="text-xl text-[#082952]">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[#082952]">
                      <span className="w-2 h-2 bg-[#219ebc] rounded-full mr-3"></span>
                      {feature}
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

export default ServicesOverviewSection;
