import React from 'react';
import { BarChart3, Users, Lightbulb, TreePine } from 'lucide-react';

const Impact = () => {
  const metrics = [
    {
      icon: Users,
      number: '50,000+',
      label: 'People Reached',
      description: 'Community members benefiting from our research programs'
    },
    {
      icon: Lightbulb,
      number: '15',
      label: 'Active Projects',
      description: 'Ongoing research initiatives across various sustainability domains'
    },
    {
      icon: TreePine,
      number: '25%',
      label: 'Carbon Reduction',
      description: 'Average carbon footprint reduction in participating communities'
    },
    {
      icon: BarChart3,
      number: '$12M',
      label: 'Research Funding',
      description: 'Total funding secured for sustainable development research'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Research Impact
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Measuring our contribution to sustainable development across the Pacific region through tangible outcomes and lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 rounded-lg" 
                 style={{ 
                   backgroundColor: '#ffffff',
                   boxShadow: '0 4px 6px rgba(8, 41, 82, 0.1)'
                 }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                   style={{ backgroundColor: '#219ebc' }}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#082952' }}>
                {metric.number}
              </div>
              <div className="font-semibold mb-2" style={{ color: '#d7a12c' }}>
                {metric.label}
              </div>
              <p className="text-sm" style={{ color: '#082952' }}>
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r p-8 rounded-lg text-center" 
             style={{ 
               background: 'linear-gradient(135deg, #219ebc, #8ecae6)',
               color: '#ffffff'
             }}>
          <h3 className="text-2xl font-bold mb-4">
            Join Our Mission
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Be part of the change. Our research creates pathways to a more sustainable future for the Pacific and beyond.
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold transition-colors hover:opacity-90" 
                  style={{ backgroundColor: '#ffb703', color: '#082952' }}>
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;