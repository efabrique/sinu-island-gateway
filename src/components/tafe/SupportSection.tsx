
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, DollarSign, Heart } from 'lucide-react';

const SupportSection = () => {
  const supportServices = [
    {
      icon: Users,
      title: "Student Services",
      description: "Academic counseling, career guidance, and personal support throughout your studies"
    },
    {
      icon: BookOpen,
      title: "Learning Support",
      description: "Literacy and numeracy assistance, study skills workshops, and learning resources"
    },
    {
      icon: DollarSign,
      title: "Financial Assistance",
      description: "Scholarships, payment plans, and information about funding opportunities"
    },
    {
      icon: Heart,
      title: "Welfare Support",
      description: "Counseling services, health and wellbeing programs, and community connections"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Student Support
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Comprehensive support services to help you succeed in your studies and beyond
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportServices.map((service, index) => (
            <Card key={index} className="bg-white text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#ffb703] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-lg text-[#082952]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#082952]">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
