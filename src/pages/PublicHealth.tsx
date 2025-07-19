import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PublicHealthHero } from "@/components/public-health/PublicHealthHero";
import { ResearchOverview } from "@/components/public-health/ResearchOverview";
import { ResearchAreas } from "@/components/public-health/ResearchAreas";
import { ResearchImpact } from "@/components/public-health/ResearchImpact";
import { HealthServices } from "@/components/public-health/HealthServices";
import { Collaborations } from "@/components/public-health/Collaborations";
import { ContactResearch } from "@/components/public-health/ContactResearch";
import BackToTop from "@/components/common/BackToTop";

export default function PublicHealth() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PublicHealthHero />
        <ResearchOverview />
        <ResearchAreas />
        <ResearchImpact />
        <HealthServices />
        <Collaborations />
        <ContactResearch />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}