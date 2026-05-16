import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cake, Gift, Heart, PartyPopper, Baby, Building2, Check } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Wedding Cakes',
    price: 'From ₹599/- only',
    desc: 'Stunning multi-tier wedding cakes designed to be the centerpiece of your special day.',
    features: ['Custom design consultation', 'Cake tasting session', 'Delivery & setup included', 'Multiple tier options'],
    color: 'from-rose-400 to-rose-600',
    shadow: 'shadow-rose-500/20',
  },
  {
    icon: PartyPopper,
    title: 'Birthday Cakes',
    price: 'From ₹399/-only',
    desc: 'Fun, creative birthday cakes for all ages. From themed cakes to elegant celebrations.',
    features: ['Custom themes & characters', 'Age-appropriate designs', 'Various sizes available', 'Photo cakes available'],
    color: 'from-amber-400 to-amber-600',
    shadow: 'shadow-amber-500/20',
    popular: true,
  },
  {
    icon: Cake,
    title: 'Cupcakes & Mini Treats',
    price: 'From ₹9/pc only',
    desc: 'Perfect for parties and events. Beautifully decorated cupcakes in various flavors.',
    features: ['Minimum order 12 pieces', 'Mix & match flavors', 'Custom decorations', 'Gift packaging available'],
    color: 'from-purple-400 to-purple-600',
    shadow: 'shadow-purple-500/20',
  },
  {
    icon: Baby,
    title: 'Baby Shower Cakes',
    price: 'From ₹599/- only',
    desc: 'Sweet and adorable cakes to celebrate the arrival of your little one.',
    features: ['Gender reveal options', 'Pastel color themes', 'Matching cupcakes', 'Fondant decorations'],
    color: 'from-sky-400 to-sky-600',
    shadow: 'shadow-sky-500/20',
  },
  {
    icon: Gift,
    title: 'Custom & Themed',
    price: 'From ₹699/- only',
    desc: 'Unique custom cakes for any occasion — anniversaries, graduations, and more.',
    features: ['3D sculpted cakes', 'Edible photo printing', 'Fondant art & figures', 'Any theme possible'],
    color: 'from-emerald-400 to-emerald-600',
    shadow: 'shadow-emerald-500/20',
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    price: 'Custom Quote',
    desc: 'Professional dessert services for corporate events, launches, and office celebrations.',
    features: ['Bulk order discounts', 'Logo & branding cakes', 'Dessert table setup', 'Regular supply contracts'],
    color: 'from-slate-400 to-slate-600',
    shadow: 'shadow-slate-500/20',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-rose-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-script)] text-2xl text-rose-500 mb-2 block">
            What I Offer
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-chocolate mb-4">
            Services & <span className="text-rose-500">Pricing</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From intimate gatherings to grand celebrations, I have the perfect sweet creation for every occasion.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group bg-white rounded-2xl p-7 border border-rose-50 hover:border-rose-200 hover:shadow-xl ${service.shadow} transition-all duration-500 hover:-translate-y-2`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 px-4 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-xl font-bold text-chocolate font-[family-name:var(--font-display)]">
                  {service.title}
                </h3>
              </div>

              <div className="text-2xl font-bold text-rose-500 mb-3 font-[family-name:var(--font-display)]">
                {service.price}
              </div>

              <p className="text-gray-500 text-sm mb-5 leading-relaxed">{service.desc}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white hover:shadow-lg hover:shadow-rose-500/30'
                    : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                }`}
              >
                Order Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
