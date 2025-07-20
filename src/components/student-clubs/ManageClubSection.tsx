import React from 'react';
import { Settings, FileText, Calendar, DollarSign, Users, BookOpen } from 'lucide-react';

const ManageClubSection: React.FC = () => {
  const resources = [
    {
      icon: FileText,
      title: 'Club Constitution & Policies',
      description: 'Templates and guidelines for club governance'
    },
    {
      icon: DollarSign,
      title: 'Financial Management',
      description: 'Budget planning and financial reporting tools'
    },
    {
      icon: Calendar,
      title: 'Event Planning Resources',
      description: 'Step-by-step guides for organizing successful events'
    },
    {
      icon: Users,
      title: 'Membership Management',
      description: 'Tools and strategies for recruiting and retaining members'
    },
    {
      icon: BookOpen,
      title: 'Training & Workshops',
      description: 'Leadership development and skill-building sessions'
    },
    {
      icon: Settings,
      title: 'Administrative Support',
      description: 'Forms, procedures, and university liaison assistance'
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Manage Your Student Group
          </h2>
          <p className="text-lg text-[#082952] max-w-2xl mx-auto">
            Access all the resources you need to successfully run and manage your student group.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-[#ffffff] rounded-lg p-6 border border-[#8ecae6] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#219ebc] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <resource.icon className="w-6 h-6 text-[#ffffff]" />
              </div>
              
              <h3 className="text-lg font-bold text-[#082952] mb-3">
                {resource.title}
              </h3>
              
              <p className="text-[#082952] text-sm leading-relaxed">
                {resource.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-[#ffffff] rounded-lg p-8 max-w-3xl mx-auto border border-[#8ecae6] shadow-lg">
            <h3 className="text-2xl font-bold text-[#082952] mb-4">
              Club Executive Resources
            </h3>
            <p className="text-[#082952] mb-6">
              Whether you're a new executive or experienced leader, we provide comprehensive support 
              to help your club thrive and make a positive impact on campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] px-6 py-3 rounded-lg font-semibold transition-colors">
                Access Resources
              </button>
              <button className="border-2 border-[#219ebc] text-[#219ebc] hover:bg-[#219ebc] hover:text-[#ffffff] px-6 py-3 rounded-lg font-semibold transition-all">
                Executive Handbook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageClubSection;