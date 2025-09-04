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
import DFL from '@/components/home/DFL';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        {/* Hero Section */}
        <div className="relative w-full">
          <Hero />

          {/* Header over Hero */}
          <div className="absolute top-0 left-0 w-full z-10">
            <Header />
          </div>
        </div>
      </ErrorBoundary>

      {/* Main Content */}
      <main className="flex-grow w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col gap-12 md:gap-16 pt-8">

          <ErrorBoundary>
            <MissonVision />
          </ErrorBoundary>

          <ErrorBoundary>
            <StudyWithUs />
          </ErrorBoundary>

          <ErrorBoundary>
            <StudentServices />
          </ErrorBoundary>

          <ErrorBoundary>
            <FeaturedPrograms />
          </ErrorBoundary>

          <ErrorBoundary>
            <DFL />
          </ErrorBoundary>

          <ErrorBoundary>
            <OurStories />
          </ErrorBoundary>

          <ErrorBoundary>
            <NewsAndEvents />
          </ErrorBoundary>

        </div>
      </main>

      {/* Footer */}
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>

      <BackToTop />
    </div>
  );
};

export default Index;
