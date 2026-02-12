import { motion } from 'framer-motion';
import { Package, TrendingUp, AlertCircle } from 'lucide-react';

export default function Methodology() {
  const principles = [
    {
      icon: Package,
      title: 'Data as Inventory',
      description:
        'We treat data like physical inventory. If it\'s not moving, it\'s a liability. Every data point has a lifecycle—acquisition, processing, utility, and eventual archive or disposal.',
    },
    {
      icon: TrendingUp,
      title: 'Supply Chain Logic',
      description:
        'Apply logistics to your information architecture. Optimize flow, eliminate bottlenecks, reduce waste. When data moves efficiently, revenue follows.',
    },
    {
      icon: AlertCircle,
      title: 'Velocity Over Volume',
      description:
        'A smaller dataset moving fast beats a massive warehouse sitting still. We focus on actionable data, not data hoarding.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Operational Philosophy
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We treat data like physical inventory. If it's not moving, it's a liability.
            <br />
            We apply supply chain logistics to your information architecture.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-panel p-8 group hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="mb-6 p-4 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-all">
                  <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {principle.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
