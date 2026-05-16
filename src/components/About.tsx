import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Award, Clock, Leaf } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Made with Love',
    desc: 'Every cake is crafted with personal attention and genuine passion for baking.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    desc: 'Only the finest ingredients — real butter, fresh cream, and premium chocolate.',
  },
  {
    icon: Clock,
    title: 'Always Fresh',
    desc: 'Baked to order so every bite is as fresh and delicious as possible.',
  },
  {
    icon: Leaf,
    title: 'Natural Flavors',
    desc: 'No artificial preservatives or flavors. Pure, natural goodness in every cake.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/public/images/baker-portrait.jpg"
                alt="Mousumi - Cake Artist"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-rose-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-chocolate font-[family-name:var(--font-display)]">7+</div>
                  <div className="text-sm text-gray-500">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-[family-name:var(--font-script)] text-2xl text-rose-500 mb-2 block">
              My Story
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-chocolate mb-6 leading-tight">
              From Kitchen Dreams<br />
              to <span className="text-rose-500">Sweet Reality</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi, I'm <strong className="text-chocolate">Mousumi</strong>! What started as baking cakes for my
                family quickly turned into a passion that I couldn't ignore. Seven years ago, I
                decided to turn my kitchen into a creative studio and share my love for baking
                with the world.
              </p>
              <p>
                As a homemaker and self-taught cake artist, I pour my heart into every creation.
                From elegant wedding cakes to whimsical birthday treats, each cake tells a unique
                story. I believe that a cake should not only look stunning but taste absolutely
                divine.
              </p>
              <p>
                Today, I specialize in custom cakes for all occasions — weddings, birthdays,
                baby showers, anniversaries, and corporate events. Every order receives my
                personal attention, ensuring your special moment is made even sweeter.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 hover:scale-105"
              >
                <Heart className="w-4 h-4" />
                Let's Create Together
              </a>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-rose-50 hover:shadow-xl hover:border-rose-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-rose-50 to-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-lg font-bold text-chocolate mb-2 font-[family-name:var(--font-display)]">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
