
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import OptimizedImage from '../common/OptimizedImage';
import ErrorBoundary from '../common/ErrorBoundary';

const programs = [
  {
    title: "Business Administration",
    description: "Develop managerial and entrepreneurial skills with our comprehensive business program.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    link: "#"
  },
  {
    title: "Marine Science",
    description: "Study marine ecosystems and conservation in one of the world's most biodiverse regions.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    link: "#"
  },
  {
    title: "Education",
    description: "Shape the future by becoming a skilled educator with our teaching certification programs.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    link: "#"
  }
];

const FeaturedPrograms = () => {
  return (
    <ErrorBoundary>
      <section className="py-8 md:py-16 bg-[#b2d8d8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#219ebc] mb-4">Featured Academic Programs</h2>
            <p className="text-base md:text-lg text-[#023047] max-w-2xl mx-auto">
              Discover our diverse range of undergraduate and graduate programs designed to prepare you for success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program, index) => (
              <ErrorBoundary key={index}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <OptimizedImage 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full"
                      objectFit="cover"
                      width={400}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#023047]">{program.title}</CardTitle>
                    <CardDescription className="text-[#023047]/80">{program.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full text-[#219ebc] border-[#219ebc] hover:bg-[#219ebc] hover:text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </ErrorBoundary>
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Button className="bg-[#219ebc] text-white hover:bg-[#219ebc]/90">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default FeaturedPrograms;
