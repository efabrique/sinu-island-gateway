import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Droplets, Zap, Building2, Users, Leaf } from 'lucide-react';

const AdaptationStrategies: React.FC = () => {
  const strategies = [
    {
      icon: Shield,
      title: "Coastal Protection Systems",
      category: "Infrastructure",
      description: "Implementing natural and engineered solutions to protect coastlines from sea level rise and storm surge",
      solutions: [
        "Mangrove restoration projects",
        "Sea wall construction and maintenance",
        "Beach nourishment programs",
        "Coral reef restoration"
      ],
      status: "Implementation"
    },
    {
      icon: Droplets,
      title: "Water Resource Management",
      category: "Environmental",
      description: "Developing sustainable water systems to ensure security during droughts and extreme weather",
      solutions: [
        "Rainwater harvesting systems",
        "Groundwater protection measures",
        "Desalination technology",
        "Water conservation programs"
      ],
      status: "Pilot Phase"
    },
    {
      icon: Zap,
      title: "Renewable Energy Systems",
      category: "Energy",
      description: "Transitioning to clean energy sources to reduce vulnerability and emissions",
      solutions: [
        "Solar panel installations",
        "Wind energy development",
        "Battery storage systems",
        "Smart grid technology"
      ],
      status: "Active"
    },
    {
      icon: Building2,
      title: "Climate-Resilient Infrastructure",
      category: "Urban Planning",
      description: "Building and retrofitting infrastructure to withstand climate impacts",
      solutions: [
        "Flood-resistant building codes",
        "Green building standards",
        "Transportation resilience",
        "Communication networks"
      ],
      status: "Planning"
    },
    {
      icon: Users,
      title: "Community-Based Adaptation",
      category: "Social",
      description: "Empowering communities with knowledge and resources for local adaptation",
      solutions: [
        "Community training programs",
        "Local adaptation planning",
        "Traditional knowledge integration",
        "Early warning systems"
      ],
      status: "Implementation"
    },
    {
      icon: Leaf,
      title: "Ecosystem-Based Adaptation",
      category: "Environmental",
      description: "Using natural systems to provide protection and adaptation benefits",
      solutions: [
        "Forest conservation",
        "Wetland restoration",
        "Sustainable agriculture",
        "Marine protected areas"
      ],
      status: "Ongoing"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-[#219ebc] text-white';
      case 'Implementation': return 'bg-[#ffb703] text-[#082952]';
      case 'Ongoing': return 'bg-[#8ecae6] text-[#082952]';
      case 'Planning': return 'bg-[#d7a12c] text-white';
      case 'Pilot Phase': return 'bg-[#082952] text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Infrastructure': return 'text-[#219ebc]';
      case 'Environmental': return 'text-[#8ecae6]';
      case 'Energy': return 'text-[#ffb703]';
      case 'Urban Planning': return 'text-[#d7a12c]';
      case 'Social': return 'text-[#082952]';
      default: return 'text-gray-600';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Adaptation Strategies
          </h2>
          <p className="text-lg text-[#219ebc] max-w-3xl mx-auto">
            Comprehensive strategies and solutions for building climate resilience 
            across sectors and communities in Pacific Island contexts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <Card key={index} className="border-[#8ecae6] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-[#8ecae6] w-12 h-12 rounded-lg flex items-center justify-center">
                    <strategy.icon className="h-6 w-6 text-[#082952]" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(strategy.status)}`}>
                    {strategy.status}
                  </div>
                </div>
                <div className={`text-sm font-medium mb-2 ${getCategoryColor(strategy.category)}`}>
                  {strategy.category}
                </div>
                <CardTitle className="text-xl text-[#082952]">{strategy.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-[#082952] mb-6 leading-relaxed">
                  {strategy.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-[#082952] mb-3">Key Solutions:</h4>
                  <div className="space-y-2">
                    {strategy.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-[#ffb703] rounded-full mr-3"></div>
                        <span className="text-[#082952] text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#082952] to-[#219ebc] rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Integrated Adaptation Approach</h3>
            <p className="text-lg leading-relaxed mb-6">
              Our adaptation strategies combine cutting-edge science with traditional knowledge, 
              community engagement, and international best practices to build comprehensive 
              resilience against climate change impacts.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-semibold px-8 py-3 rounded-lg transition-colors">
                Learn More About Our Strategies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaptationStrategies;