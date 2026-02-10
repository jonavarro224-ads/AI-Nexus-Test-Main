import { motion } from 'framer-motion';

export default function SocialProof() {
  const logos = [
    { name: 'TechCorp', width: 140 },
    { name: 'InnovateCo', width: 160 },
    { name: 'GlobalSystems', width: 150 },
    { name: 'FutureWorks', width: 130 },
    { name: 'DataDrive', width: 140 },
  ];

  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">
            Trusted By Industry Leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div
                className="flex items-center justify-center h-16 px-6 bg-slate-800/30 rounded-lg border border-slate-700/50 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-500/50 group-hover:bg-slate-800/50"
                style={{ width: `${logo.width}px` }}
              >
                <span className="text-gray-400 font-display font-semibold text-lg opacity-30 group-hover:opacity-50 transition-opacity">
                  {logo.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
