import React from 'react';
import { useNavigate } from 'react-router-dom';

const tabs = [
  {label: 'Why Enroll', path: '/why-tafe' },
  { label: 'Admission & Entry', path: '/admission' },
  { label: 'Key Dates', sectionId: 'key-dates' },
  { label: 'Scholarships', path: '/scholarships' },
  { label: 'Events', path: '/events' },
];

const TafeTab: React.FC = () => {
  const navigate = useNavigate();

  const handleTabClick = (tab: typeof tabs[number]) => {
    if (tab.path) {
      navigate(tab.path);
    } else if (tab.sectionId) {
      const section = document.getElementById(tab.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Tabs */}
      <div
        className="
          flex gap-20 border-b border-gray-300 pb-2 
          overflow-x-auto scroll-smooth scrollbar-hide 
          md:overflow-visible md:justify-center md:flex-wrap
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleTabClick(tab)}
            className="whitespace-nowrap px-4 py-2 text-sm md:text-xl text-gray-500 hover:text-[#222222] border-b-2 border-transparent hover:border-blue-500 transition font-bold"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TafeTab;
