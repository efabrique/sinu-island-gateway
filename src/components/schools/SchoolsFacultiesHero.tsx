
import React from 'react';
import { GraduationCap, Users, BookOpen } from 'lucide-react';

const SchoolsFacultiesHero = () => {
  return (
    <section className="bg-[#edf4ff] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Schools and Faculties
          </h1>
          <p className="text-lg md:text-xl text-[#082952] mb-8 leading-relaxed">
            Solomon Islands National University is organized into faculties, schools, institutes, and centres that deliver world-class education and research across diverse disciplines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#082952] mb-2">Excellence in Education</h3>
              <p className="text-[#082952] text-center">Delivering innovative programs that prepare students for the future</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#082952] mb-2">Expert Faculty</h3>
              <p className="text-[#082952] text-center">World-renowned academics and industry professionals</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#219ebc] p-4 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#082952] mb-2">Research Innovation</h3>
              <p className="text-[#082952] text-center">Cutting-edge research addressing global challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsFacultiesHero;
