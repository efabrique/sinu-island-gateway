import React from 'react';
import { Users, Target, Heart, Megaphone } from 'lucide-react';

export const StudentOrganizations = () => {
  const organizations = [
    {
      name: "Student Government Association",
      category: "Leadership",
      members: "50+",
      description: "Represents student interests and organizes campus-wide initiatives and events.",
      events: ["Leadership workshops", "Town halls", "Advocacy campaigns", "Community service"]
    },
    {
      name: "Pacific Cultural Society",
      category: "Cultural",
      members: "120+",
      description: "Celebrates and preserves Pacific Island cultures through events and education.",
      events: ["Cultural festivals", "Traditional performances", "Language classes", "Heritage showcases"]
    },
    {
      name: "Environmental Action Club",
      category: "Advocacy",
      members: "80+",
      description: "Promotes sustainability and environmental awareness on campus and beyond.",
      events: ["Beach cleanups", "Sustainability fairs", "Conservation workshops", "Green initiatives"]
    },
    {
      name: "International Students Association",
      category: "Community",
      members: "200+",
      description: "Supports international students and promotes cross-cultural understanding.",
      events: ["Welcome orientations", "Cultural exchanges", "International nights", "Support groups"]
    },
    {
      name: "Debate & Public Speaking Club",
      category: "Academic",
      members: "40+",
      description: "Develops communication skills and hosts competitive speaking events.",
      events: ["Debate tournaments", "Speaking competitions", "Workshops", "Guest speaker series"]
    },
    {
      name: "Community Service Alliance",
      category: "Service",
      members: "150+",
      description: "Coordinates volunteer opportunities and community outreach programs.",
      events: ["Volunteer drives", "Community projects", "Charity fundraisers", "Service learning"]
    }
  ];

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Leadership': Target,
      'Cultural': Heart,
      'Advocacy': Megaphone,
      'Community': Users,
      'Academic': Target,
      'Service': Heart
    };
    return icons[category as keyof typeof icons] || Users;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Leadership': '#219ebc',
      'Cultural': '#ffb703',
      'Advocacy': '#d7a12c',
      'Community': '#8ecae6',
      'Academic': '#082952',
      'Service': '#219ebc'
    };
    return colors[category as keyof typeof colors] || '#219ebc';
  };

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#082952' }} className="text-4xl font-bold mb-6">
            Student Organizations & Event Planners
          </h2>
          <p style={{ color: '#219ebc' }} className="text-xl leading-relaxed max-w-3xl mx-auto">
            Meet the dynamic student organizations that make campus life vibrant through their 
            diverse programming, leadership, and community engagement activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {organizations.map((org, index) => (
            <div 
              key={index} 
              style={{ backgroundColor: '#edf4ff', borderColor: '#8ecae6' }}
              className="border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div 
                  style={{ backgroundColor: getCategoryColor(org.category) }} 
                  className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  {React.createElement(getCategoryIcon(org.category), {
                    style: { color: '#ffffff' },
                    className: "w-6 h-6"
                  })}
                </div>
                <div 
                  style={{ backgroundColor: '#ffffff', color: '#082952' }}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                >
                  {org.members} members
                </div>
              </div>

              <h3 style={{ color: '#082952' }} className="text-lg font-semibold mb-2">
                {org.name}
              </h3>
              
              <div 
                style={{ backgroundColor: getCategoryColor(org.category) }}
                className="inline-block px-3 py-1 rounded-full mb-3"
              >
                <span style={{ color: '#ffffff' }} className="text-xs font-medium">
                  {org.category}
                </span>
              </div>

              <p style={{ color: '#219ebc' }} className="mb-4 text-sm leading-relaxed">
                {org.description}
              </p>

              <div className="space-y-2">
                <h4 style={{ color: '#082952' }} className="text-sm font-semibold mb-2">
                  Events & Activities:
                </h4>
                {org.events.map((event, idx) => (
                  <div key={idx} className="flex items-center">
                    <div 
                      style={{ backgroundColor: getCategoryColor(org.category) }} 
                      className="w-1.5 h-1.5 rounded-full mr-3"
                    />
                    <span style={{ color: '#082952' }} className="text-xs">
                      {event}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t" style={{ borderColor: '#8ecae6' }}>
                <button 
                  style={{ color: getCategoryColor(org.category) }}
                  className="text-sm font-semibold hover:underline group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More & Join →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#edf4ff' }} className="rounded-lg p-8 text-center">
          <h3 style={{ color: '#082952' }} className="text-2xl font-semibold mb-4">
            Start Your Own Organization
          </h3>
          <p style={{ color: '#219ebc' }} className="mb-6 max-w-2xl mx-auto">
            Have an idea for a new student organization? We support student initiatives and provide 
            resources to help you create meaningful programming for the campus community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
              className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              Start an Organization
            </button>
            <button 
              style={{ backgroundColor: '#d7a12c', color: '#082952' }}
              className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              View All Organizations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};