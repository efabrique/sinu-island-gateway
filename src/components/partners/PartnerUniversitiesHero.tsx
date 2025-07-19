import React from 'react';
import heroImage from '@/assets/partner-universities-hero.jpg';

const PartnerUniversitiesHero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Partner Universities
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Discover educational opportunities worldwide through our extensive network of partner institutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversitiesHero;