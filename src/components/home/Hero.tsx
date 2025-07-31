
import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/common/OptimizedImage';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  // State to track scroll
  const [scrolled, setScrolled] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Limit how much the image can be pushed down (e.g., max 200px)
  const maxPush = 200;
  const imagePush = Math.min(scrolled, maxPush);

  return (
    <div className="relative bg-[#023047] h-[50vh] md:h-[70vh] overflow-hidden">
      {/* Background Image Slider - Desktop and Tablet */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ transform: `translateY(${imagePush}px)`, transition: 'transform 0.2s' }}
      >
        {/* Simple slider using React state */}
        {(() => {
          const images = [
            {
              src: "/lovable-uploads/dd83a8a4-d4ea-40b9-924f-7052266d9b2a.png",
              alt: "Beautiful coastal city at night with illuminated buildings and harbor",
            },
            {
              src: "/lovable-uploads/14230634-06c7-442c-99f2-16522f195ee8.png",
              alt: "Campus view during daytime",
            },
            {
              src: "/lovable-uploads/d44b1801-b253-4e8b-b5be-25632990ac05.png",
              alt: "Students walking on campus",
            },
          ];
          const [current, setCurrent] = React.useState(0);

          React.useEffect(() => {
            const interval = setInterval(() => {
              setCurrent((prev) => (prev + 1) % images.length);
            }, 9000); // Change image every 9 seconds
            return () => clearInterval(interval);
          }, [images.length]);

          return (
            <OptimizedImage
              src={images[current].src}
              alt={images[current].alt}
              className="w-full h-full object-cover object-center transition-opacity duration-700"
              objectFit="cover"
              priority={true}
              width={1920}
              height={1080}
            />
          );
        })()}
      </div>

      {/* Background Image - Mobile */}
      <div
        className="absolute inset-0 block md:hidden"
        style={{ transform: `translateY(${imagePush}px)`, transition: 'transform 0.2s' }}
      >
        <OptimizedImage
          src="/lovable-uploads/dd607778-2df7-469b-8bdd-075226d8cec6.png"
          alt="Student in yellow dress holding book"
          className="w-full h-full object-cover object-center"
          objectFit="cover"
          priority={true}
          width={540}
          height={960}
        />
      </div>
      
      {/* Content - Text and Buttons directly on image */}
      {(() => {
        // Desktop/tablet images and their content
        const slides = [
          {
            src: "/lovable-uploads/dd83a8a4-d4ea-40b9-924f-7052266d9b2a.png",
            alt: "Beautiful coastal city at night with illuminated buildings and harbor",
            title: "Discover Your Potential at SINU",
            subtitle: "Its Your Future. Let us help you discover it.",
            buttons: [
              {
                label: "Explore Programs",
                to: "/course-catalog",
                variant: "primary",
              },
              {
                label: "Apply Now",
                to: "/apply",
                variant: "outline",
              },
            ],
          },
          {
            src: "/lovable-uploads/14230634-06c7-442c-99f2-16522f195ee8.png",
            alt: "Campus view during daytime",
            title: "Vibrant Campus Life",
            subtitle: "Join a community that inspires growth.",
            buttons: [
              {
                label: "Campus Tour",
                to: "/campus-tour",
                variant: "primary",
              },
              {
                label: "Student Life",
                to: "/student-life",
                variant: "outline",
              },
            ],
          },
          {
            src: "/lovable-uploads/d44b1801-b253-4e8b-b5be-25632990ac05.png",
            alt: "Students walking on campus",
            title: "Support Every Step",
            subtitle: "Resources to help you succeed.",
            buttons: [
              {
                label: "Support Services",
                to: "/support",
                variant: "primary",
              },
              {
                label: "Contact Us",
                to: "/contact",
                variant: "outline",
              },
            ],
          },
        ];
        const [current, setCurrent] = React.useState(0);

        React.useEffect(() => {
          const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
          }, 9000);
          return () => clearInterval(interval);
        }, [slides.length]);

        const slide = slides[current];

        return (
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-semibold drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                <span className="block md:hidden">{slide.title}</span>
                <span className="hidden md:block">{slide.subtitle}</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {slide.buttons.map((btn, idx) =>
                  btn.variant === "primary" ? (
                    <Button
                      key={idx}
                      size="lg"
                      className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-bold text-lg px-8 py-4 drop-shadow-lg transition-colors duration-300"
                      asChild
                    >
                      <Link to={btn.to}>{btn.label}</Link>
                    </Button>
                  ) : (
                    <Button
                      key={idx}
                      size="lg"
                      variant="outline"
                      className="bg-white text-black border-2 border-white hover:bg-white hover:text-[#082952] font-bold text-lg px-8 py-4 drop-shadow-lg transition-colors duration-300"
                      asChild
                    >
                      <Link to={btn.to}>{btn.label}</Link>
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>
        );
      })()}
      
      {/* Announcement Banner with Scrolling Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#ffb703] py-2 md:py-3 overflow-hidden">
        <div className="whitespace-nowrap inline-block animate-scroll">
          <p className="text-[#023047] text-sm md:text-base font-medium px-4">
            Enrollment for Semester two 2025 is now open! Apply before May 30th.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
