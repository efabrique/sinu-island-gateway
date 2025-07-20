import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Leadership Development',
      description: 'Take on executive roles and develop essential leadership skills that will benefit your career.'
    },
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Connect with peers, alumni, and industry professionals to expand your network.'
    },
    {
      icon: Zap,
      title: 'Skill Building',
      description: 'Develop practical skills in event management, communication, and project coordination.'
    },
    {
      icon: Target,
      title: 'Career Enhancement',
      description: 'Stand out to employers with demonstrated involvement and commitment to your interests.'
    }
  ];

  return (
    <section className="py-16 bg-[#219ebc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#ffffff] mb-6">
            Why Join a Club?
          </h2>
          <p className="text-lg text-[#ffffff] max-w-2xl mx-auto">
            Joining a student club or organization offers numerous benefits that extend far beyond your university years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-[#ffffff] rounded-lg p-6 shadow-lg border border-[#8ecae6] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ffb703] rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-[#082952]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#082952] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#082952] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-[#ffffff] rounded-lg p-8 max-w-2xl mx-auto shadow-lg border border-[#8ecae6]">
            <h3 className="text-2xl font-bold text-[#082952] mb-4">
              Ready to Get Involved?
            </h3>
            <p className="text-[#082952] mb-6">
              Join a society and embrace leadership, take initiative, form friendships, and expand your networks – all while having fun and studying at SINU!
            </p>
            <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] px-8 py-3 rounded-lg font-semibold transition-colors">
              Find Your Club Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;