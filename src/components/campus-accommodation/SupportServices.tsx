import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, GraduationCap, Wrench, Shield, HelpCircle } from 'lucide-react';

export const SupportServices = () => {
  const supportServices = [
    {
      title: "Wellbeing Support",
      description: "24/7 mental health and wellbeing assistance including counseling services, peer support groups, and crisis intervention.",
      icon: Heart,
      contact: "Wellness Center: ext. 2234",
      color: '#ffb703'
    },
    {
      title: "Academic Support",
      description: "Study groups, tutoring services, quiet study spaces, and academic mentoring to help you succeed in your studies.",
      icon: GraduationCap,
      contact: "Academic Support: ext. 2156",
      color: '#219ebc'
    },
    {
      title: "Community Development",
      description: "Social events, cultural programs, leadership opportunities, and community building activities throughout the year.",
      icon: Users,
      contact: "Community Team: ext. 2178",
      color: '#8ecae6'
    },
    {
      title: "Maintenance Services",
      description: "Prompt response to maintenance requests, cleaning services, and ensuring all facilities are in excellent condition.",
      icon: Wrench,
      contact: "Maintenance: ext. 2190",
      color: '#d7a12c'
    },
    {
      title: "Security Services",
      description: "Round-the-clock security presence, secure access systems, emergency response, and safety programs.",
      icon: Shield,
      contact: "Security: ext. 2200",
      color: '#ffb703'
    },
    {
      title: "General Assistance",
      description: "Help with accommodation questions, room changes, payment issues, and general guidance for campus life.",
      icon: HelpCircle,
      contact: "Front Desk: ext. 2145",
      color: '#219ebc'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#082952' }}>
              Support Services
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
              Our comprehensive support network ensures you have everything you need for a successful and enjoyable university experience.
            </p>
          </div>

          {/* Support Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {supportServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300" style={{ borderColor: service.color }}>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div 
                        className="p-3 rounded-lg mr-3"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <IconComponent className="h-6 w-6" style={{ color: service.color }} />
                      </div>
                      <CardTitle className="text-lg" style={{ color: '#082952' }}>{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4" style={{ color: '#082952' }}>{service.description}</p>
                    <div 
                      className="text-xs font-medium p-2 rounded"
                      style={{ backgroundColor: `${service.color}20`, color: service.color }}
                    >
                      {service.contact}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Emergency Contact Section */}
          <Card 
            className="p-8 text-center"
            style={{ backgroundColor: 'rgba(255, 183, 3, 0.1)', borderColor: '#ffb703' }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#082952' }}>
              Emergency Support
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Shield className="h-8 w-8 mx-auto mb-2" style={{ color: '#ffb703' }} />
                <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>24/7 Emergency</h4>
                <p className="text-lg font-bold" style={{ color: '#ffb703' }}>000 or ext. 2222</p>
              </div>
              <div>
                <Heart className="h-8 w-8 mx-auto mb-2" style={{ color: '#219ebc' }} />
                <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Crisis Support</h4>
                <p className="text-lg font-bold" style={{ color: '#219ebc' }}>ext. 2233</p>
              </div>
              <div>
                <HelpCircle className="h-8 w-8 mx-auto mb-2" style={{ color: '#8ecae6' }} />
                <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>After Hours</h4>
                <p className="text-lg font-bold" style={{ color: '#8ecae6' }}>ext. 2244</p>
              </div>
            </div>
            <p className="mt-6 text-sm" style={{ color: '#082952' }}>
              Our support team is always here to help. Don't hesitate to reach out whenever you need assistance.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};