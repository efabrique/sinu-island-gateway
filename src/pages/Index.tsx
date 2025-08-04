
import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import FeaturedPrograms from '@/components/home/FeaturedPrograms';
import NewsEvents from '@/components/home/NewsEvents';
import QuickLinks from '@/components/home/QuickLinks';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import MissonVision from '@/components/home/MissionVission';
import StudyWithUs from '@/components/home/StudyWithUs';
import StudentServices from '@/components/home/StudentServices';
import OurStories from '@/components/home/OurStories';
import NewsAndEvents from '@/components/home/NewsAndEvents';

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
        <div className="my-10" />
        <ErrorBoundary>
          <MissonVision />
        </ErrorBoundary>
        <ErrorBoundary>
          <StudyWithUs/>
        </ErrorBoundary>
          <ErrorBoundary>
          <StudentServices/>
        </ErrorBoundary>
        <ErrorBoundary>
          <FeaturedPrograms />
        </ErrorBoundary>
        <ErrorBoundary>
          <OurStories />
        </ErrorBoundary>
        <ErrorBoundary>
          <NewsAndEvents />
        </ErrorBoundary>
          <ErrorBoundary>
          <QuickLinks />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
      <BackToTop />
    </div>
  );
};

export default Index;
