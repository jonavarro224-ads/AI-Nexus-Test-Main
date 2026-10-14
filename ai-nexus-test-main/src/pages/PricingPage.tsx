import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

/**
 * PricingPage — served at /pricing
 *
 * Has a unique H1 and intro paragraph so it is NOT an exact duplicate
 * of the home page pricing section. Its canonical points to itself
 * (set in ROUTE_META['/pricing']).
 *
 * The <Pricing /> component below contains the full pricing cards,
 * but THIS page adds the unique H1 + intro above them.
 */
export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Page-specific H1 + intro — NOT present on the home page section */}
      <section className="pt-32 pb-0 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
              Plans &amp; Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Simple, Transparent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Every plan starts with a professionally engineered website — then a flat monthly fee
              that covers hosting, security, and ongoing support. I work with one setup fee so
              there are no surprises and no lock-in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reuse the exact same Pricing component from the home page */}
      <Pricing />

      <Footer />
    </div>
  );
}
