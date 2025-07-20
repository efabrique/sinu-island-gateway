import React from 'react';
import { MapPin, Clock, Wifi, CreditCard } from 'lucide-react';

const DiningVenuesSection = () => {
  const venues = [
    {
      name: "Main Dining Hall",
      description: "Our flagship dining venue offering buffet-style meals with international cuisine options",
      location: "Student Center, Ground Floor",
      hours: "Mon-Fri: 7am-9pm | Sat-Sun: 8am-8pm",
      features: ["Buffet Style", "International Cuisine", "Halal Options", "Vegetarian Menu"],
      image: "/lovable-uploads/3f6b006d-a695-4295-8a23-6c4049ec7033.png"
    },
    {
      name: "Pacific Café",
      description: "Quick service café perfect for coffee, snacks, and light meals between classes",
      location: "Library Building, 2nd Floor",
      hours: "Mon-Fri: 6:30am-6pm | Sat: 8am-4pm",
      features: ["Coffee & Beverages", "Light Meals", "Study-Friendly", "Quick Service"],
      image: "/lovable-uploads/7284ab6b-b66f-44ea-be92-9f17dc726408.png"
    },
    {
      name: "Island Grill",
      description: "Fresh grilled options and local Pacific Island specialties in a relaxed outdoor setting",
      location: "Campus Courtyard",
      hours: "Mon-Fri: 11am-7pm | Sat: 12pm-6pm",
      features: ["Local Cuisine", "Grilled Options", "Outdoor Seating", "Fresh Seafood"],
      image: "/lovable-uploads/49aaf3f8-456b-4260-8aa7-3110587fb521.png"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
              Dining Venues
            </h2>
            <p className="text-xl text-[#219ebc] max-w-3xl mx-auto leading-relaxed">
              Explore our diverse dining venues across campus, each offering unique 
              atmospheres and culinary experiences to suit every taste and occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-[#8ecae6] to-[#219ebc]"></div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#082952] mb-3">{venue.name}</h3>
                  <p className="text-[#219ebc] mb-4 leading-relaxed">{venue.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-[#082952]">
                      <MapPin className="w-5 h-5 text-[#ffb703] mr-3" />
                      <span className="text-sm">{venue.location}</span>
                    </div>
                    <div className="flex items-center text-[#082952]">
                      <Clock className="w-5 h-5 text-[#ffb703] mr-3" />
                      <span className="text-sm">{venue.hours}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#082952] mb-3">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {venue.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-[#8ecae6]/20 text-[#219ebc] px-3 py-1 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] py-3 rounded-lg font-semibold transition-all duration-300">
                    View Menu
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningVenuesSection;