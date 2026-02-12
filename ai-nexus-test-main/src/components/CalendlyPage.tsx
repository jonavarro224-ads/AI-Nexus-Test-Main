import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function CalendlyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  const features = [
    {
      icon: Calendar,
      text: 'Choose your preferred time slot',
    },
    {
      icon: Clock,
      text: '30-minute strategy session',
    },
    {
      icon: CheckCircle2,
      text: 'Instant confirmation & calendar invite',
    },
  ];

  const navigateToRoiMachine = () => {
    navigate('/');

    // Wait for home route to render before scrolling to ROI section
    setTimeout(() => {
      const element = document.getElementById('roi-machine') || document.getElementById('roi');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity group"
            >
              <ArrowLeft className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm font-medium text-slate-300">Back to Home</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className="px-4 py-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Home
              </Link>
              <button
                type="button"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                onClick={navigateToRoiMachine}
              >
                ROI Calculator
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
                Schedule Your Strategy Session
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Let's discuss how we can transform your digital infrastructure. 
                Book a time that works for you.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm"
                    >
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-slate-300">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Calendly Widget Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative max-w-5xl mx-auto"
            >
              {/* Glass Panel Wrapper */}
              <div className="glass-panel p-4 sm:p-8">
                {/* Calendly Inline Widget */}
                <div
                  className="calendly-inline-widget rounded-xl overflow-hidden"
                  data-url="https://calendly.com/jonavarro224/30min"
                  style={{
                    minWidth: '320px',
                    height: '700px',
                  }}
                />
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 text-center"
              >
                <p className="text-slate-400 text-sm">
                  📧 Questions? Email us at{' '}
                  <a
                    href="mailto:support@aidirectsupport.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    support@aidirectsupport.com
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Don't let manual processes hold you back. Schedule your strategy session and let's build systems that scale while you sleep.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Back to Home</span>
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={navigateToRoiMachine}
                  className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-300"
                >
                  Calculate Your ROI
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}