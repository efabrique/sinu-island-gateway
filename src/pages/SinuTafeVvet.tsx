
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TafeHero from '@/components/tafe/TafeHero';
import CourseAreasSection from '@/components/tafe/CourseAreasSection';
import StudyOptionsSection from '@/components/tafe/StudyOptionsSection';
import SupportSection from '@/components/tafe/SupportSection';
import PathwaysSection from '@/components/tafe/PathwaysSection';
import EnrollmentSection from '@/components/tafe/EnrollmentSection';
import BackToTop from '@/components/common/BackToTop';
import TafeTab from '@/components/tafe/TafeTab';
import TafeKeyDates from '@/components/tafe/TafeKeyDates';

const SinuTafeVvet = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <TafeHero />
        <TafeTab/>
        <EnrollmentSection />
        <CourseAreasSection />
        <PathwaysSection />
        <TafeKeyDates/>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default SinuTafeVvet;
