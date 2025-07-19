import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Waves, Globe, Fish, Microscope } from 'lucide-react';

const ResearchOverview: React.FC = () => {
  const highlights = [
    {
      icon: Waves,
      title: "150+ Years",
      description: "Of marine science teaching and research excellence"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Research addressing worldwide marine conservation challenges"
    },
    {
      icon: Fish,
      title: "Biodiversity Focus",
      description: "Protecting marine ecosystems and species diversity"
    },
    {
      icon: Microscope,
      title: "Cutting-edge Research",
      description: "Advanced technology and innovative methodologies"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            About Marine Studies Institute
          </h2>
          <p className="text-lg text-[#082952] max-w-4xl mx-auto leading-relaxed">
            We are the face of marine research at the Solomon Islands National University, with over 150 years of marine science 
            teaching and research in the fields of biology, ecology, geosciences, climate change technology, green engineering, 
            ocean observation, marine geology and international law and policy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-[#8ecae6] hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-[#8ecae6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-[#082952]" />
                </div>
                <h3 className="text-xl font-semibold text-[#082952] mb-2">{highlight.title}</h3>
                <p className="text-[#219ebc]">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 border border-[#8ecae6]">
          <h3 className="text-2xl font-bold text-[#082952] mb-6">Our Mission</h3>
          <p className="text-[#082952] leading-relaxed mb-4">
            Australia has a vast marine jurisdiction with unique ocean and coastal ecosystems, many of which are poorly understood. 
            The accelerating changes in the climate, combined with land use practices, marine litter, fishing, shoreline industries 
            and new risks, such as increasing ocean noise and potential deep-sea mining are presenting Australia and the global 
            community with unprecedented challenges.
          </p>
          <p className="text-[#082952] leading-relaxed">
            We are working to understand these challenges and expand the scientific, technical and legal know-how to solve problems 
            like biodiversity loss and ecosystem degradation, while supporting sustainable development of ocean resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchOverview;