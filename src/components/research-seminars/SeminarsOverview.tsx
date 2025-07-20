import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  Presentation, 
  Globe 
} from "lucide-react";

export const SeminarsOverview = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Regular Schedule",
      description: "Weekly seminars featuring leading researchers from around the Pacific and beyond"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Speakers",
      description: "Distinguished faculty, visiting scholars, and industry experts share their latest research"
    },
    {
      icon: <Presentation className="h-8 w-8" />,
      title: "Diverse Topics",
      description: "Covering marine science, climate change, indigenous knowledge, and sustainable development"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Virtual participation options connecting our local community with international researchers"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#082952' }}>
            SINU Research Seminar Series
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#082952' }}>
            Our research seminars provide a platform for knowledge exchange, fostering collaboration 
            and advancing research excellence across all disciplines at SINU and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-lg transition-all duration-300 text-center"
              style={{ 
                borderColor: '#8ecae6',
                backgroundColor: '#ffffff'
              }}
            >
              <CardContent className="p-6">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: '#ffb703', color: '#ffffff' }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#082952' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#082952' }}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card 
            className="inline-block border-2 p-8 max-w-2xl mx-auto"
            style={{ 
              borderColor: '#219ebc',
              backgroundColor: '#ffffff'
            }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#082952' }}>
              Open to All
            </h3>
            <p className="text-lg" style={{ color: '#082952' }}>
              Our research seminars are open to faculty, students, researchers, and the broader community. 
              Join us to engage with cutting-edge research and contribute to scholarly discourse.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};