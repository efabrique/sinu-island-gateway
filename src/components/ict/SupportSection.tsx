
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const SupportSection = () => {
  const supportOptions = [
    {
      title: "Help Desk",
      description: "Get immediate assistance with technical issues and ICT service inquiries.",
      icon: Phone,
      contact: "+677 12345678",
      availability: "24/7"
    },
    {
      title: "Email Support",
      description: "Send detailed support requests and get comprehensive solutions via email.",
      icon: Mail,
      contact: "ict-support@sinu.edu.sb",
      availability: "Response within 24 hours"
    },
    {
      title: "Live Chat",
      description: "Quick support for immediate technical questions and guidance.",
      icon: MessageCircle,
      contact: "Available on portal",
      availability: "Mon-Fri 8AM-6PM"
    },
    {
      title: "On-site Support",
      description: "Technical staff available for complex issues and equipment setup.",
      icon: Clock,
      contact: "Book appointment",
      availability: "Mon-Fri 8AM-5PM"
    }
  ];

  return (
    <section className="py-16 bg-[#8ecae6]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            ICT Support & Help
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Our dedicated ICT support team is here to assist you with technical issues, training, and guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => (
            <Card key={index} className="bg-white border-[#8ecae6] hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-[#219ebc] p-4 rounded-full">
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-lg text-[#082952]">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-4 text-sm">{option.description}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-semibold text-[#219ebc]">{option.contact}</p>
                  <p className="text-xs text-[#082952]">{option.availability}</p>
                </div>
                <Button 
                  size="sm" 
                  className="bg-[#ffb703] text-[#082952] hover:bg-[#ffb703]/90 w-full"
                >
                  Contact
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg p-8 border border-[#8ecae6]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#082952] mb-4">Frequently Asked Questions</h3>
              <p className="text-[#082952] mb-6">
                Find quick answers to common ICT questions and troubleshooting guides in our comprehensive FAQ section.
              </p>
              <Button className="bg-[#219ebc] text-white hover:bg-[#219ebc]/90">
                View FAQ
              </Button>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#082952] mb-4">Training & Workshops</h3>
              <p className="text-[#082952] mb-6">
                Enhance your digital skills with our regular training sessions and workshops on university ICT services.
              </p>
              <Button variant="outline" className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white">
                See Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
