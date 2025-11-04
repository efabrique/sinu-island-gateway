import React from "react";

const services = [
  { title: "Library Services", image: "/lovable-uploads/bb44fb80-3e75-4c83-8246-f60f42997ac3.png" },
  { title: "IT Support", image: "/lovable-uploads/bb44fb80-3e75-4c83-8246-f60f42997ac3.png" },
  { title: "Counseling", image: "/lovable-uploads/bb44fb80-3e75-4c83-8246-f60f42997ac3.png" },
  { title: "Career Services", image: "/lovable-uploads/bb44fb80-3e75-4c83-8246-f60f42997ac3.png" },
  { title: "Student Housing", image: "/lovable-uploads/bb44fb80-3e75-4c83-8246-f60f42997ac3.png" },
  { title: "Health Services", image: "/lovable-uploads/bb44fb80-3e75-4c83-8246-f60f42997ac3.png" },
  { title: "Research Support", image: "/lovable-uploads/bb44fb80-3e75-4c83-8246-f60f42997ac3.png" },
  { title: "Financial Aid", image: "/lovable-uploads/bb44fb80-3e75-4c83-8246-f60f42997ac3.png" },
];

const StudentsQuickLinks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 md:pb-40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#222222] mb-12">
          Students Quick Links
          <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4  gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg  overflow-hidden shadow-lg group cursor-pointer h-40 sm:h-48 md:h-52"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover  bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              {/* Title with hover animation */}
              <div
                className="
                  absolute w-full px-4 text-center 
                  top-4 group-hover:top-1/2
                  transform group-hover:-translate-y-1/2
                  transition-all duration-500
                "
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white drop-shadow-md">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsQuickLinks;
