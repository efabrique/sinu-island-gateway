
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Printer, Wifi, Coffee, Shield } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';

const ServicesSection = () => {
  const services = [
    {
      title: "Research Support",
      description: "Get personalized assistance with your research projects, citation help, and information literacy training.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
    },
    {
      title: "Print & Copy Services",
      description: "Access printing, copying, and scanning facilities throughout the library.",
      icon: Printer,
      image: "https://images.unsplash.com/photo-1586281010691-3d3fac7013ff"
    },
    {
      title: "Wi-Fi & Technology",
      description: "Free wireless internet access and computer workstations for all students and staff.",
      icon: Wifi,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      title: "Study Spaces",
      description: "Quiet study areas, group study rooms, and collaborative spaces for all learning styles.",
      icon: Coffee,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      title: "Security & Safety",
      description: "24/7 security monitoring and safe study environments for all library users.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1568667256549-094345857637"
    },
    {
      title: "Special Collections",
      description: "Access to rare books, archives, and special collections related to Solomon Islands history.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#082952] mb-4">Library Services</h2>
          <p className="text-lg text-[#082952] max-w-2xl mx-auto">
            Comprehensive support services designed to enhance your academic success and research capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <OptimizedImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full"
                  objectFit="cover"
                  width={400}
                />
              </div>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="bg-[#219ebc] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-[#082952]">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] opacity-80 mb-4">{service.description}</p>
                <Button variant="outline" className="text-[#219ebc] border-[#219ebc] hover:bg-[#219ebc] hover:text-white">
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

export default ServicesSection;
