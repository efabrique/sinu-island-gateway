
import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import FeaturedPrograms from '@/components/home/FeaturedPrograms';
import NewsEvents from '@/components/home/NewsEvents';
import QuickLinks from '@/components/home/QuickLinks';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuickLinks />
        <FeaturedPrograms />
        <NewsEvents />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
