import React from 'react';
import { Building2, Image, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const VenuesGalleries = () => {
  const venues = [
    {
      icon: Building2,
      title: "SINU Cultural Centre",
      description: "Main performance venue featuring a 500-seat auditorium and exhibition spaces",
      features: ["Theater Productions", "Concerts", "Cultural Performances", "Graduation Ceremonies"],
      hours: "Mon-Fri: 8am-10pm, Weekends: Events Only"
    },
    {
      icon: Image,
      title: "University Art Gallery",
      description: "Contemporary gallery showcasing student, faculty, and visiting artist exhibitions",
      features: ["Monthly Exhibitions", "Artist Talks", "Student Showcases", "Community Art"],
      hours: "Tue-Sat: 10am-6pm, Sun: 12pm-5pm"
    },
    {
      icon: MapPin,
      title: "Outdoor Performance Space",
      description: "Open-air amphitheater perfect for cultural festivals and outdoor performances",
      features: ["Cultural Festivals", "Outdoor Concerts", "Traditional Ceremonies", "Student Events"],
      hours: "Daylight Hours, Evening Events by Booking"
    },
    {
      icon: Clock,
      title: "Heritage Museum",
      description: "Preserving and displaying Solomon Islands cultural artifacts and history",
      features: ["Traditional Artifacts", "Historical Exhibitions", "Educational Tours", "Research Collection"],
      hours: "Mon-Fri: 9am-5pm, Sat: 10am-4pm"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Cultural Venues & Galleries
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Discover our world-class cultural facilities designed to showcase artistic talent, 
            preserve cultural heritage, and provide inspiring spaces for creative expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {venues.map((venue, index) => (
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
                    <venue.icon className="h-6 w-6" style={{ color: '#082952' }} />
                  </div>
                  <CardTitle style={{ color: '#082952' }}>
                    {venue.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4" style={{ color: '#082952' }}>
                  {venue.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>Features:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {venue.features.map((feature, idx) => (
                      <li key={idx} className="text-sm" style={{ color: '#082952' }}>
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-1" style={{ color: '#082952' }}>Opening Hours:</h4>
                  <p className="text-sm" style={{ color: '#082952' }}>{venue.hours}</p>
                </div>

                <Button 
                  className="w-full mt-4"
                  style={{ 
                    backgroundColor: '#219ebc',
                    borderColor: '#219ebc',
                    color: '#ffffff'
                  }}
                >
                  Visit Venue
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenuesGalleries;