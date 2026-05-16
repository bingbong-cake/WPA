import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Anupama Biswas',
    role: 'Bride',
    text: 'Mousumi created the most stunning wedding cake for our big day! Not only was it a showstopper visually, but every guest raved about how delicious it was. She truly exceeded our expectations.',
    rating: 5,
    avatar: '👰',
  },
  {
    name: 'Ashutosh Das',
    role: 'Father of Birthday Girl',
    text: "My daughter's Barbie-themed birthday cake was absolutely magical! Mousumi captured every detail perfectly. The look on my daughter's face when she saw it was priceless. Thank you, Mousumi!",
    rating: 5,
    avatar: '👨‍👧',
  },
  {
    name: 'Priya Sharma',
    role: 'Corporate Event Manager',
    text: "We've been ordering from Bingbong for all our corporate events for 2 years now. Her professionalism, creativity, and consistency are unmatched. The cupcake towers are always a hit!",
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Arundhuti Banerjee',
    role: 'New Mom',
    text: "The baby shower cake Mousumi made for us was beyond adorable! It matched our theme perfectly, and the red velvet flavor was heavenly. Everyone asked for her contact info!",
    rating: 5,
    avatar: '🤱',
  },
  {
    name: 'Arjun Halder',
    role: '25th Anniversary',
    text: "For our silver anniversary, Mousumi created a breathtaking three-tier cake with hand-painted details. It was almost too beautiful to eat! Almost. The taste was extraordinary.",
    rating: 5,
    avatar: '💑',
  },
  {
    name: 'Ahana',
    role: 'Regular Customer',
    text: "I've ordered from Bingbong Cake dozens of times and she never disappoints. Whether it's a simple birthday cake or an elaborate custom design, the quality and taste are always top-notch.",
    rating: 5,
    avatar: '😊',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : typeof window !== 'undefined' && window.innerWidth >= 640 ? 2 : 1;

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < Math.min(visibleCount, testimonials.length); i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 to-white" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-script)] text-2xl text-rose-500 mb-2 block">
            Happy Customers
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-chocolate mb-4">
            What People <span className="text-rose-500">Say</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Don't just take my word for it — here's what my wonderful customers have to say about their sweet experiences.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((t, i) => (
              <motion.div
                key={`${currentIndex}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-rose-100" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">"{t.text}"</p>

                <div className="flex items-center gap-3 pt-4 border-t border-rose-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center text-2xl">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-chocolate">{t.name}</div>
                    <div className="text-sm text-gray-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white border border-rose-200 rounded-full flex items-center justify-center hover:bg-rose-50 hover:border-rose-300 transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-rose-500" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'bg-rose-500 w-8'
                      : 'bg-rose-200 hover:bg-rose-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 bg-white border border-rose-200 rounded-full flex items-center justify-center hover:bg-rose-50 hover:border-rose-300 transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-rose-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
