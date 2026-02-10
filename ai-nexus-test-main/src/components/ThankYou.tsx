import { motion } from 'framer-motion';
import { CheckCircle2, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            <CheckCircle2 className="w-24 h-24 text-emerald-500 mx-auto drop-shadow-lg" />
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white">
              Message Received!
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg mx-auto">
              Thank you for reaching out. We will review your inquiry and get back to you within 24 hours.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            <span>Back to Home</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
