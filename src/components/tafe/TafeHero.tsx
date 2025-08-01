
import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/common/OptimizedImage';

const TafeHero = () => {
  return (
    <section className="bg-[#edf4ff] relative overflow-hidden">
      {/* Background Image Container with Responsive Aspect Ratios */}
      <div className="relative w-full">
        {/* Desktop: 16:9 aspect ratio */}
        <div className="hidden lg:block aspect-video w-full">
          <OptimizedImage
            src="/lovable-uploads/8f2aca33-5a17-4d2f-89b7-6430829c0728.png"
            alt="Student studying"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>
        
        {/* Tablet: 4:3 aspect ratio */}
        <div className="hidden md:block lg:hidden aspect-[4/3] w-full">
          <OptimizedImage
            src="/lovable-uploads/8f2aca33-5a17-4d2f-89b7-6430829c0728.png"
            alt="Student studying"
            className="w-full h-full object-cover object-center"
            objectFit="cover"
          />
        </div>
        
        {/* Mobile: 9:16 aspect ratio - centered on person's face */}
        <div className="block md:hidden aspect-[9/16] w-full">
          <OptimizedImage
            src="/lovable-uploads/8f2aca33-5a17-4d2f-89b7-6430829c0728.png"
            alt="Student studying"
            className="w-full h-full object-cover object-[center_30%]"
            objectFit="cover"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                SINU TAFE & TVET
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button className="bg-[#219ebc] hover:bg-[#082952] text-white px-8 py-3">
                  Explore Course Areas
                </Button>
                <Button className="bg-white text-[#082952] hover:bg-[#082952] hover:text-white border-0 px-8 py-3 transition-all duration-300">
                  Apply Now
                </Button>
              </div>
              
              <div className="flex justify-center mt-12">
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#082952] mb-4">
                    Want to Learn a Skill or Trade?
                  </h3>
                  <p className="text-lg text-[#082952] leading-relaxed">
                    Vocational education, also known as TAFE (Technical and Further Education), offers hands-on training to help land your first job, upskill, change careers or transition into university.
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

export default TafeHero;
