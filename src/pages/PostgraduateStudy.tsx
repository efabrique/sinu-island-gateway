
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostgraduateHero from '@/components/postgraduate/PostgraduateHero';
import StudyOptionsSection from '@/components/postgraduate/StudyOptionsSection';
import RequirementsSection from '@/components/postgraduate/RequirementsSection';
import SupportSection from '@/components/postgraduate/SupportSection';
import NextStepsSection from '@/components/postgraduate/NextStepsSection';

const PostgraduateStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PostgraduateHero />
        <StudyOptionsSection />
        <RequirementsSection />
        <SupportSection />
        <NextStepsSection />
      </main>
      <Footer />
    </div>
  );
};

export default PostgraduateStudy;
