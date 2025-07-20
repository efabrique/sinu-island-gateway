import React from 'react';
import { DollarSign, Users, Globe, Target } from 'lucide-react';

const GrantsOverview = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Research Funding at SINU
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            We provide comprehensive support for researchers seeking funding to advance their work. 
            From national competitive grants to international collaborations, discover opportunities 
            that align with your research goals and make a meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#ffb703' }}
            >
              <DollarSign className="w-8 h-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Competitive Funding
            </h3>
            <p style={{ color: '#082952' }}>
              Access to national and international competitive research grants 
              across diverse disciplines.
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
              Collaborative Projects
            </h3>
            <p style={{ color: '#082952' }}>
              Support for partnerships with industry, government, and 
              international research institutions.
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
              International Funding
            </h3>
            <p style={{ color: '#082952' }}>
              Opportunities for global research collaborations and 
              cross-border funding initiatives.
            </p>
          </div>

          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#d7a12c' }}
            >
              <Target className="w-8 h-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Strategic Research
            </h3>
            <p style={{ color: '#082952' }}>
              Funding aligned with SINU's research priorities and 
              Pacific region development needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrantsOverview;