import React from 'react';
import { ExternalLink, FileText, Video, BookOpen, Users, Calendar } from 'lucide-react';

const EthicsResources = () => {
  const resources = [
    {
      category: "Forms & Templates",
      icon: FileText,
      color: '#ffb703',
      items: [
        "Human Research Ethics Application Form",
        "Animal Ethics Application Form",
        "Informed Consent Template",
        "Participant Information Sheet Template",
        "Risk Assessment Worksheet",
        "Amendment Request Form"
      ]
    },
    {
      category: "Training Materials",
      icon: Video,
      color: '#8ecae6',
      items: [
        "Research Ethics Online Course",
        "Human Subjects Training Module",
        "Animal Research Ethics Workshop",
        "Data Privacy & Security Training",
        "Publication Ethics Seminar",
        "Cultural Sensitivity Training"
      ]
    },
    {
      category: "Reference Materials",
      icon: BookOpen,
      color: '#219ebc',
      items: [
        "National Ethical Guidelines",
        "International Research Standards",
        "Case Studies in Research Ethics",
        "Best Practices Handbook",
        "Ethics Committee Procedures Manual",
        "Regulatory Compliance Guide"
      ]
    },
    {
      category: "Support Services",
      icon: Users,
      color: '#d7a12c',
      items: [
        "Ethics Consultation Service",
        "Application Review Assistance",
        "Pre-submission Guidance",
        "Protocol Development Support",
        "Ongoing Compliance Monitoring",
        "Ethics Committee Liaison"
      ]
    }
  ];

  const externalResources = [
    {
      title: "World Medical Association",
      description: "Declaration of Helsinki - Ethical Principles for Medical Research",
      url: "https://www.wma.net/policies-post/wma-declaration-of-helsinki-ethical-principles-for-medical-research-involving-human-subjects/"
    },
    {
      title: "Council for International Organizations of Medical Sciences",
      description: "International Ethical Guidelines for Health-related Research",
      url: "https://cioms.ch/guidelines/"
    },
    {
      title: "UNESCO",
      description: "Universal Declaration on Bioethics and Human Rights",
      url: "https://www.unesco.org/en/legal-affairs/universal-declaration-bioethics-and-human-rights"
    },
    {
      title: "Pacific Research Guidelines",
      description: "Pacific-specific research ethics and cultural protocols",
      url: "#"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Ethics Resources & Support
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Comprehensive resources to support ethical research practices at SINU
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 shadow-lg"
              style={{ 
                backgroundColor: '#ffffff',
                border: '1px solid #8ecae6'
              }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: resource.color }}
                >
                  <resource.icon className="w-5 h-5" style={{ color: '#082952' }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#082952' }}>
                  {resource.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {resource.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: '#082952' }}>
                      {item}
                    </span>
                    <button 
                      className="px-3 py-1 rounded text-xs font-medium transition-all duration-200 hover:shadow-sm"
                      style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                    >
                      Access
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* External Resources */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#082952' }}>
            External Ethics Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {externalResources.map((resource, index) => (
              <div 
                key={index}
                className="rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #8ecae6'
                }}
              >
                <h4 className="text-lg font-bold mb-2" style={{ color: '#082952' }}>
                  {resource.title}
                </h4>
                <p className="mb-4 text-sm" style={{ color: '#082952' }}>
                  {resource.description}
                </p>
                <a 
                  href={resource.url}
                  className="inline-flex items-center font-medium hover:underline"
                  style={{ color: '#219ebc' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Resource
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access Section */}
        <div 
          className="rounded-lg p-8 mt-16 text-center"
          style={{ backgroundColor: '#ffffff', border: '1px solid #ffb703' }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#082952' }}>
            Need Help Getting Started?
          </h3>
          <p className="text-lg mb-8" style={{ color: '#082952' }}>
            Our ethics team is here to support you through every step of the ethics review process
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              className="py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#ffb703', color: '#082952' }}
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              Book Consultation
            </button>
            <button 
              className="py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#8ecae6', color: '#082952' }}
            >
              <FileText className="w-5 h-5 inline mr-2" />
              Download Forms
            </button>
            <button 
              className="py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
            >
              <Video className="w-5 h-5 inline mr-2" />
              Watch Training
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicsResources;