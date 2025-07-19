import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer, Globe, Users, Target } from 'lucide-react';

const ResearchOverview: React.FC = () => {
  const highlights = [
    {
      icon: Thermometer,
      title: "Impact Research",
      description: "Understanding climate impacts on Pacific communities and ecosystems"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Contributing to international climate adaptation knowledge"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Working directly with local communities for practical solutions"
    },
    {
      icon: Target,
      title: "Action-Oriented",
      description: "Developing implementable adaptation strategies and policies"
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#082952] mb-6">
            About Climate Change Adaptation Lab
          </h2>
          <p className="text-lg text-[#082952] max-w-4xl mx-auto leading-relaxed">
            We take a collaborative, multi-disciplinary, and reflexive approach to understanding the complex, 
            more-than-climatic character of impacts, as they intersect in our daily lives. Our research focuses 
            on enabling sectors in society to adapt to climate change while maintaining the health and well-being 
            of human and environmental systems.
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
          <h3 className="text-2xl font-bold text-[#082952] mb-6">Our Approach</h3>
          <p className="text-[#082952] leading-relaxed mb-4">
            Work is foundational activity that shapes the health and well-being of human and environmental systems. 
            We focus on enabling sectors in society to understand and adapt to climate change impacts through 
            collaborative research and community engagement.
          </p>
          <p className="text-[#082952] leading-relaxed">
            Our research is committed to being impactful and reflexive, informing practical adaptation strategies 
            that can be implemented across various sectors including agriculture, fisheries, tourism, and urban planning 
            in Pacific Island contexts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchOverview;