import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, Sprout, Building, Users, Sun, FlaskConical } from 'lucide-react';

const ResearchAreas: React.FC = () => {
  const researchAreas = [
    {
      icon: Waves,
      title: "Sea Level Rise & Coastal Adaptation",
      description: "Investigating coastal vulnerability and developing adaptation strategies for Pacific Island communities",
      highlights: ["Coastal protection measures", "Community relocation planning", "Infrastructure adaptation"]
    },
    {
      icon: Sprout,
      title: "Agricultural Resilience",
      description: "Enhancing food security through climate-resilient agricultural practices and crop adaptation",
      highlights: ["Drought-resistant crops", "Sustainable farming", "Soil conservation"]
    },
    {
      icon: Building,
      title: "Urban Climate Adaptation",
      description: "Supporting cities and towns in building climate resilience and sustainable development",
      highlights: ["Green infrastructure", "Climate-proof planning", "Disaster preparedness"]
    },
    {
      icon: Users,
      title: "Community Resilience",
      description: "Strengthening social systems and community capacity for climate adaptation",
      highlights: ["Social cohesion", "Local leadership", "Traditional knowledge"]
    },
    {
      icon: Sun,
      title: "Renewable Energy Transition",
      description: "Facilitating the shift to clean energy systems as climate adaptation strategy",
      highlights: ["Solar energy systems", "Energy storage", "Grid modernization"]
    },
    {
      icon: FlaskConical,
      title: "Climate Science & Monitoring",
      description: "Advanced climate research and environmental monitoring for informed decision-making",
      highlights: ["Climate modeling", "Impact assessment", "Early warning systems"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            Research Areas
          </h2>
          <p className="text-lg text-[#219ebc] max-w-3xl mx-auto">
            Our research spans multiple sectors, addressing the diverse challenges 
            of climate change adaptation in Pacific Island environments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <Card key={index} className="border-[#8ecae6] hover:border-[#219ebc] transition-colors group hover:shadow-lg">
              <CardHeader>
                <div className="bg-[#8ecae6] w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#219ebc] transition-colors">
                  <area.icon className="h-7 w-7 text-[#082952]" />
                </div>
                <CardTitle className="text-xl text-[#082952]">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952] mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-2">
                  {area.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[#ffb703] rounded-full mr-3"></div>
                      <span className="text-[#219ebc]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;