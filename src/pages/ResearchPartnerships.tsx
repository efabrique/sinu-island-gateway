import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/common/BackToTop";
import { ResearchPartnershipsHero } from "@/components/research-partnerships/ResearchPartnershipsHero";
import { PartnershipsOverview } from "@/components/research-partnerships/PartnershipsOverview";
import { OurPartners } from "@/components/research-partnerships/OurPartners";
import { CollaborationOpportunities } from "@/components/research-partnerships/CollaborationOpportunities";
import { PartnershipBenefits } from "@/components/research-partnerships/PartnershipBenefits";
import { HowToPartner } from "@/components/research-partnerships/HowToPartner";
import { ContactPartnerships } from "@/components/research-partnerships/ContactPartnerships";

const ResearchPartnerships = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ResearchPartnershipsHero />
        <div style={{ backgroundColor: '#edf4ff' }}>
          <PartnershipsOverview />
          <OurPartners />
          <CollaborationOpportunities />
          <PartnershipBenefits />
          <HowToPartner />
          <ContactPartnerships />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ResearchPartnerships;