import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import ArtsCultureHero from '@/components/arts-culture/ArtsCultureHero';
import CultureOverview from '@/components/arts-culture/CultureOverview';
import VenuesGalleries from '@/components/arts-culture/VenuesGalleries';
import PerformingArts from '@/components/arts-culture/PerformingArts';
import VisualArts from '@/components/arts-culture/VisualArts';
import CulturalEvents from '@/components/arts-culture/CulturalEvents';
import StudentOpportunities from '@/components/arts-culture/StudentOpportunities';
import CommunityEngagement from '@/components/arts-culture/CommunityEngagement';
import ContactArts from '@/components/arts-culture/ContactArts';

const ArtsCulture = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-0">
        <ArtsCultureHero />
        <div style={{ backgroundColor: '#edf4ff' }}>
          <CultureOverview />
          <VenuesGalleries />
          <PerformingArts />
          <VisualArts />
          <CulturalEvents />
          <StudentOpportunities />
          <CommunityEngagement />
          <ContactArts />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ArtsCulture;