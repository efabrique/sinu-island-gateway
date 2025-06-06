
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, DollarSign, Bus, Heart } from 'lucide-react';

const OffCampusSection = () => {
  const offCampusOptions = [
    {
      title: "Private Rentals",
      description: "Independent apartments and houses in the local community",
      icon: MapPin,
      benefits: ["Complete independence", "Choice of location", "Various price ranges", "Local community integration"],
      color: "#ffb703"
    },
    {
      title: "Shared Housing",
      description: "Share a house or apartment with other students or locals",
      icon: Heart,
      benefits: ["Cost-effective option", "Social living arrangement", "Cultural exchange", "Flexible lease terms"],
      color: "#219ebc"
    },
    {
      title: "Homestay Programs",
      description: "Live with a local Solomon Islands family",
      icon: Bus,
      benefits: ["Cultural immersion", "Meals often included", "Family support", "Language practice"],
      color: "#8ecae6"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Off-Campus Housing
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Explore housing options in the local community and experience life as a local resident 
              while pursuing your studies at SINU.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {offCampusOptions.map((option, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: option.color }}>
                <CardHeader className="text-center">
                  <div 
                    className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: option.color }}
                  >
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-[#082952] text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] mb-4 text-center">{option.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#082952] text-center">Benefits:</h4>
                    <ul className="space-y-1">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-[#082952]">
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: option.color }}></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-[#d7a12c] bg-[#d7a12c]/10">
            <CardHeader>
              <CardTitle className="text-[#082952] text-center">Housing Assistance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-[#082952] mb-3">We Help You Find:</h4>
                  <ul className="space-y-2 text-[#082952]">
                    <li>• Verified rental properties</li>
                    <li>• Suitable roommates</li>
                    <li>• Transportation options</li>
                    <li>• Lease agreement guidance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#082952] mb-3">Support Services:</h4>
                  <ul className="space-y-2 text-[#082952]">
                    <li>• Property inspection assistance</li>
                    <li>• Legal advice and support</li>
                    <li>• Emergency accommodation</li>
                    <li>• Ongoing housing support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OffCampusSection;
