
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import OptimizedImage from '@/components/common/OptimizedImage';

const UndergraduateHero = () => {
  return (
    <section className="bg-[#edf4ff] relative overflow-hidden">
      {/* Background Image Container with Responsive Aspect Ratios */}
      <div className="relative w-full">
        {/* Desktop: 16:9 aspect ratio */}
        <div className="hidden lg:block aspect-video w-full">
          <OptimizedImage
            src="/lovable-uploads/6b273f3f-f623-4cb9-be89-346eea9ab6a9.png"
            alt="SINU students celebrating achievement"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>
        
        {/* Tablet: 4:3 aspect ratio */}
        <div className="hidden md:block lg:hidden aspect-[4/3] w-full">
          <OptimizedImage
            src="/lovable-uploads/6b273f3f-f623-4cb9-be89-346eea9ab6a9.png"
            alt="SINU students celebrating achievement"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>
        
        {/* Mobile: 9:16 aspect ratio */}
        <div className="block md:hidden aspect-[9/16] w-full">
          <OptimizedImage
            src="/lovable-uploads/6b273f3f-f623-4cb9-be89-346eea9ab6a9.png"
            alt="SINU students celebrating achievement"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Undergraduate Study at SINU
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button className="bg-[#219ebc] hover:bg-[#082952] text-white px-8 py-3">
                  Apply Now
                </Button>
                <Button className="bg-white text-[#082952] hover:bg-[#082952] hover:text-white border-0 px-8 py-3 transition-all duration-300">
                  Download Prospectus
                </Button>
              </div>
              
              <div className="flex justify-center mt-12">
                <Card className="bg-white/95 backdrop-blur-sm max-w-2xl">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#082952] mb-4">
                      Prepare Yourself for a Great Future with Confidence
                    </h3>
                    <p className="text-lg text-[#082952] leading-relaxed">
                      There are multiple ways to apply for your preferred degree, whether you are completing high school or looking to study as a non-school leaver.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UndergraduateHero;
