import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Navigate, useNavigate } from "react-router-dom";

const DFL: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <section
  className="w-full relative cursor-pointer overflow-hidden pt-20 md:pt-60 pb-20" 
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  {/* Background Image */}
  <img
    src="/lovable-uploads/ad9248e2-c248-4963-9342-2a48dcf11ed8.jpg"
    alt="Student Learning Support"
    className="absolute inset-0 w-full h-full object-cover transition duration-500 brightness-100 group-hover:brightness-75"
  />

  {/* Overlay content */}
  <div className="relative z-10 p-8 flex flex-col justify-end h-full">
    <h2 className="text-black text-4xl font-bold transition-all duration-500">
      {hovered ? 'Student Learning Support' : 'SLS'}
    </h2>
    <p className="text-black text-lg mt-3 max-w-xl">
      Bringing the University to your Home
    </p>
    <button 
    onClick={() => navigate("/distance-flexible-learning")}
    className="mt-6 w-full max-w-xs inline-flex items-center justify-center text-white font-medium hover:bg-blue-700 hover:text-[#222222] transition px-4 py-3 bg-blue-600 rounded">
      Explore Courses
      <ArrowRight className="ml-2 h-5 w-5" />
      
    </button>
  </div>
</section>

  );
};

export default DFL;
