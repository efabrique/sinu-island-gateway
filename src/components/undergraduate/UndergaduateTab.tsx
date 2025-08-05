import React from 'react';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { label: 'Admission & Entry', path: '/admission' },
  { label: 'Key Dates', sectionId: 'key-dates' },
  { label: 'Scholarships', path: '/scholarships' },
  { label: 'Events', path: '/events' },
];

const UndergraduateTab: React.FC = () => {
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
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-20 border-b border-gray-300 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleTabClick(tab)}
            className="pl-10 px-4 py-2 text-sm md:text-base text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition bg-transparent font-bold"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UndergraduateTab;
