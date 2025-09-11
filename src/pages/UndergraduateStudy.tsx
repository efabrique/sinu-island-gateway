import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UndergraduateHero from '@/components/undergraduate/UndergraduateHero';
import StudyOptionsSection from '@/components/undergraduate/StudyOptionsSection';
import RequirementsSection from '@/components/undergraduate/RequirementsSection';
import SupportSection from '@/components/undergraduate/SupportSection';
import NextStepsSection from '@/components/undergraduate/NextStepsSection';
import BackToTop from '@/components/common/BackToTop';
import UndergraduateStudyOptions from '@/components/undergraduate/UndergraduateStudyOptions';
import UndergraduateTab from '@/components/undergraduate/UndergaduateTab';
import KeyDatesSection from '@/components/undergraduate/UndergraduateKeyDates';

const UndergraduateStudy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          {/* Hero Section */}
          <UndergraduateHero />

          {/* Tabs / Study Options */}
          <UndergraduateTab />
          <NextStepsSection />
          <UndergraduateStudyOptions />
          <StudyOptionsSection />
          <RequirementsSection />
          <KeyDatesSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <BackToTop />
    </div>
  );
};

export default UndergraduateStudy;
