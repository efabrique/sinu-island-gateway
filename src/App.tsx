
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
