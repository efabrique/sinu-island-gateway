import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import MarineScienceHero from '@/components/marine-science/MarineScienceHero';
import ResearchOverview from '@/components/marine-science/ResearchOverview';
import ResearchAreas from '@/components/marine-science/ResearchAreas';
import FacilityResources from '@/components/marine-science/FacilityResources';
import ResearchProjects from '@/components/marine-science/ResearchProjects';
import CollaborationPartnerships from '@/components/marine-science/CollaborationPartnerships';
import EducationPrograms from '@/components/marine-science/EducationPrograms';
import ContactResearch from '@/components/marine-science/ContactResearch';

const MarineScienceConservation: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <main className="flex-grow">
        <ErrorBoundary>
          <MarineScienceHero />
        </ErrorBoundary>
        <ErrorBoundary>
          <ResearchOverview />
        </ErrorBoundary>
        <ErrorBoundary>
          <ResearchAreas />
        </ErrorBoundary>
        <ErrorBoundary>
          <FacilityResources />
        </ErrorBoundary>
        <ErrorBoundary>
          <ResearchProjects />
        </ErrorBoundary>
        <ErrorBoundary>
          <CollaborationPartnerships />
        </ErrorBoundary>
        <ErrorBoundary>
          <EducationPrograms />
        </ErrorBoundary>
        <ErrorBoundary>
          <ContactResearch />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
      <BackToTop />
    </div>
  );
};

export default MarineScienceConservation;