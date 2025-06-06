
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EnglishHero from '@/components/english/EnglishHero';
import ProgramOverview from '@/components/english/ProgramOverview';
import CourseOfferings from '@/components/english/CourseOfferings';
import EntryRequirements from '@/components/english/EntryRequirements';
import StudyPathways from '@/components/english/StudyPathways';
import ApplicationProcess from '@/components/english/ApplicationProcess';
import SupportServices from '@/components/english/SupportServices';
import CampusLife from '@/components/english/CampusLife';

const EnglishLanguagePrograms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <EnglishHero />
        <ProgramOverview />
        <CourseOfferings />
        <EntryRequirements />
        <StudyPathways />
        <ApplicationProcess />
        <SupportServices />
        <CampusLife />
      </main>
      <Footer />
    </div>
  );
};

export default EnglishLanguagePrograms;
