'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Shield, CheckCircle2, UserPlus, Heart } from 'lucide-react';

export default function Insurance() {
  return (
    <section id="insurance" className="py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="flex-1 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://picsum.photos/seed/family-care/1000/800"
                alt="Happy family laughing together"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-green-900/10" />
            </motion.div>
            
            {/* Floating metric */}
            <div className="absolute -bottom-8 -right-8 hidden sm:block">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">5,000+</p>
                  <p className="text-xs text-slate-500">Families Covered</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
                <Shield className="w-4 h-4" />
                Security for Life
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Comprehensive Family Health Plans
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Your family&apos;s health is your greatest treasure. We&apos;ve designed flexible insurance plans that prioritize preventive care and provide full coverage for all life&apos;s stages.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    title: 'Full Family Coverage',
                    desc: 'Inclusive plans for parents, children, and seniors under one umbrella.',
                    icon: UserPlus
                  },
                  {
                    title: 'Priority Appointments',
                    desc: 'Get seen faster with dedicated slots for insurance members.',
                    icon: CheckCircle2
                  },
                  {
                    title: 'Wellness Benefits',
                    desc: 'Free annual screenings and wellness coaching for the whole family.',
                    icon: Heart
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center text-green-700">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button className="rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-slate-800 transition-all">
                  Explore Plan Options
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
