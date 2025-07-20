import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, Zap, Dumbbell, BookOpen, Shield, Music, Coffee, Car, Home } from 'lucide-react';

export const WhatsIncluded = () => {
  const includedFeatures = [
    {
      icon: Home,
      title: "Fully Furnished Room",
      description: "Complete with bed, desk, wardrobe, and study chair"
    },
    {
      icon: Zap,
      title: "All Utilities",
      description: "Electricity, water, and unlimited high-speed internet"
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "Security, maintenance, and wellbeing assistance"
    },
    {
      icon: Dumbbell,
      title: "Fitness Facilities",
      description: "Gym access and recreational facilities"
    },
    {
      icon: BookOpen,
      title: "Study Spaces",
      description: "Quiet study rooms and collaborative learning areas"
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Cinema rooms, music practice rooms, and game areas"
    },
    {
      icon: Coffee,
      title: "Common Areas",
      description: "Communal kitchens, lounges, and social spaces"
    },
    {
      icon: Car,
      title: "Convenient Location",
      description: "Walking distance to campus and public transport"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#082952' }}>
              What's Included in Your Fees
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
              Your accommodation fee covers everything you need for a comfortable and successful university experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300" style={{ borderColor: '#219ebc' }}>
                  <CardHeader>
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(33, 158, 188, 0.1)' }}
                    >
                      <IconComponent className="h-8 w-8" style={{ color: '#219ebc' }} />
                    </div>
                    <CardTitle className="text-lg" style={{ color: '#082952' }}>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm" style={{ color: '#082952' }}>{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="mt-12" style={{ backgroundColor: 'rgba(255, 183, 3, 0.1)', borderColor: '#ffb703' }}>
            <CardHeader>
              <CardTitle className="text-center" style={{ color: '#082952' }}>
                Year-Round Programs & Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Social Events</h4>
                  <p className="text-sm" style={{ color: '#082952' }}>Regular social activities, cultural celebrations, and community gatherings</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Academic Support</h4>
                  <p className="text-sm" style={{ color: '#082952' }}>Study groups, tutoring sessions, and academic workshops</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Career Development</h4>
                  <p className="text-sm" style={{ color: '#082952' }}>Professional development workshops and networking events</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};