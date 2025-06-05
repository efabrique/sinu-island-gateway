
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSupportSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+677 12345678",
      availability: "Mon-Fri, 8:00 AM - 5:00 PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@sinu.edu.sb",
      availability: "24/7 - Response within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Student Services Center, Main Campus",
      availability: "Mon-Fri, 8:00 AM - 5:00 PM"
    },
    {
      icon: Clock,
      title: "Emergency Support",
      details: "24/7 Crisis Hotline",
      availability: "+677 87654321"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Contact Student Support
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Our student support team is here to help you succeed. Reach out to us through any of the following channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-white border-[#8ecae6] text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-[#219ebc] p-4 rounded-full">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-lg text-[#082952]">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-[#082952] mb-2">{method.details}</p>
                <p className="text-sm text-[#082952]">{method.availability}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#082952] mb-4">Quick Support Request</h3>
            <p className="text-[#082952]">Need immediate assistance? Fill out our quick support form and we'll get back to you within 24 hours.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Button className="bg-[#219ebc] hover:bg-[#219ebc]/90 text-white w-full mb-2">
                Academic Support Request
              </Button>
              <p className="text-sm text-[#082952]">Course planning, academic advice, study skills</p>
            </div>
            
            <div>
              <Button className="bg-[#ffb703] hover:bg-[#ffb703]/90 text-[#082952] w-full mb-2">
                Personal Support Request
              </Button>
              <p className="text-sm text-[#082952]">Counselling, wellbeing, accommodation</p>
            </div>
            
            <div>
              <Button className="bg-[#8ecae6] hover:bg-[#8ecae6]/90 text-[#082952] w-full mb-2">
                Technical Support Request
              </Button>
              <p className="text-sm text-[#082952]">IT issues, online learning, system access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupportSection;
