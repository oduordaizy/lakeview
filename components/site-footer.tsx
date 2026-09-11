'use client';

import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D2752] text-white relative overflow-hidden pt-16 pb-8 border-t-4 border-[#0367B4]">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0367B4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D6001C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* SECTION 1: Logo & Brand Area (3 Cols on Desktop) */}
          <div className="lg:col-span-3 flex flex-col gap-4 relative">
          

            {/* Logo + Brand Name */}
            <Link href="/" className="inline-flex items-center gap-2 group pt-2">
              <img
                src="/logo.jpg"
                alt="LakeView German School Logo"
                className="w-12 h-12 object-contain rounded-xl bg-white p-1 shadow-md shadow-black/20 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight leading-none group-hover:text-[#2795D3] transition-colors">
                  Lakeview
                </span>
                <span className="text-xs font-semibold text-[#2795D3] tracking-wider mt-0.5 uppercase">
                  German School
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-xs leading-relaxed">
              Learn German. Open doors. Build your future. Premium language education in Kenya designed for global careers.
            </p>

            {/* WhatsApp Quick CTA */}
            <div className="pt-1">
              <a
                href="https://wa.me/254702562730"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* SECTION 2: Quick Links (3 Cols on Desktop) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-bold tracking-wider text-white flex items-center gap-2">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-secondary-blue hover:translate-x-1 transition-all inline-block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-secondary-blue hover:translate-x-1 transition-all inline-block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white hover:text-secondary-blue hover:translate-x-1 transition-all inline-block py-0.5">
                  Programs & Pricing
                </Link>
              </li>
              <li>
                <Link href="/beyond-classroom" className="text-white hover:text-secondary-blue hover:translate-x-1 transition-all inline-block py-0.5">
                  Beyond Classroom
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white hover:text-secondary-blue hover:translate-x-1 transition-all inline-block py-0.5">
                  Gallery & Events
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white hover:text-secondary-blue hover:translate-x-1 transition-all inline-block py-0.5">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* SECTION 3: Contact Us (3 Cols on Desktop) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-bold tracking-wider text-white flex items-center gap-2">
              Contact Us
            </h3>
            <div className="flex flex-col gap-2.5 text-sm text-slate-300">
              <a
                href="https://wa.me/254702562730"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-[#0367B4]/20 border border-white/5 hover:border-[#0367B4]/40 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0367B4]/20 flex items-center justify-center text-[#2795D3] group-hover:bg-[#0367B4] group-hover:text-white transition-colors">
                  <MessageCircle size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase text-slate-400 font-medium">WhatsApp</span>
                  <span className="font-semibold text-white text-xs">0702 562 730</span>
                </div>
              </a>

              <a
                href="tel:+254103390866"
                className="group flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-[#0367B4]/20 border border-white/5 hover:border-[#0367B4]/40 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0367B4]/20 flex items-center justify-center text-[#2795D3] group-hover:bg-[#0367B4] group-hover:text-white transition-colors">
                  <Phone size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase text-slate-400 font-medium">Phone</span>
                  <span className="font-semibold text-white text-xs">0103 390 866</span>
                </div>
              </a>

              <a
                href="mailto:lakeviewgermanschool@gmail.com"
                className="group flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-[#0367B4]/20 border border-white/5 hover:border-[#0367B4]/40 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0367B4]/20 flex items-center justify-center text-[#2795D3] group-hover:bg-[#0367B4] group-hover:text-white transition-colors">
                  <Mail size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase text-slate-400 font-medium">Email</span>
                  <span className="font-semibold text-white text-xs truncate max-w-[160px]">lakeviewgermanschool@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* SECTION 4: Location & Hours (3 Cols on Desktop) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-bold tracking-wider text-white flex items-center gap-2">
              Visit & Hours
            </h3>
            
            <div className="flex flex-col gap-3 text-slate-300 text-sm">
              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                <div className="w-7 h-7 rounded-lg bg-[#D6001C]/20 flex items-center justify-center text-[#D6001C] shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase text-slate-400 font-medium">Location</span>
                  <span className="font-medium text-white text-xs">Oginga Odinga Street, Kisumu, Kenya</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                <div className="w-7 h-7 rounded-lg bg-[#0367B4]/20 flex items-center justify-center text-[#2795D3] shrink-0 mt-0.5">
                  <Clock size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase text-slate-400 font-medium">Office Hours</span>
                  <span className="font-medium text-white text-xs">Mon - Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Footer / Socials & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium mr-1">Socials:</span>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0367B4] flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D6001C] flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://wa.me/254702562730"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              <MessageCircle size={16} />
            </a>
          </div>

          {/* Copyright notice */}
          <div className="text-xs text-slate-400 text-center md:text-right">
            <span>© {currentYear} Lakeview German School. All rights reserved.</span>
          </div>
          
        </div>
      </div>
    </footer>
  );
}