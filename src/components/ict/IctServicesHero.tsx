
import React from 'react';
import { Monitor, Wifi, Shield, HelpCircle } from 'lucide-react';

const IctServicesHero = () => {
  return (
    <section className="bg-[#edf4ff] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            ICT Services
          </h1>
          <p className="text-lg md:text-xl text-[#082952] mb-8 leading-relaxed">
            Supporting your digital journey at SINU with comprehensive ICT services, technical support, and digital resources for students and staff.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">Computer Labs</h3>
              <p className="text-[#082952] text-center text-sm">Modern computing facilities</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <Wifi className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">Network Access</h3>
              <p className="text-[#082952] text-center text-sm">Campus-wide connectivity</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">Security</h3>
              <p className="text-[#082952] text-center text-sm">Data protection services</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#082952] mb-2">24/7 Support</h3>
              <p className="text-[#082952] text-center text-sm">Technical assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IctServicesHero;
