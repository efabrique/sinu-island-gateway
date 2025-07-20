import React from 'react';
import { ArrowRight, Waves, Leaf, Heart, Users, Shield, Microscope, BookOpen, Calculator } from 'lucide-react';

const PublicationsCategories = () => {
  const categories = [
    {
      title: "Marine Sciences & Conservation",
      count: "342 publications",
      description: "Research on marine ecosystems, fisheries, and coastal conservation",
      icon: Waves,
      color: '#8ecae6'
    },
    {
      title: "Climate Change & Environment",
      count: "289 publications", 
      description: "Climate adaptation, environmental monitoring, and sustainability",
      icon: Leaf,
      color: '#219ebc'
    },
    {
      title: "Public Health & Medicine",
      count: "267 publications",
      description: "Health research, disease prevention, and healthcare delivery",
      icon: Heart,
      color: '#ffb703'
    },
    {
      title: "Social Sciences & Governance",
      count: "198 publications",
      description: "Policy research, social development, and governance studies",
      icon: Users,
      color: '#d7a12c'
    },
    {
      title: "Education & Cultural Studies",
      count: "156 publications",
      description: "Educational research, cultural preservation, and indigenous knowledge",
      icon: BookOpen,
      color: '#219ebc'
    },
    {
      title: "Technology & Innovation",
      count: "134 publications",
      description: "Technology development, digital innovation, and engineering",
      icon: Microscope,
      color: '#8ecae6'
    },
    {
      title: "Economics & Development",
      count: "112 publications",
      description: "Economic research, development studies, and policy analysis",
      icon: Calculator,
      color: '#ffb703'
    },
    {
      title: "Security & Strategic Studies",
      count: "89 publications",
      description: "Regional security, peace studies, and strategic analysis",
      icon: Shield,
      color: '#d7a12c'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#edf4ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Publication Categories
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#082952' }}>
            Browse publications by research area and discover the breadth of scholarly work at SINU
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              style={{ 
                backgroundColor: '#ffffff',
                border: '1px solid #8ecae6'
              }}
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: category.color }}
                >
                  <category.icon className="w-6 h-6" style={{ color: '#082952' }} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#082952' }}>
                    {category.title}
                  </h3>
                  <p className="text-sm font-medium mb-2" style={{ color: '#219ebc' }}>
                    {category.count}
                  </p>
                  <p className="text-sm mb-3" style={{ color: '#082952' }}>
                    {category.description}
                  </p>
                  <div className="flex items-center group-hover:translate-x-1 transition-transform duration-200">
                    <span className="text-sm font-medium" style={{ color: '#219ebc' }}>
                      Browse publications
                    </span>
                    <ArrowRight className="w-4 h-4 ml-1" style={{ color: '#219ebc' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsCategories;