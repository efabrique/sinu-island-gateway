import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { getstudywithus, urlFor } from '../../../sanity/lib/sanity';
import HeaderLogo from '../layout/HeaderLogo';
import { Link } from 'react-router-dom';

export default function StudyWithUs() {
  const [studywithus, setStudyWithUs] = useState<any[]>([]);

  const getImageSrc = (image: { sanityImage?: any; imageUrl?: string }) => {
    if (image?.sanityImage) return urlFor(image.sanityImage).url();
    if (image?.imageUrl) return image.imageUrl;
    return '';
  };

  useEffect(() => {
    getstudywithus().then(setStudyWithUs);
  }, []);

  return (
    // Responsive top padding: mobile pt-10, desktop pt-32
    <div className="pt-10 md:pt-20 bg-black/40">
      {studywithus
      .filter(program => program.title === "Study With Us")
      .map((program, index) => (
        <div
          key={index}
          className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-12 gap-8"
        >
          {/* Content Box */}
          <div
            className="
              relative z-10
              bg-[#fff]/95 rounded-xl shadow-lg 
              p-6 sm:p-8 md:p-10 
              w-full max-w-sm text-center md:text-left
              md:absolute md:top-1/2 md:left-60 md:transform md:-translate-y-1/2 md:-translate-x-1/4
            "
          >
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
              {program.title}
              <span className="block h-1 w-20 bg-blue-600 mx-auto md:mx-0 mt-2 rounded-sm"></span>
            </h2>
            <p className="mb-6 text-gray-800 text-justify sm:text-sm md:text-base lg:text-lg">
              {program.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                variant="outline"
                className="w-full sm:w-auto text-[#035ac5] border-[#035ac5] hover:bg-[#035ac5] hover:text-white transition-colors"
                onClick={() => alert('Find a degree clicked')}
              >
                Find a Degree
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto text-[#035ac5] border-[#035ac5] hover:bg-[#035ac5] hover:text-white transition-colors"
                onClick={() => alert('Ask an academic clicked')}
              >
                Ask an Academic
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-auto">
            <img
              src={getImageSrc(program.image)}
              alt={program.title}
              className="
                h-80 sm:h-96 md:h-[34rem] lg:h-[40rem] 
                w-full md:w-auto 
                object-cover rounded-xl 
                shadow-lg 
                transition-transform duration-300 ease-in-out hover:scale-105
              "
            />
          </div>
        </div>
      ))}
      <div className="w-full bg-[#22a2bf] shadow-md transition-all duration-300 ease-in-out md:mt-20">
      {/* Reduced height only on desktop */}
      <div className="container mx-auto md:px-40 flex items-center justify-between py-5 lg:py-6">
      <h2 className="text-black text-2xl md:text-4xl font-semibold">
        Interested about Life in SINU? 
        <span className="block md:h-1 md:w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>
      </h2>
                    <Button
                      size="lg"
                      className="bg-[#ffb703] hover:bg-blue-600 hover:text-black text-[#082952] font-bold text-base sm:text-lg md:text-xl px-4 sm:px-9 md:px-20 py-2 sm:py-3 md:py-4 w-full sm:w-auto"
                      asChild
                    >
                    <Link to="/undergraduate-study">Learn More</Link>
                    </Button>
    </div>  
    </div>
    </div>
  );
}
