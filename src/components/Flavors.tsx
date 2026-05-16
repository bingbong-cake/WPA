import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const flavors = [
  { name: 'Classic Vanilla', emoji: '🍦', color: 'bg-amber-50 border-amber-200', desc: 'Light, fluffy vanilla sponge with real vanilla beans' },
  { name: 'Rich Chocolate', emoji: '🍫', color: 'bg-amber-900/5 border-amber-800/20', desc: 'Decadent dark chocolate cake with ganache' },
  { name: 'Red Velvet', emoji: '❤️', color: 'bg-red-50 border-red-200', desc: 'Velvety red cake with cream cheese frosting' },
  { name: 'Lemon Bliss', emoji: '🍋', color: 'bg-yellow-50 border-yellow-200', desc: 'Zesty lemon cake with lemon curd filling' },
  { name: 'Strawberry Dream', emoji: '🍓', color: 'bg-pink-50 border-pink-200', desc: 'Fresh strawberry cake with strawberry buttercream' },
  { name: 'Caramel Delight', emoji: '🍯', color: 'bg-orange-50 border-orange-200', desc: 'Salted caramel cake with caramel drip' },
  { name: 'Coconut Paradise', emoji: '🥥', color: 'bg-green-50 border-green-200', desc: 'Tropical coconut cake with coconut cream' },
  { name: 'Coffee Mocha', emoji: '☕', color: 'bg-stone-50 border-stone-200', desc: 'Coffee-infused cake with mocha buttercream' },
];

export default function Flavors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-script)] text-2xl text-rose-500 mb-2 block">
            Irresistible
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-chocolate mb-4">
            Popular <span className="text-rose-500">Flavors</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Choose from our signature flavors, or mix and match to create your perfect combination.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {flavors.map((flavor, i) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`${flavor.color} border rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}
            >
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                {flavor.emoji}
              </div>
              <h3 className="font-bold text-chocolate text-sm font-[family-name:var(--font-display)]">
                {flavor.name}
              </h3>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">{flavor.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          🌟 Can't find your favorite flavor? I can customize any flavor combination you desire!
        </motion.p>
      </div>
    </section>
  );
}
