import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactArts = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: [
        "SINU Arts & Culture Centre",
        "Main Campus, Honiara",
        "Solomon Islands"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Reception: +677 123 4567",
        "Gallery: +677 123 4568",
        "Events: +677 123 4569"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "arts@sinu.edu.sb",
        "gallery@sinu.edu.sb",
        "events@sinu.edu.sb"
      ]
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "Mon-Fri: 8:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Events Only"
      ]
    }
  ];

  const departments = [
    {
      icon: Calendar,
      title: "Events & Programming",
      contact: "Maria Santos",
      email: "events@sinu.edu.sb",
      phone: "+677 123 4570",
      responsibilities: ["Festival Coordination", "Performance Scheduling", "Community Events", "Venue Bookings"]
    },
    {
      icon: Users,
      title: "Student Services",
      contact: "Dr. John Tavu",
      email: "student.arts@sinu.edu.sb", 
      phone: "+677 123 4571",
      responsibilities: ["Club Support", "Student Exhibitions", "Scholarship Information", "Academic Advising"]
    },
    {
      icon: MapPin,
      title: "Facilities & Gallery",
      contact: "Sarah Konga",
      email: "facilities@sinu.edu.sb",
      phone: "+677 123 4572",
      responsibilities: ["Studio Access", "Equipment Rental", "Gallery Exhibitions", "Space Reservations"]
    }
  ];

  const quickActions = [
    {
      title: "Schedule a Tour",
      description: "Visit our facilities and meet our staff",
      action: "Book Tour"
    },
    {
      title: "Submit Exhibition Proposal",
      description: "Propose an exhibition for our gallery",
      action: "Submit Proposal"
    },
    {
      title: "Join Mailing List",
      description: "Stay updated on events and opportunities",
      action: "Subscribe"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Connect with Arts & Culture
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Ready to explore your creative side? Contact our arts and culture team for information 
            about programs, events, facilities, or to discuss how you can get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
              General Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="transition-all duration-300 hover:shadow-md border"
                  style={{ 
                    backgroundColor: '#edf4ff',
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

            {/* Quick Actions */}
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#082952' }}>
              Quick Actions
            </h4>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border"
                  style={{ 
                    backgroundColor: '#edf4ff',
                    borderColor: '#8ecae6'
                  }}
                >
                  <div>
                    <h5 className="font-medium" style={{ color: '#082952' }}>
                      {action.title}
                    </h5>
                    <p className="text-sm" style={{ color: '#082952' }}>
                      {action.description}
                    </p>
                  </div>
                  <Button 
                    size="sm"
                    style={{ 
                      backgroundColor: '#ffb703',
                      borderColor: '#ffb703',
                      color: '#082952'
                    }}
                  >
                    {action.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Department Contacts */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
              Department Contacts
            </h3>
            <div className="space-y-6">
              {departments.map((dept, index) => (
                <Card 
                  key={index}
                  className="transition-all duration-300 hover:shadow-lg border"
                  style={{ 
                    backgroundColor: '#ffffff',
                    borderColor: '#8ecae6'
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#d7a12c' }}
                      >
                        <dept.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2" style={{ color: '#082952' }}>
                          {dept.title}
                        </h4>
                        <div className="mb-3">
                          <p className="font-medium" style={{ color: '#082952' }}>
                            {dept.contact}
                          </p>
                          <p className="text-sm" style={{ color: '#082952' }}>
                            {dept.email} • {dept.phone}
                          </p>
                        </div>
                        <div>
                          <h5 className="font-medium mb-1" style={{ color: '#082952' }}>
                            Responsibilities:
                          </h5>
                          <div className="grid grid-cols-2 gap-1">
                            {dept.responsibilities.map((resp, idx) => (
                              <div 
                                key={idx} 
                                className="text-sm flex items-center gap-2"
                                style={{ color: '#082952' }}
                              >
                                <div 
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: '#219ebc' }}
                                ></div>
                                {resp}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Visit Us Section */}
            <div 
              className="mt-8 p-6 rounded-xl"
              style={{ backgroundColor: '#edf4ff', border: '2px solid #ffb703' }}
            >
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#082952' }}>
                Visit Our Cultural Centre
              </h4>
              <p className="text-sm mb-4" style={{ color: '#082952' }}>
                Experience our facilities firsthand with a guided tour. See our studios, gallery spaces, 
                performance venues, and meet our faculty and current students.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="flex-1"
                  style={{ 
                    backgroundColor: '#219ebc',
                    borderColor: '#219ebc',
                    color: '#ffffff'
                  }}
                >
                  Schedule Campus Tour
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1"
                  style={{ 
                    borderColor: '#d7a12c',
                    color: '#d7a12c'
                  }}
                >
                  Virtual Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArts;