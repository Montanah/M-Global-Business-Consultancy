import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import AgriFlock360 from "./pages/projects/AgriFlock360";
import TrukLogistics from "./pages/projects/TrukLogistics";
import TrukAdmin from "./pages/projects/TrukAdmin";
import ChurchWebsite from "./pages/projects/ChurchWebsite";
import HealthTech from "./pages/projects/HealthTech";
import FinTech from "./pages/projects/FinTech";
import EducationalPlatform from "./pages/projects/EducationalPlatform";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects/agriflock360" element={<AgriFlock360 />} />
          <Route path="/projects/truk-logistics" element={<TrukLogistics />} />
          <Route path="/projects/truk-admin" element={<TrukAdmin />} />
          <Route path="/projects/church-website" element={<ChurchWebsite />} />
          <Route path="/projects/healthtech" element={<HealthTech />} />
          <Route path="/projects/fintech" element={<FinTech />} />
          <Route path="/projects/educational-platform" element={<EducationalPlatform />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;