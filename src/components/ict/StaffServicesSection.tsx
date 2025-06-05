
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Shield, Settings, Cloud } from 'lucide-react';

const StaffServicesSection = () => {
  const staffServices = [
    {
      title: "Faculty Resources",
      description: "Teaching tools, curriculum management systems, and academic software to support faculty in delivering quality education.",
      icon: Users,
      features: ["Lecture capture", "Grade management", "Course planning tools", "Academic software"]
    },
    {
      title: "Administrative Systems",
      description: "Integrated management systems for student records, human resources, finance, and institutional operations.",
      icon: Settings,
      features: ["Student information systems", "HR management", "Financial systems", "Reporting tools"]
    },
    {
      title: "Security & Compliance",
      description: "Data protection services, security training, and compliance tools to ensure institutional data safety.",
      icon: Shield,
      features: ["Security awareness training", "Data protection protocols", "Access management", "Compliance monitoring"]
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions for file storage, collaboration, and application hosting for university operations.",
      icon: Cloud,
      features: ["Cloud storage", "Collaboration platforms", "Virtual servers", "Backup solutions"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Services for Staff & Faculty
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Professional ICT services and tools designed to support teaching, research, and administrative functions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {staffServices.map((service, index) => (
            <Card key={index} className="border-[#8ecae6] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-[#d7a12c] p-3 rounded-lg mr-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#082952]">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[#082952]">
                      <span className="w-2 h-2 bg-[#219ebc] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="border-[#d7a12c] text-[#d7a12c] hover:bg-[#d7a12c] hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffServicesSection;
