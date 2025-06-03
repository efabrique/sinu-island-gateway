
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowRight } from 'lucide-react';

const PrepHero = () => {
  return (
    <section className="bg-[#edf4ff] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#ffb703] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="h-10 w-10 text-[#082952]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            University Preparatory Courses
          </h1>
          
          <p className="text-xl text-[#082952] mb-8 max-w-3xl mx-auto">
            Build the skills and confidence you need to succeed at university. Our preparatory programs 
            provide a pathway to undergraduate study for students who don't meet direct entry requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#219ebc] hover:bg-[#219ebc]/90 text-white px-8 py-3 text-lg">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-[#082952] text-[#082952] hover:bg-[#082952] hover:text-white px-8 py-3 text-lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrepHero;
