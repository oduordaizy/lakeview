import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programs & Pricing', href: '/programs' },
  { label: 'Beyond Classroom', href: '/beyond-classroom' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

const programLinks = [
  { label: 'A1 German Course', href: '/programs#a1' },
  { label: 'A2 German Course', href: '/programs#a2' },
  { label: 'B1 German Course', href: '/programs#b1' },
  { label: 'B2 German Course', href: '/programs#b2' },
  { label: 'Ausbildung & Career Prep', href: '/beyond-classroom' },
  { label: 'Online Evening Classes', href: '/programs#online' },
];

export function SiteFooter() {
  const whatsappUrl =
    'https://wa.me/254702562730?text=' +
    encodeURIComponent(
      "Hi, I'd like to know more about German classes at Lakeview German School"
    );

  return (
    <footer className="relative bg-[#051124] text-white pt-8 pb-8">
      {/* Curved top edge — sits above the footer box, over whatever section precedes it */}
      <div className="absolute inset-x-0 top-0 -translate-y-[99%] overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 lg:h-28"
        >
          <path
            d="M0,110 L0,50 C240,10 480,90 720,60 C960,30 1200,90 1440,40 L1440,110 Z"
            fill="#051124"
          />
        </svg>
      </div>

      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0367B4]/15 via-transparent to-transparent opacity-60" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full bg-[#0367B4]/10 blur-[120px]" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-2.5 rounded-2xl inline-block border border-white/10">
                  <img
                    src="/logo.jpg"
                    alt="Lakeview German School Logo"
                    className="w-14 sm:w-16 object-contain"
                  />
                </div>
                <div>
                  <h3
                    className="text-2xl sm:text-3xl text-white tracking-tight leading-none"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    Lakeview
                  </h3>
                  <p className="text-xs text-[#2795D3] font-medium tracking-[0.2em] uppercase mt-1">
                    German School
                  </p>
                </div>
              </div>

              <p className="text-slate-400 text-base leading-relaxed max-w-sm font-light">
                Empowering learners across Kenya to speak German with
                confidence — from A1 to B2, into certified exams, university
                studies, and careers in Germany.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white hover:text-[#0D2752] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 group-hover:text-[#25D366] transition-colors" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-semibold text-[#2795D3] uppercase tracking-[0.2em]">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center text-[15px] text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-[#2795D3] opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-semibold text-[#2795D3] uppercase tracking-[0.2em]">
              Our Programs
            </h4>
            <ul className="space-y-4">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center text-[15px] text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-[#2795D3] opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Visit Info */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-semibold text-[#2795D3] uppercase tracking-[0.2em]">
              Contact Us
            </h4>
            <ul className="space-y-5 text-[15px]">
              <li className="flex items-start gap-4 text-slate-400">
                <MapPin className="w-5 h-5 text-[#2795D3] shrink-0 mt-1" />
                <span>Oginga Odinga Street, Kisumu, Kenya</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Phone className="w-5 h-5 text-[#2795D3] shrink-0" />
                <a href="tel:0702562730" className="hover:text-white transition-colors">
                  0702 562 730
                </a>
              </li>
              <li className="flex items-start gap-4 text-slate-400">
                <Mail className="w-5 h-5 text-[#2795D3] shrink-0 mt-1" />
                <a
                  href="mailto:lakeviewgermanschool@gmail.com"
                  className="hover:text-white transition-colors break-words"
                >
                  lakeviewgermanschool@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Lakeview German School. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="w-1 h-1 rounded-full bg-slate-700 hidden sm:inline-block" />
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;