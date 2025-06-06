
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from 'lucide-react';

const ContactInformation = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      info: "+677 123-4567",
      description: "Call us during business hours for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email Support",
      info: "international.support@sinu.edu.sb",
      description: "Send us your questions and we'll respond within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      info: "Available on Student Portal",
      description: "Chat with our support team online during business hours"
    },
    {
      icon: Calendar,
      title: "Book Appointment",
      info: "Online Booking System",
      description: "Schedule a one-on-one meeting with our advisors"
    }
  ];

  const officeLocations = [
    {
      name: "Main Campus Office",
      address: "Student Services Building, Level 2, Room 201",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM"
    },
    {
      name: "Satellite Campus Office",
      address: "Henderson Campus, Administration Block",
      hours: "Monday, Wednesday, Friday: 9:00 AM - 4:00 PM"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              We're here to help! Reach out to us through any of these convenient methods 
              and our dedicated team will assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-white border-[#8ecae6] text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-[#219ebc] p-3 rounded-full w-fit mx-auto mb-4">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-[#082952]">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-[#219ebc] mb-2">{method.info}</div>
                  <p className="text-[#082952] text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {officeLocations.map((office, index) => (
              <Card key={index} className="bg-white border-[#8ecae6] shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-[#ffb703] p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-[#082952]" />
                    </div>
                    <CardTitle className="text-xl text-[#082952]">{office.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] mb-2"><strong>Address:</strong> {office.address}</p>
                  <p className="text-[#082952] mb-4"><strong>Hours:</strong> {office.hours}</p>
                  <Button className="bg-[#219ebc] hover:bg-[#8ecae6] text-white w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-[#219ebc] text-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Quick Access</h3>
                <p className="text-[#edf4ff] mb-6">
                  Access our most popular services and resources quickly through these direct links.
                </p>
                <div className="space-y-3">
                  <Button className="bg-[#ffb703] text-[#082952] hover:bg-[#d7a12c] w-full">
                    Student Portal Login
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#219ebc] w-full">
                    Download Forms
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#219ebc] w-full">
                    FAQ & Resources
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 mr-2 text-[#ffb703]" />
                    <span className="font-semibold">Regular Hours</span>
                  </div>
                  <ul className="space-y-2 text-[#edf4ff]">
                    <li><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</li>
                    <li><strong>Saturday:</strong> 9:00 AM - 1:00 PM</li>
                    <li><strong>Sunday:</strong> Closed</li>
                    <li><strong>Emergency:</strong> 24/7 Available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
