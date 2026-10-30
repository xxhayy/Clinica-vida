'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-green-700 uppercase">
                Welcome to Clínica Vida
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-wrap-balance">
                Healthcare Inspired by <span className="text-green-700">Human Connection</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto lg:mx-0">
                At Clínica Vida, we believe in more than just treatment. We believe in providing a sanctuary of care where every patient is treated like family. Experience compassionate medical excellence designed for your life.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto rounded-full bg-green-700 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-green-800 hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                  Book Your Visit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-all">
                  Our Specialties
                </button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
                {[
                  'Professional Staff',
                  'Modern Equipment',
                  'Personalized Care',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-700" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 flex-1 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] lg:aspect-[16:9] overflow-hidden rounded-3xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-green-700/20 to-transparent z-10" />
              <Image
                src="https://picsum.photos/seed/clinic-vida/1200/800"
                alt="Modern Clinic Interior"
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
              {/* Floating trust card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl bg-white/90 backdrop-blur-sm p-6 shadow-xl sm:bottom-10 sm:left-10 sm:right-auto sm:max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                        <Image
                          src={`https://picsum.photos/seed/doc-${i}/100/100`}
                          alt={`Doctor ${i}`}
                          width={40}
                          height={40}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Expert Care</p>
                    <p className="text-xs text-slate-500">20+ Specialized Doctors</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
