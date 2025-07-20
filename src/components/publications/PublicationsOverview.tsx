import React from 'react';
import { BookOpen, Users, Target } from 'lucide-react';

const PublicationsOverview = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            SINU Research Repository
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Our open access repository showcases the diverse research outputs from Solomon Islands National University. 
            From peer-reviewed articles to conference proceedings, discover the latest contributions to knowledge 
            that address Pacific region challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#ffb703' }}
            >
              <BookOpen className="w-8 h-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Open Access
            </h3>
            <p style={{ color: '#082952' }}>
              Free access to research publications, promoting knowledge sharing 
              and collaboration across the Pacific region.
            </p>
          </div>

          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#8ecae6' }}
            >
              <Users className="w-8 h-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Collaborative Research
            </h3>
            <p style={{ color: '#082952' }}>
              Multi-disciplinary publications featuring collaborations with 
              international researchers and institutions.
            </p>
          </div>

          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#219ebc' }}
            >
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Impactful Research
            </h3>
            <p style={{ color: '#082952' }}>
              Research that addresses real-world challenges and contributes 
              to sustainable development in the Pacific.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsOverview;