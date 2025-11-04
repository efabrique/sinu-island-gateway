import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import OptimizedImage from '@/components/common/OptimizedImage';

const StudentsHero = () => {
  return (
    <section className="bg-[#edf4ff] relative overflow-hidden">
      {/* Background Image Container with Responsive Aspect Ratios */}
      <div className="relative w-full">
        {/* Desktop: 16:9 aspect ratio */}
        <div className="hidden lg:block h-[800px] w-full">
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
        <div
          className="
            absolute inset-0 flex 
            items-center justify-center text-center
            md:items-end md:justify-start md:text-left
            p-4 md:p-12
          "
        >
          <div className="relative z-10 max-w-7xl mt-40">
            <h1
              className="text-3xl md:text-4xl font-bold text-white   inline-block px-4 py-2"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              Welcome to Solomon Islands National University
            </h1>

            <Card className="bg-[#22a2bf]/50 border-0 max-w-2xl">
              <CardContent className="p-4 md:p-8">
                <h3 className="text-xl md:text-3xl font-semibold text-white mb-4">
                  Ready to start your journey with SINU?
                </h3>
                <p className="text-m text-white leading-relaxed text-left">
                  We hope you are studying your favourite subjects, look towards an engaging career, a burgeoning student life, inspiring teachers and friends for life. We hope you feel at home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start py-6">
                  <Button className="bg-[#fff] font-semibold text-[#082952] hover:bg-[#082952]  hover:text-white px-8 py-3">
                    New Student 
                  </Button>
                  <Button className="bg-white text-[#082952] font-semibold hover:bg-[#082952] hover:text-white border-0 px-8 py-3 transition-all duration-300">
                    Student Account
                  </Button>
                <Button className="bg-white text-[#082952] font-semibold hover:bg-[#082952] hover:text-white border-0 px-8 py-3 transition-all duration-300">
                    Register your Studies
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsHero;
