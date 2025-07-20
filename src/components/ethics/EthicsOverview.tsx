import React from 'react';
import { Shield, Users, BookOpen, Scale } from 'lucide-react';

const EthicsOverview = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Research Ethics & Integrity
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            The SINU Ethics Committee ensures that all research conducted at our university 
            meets the highest ethical standards and complies with national and international 
            guidelines for responsible research conduct.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#ffb703' }}
            >
              <Shield className="w-8 h-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Research Integrity
            </h3>
            <p style={{ color: '#082952' }}>
              Upholding the highest standards of honesty, accuracy, 
              and responsibility in research.
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
              Human Research Ethics
            </h3>
            <p style={{ color: '#082952' }}>
              Protecting the rights, welfare, and dignity of 
              human research participants.
            </p>
          </div>

          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#219ebc' }}
            >
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Ethical Guidelines
            </h3>
            <p style={{ color: '#082952' }}>
              Comprehensive frameworks and policies to guide 
              ethical research practices.
            </p>
          </div>

          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#d7a12c' }}
            >
              <Scale className="w-8 h-8" style={{ color: '#082952' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
              Compliance & Review
            </h3>
            <p style={{ color: '#082952' }}>
              Rigorous review processes to ensure compliance 
              with ethical standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicsOverview;