import React from 'react';
import { Calendar, Users, Eye, Download, ExternalLink } from 'lucide-react';

const FeaturedPublications = () => {
  const publications = [
    {
      title: "Climate Change Adaptation Strategies for Small Island Developing States: A Solomon Islands Perspective",
      authors: "Dr. Maria Tukana, Prof. James Waigani, Dr. Sarah Kere",
      journal: "Pacific Climate Research Journal",
      year: "2024",
      type: "Journal Article",
      views: "1,247",
      downloads: "892",
      abstract: "This comprehensive study examines effective climate adaptation strategies specifically designed for small island developing states, with particular focus on Solomon Islands' unique environmental challenges and opportunities.",
      tags: ["Climate Change", "Adaptation", "SIDS", "Policy"]
    },
    {
      title: "Traditional Ecological Knowledge in Marine Conservation: Lessons from Solomon Islands Communities",
      authors: "Dr. Peter Qalo, Dr. Ruth Maetala, Prof. Andrew Manu",
      journal: "Indigenous Knowledge Systems Review",
      year: "2024",
      type: "Research Article",
      views: "956",
      downloads: "634",
      abstract: "An in-depth analysis of how traditional ecological knowledge systems contribute to marine conservation efforts in Solomon Islands, highlighting successful community-based approaches.",
      tags: ["Traditional Knowledge", "Marine Conservation", "Community"]
    },
    {
      title: "Economic Impact of Tourism Development on Pacific Island Communities",
      authors: "Dr. Grace Pollard, Dr. Michael Temu, Prof. Elizabeth Ratunabuabua",
      journal: "Pacific Economic Development Quarterly",
      year: "2024",
      type: "Research Paper",
      views: "2,103",
      downloads: "1,567",
      abstract: "A comprehensive economic analysis examining the multifaceted impacts of tourism development on local communities across various Pacific island nations.",
      tags: ["Tourism", "Economic Development", "Pacific Islands"]
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Featured Publications
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Discover our most impactful and recently published research outputs
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                backgroundColor: '#edf4ff',
                border: '1px solid #8ecae6'
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: '#ffb703', color: '#082952' }}
                    >
                      {pub.type}
                    </span>
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                    >
                      {pub.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#082952' }}>
                    {pub.title}
                  </h3>
                  
                  <div className="flex items-center mb-2" style={{ color: '#082952' }}>
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{pub.authors}</span>
                  </div>
                  
                  <div className="flex items-center mb-3" style={{ color: '#082952' }}>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{pub.journal}</span>
                  </div>
                  
                  <p className="text-sm mb-4" style={{ color: '#082952' }}>
                    {pub.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 rounded text-xs"
                        style={{ backgroundColor: '#d7a12c', color: '#082952' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-64 space-y-4">
                  <div className="flex items-center justify-between text-sm" style={{ color: '#082952' }}>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{pub.views} views</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      <span>{pub.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <button 
                      className="w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:shadow-md"
                      style={{ backgroundColor: '#ffb703', color: '#082952' }}
                    >
                      <Download className="w-4 h-4 inline mr-2" />
                      Download PDF
                    </button>
                    <button 
                      className="w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:shadow-md"
                      style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
                    >
                      <ExternalLink className="w-4 h-4 inline mr-2" />
                      View Online
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: '#219ebc', color: '#ffffff' }}
          >
            View All Publications
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPublications;