import React from 'react';
import { TrendingUp, Award, FileText, Clock } from 'lucide-react';

const GrantStatistics = () => {
  const stats = [
    {
      number: "$4.8M",
      label: "Total Funding Secured",
      icon: TrendingUp,
      color: '#ffb703'
    },
    {
      number: "127",
      label: "Active Grants",
      icon: Award,
      color: '#8ecae6'
    },
    {
      number: "89%",
      label: "Success Rate",
      icon: FileText,
      color: '#219ebc'
    },
    {
      number: "24",
      label: "Funding Sources",
      icon: Clock,
      color: '#d7a12c'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Funding Success
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Our track record demonstrates strong performance in securing research funding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg shadow-lg"
              style={{ 
                backgroundColor: '#edf4ff',
                border: '1px solid #8ecae6'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: stat.color }}
              >
                <stat.icon className="w-8 h-8" style={{ color: '#082952' }} />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#082952' }}>
                {stat.number}
              </div>
              <div className="text-sm font-medium" style={{ color: '#082952' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrantStatistics;