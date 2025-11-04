import React from 'react';
import { useNavigate } from 'react-router-dom';

const tabs = [
  {label: 'Study With Us', path: '/why-postgraduate'},
  { label: 'How to Apply', path: '/admission' },
  { label: 'Program Structure', sectionId: 'key-dates' },
  { label: 'Key Events', path: '/events' },
  { label: 'Scholorships', path: '/scholorships' },
  { label: 'Life in SINU', path: '/life-in-sinu' },
];

const PostgraduateTab: React.FC = () => {
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

export default PostgraduateTab;
