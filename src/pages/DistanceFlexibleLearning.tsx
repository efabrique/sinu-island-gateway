
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DistanceHero from '@/components/distance/DistanceHero';
import LearningCentersSection from '@/components/distance/LearningCentersSection';
import StudyOptionsSection from '@/components/distance/StudyOptionsSection';
import SupportServicesSection from '@/components/distance/SupportServicesSection';
import TechnologySection from '@/components/distance/TechnologySection';
import EnrollmentSection from '@/components/distance/EnrollmentSection';
import BackToTop from '@/components/common/BackToTop';

const DistanceFlexibleLearning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <DistanceHero />
        <LearningCentersSection />
        <StudyOptionsSection />
        <SupportServicesSection />
        <TechnologySection />
        <EnrollmentSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default DistanceFlexibleLearning;
