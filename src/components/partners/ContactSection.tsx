import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
              Get in Touch
            </h2>
            <p className="text-lg" style={{ color: '#082952' }}>
              Contact our International Programs team for assistance with partner universities and exchange applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg" style={{ backgroundColor: '#ffffff' }}>
              <CardHeader>
                <CardTitle style={{ color: '#082952' }}>
                  International Programs Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1" style={{ color: '#219ebc' }} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Address</h4>
                    <p style={{ color: '#082952' }}>
                      International Programs Office<br />
                      Solomon Islands National University<br />
                      Ranadi Campus, Honiara<br />
                      Solomon Islands
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-1" style={{ color: '#219ebc' }} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Phone</h4>
                    <p style={{ color: '#082952' }}>+677 30090</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-1" style={{ color: '#219ebc' }} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Email</h4>
                    <p style={{ color: '#082952' }}>exchange@sinu.edu.sb</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 mt-1" style={{ color: '#219ebc' }} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Office Hours</h4>
                    <p style={{ color: '#082952' }}>
                      Monday - Friday: 8:00 AM - 4:30 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg" style={{ backgroundColor: '#8ecae6' }}>
              <CardHeader>
                <CardTitle style={{ color: '#082952' }}>
                  Quick Inquiry
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p style={{ color: '#082952' }}>
                  Have questions about our partner universities or the exchange program? 
                  Send us a message and we'll get back to you within 24 hours.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full"
                    style={{ 
                      backgroundColor: '#219ebc', 
                      color: '#ffffff'
                    }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email Inquiry
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full"
                    style={{ 
                      borderColor: '#ffb703', 
                      color: '#ffb703',
                      backgroundColor: 'transparent'
                    }}
                  >
                    Book Appointment
                  </Button>
                </div>

                <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>
                    Information Sessions
                  </h4>
                  <p className="text-sm" style={{ color: '#082952' }}>
                    Join our monthly information sessions to learn more about exchange opportunities. 
                    Next session: <span className="font-semibold" style={{ color: '#219ebc' }}>
                    First Wednesday of every month at 2:00 PM
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;