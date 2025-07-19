import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PartnerUniversitiesHero from '@/components/partners/PartnerUniversitiesHero';
import PartnersOverview from '@/components/partners/PartnersOverview';
import RegionalPartnersSection from '@/components/partners/RegionalPartnersSection';
import SearchPartnersSection from '@/components/partners/SearchPartnersSection';
import ApplicationInfoSection from '@/components/partners/ApplicationInfoSection';
import ContactSection from '@/components/partners/ContactSection';

const PartnerUniversities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PartnerUniversitiesHero />
        <PartnersOverview />
        <RegionalPartnersSection />
        <SearchPartnersSection />
        <ApplicationInfoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default PartnerUniversities;