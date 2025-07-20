import React from 'react';
import { BarChart3, FileText, TrendingUp, Calendar } from 'lucide-react';

const PublicationStats = () => {
  const stats = [
    {
      number: "2,847",
      label: "Total Publications",
      icon: FileText,
      color: '#ffb703'
    },
    {
      number: "156",
      label: "Publications This Year",
      icon: Calendar,
      color: '#8ecae6'
    },
    {
      number: "89%",
      label: "Open Access Rate",
      icon: TrendingUp,
      color: '#219ebc'
    },
    {
      number: "45",
      label: "Research Areas",
      icon: BarChart3,
      color: '#d7a12c'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Repository Statistics
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Explore our growing collection of research publications and scholarly outputs
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

export default PublicationStats;