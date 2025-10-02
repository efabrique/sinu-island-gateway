
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Stethoscope, Car, Cpu, Building, Users, ChefHat, Palette, ArrowRight } from 'lucide-react';
import OptimizedImage from '../common/OptimizedImage';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const CourseAreasSection = () => {
  const courseAreas = [
    {
      icon: Wrench,
      title: "Trades & Construction",
      description: "Carpentry, plumbing, electrical work, and building construction",
          image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
          disabled: false,
          tooltip: "Coming Soon",
      courses: ["Certificate III in Carpentry", "Electrical Installation", "Plumbing Services"],
      color: "#219ebc"
    },
    {
      icon: Stethoscope,
      title: "Health Services",
      description: "Healthcare support, aged care, and community development",
          image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
          disabled: false,
          tooltip: "Coming Soon",

      courses: ["Certificate III in Health Services", "Community Services", "Aged Care Support"],
      color: "#ffb703"
    },
    {
      icon: Car,
      title: "Automotive & Transport",
      description: "Vehicle maintenance, marine engineering, and logistics",
          image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
          disabled: false,
          tooltip: "Coming Soon",

      courses: ["Automotive Servicing", "Marine Engineering", "Transport & Logistics"],
      color: "#8ecae6"
    },
    {
      icon: Cpu,
      title: "Information Technology",
      description: "Computer systems, networking, and digital media",
          image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
          disabled: true,
          tooltip: "Not Available in Sem 2 2025",

      courses: ["IT Support", "Computer Networks", "Digital Media Production"],
      color: "#d7a12c"
    },
    {
      icon: Building,
      title: "Business & Administration",
      description: "Office administration, accounting, and customer service",
          image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
          disabled: false,
          tooltip: "Coming Soon",

      courses: ["Business Administration", "Accounting Fundamentals", "Customer Service"],
      color: "#219ebc"
    },
    {
      icon: Users,
      title: "Tourism & Hospitality",
      description: "Hotel management, tour operations, and event planning",
          image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
          disabled: false,
          tooltip: "Coming Soon",

      courses: ["Hotel Operations", "Tour Guiding", "Event Management"],
      color: "#ffb703"
    },
    {
      icon: ChefHat,
      title: "Culinary Arts",
      description: "Commercial cookery, food safety, and kitchen management",
          image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
          disabled: false,
          tooltip: "Coming Soon",

      courses: ["Commercial Cookery", "Food Safety", "Kitchen Operations"],
      color: "#8ecae6"
    },
    {
      icon: Palette,
      title: "Creative Arts",
      description: "Visual arts, design, and traditional crafts",
          image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
          disabled: false,
          tooltip: "Coming Soon",

      courses: ["Visual Arts", "Graphic Design", "Traditional Crafts"],
      color: "#d7a12c"
    }
  ];

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
    <section id= "tafe-courses" className="py-4 bg-white md:mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
            TAFE Offered Courses
                          <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

          </h2>
          <p className="text-xl text-[#082952] max-w-3xl mx-auto">
            Discover your pathway to success with our comprehensive range of technical and vocational courses
          </p>
        </div>
        
         <div
  ref={scrollRef}
  className="flex overflow-x-auto space-x-6 md:space-x-8 scroll-smooth py-4 px-1 scrollbar-hide"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  <TooltipProvider>
    {courseAreas.map((area, index) => {
      const cardContent = (
        <Card
          key={index}
          className={`flex flex-col border-[#22a2bf] justify-between min-h-[400px]  shrink-0 w-80 transition-shadow 
            ${area.disabled 
              ? "bg-gray-200 opacity-60 pointer-events-none" // grey out and disable interaction
              : "hover:shadow-lg"
            }`}
        >
            <div className="h-40 sm:h-48 w-full overflow-hidden flex-shrink-0">
              <OptimizedImage
                src={area.image}
                alt={area.title}
                className="w-full h-full"
                objectFit="cover"
                width={400}
              />
            </div>
            <CardHeader className="flex-1 px-4 py-3">
                  <CardTitle className="text-[#222] text-center text-lg font-semibold">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="text-[#023047] text-sm">
                    {area.description}
                  </CardDescription>
                </CardHeader>

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
      );

      return area.disabled ? (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <div className='relative'>{cardContent}</div>
          </TooltipTrigger>
          <TooltipContent
                className="!absolute !flex !items-center !justify-center !bg-black/70 !text-white !rounded-lg !p-4 !text-lg !font-medium !z-50"
                side="top"
                align="center"
              >
            {area.tooltip || "Coming Soon"}
          </TooltipContent>
        </Tooltip>
      ) : (
        cardContent
      );
    })}
  </TooltipProvider>
</div>


      </div>
    </section>
  );
};

export default CourseAreasSection;
