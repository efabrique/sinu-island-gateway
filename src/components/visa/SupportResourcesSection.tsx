
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, ExternalLink, Users, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SupportResourcesSection = () => {
  return (
    <section className="py-16 bg-[#edf4ff] relative">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Support & Resources
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Get the help you need throughout your visa journey. Our support team is here to assist you at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#219ebc] rounded-full mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-[#082952] text-lg">International Student Office</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 text-center">
                  <div className="flex items-center justify-center text-[#082952]">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">+677 123-4569</span>
                  </div>
                  <div className="flex items-center justify-center text-[#082952]">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-sm">visa@sinu.edu.sb</span>
                  </div>
                  <div className="flex items-start justify-center text-[#082952]">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                    <span className="text-sm">Student Services Building, Level 2</span>
                  </div>
                  <Button className="w-full mt-4 bg-[#219ebc] hover:bg-[#219ebc]/90 text-white">
                    Contact Office
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <HelpCircle className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-lg">24/7 Emergency Support</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 text-center">
                  <div className="flex items-center justify-center text-[#082952]">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">+677 911-HELP</span>
                  </div>
                  <div className="flex items-center justify-center text-[#082952]">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-sm">emergency@sinu.edu.sb</span>
                  </div>
                  <p className="text-sm text-[#082952]">Available for urgent visa and immigration matters</p>
                  <Button className="w-full mt-4 bg-[#ffb703] hover:bg-[#ffb703]/90 text-[#082952]">
                    Emergency Line
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#219ebc] hover:shadow-lg transition-shadow bg-white relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&q=80&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-[#8ecae6] rounded-full mx-auto mb-4">
                  <ExternalLink className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-lg">Online Resources</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-[#082952] mb-1">Visa Portal</h5>
                    <p className="text-sm text-[#082952]">Online application tracking</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#082952] mb-1">FAQ Database</h5>
                    <p className="text-sm text-[#082952]">Common questions answered</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#082952] mb-1">Document Checklist</h5>
                    <p className="text-sm text-[#082952]">Interactive preparation guide</p>
                  </div>
                  <Button className="w-full mt-4 bg-[#8ecae6] hover:bg-[#8ecae6]/90 text-[#082952]">
                    Access Portal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#219ebc] rounded-lg p-8 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Support Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-[#ffb703] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-[#082952]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Peer Mentoring</h4>
                  <p className="text-[#8ecae6] text-sm">Connect with experienced international students</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#ffb703] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <HelpCircle className="h-6 w-6 text-[#082952]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Workshops</h4>
                  <p className="text-[#8ecae6] text-sm">Regular information sessions on visa matters</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#ffb703] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="h-6 w-6 text-[#082952]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Phone Consultations</h4>
                  <p className="text-[#8ecae6] text-sm">Book one-on-one visa advice sessions</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#ffb703] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ExternalLink className="h-6 w-6 text-[#082952]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Government Links</h4>
                  <p className="text-[#8ecae6] text-sm">Direct access to official immigration resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportResourcesSection;
