import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Glow Effect behind text */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            System Status: Operational
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Website is Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Digital Supply Chain.
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
            We don't just build websites. We engineer high-velocity digital assets and provide 24/7 maintenance for businesses that cannot afford downtime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all group">
              Get Developer Analysis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg font-medium backdrop-blur-sm transition-all">
              View Maintenance Plans
            </button>
          </div>
        </motion.div>

        {/* Right Column: The Visual (CSS Only - No Images needed) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <div className="glass-panel p-8 rounded-2xl relative z-10">
            {/* Fake Code Header */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-auto text-xs font-mono text-slate-500">server_health.log</div>
            </div>

            {/* Metrics */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Zap className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Load Velocity</div>
                    <div className="text-white font-mono">0.45s</div>
                  </div>
                </div>
                <div className="h-1 w-24 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-green-500" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Security Shield</div>
                    <div className="text-white font-mono">Active</div>
                  </div>
                </div>
                <div className="text-xs text-green-400 font-mono">100% SECURE</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Activity className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Uptime</div>
                    <div className="text-white font-mono">99.99%</div>
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-mono">LAST 30 DAYS</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}