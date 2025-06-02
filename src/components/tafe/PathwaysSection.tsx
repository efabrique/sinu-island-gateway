
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Briefcase, TrendingUp } from 'lucide-react';

const PathwaysSection = () => {
  const pathways = [
    {
      icon: Briefcase,
      title: "Direct Employment",
      description: "Graduate job-ready with industry-recognized qualifications",
      outcomes: ["Immediate employment opportunities", "Industry partnerships for job placement", "Work-ready skills and experience"]
    },
    {
      icon: GraduationCap,
      title: "Higher Education",
      description: "Continue your studies with university pathway programs",
      outcomes: ["Credit transfer to degree programs", "Foundation courses available", "Academic support for transitions"]
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Upgrade your skills for promotion and career growth",
      outcomes: ["Professional development courses", "Leadership training programs", "Industry-specific upskilling"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Career Pathways
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            TAFE & TVET qualifications open doors to diverse career opportunities and further education
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#8ecae6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <pathway.icon className="h-10 w-10 text-[#082952]" />
              </div>
              <h3 className="text-xl font-semibold text-[#082952] mb-4">{pathway.title}</h3>
              <p className="text-[#082952] mb-6">{pathway.description}</p>
              <ul className="space-y-2 mb-6">
                {pathway.outcomes.map((outcome, outcomeIndex) => (
                  <li key={outcomeIndex} className="text-[#082952] flex items-start justify-center">
                    <ArrowRight className="h-4 w-4 text-[#219ebc] mr-2 mt-1 flex-shrink-0" />
                    <span className="text-left">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] px-8 py-3">
            Explore Career Pathways
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
