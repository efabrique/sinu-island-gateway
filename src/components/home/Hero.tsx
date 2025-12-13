import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/common/OptimizedImage';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const maxPush = 200;
  const imagePush = Math.min(scrolled, maxPush);

  const imageSrc =
    '/lovable-uploads/DSC05873.jpg';
  const imageAlt =
    'Beautiful coastal city at night with illuminated buildings and harbor';

  return (
    <div className="relative bg-[#023047] h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[98vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${imagePush}px)`,
          transition: 'transform 0.2s',
        }}
      >
        <OptimizedImage
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center transition-opacity duration-700"
          objectFit="cover"
          priority={true}
          width={1920}
          height={1080}
        />
      </div>

      {/* Card Overlay */}
      <div
        className="
          absolute 
          inset-x-0 bottom-20 translate-y-50 flex justify-center px-4
          sm:inset-x-auto sm:bottom-16 sm:translate-y-0 sm:left-8 md:left-12 sm:justify-start
          z-10
        "
      >
        <div
          className="
          bg-[#22a2bf]/50 backdrop-blur-md rounded-2xl shadow-2xl
          p-4 sm:p-6 md:p-8 lg:p-10
          w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl
          text-center sm:text-left
        "
        >
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#222] mb-4 sm:mb-6">
            New Student? Apply Now!
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center sm:justify-start">
            <Button
              size="lg"
              className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-bold text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 w-full sm:w-auto"
              asChild
            >
              <Link to="/undergraduate-study">Undergraduate</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white text-black border-2 border-[#082952] hover:bg-[#082952] hover:text-white font-bold text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 w-full sm:w-auto"
              asChild
            >
              <Link to="/postgraduate-study">Postgraduate</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Announcement Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#ffb703] py-2 sm:py-3 overflow-hidden">
        <div className="whitespace-nowrap inline-block animate-scroll">
          <p className="text-[#023047] text-xs sm:text-sm md:text-base font-medium px-4 sm:px-6">
            Enrollment for Semester two 2025 is now open! Apply before May 30th.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
