import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import ClimateChangeHero from '@/components/climate-change/ClimateChangeHero';
import ResearchOverview from '@/components/climate-change/ResearchOverview';
import ResearchAreas from '@/components/climate-change/ResearchAreas';
import ImpactAssessment from '@/components/climate-change/ImpactAssessment';
import AdaptationStrategies from '@/components/climate-change/AdaptationStrategies';
import Partnerships from '@/components/climate-change/Partnerships';
import TeamPeople from '@/components/climate-change/TeamPeople';
import ContactSection from '@/components/climate-change/ContactSection';

const ClimateChangeAdaptation: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <main className="flex-grow">
        <ErrorBoundary>
          <ClimateChangeHero />
        </ErrorBoundary>
        <ErrorBoundary>
          <ResearchOverview />
        </ErrorBoundary>
        <ErrorBoundary>
          <ResearchAreas />
        </ErrorBoundary>
        <ErrorBoundary>
          <ImpactAssessment />
        </ErrorBoundary>
        <ErrorBoundary>
          <AdaptationStrategies />
        </ErrorBoundary>
        <ErrorBoundary>
          <Partnerships />
        </ErrorBoundary>
        <ErrorBoundary>
          <TeamPeople />
        </ErrorBoundary>
        <ErrorBoundary>
          <ContactSection />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
      <BackToTop />
    </div>
  );
};

export default ClimateChangeAdaptation;