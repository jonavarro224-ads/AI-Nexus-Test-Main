import { motion } from 'framer-motion';
import { Workflow, Brain, GraduationCap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Workflow,
      title: 'Structural AI Auditing',
      description:
        'We dissect your current organizational structure to identify bottlenecks and high-impact AI opportunities.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Brain,
      title: 'Strategic Implementation',
      description:
        'Bespoke AI roadmaps that integrate seamlessly with your existing tech stack.',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: GraduationCap,
      title: 'Corporate Education',
      description:
        'Workshops and training to upskill your team, ensuring they control the AI, not the other way around.',
      gradient: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            The Three Pillars
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive approach to transforming your business through strategic AI integration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 shadow-lg group-hover:shadow-cyan-500/30 transition-shadow duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 inline-flex items-center text-cyan-400 font-semibold group-hover:gap-2 transition-all duration-300">
                    <span>Learn more</span>
                    <svg
                      className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
