
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Phone, Clock, MapPin, Calendar } from 'lucide-react';

const SupportSection = () => {
  const supportOptions = [
    {
      title: "Live Chat Support",
      description: "Get instant help from our librarians during business hours",
      icon: MessageCircle,
      availability: "Mon-Fri, 8AM-6PM",
      action: "Start Chat"
    },
    {
      title: "Email Support",
      description: "Send us your questions and we'll respond within 24 hours",
      icon: Mail,
      availability: "24/7 Response",
      action: "Send Email"
    },
    {
      title: "Phone Support",
      description: "Call our reference desk for immediate assistance",
      icon: Phone,
      availability: "Mon-Fri, 8AM-8PM",
      action: "Call Now"
    },
    {
      title: "Research Consultations",
      description: "Book one-on-one sessions with subject specialists",
      icon: Calendar,
      availability: "By Appointment",
      action: "Book Session"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#082952] mb-4">Get Support</h2>
          <p className="text-lg text-[#082952] max-w-2xl mx-auto">
            Our experienced librarians are here to help you find resources, develop research skills, and succeed in your studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#219ebc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#082952]">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] opacity-80 mb-3">{option.description}</p>
                <div className="text-sm text-[#219ebc] font-medium mb-4 flex items-center justify-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {option.availability}
                </div>
                <Button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] w-full">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-[#edf4ff] rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-[#219ebc] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">Visit Us</h3>
              <p className="text-[#082952] opacity-80">
                Main Library Building<br />
                Ground Floor<br />
                SINU Campus
              </p>
            </div>
            <div>
              <div className="bg-[#219ebc] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">Library Hours</h3>
              <p className="text-[#082952] opacity-80">
                Monday - Friday: 8AM - 10PM<br />
                Saturday: 9AM - 6PM<br />
                Sunday: 12PM - 8PM
              </p>
            </div>
            <div>
              <div className="bg-[#219ebc] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">Contact Info</h3>
              <p className="text-[#082952] opacity-80">
                Phone: +677 30123<br />
                Email: library@sinu.edu.sb<br />
                Reference Desk: Ext. 456
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
