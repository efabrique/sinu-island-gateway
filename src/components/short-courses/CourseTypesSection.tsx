
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Computer, Users, Lightbulb, Heart, Wrench } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';

const CourseTypesSection = () => {
  const courseTypes = [
    {
      icon: Briefcase,
      title: "Business & Management",
      description: "Leadership, project management, and entrepreneurship courses",
      courses: "25+ courses available",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      icon: Computer,
      title: "Technology & Digital Skills",
      description: "Programming, digital marketing, and cybersecurity training",
      courses: "30+ courses available",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      icon: Users,
      title: "Professional Development",
      description: "Communication, teamwork, and career advancement skills",
      courses: "20+ courses available",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      icon: Lightbulb,
      title: "Creative Arts",
      description: "Design thinking, multimedia production, and creative writing",
      courses: "15+ courses available",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Public health, nutrition, and community health programs",
      courses: "18+ courses available",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56"
    },
    {
      icon: Wrench,
      title: "Trade & Technical Skills",
      description: "Practical skills for various trades and technical fields",
      courses: "22+ courses available",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082952] mb-4">
            Course Categories
          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Explore our diverse range of short courses designed to meet your professional 
            and personal development needs across various industries and disciplines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-[#8ecae6] hover:border-[#219ebc] overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-[#082952]/20"></div>
              </div>
              <CardHeader className="text-center">
                <div className="bg-[#8ecae6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="h-8 w-8 text-[#082952]" />
                </div>
                <CardTitle className="text-xl text-[#082952]">{type.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-[#082952] mb-3">
                  {type.description}
                </CardDescription>
                <p className="text-sm font-semibold text-[#219ebc]">{type.courses}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseTypesSection;
