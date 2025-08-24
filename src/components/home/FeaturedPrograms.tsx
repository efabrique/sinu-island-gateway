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
import {getFeatureProgrammes} from '../../../sanity/lib/sanity';

const FeaturedPrograms = () => {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [featuredPrograms, setFeaturedPrograms] = useState([]);

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

    // Fetch courses once on mount
    getFeatureProgrammes().then(setFeaturedPrograms);

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
  {featuredPrograms.map((program, index) => (
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
          <CardTitle className="text-[#222] text-lg font-semibold">
            {program.title}
          </CardTitle>
          <CardDescription className="text-[#023047] text-sm">
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
