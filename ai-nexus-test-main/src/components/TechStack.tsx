import { motion } from 'framer-motion';

const techItems = [
  '<OpenAI />',
  '<Python />',
  '<TensorFlow />',
  '<Shopify />',
  '<n8n />',
];

export default function TechStack() {
  // Duplicate items for seamless loop
  const duplicatedItems = [...techItems, ...techItems];

  return (
    <section className="h-20 bg-slate-900/50 border-t border-b border-white/5 overflow-hidden">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Label */}
        <span className="text-xs font-mono text-slate-500 tracking-widest whitespace-nowrap mr-6 flex-shrink-0">
          INTEGRATION ARCHITECTURE:
        </span>

        {/* Scrolling marquee */}
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedItems.map((item, index) => (
              <motion.div
                key={index}
                className="font-mono text-sm text-slate-400 hover:text-white transition-colors cursor-default whitespace-nowrap flex-shrink-0 py-2 px-3 rounded bg-slate-800/30 hover:bg-slate-800/60 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          {/* Fade gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-900/50 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-900/50 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
