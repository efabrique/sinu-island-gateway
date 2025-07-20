import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send
} from "lucide-react";

export const ContactPartnerships = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "partnerships@sinu.edu.sb"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: "+677 30123"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      details: "Solomon Islands National University, Kukum Campus, Honiara"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Office Hours",
      details: "Monday - Friday: 8:00 AM - 5:00 PM"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Contact Our Partnerships Team
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Ready to explore partnership opportunities? Get in touch with our dedicated 
            partnerships team to discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
              Get in Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="border-2"
                  style={{ 
                    borderColor: '#8ecae6',
                    backgroundColor: '#edf4ff'
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div 
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-3"
                        style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                      >
                        {info.icon}
                      </div>
                      <h4 className="font-semibold" style={{ color: '#082952' }}>
                        {info.title}
                      </h4>
                    </div>
                    <p className="text-sm" style={{ color: '#082952' }}>
                      {info.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card 
              className="border-2 p-6"
              style={{ 
                borderColor: '#ffb703',
                backgroundColor: '#edf4ff'
              }}
            >
              <h4 className="text-lg font-bold mb-3" style={{ color: '#082952' }}>
                Partnership Inquiry Form
              </h4>
              <p className="text-sm mb-4" style={{ color: '#082952' }}>
                Fill out this form and we'll get back to you within 48 hours to discuss 
                potential collaboration opportunities.
              </p>
              <Button 
                variant="outline"
                style={{ 
                  borderColor: '#d7a12c',
                  color: '#d7a12c'
                }}
                className="hover:bg-yellow-50"
              >
                Download Form
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>

          {/* Quick Contact Form */}
          <Card 
            className="border-2"
            style={{ 
              borderColor: '#219ebc',
              backgroundColor: '#ffffff'
            }}
          >
            <CardHeader>
              <CardTitle style={{ color: '#082952' }}>
                Quick Contact Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block" style={{ color: '#082952' }}>
                    First Name
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block" style={{ color: '#082952' }}>
                    Last Name
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block" style={{ color: '#082952' }}>
                  Organization
                </label>
                <Input placeholder="Enter your organization name" />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block" style={{ color: '#082952' }}>
                  Email Address
                </label>
                <Input type="email" placeholder="Enter your email address" />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block" style={{ color: '#082952' }}>
                  Partnership Interest
                </label>
                <Input placeholder="Brief description of your partnership interest" />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block" style={{ color: '#082952' }}>
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your partnership ideas and objectives"
                  rows={4}
                />
              </div>

              <Button 
                className="w-full"
                style={{ 
                  backgroundColor: '#ffb703',
                  color: '#ffffff'
                }}
                size="lg"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};