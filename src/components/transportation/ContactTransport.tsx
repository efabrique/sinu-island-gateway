import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactTransport = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+677 30123",
      secondary: "Emergency: +677 911"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "transport@sinu.edu.sb",
      secondary: "shuttle@sinu.edu.sb"
    },
    {
      icon: MapPin,
      title: "Office Location",
      primary: "Transport Services Building",
      secondary: "Main Campus, Ground Floor"
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Monday - Friday: 7:00 AM - 6:00 PM",
      secondary: "Saturday: 8:00 AM - 2:00 PM"
    }
  ];

  const resources = [
    { title: "Campus Transport Map", icon: Download },
    { title: "Shuttle Schedule", icon: Download },
    { title: "Student Transport Guide", icon: Download },
    { title: "Emergency Contacts", icon: Download }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#082952] mb-4">
            Contact Transportation Services
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Have questions about transportation options? Need assistance with planning 
            your journey? Our transport team is here to help you get around safely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#082952] mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border-[#8ecae6]/30">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-[#8ecae6] rounded-lg flex-shrink-0">
                        <contact.icon className="h-6 w-6 text-[#082952]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-[#082952] mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-[#082952] font-medium">
                          {contact.primary}
                        </p>
                        <p className="text-[#082952]/80 text-sm">
                          {contact.secondary}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#edf4ff] rounded-lg border border-[#8ecae6]/30">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#ffb703] rounded-lg flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-[#082952]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#082952] mb-2">
                    Live Chat Support
                  </h4>
                  <p className="text-[#082952]/80 mb-4">
                    Get instant help with your transportation questions through our 
                    live chat service available during office hours.
                  </p>
                  <Button className="bg-[#219ebc] hover:bg-[#082952] text-white">
                    Start Live Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links and Downloads */}
          <div>
            <h3 className="text-2xl font-bold text-[#082952] mb-6">
              Resources & Downloads
            </h3>
            
            <div className="space-y-4 mb-8">
              {resources.map((resource, index) => (
                <Card key={index} className="border-[#8ecae6]/30 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <resource.icon className="h-5 w-5 text-[#219ebc]" />
                        <span className="text-[#082952] font-medium">
                          {resource.title}
                        </span>
                      </div>
                      <Button variant="outline" size="sm" className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white">
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-[#ffb703]/50 bg-[#ffb703]/5">
              <CardHeader>
                <CardTitle className="text-xl text-[#082952] flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-[#ffb703]" />
                  Visit Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952]/80 mb-4">
                  Our transportation services office is conveniently located on the main campus. 
                  Visit us for in-person assistance, pass purchases, and detailed route information.
                </p>
                <div className="space-y-2 text-sm text-[#082952]/80">
                  <p><strong>Address:</strong> Transport Services Building, SINU Main Campus</p>
                  <p><strong>Landmark:</strong> Next to the Student Services Center</p>
                  <p><strong>Parking:</strong> Visitor parking available in front of building</p>
                </div>
                <Button className="mt-4 bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952]">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTransport;