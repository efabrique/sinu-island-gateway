import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Calendar, FileText } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "ccadaptationlab@sinu.edu.sb",
      secondary: "For research inquiries and collaboration opportunities",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+677 30 124",
      secondary: "Research office hours: Mon-Fri 8:00 AM - 5:00 PM",
      action: "Call Now"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Climate Change Adaptation Lab",
      secondary: "School of Science, SINU Campus, Ranadi, Honiara",
      action: "Get Directions"
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Research Seminars",
      description: "Join our monthly climate adaptation research presentations",
      action: "View Schedule"
    },
    {
      icon: FileText,
      title: "Research Publications",
      description: "Access our latest research reports and publications",
      action: "Browse Publications"
    },
    {
      icon: Clock,
      title: "Consultation Services",
      description: "Request expert consultation on climate adaptation projects",
      action: "Book Consultation"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-[#219ebc] max-w-3xl mx-auto">
            Get in touch with our climate adaptation team to discuss research collaboration, 
            consultation services, or learn more about our work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#082952] mb-6">Get In Touch</h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-white border-[#8ecae6] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#219ebc] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#082952] mb-2">
                        {method.title}
                      </h4>
                      <p className="text-[#082952] font-medium mb-1">
                        {method.primary}
                      </p>
                      <p className="text-[#219ebc] text-sm mb-4">
                        {method.secondary}
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white"
                      >
                        {method.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions and Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#082952] mb-6">Quick Actions</h3>
            
            {quickActions.map((action, index) => (
              <Card key={index} className="bg-white border-[#8ecae6] hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#ffb703] w-10 h-10 rounded-lg flex items-center justify-center">
                      <action.icon className="h-5 w-5 text-[#082952]" />
                    </div>
                    <CardTitle className="text-lg text-[#082952]">{action.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-[#082952] mb-4">
                    {action.description}
                  </p>
                  <Button 
                    className="bg-[#8ecae6] hover:bg-[#219ebc] text-[#082952] hover:text-white"
                  >
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Office Hours */}
            <Card className="bg-gradient-to-r from-[#082952] to-[#219ebc] text-white">
              <CardHeader>
                <CardTitle className="text-xl">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="border-t border-white/20 pt-3 mt-4">
                    <p className="text-sm">
                      Field research activities may extend beyond regular hours. 
                      Emergency consultations available by appointment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-white rounded-lg p-8 border border-[#8ecae6] text-center">
          <h3 className="text-2xl font-bold text-[#082952] mb-4">Ready to Collaborate?</h3>
          <p className="text-[#082952] mb-6 max-w-2xl mx-auto">
            Whether you're a researcher, policymaker, community leader, or organization interested 
            in climate adaptation, we'd love to hear from you and explore collaboration opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952]"
            >
              Start a Collaboration
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white"
            >
              Learn About Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;