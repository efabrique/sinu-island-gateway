import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { gethome_studentservices, urlFor } from '../../../sanity/lib/sanity';

export default function StudentServices() {
  const [studentservices, setStudentServices] = useState<any[]>([]);

  const getImageSrc = (image: { sanityImage?: any; imageUrl?: string }) => {
    if (image?.sanityImage) return urlFor(image.sanityImage).url();
    if (image?.imageUrl) return image.imageUrl;
    return '';
  };

  useEffect(() => {
    gethome_studentservices().then(setStudentServices);
  }, []);

  return (
    <div className="pt-10 md:pt-40">
      {studentservices.map((program, index) => (
        <div
          key={index}
          className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-12 gap-8"
        >
          {/* Content Box for mobile first */}
          <div
            className="
              relative z-10
              bg-white/95 rounded-xl shadow-lg
              p-6 sm:p-8 md:p-10
              w-full max-w-md
              text-center md:text-left
              md:absolute md:top-1/2 md:right-16 md:transform md:-translate-y-1/2 md:translate-x-1/6
            "
          >
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
              {program.title}
              <span className="block h-1 w-20 bg-blue-600 mx-auto md:mx-0 mt-2 rounded-sm"></span>
            </h2>
            <p className="mb-6 text-[#023047] text-justify sm:text-sm md:text-base lg:text-lg">
              {program.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                variant="outline"
                className="w-full sm:w-auto text-[#035ac5] border-[#035ac5] hover:bg-[#035ac5] hover:text-white transition-colors"
                onClick={() => alert('Student Services clicked')}
              >
                Student Services
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto text-[#035ac5] border-[#035ac5] hover:bg-[#035ac5] hover:text-white transition-colors"
                onClick={() => alert('Student Wellness clicked')}
              >
                Student Wellness
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-auto mt-8 md:mt-0">
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
    </div>
  );
}
