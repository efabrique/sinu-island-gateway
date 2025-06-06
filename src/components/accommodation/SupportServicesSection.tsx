
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Users, Heart } from 'lucide-react';

const SupportServicesSection = () => {
  const supportServices = [
    {
      title: "Residential Life Team",
      description: "Dedicated staff to support your accommodation experience",
      icon: Users,
      contact: "accommodation@sinu.edu.sb",
      color: "#ffb703"
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock assistance for urgent accommodation issues",
      icon: Phone,
      contact: "+677 1234 5678",
      color: "#219ebc"
    },
    {
      title: "Maintenance Services",
      description: "Quick response to maintenance requests and repairs",
      icon: Clock,
      contact: "Submit online or call front desk",
      color: "#8ecae6"
    },
    {
      title: "Student Wellbeing",
      description: "Counseling and support services for personal matters",
      icon: Heart,
      contact: "wellbeing@sinu.edu.sb",
      color: "#d7a12c"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Support Services
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Our dedicated support team is here to ensure your accommodation experience is comfortable, 
              safe, and conducive to your academic success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {supportServices.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: service.color }}>
                <CardHeader>
                  <div className="flex items-center">
                    <div 
                      className="p-3 rounded-full mr-4"
                      style={{ backgroundColor: service.color }}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-[#082952]">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] mb-3">{service.description}</p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-[#082952]">
                      <strong>Contact:</strong> {service.contact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-[#082952] rounded-lg p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="text-[#8ecae6]">
                Our accommodation team is ready to assist you with any questions or concerns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-[#ffb703] p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#082952]" />
                </div>
                <h4 className="font-semibold mb-2">Call Us</h4>
                <p className="text-[#8ecae6] text-sm">+677 1234 5678</p>
                <p className="text-[#8ecae6] text-sm">Available 24/7</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#ffb703] p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#082952]" />
                </div>
                <h4 className="font-semibold mb-2">Email Us</h4>
                <p className="text-[#8ecae6] text-sm">accommodation@sinu.edu.sb</p>
                <p className="text-[#8ecae6] text-sm">Response within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#ffb703] p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#082952]" />
                </div>
                <h4 className="font-semibold mb-2">Visit Us</h4>
                <p className="text-[#8ecae6] text-sm">Student Services Building</p>
                <p className="text-[#8ecae6] text-sm">Mon-Fri: 8AM-5PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportServicesSection;
