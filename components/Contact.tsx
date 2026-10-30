'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setFormState(prev => ({ ...prev, submitted: true }));
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '', submitted: false });
    }, 3000);
  };

  return (
    <section id="contact" className="bg-slate-900 py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="flex-1 text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Reach Out to Us</h2>
            <p className="mt-6 text-lg text-slate-400">
              Have questions or ready to book? Our friendly team is here to help you navigate your healthcare journey.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-green-500 border border-white/10">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">Call Us</p>
                  <p className="text-lg font-semibold">+1 (555) 000-LIFE</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-green-500 border border-white/10">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">Email Us</p>
                  <p className="text-lg font-semibold">care@clinicavida.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-green-500 border border-white/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">Visit Us</p>
                  <p className="text-lg font-semibold">123 Health Ave, Wellness City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 lg:p-10 shadow-2xl"
            >
              {formState.submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="mt-4 text-slate-600">
                    Thank you for reaching out. A member of our care team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                      value={formState.name}
                      onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                      value={formState.email}
                      onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">How can we help?</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Describe your health needs..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all resize-none"
                      value={formState.message}
                      onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-green-700 py-4 text-base font-bold text-white shadow-lg hover:bg-green-800 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
