import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { HealthWellnessHero } from '@/components/health-wellness/HealthWellnessHero';
import { HealthOverview } from '@/components/health-wellness/HealthOverview';
import { MedicalServices } from '@/components/health-wellness/MedicalServices';
import { WellnessPrograms } from '@/components/health-wellness/WellnessPrograms';
import { CounselingSupport } from '@/components/health-wellness/CounselingSupport';
import { AccessibilitySupport } from '@/components/health-wellness/AccessibilitySupport';
import { FitnessRecreation } from '@/components/health-wellness/FitnessRecreation';
import { EmergencyServices } from '@/components/health-wellness/EmergencyServices';
import { ContactHealth } from '@/components/health-wellness/ContactHealth';

const HealthWellness = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <main className="flex-grow">
        <ErrorBoundary>
          <HealthWellnessHero />
        </ErrorBoundary>
        <ErrorBoundary>
          <HealthOverview />
        </ErrorBoundary>
        <ErrorBoundary>
          <MedicalServices />
        </ErrorBoundary>
        <ErrorBoundary>
          <WellnessPrograms />
        </ErrorBoundary>
        <ErrorBoundary>
          <CounselingSupport />
        </ErrorBoundary>
        <ErrorBoundary>
          <AccessibilitySupport />
        </ErrorBoundary>
        <ErrorBoundary>
          <FitnessRecreation />
        </ErrorBoundary>
        <ErrorBoundary>
          <EmergencyServices />
        </ErrorBoundary>
        <ErrorBoundary>
          <ContactHealth />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
      <BackToTop />
    </div>
  );
};

export default HealthWellness;