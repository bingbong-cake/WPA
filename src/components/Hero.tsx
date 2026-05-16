import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-cake.jpg"
          alt="Beautiful custom cake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate/80 via-chocolate/60 to-chocolate-light/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 via-transparent to-transparent" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-32 right-20 hidden lg:block"
      >
        <Sparkles className="w-8 h-8 text-amber-300/60" />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-40 left-20 hidden lg:block"
      >
        <Star className="w-6 h-6 text-rose-300/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-amber-200 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Handcrafted with Love
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Where Every
            <br />
            <span className="shimmer-text">Sweet Dream</span>
            <br />
            Comes to Life
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-lg"
          >
            Custom cakes and desserts for every occasion — from intimate celebrations
            to grand weddings. Each creation is a masterpiece baked with passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#gallery"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-full overflow-hidden shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">View My Creations</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Get a Quote
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-8 sm:gap-12 mt-12 pt-8 border-t border-white/15"
          >
            {[
              { value: '1200+', label: 'Cakes Delivered' },
              { value: '7+', label: 'Years Experience' },
              { value: '100%', label: 'Happy Customers' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-display)]">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
