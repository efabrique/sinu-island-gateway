import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import transportHeroImage from '@/assets/transportation-hero.jpg';

const TransportationHero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={transportHeroImage}
          alt="SINU Transportation Services"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <MapPin className="h-12 w-12 text-[#ffb703] mr-4" />
          <h1 className="text-5xl md:text-6xl font-bold">
            Transportation Services
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Discover convenient, affordable, and sustainable transportation options 
          to help you navigate campus and the Solomon Islands with ease
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold px-8 py-4 text-lg"
          >
            View Transport Options
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-[#082952] px-8 py-4 text-lg"
          >
            Download Transport Map
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransportationHero;