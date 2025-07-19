import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TreePine, Shield, Mountain, Palette } from 'lucide-react';

const ResearchPriorities = () => {
  const priorities = [
    {
      icon: TreePine,
      title: "Country",
      description: "Research focused on connection to Country, traditional land management practices, and cultural landscapes.",
      color: "bg-[#219ebc]"
    },
    {
      icon: Mountain,
      title: "Ecological Restoration",
      description: "Traditional ecological knowledge applied to environmental restoration and sustainable resource management.",
      color: "bg-[#8ecae6]"
    },
    {
      icon: Shield,
      title: "Heritage Protection",
      description: "Safeguarding Indigenous cultural sites, traditional practices, and intangible cultural heritage.",
      color: "bg-[#ffb703]"
    },
    {
      icon: Palette,
      title: "Indigenous Design",
      description: "Integrating traditional design principles with contemporary practices and cultural protocols.",
      color: "bg-[#d7a12c]"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Research Priorities
          </h2>
          <p className="text-xl text-[#219ebc] max-w-3xl mx-auto leading-relaxed">
            Our research priorities encompass the core areas that matter most to Indigenous 
            communities and knowledge systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {priorities.map((priority, index) => (
            <Card 
              key={index} 
              className="bg-[#edf4ff] border-[#8ecae6] hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className={`${priority.color} h-2 w-full`} />
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`${priority.color} p-4 rounded-full shrink-0`}>
                      <priority.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#082952] mb-4">
                        {priority.title}
                      </h3>
                      <p className="text-[#219ebc] leading-relaxed text-lg">
                        {priority.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchPriorities;