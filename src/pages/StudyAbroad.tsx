import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/common/BackToTop";
import { StudyAbroadHero } from "@/components/study-abroad/StudyAbroadHero";
import { ProgramOverview } from "@/components/study-abroad/ProgramOverview";
import { ProgramDetails } from "@/components/study-abroad/ProgramDetails";
import { AdmissionRequirements } from "@/components/study-abroad/AdmissionRequirements";
import { ApplicationProcess } from "@/components/study-abroad/ApplicationProcess";
import { StudentExperience } from "@/components/study-abroad/StudentExperience";
import { ContactInformation } from "@/components/study-abroad/ContactInformation";

export default function StudyAbroad() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <StudyAbroadHero />
        <div style={{ 
          background: 'linear-gradient(180deg, #edf4ff 0%, #ffffff 50%, #edf4ff 100%)'
        }}>
          <ProgramOverview />
          <ProgramDetails />
          <AdmissionRequirements />
          <ApplicationProcess />
          <StudentExperience />
          <ContactInformation />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}