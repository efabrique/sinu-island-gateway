
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IctServicesHero from '@/components/ict/IctServicesHero';
import ServicesOverviewSection from '@/components/ict/ServicesOverviewSection';
import StudentServicesSection from '@/components/ict/StudentServicesSection';
import StaffServicesSection from '@/components/ict/StaffServicesSection';
import SupportSection from '@/components/ict/SupportSection';
import ResourcesSection from '@/components/ict/ResourcesSection';
import BackToTop from '@/components/common/BackToTop';

const IctServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <IctServicesHero />
        <ServicesOverviewSection />
        <StudentServicesSection />
        <StaffServicesSection />
        <SupportSection />
        <ResourcesSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default IctServices;
