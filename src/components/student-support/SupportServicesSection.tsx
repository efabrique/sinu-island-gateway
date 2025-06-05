
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, FileText, Calculator, Globe } from 'lucide-react';

const SupportServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Academic Advising",
      description: "One-on-one consultations with academic advisors to help plan your degree, select courses, and navigate academic requirements.",
      features: ["Degree planning", "Course selection", "Academic requirements", "Career guidance"]
    },
    {
      icon: FileText,
      title: "Writing & Study Skills",
      description: "Workshops and individual support to develop essential academic skills including writing, research, and study techniques.",
      features: ["Essay writing", "Research skills", "Study techniques", "Time management"]
    },
    {
      icon: Calculator,
      title: "Mathematics & Science Support",
      description: "Specialized tutoring and support for mathematics, statistics, and science subjects through our learning centers.",
      features: ["Math tutoring", "Statistics help", "Science support", "Online resources"]
    },
    {
      icon: Globe,
      title: "International Student Services",
      description: "Dedicated support for international students including visa assistance, cultural orientation, and academic integration.",
      features: ["Visa support", "Cultural programs", "Language assistance", "Academic integration"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Academic Support Services
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Our comprehensive support services are designed to help you achieve academic excellence and reach your full potential.
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
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#082952]">
                      <span className="w-2 h-2 bg-[#219ebc] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="bg-[#219ebc] hover:bg-[#219ebc]/90 text-white">
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

export default SupportServicesSection;
