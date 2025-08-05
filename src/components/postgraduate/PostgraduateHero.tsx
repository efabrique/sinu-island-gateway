
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import OptimizedImage from '@/components/common/OptimizedImage';

const PostgraduateHero = () => {
  return (
    <section className="bg-[#edf4ff] relative overflow-hidden">
      {/* Background Image Container with Responsive Aspect Ratios */}
      <div className="relative w-full">
        {/* Desktop: 16:9 aspect ratio */}
        <div className="hidden lg:block aspect-video w-full">
          <OptimizedImage
            src="/lovable-uploads/e770e3e6-8bc7-4ced-8a1b-acfda565e2a4.png"
            alt="Postgraduate students in collaborative learning environment"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>
        
        {/* Tablet: 4:3 aspect ratio */}
        <div className="hidden md:block lg:hidden aspect-[4/3] w-full">
          <OptimizedImage
            src="/lovable-uploads/e770e3e6-8bc7-4ced-8a1b-acfda565e2a4.png"
            alt="Postgraduate students in collaborative learning environment"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>
        
        {/* Mobile: 9:16 aspect ratio */}
        <div className="block md:hidden aspect-[9/16] w-full">
          <OptimizedImage
            src="/lovable-uploads/e770e3e6-8bc7-4ced-8a1b-acfda565e2a4.png"
            alt="Postgraduate students in collaborative learning environment"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Postgraduate at SINU
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button className="bg-blue-600 hover:bg-[#082952] text-white px-8 py-3">
                  Apply Now
                </Button>
                <Button className="bg-white text-[#082952] hover:bg-[#082952] hover:text-white border-0 px-8 py-3 transition-all duration-300">
                  Download Prospectus
                </Button>
              </div>
              
              <div className="flex justify-center mt-12">
                <Card className="bg-black/10 max-w-3xl border-0">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#fff] mb-4">
                      Do You have the Skills that makes You more in Demand?
                    </h3>
                    <p className="text-lg text-[#fff] leading-relaxed">
                      Build on your existing knowledge while contributing to research and innovation that addresses the unique challenges and opportunities of the Solomon Islands and the Pacific Region.
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

export default PostgraduateHero;
