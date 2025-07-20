import React from 'react';
import heroImage from '@/assets/arts-culture-hero.jpg';
import OptimizedImage from '@/components/common/OptimizedImage';

const ArtsCultureHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <OptimizedImage
        src={heroImage}
        alt="Arts and Culture at SINU"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
          Arts & Culture
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg max-w-3xl mx-auto">
          Experience the vibrant cultural heartbeat of Solomon Islands through diverse artistic expressions, performances, and creative opportunities
        </p>
      </div>
    </section>
  );
};

export default ArtsCultureHero;