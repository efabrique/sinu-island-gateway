
import React from 'react';
import { Users, BookOpen, Heart } from 'lucide-react';

const StudentSupportHero = () => {
  return (
    <section className="bg-[#edf4ff] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Student Academic Support
          </h1>
          <p className="text-lg md:text-xl text-[#082952] mb-8 leading-relaxed">
            Comprehensive support services to help you succeed academically and personally throughout your university journey at SINU.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#082952] mb-2">Academic Guidance</h3>
              <p className="text-[#082952] text-center">Professional academic advisors to guide your educational path</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#082952] mb-2">Learning Resources</h3>
              <p className="text-[#082952] text-center">Comprehensive resources to enhance your learning experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#082952] mb-2">Wellbeing Support</h3>
              <p className="text-[#082952] text-center">Holistic support for your mental health and wellbeing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSupportHero;
