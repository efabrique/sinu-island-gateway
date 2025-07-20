
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CourseFinder from "./pages/CourseFinder";
import CourseCatalog from "./pages/CourseCatalog";
import UndergraduateStudy from "./pages/UndergraduateStudy";
import PostgraduateStudy from "./pages/PostgraduateStudy";
import DistanceFlexibleLearning from "./pages/DistanceFlexibleLearning";
import SinuTafeVvet from "./pages/SinuTafeVvet";
import UniversityPreparatory from "./pages/UniversityPreparatory";
import ShortCourses from "./pages/ShortCourses";
import LibraryServices from "./pages/LibraryServices";
import SchoolsFaculties from "./pages/SchoolsFaculties";
import StudentAcademicSupport from "./pages/StudentAcademicSupport";
import Scholarships from "./pages/Scholarships";
import IctServices from "./pages/IctServices";
import AdmissionRequirements from "./pages/AdmissionRequirements";
import VisaInformation from "./pages/VisaInformation";
import StudentAccommodation from "./pages/StudentAccommodation";
import EnglishLanguagePrograms from "./pages/EnglishLanguagePrograms";
import CulturalOrientation from "./pages/CulturalOrientation";
import InternationalStudentSupport from "./pages/InternationalStudentSupport";
import ExchangeProgram from "./pages/ExchangeProgram";
import PartnerUniversities from "./pages/PartnerUniversities";
import StudyAbroad from "./pages/StudyAbroad";
import InternationalScholarships from "./pages/InternationalScholarships";
import GlobalResearchCollaborations from "./pages/GlobalResearchCollaborations";
import InternationalEvents from "./pages/InternationalEvents";
import MarineScienceConservation from "./pages/MarineScienceConservation";
import ClimateChangeAdaptation from "./pages/ClimateChangeAdaptation";
import SustainableDevelopment from "./pages/SustainableDevelopment";
import IndigenousKnowledge from "./pages/IndigenousKnowledge";
import PublicHealth from "./pages/PublicHealth";
import ResearchCentersInstitutes from "./pages/ResearchCentersInstitutes";
import Publications from "./pages/Publications";
import ResearchGrants from "./pages/ResearchGrants";
import EthicsCommittee from "./pages/EthicsCommittee";
import ResearchPartnerships from "./pages/ResearchPartnerships";
import ResearchSeminars from "./pages/ResearchSeminars";
import StudentClubs from "./pages/StudentClubs";
import StaffLogin from "./pages/StaffLogin";
import StudentLogin from "./pages/StudentLogin";
import ApplicantLogin from "./pages/ApplicantLogin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/course-finder" element={<CourseFinder />} />
          <Route path="/course-catalog" element={<CourseCatalog />} />
          <Route path="/undergraduate-study" element={<UndergraduateStudy />} />
          <Route path="/postgraduate-study" element={<PostgraduateStudy />} />
          <Route path="/distance-flexible-learning" element={<DistanceFlexibleLearning />} />
          <Route path="/sinu-tafe-vvet" element={<SinuTafeVvet />} />
          <Route path="/university-preparatory" element={<UniversityPreparatory />} />
          <Route path="/short-courses" element={<ShortCourses />} />
          <Route path="/library-services" element={<LibraryServices />} />
          <Route path="/schools-faculties" element={<SchoolsFaculties />} />
          <Route path="/student-academic-support" element={<StudentAcademicSupport />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/ict-services" element={<IctServices />} />
          <Route path="/admission-requirements" element={<AdmissionRequirements />} />
          <Route path="/visa-information" element={<VisaInformation />} />
          <Route path="/student-accommodation" element={<StudentAccommodation />} />
          <Route path="/english-language-programs" element={<EnglishLanguagePrograms />} />
          <Route path="/cultural-orientation" element={<CulturalOrientation />} />
          <Route path="/international-student-support" element={<InternationalStudentSupport />} />
          <Route path="/exchange-program" element={<ExchangeProgram />} />
          <Route path="/partner-universities" element={<PartnerUniversities />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/international-scholarships" element={<InternationalScholarships />} />
          <Route path="/global-research-collaborations" element={<GlobalResearchCollaborations />} />
          <Route path="/international-events" element={<InternationalEvents />} />
          <Route path="/marine-science-conservation" element={<MarineScienceConservation />} />
          <Route path="/climate-change-adaptation" element={<ClimateChangeAdaptation />} />
        <Route path="/sustainable-development" element={<SustainableDevelopment />} />
        <Route path="/indigenous-knowledge" element={<IndigenousKnowledge />} />
        <Route path="/public-health" element={<PublicHealth />} />
        <Route path="/research-centers-institutes" element={<ResearchCentersInstitutes />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/research-grants" element={<ResearchGrants />} />
          <Route path="/ethics-committee" element={<EthicsCommittee />} />
          <Route path="/research-partnerships" element={<ResearchPartnerships />} />
          <Route path="/research-seminars" element={<ResearchSeminars />} />
          <Route path="/student-clubs" element={<StudentClubs />} />
          <Route path="/staff-login" element={<StaffLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/applicant-login" element={<ApplicantLogin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
