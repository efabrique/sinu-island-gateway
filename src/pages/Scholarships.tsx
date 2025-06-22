
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScholarshipsHero from '@/components/scholarships/ScholarshipsHero';
import ScholarshipTypesSection from '@/components/scholarships/ScholarshipTypesSection';
import ApplicationProcessSection from '@/components/scholarships/ApplicationProcessSection';
import FeaturedScholarshipsSection from '@/components/scholarships/FeaturedScholarshipsSection';
import EligibilitySection from '@/components/scholarships/EligibilitySection';
import ScholarshipSearchSection from '@/components/scholarships/ScholarshipSearchSection';
import BackToTop from '@/components/common/BackToTop';

const Scholarships = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ScholarshipsHero />
        <ScholarshipSearchSection />
        <ScholarshipTypesSection />
        <FeaturedScholarshipsSection />
        <EligibilitySection />
        <ApplicationProcessSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Scholarships;
