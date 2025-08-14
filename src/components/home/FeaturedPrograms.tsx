import React, { useEffect, useRef, useState } from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
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
  },
  {
    title: "Computer Science",
    description: "Master AI, cybersecurity, and software development with our cutting-edge CS curriculum.",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    link: "#"
  },
  {
    title: "Public Health",
    description: "Empower communities and improve healthcare systems through impactful public health training.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136",
    link: "#"
  }
];

const FeaturedPrograms = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = 1;
    const delay = 30;

    const interval = setInterval(() => {
      if (!isPaused && container) {
        if (direction === 'right') {
          container.scrollLeft += scrollStep;

          if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
            setDirection('left');
          }
        } else {
          container.scrollLeft -= scrollStep;

          if (container.scrollLeft <= 0) {
            setDirection('right');
          }
        }
      }
    }, delay);

    return () => clearInterval(interval);
  }, [isPaused, direction]);

  return (
    <ErrorBoundary>
      <section className="py-8 md:py-8 bg-[#fff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-4  ">
              Featured Academic Programs
                <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

            </h2>
            <p className="text-base md:text-lg text-[#023047] max-w-2xl mx-auto">
              Discover our diverse range of undergraduate and graduate programs designed to prepare you for success.
            </p>
          </div>

<div
  ref={scrollRef}
  className="flex overflow-x-auto space-x-4 md:space-x-6 scroll-smooth py-4 px-1 scrollbar-hide"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  {programs.map((program, index) => (
    <ErrorBoundary key={index}>
      <Card className="flex-shrink-0 w-64 sm:w-72 md:w-72 lg:w-72 flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="h-40 sm:h-48 w-full overflow-hidden flex-shrink-0">
          <OptimizedImage
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
            width={400}
          />
        </div>

        {/* Header */}
        <CardHeader className="flex-1 px-4 py-3">
          <CardTitle className="text-[#023047] text-lg font-semibold">
            {program.title}
          </CardTitle>
          <CardDescription className="text-[#023047]/80 text-sm">
            {program.description}
          </CardDescription>
        </CardHeader>

        {/* Footer */}
        <CardFooter className="px-4 pb-4 pt-2">
          <Button
            variant="outline"
            className="w-full text-[#035ac5ff] border-[#035ac5ff] hover:bg-[#035ac5ff] hover:text-white flex items-center justify-center"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </ErrorBoundary>
  ))}
</div>

{/*
          <div className="text-center mt-8 md:mt-8">
            <Button className="bg-[#035ac5ff] text-white hover:bg-[#082952]/90">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          */}
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default FeaturedPrograms;
