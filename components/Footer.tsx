'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-10 w-10">
                <Image
                  src="/assets/aistudio/image_cc529de4.png"
                  alt="Clínica Vida Logo"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Clínica Vida
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed mb-8">
              Providing professional healthcare services with a human touch. Dedicated to the well-being of our community.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-green-50 hover:text-green-700 transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><Link href="#services" className="hover:text-green-700 transition-colors">Medical Services</Link></li>
              <li><Link href="#insurance" className="hover:text-green-700 transition-colors">Insurance Plans</Link></li>
              <li><Link href="#about" className="hover:text-green-700 transition-colors">About the Clinic</Link></li>
              <li><Link href="#contact" className="hover:text-green-700 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4 text-slate-500">
              <li><Link href="#" className="hover:text-green-700 transition-colors">Patient Portal</Link></li>
              <li><Link href="#" className="hover:text-green-700 transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-green-700 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-green-700 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter/Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>08:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>09:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-red-500">Closed</span></li>
              <li className="mt-4 pt-4 border-t border-slate-100 font-medium text-slate-900">
                24/7 Emergency Support Available
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Clínica Vida. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
            <Link href="#" className="hover:text-slate-900 transition-colors">English</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Português</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Español</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
