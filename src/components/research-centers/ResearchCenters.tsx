import React from 'react';
import { ArrowRight, Database, Cpu, Calculator, Building, Users, GraduationCap } from 'lucide-react';

const ResearchCenters = () => {
  const centers = [
    {
      title: "Centre for Data Analytics & Digital Innovation",
      description: "Developing digital solutions, data science capabilities, and technology innovation for Pacific development.",
      icon: Database,
      link: "#"
    },
    {
      title: "Pacific Economic Research Centre",
      description: "Economic policy research, trade analysis, and development economics focused on Pacific island nations.",
      icon: Calculator,
      link: "#"
    },
    {
      title: "Centre for Urban Planning & Infrastructure",
      description: "Research in sustainable urban development, infrastructure planning, and smart city solutions.",
      icon: Building,
      link: "#"
    },
    {
      title: "Social Innovation & Community Development Centre",
      description: "Community-based research, social entrepreneurship, and participatory development approaches.",
      icon: Users,
      link: "#"
    },
    {
      title: "Centre for Educational Research & Innovation",
      description: "Educational policy research, curriculum development, and innovative teaching methodologies.",
      icon: GraduationCap,
      link: "#"
    },
    {
      title: "Technology Transfer & Innovation Centre",
      description: "Bridging research and industry through technology commercialization and knowledge transfer.",
      icon: Cpu,
      link: "#"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Research Centres
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Our research centres focus on specialized areas of study, providing targeted 
            expertise and fostering innovation across diverse disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centers.map((center, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ 
                backgroundColor: '#ffffff',
                border: '1px solid #d7a12c'
              }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: '#219ebc' }}
              >
                <center.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3" style={{ color: '#082952' }}>
                {center.title}
              </h3>
              
              <p className="mb-4" style={{ color: '#082952' }}>
                {center.description}
              </p>
              
              <a 
                href={center.link}
                className="inline-flex items-center font-medium group-hover:translate-x-1 transition-transform duration-200"
                style={{ color: '#d7a12c' }}
              >
                Explore research
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchCenters;