
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Microscope, Calculator, Gavel, Stethoscope, Palette, Globe } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';

const StudyOptionsSection = () => {
  const studyOptions = [
    {
      icon: <Microscope className="h-8 w-8 text-[#219ebc]" />,
      title: "Bachelor of Science",
      description: "Explore the natural world through marine biology, environmental science, and applied sciences.",
      duration: "3-4 years full-time",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d"
    },
    {
      icon: <Calculator className="h-8 w-8 text-[#219ebc]" />,
      title: "Bachelor of Business",
      description: "Develop business skills relevant to the Pacific region's growing economy.",
      duration: "3 years full-time",
      image: "/lovable-uploads/552cc4eb-ec31-4319-85ea-55903c6fd74c.png"
    },
    {
      icon: <Gavel className="h-8 w-8 text-[#219ebc]" />,
      title: "Bachelor of Laws",
      description: "Study law with focus on Pacific legal systems and customary law.",
      duration: "4 years full-time",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-[#219ebc]" />,
      title: "Bachelor of Nursing",
      description: "Train to become a healthcare professional with focus on tropical and community health.",
      duration: "3 years full-time",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56"
    },
    {
      icon: <Palette className="h-8 w-8 text-[#219ebc]" />,
      title: "Bachelor of Education",
      description: "Prepare to teach in primary or secondary schools across the Solomon Islands.",
      duration: "4 years full-time",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
    },
    {
      icon: <Globe className="h-8 w-8 text-[#219ebc]" />,
      title: "Bachelor of Arts",
      description: "Study humanities, social sciences, and Pacific studies.",
      duration: "3 years full-time",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Undergraduate Study Options
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Choose from our range of undergraduate programs designed to prepare you for success 
            in your chosen career while contributing to the development of the Solomon Islands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-[#8ecae6] overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-[#082952]/20"></div>
              </div>
              <CardHeader>
                <div className="mb-4">{option.icon}</div>
                <CardTitle className="text-xl text-[#082952]">{option.title}</CardTitle>
                <CardDescription className="text-[#ffb703] font-medium">
                  {option.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#082952]">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyOptionsSection;
