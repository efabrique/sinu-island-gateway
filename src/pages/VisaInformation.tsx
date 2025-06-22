
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VisaHero from '@/components/visa/VisaHero';
import VisaOverviewSection from '@/components/visa/VisaOverviewSection';
import VisaTypesSection from '@/components/visa/VisaTypesSection';
import ApplicationProcessSection from '@/components/visa/ApplicationProcessSection';
import RequirementsSection from '@/components/visa/RequirementsSection';
import FinancialRequirementsSection from '@/components/visa/FinancialRequirementsSection';
import HealthInsuranceSection from '@/components/visa/HealthInsuranceSection';
import WorkRightsSection from '@/components/visa/WorkRightsSection';
import RenewalExtensionSection from '@/components/visa/RenewalExtensionSection';
import SupportResourcesSection from '@/components/visa/SupportResourcesSection';
import BackToTop from '@/components/common/BackToTop';

const VisaInformation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <VisaHero />
        <VisaOverviewSection />
        <VisaTypesSection />
        <ApplicationProcessSection />
        <RequirementsSection />
        <FinancialRequirementsSection />
        <HealthInsuranceSection />
        <WorkRightsSection />
        <RenewalExtensionSection />
        <SupportResourcesSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default VisaInformation;
