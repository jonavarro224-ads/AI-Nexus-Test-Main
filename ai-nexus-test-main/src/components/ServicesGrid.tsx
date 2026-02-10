import { motion } from 'framer-motion';
import { Code, Smartphone, Search, Wrench } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Code,
    title: 'Custom Web Development',
    description: 'High-performance websites engineered for speed, security, and scalability.',
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Responsive experiences that look flawless on any device, any screen size.',
  },
  {
    id: 3,
    icon: Search,
    title: 'SEO Optimization',
    description: 'Rank higher. Get found. Convert visitors into customers with data-driven SEO.',
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ServicesGrid() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
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
            What We Build
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From concept to deployment, we deliver digital solutions that drive results. Not theory. We build.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass-panel p-8 h-full flex flex-col transition-all duration-300 border border-white/10 group-hover:border-blue-500/50">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <button 
                    onClick={scrollToContact}
                    className="mt-6 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-blue-300 cursor-pointer"
                  >
                    <span className="text-sm font-semibold">Learn more</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
