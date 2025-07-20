import React from 'react';
import { Star, Calendar, Users, Award } from 'lucide-react';

export const FeaturedEvents = () => {
  const featuredEvents = [
    {
      title: "Pacific Islands Youth Summit 2024",
      date: "May 10-12, 2024",
      description: "A three-day summit bringing together young leaders from across the Pacific to discuss sustainable development, climate action, and regional cooperation.",
      highlights: ["Keynote speakers from 15 Pacific nations", "Youth leadership workshops", "Cultural showcase", "Networking opportunities"],
      registrationOpen: true,
      spotlight: true
    },
    {
      title: "SINU Innovation Challenge",
      date: "June 15-16, 2024",
      description: "Annual competition where students present innovative solutions to real-world problems affecting Pacific Island communities.",
      highlights: ["$10,000 in prizes", "Industry mentors", "Pitch presentations", "Technology showcase"],
      registrationOpen: true,
      spotlight: false
    },
    {
      title: "International Education Conference",
      date: "July 20-22, 2024",
      description: "Premier educational conference focusing on Pacific-centered pedagogy, indigenous knowledge systems, and sustainable education practices.",
      highlights: ["50+ international speakers", "Research presentations", "Professional development", "Networking sessions"],
      registrationOpen: false,
      spotlight: true
    }
  ];

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Star style={{ color: '#ffb703' }} className="w-8 h-8 mr-3" />
            <h2 style={{ color: '#082952' }} className="text-4xl font-bold">
              Featured Events
            </h2>
          </div>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Discover our signature events that bring together the university community and beyond for 
            exceptional learning, networking, and celebration opportunities.
          </p>
        </div>

        <div className="space-y-8">
          {featuredEvents.map((event, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: event.spotlight ? '#edf4ff' : '#ffffff',
                borderColor: '#8ecae6'
              }}
              className="border-2 rounded-lg p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    {event.spotlight && (
                      <div 
                        style={{ backgroundColor: '#ffb703' }}
                        className="px-3 py-1 rounded-full mr-4"
                      >
                        <span style={{ color: '#082952' }} className="text-sm font-bold">
                          Spotlight Event
                        </span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Calendar style={{ color: '#219ebc' }} className="w-5 h-5 mr-2" />
                      <span style={{ color: '#082952' }} className="text-sm font-medium">
                        {event.date}
                      </span>
                    </div>
                  </div>

                  <h3 style={{ color: '#082952' }} className="text-2xl font-bold mb-4">
                    {event.title}
                  </h3>
                  
                  <p style={{ color: '#219ebc' }} className="mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center">
                        <Award style={{ color: '#d7a12c' }} className="w-4 h-4 mr-3 flex-shrink-0" />
                        <span style={{ color: '#082952' }} className="text-sm">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6' }} className="p-6 rounded-lg border">
                    <div className="text-center mb-6">
                      <Users style={{ color: '#ffb703' }} className="w-12 h-12 mx-auto mb-4" />
                      <h4 style={{ color: '#082952' }} className="text-lg font-semibold mb-2">
                        Event Registration
                      </h4>
                      {event.registrationOpen ? (
                        <span 
                          style={{ backgroundColor: '#8ecae6', color: '#082952' }}
                          className="text-sm px-3 py-1 rounded-full font-medium"
                        >
                          Registration Open
                        </span>
                      ) : (
                        <span 
                          style={{ backgroundColor: '#d7a12c', color: '#082952' }}
                          className="text-sm px-3 py-1 rounded-full font-medium"
                        >
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <div className="space-y-3">
                      {event.registrationOpen ? (
                        <>
                          <button 
                            style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                            className="w-full py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
                          >
                            Register Now
                          </button>
                          <button 
                            style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6', color: '#082952' }}
                            className="w-full border-2 py-2 rounded-lg font-medium hover:shadow-md transition-all duration-300"
                          >
                            Learn More
                          </button>
                        </>
                      ) : (
                        <>
                          <button 
                            style={{ backgroundColor: '#8ecae6', color: '#082952' }}
                            className="w-full py-3 rounded-lg font-semibold cursor-not-allowed"
                            disabled
                          >
                            Registration Opens Soon
                          </button>
                          <button 
                            style={{ backgroundColor: '#ffffff', borderColor: '#8ecae6', color: '#082952' }}
                            className="w-full border-2 py-2 rounded-lg font-medium hover:shadow-md transition-all duration-300"
                          >
                            Get Notified
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};