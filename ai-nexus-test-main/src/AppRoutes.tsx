/**
 * src/AppRoutes.tsx
 *
 * Shared route tree used by:
 *   - src/App.tsx (BrowserRouter client entry)
 *   - src/entry-server.tsx (StaticRouter SSR entry)
 *
 * PageMeta and ScrollManager are client-only concerns and live in App.tsx,
 * NOT here, because they touch document/window and must not run on the server.
 *
 * SSR safety: no top-level window/document/localStorage access anywhere in
 * this file or imports evaluated at module time.
 */
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import SEOAnalyzer from './components/SEOAnalyzer';
import ServicesGrid from './components/ServicesGrid';
import ROICalculator from './components/ROICalculator';
import Methodology from './components/Methodology';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import Legal from './components/Legal';
import CalendlyPage from './components/CalendlyPage';
import Pricing from './components/Pricing';
import WhyUs from './components/WhyUs';
import PricingPage from './pages/PricingPage';
import NotFoundPage from './pages/NotFoundPage';

// ── Home page ─────────────────────────────────────────────────────────────────
function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      <Navbar />
      <Hero />

      <div id="methodology">
        <TechStack />
      </div>

      <div id="audit">
        <SEOAnalyzer />
      </div>

      <div id="audit-types">
        <ServicesGrid />
      </div>

      <Pricing />

      <div id="roi-machine" className="scroll-mt-20">
        <ROICalculator />
      </div>

      <Methodology />

      <div id="about">
        <WhyUs />
      </div>

      <div id="contact">
        <FooterCTA />
      </div>

      <Footer />
    </main>
  );
}

// ── Legal page ────────────────────────────────────────────────────────────────
function LegalPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Legal />
      <Footer />
    </div>
  );
}

// ── Route tree ────────────────────────────────────────────────────────────────
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/legal" element={<LegalPage />} />
      <Route path="/schedule" element={<CalendlyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
