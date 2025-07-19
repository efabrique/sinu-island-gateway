import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/common/BackToTop";
import { GlobalResearchHero } from "@/components/global-research/GlobalResearchHero";
import { ResearchOverview } from "@/components/global-research/ResearchOverview";
import { PartnershipImpact } from "@/components/global-research/PartnershipImpact";
import { CollaborationAreas } from "@/components/global-research/CollaborationAreas";
import { PartnerInstitutions } from "@/components/global-research/PartnerInstitutions";
import { ResearchPrograms } from "@/components/global-research/ResearchPrograms";
import { FundingOpportunities } from "@/components/global-research/FundingOpportunities";
import { ContactCollaboration } from "@/components/global-research/ContactCollaboration";

export default function GlobalResearchCollaborations() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <GlobalResearchHero />
        <div style={{ 
          background: 'linear-gradient(180deg, #edf4ff 0%, #ffffff 50%, #edf4ff 100%)'
        }}>
          <ResearchOverview />
          <PartnershipImpact />
          <CollaborationAreas />
          <PartnerInstitutions />
          <ResearchPrograms />
          <FundingOpportunities />
          <ContactCollaboration />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}