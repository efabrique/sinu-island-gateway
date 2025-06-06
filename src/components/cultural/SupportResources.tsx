
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Download, ExternalLink } from 'lucide-react';

const SupportResources = () => {
  const contacts = [
    {
      title: "International Student Office",
      phone: "+677 30123",
      email: "international@sinu.edu.sb",
      location: "Student Services Building, Level 2",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM"
    },
    {
      title: "Cultural Orientation Coordinator",
      phone: "+677 30124",
      email: "cultural.orientation@sinu.edu.sb",
      location: "International Center, Room 15",
      hours: "Monday - Friday: 9:00 AM - 4:00 PM"
    },
    {
      title: "Emergency Support Hotline",
      phone: "+677 999 (24/7)",
      email: "emergency@sinu.edu.sb",
      location: "Campus Security Office",
      hours: "Available 24/7"
    }
  ];

  const resources = [
    {
      title: "Cultural Orientation Handbook",
      description: "Comprehensive guide to Solomon Islands culture, customs, and university life",
      type: "PDF Download"
    },
    {
      title: "Essential Pijin Phrases",
      description: "Basic language guide with audio pronunciations",
      type: "Audio Guide"
    },
    {
      title: "Campus & Community Map",
      description: "Interactive map with important locations and cultural sites",
      type: "Interactive Map"
    },
    {
      title: "Cultural Events Calendar",
      description: "Schedule of upcoming cultural activities and community events",
      type: "Online Calendar"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Support Resources & Contact Information
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Our dedicated support team is here to help you throughout your cultural orientation 
              journey. Don't hesitate to reach out whenever you need assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contacts.map((contact, index) => (
              <Card key={index} className="border-[#219ebc] bg-[#edf4ff] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#082952] text-lg">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-[#082952]">
                    <Phone className="h-4 w-4 mr-3 text-[#219ebc]" />
                    <span>{contact.phone}</span>
                  </div>
                  <div className="flex items-center text-[#082952]">
                    <Mail className="h-4 w-4 mr-3 text-[#219ebc]" />
                    <span className="text-sm">{contact.email}</span>
                  </div>
                  <div className="flex items-start text-[#082952]">
                    <MapPin className="h-4 w-4 mr-3 text-[#219ebc] mt-0.5" />
                    <span className="text-sm">{contact.location}</span>
                  </div>
                  <div className="flex items-start text-[#082952]">
                    <Clock className="h-4 w-4 mr-3 text-[#219ebc] mt-0.5" />
                    <span className="text-sm">{contact.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-[#ffb703] bg-white shadow-lg mb-12">
            <CardHeader>
              <CardTitle className="text-[#082952] text-2xl">Helpful Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-[#edf4ff] p-4 rounded-lg border border-[#8ecae6]">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-[#082952]">{resource.title}</h4>
                      <span className="text-xs text-[#219ebc] bg-[#219ebc]/10 px-2 py-1 rounded">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-[#082952] text-sm mb-3">{resource.description}</p>
                    <Button size="sm" className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952]">
                      <Download className="h-4 w-4 mr-2" />
                      Access Resource
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-[#219ebc] text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Cultural Journey?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Join our next Cultural Orientation program and start building connections that will last a lifetime. 
              Register now to secure your place and begin your Solomon Islands adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#ffb703] text-[#082952] hover:bg-[#d7a12c] px-8 py-3">
                Register for Orientation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#219ebc] px-8 py-3">
                <ExternalLink className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportResources;
