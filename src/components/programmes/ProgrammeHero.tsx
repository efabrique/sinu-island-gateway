import { useLocation, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ProgrammeHero = () => {
  const { state } = useLocation();
  const { code } = useParams();
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { programme_name, programme_faculty } = state || {};

  const maxScroll = 120;
  const scrollFactor = Math.min(scrolled / maxScroll, 1);

  const scale = 1 - scrollFactor * 0.2;
  const translateX = -scrollFactor * 20;
  const translateY = -scrollFactor * 10;
  const bgOpacity = 0.3 + scrollFactor * 0.7;

  return (
    <div className="sticky top-0 z-50 w-full h-[60vh] md:h-[20vh] flex items-center justify-center overflow-hidden transition-colors duration-300 bg-black">
      <div
        className="text-white font transition-transform duration-300"
        style={{
          transform: `translate(${translateX}%, ${translateY}%) scale(${scale})`,
          transformOrigin: "left center",
            fontFamily: '"Times New Roman", Times, serif',
        }}
      >
        <div className="text-5xl md:text-4xl">
          {programme_name}
        </div>

        {scrolled > 0 && programme_faculty && (
          <div className="text-lg md:text-2xl font-medium mt-1 opacity-80">
            {programme_faculty}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgrammeHero;
