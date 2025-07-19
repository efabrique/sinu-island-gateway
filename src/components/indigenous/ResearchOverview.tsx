import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Globe, Heart } from 'lucide-react';

const ResearchOverview = () => {
  const objectives = [
    {
      icon: Users,
      title: "Community-Led Research",
      description: "Support the capacity of Aboriginal and Torres Strait Islander researchers and engage in Indigenous knowledges in cross-disciplinary research."
    },
    {
      icon: Target,
      title: "Knowledge Creation",
      description: "Foster an environment that facilitates diverse forms of knowledge creation through Indigenous-led and co-designed research."
    },
    {
      icon: Globe,
      title: "Global Partnerships",
      description: "Pursue local, national, and international partnerships that honor Indigenous knowledge systems and traditional practices."
    },
    {
      icon: Heart,
      title: "Cultural Preservation",
      description: "Protect and promote Indigenous cultural heritage, traditional ecological knowledge, and community wisdom."
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Our Research Network
          </h2>
          <p className="text-xl text-[#219ebc] max-w-4xl mx-auto leading-relaxed">
            The Indigenous Knowledge Research Network is led by Indigenous academics, researchers, 
            and Community knowledge-holders with the aim to respond to the needs and interests that 
            support and promote unique perspectives and contributions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <Card 
              key={index} 
              className="bg-white border-[#8ecae6] hover:shadow-lg transition-all duration-300 hover:border-[#219ebc]"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#ffb703] rounded-full flex items-center justify-center mx-auto mb-6">
                  <objective.icon className="h-8 w-8 text-[#082952]" />
                </div>
                <h3 className="text-xl font-bold text-[#082952] mb-4">
                  {objective.title}
                </h3>
                <p className="text-[#219ebc] leading-relaxed">
                  {objective.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchOverview;