import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import PublicationsHero from '@/components/publications/PublicationsHero';
import PublicationsOverview from '@/components/publications/PublicationsOverview';
import PublicationsCategories from '@/components/publications/PublicationsCategories';
import FeaturedPublications from '@/components/publications/FeaturedPublications';
import PublicationSearch from '@/components/publications/PublicationSearch';
import PublicationStats from '@/components/publications/PublicationStats';

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PublicationsHero />
        <PublicationsOverview />
        <PublicationStats />
        <PublicationsCategories />
        <FeaturedPublications />
        <PublicationSearch />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Publications;