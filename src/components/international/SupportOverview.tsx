
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Phone } from 'lucide-react';

const SupportOverview = () => {
  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Your Support Network at SINU
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              We understand that studying abroad can be challenging. Our dedicated team provides 
              comprehensive support to ensure your success and wellbeing throughout your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border-[#8ecae6] shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-[#ffb703] p-3 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-[#082952]">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#082952]">Emergency support available around the clock for urgent situations</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#8ecae6] shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-[#219ebc] p-3 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#082952]">On-Campus Services</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#082952]">Convenient location in the Student Services Building</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#8ecae6] shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-[#d7a12c] p-3 rounded-full w-fit mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#082952]">Multi-language Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#082952]">Support available in multiple languages to ensure clear communication</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 border border-[#8ecae6] shadow-lg">
            <h3 className="text-2xl font-bold text-[#082952] mb-4 text-center">
              International Student Services Office
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-[#219ebc] mb-3">Office Hours</h4>
                <ul className="space-y-2 text-[#082952]">
                  <li><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</li>
                  <li><strong>Saturday:</strong> 9:00 AM - 1:00 PM</li>
                  <li><strong>Sunday:</strong> Closed (Emergency only)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#219ebc] mb-3">Contact Information</h4>
                <ul className="space-y-2 text-[#082952]">
                  <li><strong>Phone:</strong> +677 123-4567</li>
                  <li><strong>Email:</strong> international.support@sinu.edu.sb</li>
                  <li><strong>Emergency:</strong> +677 999-8888</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportOverview;
