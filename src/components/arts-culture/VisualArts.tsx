import React from 'react';
import { Paintbrush, Camera, Scissors, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VisualArts = () => {
  const studios = [
    {
      icon: Paintbrush,
      title: "Painting & Drawing Studio",
      description: "Traditional and contemporary painting techniques with Pacific Islander themes",
      facilities: ["Easels & Canvas", "Professional Lighting", "Paint & Brushes", "Drying Racks"],
      courses: ["Introduction to Painting", "Watercolor Techniques", "Traditional Motifs", "Contemporary Expression"]
    },
    {
      icon: Camera,
      title: "Photography Lab",
      description: "Digital and film photography capturing island life and cultural events",
      facilities: ["Digital Cameras", "Darkroom Equipment", "Editing Software", "Studio Lighting"],
      courses: ["Digital Photography", "Film Development", "Portrait Photography", "Documentary Photography"]
    },
    {
      icon: Scissors,
      title: "Sculpture Workshop",
      description: "Working with traditional materials like wood, stone, and contemporary mediums",
      facilities: ["Wood Working Tools", "Stone Carving Area", "Pottery Wheels", "Kiln Access"],
      courses: ["Wood Carving", "Stone Sculpture", "Pottery & Ceramics", "Mixed Media"]
    },
    {
      icon: Layers,
      title: "Digital Arts Lab",
      description: "Modern digital design, animation, and multimedia art creation",
      facilities: ["High-End Computers", "Graphics Tablets", "3D Printers", "Design Software"],
      courses: ["Graphic Design", "Digital Illustration", "Animation", "3D Modeling"]
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            Visual Arts Studios
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#082952' }}>
            Explore your creativity in our fully-equipped visual arts studios where traditional 
            Pacific Island art forms meet contemporary artistic expression and digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studios.map((studio, index) => (
            <Card 
              key={index}
              className="transition-all duration-300 hover:shadow-lg border"
              style={{ 
                backgroundColor: '#edf4ff',
                borderColor: '#8ecae6'
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#d7a12c' }}
                  >
                    <studio.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#082952' }}>
                      {studio.title}
                    </h3>
                    <p className="mb-4" style={{ color: '#082952' }}>
                      {studio.description}
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>
                          Facilities:
                        </h4>
                        <ul className="space-y-1">
                          {studio.facilities.map((facility, idx) => (
                            <li 
                              key={idx} 
                              className="text-sm flex items-center gap-2"
                              style={{ color: '#082952' }}
                            >
                              <div 
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: '#219ebc' }}
                              ></div>
                              {facility}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: '#082952' }}>
                          Courses Available:
                        </h4>
                        <ul className="space-y-1">
                          {studio.courses.map((course, idx) => (
                            <li 
                              key={idx} 
                              className="text-sm flex items-center gap-2"
                              style={{ color: '#082952' }}
                            >
                              <div 
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: '#ffb703' }}
                              ></div>
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Gallery Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#082952' }}>
              Student Gallery Showcase
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#082952' }}>
              Discover outstanding works by our talented students celebrating Pacific Island culture 
              and contemporary artistic expression.
            </p>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl"
            style={{ backgroundColor: '#ffffff', border: '2px solid #8ecae6' }}
          >
            <div className="text-center">
              <div 
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#ffb703' }}
              >
                <Paintbrush className="h-10 w-10" style={{ color: '#082952' }} />
              </div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#082952' }}>
                Monthly Exhibitions
              </h4>
              <p className="text-sm" style={{ color: '#082952' }}>
                Student artwork displayed in the University Gallery with opening receptions
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#219ebc' }}
              >
                <Camera className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#082952' }}>
                Digital Portfolio
              </h4>
              <p className="text-sm" style={{ color: '#082952' }}>
                Online gallery featuring student work accessible to the global community
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#d7a12c' }}
              >
                <Layers className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#082952' }}>
                Annual Art Fair
              </h4>
              <p className="text-sm" style={{ color: '#082952' }}>
                Major exhibition and sale event showcasing the best student artwork
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualArts;