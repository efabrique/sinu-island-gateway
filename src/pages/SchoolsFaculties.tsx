
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SchoolsFacultiesHero from '@/components/schools/SchoolsFacultiesHero';
import FacultiesSection from '@/components/schools/FacultiesSection';
import SchoolsSection from '@/components/schools/SchoolsSection';
import InstitutesSection from '@/components/schools/InstitutesSection';
import CentresSection from '@/components/schools/CentresSection';
import BackToTop from '@/components/common/BackToTop';

const SchoolsFaculties = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SchoolsFacultiesHero />
        <FacultiesSection />
        <SchoolsSection />
        <InstitutesSection />
        <CentresSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default SchoolsFaculties;
