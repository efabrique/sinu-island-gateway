import React from 'react';
import { Activity, Users, Trophy, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SportsOverview = () => {
  const highlights = [
    {
      icon: Activity,
      title: "Modern Facilities",
      description: "State-of-the-art sports complexes and recreational facilities"
    },
    {
      icon: Users,
      title: "Inclusive Programs",
      description: "Activities for all skill levels and interests"
    },
    {
      icon: Trophy,
      title: "Competitive Sports",
      description: "Inter-university competitions and tournaments"
    },
    {
      icon: Heart,
      title: "Wellness Focus",
      description: "Holistic approach to physical and mental well-being"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Your Gateway to Active Living
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            At Solomon Islands National University, we believe that sports and recreation are essential 
            components of university life. Our comprehensive programs and facilities support your physical 
            fitness, mental wellness, and social connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="text-center p-6 transition-all duration-300 hover:shadow-lg border"
              style={{ 
                backgroundColor: '#ffffff',
                borderColor: '#8ecae6'
              }}
            >
              <CardContent className="p-0">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#219ebc' }}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#082952' }} className="opacity-80">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsOverview;