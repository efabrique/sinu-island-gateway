import React from 'react';
import { Zap, Droplets, Recycle, Home, Factory, Users } from 'lucide-react';

const ResearchAreas = () => {
  const areas = [
    {
      icon: Zap,
      title: 'Renewable Energy',
      description: 'Developing sustainable energy solutions including solar, wind, and biomass technologies.',
      color: '#ffb703'
    },
    {
      icon: Droplets,
      title: 'Water Resource Management',
      description: 'Innovative approaches to water conservation, treatment, and sustainable usage.',
      color: '#8ecae6'
    },
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'Research into waste reduction, recycling systems, and sustainable production cycles.',
      color: '#219ebc'
    },
    {
      icon: Home,
      title: 'Sustainable Infrastructure',
      description: 'Green building technologies and sustainable urban development solutions.',
      color: '#d7a12c'
    },
    {
      icon: Factory,
      title: 'Clean Technology',
      description: 'Development of environmentally friendly industrial processes and technologies.',
      color: '#ffb703'
    },
    {
      icon: Users,
      title: 'Social Sustainability',
      description: 'Community-based approaches to sustainable development and social equity.',
      color: '#8ecae6'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Research Areas
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Our interdisciplinary research spans multiple domains of sustainable development, addressing environmental, economic, and social challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="p-6 rounded-lg border transition-transform hover:scale-105" 
                 style={{ 
                   backgroundColor: '#edf4ff', 
                   borderColor: '#8ecae6',
                   boxShadow: '0 4px 6px rgba(8, 41, 82, 0.1)'
                 }}>
              <div className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center" 
                   style={{ backgroundColor: area.color }}>
                <area.icon className="w-6 h-6" style={{ color: '#082952' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
                {area.title}
              </h3>
              <p style={{ color: '#082952' }}>
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;