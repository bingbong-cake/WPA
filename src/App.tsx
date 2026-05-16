import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Flavors from './components/Flavors';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Flavors />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
        title="Order Now"
      >
        <span className="text-2xl">💬</span>
        <span className="absolute -top-10 right-0 bg-chocolate text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Order a Cake! 🎂
        </span>
      </a>
    </div>
  );
}
