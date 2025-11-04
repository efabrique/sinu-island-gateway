import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const supportCards = [
  {
    title: "Academic Advising",
    description:
      "Get guidance from advisors to help you plan your academic journey and succeed in your studies.",
    image: "/lovable-uploads/49aaf3f8-456b-4260-8aa7-3110587fb521.png",
    link: "/support/advising",
  },
  {
    title: "Counseling Services",
    description:
      "Access mental health and personal support to help you balance academics and well-being.",
    image: "/lovable-uploads/49aaf3f8-456b-4260-8aa7-3110587fb521.png",
    link: "/support/counseling",
  },
  {
    title: "Financial Aid",
    description:
      "Learn about scholarships, bursaries, and financial support options available to students.",
    image: "/lovable-uploads/49aaf3f8-456b-4260-8aa7-3110587fb521.png",
    link: "/support/financial-aid",
  },
];

const StudentSupportTab: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#222222] mb-12">
          Students Support Services
          <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>
        </h2>
        <p className="md:text-2xl text-[#082952] max-w-4xl mx-auto text-center mb-16">
            Access the support you need, when you need it. Find out where to go if you need help with an assignment, feel like talking to someone about your health and wellbeing, or have an IT issue that needs to be resolved.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 ">
          {supportCards.map((card, index) => (
            <div
              key={index}
              className="relative bg-[#fff] rounded-lg shadow overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 group"
            >
              {/* Image */}
              <div className="h-56 w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex bg-[#fff] flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold text-[#222] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#222] flex-grow">
                  {card.description}
                </p>

                {/* Read More Button (slide + fade in on hover) */}
                <a
                  href={card.link}
                  className="mt-6 inline-flex items-center text-[#035ac5ff] font-medium transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Find More Support Button */}
        <div className="text-center py-6">
          <a href="/support">
            <Button className="bg-blue-600 hover:bg-[#082952] text-white px-8 py-3 rounded transition">
              Find More Support
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentSupportTab;
