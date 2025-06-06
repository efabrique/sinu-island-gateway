
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, AlertTriangle, Clock, MapPin } from 'lucide-react';

const EmergencySupport = () => {
  const emergencyContacts = [
    {
      title: "Police Emergency",
      number: "999",
      description: "For immediate police assistance"
    },
    {
      title: "Medical Emergency",
      number: "911",
      description: "Ambulance and medical emergencies"
    },
    {
      title: "SINU Security",
      number: "+677 123-SAFE",
      description: "Campus security and safety"
    },
    {
      title: "International Student Emergency",
      number: "+677 123-HELP",
      description: "24/7 international student crisis line"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-[#ffb703] p-4 rounded-full">
                <AlertTriangle className="h-12 w-12 text-[#082952]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Emergency Support & Safety
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Your safety is our top priority. Know who to contact and what to do in case of emergencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="bg-[#edf4ff] border-[#219ebc] text-center shadow-lg">
                <CardHeader>
                  <div className="bg-[#219ebc] p-3 rounded-full w-fit mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-[#082952]">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#219ebc] mb-2">{contact.number}</div>
                  <p className="text-[#082952] text-sm">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-[#219ebc] text-white border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 mr-3 text-[#ffb703]" />
                  <CardTitle className="text-xl">24/7 Crisis Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-[#edf4ff]">
                  Our crisis support team is available around the clock for urgent situations 
                  requiring immediate assistance.
                </p>
                <ul className="space-y-2 text-[#edf4ff] mb-6">
                  <li>• Mental health crises</li>
                  <li>• Safety concerns</li>
                  <li>• Legal emergencies</li>
                  <li>• Family emergencies back home</li>
                </ul>
                <Button className="bg-[#ffb703] text-[#082952] hover:bg-[#d7a12c] w-full">
                  Contact Crisis Team
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#edf4ff] border-[#8ecae6] shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 mr-3 text-[#219ebc]" />
                  <CardTitle className="text-xl text-[#082952]">Safety Resources</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-[#082952]">
                  Access important safety information and resources to help you stay safe 
                  on and off campus.
                </p>
                <ul className="space-y-2 text-[#082952] mb-6">
                  <li>• Campus safety guide</li>
                  <li>• Emergency procedures</li>
                  <li>• Safety escort services</li>
                  <li>• Personal safety tips</li>
                </ul>
                <Button variant="outline" className="border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-white w-full">
                  Download Safety Guide
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#ffb703] text-[#082952] rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Emergency Preparedness</h3>
              <p className="max-w-3xl mx-auto">
                Being prepared for emergencies can make all the difference. Follow these important steps 
                to ensure your safety and peace of mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Keep Important Numbers</h4>
                <p className="text-sm">Save all emergency contacts in your phone and keep a written copy</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Register Your Details</h4>
                <p className="text-sm">Keep your contact information and emergency contacts updated</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Know Your Location</h4>
                <p className="text-sm">Familiarize yourself with campus and local area emergency procedures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySupport;
