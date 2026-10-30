'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, Baby, Activity, ShieldCheck, Microscope, Users } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'General Medicine',
    description: 'Comprehensive health assessments and primary care for patients of all ages.',
    icon: HeartPulse,
    color: 'bg-green-50 text-green-700',
  },
  {
    id: '02',
    title: 'Pediatrics',
    description: 'Dedicated care for your little ones, from newborns to adolescents.',
    icon: Baby,
    color: 'bg-blue-50 text-blue-700',
  },
  {
    id: '03',
    title: 'Cardiology',
    description: 'Expert heart care focusing on prevention, diagnosis, and treatment.',
    icon: Activity,
    color: 'bg-red-50 text-red-700',
  },
  {
    id: '04',
    title: 'Family Planning',
    description: 'Compassionate guidance and services for building and managing your family.',
    icon: Users,
    color: 'bg-purple-50 text-purple-700',
  },
  {
    id: '05',
    title: 'Laboratory Services',
    description: 'In-house diagnostic testing for quick and accurate results.',
    icon: Microscope,
    color: 'bg-amber-50 text-amber-700',
  },
  {
    id: '06',
    title: 'Preventive Health',
    description: 'Vaccinations, screenings, and wellness programs to keep you thriving.',
    icon: ShieldCheck,
    color: 'bg-emerald-50 text-emerald-700',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-sm font-bold uppercase tracking-widest text-green-700">Expertise</h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Specialized Medical Services
          </p>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            We provide a wide range of healthcare services tailored to meet the unique needs of our diverse community.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`inline-flex rounded-2xl p-4 ${service.color} mb-6 transition-transform group-hover:scale-110`}>
                <service.icon className="w-8 h-8" />
              </div>
              <span className="absolute top-8 right-8 text-sm font-mono font-bold text-slate-200 group-hover:text-slate-300 transition-colors">
                {service.id}
              </span>
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-green-700">
                Learn More
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
