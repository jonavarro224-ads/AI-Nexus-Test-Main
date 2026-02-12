import { motion } from 'framer-motion';
import { Cpu, Zap, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Structural AI Auditing',
    description:
      'Deep-dive into your workflows, systems, and bottlenecks. We reverse-engineer inefficiencies and map out automation pathways that save time, reduce errors, and unlock capacity.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Strategic Implementation',
    description:
      'We don\'t just recommend - we build. From custom AI agents to automated reporting pipelines, we deploy solutions tailored to your business. Fast. Secure. Scalable.',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: GraduationCap,
    title: 'Corporate Education',
    description:
      'Empower your team to work with AI, not fear it. We provide hands-on training so your people can own the tools, adapt them, and innovate beyond what we deliver.',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            How We Operate
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three pillars of transformation. We audit. We implement. We educate. Then we build.
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

                  <button 
                    onClick={scrollToContact}
                    className="mt-6 inline-flex items-center text-cyan-400 font-semibold group-hover:gap-2 transition-all duration-300 hover:text-cyan-300 cursor-pointer"
                  >
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
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}