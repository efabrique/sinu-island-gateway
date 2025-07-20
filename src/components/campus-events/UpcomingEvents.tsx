import React from 'react';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';

export const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "SINU Cultural Festival 2024",
      date: "March 15, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Main Quadrangle",
      category: "Cultural",
      attendees: "500+",
      description: "Annual celebration of cultural diversity featuring performances, food, and traditional arts from across the Pacific Islands.",
      featured: true
    },
    {
      id: 2,
      title: "Academic Excellence Awards Ceremony",
      date: "March 22, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Great Hall",
      category: "Academic",
      attendees: "300+",
      description: "Recognizing outstanding academic achievements and scholarly contributions by students and faculty.",
      featured: false
    },
    {
      id: 3,
      title: "Career Fair & Industry Expo",
      date: "April 5, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Exhibition Center",
      category: "Professional",
      attendees: "1000+",
      description: "Connect with leading employers and explore career opportunities across various industries.",
      featured: true
    },
    {
      id: 4,
      title: "Student Leadership Summit",
      date: "April 12, 2024",
      time: "8:30 AM - 5:00 PM",
      location: "Conference Hall A",
      category: "Leadership",
      attendees: "150+",
      description: "Develop leadership skills through workshops, panel discussions, and networking sessions.",
      featured: false
    },
    {
      id: 5,
      title: "Pacific Research Symposium",
      date: "April 18, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Research Center",
      category: "Research",
      attendees: "200+",
      description: "Showcase of cutting-edge research and innovations addressing Pacific Island challenges.",
      featured: false
    },
    {
      id: 6,
      title: "Spring Music Concert",
      date: "April 25, 2024",
      time: "7:30 PM - 9:30 PM",
      location: "Performance Hall",
      category: "Arts",
      attendees: "400+",
      description: "Student musicians and guest artists perform classical, contemporary, and traditional Pacific music.",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Cultural': '#ffb703',
      'Academic': '#219ebc',
      'Professional': '#d7a12c',
      'Leadership': '#8ecae6',
      'Research': '#082952',
      'Arts': '#ffb703'
    };
    return colors[category as keyof typeof colors] || '#219ebc';
  };

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#082952' }} className="text-4xl font-bold mb-6">
            Upcoming Events
          </h2>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Don't miss out on these exciting upcoming events. Mark your calendar and join us for 
            unforgettable experiences and meaningful connections.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              style={{ 
                backgroundColor: event.featured ? '#edf4ff' : '#ffffff',
                borderColor: '#8ecae6'
              }}
              className="border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
            >
              {event.featured && (
                <div className="flex items-center mb-4">
                  <div 
                    style={{ backgroundColor: '#ffb703' }}
                    className="px-3 py-1 rounded-full"
                  >
                    <span style={{ color: '#082952' }} className="text-sm font-bold">
                      Featured Event
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 style={{ color: '#082952' }} className="text-xl font-semibold mb-2 group-hover:text-[#219ebc] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div 
                    style={{ backgroundColor: getCategoryColor(event.category) }}
                    className="inline-block px-3 py-1 rounded-full mb-3"
                  >
                    <span style={{ color: '#ffffff' }} className="text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                <ChevronRight style={{ color: '#8ecae6' }} className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              <p style={{ color: '#219ebc' }} className="mb-4 leading-relaxed">
                {event.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar style={{ color: '#ffb703' }} className="w-5 h-5 mr-3" />
                  <span style={{ color: '#082952' }} className="text-sm font-medium">
                    {event.date}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Clock style={{ color: '#ffb703' }} className="w-5 h-5 mr-3" />
                  <span style={{ color: '#082952' }} className="text-sm">
                    {event.time}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <MapPin style={{ color: '#ffb703' }} className="w-5 h-5 mr-3" />
                  <span style={{ color: '#082952' }} className="text-sm">
                    {event.location}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Users style={{ color: '#ffb703' }} className="w-5 h-5 mr-3" />
                  <span style={{ color: '#082952' }} className="text-sm">
                    Expected: {event.attendees} attendees
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t" style={{ borderColor: '#8ecae6' }}>
                <button 
                  style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                  className="w-full py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
                >
                  Register for Event
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            style={{ backgroundColor: '#d7a12c', color: '#082952' }}
            className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
          >
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};