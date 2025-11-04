import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Navigate, useNavigate } from "react-router-dom";

const InternationalStudentsTab: React.FC = () => {
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
    src="public/lovable-uploads/e770e3e6-8bc7-4ced-8a1b-acfda565e2a4.png"
    alt="Student Learning Support"
    className="absolute inset-0 w-full h-full md:pt-20 md:pb-20 pt-10 pb-10 object-cover transition duration-500 brightness-100 group-hover:brightness-75"
  />

  {/* Overlay content */}
  <div className="relative z-10 p-8 flex flex-col justify-end h-full">
    <h2 className="text-white text-4xl font-bold transition-all duration-500">
      {hovered ? 'Essential Information for International Students at the SINU' : 'For International Students'}
    </h2>

    <button 
    onClick={() => navigate("/admission-requirements")}
    className="mt-6 w-full max-w-xs inline-flex items-center justify-center text-white font-medium hover:bg-blue-700 hover:text-[#222222] transition px-4 py-3 bg-blue-600 rounded">
      Learn More
      <ArrowRight className="ml-2 h-5 w-5" />
      
    </button>
  </div>
</section>

  );
};

export default InternationalStudentsTab;
