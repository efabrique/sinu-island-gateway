import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import { CampusAccommodationHero } from '@/components/campus-accommodation/CampusAccommodationHero';
import { AccommodationOverview } from '@/components/campus-accommodation/AccommodationOverview';
import { AccommodationOptions } from '@/components/campus-accommodation/AccommodationOptions';
import { WhatsIncluded } from '@/components/campus-accommodation/WhatsIncluded';
import { ResidentTestimonials } from '@/components/campus-accommodation/ResidentTestimonials';
import { ApplicationProcess } from '@/components/campus-accommodation/ApplicationProcess';
import { PricingInfo } from '@/components/campus-accommodation/PricingInfo';
import { SupportServices } from '@/components/campus-accommodation/SupportServices';
import { ContactAccommodation } from '@/components/campus-accommodation/ContactAccommodation';

const CampusAccommodation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CampusAccommodationHero />
        <AccommodationOverview />
        <AccommodationOptions />
        <WhatsIncluded />
        <ResidentTestimonials />
        <ApplicationProcess />
        <PricingInfo />
        <SupportServices />
        <ContactAccommodation />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default CampusAccommodation;