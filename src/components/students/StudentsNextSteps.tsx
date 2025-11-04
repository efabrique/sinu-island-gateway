import React, { useState } from 'react';
import { ArrowRight, ArrowDown, ArrowUp } from 'lucide-react';

const StudentsNextSteps = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const nextSteps = [
    {
      step: "1",
      title: "Activate Your Account",
      description: "Browse our undergraduate programs and find the one that matches your interests and career goals."
    },
    {
      step: "2",
      title: "Register for Courses",
      description: "Review the entry requirements and ensure you meet the academic and other prerequisites."
    },
    {
      step: "3",
      title: "Login to Your Account",
      description: "Complete your online application and submit all required documents by the deadline."
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16  bg-black/25">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4">
              Next Steps for Current Students
              <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>
            </h2>

          </div>
          
          {/* Cards Grid - Center aligned */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
            {nextSteps.map((step, index) => (
              <div
                key={index}
                className="text-center cursor-pointer border bg-white border-[#22a2bf] rounded-lg p-6 shadow-sm w-full max-w-xs transition hover:shadow-md"
                onClick={() => handleToggle(index)}
              >
                <div className="bg-[#035ac5ff] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                
                {/* Title with Arrow */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-[#222222]">
                    {step.title}
                  </h3>
                  <span className="transition-transform duration-300">
                    {activeIndex === index ? (
                      <ArrowUp className="h-5 w-5 text-[#035ac5ff]" />
                    ) : (
                      <ArrowDown className="h-5 w-5 text-[#035ac5ff]" />
                    )}
                  </span>
                </div>

                {/* Description only when active */}
                {activeIndex === index && (
                  <p className="text-[#023047] text-sm transition-all duration-300 max-w-xs mx-auto">
                    {step.description}
                  </p>
                )}

                {/* Connecting arrows between cards (only on desktop) */}

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsNextSteps;
