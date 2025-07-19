import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, Leaf, Thermometer, Scale, Ship, FlaskConical } from 'lucide-react';

const ResearchAreas: React.FC = () => {
  const researchAreas = [
    {
      icon: Waves,
      title: "Marine Biology & Ecology",
      description: "Studying marine life, ecosystems, and biodiversity conservation in Pacific waters",
      highlights: ["Species conservation", "Ecosystem dynamics", "Marine biodiversity"]
    },
    {
      icon: Leaf,
      title: "Coral Reef Research",
      description: "Investigating coral health, bleaching, and restoration techniques",
      highlights: ["Reef restoration", "Climate adaptation", "Biodiversity protection"]
    },
    {
      icon: Thermometer,
      title: "Climate Change Impact",
      description: "Assessing ocean warming, acidification, and their effects on marine life",
      highlights: ["Ocean acidification", "Temperature monitoring", "Species adaptation"]
    },
    {
      icon: Scale,
      title: "Marine Law & Policy",
      description: "Developing legal frameworks for marine conservation and sustainable use",
      highlights: ["Conservation policy", "Sustainable fisheries", "International law"]
    },
    {
      icon: Ship,
      title: "Ocean Technology",
      description: "Advanced monitoring systems and sustainable marine technologies",
      highlights: ["Remote sensing", "Underwater robotics", "Data collection"]
    },
    {
      icon: FlaskConical,
      title: "Marine Chemistry",
      description: "Studying ocean chemistry and pollution impacts on marine environments",
      highlights: ["Water quality", "Pollution analysis", "Chemical processes"]
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
            Our multidisciplinary research spans across various marine science fields, 
            addressing critical challenges facing our ocean ecosystems
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