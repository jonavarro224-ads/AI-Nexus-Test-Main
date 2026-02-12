import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ROICalculator() {
  const [hoursSaved, setHoursSaved] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(45);

  // Calculate annual savings
  const annualSavings = hoursSaved * hourlyRate * 52;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="roi" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            See how much revenue you're leaving on the table with manual processes.
          </p>
        </motion.div>

        {/* Calculator Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="glass-panel p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Sliders */}
            <div className="space-y-10">
              {/* Hours Saved Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-semibold text-white">
                    Weekly Manual Hours
                  </label>
                  <motion.span
                    key={hoursSaved}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl font-bold text-cyan-400"
                  >
                    {hoursSaved}h
                  </motion.span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={hoursSaved}
                  onChange={(e) => setHoursSaved(Number(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400 transition-colors"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>0 hours</span>
                  <span>100 hours</span>
                </div>
              </div>

              {/* Hourly Rate Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-semibold text-white">
                    Avg. Staff Hourly Rate
                  </label>
                  <motion.span
                    key={hourlyRate}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl font-bold text-blue-400"
                  >
                    ${hourlyRate}
                  </motion.span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="150"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-colors"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>$15/hr</span>
                  <span>$150/hr</span>
                </div>
              </div>
            </div>

            {/* Right Side - Result */}
            <motion.div
              className="flex flex-col items-center justify-center p-8 bg-slate-800/50 rounded-xl border border-slate-700/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-slate-400 text-sm font-medium mb-4 tracking-wide">
                PROJECTED ANNUAL RECAPTURE
              </p>
              <motion.div
                key={annualSavings}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 text-center"
              >
                ${annualSavings.toLocaleString()}
              </motion.div>
              <p className="text-slate-400 text-sm mt-6 text-center max-w-xs">
                That's {hoursSaved * 52} hours and {(hoursSaved * 52 * hourlyRate / 1000).toFixed(1)}k in recaptured productivity annually.
              </p>
            </motion.div>
          </div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-slate-700/50"
          >
            <p className="text-center text-slate-400 text-sm">
              💡 <span className="text-slate-300">Tip:</span> Adjust the sliders to see how automating different workflows impacts your bottom line. Most clients see 3-5x ROI in Year 1.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
