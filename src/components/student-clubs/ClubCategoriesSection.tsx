import React from 'react';
import { GraduationCap, Globe, Dumbbell, Music, Heart, Briefcase } from 'lucide-react';

const ClubCategoriesSection: React.FC = () => {
  const categories = [
    {
      icon: GraduationCap,
      title: 'Academic Clubs',
      description: 'Subject-specific clubs, honor societies, and academic competitions',
      count: '25+ clubs',
      color: '#ffb703'
    },
    {
      icon: Globe,
      title: 'Cultural Organizations',
      description: 'Celebrate diversity and cultural heritage with international student groups',
      count: '20+ groups',
      color: '#219ebc'
    },
    {
      icon: Dumbbell,
      title: 'Sports & Recreation',
      description: 'Competitive sports teams, fitness groups, and outdoor adventure clubs',
      count: '15+ teams',
      color: '#d7a12c'
    },
    {
      icon: Music,
      title: 'Arts & Performance',
      description: 'Music ensembles, drama societies, and creative arts groups',
      count: '12+ groups',
      color: '#8ecae6'
    },
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Volunteer organizations and community outreach programs',
      count: '10+ organizations',
      color: '#ffb703'
    },
    {
      icon: Briefcase,
      title: 'Professional Development',
      description: 'Career-focused clubs and industry networking groups',
      count: '18+ clubs',
      color: '#219ebc'
    }
  ];

  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Club Categories
          </h2>
          <p className="text-lg text-[#082952] max-w-2xl mx-auto">
            Discover clubs across diverse categories that match your interests and career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#edf4ff] rounded-lg p-6 border border-[#8ecae6] hover:shadow-lg transition-all duration-300 group"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: category.color }}
              >
                <category.icon className="w-8 h-8 text-[#082952]" />
              </div>
              
              <h3 className="text-xl font-bold text-[#082952] mb-3">
                {category.title}
              </h3>
              
              <p className="text-[#082952] mb-4 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#219ebc]">
                  {category.count}
                </span>
                <button className="text-[#082952] hover:text-[#219ebc] font-medium text-sm transition-colors">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubCategoriesSection;