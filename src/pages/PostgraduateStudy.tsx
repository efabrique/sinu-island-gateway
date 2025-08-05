
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostgraduateHero from '@/components/postgraduate/PostgraduateHero';
import StudyOptionsSection from '@/components/postgraduate/StudyOptionsSection';
import RequirementsSection from '@/components/postgraduate/RequirementsSection';
import SupportSection from '@/components/postgraduate/SupportSection';
import NextStepsSection from '@/components/postgraduate/NextStepsSection';
import BackToTop from '@/components/common/BackToTop';
import PostgraduateTab from '@/components/postgraduate/PostgaduateTab';
import PostgraduateStudyOptions from '@/components/postgraduate/PostgraduateStudyOptions';
import PostgraduateKeyDates from '@/components/postgraduate/PostgraduateKeyDates';

const PostgraduateStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PostgraduateHero />
        <PostgraduateTab/>
        <NextStepsSection />
        <PostgraduateStudyOptions/>
        <StudyOptionsSection />
        <RequirementsSection />
        <PostgraduateKeyDates/>
        
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default PostgraduateStudy;
