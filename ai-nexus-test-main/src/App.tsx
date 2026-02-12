import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

  // Scroll to section if hash is present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

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
      </Routes>
    </Router>
  );
}

export default App;
