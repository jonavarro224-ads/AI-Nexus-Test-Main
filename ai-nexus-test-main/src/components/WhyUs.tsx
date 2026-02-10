import { motion } from 'framer-motion';
import { TrendingUp, Shield, Heart, Zap } from 'lucide-react';

export default function WhyUs() {
  const stats = [
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Efficiency Increase',
      description: 'Average productivity gain within 6 months',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Data Compliance',
      description: 'Full GDPR and SOC 2 compliance guaranteed',
    },
    {
      icon: Heart,
      value: '95%',
      label: 'Team Satisfaction',
      description: 'Employee engagement with AI tools',
    },
    {
      icon: Zap,
      value: '3x',
      label: 'Faster Workflows',
      description: 'Reduction in manual processing time',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            Why Choose AI Direct Support
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Human-Centric AI That Delivers Results
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We audit structures for people, not just profit. Our approach ensures that AI enhances human capability rather than replacing it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mb-6 shadow-lg group-hover:shadow-cyan-500/30 transition-shadow duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-5xl font-display font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {stat.label}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Our Commitment
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We believe AI should amplify human intelligence, not replace it. Every solution we implement is designed with your team's growth and autonomy in mind. Our audits focus on sustainable transformation that respects your company culture while driving measurable results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
