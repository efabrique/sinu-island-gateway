
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostgraduateHero from '@/components/postgraduate/PostgraduateHero';
import StudyOptionsSection from '@/components/postgraduate/StudyOptionsSection';
import RequirementsSection from '@/components/postgraduate/RequirementsSection';
import SupportSection from '@/components/postgraduate/SupportSection';
import NextStepsSection from '@/components/postgraduate/NextStepsSection';
import BackToTop from '@/components/common/BackToTop';
import PostgraduateTab from '@/components/postgraduate/PostgaduateTab';
import PostgraduateStudyOptions from '@/components/postgraduate/PostgraduateStudyOptions';
import PostgraduateKeyDates from '@/components/postgraduate/PostgraduateKeyDates';
import StudentsHero from '@/components/students/StudentsHero';
import StudentsTab from '@/components/students/StudentsTabs';
import StudentsQuickLinks from '@/components/students/StudentsQuickLinks';
import StudentsNextSteps from '@/components/students/StudentsNextSteps';
import StudentsNewsEventsSection from '@/components/students/StudentsNewsAndEvents';
import InternationalStudentsTab from '@/components/students/InternationalStudentsTab';
import StudentsStudyWithUs from '@/components/students/StudentsStudyWithUs';
import StudentSupportTab from '@/components/students/StudentsSupportTab';
import StudentsFAQSection from '@/components/students/StudentsFAQSection';
import ContactStudentsLife from '@/components/students/ContactStudentsLife';

const StudentsPortal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <StudentsHero />
        <StudentsTab/>
        <StudentsNextSteps />
        <StudentsQuickLinks/>
        <StudentsNewsEventsSection />
        <InternationalStudentsTab />
        <StudentsStudyWithUs/>
        <StudentSupportTab />
        <StudentsFAQSection />
        <ContactStudentsLife />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default StudentsPortal;
