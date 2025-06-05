
import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';

const ScholarshipsHero = () => {
  return (
    <section className="bg-[#edf4ff] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Scholarships & Financial Support
          </h1>
          <p className="text-lg md:text-xl text-[#082952] mb-8 leading-relaxed">
            Discover scholarship opportunities to support your educational journey at the Solomon Islands National University. We offer a range of scholarships to help you achieve your academic goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#082952] mb-2">Merit-Based</h3>
              <p className="text-[#082952] text-center">Recognizing academic excellence and achievement</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#082952] mb-2">Need-Based</h3>
              <p className="text-[#082952] text-center">Supporting students with financial need</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#082952] mb-2">Community</h3>
              <p className="text-[#082952] text-center">Special scholarships for community leaders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsHero;
