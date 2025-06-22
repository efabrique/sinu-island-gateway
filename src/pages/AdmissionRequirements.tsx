
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AdmissionHero from '@/components/admission/AdmissionHero';
import RequirementsOverviewSection from '@/components/admission/RequirementsOverviewSection';
import UndergraduateRequirementsSection from '@/components/admission/UndergraduateRequirementsSection';
import PostgraduateRequirementsSection from '@/components/admission/PostgraduateRequirementsSection';
import EnglishRequirementsSection from '@/components/admission/EnglishRequirementsSection';
import DocumentsSection from '@/components/admission/DocumentsSection';
import ApplicationProcessSection from '@/components/admission/ApplicationProcessSection';
import BackToTop from '@/components/common/BackToTop';

const AdmissionRequirements = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AdmissionHero />
        <RequirementsOverviewSection />
        <UndergraduateRequirementsSection />
        <PostgraduateRequirementsSection />
        <EnglishRequirementsSection />
        <DocumentsSection />
        <ApplicationProcessSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default AdmissionRequirements;
