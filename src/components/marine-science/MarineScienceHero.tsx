import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Users } from 'lucide-react';
import marineHeroImage from '@/assets/marine-science-hero.jpg';

const MarineScienceHero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${marineHeroImage})`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Marine Studies Institute
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Innovating ways to understand and manage the marine environment
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold px-8 py-3"
            >
              <Search className="mr-2 h-5 w-5" />
              Find a supervisor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#082952] px-8 py-3"
            >
              <Users className="mr-2 h-5 w-5" />
              Collaborate with us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarineScienceHero;