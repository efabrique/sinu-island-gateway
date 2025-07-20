import React from 'react';
import { Users, Heart, Trophy, Lightbulb } from 'lucide-react';

const ClubsOverview: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Connect & Network',
      description: 'Meet like-minded students and build lasting friendships'
    },
    {
      icon: Heart,
      title: 'Pursue Passions',
      description: 'Explore your interests and discover new hobbies'
    },
    {
      icon: Trophy,
      title: 'Develop Skills',
      description: 'Build leadership, teamwork, and professional skills'
    },
    {
      icon: Lightbulb,
      title: 'Create Impact',
      description: 'Make a difference in your community and beyond'
    }
  ];

  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Get Social at SINU
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto leading-relaxed">
            Created and run by students, our clubs and organizations are the perfect way to connect 
            with people who share your passions, interests, or unique hobbies. With over 90 student 
            groups, there's definitely one for you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-[#edf4ff] rounded-lg border border-[#8ecae6] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#ffb703] rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-[#082952]" />
              </div>
              <h3 className="text-xl font-bold text-[#082952] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#082952] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsOverview;