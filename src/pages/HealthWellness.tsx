import React from 'react';
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
    <div className="min-h-screen">
      <HealthWellnessHero />
      <HealthOverview />
      <MedicalServices />
      <WellnessPrograms />
      <CounselingSupport />
      <AccessibilitySupport />
      <FitnessRecreation />
      <EmergencyServices />
      <ContactHealth />
    </div>
  );
};

export default HealthWellness;