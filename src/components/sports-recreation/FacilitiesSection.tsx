import React from 'react';
import { Waves, Dumbbell, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: Waves,
      title: "Aquatic Centre",
      description: "Olympic-sized swimming pool, diving facilities, and learn-to-swim programs",
      features: ["25m Indoor Pool", "Swimming Lessons", "Water Aerobics", "Competitive Training"],
      hours: "Mon-Fri: 6am-10pm, Weekends: 8am-8pm"
    },
    {
      icon: Dumbbell,
      title: "Fitness Centre",
      description: "Fully equipped gym with modern cardio and strength training equipment",
      features: ["Cardio Equipment", "Free Weights", "Group Classes", "Personal Training"],
      hours: "24/7 Access for Members"
    },
    {
      icon: MapPin,
      title: "Sports Courts",
      description: "Multi-purpose courts for basketball, netball, volleyball, and badminton",
      features: ["Indoor Courts", "Outdoor Courts", "Equipment Hire", "Court Booking"],
      hours: "Daily: 6am-11pm"
    },
    {
      icon: Calendar,
      title: "Sports Fields",
      description: "Well-maintained fields for soccer, rugby, cricket, and athletics",
      features: ["Soccer Fields", "Rugby Pitch", "Athletics Track", "Cricket Oval"],
      hours: "Daylight Hours, Floodlit until 9pm"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            World-Class Facilities
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Our modern sports and recreation facilities provide the perfect environment for 
            training, competition, and recreational activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <Card 
              key={index}
              className="transition-all duration-300 hover:shadow-xl border"
              style={{ 
                backgroundColor: '#edf4ff',
                borderColor: '#8ecae6'
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#ffb703' }}
                  >
                    <facility.icon className="h-6 w-6" style={{ color: '#082952' }} />
                  </div>
                  <CardTitle style={{ color: '#082952' }}>
                    {facility.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4" style={{ color: '#082952' }}>
                  {facility.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Features:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="text-sm" style={{ color: '#082952' }}>
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Operating Hours:</h4>
                  <p className="text-sm" style={{ color: '#082952' }}>{facility.hours}</p>
                </div>

                <Button 
                  className="w-full mt-4"
                  style={{ 
                    backgroundColor: '#219ebc',
                    borderColor: '#219ebc',
                    color: '#ffffff'
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;