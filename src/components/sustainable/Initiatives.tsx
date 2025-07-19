import React from 'react';
import { Award, TrendingUp, Shield, Star } from 'lucide-react';

const Initiatives = () => {
  const initiatives = [
    {
      icon: Award,
      title: 'Pacific Climate Resilience Initiative',
      description: 'A comprehensive program developing climate adaptation strategies for Pacific Island communities.',
      status: 'Active',
      funding: '$2.5M'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Agriculture Project',
      description: 'Research into sustainable farming practices and food security for island nations.',
      status: 'Active',
      funding: '$1.8M'
    },
    {
      icon: Shield,
      title: 'Coastal Protection Research',
      description: 'Innovative solutions for coastal erosion and sea-level rise protection.',
      status: 'Planning',
      funding: '$3.2M'
    },
    {
      icon: Star,
      title: 'Community Energy Solutions',
      description: 'Developing locally-appropriate renewable energy systems for remote communities.',
      status: 'Active',
      funding: '$1.5M'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Current Initiatives
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Our flagship research initiatives are making real-world impact across the Pacific region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="p-6 rounded-lg border" 
                 style={{ 
                   backgroundColor: '#ffffff',
                   borderColor: '#8ecae6',
                   boxShadow: '0 4px 6px rgba(8, 41, 82, 0.1)'
                 }}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" 
                     style={{ backgroundColor: '#219ebc' }}>
                  <initiative.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold" style={{ color: '#082952' }}>
                      {initiative.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-sm font-medium" 
                          style={{ 
                            backgroundColor: initiative.status === 'Active' ? '#8ecae6' : '#ffb703',
                            color: '#082952'
                          }}>
                      {initiative.status}
                    </span>
                  </div>
                  <p className="mb-3" style={{ color: '#082952' }}>
                    {initiative.description}
                  </p>
                  <div className="text-sm font-medium" style={{ color: '#219ebc' }}>
                    Funding: {initiative.funding}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;