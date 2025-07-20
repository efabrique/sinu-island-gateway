import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import StudentClubsHero from '@/components/student-clubs/StudentClubsHero';
import ClubsOverview from '@/components/student-clubs/ClubsOverview';
import FindClubsSection from '@/components/student-clubs/FindClubsSection';
import ClubCategoriesSection from '@/components/student-clubs/ClubCategoriesSection';
import ManageClubSection from '@/components/student-clubs/ManageClubSection';
import StartClubSection from '@/components/student-clubs/StartClubSection';
import BenefitsSection from '@/components/student-clubs/BenefitsSection';
import ContactSection from '@/components/student-clubs/ContactSection';

const StudentClubs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#edf4ff]">
      <Header />
      <main>
        <StudentClubsHero />
        <ClubsOverview />
        <FindClubsSection />
        <ClubCategoriesSection />
        <BenefitsSection />
        <ManageClubSection />
        <StartClubSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default StudentClubs;