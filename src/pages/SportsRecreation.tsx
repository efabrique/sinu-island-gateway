import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import SportsRecreationHero from '@/components/sports-recreation/SportsRecreationHero';
import SportsOverview from '@/components/sports-recreation/SportsOverview';
import FacilitiesSection from '@/components/sports-recreation/FacilitiesSection';
import ProgramsSection from '@/components/sports-recreation/ProgramsSection';
import SocialSportsSection from '@/components/sports-recreation/SocialSportsSection';
import FitnessWellnessSection from '@/components/sports-recreation/FitnessWellnessSection';
import MembershipSection from '@/components/sports-recreation/MembershipSection';
import ContactSports from '@/components/sports-recreation/ContactSports';

const SportsRecreation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-0">
        <SportsRecreationHero />
        <div style={{ backgroundColor: '#edf4ff' }}>
          <SportsOverview />
          <FacilitiesSection />
          <ProgramsSection />
          <SocialSportsSection />
          <FitnessWellnessSection />
          <MembershipSection />
          <ContactSports />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default SportsRecreation;