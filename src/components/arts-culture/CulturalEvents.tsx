import React from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CulturalEvents = () => {
  const upcomingEvents = [
    {
      title: "Pacific Arts Festival",
      date: "November 15-17, 2024",
      time: "Various Times",
      venue: "SINU Cultural Centre",
      type: "Festival",
      description: "Three-day celebration featuring traditional music, dance, and visual arts from across the Pacific",
      price: "Free",
      featured: true
    },
    {
      title: "Student Orchestra Concert",
      date: "October 28, 2024",
      time: "7:30 PM",
      venue: "Main Auditorium",
      type: "Concert",
      description: "Annual performance featuring classical and contemporary Pacific compositions",
      price: "$15",
      featured: false
    },
    {
      title: "Contemporary Art Exhibition",
      date: "October 20 - November 10",
      time: "Gallery Hours",
      venue: "University Art Gallery",
      type: "Exhibition",
      description: "Showcase of contemporary Pacific Island artists exploring modern themes",
      price: "Free",
      featured: false
    },
    {
      title: "Cultural Heritage Workshop",
      date: "November 5, 2024",
      time: "2:00 PM - 5:00 PM",
      venue: "Heritage Museum",
      type: "Workshop",
      description: "Hands-on workshop in traditional craft-making with local artisans",
      price: "$25",
      featured: false
    }
  ];

  const annualEvents = [
    "Independence Day Cultural Celebrations",
    "Traditional Music & Dance Festival",
    "International Student Arts Showcase",
    "Alumni Artist Exhibition",
    "Community Art Fair",
    "Cultural Exchange Programs"
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Festival': return '#ffb703';
      case 'Concert': return '#219ebc';
      case 'Exhibition': return '#d7a12c';
      case 'Workshop': return '#8ecae6';
      default: return '#8ecae6';
    }
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#edf4ff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Cultural Events & Festivals
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Experience the rich cultural life of SINU through our year-round calendar of events, 
            festivals, exhibitions, and performances celebrating Pacific Island heritage and creativity.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#082952' }}>
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index}
                className={`transition-all duration-300 hover:shadow-xl border-2 ${
                  event.featured ? 'transform scale-105' : ''
                }`}
                style={{ 
                  backgroundColor: '#ffffff',
                  borderColor: event.featured ? '#ffb703' : '#8ecae6'
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          style={{ 
                            backgroundColor: getEventTypeColor(event.type),
                            color: '#ffffff'
                          }}
                        >
                          {event.type}
                        </Badge>
                        {event.featured && (
                          <Badge variant="outline" style={{ borderColor: '#ffb703', color: '#ffb703' }}>
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg" style={{ color: '#082952' }}>
                        {event.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm mb-4" style={{ color: '#082952' }}>
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" style={{ color: '#219ebc' }} />
                      <span style={{ color: '#082952' }}>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" style={{ color: '#219ebc' }} />
                      <span style={{ color: '#082952' }}>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" style={{ color: '#219ebc' }} />
                      <span style={{ color: '#082952' }}>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className="h-4 w-4" style={{ color: '#219ebc' }} />
                      <span className="font-medium" style={{ color: '#d7a12c' }}>{event.price}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full"
                    style={{ 
                      backgroundColor: event.featured ? '#ffb703' : '#219ebc',
                      borderColor: event.featured ? '#ffb703' : '#219ebc',
                      color: '#ffffff'
                    }}
                  >
                    {event.price === 'Free' ? 'Register' : 'Buy Tickets'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Annual Events Calendar */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#082952' }}>
            Annual Events Calendar
          </h3>
          <div 
            className="p-8 rounded-2xl"
            style={{ backgroundColor: '#ffffff', border: '2px solid #8ecae6' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {annualEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#219ebc' }}
                  ></div>
                  <span className="text-sm" style={{ color: '#082952' }}>
                    {event}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#082952' }}>
                Stay Connected
              </h4>
              <p className="text-sm mb-4" style={{ color: '#082952' }}>
                Subscribe to our cultural events newsletter to be the first to know about upcoming 
                performances, exhibitions, and festivals.
              </p>
              <Button 
                style={{ 
                  backgroundColor: '#d7a12c',
                  borderColor: '#d7a12c',
                  color: '#ffffff'
                }}
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalEvents;