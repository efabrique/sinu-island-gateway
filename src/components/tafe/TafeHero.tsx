
import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/common/OptimizedImage';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { label : 'Apply Now', path: '/tafe-enroll'},
  { label: 'Contact Us', sectionId: 'key-dates' },
];

const TafeHero = () => {
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
    <section className="bg-[#edf4ff] relative overflow-hidden">
      {/* Background Image Container with Responsive Aspect Ratios */}
      <div className="relative w-full">
        {/* Desktop: 16:9 aspect ratio */}
        <div className="hidden lg:block aspect-video w-full">
          <OptimizedImage
            src="/lovable-uploads/8f2aca33-5a17-4d2f-89b7-6430829c0728.png"
            alt="Student studying"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </div>
        
        {/* Tablet: 4:3 aspect ratio */}
        <div className="hidden md:block lg:hidden aspect-[4/3] w-full">
          <OptimizedImage
            src="/lovable-uploads/8f2aca33-5a17-4d2f-89b7-6430829c0728.png"
            alt="Student studying"
            className="w-full h-full object-cover object-center"
            objectFit="cover"
          />
        </div>
        
        {/* Mobile: 9:16 aspect ratio - centered on person's face */}
        <div className="block md:hidden aspect-[9/16] w-full">
          <OptimizedImage
            src="/lovable-uploads/8f2aca33-5a17-4d2f-89b7-6430829c0728.png"
            alt="Student studying"
            className="w-full h-full object-cover object-[center_30%]"
            objectFit="cover"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 py-20" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                SINU TAFE & TVET
              </h1>
                 <div className="bg-black/40 rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold text-[#fff] mb-4">
                          Ready to Start Your Journey?
                        </h3>
                        <p className="text-[#fff] mb-6 max-w-2xl mx-auto">
                          Join thousands of students who have transformed their careers through SINU TAFE & TVET programs. 
                          Applications are now open for the next intake.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          {tabs.map((tab) => (
                            <Button
                              key={tab.label}
                              onClick={() => handleTabClick(tab)}
                              className="bg-blue-600 hover:bg-[#082952] text-white px-8 py-3"
                            >
                              {tab.label}
                            </Button>
                          ))}
                        </div>
                      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TafeHero;
