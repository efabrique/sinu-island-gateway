import React from 'react';
import { Download, BookOpen, Users, Shield, Heart, Microscope } from 'lucide-react';

const EthicsGuidelines = () => {
  const guidelines = [
    {
      title: "Human Research Ethics Guidelines",
      description: "Comprehensive guidelines for research involving human participants",
      icon: Users,
      color: '#ffb703',
      documents: [
        "SINU Human Research Ethics Policy",
        "Informed Consent Guidelines",
        "Privacy and Confidentiality Standards",
        "Vulnerable Populations Protocol"
      ]
    },
    {
      title: "Animal Research Ethics",
      description: "Standards for ethical conduct in animal research",
      icon: Heart,
      color: '#8ecae6',
      documents: [
        "Animal Care and Use Guidelines",
        "Animal Welfare Standards",
        "Euthanasia Protocols",
        "Environmental Enrichment Requirements"
      ]
    },
    {
      title: "Research Integrity Framework",
      description: "Principles and practices for responsible research conduct",
      icon: Shield,
      color: '#219ebc',
      documents: [
        "Research Misconduct Policy",
        "Authorship Guidelines",
        "Data Management Standards",
        "Publication Ethics Guidelines"
      ]
    },
    {
      title: "Biosafety Guidelines",
      description: "Safety protocols for biological and genetic research",
      icon: Microscope,
      color: '#d7a12c',
      documents: [
        "Laboratory Biosafety Manual",
        "Genetic Modification Guidelines",
        "Waste Disposal Protocols",
        "Emergency Response Procedures"
      ]
    }
  ];

  const keyPrinciples = [
    {
      principle: "Respect for Persons",
      description: "Recognizing the autonomy of individuals and protecting those with diminished autonomy"
    },
    {
      principle: "Beneficence",
      description: "Maximizing benefits while minimizing harm and ensuring favorable risk-benefit ratios"
    },
    {
      principle: "Justice",
      description: "Fair distribution of research benefits and burdens across all populations"
    },
    {
      principle: "Integrity",
      description: "Maintaining honesty, accuracy, and transparency in all aspects of research"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Ethics Guidelines & Policies
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Comprehensive frameworks ensuring ethical standards across all research activities
          </p>
        </div>

        {/* Key Principles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#082952' }}>
            Fundamental Ethical Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyPrinciples.map((item, index) => (
              <div 
                key={index}
                className="rounded-lg p-6 shadow-lg"
                style={{ 
                  backgroundColor: '#edf4ff',
                  border: '1px solid #8ecae6'
                }}
              >
                <h4 className="text-lg font-bold mb-3" style={{ color: '#082952' }}>
                  {item.principle}
                </h4>
                <p style={{ color: '#082952' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines Categories */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#082952' }}>
            Ethics Guidelines by Category
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidelines.map((guideline, index) => (
              <div 
                key={index}
                className="rounded-lg p-6 shadow-lg"
                style={{ 
                  backgroundColor: '#edf4ff',
                  border: '1px solid #8ecae6'
                }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: guideline.color }}
                  >
                    <guideline.icon className="w-6 h-6" style={{ color: '#082952' }} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#082952' }}>
                      {guideline.title}
                    </h4>
                    <p className="mb-4" style={{ color: '#082952' }}>
                      {guideline.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h5 className="text-sm font-semibold" style={{ color: '#219ebc' }}>
                    Available Documents:
                  </h5>
                  <div className="space-y-2">
                    {guideline.documents.map((document, docIndex) => (
                      <div key={docIndex} className="flex items-center justify-between">
                        <span className="text-sm" style={{ color: '#082952' }}>
                          {document}
                        </span>
                        <button 
                          className="px-3 py-1 rounded text-xs font-medium transition-all duration-200 hover:shadow-sm"
                          style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                        >
                          <Download className="w-3 h-3 inline mr-1" />
                          PDF
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div 
          className="rounded-lg p-8 mt-16 text-center"
          style={{ backgroundColor: '#edf4ff', border: '1px solid #8ecae6' }}
        >
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: '#ffb703' }}
          >
            <BookOpen className="w-8 h-8" style={{ color: '#082952' }} />
          </div>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#082952' }}>
            Ethics Training & Resources
          </h3>
          <p className="text-lg mb-6" style={{ color: '#082952' }}>
            Access comprehensive training materials and resources to ensure ethical research conduct
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#ffb703', color: '#082952' }}
            >
              <BookOpen className="w-5 h-5 inline mr-2" />
              Ethics Training Module
            </button>
            <button 
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
            >
              <Download className="w-5 h-5 inline mr-2" />
              Complete Guidelines Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicsGuidelines;