import React from 'react';
import MarineScienceHero from '@/components/marine-science/MarineScienceHero';
import ResearchOverview from '@/components/marine-science/ResearchOverview';
import ResearchAreas from '@/components/marine-science/ResearchAreas';
import FacilityResources from '@/components/marine-science/FacilityResources';
import ResearchProjects from '@/components/marine-science/ResearchProjects';
import CollaborationPartnerships from '@/components/marine-science/CollaborationPartnerships';
import EducationPrograms from '@/components/marine-science/EducationPrograms';
import ContactResearch from '@/components/marine-science/ContactResearch';
import BackToTop from '@/components/common/BackToTop';

const MarineScienceConservation: React.FC = () => {
  return (
    <div className="min-h-screen">
      <MarineScienceHero />
      <ResearchOverview />
      <ResearchAreas />
      <FacilityResources />
      <ResearchProjects />
      <CollaborationPartnerships />
      <EducationPrograms />
      <ContactResearch />
      <BackToTop />
    </div>
  );
};

export default MarineScienceConservation;