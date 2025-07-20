import React from 'react';
import { Users, Trophy, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SocialSportsSection = () => {
  const socialSports = [
    {
      sport: "Basketball",
      day: "Monday",
      time: "6:00 PM - 8:00 PM",
      level: "Mixed",
      participants: "8-10 per team"
    },
    {
      sport: "Netball",
      day: "Tuesday",
      time: "5:30 PM - 7:30 PM",
      level: "All levels",
      participants: "7 per team"
    },
    {
      sport: "Touch Football",
      day: "Wednesday",
      time: "6:00 PM - 8:00 PM",
      level: "Beginner friendly",
      participants: "6 per team"
    },
    {
      sport: "Volleyball",
      day: "Thursday",
      time: "6:30 PM - 8:30 PM",
      level: "Mixed",
      participants: "6 per team"
    },
    {
      sport: "5-a-side Soccer",
      day: "Friday",
      time: "5:00 PM - 7:00 PM",
      level: "All levels",
      participants: "5 per team"
    },
    {
      sport: "Badminton",
      day: "Saturday",
      time: "10:00 AM - 12:00 PM",
      level: "Social",
      participants: "Doubles/Singles"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Meet New People",
      description: "Connect with fellow students and build lasting friendships"
    },
    {
      icon: Trophy,
      title: "Friendly Competition",
      description: "Enjoy competitive games in a supportive environment"
    },
    {
      icon: Calendar,
      title: "Regular Schedule",
      description: "Consistent weekly sessions to maintain your fitness routine"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Social Sports
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Join our social sports leagues for a fun, relaxed way to stay active and meet new people. 
            No experience necessary - just bring your enthusiasm!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
              Why Join Social Sports?
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#ffb703' }}
                  >
                    <benefit.icon className="h-6 w-6" style={{ color: '#082952' }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2" style={{ color: '#082952' }}>
                      {benefit.title}
                    </h4>
                    <p style={{ color: '#082952' }}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button 
                className="inline-flex items-center gap-2"
                style={{ 
                  backgroundColor: '#219ebc',
                  borderColor: '#219ebc',
                  color: '#ffffff'
                }}
              >
                Register for Social Sports
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
              Weekly Schedule
            </h3>
            <div className="space-y-4">
              {socialSports.map((sport, index) => (
                <Card 
                  key={index}
                  className="transition-all duration-300 hover:shadow-md border"
                  style={{ 
                    backgroundColor: '#edf4ff',
                    borderColor: '#8ecae6'
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold" style={{ color: '#082952' }}>
                          {sport.sport}
                        </h4>
                        <p className="text-sm" style={{ color: '#082952' }}>
                          {sport.day} • {sport.time}
                        </p>
                        <p className="text-sm mt-1" style={{ color: '#082952' }}>
                          Level: {sport.level}
                        </p>
                      </div>
                      <div className="text-right text-sm" style={{ color: '#082952' }}>
                        <p>{sport.participants}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSportsSection;