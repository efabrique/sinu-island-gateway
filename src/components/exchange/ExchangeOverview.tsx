import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, BookOpen, Award } from 'lucide-react';

const ExchangeOverview = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Global Experience",
      description: "Study in over 30 countries with 150+ partner institutions worldwide."
    },
    {
      icon: Users,
      title: "Cultural Immersion",
      description: "Connect with diverse cultures and build lifelong international friendships."
    },
    {
      icon: BookOpen,
      title: "Academic Credit",
      description: "Earn credits that count towards your SINU degree while studying abroad."
    },
    {
      icon: Award,
      title: "Career Advantage",
      description: "Gain a competitive edge with global perspective and international experience."
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Transform Your Education Through Exchange
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Going on a semester or year-long exchange is a great way to experience other cultures and add a unique edge to your SINU degree. 
            With over 150 international partner institutions and campuses in 30 countries, there's a destination for you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#ffffff' }}>
                <CardContent className="p-6">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#8ecae6' }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: '#082952' }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: '#082952' }}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg" style={{ borderLeft: '4px solid #ffb703' }}>
          <h3 className="text-2xl font-semibold mb-4" style={{ color: '#082952' }}>
            New Colombo Plan Funding Available
          </h3>
          <p className="text-lg" style={{ color: '#082952' }}>
            New Colombo Plan (NCP) funding from the Australian Government is available to support Australian students studying in the Indo-Pacific region. 
            This funding opportunity helps make your exchange experience more affordable and accessible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExchangeOverview;