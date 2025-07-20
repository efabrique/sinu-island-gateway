import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

export const ContactAccommodation = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#082952' }}>
              Get in Touch
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
              Have questions about accommodation? Our friendly team is here to help you find the perfect home for your university journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card style={{ borderColor: '#219ebc' }}>
              <CardHeader>
                <CardTitle style={{ color: '#082952' }}>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <div 
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: 'rgba(33, 158, 188, 0.1)' }}
                  >
                    <Phone className="h-5 w-5" style={{ color: '#219ebc' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Phone</h4>
                    <p style={{ color: '#082952' }}>+677 30123 (Main Line)</p>
                    <p style={{ color: '#082952' }}>+677 30145 (After Hours)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div 
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: 'rgba(33, 158, 188, 0.1)' }}
                  >
                    <Mail className="h-5 w-5" style={{ color: '#219ebc' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Email</h4>
                    <p style={{ color: '#082952' }}>accommodation@sinu.edu.sb</p>
                    <p style={{ color: '#082952' }}>housing@sinu.edu.sb</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div 
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: 'rgba(33, 158, 188, 0.1)' }}
                  >
                    <MapPin className="h-5 w-5" style={{ color: '#219ebc' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Address</h4>
                    <p style={{ color: '#082952' }}>
                      Student Accommodation Office<br />
                      SINU Campus, Ranadi<br />
                      Honiara, Solomon Islands
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div 
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: 'rgba(33, 158, 188, 0.1)' }}
                  >
                    <Clock className="h-5 w-5" style={{ color: '#219ebc' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Office Hours</h4>
                    <p style={{ color: '#082952' }}>
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed (Emergency contact available)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card style={{ borderColor: '#ffb703' }}>
              <CardHeader>
                <CardTitle style={{ color: '#082952' }}>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full justify-start hover:shadow-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: '#ffb703',
                    color: '#082952',
                    border: 'none'
                  }}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start Your Application
                </Button>

                <Button 
                  variant="outline"
                  className="w-full justify-start hover:shadow-lg transition-all duration-300"
                  style={{ 
                    borderColor: '#219ebc',
                    color: '#219ebc'
                  }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule a Tour
                </Button>

                <Button 
                  variant="outline"
                  className="w-full justify-start hover:shadow-lg transition-all duration-300"
                  style={{ 
                    borderColor: '#8ecae6',
                    color: '#8ecae6'
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Request a Callback
                </Button>

                <div 
                  className="p-4 rounded-lg mt-6"
                  style={{ backgroundColor: 'rgba(255, 183, 3, 0.1)' }}
                >
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Need Immediate Help?</h4>
                  <p className="text-sm mb-3" style={{ color: '#082952' }}>
                    Our accommodation team is ready to assist with any questions or concerns.
                  </p>
                  <p className="text-sm font-medium" style={{ color: '#ffb703' }}>
                    Call us now: +677 30123
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card 
            className="p-8"
            style={{ backgroundColor: 'rgba(142, 202, 230, 0.1)', borderColor: '#8ecae6' }}
          >
            <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#082952' }}>
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>When should I apply?</h4>
                <p className="text-sm" style={{ color: '#082952' }}>
                  Applications open in August for the following year. Apply by December 31st for priority consideration.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Can I choose my roommate?</h4>
                <p className="text-sm" style={{ color: '#082952' }}>
                  Yes, you can request a specific roommate in your application. Both students must request each other.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>What if I have dietary requirements?</h4>
                <p className="text-sm" style={{ color: '#082952' }}>
                  Our catering services accommodate various dietary needs. Include details in your application.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Is parking available?</h4>
                <p className="text-sm" style={{ color: '#082952' }}>
                  Limited parking is available on campus. Permits are required and allocated on a first-come basis.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};