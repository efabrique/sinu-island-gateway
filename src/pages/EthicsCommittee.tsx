import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import EthicsHero from '@/components/ethics/EthicsHero';
import EthicsOverview from '@/components/ethics/EthicsOverview';
import EthicsCommittees from '@/components/ethics/EthicsCommittees';
import ApplicationProcess from '@/components/ethics/ApplicationProcess';
import EthicsGuidelines from '@/components/ethics/EthicsGuidelines';
import EthicsResources from '@/components/ethics/EthicsResources';
import EthicsContact from '@/components/ethics/EthicsContact';

const EthicsCommittee = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <EthicsHero />
        <EthicsOverview />
        <EthicsCommittees />
        <ApplicationProcess />
        <EthicsGuidelines />
        <EthicsResources />
        <EthicsContact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default EthicsCommittee;