
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Info, AlertCircle } from 'lucide-react';

const PracticalInformation = () => {
  const essentials = [
    "Valid passport and student visa",
    "Health insurance documentation",
    "Academic transcripts and certificates",
    "Bank statements and financial proof",
    "Accommodation confirmation",
    "Emergency contact information"
  ];

  const tips = [
    {
      category: "Communication",
      advice: "English is widely spoken, but learning basic Pijin phrases will be greatly appreciated by locals."
    },
    {
      category: "Currency",
      advice: "Solomon Islands Dollar (SBD) is the local currency. ATMs are available, but carrying some cash is recommended."
    },
    {
      category: "Climate",
      advice: "Tropical climate year-round. Pack light, breathable clothing and don't forget sunscreen and insect repellent."
    },
    {
      category: "Transportation",
      advice: "Campus shuttles, local buses, and taxis are available. Walking is common and safe within campus areas."
    },
    {
      category: "Shopping",
      advice: "Local markets offer fresh produce and cultural items. Supermarkets are available for international products."
    },
    {
      category: "Technology",
      advice: "Mobile networks and internet are widely available. Consider getting a local SIM card for better rates."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Practical Information
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Essential information to help you prepare for your arrival and settle into life in Solomon Islands.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-[#ffb703] bg-[#edf4ff] shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-[#219ebc] mr-3" />
                  <CardTitle className="text-[#082952]">Pre-Arrival Checklist</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {essentials.map((item, index) => (
                    <li key={index} className="flex items-start text-[#082952]">
                      <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-[#219ebc] flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#8ecae6] bg-[#edf4ff] shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <AlertCircle className="h-6 w-6 text-[#ffb703] mr-3" />
                  <CardTitle className="text-[#082952]">Important Reminders</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-[#ffb703]/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Arrival Notification</h4>
                    <p className="text-[#082952] text-sm">Contact the International Student Office 48 hours before your arrival</p>
                  </div>
                  <div className="bg-[#219ebc]/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Emergency Contacts</h4>
                    <p className="text-[#082952] text-sm">Save emergency numbers and know your nearest hospital location</p>
                  </div>
                  <div className="bg-[#8ecae6]/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#082952] mb-2">Cultural Sensitivity</h4>
                    <p className="text-[#082952] text-sm">Respect local customs and ask questions when unsure</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-[#219ebc] bg-white shadow-lg">
            <CardHeader>
              <div className="flex items-center">
                <Info className="h-6 w-6 text-[#219ebc] mr-3" />
                <CardTitle className="text-[#082952]">Living in Solomon Islands - Essential Tips</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map((tip, index) => (
                  <div key={index} className="bg-[#edf4ff] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#219ebc] mb-2">{tip.category}</h4>
                    <p className="text-[#082952] text-sm">{tip.advice}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PracticalInformation;
