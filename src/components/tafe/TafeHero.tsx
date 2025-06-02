
import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Users, Briefcase } from 'lucide-react';

const TafeHero = () => {
  return (
    <section className="bg-[#edf4ff] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            SINU TAFE & TVET
          </h1>
          <p className="text-xl text-[#082952] mb-8 leading-relaxed">
            Technical and Further Education (TAFE) and Technical and Vocational Education and Training (TVET) 
            programs designed to equip you with practical skills for today's workforce in the Solomon Islands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-[#219ebc] hover:bg-[#082952] text-white px-8 py-3">
              Explore Course Areas
            </Button>
            <Button variant="outline" className="border-[#082952] text-[#082952] hover:bg-[#082952] hover:text-white px-8 py-3">
              Apply Now
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#219ebc]" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">Industry-Ready Skills</h3>
              <p className="text-[#082952]">Practical training aligned with industry needs and standards</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#219ebc]" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">Expert Instructors</h3>
              <p className="text-[#082952]">Learn from experienced professionals and industry experts</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-[#219ebc]" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">Career Pathways</h3>
              <p className="text-[#082952]">Clear progression routes to employment and higher education</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TafeHero;
