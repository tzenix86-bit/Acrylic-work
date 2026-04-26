/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Clock, ArrowUp, 
  CheckCircle2, ChevronRight, MessageSquare, 
  Instagram, Facebook, Award, Star, Lightbulb, Box
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      title: "Acrylic Signage",
      description: "High-quality 3D acrylic letters, backlit signs, and professional corporate board setups.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      price: "Starting from PKR 5,000"
    },
    {
      title: "Custom Trophies",
      description: "Precision-cut acrylic awards and trophies for corporate events and sports completions.",
      image: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&q=80&w=800",
      price: "Starting from PKR 1,500"
    },
    {
      title: "Display Stands",
      description: "Retail display stands, brochure holders, and product showcases designed to attract.",
      image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&q=80&w=800",
      price: "Starting from PKR 2,500"
    },
    {
      title: "Laser Cutting",
      description: "High-precision laser cutting and engraving services on acrylic sheets and wood.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e7de?auto=format&fit=crop&q=80&w=800",
      price: "Starting from PKR 500 / hr"
    },
    {
      title: "Home Decor",
      description: "Custom acrylic wall art, mirrors, and unique furniture pieces for modern interiors.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
      price: "Starting from PKR 3,000"
    },
    {
      title: "Fabrication",
      description: "Custom fabrication of acrylic boxes, hoods, and protective shields for industrial use.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      price: "Custom Quote"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1563206767-5b18f218e7de?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
  ];

  const testimonials = [
    {
      name: "Ahmed Khan",
      comment: "Incredible quality signage for my restaurant. The 3D effect is stunning and the lighting is perfect.",
      rating: 5,
      role: "Business Owner"
    },
    {
      name: "Sana Malik",
      comment: "We ordered 50 custom trophies for our corporate gala. They were delivered on time and were the highlight of the event.",
      rating: 5,
      role: "Event Manager"
    },
    {
      name: "Zubair Siddiqui",
      comment: "The laser cutting precision at Acrylic Works is unmatched in Karachi. Highly recommended for any custom work.",
      rating: 5,
      role: "Architect"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 py-4 shadow-md backdrop-blur-md' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Box size={24} />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-blue-900">Acrylic Works</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium transition-colors hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 md:block">
            Get Quote
          </a>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t bg-white md:hidden"
            >
              <div className="flex flex-col space-y-4 p-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a href="#contact" className="w-full rounded-lg bg-blue-600 py-3 text-center font-semibold text-white">
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,#e0f2fe_0%,transparent_50%),radial-gradient(circle_at_70%_70%,#dbeafe_0%,transparent_50%)]" />
        <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-bold tracking-wider text-blue-700 uppercase">
              Karachi's Premium Acrylic Experts
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-blue-950 md:text-7xl">
              Crafting <span className="text-blue-600">Transparency</span>, Shaping Excellence.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-gray-600">
              Innovative acrylic fabrication solutions for businesses and homes. From high-end signage to custom interior pieces, we bring your vision to life with precision.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-200 transition-all hover:bg-blue-700 hover:scale-105">
                Contact Us Now <ChevronRight size={20} />
              </a>
              <a href="#gallery" className="flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-700 transition-all hover:bg-gray-50">
                View Portfolio
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                alt="Acrylic Fabrication" 
                className="w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 z-20 rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10+ Years</p>
                  <p className="text-sm text-gray-500 font-medium">Of Experience</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 z-20 rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-green-100 p-3 text-green-600">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">2.5k+</p>
                  <p className="text-sm text-gray-500 font-medium">Projects Done</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Workshop" 
                className="rounded-3xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl font-bold text-blue-950 md:text-5xl">Who We Are</h2>
              <div className="mt-4 h-1.5 w-20 rounded-full bg-blue-600" />
              <p className="mt-8 text-lg leading-relaxed text-gray-600">
                At Acrylic Works, we specialize in high-quality acrylic fabrication that combines artistic design with technical precision. Based in Karachi, we have been serving clients across Pakistan for over a decade.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: <Lightbulb />, title: "Custom Design", desc: "Your ideas, our engineering." },
                  { icon: <CheckCircle2 />, title: "Quality Guarantee", desc: "Premium materials only." },
                  { icon: <Clock />, title: "On-time Delivery", desc: "We value your schedule." },
                  { icon: <Phone />, title: "24/7 Support", desc: "Always here to help." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold text-blue-950 md:text-5xl">Our Excellence</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Discover our wide range of professional acrylic services tailored for both corporate and personal needs.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white uppercase">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  <button className="mt-6 flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700">
                    Learn More <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-gray-950 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="font-display text-4xl font-bold md:text-5xl">Work Showcase</h2>
              <p className="mt-4 text-gray-400">A glimpse into our recent precision projects.</p>
            </div>
            <button className="rounded-full bg-white px-8 py-3 font-bold text-gray-950 transition-all hover:bg-gray-200">
              View All Work
            </button>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative cursor-pointer overflow-hidden rounded-xl border border-white/10"
              >
                <img src={img} alt="Gallery Work" className="aspect-square w-full object-cover grayscale transition-all duration-500 hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold text-blue-950 md:text-5xl">Client Satisfaction</h2>
            <p className="mt-4 text-gray-600">Hear from our clients about their experience with us.</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-md">
                <div className="flex gap-1 text-orange-400">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="mt-6 text-lg italic text-gray-700">"{t.comment}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-bold text-blue-950 md:text-5xl">Get in Touch</h2>
              <p className="mt-4 text-gray-600">Have a project in mind? Contact us for a free consultation and quote.</p>
              
              <div className="mt-12 space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <p className="text-gray-600">000000000000</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <p className="text-gray-600">contact@acrylicworks.com.pk</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Address</h4>
                    <p className="text-gray-600">Plot 123, Street 45, Korangi Industrial Area, Karachi</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input type="text" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-blue-600 focus:bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input type="email" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-blue-600 focus:bg-white" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-700">Subject</label>
                  <input type="text" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-blue-600 focus:bg-white" placeholder="Custom Acrylic Shield" />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-700">Message</label>
                  <textarea rows={4} className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-blue-600 focus:bg-white" placeholder="Describe your project details..."></textarea>
                </div>
                <button type="submit" className="w-full rounded-xl bg-blue-600 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-20 overflow-hidden rounded-3xl shadow-xl">
            {/* Embedded maps placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115814.47192801452!2d67.0116!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cfc25249915dcc5!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714000000000!5m2!1sen!2s" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Box size={24} />
                </div>
                <span className="font-display text-xl font-bold text-blue-900">Acrylic Works</span>
              </div>
              <p className="mt-6 text-gray-500 leading-relaxed">
                Leading providers of bespoke acrylic fabrication in Karachi. Dedicated to quality, innovation, and client satisfaction since 2014.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-blue-600 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-pink-600 hover:text-white">
                  <Instagram size={20} />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-green-600 hover:text-white">
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900">Quick Links</h4>
              <ul className="mt-6 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-500 transition-colors hover:text-blue-600">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900">Our Services</h4>
              <ul className="mt-6 space-y-4">
                {services.map((s) => (
                  <li key={s.title}>
                    <a href="#services" className="text-gray-500 transition-colors hover:text-blue-600">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900">Newsletter</h4>
              <p className="mt-6 text-sm text-gray-500">Subscribe for project updates and acrylic innovations.</p>
              <div className="mt-6 flex flex-col gap-2">
                <input type="email" placeholder="Your Email" className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:bg-white" />
                <button className="rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700">Subscribe</button>
              </div>
            </div>
          </div>
          
          <div className="mt-20 border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Acrylic Works (Pvt) Ltd. All Rights Reserved. Crafted in Karachi.</p>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-gray-800"
          >
            <ArrowUp size={24} />
          </button>
        )}
        <a 
          href="https://wa.me/000000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-green-600"
        >
          <MessageSquare size={24} fill="currentColor" />
        </a>
      </div>
    </div>
  );
}
