
import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/common/OptimizedImage';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-[#023047] h-[50vh] md:h-[70vh] overflow-hidden">
      {/* Background Image - Desktop and Tablet */}
      <div className="absolute inset-0 hidden md:block">
        <OptimizedImage
          src="/src/assets/university-campus-hero.jpg"
          alt="University campus with students walking and studying"
          className="w-full h-full"
          objectFit="cover"
          priority={true}
          width={1920}
          height={1080}
        />
      </div>

      {/* Background Image - Mobile */}
      <div className="absolute inset-0 block md:hidden">
        <OptimizedImage
          src="/src/assets/university-campus-hero.jpg"
          alt="University campus with students walking and studying"
          className="w-full h-full object-cover object-center"
          objectFit="cover"
          priority={true}
          width={540}
          height={960}
        />
      </div>
      
      {/* Content - Text and Buttons directly on image */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            Discover Your Potential at SINU
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-semibold drop-shadow-lg">
            <span className="block md:hidden">Discover Your Potential at SINU</span>
            <span className="hidden md:block">Its Your Future. Let us help you discover it.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-bold text-lg px-8 py-4 drop-shadow-lg transition-colors duration-300"
              asChild
            >
              <Link to="/course-catalog">Explore Programs</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#082952] font-bold text-lg px-8 py-4 drop-shadow-lg transition-colors duration-300"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Announcement Banner with Scrolling Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#ffb703] py-2 md:py-3 overflow-hidden">
        <div className="whitespace-nowrap inline-block animate-scroll">
          <p className="text-[#023047] text-sm md:text-base font-medium px-4">
            Enrollment for Semester two 2025 is now open! Apply before May 30th.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
