import React from 'react';
import { Clock, Calendar, MapPin, Phone } from 'lucide-react';

const OpeningHoursSection = () => {
  const venues = [
    {
      name: "Main Dining Hall",
      location: "Student Center, Ground Floor",
      phone: "+677 30123",
      type: "main",
      hours: {
        weekdays: {
          breakfast: "7:00 AM - 9:00 AM",
          lunch: "11:30 AM - 1:30 PM", 
          dinner: "5:30 PM - 8:00 PM"
        },
        weekend: {
          brunch: "9:00 AM - 2:00 PM",
          dinner: "5:30 PM - 8:00 PM"
        }
      }
    },
    {
      name: "Pacific Café",
      location: "Library Building, 2nd Floor",
      phone: "+677 30124",
      type: "cafe",
      hours: {
        weekdays: "6:30 AM - 6:00 PM",
        saturday: "8:00 AM - 4:00 PM",
        sunday: "Closed"
      }
    },
    {
      name: "Island Grill",
      location: "Campus Courtyard",
      phone: "+677 30125",
      type: "grill", 
      hours: {
        weekdays: "11:00 AM - 7:00 PM",
        saturday: "12:00 PM - 6:00 PM",
        sunday: "Closed"
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
              Opening Hours & Locations
            </h2>
            <p className="text-xl text-[#219ebc] max-w-3xl mx-auto leading-relaxed">
              Find the perfect dining option with convenient hours and locations across campus. 
              All venues are easily accessible and designed for student comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <div key={index} className="bg-[#edf4ff] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#082952] mb-2">{venue.name}</h3>
                  <div className="flex items-center justify-center text-[#219ebc] mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{venue.location}</span>
                  </div>
                  <div className="flex items-center justify-center text-[#219ebc]">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{venue.phone}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {venue.type === "main" ? (
                    <>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-5 h-5 text-[#ffb703] mr-2" />
                          <span className="font-semibold text-[#082952]">Monday - Friday</span>
                        </div>
                         <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#219ebc]">Breakfast:</span>
                            <span className="text-[#082952] font-medium">{(venue.hours.weekdays as any).breakfast}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#219ebc]">Lunch:</span>
                            <span className="text-[#082952] font-medium">{(venue.hours.weekdays as any).lunch}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#219ebc]">Dinner:</span>
                            <span className="text-[#082952] font-medium">{(venue.hours.weekdays as any).dinner}</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-5 h-5 text-[#ffb703] mr-2" />
                          <span className="font-semibold text-[#082952]">Saturday - Sunday</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#219ebc]">Brunch:</span>
                            <span className="text-[#082952] font-medium">{venue.hours.weekend.brunch}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#219ebc]">Dinner:</span>
                            <span className="text-[#082952] font-medium">{venue.hours.weekend.dinner}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <Clock className="w-5 h-5 text-[#ffb703] mr-2" />
                          <span className="font-semibold text-[#082952]">Monday - Friday</span>
                        </div>
                        <span className="text-[#219ebc] font-medium">{venue.hours.weekdays as string}</span>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <Clock className="w-5 h-5 text-[#ffb703] mr-2" />
                          <span className="font-semibold text-[#082952]">Saturday</span>
                        </div>
                        <span className="text-[#219ebc] font-medium">{(venue.hours as any).saturday}</span>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <Clock className="w-5 h-5 text-[#ffb703] mr-2" />
                          <span className="font-semibold text-[#082952]">Sunday</span>
                        </div>
                        <span className="text-[#219ebc] font-medium">{(venue.hours as any).sunday}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#082952] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Special Hours Notice</h3>
            <p className="text-[#8ecae6] leading-relaxed mb-6">
              Please note that dining hours may vary during holidays, exam periods, and special university events. 
              Check our website or contact dining services for the most current information.
            </p>
            <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHoursSection;