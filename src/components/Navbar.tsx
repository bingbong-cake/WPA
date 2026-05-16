import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cake, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-full transition-all duration-300 ${
              scrolled ? 'bg-rose-50' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Cake className={`w-6 h-6 transition-colors duration-300 ${
                scrolled ? 'text-rose-500' : 'text-white'
              }`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-[family-name:var(--font-script)] text-2xl font-bold leading-tight transition-colors duration-300 ${
                scrolled ? 'text-chocolate' : 'text-white'
              }`}>
                BingBong Cake Shop
              </span>
              <span className={`text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-gold' : 'text-amber-200'
              }`}>
                by Moumusi
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-rose-500/30 hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-chocolate' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-rose-100"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-xl font-medium transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-3 px-4 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-center rounded-xl font-semibold"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
