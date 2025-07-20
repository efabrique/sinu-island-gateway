import React from 'react';
import heroImage from '@/assets/health-wellness-hero.jpg';

export const HealthWellnessHero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Health & Wellness
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Comprehensive health and wellness services to support your physical, mental, and emotional well-being throughout your university journey
        </p>
      </div>
    </section>
  );
};