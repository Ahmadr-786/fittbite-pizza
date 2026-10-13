"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { name: "Margherita Classic", desc: "Fresh mozzarella, basil, tomato sauce", price: "Rs. 899", tag: "Bestseller", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80" },
    { name: "FittBite Special", desc: "Grilled chicken, olives, bell peppers, extra cheese", price: "Rs. 1,299", tag: "Chef's Pick", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80" },
    { name: "BBQ Chicken Pizza", desc: "Smoky BBQ sauce, tender chicken, red onions", price: "Rs. 1,199", tag: "", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800&q=80" },
    { name: "Veggie Supreme", desc: "Mushrooms, capsicum, corn, tomatoes, olives", price: "Rs. 999", tag: "Veg", image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=800&q=80" },
    { name: "Pepperoni Feast", desc: "Loaded pepperoni, mozzarella, oregano", price: "Rs. 1,349", tag: "Hot", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80" },
    { name: "Four Cheese", desc: "Mozzarella, cheddar, parmesan, feta blend", price: "Rs. 1,249", tag: "", image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80" },
  ];

  const features = [
    { icon: "🔥", title: "Wood-Fired Oven", desc: "Authentic taste baked at 400°C for that perfect crisp" },
    { icon: "🌿", title: "Fresh Ingredients", desc: "Locally sourced veggies and premium quality cheese daily" },
    { icon: "⚡", title: "Fast Delivery", desc: "Hot pizza at your doorstep within 30 minutes" },
    { icon: "💚", title: "Healthy Options", desc: "Whole wheat bases and low-calorie toppings available" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-lg py-3 shadow-lg shadow-orange-500/10" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-3xl group-hover:rotate-12 transition-transform duration-300">🍕</span>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">FittBite Pizza</h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative text-sm font-medium text-zinc-300 hover:text-orange-400 transition-colors duration-300 group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
              Order Now
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl focus:outline-none">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-4 flex flex-col gap-4">
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-zinc-300 hover:text-orange-400 transition-colors">
                {item}
              </a>
            ))}
            <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm font-semibold">Order Now</button>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium">
              🔥 Freshly Baked Daily
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Taste the{" "}
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">Perfect</span>
              <br /> Slice of Happiness
            </h1>
            <p className="text-zinc-400 text-lg max-w-md">
              Handcrafted pizzas made with love, fresh ingredients, and a whole lot of cheese. Delivered hot to your door.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-semibold hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2">
                Explore Menu
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="px-8 py-4 border border-zinc-700 rounded-full font-semibold hover:border-orange-500 hover:text-orange-400 transition-all duration-300">
                Book a Table
              </button>
            </div>

            <div className="flex gap-8 pt-6">
              {[
                { num: "50+", label: "Pizza Varieties" },
                { num: "10K+", label: "Happy Customers" },
                { num: "30min", label: "Fast Delivery" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-orange-400">{stat.num}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full animate-[float_4s_ease-in-out_infinite]">
                <Image
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                  alt="Delicious Pizza"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain rounded-full drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-orange-500 rounded-full"></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Us?</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">We don&apos;t just make pizza. We craft experiences.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-500 hover:-translate-y-2">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-4">Our Menu</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Signature{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Pizzas</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Every slice tells a story. Pick your favorite.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, i) => (
              <div key={i} className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden">
                {item.tag && (
                  <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-xs font-semibold rounded-full">{item.tag}</span>
                )}

                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{item.name}</h3>
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-400">{item.price}</span>
                    <button className="px-4 py-2 bg-zinc-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 rounded-full text-sm font-semibold transition-all duration-300">Add +</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 p-12 md:p-16 text-center">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-9xl">🍕</div>
            <div className="absolute bottom-10 right-10 text-9xl">🍕</div>
          </div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Hungry Already?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Order now and get <strong>20% OFF</strong> on your first order. Fresh, hot, and delivered in 30 minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300">Order Online</button>
              <button className="px-8 py-4 border-2 border-white rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">📞 Call: 0300-1234567</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🍕</span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">FittBite Pizza</h3>
              </div>
              <p className="text-zinc-400 text-sm">Serving happiness, one slice at a time. Since 2020.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                {["Home", "Menu", "About", "Contact"].map((l) => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-orange-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>📍 Main Boulevard, Lahore</li>
                <li>📞 0300-1234567</li>
                <li>✉️ hello@fittbite.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex gap-3">
                {["📘", "📷", "🐦", "📺"].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:border-transparent transition-all duration-300 hover:scale-110">{icon}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
            © 2026 FittBite Pizza. Designed by Ahmix. Made with ❤️
          </div>
        </div>
      </footer>
    </div>
  );
}