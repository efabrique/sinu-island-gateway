import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Calendar, Download, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      content: "goglobal@sinu.edu.sb",
      action: "Send Email",
      href: "mailto:goglobal@sinu.edu.sb"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+677 30560 (ask for Go Global)",
      action: "Call Now",
      href: "tel:+67730560"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "SINU Campus, Honiara, Solomon Islands",
      action: "Get Directions",
      href: "#"
    },
    {
      icon: Calendar,
      title: "Drop-in Sessions",
      content: "Weekly information sessions available",
      action: "View Schedule",
      href: "#"
    }
  ];

  const resources = [
    {
      title: "Exchange Program Application Flyer",
      description: "Complete guide to semester and year-long exchange eligibility requirements",
      type: "PDF",
      size: "448KB"
    },
    {
      title: "Study Plan Proposal Form",
      description: "Required form for course credit approval",
      type: "PDF",
      size: "554KB"
    },
    {
      title: "Eligibility Requirements Flyer",
      description: "Quick reference guide for eligibility criteria",
      type: "PDF",
      size: "327KB"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
              Get in Touch
            </h2>
            <p className="text-lg" style={{ color: '#082952' }}>
              Ready to start your exchange journey? Contact our Go Global team for personalized guidance and support.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#ffffff' }}>
                  <CardHeader>
                    <div 
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#8ecae6' }}
                    >
                      <IconComponent className="w-8 h-8" style={{ color: '#082952' }} />
                    </div>
                    <CardTitle className="text-lg" style={{ color: '#082952' }}>
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm" style={{ color: '#082952' }}>
                      {method.content}
                    </p>
                    <Button 
                      size="sm" 
                      className="bg-[#219ebc] hover:bg-[#082952] text-white"
                      asChild
                    >
                      <a href={method.href}>
                        {method.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Information Sessions */}
          <Card className="border-none shadow-lg mb-12" style={{ backgroundColor: '#ffb703' }}>
            <CardHeader>
              <CardTitle className="text-center text-2xl" style={{ color: '#082952' }}>
                Attend an Information Session
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg mb-6" style={{ color: '#082952' }}>
                These sessions are the best way to learn about the opportunities available and the program that's the best fit for you. 
                We'll show you how to start your application and answer any questions you may have.
              </p>
              <Button 
                size="lg" 
                className="bg-[#082952] hover:bg-[#219ebc] text-white px-8 py-3"
              >
                Find Session Times
              </Button>
            </CardContent>
          </Card>

          {/* Resources */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#082952' }}>
              Download Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#ffffff' }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Download className="w-6 h-6 mt-1" style={{ color: '#219ebc' }} />
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>
                          {resource.title}
                        </h4>
                        <p className="text-sm mb-2" style={{ color: '#082952' }}>
                          {resource.description}
                        </p>
                        <p className="text-xs" style={{ color: '#219ebc' }}>
                          {resource.type} • {resource.size}
                        </p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white"
                    >
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg" style={{ borderLeft: '4px solid #ffb703' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#082952' }}>
                Do you have a valid passport?
              </h4>
              <p className="text-sm" style={{ color: '#082952' }}>
                If you don't travel overseas regularly, you may discover that your passport has expired or is due to expire while you are away. 
                Please ensure your passport is valid for the duration of your exchange program.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg" style={{ borderLeft: '4px solid #219ebc' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#082952' }}>
                International Students
              </h4>
              <p className="text-sm" style={{ color: '#082952' }}>
                While participating in the semester exchange program, you are required to continue to meet your Solomon Islands student visa conditions 
                and any other applicable visa requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;