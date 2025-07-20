import React from 'react';
import { PlusCircle, FileCheck, Users, Rocket } from 'lucide-react';

const StartClubSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: PlusCircle,
      title: 'Submit Proposal',
      description: 'Complete the new club application form with your club\'s mission and goals'
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Review Process',
      description: 'Student Life reviews your application and provides feedback or approval'
    },
    {
      number: '03',
      icon: Users,
      title: 'Recruit Members',
      description: 'Find founding members who share your vision and passion'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch Your Club',
      description: 'Begin activities and start making an impact on campus'
    }
  ];

  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Start a New Student Group
          </h2>
          <p className="text-lg text-[#082952] max-w-2xl mx-auto">
            Can't find the right group for you? Why not start your own? We'll guide you through the process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#8ecae6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-[#082952]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#ffb703] rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-[#082952]">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-[#082952] mb-3">
                  {step.title}
                </h3>
                
                <p className="text-[#082952] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#edf4ff] rounded-lg p-8 border border-[#8ecae6]">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#082952] mb-4">
                Ready to Start Your Club?
              </h3>
              <p className="text-[#082952] mb-6 max-w-2xl mx-auto">
                Starting a new club is an excellent way to develop leadership skills, create community, 
                and pursue your passions. We're here to support you every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#219ebc] hover:bg-[#082952] text-[#ffffff] px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Application
                </button>
                <button className="border-2 border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-[#ffffff] px-8 py-3 rounded-lg font-semibold transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartClubSection;