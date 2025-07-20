import React from 'react';
import { ArrowRight, Waves, Leaf, Heart, Shield, Microscope, BookOpen } from 'lucide-react';

const ResearchInstitutes = () => {
  const institutes = [
    {
      title: "Institute for Marine Sciences & Coastal Studies",
      description: "Leading research in marine conservation, fisheries management, and coastal ecosystem protection across the Pacific.",
      icon: Waves,
      link: "/marine-science-conservation"
    },
    {
      title: "Institute for Climate Change & Sustainable Development",
      description: "Addressing climate adaptation, renewable energy, and sustainable development challenges in small island states.",
      icon: Leaf,
      link: "/climate-change-adaptation"
    },
    {
      title: "Pacific Health Research Institute",
      description: "Advancing public health research, tropical disease prevention, and healthcare delivery in Pacific communities.",
      icon: Heart,
      link: "/public-health"
    },
    {
      title: "Institute for Indigenous Knowledge & Cultural Studies",
      description: "Preserving traditional knowledge systems and promoting cultural heritage research across Solomon Islands.",
      icon: BookOpen,
      link: "/indigenous-knowledge"
    },
    {
      title: "Centre for Security & Strategic Studies",
      description: "Research focused on regional security, governance, and strategic policy development for the Pacific region.",
      icon: Shield,
      link: "#"
    },
    {
      title: "Biotechnology & Food Security Centre",
      description: "Developing sustainable agricultural practices and biotechnology solutions for food security in the Pacific.",
      icon: Microscope,
      link: "#"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Research Institutes
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Our specialized research institutes lead groundbreaking research across key areas 
            that are vital to the Pacific region's development and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutes.map((institute, index) => (
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
                style={{ backgroundColor: '#ffb703' }}
              >
                <institute.icon className="w-6 h-6" style={{ color: '#082952' }} />
              </div>
              
              <h3 className="text-xl font-bold mb-3" style={{ color: '#082952' }}>
                {institute.title}
              </h3>
              
              <p className="mb-4" style={{ color: '#082952' }}>
                {institute.description}
              </p>
              
              {institute.link !== "#" && (
                <a 
                  href={institute.link}
                  className="inline-flex items-center font-medium group-hover:translate-x-1 transition-transform duration-200"
                  style={{ color: '#219ebc' }}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInstitutes;