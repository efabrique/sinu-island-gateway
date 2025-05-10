
import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import FeaturedPrograms from '@/components/home/FeaturedPrograms';
import NewsEvents from '@/components/home/NewsEvents';
import QuickLinks from '@/components/home/QuickLinks';
import Footer from '@/components/layout/Footer';
import ErrorBoundary from '@/components/common/ErrorBoundary';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <main className="flex-grow">
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary>
          <QuickLinks />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeaturedPrograms />
        </ErrorBoundary>
        <ErrorBoundary>
          <NewsEvents />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Index;
