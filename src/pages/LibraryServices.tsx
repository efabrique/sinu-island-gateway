
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LibraryHero from '@/components/library/LibraryHero';
import QuickLinksSection from '@/components/library/QuickLinksSection';
import ServicesSection from '@/components/library/ServicesSection';
import ResourcesSection from '@/components/library/ResourcesSection';
import StudySpacesSection from '@/components/library/StudySpacesSection';
import SupportSection from '@/components/library/SupportSection';

const LibraryServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <LibraryHero />
        <QuickLinksSection />
        <ServicesSection />
        <ResourcesSection />
        <StudySpacesSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default LibraryServices;
