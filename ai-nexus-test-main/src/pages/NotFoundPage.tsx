import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Home } from 'lucide-react';

/**
 * NotFoundPage — rendered as dist/404.html by prerender.mjs
 * Marked noindex,nofollow in ROUTE_META.
 */
export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center space-y-8 max-w-lg"
      >
        <div className="flex justify-center">
          <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
            <Brain className="w-16 h-16 text-cyan-400" />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Error 404</p>
          <h1 className="text-5xl font-bold text-white">Page Not Found</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The page you're looking for doesn't exist or has moved. Let's get you back on track.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
