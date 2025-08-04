import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const DFL: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="w-full h-96 relative cursor-pointer overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image */}
      <img
        src="public/lovable-uploads/e770e3e6-8bc7-4ced-8a1b-acfda565e2a4.png"
        alt="Distance Flexible Learning"
        className="absolute inset-0 w-full h-full object-cover block transition duration-500 brightness-100 group-hover:brightness-75"
      />

      {/* Overlay content */}
      <div className="inherit z-10 p-8 h-full flex flex-col justify-end brightness-100 group-hover:brightness-75">
        {/* Title with hover expansion */}
        <h2 className="text-white text-4xl font-bold transition-all duration-500">
          {hovered ? 'Distance Flexible Learning' : 'DFL'}
        </h2>

        {/* Description */}
        <p className="text-white text-lg mt-3 max-w-xl">
          Learn anytime, anywhere with our flexible course options.
        </p>

        {/* Explore Button */}
        <button className="mt-6 w-full max-w-xs inline-flex items-center justify-center text-white font-medium hover:underline transition px-4 py-3 bg-blue-600 rounded">
          Explore Courses
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default DFL;
