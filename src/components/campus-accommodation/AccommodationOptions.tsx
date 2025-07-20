import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, Utensils, Home } from 'lucide-react';

export const AccommodationOptions = () => {
  const accommodationTypes = [
    {
      title: "Residential Colleges",
      description: "Traditional college living with catered meals and strong community bonds. Perfect for first-year students seeking a comprehensive university experience.",
      icon: Building,
      features: [
        "Catered meals included",
        "Strong academic support",
        "Traditional college experience",
        "Structured community programs"
      ],
      color: '#ffb703'
    },
    {
      title: "Independent Apartments",
      description: "Modern apartment-style accommodation offering independence and flexibility. Ideal for students who prefer self-catered living.",
      icon: Home,
      features: [
        "Self-catered accommodation",
        "Modern kitchen facilities",
        "Private or shared living",
        "Flexible lifestyle options"
      ],
      color: '#219ebc'
    },
    {
      title: "Shared Housing",
      description: "Cost-effective shared accommodation with fellow students. Great opportunity to build friendships while sharing living costs.",
      icon: Users,
      features: [
        "Affordable shared costs",
        "Built-in social network",
        "Shared common areas",
        "Community kitchen facilities"
      ],
      color: '#8ecae6'
    },
    {
      title: "Studio Apartments",
      description: "Private studio accommodation for students seeking complete independence and privacy while staying connected to campus life.",
      icon: Utensils,
      features: [
        "Complete privacy",
        "Ensuite bathroom",
        "Kitchenette included",
        "Study area provided"
      ],
      color: '#d7a12c'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#082952' }}>
              Accommodation Options
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
              Choose from a variety of accommodation styles to suit your lifestyle, budget, and academic needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodationTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300" style={{ borderColor: type.color }}>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div 
                        className="p-3 rounded-lg mr-4"
                        style={{ backgroundColor: `${type.color}20` }}
                      >
                        <IconComponent className="h-6 w-6" style={{ color: type.color }} />
                      </div>
                      <CardTitle style={{ color: '#082952' }}>{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4" style={{ color: '#082952' }}>{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div 
                            className="w-2 h-2 rounded-full mr-3"
                            style={{ backgroundColor: type.color }}
                          ></div>
                          <span className="text-sm" style={{ color: '#082952' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};