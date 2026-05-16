import { Cake, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-chocolate text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-rose-400 via-amber-400 to-rose-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 py-16">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-white/10 rounded-full">
                <Cake className="w-6 h-6 text-rose-400" />
              </div>
              <div>
                <span className="font-[family-name:var(--font-script)] text-2xl font-bold text-white">
                  Sweet Creations
                </span>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-gold-light">
                  by Moumusi
                </span>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Handcrafted cakes & desserts made with love for every special moment.
              From our kitchen to your celebration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg font-bold mb-4 text-gold-light">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Me', href: '#about' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Services', href: '#services' },
                { name: 'Reviews', href: '#testimonials' },
                { name: 'Order Now', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-rose-400 text-sm py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg font-bold mb-4 text-gold-light">
              Stay Sweet 🍰
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Follow us on social media for daily cake inspiration and special offers!
            </p>
            <div className="flex gap-3 mb-4">
              {['📸', '📘', '💬', '🎵'].map((emoji, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-lg"
                >
                  {emoji}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-all"
            >
              Place an Order
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm flex items-center gap-1">
            © 2027 Sweet Creations by BingBonG Cakes. Made with
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
            and lots of flour.
          </p>

          {/* Back to top */}
          <a
            href="#home"
            className="flex items-center gap-2 text-white/40 hover:text-rose-400 text-sm transition-colors"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
