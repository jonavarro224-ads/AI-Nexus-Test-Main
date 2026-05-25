
import Pricing from './components/Pricing';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ServicesGrid from './components/ServicesGrid';
import ROICalculator from './components/ROICalculator';
import Methodology from './components/Methodology';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ThankYou from './components/ThankYou';
import Legal from './components/Legal';
import WhyUs from './components/WhyUs';
import CalendlyPage from './components/CalendlyPage';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Scroll to section if hash is present, otherwise scroll to top
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        try {
          const element = document.querySelector(location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (e) {
          console.error('Invalid scroll selector:', location.hash, e);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
        <Navbar />
        <Hero />
        
        <div id="methodology">
          <TechStack />
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
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

function LegalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Legal />
      <Footer />
    </div>
  );
}

function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ThankYou />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/schedule" element={<CalendlyPage />} />
        <Route path="/buynow" element={<Navigate to="/#pricing" replace />} />
        <Route path="/buy-now" element={<Navigate to="/#pricing" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
