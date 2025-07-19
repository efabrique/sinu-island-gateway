import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExchangeHero from '@/components/exchange/ExchangeHero';
import ExchangeOverview from '@/components/exchange/ExchangeOverview';
import EligibilitySection from '@/components/exchange/EligibilitySection';
import ApplicationProcess from '@/components/exchange/ApplicationProcess';
import PartnerUniversities from '@/components/exchange/PartnerUniversities';
import ContactSection from '@/components/exchange/ContactSection';
import BackToTop from '@/components/common/BackToTop';

const ExchangeProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ExchangeHero />
        <ExchangeOverview />
        <EligibilitySection />
        <ApplicationProcess />
        <PartnerUniversities />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ExchangeProgram;