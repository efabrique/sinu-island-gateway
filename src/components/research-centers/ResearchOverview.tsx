import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

const ResearchOverview = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Our Research Approach
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Research at SINU is multidisciplinary and follows an integrated and applied approach. 
            We work closely with industry and government partners as well as other research 
            institutes to develop solutions and solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#ffb703' }}
            >
              <Target className="w-8 h-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Applied Research
            </h3>
            <p style={{ color: '#082952' }}>
              Focused on practical solutions that address real-world challenges 
              facing our Pacific region and beyond.
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
              Collaborative Partnerships
            </h3>
            <p style={{ color: '#082952' }}>
              Working with industry, government, and international research 
              institutions to maximize impact and knowledge sharing.
            </p>
          </div>

          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#219ebc' }}
            >
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Global Relevance
            </h3>
            <p style={{ color: '#082952' }}>
              Conducting research that benefits local communities while 
              contributing to global knowledge and understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchOverview;