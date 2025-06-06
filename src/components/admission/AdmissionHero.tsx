
import React from 'react';
import { GraduationCap, Globe, Users, FileCheck } from 'lucide-react';

const AdmissionHero = () => {
  return (
    <section className="bg-[#082952] py-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            International Student Admission Requirements
          </h1>
          <p className="text-lg md:text-xl text-[#8ecae6] mb-8 leading-relaxed">
            Join our diverse international community at SINU. Discover the admission requirements and application process for international students seeking undergraduate and postgraduate study opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-[#ffb703] p-4 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Academic Excellence</h3>
              <p className="text-[#8ecae6] text-center text-sm">High-quality education standards</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffb703] p-4 rounded-full mb-4">
                <Globe className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Recognition</h3>
              <p className="text-[#8ecae6] text-center text-sm">Internationally recognized qualifications</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffb703] p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Diverse Community</h3>
              <p className="text-[#8ecae6] text-center text-sm">Multicultural learning environment</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffb703] p-4 rounded-full mb-4">
                <FileCheck className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Clear Process</h3>
              <p className="text-[#8ecae6] text-center text-sm">Transparent admission procedures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionHero;
