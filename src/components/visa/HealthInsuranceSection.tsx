
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Heart, Phone, CheckCircle } from 'lucide-react';

const HealthInsuranceSection = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Health Insurance & Medical Requirements
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Maintain adequate health coverage throughout your studies. Health insurance is mandatory for all international students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-[#edf4ff]">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#219ebc] rounded-full mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Insurance Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-3">Minimum Coverage Required:</h4>
                    <ul className="space-y-2 text-sm text-[#082952]">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#219ebc] mr-2 mt-0.5 flex-shrink-0" />
                        Hospital and medical services
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#219ebc] mr-2 mt-0.5 flex-shrink-0" />
                        Emergency ambulance services
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#219ebc] mr-2 mt-0.5 flex-shrink-0" />
                        Prescription medications
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#219ebc] mr-2 mt-0.5 flex-shrink-0" />
                        Mental health services
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-[#edf4ff]">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#ffb703] rounded-full mx-auto mb-4">
                  <Heart className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-center text-[#082952] text-xl">Health Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-3">Available Services:</h4>
                    <ul className="space-y-2 text-sm text-[#082952]">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#219ebc] mr-2 mt-0.5 flex-shrink-0" />
                        Campus health center
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#219ebc] mr-2 mt-0.5 flex-shrink-0" />
                        24/7 emergency services
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#219ebc] mr-2 mt-0.5 flex-shrink-0" />
                        Specialist consultations
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#219ebc] mr-2 mt-0.5 flex-shrink-0" />
                        Counseling and support services
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#219ebc] rounded-lg p-8 text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-[#ffb703] rounded-full mx-auto mb-6">
              <Phone className="h-10 w-10 text-[#082952]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Emergency Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div>
                <h4 className="font-semibold text-[#ffb703] mb-2">Emergency Services</h4>
                <p className="text-lg font-bold">911</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#ffb703] mb-2">Campus Health Center</h4>
                <p className="text-lg font-bold">+677 123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#ffb703] mb-2">International Student Support</h4>
                <p className="text-lg font-bold">+677 123-4568</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthInsuranceSection;
