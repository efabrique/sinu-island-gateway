import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import DiningServicesHero from '@/components/dining/DiningServicesHero';
import DiningOverview from '@/components/dining/DiningOverview';
import MealPlansSection from '@/components/dining/MealPlansSection';
import DiningVenuesSection from '@/components/dining/DiningVenuesSection';
import MenuOfferings from '@/components/dining/MenuOfferings';
import SpecialDietarySection from '@/components/dining/SpecialDietarySection';
import OpeningHoursSection from '@/components/dining/OpeningHoursSection';
import ContactDining from '@/components/dining/ContactDining';

const DiningServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <DiningServicesHero />
        <DiningOverview />
        <MealPlansSection />
        <DiningVenuesSection />
        <MenuOfferings />
        <SpecialDietarySection />
        <OpeningHoursSection />
        <ContactDining />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default DiningServices;