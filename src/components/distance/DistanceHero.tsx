
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Distance & Flexible Learning Centers
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Access quality education from anywhere in the Solomon Islands through our 
                comprehensive distance and flexible learning programs. Study at your own pace 
                with support from our regional learning centers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button className="bg-[#219ebc] hover:bg-[#082952] text-white px-8 py-3">
                  Find a Center Near You
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#082952] px-8 py-3">
                  Browse Programs
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-[#219ebc]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#082952] mb-2">Regional Access</h3>
                  <p className="text-[#082952]">Learning centers across all provinces for local support</p>
                </div>
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-[#219ebc]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#082952] mb-2">Flexible Schedule</h3>
                  <p className="text-[#082952]">Study when it suits your work and family commitments</p>
                </div>
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-8 w-8 text-[#219ebc]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#082952] mb-2">Online & Blended</h3>
                  <p className="text-[#082952]">Combine online learning with face-to-face support</p>
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
