
import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/common/OptimizedImage';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-[#023047] h-[50vh] md:h-[70vh] overflow-hidden">
      {/* Background Image with Overlay - Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <OptimizedImage
          src="/lovable-uploads/49aaf3f8-456b-4260-8aa7-3110587fb521.png"
          alt="Student examining plant with magnifying glass"
          className="w-full h-full"
          objectFit="cover"
          priority={true}
          width={1920}
          height={1080}
        />
        {/* Light blue fluorescent tint overlay */}
        <div className="absolute inset-0 bg-[#1EAEDB]/30 mix-blend-overlay"></div>
      </div>

      {/* Background Image with Overlay - Mobile */}
      <div className="absolute inset-0 block md:hidden">
        <OptimizedImage
          src="/lovable-uploads/9763b031-1bb6-490a-bd9c-b086819fa224.png"
          alt="Mobile hero background"
          className="w-full h-full"
          objectFit="cover"
          priority={true}
          width={768}
          height={576}
        />
        {/* Light blue fluorescent tint overlay */}
        <div className="absolute inset-0 bg-[#1EAEDB]/30 mix-blend-overlay"></div>
      </div>

      {/* Mobile Title - Only visible on mobile */}
      <div className="relative block md:hidden">
        <h2 className="text-center text-[#ffb703] font-bold text-lg pt-4 px-4">
          Semester 2 Applications Now Open
        </h2>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center md:items-center">
        {/* Desktop/Tablet Content Card */}
        <div className="hidden md:block bg-[#8ecae6]/80 rounded-lg p-8 max-w-2xl backdrop-blur-sm">
          <div className="text-[#ffb703] animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Discover Your Potential at SINU</h1>
            <p className="text-base md:text-xl mb-8 font-bold">
              Solomon Islands National University offers world-class education, 
              innovative research opportunities, and a vibrant campus community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-[#0b2c55] hover:bg-[#d7a12c] hover:text-[#ffffff] text-white transition-colors duration-300"
                asChild
              >
                <Link to="/course-catalog">Explore Programs</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-[#082952] text-white border-transparent hover:bg-[#d7a12c] hover:text-[#ffffff] hover:border-transparent transition-colors duration-300"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Content - positioned at bottom */}
        <div className="block md:hidden w-full">
          <div className="flex flex-wrap gap-4 justify-center absolute bottom-[calc(4rem+30px)] left-0 right-0 px-4">
            <Button 
              size="lg" 
              className="bg-[#0b2c55] hover:bg-[#d7a12c] hover:text-[#ffffff] text-white w-full sm:w-auto transition-colors duration-300"
              asChild
            >
              <Link to="/course-catalog">Explore Programs</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-[#082952] text-white border-transparent hover:bg-[#d7a12c] hover:text-[#ffffff] hover:border-transparent w-full sm:w-auto transition-colors duration-300"
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
