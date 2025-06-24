
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, BookOpen } from 'lucide-react';
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
              <p className="text-xl text-white mb-8 leading-relaxed">
                Start your journey towards a rewarding career with our comprehensive undergraduate programs. 
                Designed to prepare you for the challenges of tomorrow while celebrating the rich culture 
                and heritage of the Solomon Islands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button className="bg-[#219ebc] hover:bg-[#082952] text-white px-8 py-3">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#082952] px-8 py-3">
                  Download Prospectus
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-[#219ebc]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#082952] mb-2">Quality Education</h3>
                  <p className="text-[#082952]">Internationally recognized programs with local relevance</p>
                </div>
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#219ebc]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#082952] mb-2">Expert Faculty</h3>
                  <p className="text-[#082952]">Learn from experienced academics and industry professionals</p>
                </div>
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-[#219ebc]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#082952] mb-2">Practical Learning</h3>
                  <p className="text-[#082952]">Hands-on experience and real-world applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UndergraduateHero;
