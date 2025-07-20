import React from 'react';
import OptimizedImage from '@/components/common/OptimizedImage';
import diningHeroImage from '@/assets/dining-services-hero.jpg';

const DiningServicesHero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={diningHeroImage}
          alt="SINU Dining Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Dining Services
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
          Discover exceptional dining experiences at SINU with fresh, nutritious meals 
          that cater to diverse tastes and dietary requirements
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View Meal Plans
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#082952] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            Dining Locations
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiningServicesHero;