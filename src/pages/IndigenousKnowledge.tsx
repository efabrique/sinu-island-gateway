import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/common/BackToTop';
import IndigenousKnowledgeHero from '@/components/indigenous/IndigenousKnowledgeHero';
import ResearchOverview from '@/components/indigenous/ResearchOverview';
import ResearchPriorities from '@/components/indigenous/ResearchPriorities';
import KnowledgeAreas from '@/components/indigenous/KnowledgeAreas';
import CommunityPartnerships from '@/components/indigenous/CommunityPartnerships';
import ResearchNetworkActivities from '@/components/indigenous/ResearchNetworkActivities';
import LeadershipTeam from '@/components/indigenous/LeadershipTeam';
import ContactCollaboration from '@/components/indigenous/ContactCollaboration';

const IndigenousKnowledge = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <IndigenousKnowledgeHero />
        <ResearchOverview />
        <ResearchPriorities />
        <KnowledgeAreas />
        <CommunityPartnerships />
        <ResearchNetworkActivities />
        <LeadershipTeam />
        <ContactCollaboration />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default IndigenousKnowledge;