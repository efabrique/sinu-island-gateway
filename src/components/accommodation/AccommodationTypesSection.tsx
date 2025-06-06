
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Home, Users, MapPin } from 'lucide-react';

const AccommodationTypesSection = () => {
  const accommodationTypes = [
    {
      title: "Residential Halls",
      description: "Traditional dormitory-style accommodation with shared facilities and a strong community atmosphere.",
      icon: Building,
      features: ["Shared bathroom facilities", "Common kitchen and dining areas", "Study rooms", "Social spaces"],
      price: "From $150/week",
      color: "#ffb703"
    },
    {
      title: "Apartment Style",
      description: "Self-contained units with private bathrooms and kitchenettes, perfect for independent living.",
      icon: Home,
      features: ["Private bathroom", "Kitchenette", "Study desk", "Storage space"],
      price: "From $200/week",
      color: "#219ebc"
    },
    {
      title: "Shared Apartments",
      description: "Share a fully equipped apartment with other students while maintaining your privacy.",
      icon: Users,
      features: ["Shared living areas", "Private bedroom", "Full kitchen", "Laundry facilities"],
      price: "From $175/week",
      color: "#8ecae6"
    },
    {
      title: "Off-Campus Housing",
      description: "Assistance finding quality accommodation in the local community near the university.",
      icon: MapPin,
      features: ["Local community living", "Various price ranges", "Public transport access", "Shopping nearby"],
      price: "From $120/week",
      color: "#d7a12c"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
              Accommodation Options
            </h2>
            <p className="text-lg text-[#082952] max-w-3xl mx-auto">
              Choose from a variety of accommodation types to suit your lifestyle, budget, and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodationTypes.map((type, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: type.color }}>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div 
                      className="p-3 rounded-full mr-4"
                      style={{ backgroundColor: type.color }}
                    >
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-[#082952] text-xl">{type.title}</CardTitle>
                      <p className="text-[#219ebc] font-semibold">{type.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#082952] mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#082952]">Features:</h4>
                    <ul className="space-y-1">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-[#082952]">
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: type.color }}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationTypesSection;
