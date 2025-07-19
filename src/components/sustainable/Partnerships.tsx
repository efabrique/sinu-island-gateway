import React from 'react';
import { Building, Users, Globe, Heart } from 'lucide-react';

const Partnerships = () => {
  const partners = [
    {
      icon: Building,
      type: 'Academic Partners',
      description: 'Collaboration with leading universities and research institutions worldwide.',
      examples: ['University of Queensland', 'Victoria University of Wellington', 'University of Fiji']
    },
    {
      icon: Users,
      type: 'Government Agencies',
      description: 'Working with national and regional governments on policy and implementation.',
      examples: ['Ministry of Environment', 'Pacific Islands Forum', 'Regional Development Councils']
    },
    {
      icon: Globe,
      type: 'International Organizations',
      description: 'Partnership with global organizations driving sustainable development.',
      examples: ['UN Environment', 'World Bank', 'Asian Development Bank']
    },
    {
      icon: Heart,
      type: 'Community Groups',
      description: 'Engaging local communities as partners in research and implementation.',
      examples: ['Village Councils', 'Women\'s Groups', 'Youth Organizations']
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Partnerships & Collaborations
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Our research impact is amplified through strategic partnerships with diverse stakeholders across the Pacific and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="p-6 rounded-lg border transition-transform hover:scale-105" 
                 style={{ 
                   backgroundColor: '#edf4ff',
                   borderColor: '#8ecae6',
                   boxShadow: '0 4px 6px rgba(8, 41, 82, 0.1)'
                 }}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                     style={{ backgroundColor: '#ffb703' }}>
                  <partner.icon className="w-5 h-5" style={{ color: '#082952' }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#082952' }}>
                  {partner.type}
                </h3>
              </div>
              <p className="mb-4" style={{ color: '#082952' }}>
                {partner.description}
              </p>
              <div>
                <h4 className="font-medium mb-2" style={{ color: '#219ebc' }}>
                  Key Partners:
                </h4>
                <ul className="space-y-1">
                  {partner.examples.map((example, idx) => (
                    <li key={idx} className="text-sm" style={{ color: '#082952' }}>
                      • {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;