

import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Monitor } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';

const DistanceHero = () => {
  return (
    <section className="bg-[#edf4ff] relative overflow-hidden">
      {/* Background Image Container with Responsive Aspect Ratios */}
      <div className="relative w-full">
        {/* Desktop: 16:9 aspect ratio */}
        <div className="hidden lg:block aspect-video w-full">
          <OptimizedImage
            src="/lovable-uploads/bb44fb80-3e75-4c83-8246-f60f42997ac3.png"
            alt="Distance learning student working on computer"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>
        
        {/* Tablet: 4:3 aspect ratio */}
        <div className="hidden md:block lg:hidden aspect-[4/3] w-full">
          <OptimizedImage
            src="/lovable-uploads/bb44fb80-3e75-4c83-8246-f60f42997ac3.png"
            alt="Distance learning student working on computer"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>
        
        {/* Mobile: 9:16 aspect ratio */}
        <div className="block md:hidden aspect-[9/16] w-full">
          <OptimizedImage
            src="/lovable-uploads/bb44fb80-3e75-4c83-8246-f60f42997ac3.png"
            alt="Distance learning student working on computer"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Distance & Flexible Learning Centers
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button className="bg-blue-600 hover:bg-[#082952] text-white px-8 py-3">
                  Find a Center Near You
                </Button>
                <Button className="bg-white text-[#082952] hover:bg-[#082952] hover:text-white border-0 px-8 py-3 transition-all duration-300">
                  Browse Programs
                </Button>
              </div>
              
              <div className="flex justify-center mt-12">
                <div className="text-center bg-gray/40 rounded-lg p-8 max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#082952] mb-4">
                    Highly flexible, tailored for online learning and close to your home.
                  </h3>
                  <p className="text-lg text-[#082952] leading-relaxed">
                    Studying online may feel overwhelming, but we're here to help you. You'll have access to all our wide range of support services. Ask our Distance and Flexible Learning Center Support Staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistanceHero;

