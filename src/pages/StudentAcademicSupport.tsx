
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StudentSupportHero from '@/components/student-support/StudentSupportHero';
import SupportServicesSection from '@/components/student-support/SupportServicesSection';
import AcademicResourcesSection from '@/components/student-support/AcademicResourcesSection';
import StudentLifeSection from '@/components/student-support/StudentLifeSection';
import ContactSupportSection from '@/components/student-support/ContactSupportSection';

const StudentAcademicSupport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <StudentSupportHero />
        <SupportServicesSection />
        <AcademicResourcesSection />
        <StudentLifeSection />
        <ContactSupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default StudentAcademicSupport;
