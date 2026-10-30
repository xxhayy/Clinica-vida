'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between gap-8 px-6">
        {/* Zone 1: Brand wordmark */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative h-12 w-12">
            <Image
              src="/assets/aistudio/image_cc529de4.png"
              alt="Clínica Vida Logo"
              fill
              className="object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="hidden text-xl font-bold tracking-tight text-slate-900 md:block whitespace-nowrap">
            Clínica Vida
          </span>
        </Link>

        {/* Zone 2: Nav links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="#services" className="hover:text-green-700 transition-colors whitespace-nowrap">
            Services
          </Link>
          <Link href="#insurance" className="hover:text-green-700 transition-colors whitespace-nowrap">
            Insurance
          </Link>
          <Link href="#about" className="hover:text-green-700 transition-colors whitespace-nowrap">
            About Us
          </Link>
          <Link href="#contact" className="hover:text-green-700 transition-colors whitespace-nowrap">
            Contact
          </Link>
        </nav>

        {/* Zone 3: Primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="#appointment"
            className="rounded-full bg-green-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 transition-all whitespace-nowrap"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
