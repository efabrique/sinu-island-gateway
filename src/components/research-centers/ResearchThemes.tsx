import React from 'react';
import { ChevronRight, Anchor, Thermometer, Recycle, Users, Shield, Stethoscope } from 'lucide-react';

const ResearchThemes = () => {
  const themes = [
    {
      title: "Marine & Coastal Sciences",
      description: "Ocean conservation, fisheries management, and coastal ecosystem research",
      icon: Anchor,
      color: '#8ecae6'
    },
    {
      title: "Climate Change & Environment",
      description: "Climate adaptation, environmental monitoring, and sustainability solutions",
      icon: Thermometer,
      color: '#219ebc'
    },
    {
      title: "Sustainable Development",
      description: "Renewable energy, sustainable agriculture, and green technology",
      icon: Recycle,
      color: '#ffb703'
    },
    {
      title: "Health & Wellbeing",
      description: "Public health, traditional medicine, and community health systems",
      icon: Stethoscope,
      color: '#d7a12c'
    },
    {
      title: "Social Sciences & Governance",
      description: "Policy research, social development, and governance studies",
      icon: Users,
      color: '#219ebc'
    },
    {
      title: "Security & Strategic Studies",
      description: "Regional security, peace studies, and strategic policy analysis",
      icon: Shield,
      color: '#8ecae6'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Key Research Themes
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            All of our research activities are aligned with key themes that address 
            the most pressing challenges and opportunities in the Pacific region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {themes.map((theme, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
              style={{ 
                backgroundColor: '#edf4ff',
                border: '1px solid #8ecae6'
              }}
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: theme.color }}
                >
                  <theme.icon className="w-6 h-6" style={{ color: '#082952' }} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#082952' }}>
                    {theme.title}
                  </h3>
                  <p className="mb-3" style={{ color: '#082952' }}>
                    {theme.description}
                  </p>
                  <div className="flex items-center group-hover:translate-x-1 transition-transform duration-200">
                    <span className="font-medium" style={{ color: '#219ebc' }}>
                      Explore theme
                    </span>
                    <ChevronRight className="w-4 h-4 ml-1" style={{ color: '#219ebc' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            style={{ 
              backgroundColor: '#ffb703',
              color: '#082952'
            }}
          >
            View All Research Activities
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchThemes;