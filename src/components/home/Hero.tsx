
import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/common/OptimizedImage';

const Hero = () => {
  return (
    <div className="relative bg-[#023047] h-[50vh] md:h-[70vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3"
          alt="Campus view"
          className="w-full h-full opacity-60"
          objectFit="cover"
          priority={true}
        />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl md:max-w-2xl text-white animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Discover Your Potential at SINU</h1>
          <p className="text-base md:text-xl mb-8">
            Solomon Islands National University offers world-class education, 
            innovative research opportunities, and a vibrant campus community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#66b2b2] hover:bg-[#66b2b2]/90 text-white w-full sm:w-auto">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20 w-full sm:w-auto">
              Virtual Campus Tour
            </Button>
          </div>
        </div>
      </div>
      
      {/* Announcement Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#ffb703] py-2 md:py-3">
        <div className="container mx-auto px-4">
          <p className="text-center text-[#023047] text-sm md:text-base font-medium">
            Enrollment for Spring Semester 2025 is now open! Apply before November 30th.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
