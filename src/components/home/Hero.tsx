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

  // Single image details (used for all screen sizes)
  const imageSrc = "/lovable-uploads/14230634-06c7-442c-99f2-16522f195ee8.png";
  const imageAlt = "Beautiful coastal city at night with illuminated buildings and harbor";

  return (
    <div className="relative bg-[#023047] h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Background Image - Used for all screen sizes */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${imagePush}px)`, transition: 'transform 0.2s' }}
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

<div className="text-center text-white px-4 max-w-7xl mx-auto" style={{ paddingTop: '18rem' }}>
  {/* Main heading */}
  <h1
    className="font-bold text-3xl sm:text-4xl md:text-5xl drop-shadow-lg mb-20"
    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
  >
    Welcome to Solomon Islands National University
  </h1>

  {/* Subheading */}
  <h2
    className="font-bold text-2xl sm:text-3xl md:text-3xl drop-shadow-lg mt-16 mb-8"
    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)', paddingTop: '5rem' }}
  >
    New Student? Apply Now!
  </h2>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Button
      size="lg"
      className="bg-[#ffb703] hover:bg-[#d7a12c] text-[#082952] font-bold text-lg px-8 py-4 drop-shadow-lg transition-colors duration-300"
      asChild
    >
      <Link to="/course-catalog">Undergraduate</Link>
    </Button>
    <Button
      size="lg"
      variant="outline"
      className="bg-white text-black border-2 border-white hover:bg-white hover:text-[#082952] font-bold text-lg px-8 py-4 drop-shadow-lg transition-colors duration-300"
      asChild
    >
      <Link to="/apply">Postgraduate</Link>
    </Button>
  </div>
</div>

      {/* Announcement Banner with Scrolling Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#ffb703] py-2 md:py-3 overflow-hidden">
        <div className="whitespace-nowrap inline-block animate-scroll">
          <p className="text-[#023047] text-xs sm:text-sm md:text-base font-medium px-4">
            Enrollment for Semester two 2025 is now open! Apply before May 30th.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
