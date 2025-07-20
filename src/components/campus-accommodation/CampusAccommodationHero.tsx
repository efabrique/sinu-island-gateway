import React from 'react';
import { Home, MapPin, Users, Shield } from 'lucide-react';
import heroImage from '@/assets/campus-accommodation-hero.jpg';

export const CampusAccommodationHero = () => {
  const highlights = [
    {
      icon: Home,
      title: "Your Home Away From Home",
      description: "Comfortable and safe accommodation designed for students"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Walking distance from campus and city attractions"
    },
    {
      icon: Users,
      title: "Community Living",
      description: "Connect with fellow students from around the world"
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "Round-the-clock security and wellbeing assistance"
    }
  ];

  return (
    <section 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-[#082952]/40"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          Campus Accommodation
        </h1>
        <p 
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
        >
          Discover quality, safe and affordable accommodation designed specifically for SINU students. 
          Your journey to academic success starts with finding the perfect home.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <IconComponent className="h-8 w-8 mx-auto mb-3 text-[#8ecae6]" />
                <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                <p className="text-sm opacity-90">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};