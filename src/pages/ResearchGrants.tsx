import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import ResearchGrantsHero from '@/components/research-grants/ResearchGrantsHero';
import GrantsOverview from '@/components/research-grants/GrantsOverview';
import FundingOpportunities from '@/components/research-grants/FundingOpportunities';
import GrantCategories from '@/components/research-grants/GrantCategories';
import ApplicationSupport from '@/components/research-grants/ApplicationSupport';
import GrantStatistics from '@/components/research-grants/GrantStatistics';

const ResearchGrants = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ResearchGrantsHero />
        <GrantsOverview />
        <GrantStatistics />
        <FundingOpportunities />
        <GrantCategories />
        <ApplicationSupport />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ResearchGrants;