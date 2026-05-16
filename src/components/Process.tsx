import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Palette, ChefHat, Truck } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consultation',
    desc: 'Tell me about your event, preferences, and dream cake. We discuss flavors, size, design, and budget.',
    color: 'from-rose-400 to-rose-600',
  },
  {
    icon: Palette,
    step: '02',
    title: 'Design & Customize',
    desc: "I'll create a custom design based on your vision. You'll approve the final design before I start baking.",
    color: 'from-amber-400 to-amber-600',
  },
  {
    icon: ChefHat,
    step: '03',
    title: 'Bake & Decorate',
    desc: 'Your cake is freshly baked and meticulously decorated with the finest ingredients and loving care.',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Deliver & Enjoy',
    desc: 'Your perfect cake is safely delivered right to your door, ready to make your celebration unforgettable!',
    color: 'from-sky-400 to-sky-600',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-script)] text-2xl text-rose-500 mb-2 block">
            Simple & Easy
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-chocolate mb-4">
            How It <span className="text-rose-500">Works</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Ordering your dream cake is as easy as 1-2-3-4! Here's my simple process from concept to celebration.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-rose-200 via-amber-200 to-sky-200" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center relative"
            >
              {/* Icon */}
              <div className="relative inline-flex mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl rotate-3 flex items-center justify-center shadow-lg relative z-10 group-hover:rotate-6 transition-transform`}>
                  <step.icon className="w-9 h-9 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-rose-200 rounded-full flex items-center justify-center text-xs font-bold text-rose-500 z-20">
                  {step.step}
                </div>
              </div>

              <h3 className="text-xl font-bold text-chocolate mb-2 font-[family-name:var(--font-display)]">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-rose-500/30 hover:scale-105 transition-all duration-300"
          >
            Start Your Order Today 🎂
          </a>
        </motion.div>
      </div>
    </section>
  );
}
