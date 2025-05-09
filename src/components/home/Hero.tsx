
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-university-blue h-[70vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3")', 
          filter: 'brightness(0.6)'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Potential at SINU</h1>
          <p className="text-lg md:text-xl mb-8">
            Solomon Islands National University offers world-class education, 
            innovative research opportunities, and a vibrant campus community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-university-green hover:bg-university-green/90">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
              Virtual Campus Tour
            </Button>
          </div>
        </div>
      </div>
      
      {/* Announcement Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-university-gold py-3">
        <div className="container mx-auto px-4">
          <p className="text-center text-black font-medium">
            Enrollment for Spring Semester 2025 is now open! Apply before November 30th.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
