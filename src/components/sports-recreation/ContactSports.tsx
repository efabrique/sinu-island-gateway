import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSports = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: [
        "SINU Sports & Recreation Centre",
        "Main Campus, Honiara",
        "Solomon Islands"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Reception: +677 123 4567",
        "Bookings: +677 123 4568",
        "Emergency: +677 123 4569"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "sports@sinu.edu.sb",
        "recreation@sinu.edu.sb",
        "bookings@sinu.edu.sb"
      ]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Mon-Fri: 6:00 AM - 11:00 PM",
        "Saturday: 8:00 AM - 10:00 PM",
        "Sunday: 8:00 AM - 8:00 PM"
      ]
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Book Facilities",
      description: "Reserve courts, pools, or equipment",
      action: "Make Booking"
    },
    {
      icon: Users,
      title: "Join Programs",
      description: "Sign up for classes and activities",
      action: "Register Now"
    },
    {
      icon: Phone,
      title: "Get Information",
      description: "Speak with our friendly staff",
      action: "Call Us"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Get in Touch
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Ready to start your fitness journey? Contact our sports and recreation team 
            for information, bookings, or to discuss your individual needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="transition-all duration-300 hover:shadow-md border"
                  style={{ 
                    backgroundColor: '#ffffff',
                    borderColor: '#8ecae6'
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: '#219ebc' }}
                      >
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg" style={{ color: '#082952' }}>
                        {info.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm" style={{ color: '#082952' }}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
              Quick Actions
            </h3>
            <div className="space-y-6">
              {quickActions.map((action, index) => (
                <Card 
                  key={index}
                  className="transition-all duration-300 hover:shadow-lg border"
                  style={{ 
                    backgroundColor: '#ffffff',
                    borderColor: '#8ecae6'
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: '#ffb703' }}
                      >
                        <action.icon className="h-7 w-7" style={{ color: '#082952' }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-1" style={{ color: '#082952' }}>
                          {action.title}
                        </h4>
                        <p className="text-sm mb-3" style={{ color: '#082952' }}>
                          {action.description}
                        </p>
                        <Button 
                          size="sm"
                          style={{ 
                            backgroundColor: '#219ebc',
                            borderColor: '#219ebc',
                            color: '#ffffff'
                          }}
                        >
                          {action.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div 
              className="mt-8 p-6 rounded-xl"
              style={{ backgroundColor: '#ffffff', border: '2px solid #d7a12c' }}
            >
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#082952' }}>
                Need Help Getting Started?
              </h4>
              <p className="text-sm mb-4" style={{ color: '#082952' }}>
                Our friendly staff are here to help you find the right programs and facilities 
                for your fitness goals. We offer free consultations and facility tours for new members.
              </p>
              <Button 
                className="w-full"
                style={{ 
                  backgroundColor: '#d7a12c',
                  borderColor: '#d7a12c',
                  color: '#ffffff'
                }}
              >
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSports;