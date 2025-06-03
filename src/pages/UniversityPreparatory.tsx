
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PrepHero from '@/components/prep/PrepHero';
import ProgramOverviewSection from '@/components/prep/ProgramOverviewSection';
import PathwayOptionsSection from '@/components/prep/PathwayOptionsSection';
import EntryRequirementsSection from '@/components/prep/EntryRequirementsSection';
import SupportServicesSection from '@/components/prep/SupportServicesSection';
import ApplicationSection from '@/components/prep/ApplicationSection';

const UniversityPreparatory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PrepHero />
        <ProgramOverviewSection />
        <PathwayOptionsSection />
        <EntryRequirementsSection />
        <SupportServicesSection />
        <ApplicationSection />
      </main>
      <Footer />
    </div>
  );
};

export default UniversityPreparatory;
