
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Microscope, Calculator, Gavel, Stethoscope, Palette, Globe } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';

const StudyOptionsSection = () => {
  const studyOptions = [
    {
      icon: <Microscope className="h-8 w-8 text-[#219ebc]" />,
      title: "Master of Science",
      description: "Advanced research and coursework in natural sciences, environmental studies, and marine biology.",
      duration: "2 years full-time",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
    },
    {
      icon: <Calculator className="h-8 w-8 text-[#219ebc]" />,
      title: "Master of Business Administration",
      description: "Develop leadership skills and business acumen for the Pacific region's unique economic environment.",
      duration: "2 years full-time",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    {
      icon: <Gavel className="h-8 w-8 text-[#219ebc]" />,
      title: "Master of Laws",
      description: "Specialize in Pacific legal systems, international law, and customary law practices.",
      duration: "1-2 years",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744"
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-[#219ebc]" />,
      title: "Master of Public Health",
      description: "Address health challenges in island nations with focus on tropical medicine and health policy.",
      duration: "2 years full-time",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f"
    },
    {
      icon: <Palette className="h-8 w-8 text-[#219ebc]" />,
      title: "Master of Education",
      description: "Advance your teaching practice and educational leadership in Pacific contexts.",
      duration: "1.5-2 years",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754"
    },
    {
      icon: <Globe className="h-8 w-8 text-[#219ebc]" />,
      title: "Doctor of Philosophy (PhD)",
      description: "Conduct original research that contributes to knowledge in your field with Pacific relevance.",
      duration: "3-4 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Postgraduate Study Options
          </h2>
          <p className="text-lg text-[#082952] max-w-3xl mx-auto">
            Choose from our range of postgraduate programs designed to advance your career 
            and contribute to the development of the Solomon Islands and the Pacific region.
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
