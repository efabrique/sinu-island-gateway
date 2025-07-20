import React from 'react';
import heroImage from '@/assets/sports-recreation-hero.jpg';
import OptimizedImage from '@/components/common/OptimizedImage';

const SportsRecreationHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <OptimizedImage
        src={heroImage}
        alt="Sports and Recreation Facilities"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
          Sports & Recreation
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg max-w-3xl mx-auto">
          Discover world-class facilities, diverse programs, and opportunities to stay active, healthy, and connected at SINU
        </p>
      </div>
    </section>
  );
};

export default SportsRecreationHero;