
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CulturalHero from '@/components/cultural/CulturalHero';
import OrientationOverview from '@/components/cultural/OrientationOverview';
import OrientationPrograms from '@/components/cultural/OrientationPrograms';
import CulturalActivities from '@/components/cultural/CulturalActivities';
import PracticalInformation from '@/components/cultural/PracticalInformation';
import CommunityConnections from '@/components/cultural/CommunityConnections';
import SupportResources from '@/components/cultural/SupportResources';

const CulturalOrientation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CulturalHero />
        <OrientationOverview />
        <OrientationPrograms />
        <CulturalActivities />
        <PracticalInformation />
        <CommunityConnections />
        <SupportResources />
      </main>
      <Footer />
    </div>
  );
};

export default CulturalOrientation;
