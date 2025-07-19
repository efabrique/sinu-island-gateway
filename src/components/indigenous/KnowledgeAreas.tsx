import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Waves, Leaf, Home, BookOpen, Sun, Fish } from 'lucide-react';

const KnowledgeAreas = () => {
  const areas = [
    {
      icon: Waves,
      title: "Traditional Navigation",
      description: "Ancient wayfinding techniques and oceanic knowledge systems."
    },
    {
      icon: Leaf,
      title: "Traditional Medicine",
      description: "Plant-based healing practices and holistic health approaches."
    },
    {
      icon: Home,
      title: "Cultural Architecture",
      description: "Traditional building methods and culturally appropriate design."
    },
    {
      icon: BookOpen,
      title: "Oral Traditions",
      description: "Storytelling, genealogies, and knowledge transmission methods."
    },
    {
      icon: Sun,
      title: "Seasonal Calendars",
      description: "Traditional ecological calendars and seasonal indicators."
    },
    {
      icon: Fish,
      title: "Marine Knowledge",
      description: "Traditional fishing practices and marine resource management."
    }
  ];

  return (
    <section className="py-20 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#082952] mb-6">
            Knowledge Areas
          </h2>
          <p className="text-xl text-[#219ebc] max-w-4xl mx-auto leading-relaxed">
            Our research spans diverse areas of Indigenous knowledge, from traditional 
            navigation to sustainable resource management, honoring the depth and breadth 
            of Pacific Islander wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <Card 
              key={index} 
              className="bg-white border-[#8ecae6] hover:shadow-lg transition-all duration-300 group hover:border-[#219ebc] hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8ecae6] to-[#219ebc] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-[#ffb703] group-hover:to-[#d7a12c] transition-all duration-300">
                  <area.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#082952] mb-4">
                  {area.title}
                </h3>
                <p className="text-[#219ebc] leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeAreas;