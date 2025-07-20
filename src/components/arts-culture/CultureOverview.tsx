import React from 'react';
import { Palette, Music, Theater, Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CultureOverview = () => {
  const highlights = [
    {
      icon: Palette,
      title: "Visual Arts",
      description: "Galleries, studios, and exhibition spaces showcasing local and international talent"
    },
    {
      icon: Music,
      title: "Performing Arts",
      description: "Music, dance, and theater productions celebrating Pacific Island culture"
    },
    {
      icon: Theater,
      title: "Cultural Events",
      description: "Festivals, workshops, and community celebrations throughout the year"
    },
    {
      icon: Camera,
      title: "Creative Programs",
      description: "Student clubs, artist residencies, and collaborative projects"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Your Gateway to Cultural Expression
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Solomon Islands National University serves as a vibrant cultural hub where traditional Pacific 
            Island heritage meets contemporary artistic expression. Our programs celebrate diversity, 
            creativity, and the rich cultural tapestry of our island nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="text-center p-6 transition-all duration-300 hover:shadow-lg border"
              style={{ 
                backgroundColor: '#ffffff',
                borderColor: '#8ecae6'
              }}
            >
              <CardContent className="p-0">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#219ebc' }}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#082952' }} className="opacity-80">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureOverview;