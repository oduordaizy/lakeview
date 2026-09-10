import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D2752] text-white relative overflow-hidden pt-16 pb-8 border-t-4 border-[#0367B4]">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0367B4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D6001C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* Brand & Tagline - Column 1 (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0367B4] to-[#2795D3] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-[#0367B4]/20 group-hover:scale-105 transition-transform">
                <span>LV</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight leading-none">
                  LakeView
                </span>
                <span className="text-xs font-semibold text-[#2795D3] tracking-wider mt-0.5 uppercase">
                  German School
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Learn German. Open doors. Build your future. Premium language education in Kenya designed for academics, career advancement, and personal growth.
            </p>

            {/* Quick WhatsApp CTA Badge */}
            <div className="pt-2">
              <a
                href="https://wa.me/254702562730"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Chat directly on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links - Column 2 (4 cols split into 2 sub-columns) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#2795D3]">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link
                href="/"
                className="text-slate-300 hover:text-white hover:translate-x-1 transition-all py-1.5 flex items-center gap-1.5"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-300 hover:text-white hover:translate-x-1 transition-all py-1.5 flex items-center gap-1.5"
              >
                About Us
              </Link>
              <Link
                href="/programs"
                className="text-slate-300 hover:text-white hover:translate-x-1 transition-all py-1.5 flex items-center gap-1.5"
              >
                Programs & Pricing
              </Link>
              <Link
                href="/locations"
                className="text-slate-300 hover:text-white hover:translate-x-1 transition-all py-1.5 flex items-center gap-1.5"
              >
                Our Locations
              </Link>
              <Link
                href="/beyond-classroom"
                className="text-slate-300 hover:text-white hover:translate-x-1 transition-all py-1.5 flex items-center gap-1.5"
              >
                Beyond Classroom
              </Link>
              <Link
                href="/gallery"
                className="text-slate-300 hover:text-white hover:translate-x-1 transition-all py-1.5 flex items-center gap-1.5"
              >
                Gallery
              </Link>
              <Link
                href="/faq"
                className="text-slate-300 hover:text-white hover:translate-x-1 transition-all py-1.5 flex items-center gap-1.5"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-slate-300 hover:text-white hover:translate-x-1 transition-all py-1.5 flex items-center gap-1.5"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info - Column 3 (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#2795D3]">
              Contact Us
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <a
                href="https://wa.me/254702562730"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-[#0367B4]/20 border border-white/5 hover:border-[#0367B4]/40 text-slate-200 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0367B4]/20 flex items-center justify-center text-[#2795D3] group-hover:bg-[#0367B4] group-hover:text-white transition-colors">
                  <MessageCircle size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-slate-400 font-medium">WhatsApp</span>
                  <span className="font-semibold text-white">0702 562 730</span>
                </div>
              </a>

              <a
                href="tel:+254103390866"
                className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-[#0367B4]/20 border border-white/5 hover:border-[#0367B4]/40 text-slate-200 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0367B4]/20 flex items-center justify-center text-[#2795D3] group-hover:bg-[#0367B4] group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-slate-400 font-medium">Phone</span>
                  <span className="font-semibold text-white">0103 390 866</span>
                </div>
              </a>

              <a
                href="mailto:hello@lakeviewgerman.school"
                className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-[#0367B4]/20 border border-white/5 hover:border-[#0367B4]/40 text-slate-200 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0367B4]/20 flex items-center justify-center text-[#2795D3] group-hover:bg-[#0367B4] group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-slate-400 font-medium">Email</span>
                  <span className="font-semibold text-white truncate">hello@lakeviewgerman.school</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-[#D6001C]/20 flex items-center justify-center text-[#D6001C] shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-slate-400 font-medium">Location</span>
                  <span className="font-medium text-white text-xs">Oginga Odinga Street, Kisumu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium mr-2">Follow Us:</span>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0367B4] flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#D6001C] flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://wa.me/254702562730"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          {/* Copyright Notice */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-slate-400 text-center sm:text-left">
            <span>© {currentYear} LakeView German School. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-300 font-medium flex items-center gap-1">
              <MapPin size={12} className="text-[#D6001C]" /> Kisumu, Kenya
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}