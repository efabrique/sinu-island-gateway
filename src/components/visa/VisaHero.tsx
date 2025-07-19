
import React from 'react';
import { FileText, Globe, Shield, CheckCircle } from 'lucide-react';

const VisaHero = () => {
  return (
    <section className="bg-[#082952] py-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&q=80&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Student Visa Information
          </h1>
          <p className="text-lg md:text-xl text-[#8ecae6] mb-8 leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Everything you need to know about obtaining and maintaining your student visa to study at Solomon Islands National University. Get comprehensive guidance on visa types, application processes, and requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-[#ffb703] p-4 rounded-full mb-4">
                <FileText className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visa Types</h3>
              <p className="text-[#8ecae6] text-center text-sm">Student visa categories and options</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffb703] p-4 rounded-full mb-4">
                <Globe className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Application Process</h3>
              <p className="text-[#8ecae6] text-center text-sm">Step-by-step application guidance</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffb703] p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Requirements</h3>
              <p className="text-[#8ecae6] text-center text-sm">Document and eligibility criteria</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffb703] p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-[#082952]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
              <p className="text-[#8ecae6] text-center text-sm">Ongoing visa assistance and guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaHero;
