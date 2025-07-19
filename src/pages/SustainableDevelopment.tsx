import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import SustainableHero from '@/components/sustainable/SustainableHero';
import ResearchOverview from '@/components/sustainable/ResearchOverview';
import ResearchAreas from '@/components/sustainable/ResearchAreas';
import Initiatives from '@/components/sustainable/Initiatives';
import Partnerships from '@/components/sustainable/Partnerships';
import Impact from '@/components/sustainable/Impact';
import ContactSection from '@/components/sustainable/ContactSection';

const SustainableDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <SustainableHero />
        <ResearchOverview />
        <ResearchAreas />
        <Initiatives />
        <Partnerships />
        <Impact />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default SustainableDevelopment;