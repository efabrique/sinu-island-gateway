import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';

const ContactCollaboration = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "indigenous.research@sinu.edu.sb",
      description: "General inquiries and collaboration opportunities"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+677 30 760",
      description: "Direct line to our research coordination office"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "SINU Campus, Ranadi, Honiara",
      description: "Indigenous Knowledge Research Network Office"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Contact & Collaboration
          </h2>
          <p className="text-xl text-[#219ebc] max-w-4xl mx-auto leading-relaxed">
            We welcome opportunities to collaborate with Indigenous communities, researchers, 
            and institutions who share our commitment to respectful Indigenous knowledge research.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-[#082952] mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white border-[#8ecae6]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#ffb703] rounded-full flex items-center justify-center shrink-0">
                        <info.icon className="h-6 w-6 text-[#082952]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#082952] mb-1">
                          {info.title}
                        </h4>
                        <p className="text-[#219ebc] font-semibold mb-2">
                          {info.details}
                        </p>
                        <p className="text-[#082952] text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#8ecae6]">
              <h4 className="text-xl font-bold text-[#082952] mb-4">
                Research Collaboration Opportunities
              </h4>
              <ul className="space-y-3 text-[#219ebc]">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-[#d7a12c]" />
                  <span>Community-based research partnerships</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-[#d7a12c]" />
                  <span>Indigenous knowledge documentation projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-[#d7a12c]" />
                  <span>International research collaborations</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-[#d7a12c]" />
                  <span>Student research opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white border-[#8ecae6]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#082952] mb-6">
                  Express Your Interest
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#082952] font-semibold mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="Your first name"
                        className="border-[#8ecae6] focus:border-[#219ebc]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#082952] font-semibold mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Your last name"
                        className="border-[#8ecae6] focus:border-[#219ebc]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[#082952] font-semibold mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-[#8ecae6] focus:border-[#219ebc]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[#082952] font-semibold mb-2">
                      Organization/Institution
                    </label>
                    <Input 
                      placeholder="Your organization or institution"
                      className="border-[#8ecae6] focus:border-[#219ebc]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[#082952] font-semibold mb-2">
                      Research Interest/Collaboration Proposal
                    </label>
                    <Textarea 
                      rows={5}
                      placeholder="Tell us about your research interests or collaboration proposal..."
                      className="border-[#8ecae6] focus:border-[#219ebc]"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCollaboration;