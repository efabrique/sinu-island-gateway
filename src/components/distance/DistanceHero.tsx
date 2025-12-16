import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import OptimizedImage from '@/components/common/OptimizedImage';
import { useNavigate } from "react-router-dom";

const DistanceHero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#edf4ff] relative overflow-hidden">
      {/* Background Image Container with Responsive Aspect Ratios */}
      <div className="relative w-full">
        {/* Desktop: 16:9 aspect ratio */}
        <div className="hidden lg:block h-[800px] w-full">
          <OptimizedImage
            src="/public/lovable-uploads/f8426703-80a1-4c9e-9221-91ae920e4fe2.jpg"
            alt="SINU students celebrating achievement"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>

        {/* Tablet: 4:3 aspect ratio */}
        <div className="hidden md:block lg:hidden aspect-[4/3] w-full">
          <OptimizedImage
            src="/public/lovable-uploads/f8426703-80a1-4c9e-9221-91ae920e4fe2.jpg"
            alt="SINU students celebrating achievement"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>

        {/* Mobile: 9:16 aspect ratio */}
        <div className="block md:hidden aspect-[9/16] w-full">
          <OptimizedImage
            src="/public/lovable-uploads/f8426703-80a1-4c9e-9221-91ae920e4fe2.jpg"
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
          <div className="relative z-10 max-w-4xl mt-40">
            <h1
              className="text-4xl md:text-5xl font-bold text-white  text-center bg-black/50 inline-block px-4 py-2"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              Student Learning Support
            </h1>

            <Card className="bg-[#22a2bf]/50 border-0 max-w-2xl">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-3xl font-semibold text-white mb-4">
                  Highly flexible, tailored for online learning and close to your home.
                </h3>
                <p className="text-sm text-white leading-relaxed">
                  Studying online may feel overwhelming, but we're here to help you. You'll have access to all our wide range of support services. Ask our Distance and Flexible Learning Center Support Staff.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start py-6">
                  <Button
                    onClick={() => {
                      const section = document.getElementById("find-center");
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-[#ffb703] hover:bg-[#082952] text-white px-8 py-3"
                  >
                    Find a Center
                  </Button>

                  <Button
                    onClick={() => navigate("/course-finder")}
                    className="bg-white text-[#082952] hover:bg-[#082952] hover:text-white border-0 px-8 py-3 transition-all duration-300"
                  >
                    Browse Programs
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

export default DistanceHero;
