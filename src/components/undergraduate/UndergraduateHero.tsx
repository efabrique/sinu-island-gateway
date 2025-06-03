
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, BookOpen } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';

const UndergraduateHero = () => {
  return (
    <section className="bg-[#edf4ff] py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
          alt="University campus aerial view"
          className="w-full h-full"
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Undergraduate Study at SINU
          </h1>
          <p className="text-xl text-[#082952] mb-8 leading-relaxed">
            Start your journey towards a rewarding career with our comprehensive undergraduate programs. 
            Designed to prepare you for the challenges of tomorrow while celebrating the rich culture 
            and heritage of the Solomon Islands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-[#219ebc] hover:bg-[#082952] text-white px-8 py-3">
              Apply Now
            </Button>
            <Button variant="outline" className="border-[#082952] text-[#082952] hover:bg-[#082952] hover:text-white px-8 py-3">
              Download Prospectus
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-[#219ebc]" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">Quality Education</h3>
              <p className="text-[#082952]">Internationally recognized programs with local relevance</p>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#219ebc]" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">Expert Faculty</h3>
              <p className="text-[#082952]">Learn from experienced academics and industry professionals</p>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-[#219ebc]" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">Practical Learning</h3>
              <p className="text-[#082952]">Hands-on experience and real-world applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UndergraduateHero;
