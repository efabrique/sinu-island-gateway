import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/common/BackToTop";
import { InternationalScholarshipsHero } from "@/components/international-scholarships/InternationalScholarshipsHero";
import { ScholarshipsOverview } from "@/components/international-scholarships/ScholarshipsOverview";
import { FeatureScholarships } from "@/components/international-scholarships/FeatureScholarships";
import { EligibilitySection } from "@/components/international-scholarships/EligibilitySection";
import { ApplicationGuide } from "@/components/international-scholarships/ApplicationGuide";
import { ScholarshipTypes } from "@/components/international-scholarships/ScholarshipTypes";
import { ContactSupport } from "@/components/international-scholarships/ContactSupport";

export default function InternationalScholarships() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <InternationalScholarshipsHero />
        <div style={{ 
          background: 'linear-gradient(180deg, #edf4ff 0%, #ffffff 50%, #edf4ff 100%)'
        }}>
          <ScholarshipsOverview />
          <FeatureScholarships />
          <ScholarshipTypes />
          <EligibilitySection />
          <ApplicationGuide />
          <ContactSupport />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}