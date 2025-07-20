import React from 'react';
import { MapPin, Clock, Route, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CampusTransport = () => {
  const campusRoutes = [
    {
      name: "Main Campus Loop",
      description: "Connects all major academic buildings, library, and student centers",
      stops: ["Administration Building", "Library", "Science Complex", "Student Center", "Sports Complex"],
      frequency: "Every 10 minutes",
      operatingHours: "6:00 AM - 10:00 PM"
    },
    {
      name: "Accommodation Shuttle",
      description: "Direct service between student accommodation and main campus",
      stops: ["Student Village", "Hostel Complex", "Main Campus", "Dining Hall"],
      frequency: "Every 15 minutes",
      operatingHours: "5:30 AM - 11:00 PM"
    },
    {
      name: "City Connect",
      description: "Links campus to Honiara city center and major shopping areas",
      stops: ["SINU Campus", "Central Market", "Town Council", "Hospital", "Airport Road"],
      frequency: "Every 30 minutes",
      operatingHours: "6:00 AM - 9:00 PM"
    }
  ];

  const shuttleFeatures = [
    {
      icon: Route,
      title: "Inter-Campus Shuttle",
      description: "Free shuttle service connecting multiple campus locations and facilities throughout the day."
    },
    {
      icon: Clock,
      title: "After-Hours Service",
      description: "Extended shuttle service for evening classes, events, and late-night study sessions."
    },
    {
      icon: Phone,
      title: "On-Demand Transport",
      description: "Call-ahead shuttle service for special needs, medical emergencies, or safety concerns."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#082952] mb-4">
            Campus Transportation
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Convenient and free campus shuttle services to help you navigate 
            between different facilities and accommodation areas efficiently.
          </p>
        </div>

        {/* Shuttle Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {shuttleFeatures.map((feature, index) => (
            <Card key={index} className="border-[#8ecae6]/30 text-center">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-[#8ecae6] rounded-lg mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-xl text-[#082952]">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952]/80">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Route Information */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-[#082952] text-center mb-8">
            Campus Shuttle Routes
          </h3>
          
          {campusRoutes.map((route, index) => (
            <Card key={index} className="border-[#8ecae6]/30">
              <CardHeader>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#ffb703] rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-[#082952]" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-[#082952]">
                      {route.name}
                    </CardTitle>
                    <p className="text-[#082952]/80 mt-1">
                      {route.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#082952]/80">Frequency</div>
                    <div className="font-semibold text-[#219ebc]">{route.frequency}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#082952] mb-3">Route Stops:</h4>
                    <div className="space-y-2">
                      {route.stops.map((stop, stopIndex) => (
                        <div key={stopIndex} className="flex items-center">
                          <div className="w-3 h-3 bg-[#219ebc] rounded-full mr-3"></div>
                          <span className="text-[#082952]/80">{stop}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#082952] mb-3">Operating Hours:</h4>
                    <div className="flex items-center text-[#082952]/80">
                      <Clock className="h-4 w-4 mr-2 text-[#219ebc]" />
                      {route.operatingHours}
                    </div>
                    <div className="mt-4 p-3 bg-[#edf4ff] rounded-lg">
                      <p className="text-sm text-[#082952]/80">
                        <strong>Note:</strong> All campus shuttle services are free for SINU students, 
                        faculty, and staff with valid ID.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusTransport;