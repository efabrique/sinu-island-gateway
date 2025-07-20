import React from 'react';
import { ArrowRight, Globe, Building, GraduationCap, Users, Leaf, Shield } from 'lucide-react';

const GrantCategories = () => {
  const categories = [
    {
      title: "National Competitive Grants",
      description: "Major national funding schemes for established researchers and research teams",
      icon: Globe,
      color: '#ffb703',
      examples: [
        "Pacific Research Excellence Grants",
        "National Science Foundation Awards",
        "Strategic Research Initiatives"
      ]
    },
    {
      title: "Industry Partnerships",
      description: "Collaborative funding with industry partners and commercial organizations",
      icon: Building,
      color: '#8ecae6',
      examples: [
        "Industry Research Partnerships",
        "Technology Transfer Grants",
        "Commercial Innovation Fund"
      ]
    },
    {
      title: "Early Career Researcher Grants",
      description: "Dedicated funding opportunities for early career researchers and PhD students",
      icon: GraduationCap,
      color: '#219ebc',
      examples: [
        "Early Career Research Fellowships",
        "PhD Completion Grants",
        "Emerging Researcher Awards"
      ]
    },
    {
      title: "International Collaborations",
      description: "Cross-border research partnerships and international joint funding",
      icon: Users,
      color: '#d7a12c',
      examples: [
        "Pacific-Australia Research Links",
        "UNESCO Research Grants",
        "Commonwealth Research Initiatives"
      ]
    },
    {
      title: "Environmental & Climate Research",
      description: "Specialized funding for environmental and climate change research",
      icon: Leaf,
      color: '#219ebc',
      examples: [
        "Climate Adaptation Research Fund",
        "Marine Conservation Grants",
        "Sustainability Innovation Awards"
      ]
    },
    {
      title: "Strategic Priority Areas",
      description: "Government and agency funding for strategic national priorities",
      icon: Shield,
      color: '#ffb703',
      examples: [
        "Health Security Research",
        "Food Security Initiatives",
        "Regional Development Grants"
      ]
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Funding Categories
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Explore different types of research funding available to SINU researchers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ 
                backgroundColor: '#edf4ff',
                border: '1px solid #8ecae6'
              }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: category.color }}
              >
                <category.icon className="w-6 h-6" style={{ color: '#082952' }} />
              </div>
              
              <h3 className="text-xl font-bold mb-3" style={{ color: '#082952' }}>
                {category.title}
              </h3>
              
              <p className="mb-4" style={{ color: '#082952' }}>
                {category.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2" style={{ color: '#219ebc' }}>
                  Examples:
                </h4>
                <ul className="space-y-1">
                  {category.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm" style={{ color: '#082952' }}>
                      • {example}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="#"
                className="inline-flex items-center font-medium group-hover:translate-x-1 transition-transform duration-200"
                style={{ color: '#219ebc' }}
              >
                View opportunities
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrantCategories;