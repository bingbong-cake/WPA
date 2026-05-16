import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Heart } from 'lucide-react';

const categories = ['All', 'Wedding', 'Birthday', 'Custom', 'Theme Cake',];

const cakes = [
  {
    id: 1,
    src: '/public/images/cake-1.jpeg',
    title: 'Chocolate Berry Dream',
    category: 'Birthday',
    desc: 'Rich chocolate drip cake with fresh berries and ganache,with smooth chocolate bar.',
  },
  {
    id: 2,
    src: '/public/images/cake-2.png',
    title: 'Rainbow Celebration',
    category: 'Birthday',
    desc: 'Colorful layered birthday cake with buttercream frosting.',
  },
  {
    id: 3,
    src: '/public/images/cake-3.png',
    title: 'vanilla cake Romance',
    category: 'Wedding',
    desc: 'Classic vanilla cake with cream cheese frosting and roses.',
  },
  {
    id: 4,
    src: '/public/images/cake-4.png',
    title: 'Bike and rider theme cake',
    category: 'Theme Cake',
    desc: 'A sporty racing-inspired birthday cake featuring bike toppers',
  },
  {
    id: 5,
    src: '/public/images/cake-5.png',
    title: 'Butterfly Dream Celebration Cake',
    category: 'Theme Cake',
    desc: 'A graceful lavender butterfly cake decorated with elegant gold pearls, edible gold flakes, and premium butterfly toppers.',
  },
  {
    id: 6,
    src: '/public/images/cake-6.jpeg',
    title: 'Girls Birthday Cake',
    category: 'Custom',
    desc: 'Luxurious fondant gift box cake with printed Design cake.',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCake, setSelectedCake] = useState<typeof cakes[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = activeCategory === 'All'
    ? cakes
    : cakes.filter((c) => c.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cream to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-script)] text-2xl text-rose-500 mb-2 block">
            Portfolio
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-chocolate mb-4">
            My Sweet <span className="text-rose-500">Creations</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Every cake is a labor of love, designed and crafted to make your special moments unforgettable.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-rose-50 text-gray-600 hover:bg-rose-100 hover:text-rose-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((cake, i) => (
              <motion.div
                key={cake.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedCake(cake)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={cake.src}
                    alt={cake.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-rose-300 text-sm mb-2">
                      <Heart className="w-4 h-4" />
                      {cake.category}
                    </div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)] mb-1">
                      {cake.title}
                    </h3>
                    <p className="text-white/70 text-sm">{cake.desc}</p>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-rose-600">
                    {cake.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCake && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCake(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCake(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
              <div className="grid md:grid-cols-2">
                <img
                  src={selectedCake.src}
                  alt={selectedCake.title}
                  className="w-full h-72 md:h-full object-cover"
                />
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-1 text-rose-500 text-sm font-medium mb-2">
                    <Heart className="w-4 h-4" />
                    {selectedCake.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold text-chocolate mb-3">
                    {selectedCake.title}
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">{selectedCake.desc}</p>
                  <a
                    href="#contact"
                    onClick={() => setSelectedCake(null)}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-full hover:shadow-lg transition-all"
                  >
                    Order Similar Cake
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
