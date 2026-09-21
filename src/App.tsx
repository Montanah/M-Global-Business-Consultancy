import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Seo from "./components/Seo";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const AgriFlock360 = lazy(() => import("./pages/projects/AgriFlock360"));
const AgriFlock360Admin = lazy(
  () => import("./pages/projects/AgriFlock360Admin"),
);
const SmartDrop = lazy(() => import("./pages/projects/SmartDrop"));
const TrukLogistics = lazy(() => import("./pages/projects/TrukLogistics"));
const TrukAdmin = lazy(() => import("./pages/projects/TrukAdmin"));
const ChurchWebsite = lazy(() => import("./pages/projects/ChurchWebsite"));
const HealthTech = lazy(() => import("./pages/projects/HealthTech"));
const FinTech = lazy(() => import("./pages/projects/FinTech"));
const EducationalPlatform = lazy(
  () => import("./pages/projects/EducationalPlatform"),
);
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
    <MotionConfig reducedMotion="user">
      <Seo />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <ScrollToTop />
      <Suspense
        fallback={
          <main id="main-content" className="page-loading" role="status">
            Loading your next chapter…
          </main>
        }
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects/smartdrop" element={<SmartDrop />} />
          <Route
            path="/projects/agriflock360-admin"
            element={<AgriFlock360Admin />}
          />
          <Route path="/projects/agriflock360" element={<AgriFlock360 />} />
          <Route path="/projects/truk-logistics" element={<TrukLogistics />} />
          <Route path="/projects/truk-admin" element={<TrukAdmin />} />
          <Route path="/projects/church-website" element={<ChurchWebsite />} />
          <Route path="/projects/healthtech" element={<HealthTech />} />
          <Route path="/projects/fintech" element={<FinTech />} />
          <Route
            path="/projects/educational-platform"
            element={<EducationalPlatform />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </MotionConfig>
);

export default App;
