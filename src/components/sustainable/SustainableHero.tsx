import React from 'react';
import heroImage from '@/assets/sustainable-development-hero.jpg';

const SustainableHero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sustainable Development Research"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          Sustainable Development
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          Leading research in sustainable development solutions for a resilient future
        </p>
      </div>
    </section>
  );
};

export default SustainableHero;