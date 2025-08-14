
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
import DistanceSearch from '@/components/distance/DistanceSearch';
import DistanceTab from '@/components/distance/DistanceTabs';
import DistanceKeyDates from '@/components/distance/DistanceKeyDates';
import DFLProgramStructure from '@/components/distance/DFLProgramStructure';

const DistanceFlexibleLearning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <DistanceHero />
        <DistanceTab/>
        <DistanceSearch />
        <EnrollmentSection />
        <StudyOptionsSection />
        <DFLProgramStructure/>
       
        <DistanceKeyDates />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default DistanceFlexibleLearning;
