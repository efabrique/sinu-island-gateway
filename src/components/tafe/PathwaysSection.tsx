
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
            Career Pathways
                          <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            TAFE & TVET qualifications open doors to diverse career opportunities and further education
          </p>
        </div>
        
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {pathways.map((pathway, index) => (
    <div key={index} className="text-center">
      <div className="bg-[#035ac5ff] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        <pathway.icon className="h-10 w-10 text-[#fff]" />
      </div>
      <h3 className="text-xl font-semibold text-[#082952] mb-4">{pathway.title}</h3>
      <p className="text-[#082952] mb-6">{pathway.description}</p>
      <ul className="space-y-2 mb-6 text-left">
        {pathway.outcomes.map((outcome, outcomeIndex) => (
          <li key={outcomeIndex} className="flex items-center space-x-5 text-[#082952]">
            <ArrowRight className="h-4 w-4 text-[#219ebc] flex-shrink-0" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>


        <div className="text-center mt-12">
          <Button variant="outline" className=" text-[#035ac5ff] border-[#035ac5ff] hover:bg-[#035ac5ff] hover:text-white">
            Explore Career Pathways
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
