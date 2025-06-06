
import React from 'react';
import { GraduationCap, Globe, Users, FileCheck } from 'lucide-react';

const AdmissionHero = () => {
  return (
    <section className="bg-[#edf4ff] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D950AE] mb-6">
            International Student Admission Requirements
          </h1>
          <p className="text-lg md:text-xl text-[#D950AE] mb-8 leading-relaxed">
            Join our diverse international community at SINU. Discover the admission requirements and application process for international students seeking undergraduate and postgraduate study opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-[#AAE847] p-4 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-[#D950AE]" />
              </div>
              <h3 className="text-lg font-semibold text-[#D950AE] mb-2">Academic Excellence</h3>
              <p className="text-[#D950AE] text-center text-sm">High-quality education standards</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#AAE847] p-4 rounded-full mb-4">
                <Globe className="h-8 w-8 text-[#D950AE]" />
              </div>
              <h3 className="text-lg font-semibold text-[#D950AE] mb-2">Global Recognition</h3>
              <p className="text-[#D950AE] text-center text-sm">Internationally recognized qualifications</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#AAE847] p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-[#D950AE]" />
              </div>
              <h3 className="text-lg font-semibold text-[#D950AE] mb-2">Diverse Community</h3>
              <p className="text-[#D950AE] text-center text-sm">Multicultural learning environment</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#AAE847] p-4 rounded-full mb-4">
                <FileCheck className="h-8 w-8 text-[#D950AE]" />
              </div>
              <h3 className="text-lg font-semibold text-[#D950AE] mb-2">Clear Process</h3>
              <p className="text-[#D950AE] text-center text-sm">Transparent admission procedures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionHero;
