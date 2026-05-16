import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const cakeTypes = [
  'Wedding Cake',
  'Birthday Cake',
  'Cupcakes',
  'Baby Shower Cake',
  'Anniversary Cake',
  'Corporate Event',
  'Custom Design',
  'Other',
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  cakeType: "",
  eventDate: "",
  servings: "",
  budget: "",
  message: "",
});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "917439359661";

    const text = `
🎂 New Cake Order Inquiry

 Name: ${formData.name}
 Phone: ${formData.phone}
 Email: ${formData.email}

 Cake Type: ${formData.cakeType}
 Event Date: ${formData.eventDate}
 Servings: ${formData.servings}
 Budget: ${formData.budget}

 Message:
${formData.message}
  `;

    const encodedText = encodeURIComponent(text);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedText}`,
      "_blank"
    );

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      <div className="absolute top-10 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-script)] text-2xl text-rose-500 mb-2 block">
            Let's Connect
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-chocolate mb-4">
            Order Your <span className="text-rose-500">Dream Cake</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Ready to make your celebration extra special? Fill out the form below and I'll get back to you within 24 hours!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-chocolate to-chocolate-light rounded-2xl p-8 text-white">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-6">
                Get in Touch
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-rose-300" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-0.5">Phone / WhatsApp</div>
                    <div className="font-medium">+91 7439359661</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-rose-300" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-0.5">Email</div>
                    <div className="font-medium">moutusi.m.mondal@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-rose-300" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-0.5">Location</div>
                    <div className="font-medium">18/3 Kalikapur, Mahabir Tower</div>
                    <div className="text-sm text-white/60">Home Studio (by appointment)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-rose-300" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-0.5">Working Hours</div>
                    <div className="font-medium">Mon - Sun: 8AM - 10PM</div>
                    <div className="text-sm text-white/60">Sunday: By Appointment</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-sm text-white/60 mb-3">Follow me on</div>
                <div className="flex gap-3">
                  {['📘 Facebook'].map((label) => (
                    <a
                      key={label}
                      href="https://www.facebook.com/share/1e4s9vft2X/"
                      className="px-3 py-2 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors text-sm"
                      title={label}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Note */}
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
              <h4 className="font-semibold text-chocolate mb-2">📋 Order Guidelines</h4>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li>• Please order at least <strong>2 days in advance</strong></li>
                <li>• Wedding cakes: <strong>2 days</strong></li>
                <li>• 50% deposit required to confirm order</li>
                <li>• Free delivery within 3KM </li>
                <li>• Allergen info available on request</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-12 shadow-lg border border-rose-100 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-4xl">🎉</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold text-chocolate mb-3">
                  Thank You!
                </h3>
                <p className="text-gray-500 max-w-md mb-6">
                  Your order inquiry has been received! I'll review your details and get back to you within 24 hours with a custom quote.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-rose-50 text-rose-600 font-medium rounded-full hover:bg-rose-100 transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Moutusi Mondal"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="7469359661"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-cream/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Cake Type *
                    </label>
                    <select
                      required
                      value={formData.cakeType}
                      onChange={(e) =>
                        setFormData({ ...formData, cakeType: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all text-gray-700"
                    >
                      <option value="">Select a type</option>

                      {cakeTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) =>
                        setFormData({ ...formData, eventDate: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all text-gray-700"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Number of Servings
                    </label>
                    <input
                      type="number"
                      placeholder="e.g., 50"
                      min="1"
                      value={formData.servings}
                      onChange={(e) =>
                        setFormData({ ...formData, servings: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all text-gray-700"
                    >
                      <option value="">Select budget</option>
                      <option value="399-599">₹399 - ₹599</option>
                      <option value="599-799">₹599 - ₹799</option>
                      <option value="799-999">₹799 - ₹999</option>
                      <option value="999+">₹999+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell me about your dream cake 🎂
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your ideal cake — theme, colors, flavors, special requests..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-cream/50 border border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all resize-none placeholder:text-gray-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-rose-500/30 hover:scale-[1.02] transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  Send Order Inquiry
                </button>

                <p className="text-center text-xs text-gray-400 mt-3">
                  I'll respond within 24 hours with a custom quote for your order.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
