
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UndergraduateHero from '@/components/undergraduate/UndergraduateHero';
import StudyOptionsSection from '@/components/undergraduate/StudyOptionsSection';
import RequirementsSection from '@/components/undergraduate/RequirementsSection';
import SupportSection from '@/components/undergraduate/SupportSection';
import NextStepsSection from '@/components/undergraduate/NextStepsSection';

const UndergraduateStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <UndergraduateHero />
        <StudyOptionsSection />
        <RequirementsSection />
        <SupportSection />
        <NextStepsSection />
      </main>
      <Footer />
    </div>
  );
};

export default UndergraduateStudy;
