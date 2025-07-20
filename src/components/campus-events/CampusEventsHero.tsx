import React from 'react';
import heroImage from '@/assets/campus-events-hero.jpg';

export const CampusEventsHero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Campus Events
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Discover exciting events, activities, and opportunities that make university life vibrant and engaging at SINU
        </p>
      </div>
    </section>
  );
};