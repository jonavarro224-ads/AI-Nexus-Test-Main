import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="training" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>

          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-8 shadow-lg shadow-cyan-500/30"
            >
              <CheckCircle2 className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              Is Your Business Ready for AI?
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get our free 15-point AI Readiness Checklist and discover where your organization stands on the AI transformation journey.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap"
                  >
                    <span>Send Me the Checklist</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto p-6 bg-green-500/10 border border-green-500/30 rounded-lg"
              >
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <p className="text-green-400 font-semibold text-lg">
                  Success! Check your email for the checklist.
                </p>
              </motion.div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-cyan-400 mb-2">15</div>
                <p className="text-gray-400 text-sm">Key Assessment Points</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-cyan-400 mb-2">5min</div>
                <p className="text-gray-400 text-sm">Quick Self-Assessment</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-cyan-400 mb-2">100%</div>
                <p className="text-gray-400 text-sm">Free Forever</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
