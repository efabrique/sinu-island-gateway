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
    <div className="relative min-h-screen flex flex-col">
      {/* Fixed background image in bottom-right corner */}
      <div
        className="fixed bottom-0 right-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/e89a9d15-f230-44b8-8ecb-322ac2085582.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center ',
          backgroundSize: '25%', // show only 1/4 of the image
          opacity: 0.15, // optional for watermark effect
        }}
      />

      {/* Header stays fixed over Hero */}
      <Header />

      {/* Hero */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Main Content */}
      <main className="flex-grow w-full relative z-10">
        <div className="flex flex-col">
          <ErrorBoundary><MissonVision /></ErrorBoundary>
          <ErrorBoundary><StudyWithUs /></ErrorBoundary>
          <ErrorBoundary><StudentServices /></ErrorBoundary>
          <ErrorBoundary><FeaturedPrograms /></ErrorBoundary>
          <ErrorBoundary><DFL /></ErrorBoundary>
          <ErrorBoundary><OurStories /></ErrorBoundary>
          <ErrorBoundary><NewsAndEvents /></ErrorBoundary>
        </div>
      </main>

      {/* Footer */}
      <ErrorBoundary><Footer /></ErrorBoundary>

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
};

export default Index;
