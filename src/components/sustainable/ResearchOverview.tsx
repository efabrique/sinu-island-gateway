import React from 'react';
import { Target, Globe, Leaf } from 'lucide-react';

const ResearchOverview = () => {
  return (
    <section style={{ backgroundColor: '#edf4ff' }} className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Research Overview
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Our Sustainable Development research program addresses critical global challenges through innovative solutions that balance environmental protection, economic growth, and social equity. We work collaboratively across disciplines to create lasting positive impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(8, 41, 82, 0.1)' }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8ecae6' }}>
              <Target className="w-8 h-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              SDG Alignment
            </h3>
            <p style={{ color: '#082952' }}>
              Research aligned with UN Sustainable Development Goals to address global challenges effectively.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(8, 41, 82, 0.1)' }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#219ebc' }}>
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Global Impact
            </h3>
            <p style={{ color: '#082952' }}>
              Creating solutions with global relevance and local application for sustainable development.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(8, 41, 82, 0.1)' }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ffb703' }}>
              <Leaf className="w-8 h-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Environmental Focus
            </h3>
            <p style={{ color: '#082952' }}>
              Prioritizing environmental sustainability in all research initiatives and outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchOverview;