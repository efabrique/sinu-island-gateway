
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AccommodationHero from '@/components/accommodation/AccommodationHero';
import AccommodationOverviewSection from '@/components/accommodation/AccommodationOverviewSection';
import AccommodationTypesSection from '@/components/accommodation/AccommodationTypesSection';
import OnCampusSection from '@/components/accommodation/OnCampusSection';
import OffCampusSection from '@/components/accommodation/OffCampusSection';
import ApplicationProcessSection from '@/components/accommodation/ApplicationProcessSection';
import CostsFeesSection from '@/components/accommodation/CostsFeesSection';
import SupportServicesSection from '@/components/accommodation/SupportServicesSection';
import FacilitiesSection from '@/components/accommodation/FacilitiesSection';
import BackToTop from '@/components/common/BackToTop';

const StudentAccommodation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AccommodationHero />
        <AccommodationOverviewSection />
        <AccommodationTypesSection />
        <OnCampusSection />
        <OffCampusSection />
        <ApplicationProcessSection />
        <CostsFeesSection />
        <FacilitiesSection />
        <SupportServicesSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default StudentAccommodation;
