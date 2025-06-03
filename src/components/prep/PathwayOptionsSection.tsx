
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Users2, Laptop } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';

const PathwayOptionsSection = () => {
  const pathways = [
    {
      icon: Calendar,
      title: "Standard Program",
      duration: "12 months",
      mode: "Full-time on campus",
      description: "Comprehensive preparation with face-to-face learning and full campus experience",
      subjects: "6 core subjects + 2 electives",
      nextIntake: "February & July",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
    },
    {
      icon: Users2,
      title: "Intensive Program",
      duration: "6 months",
      mode: "Full-time on campus",
      description: "Accelerated pathway for motivated students with strong academic backgrounds",
      subjects: "4 core subjects + 1 elective",
      nextIntake: "February, July & October",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      icon: Laptop,
      title: "Flexible Program",
      duration: "12-18 months",
      mode: "Part-time online/blended",
      description: "Study at your own pace with online learning and occasional campus sessions",
      subjects: "6 core subjects + 2 electives",
      nextIntake: "Rolling admissions",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  return (
    <section className="py-16 bg-[#edf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Choose Your Pathway
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Select the program that best fits your schedule, learning style, and career goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow h-full overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src={pathway.image}
                  alt={pathway.title}
                  className="w-full h-full"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-[#082952]/20"></div>
              </div>
              <CardHeader className="text-center">
                <div className="bg-[#ffb703] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pathway.icon className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-xl text-[#082952]">{pathway.title}</CardTitle>
                <CardDescription className="text-[#219ebc] font-semibold text-lg">
                  {pathway.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-[#082952] mb-2">Study Mode:</p>
                    <p className="text-[#082952]">{pathway.mode}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-[#082952] mb-2">Description:</p>
                    <p className="text-[#082952]">{pathway.description}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-[#082952] mb-2">Subjects:</p>
                    <p className="text-[#082952]">{pathway.subjects}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-[#082952] mb-2">Next Intake:</p>
                    <p className="text-[#219ebc] font-semibold">{pathway.nextIntake}</p>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-[#219ebc] hover:bg-[#219ebc]/90 text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwayOptionsSection;
