
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
