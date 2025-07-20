import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/common/BackToTop";
import { ResearchSeminarsHero } from "@/components/research-seminars/ResearchSeminarsHero";
import { SeminarsOverview } from "@/components/research-seminars/SeminarsOverview";
import { UpcomingSeminars } from "@/components/research-seminars/UpcomingSeminars";
import { SeminarSeries } from "@/components/research-seminars/SeminarSeries";
import { PastSeminars } from "@/components/research-seminars/PastSeminars";
import { SeminarResources } from "@/components/research-seminars/SeminarResources";
import { ContactSeminars } from "@/components/research-seminars/ContactSeminars";

const ResearchSeminars = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ResearchSeminarsHero />
        <div style={{ backgroundColor: '#edf4ff' }}>
          <SeminarsOverview />
          <UpcomingSeminars />
          <SeminarSeries />
          <PastSeminars />
          <SeminarResources />
          <ContactSeminars />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ResearchSeminars;