import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Calendar,
  Users
} from "lucide-react";

export const ContactSeminars = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "seminars@sinu.edu.sb"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: "+677 30456"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      details: "Research Office, Main Campus Building"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Office Hours",
      details: "Monday - Friday: 8:00 AM - 5:00 PM"
    }
  ];

  const inquiryTypes = [
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Schedule a Seminar",
      description: "Submit your proposal to present at one of our seminar series"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Collaboration Inquiry",
      description: "Explore opportunities for research collaboration and joint seminars"
    },
    {
      icon: <Send className="h-5 w-5" />,
      title: "Media Request",
      description: "Request access to recordings, transcripts, or interview opportunities"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Contact the Seminars Team
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Have questions about our seminars, want to propose a presentation, or need support? 
            Get in touch with our dedicated seminars coordination team.
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

            <h4 className="text-xl font-bold mb-4" style={{ color: '#082952' }}>
              Common Inquiries
            </h4>
            <div className="space-y-4">
              {inquiryTypes.map((inquiry, index) => (
                <Card 
                  key={index}
                  className="border-2"
                  style={{ 
                    borderColor: '#ffb703',
                    backgroundColor: '#edf4ff'
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div 
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-3 mt-1"
                        style={{ backgroundColor: '#ffb703', color: '#ffffff' }}
                      >
                        {inquiry.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1" style={{ color: '#082952' }}>
                          {inquiry.title}
                        </h5>
                        <p className="text-sm" style={{ color: '#082952' }}>
                          {inquiry.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card 
            className="border-2"
            style={{ 
              borderColor: '#219ebc',
              backgroundColor: '#ffffff'
            }}
          >
            <CardHeader>
              <CardTitle style={{ color: '#082952' }}>
                Seminar Inquiry Form
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
                  Email Address
                </label>
                <Input type="email" placeholder="Enter your email address" />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block" style={{ color: '#082952' }}>
                  Affiliation
                </label>
                <Input placeholder="Your institution or organization" />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block" style={{ color: '#082952' }}>
                  Inquiry Type
                </label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                  style={{ color: '#082952' }}
                >
                  <option value="">Select inquiry type</option>
                  <option value="schedule">Schedule a Seminar</option>
                  <option value="collaboration">Collaboration Inquiry</option>
                  <option value="media">Media Request</option>
                  <option value="general">General Question</option>
                  <option value="technical">Technical Support</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block" style={{ color: '#082952' }}>
                  Subject
                </label>
                <Input placeholder="Brief description of your inquiry" />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block" style={{ color: '#082952' }}>
                  Message
                </label>
                <Textarea 
                  placeholder="Please provide detailed information about your inquiry, including any specific requirements, dates, or questions you may have"
                  rows={5}
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
                Send Inquiry
                <Send className="ml-2 h-5 w-5" />
              </Button>

              <div className="text-center">
                <p className="text-xs" style={{ color: '#219ebc' }}>
                  We typically respond to inquiries within 24-48 hours during business days
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <Card 
            className="inline-block border-2 p-8 max-w-2xl mx-auto"
            style={{ 
              borderColor: '#d7a12c',
              backgroundColor: '#edf4ff'
            }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#082952' }}>
              Quick Actions
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                style={{ 
                  backgroundColor: '#219ebc',
                  color: '#ffffff'
                }}
              >
                Propose a Seminar
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                style={{ 
                  borderColor: '#d7a12c',
                  color: '#d7a12c'
                }}
              >
                Join Mailing List
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};