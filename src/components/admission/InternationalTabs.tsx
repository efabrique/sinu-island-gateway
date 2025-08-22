import React from 'react';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { label: 'Study With Us', path: '/study-with-us' },
  { label: 'How to Apply', path: '/how-to-apply' },
  { label: 'Program Structure', sectionId: 'international-programs' },
  { label: 'Key Events', sectionId: 'key-events' },
  { label: 'Scholarships', path: '/scholarships' },
  { label: 'Life in SINU', path: '/life-in-sinu' },
];

const InternationalTab: React.FC = () => {
  const navigate = useNavigate();

  const handleTabClick = (tab: typeof tabs[number]) => {
    if (tab.path) {
      // Redirect to another page
      navigate(tab.path);
    } else if (tab.sectionId) {
      // Scroll to section
      const section = document.getElementById(tab.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <><div className="w-full max-w-4xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-8 border-b border-gray-300 pb-5">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleTabClick(tab)}
            className=" px-2 py-2 text-sm md:text-base text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-blue-500 transition bg-transparent font-bold"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div><section>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#222222]">Welcome to the Solomon Islands National University
                      <span className="block h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-sm"></span>

          </h2>
          <p className="text-lg text-gray-600 mb-6 text-center font-semibold">
            We are focused on providing high-quality education that prepares you for your future career. Our university offers a more affordable study experience, with lower tuition fees and living costs than other major cities. Be part of our diverse study community, offering a vibrant and coastal lifestyle.
          </p>
          {/* Additional content can be added here */}
        </div>
      </section></>
  );
};

export default InternationalTab;
