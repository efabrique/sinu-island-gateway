
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InternationalSupportHero from '@/components/international/InternationalSupportHero';
import SupportOverview from '@/components/international/SupportOverview';
import AcademicSupport from '@/components/international/AcademicSupport';
import PersonalSupport from '@/components/international/PersonalSupport';
import LegalImmigration from '@/components/international/LegalImmigration';
import CommunityConnection from '@/components/international/CommunityConnection';
import EmergencySupport from '@/components/international/EmergencySupport';
import ContactInformation from '@/components/international/ContactInformation';
import BackToTop from '@/components/common/BackToTop';

const InternationalStudentSupport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <InternationalSupportHero />
        <SupportOverview />
        <AcademicSupport />
        <PersonalSupport />
        <LegalImmigration />
        <CommunityConnection />
        <EmergencySupport />
        <ContactInformation />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default InternationalStudentSupport;
