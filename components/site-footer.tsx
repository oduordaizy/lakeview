import React from 'react';
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Globe,
  CheckCircle,
  ChevronRight,
  Sparkles,
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
    <footer className="relative bg-[#0D2752] text-white overflow-hidden pt-16 pb-8 sm:pt-20 lg:pt-24 2xl:pt-32">
      {/* Background Decorative Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 2xl:w-[600px] 2xl:h-[600px] rounded-full bg-[#0367B4]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 2xl:w-[700px] 2xl:h-[700px] rounded-full bg-[#2795D3]/15 blur-3xl" />

      {/* Main Container tailored for wide & ultra-wide screens */}
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">

        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 2xl:gap-16 pb-12 lg:pb-16 2xl:pb-20 border-b border-[#0367B4]/30">

          {/* Column 1: Brand & Overview (4 cols on lg, 4 cols on 2xl) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-xl shadow-md inline-block">
                  <img
                    src="/logo.jpg"
                    alt="Lakeview German School Logo"
                    className="w-16 h-12 sm:w-20 sm:h-14 2xl:w-24 2xl:h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-extrabold text-white tracking-tight">
                    Lakeview
                  </h3>
                  <p className="text-xs sm:text-sm 2xl:text-base text-[#2795D3] font-semibold tracking-wider uppercase">
                    German School
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base 2xl:text-lg leading-relaxed max-w-md">
                Empowering learners in Kenya and beyond to master German from A1 to B2. Prepare for certified exams, university studies, and career opportunities in Germany.
              </p>
            </div>

            {/* Direct WhatsApp Callout Tag */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-3 2xl:px-7 2xl:py-4 rounded-full bg-[#D6001C] text-white font-bold text-xs sm:text-sm 2xl:text-base shadow-lg shadow-[#D6001C]/30 hover:bg-[#b50018] hover:shadow-xl transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 fill-current" />
                <span>Chat Directly on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 2xl:w-5 2xl:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm sm:text-base 2xl:text-lg font-bold text-white uppercase tracking-wider text-[#2795D3]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 2xl:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm sm:text-base 2xl:text-lg text-slate-300 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#2795D3] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-1" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs (2 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm sm:text-base 2xl:text-lg font-bold text-white uppercase tracking-wider text-[#2795D3]">
              Our Programs
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 2xl:space-y-4">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm sm:text-base 2xl:text-lg text-slate-300 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#2795D3] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-1" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Visit Info (3 cols) - CLEAN BORDERLESS LAYOUT */}
          <div className="lg:col-span-3 space-y-8 2xl:space-y-10">

            {/* Contact Details (Clean, no boxes) */}
            <div className="space-y-4">
              <h4 className="text-sm sm:text-base 2xl:text-lg font-bold text-white uppercase tracking-wider text-[#2795D3]">
                Contact Us
              </h4>
              <ul className="space-y-3 sm:space-y-3.5 2xl:space-y-4 text-sm sm:text-base 2xl:text-lg">
                <li className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#2795D3] shrink-0 mt-0.5" />
                  <span>Kisumu City, Oginga Odinga Street, Kenya</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#2795D3] shrink-0" />
                  <a href="tel:0702562730" className="hover:text-white transition-colors">
                    0702 562 730 / 0103 390 866
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#2795D3] shrink-0" />
                  <a href="mailto:lakeviewgermanschool@gmail.com" className="hover:text-white transition-colors">
                    lakeviewgermanschool@gmail.com
                  </a>
                </li>
              </ul>
            </div>



          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 sm:pt-10 2xl:pt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm 2xl:text-base text-slate-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Lakeview German School. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:inline-block" />
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:inline-block" />
            <span className="text-slate-300 font-medium">
              Designed for Global Success
            </span>
          </div>
        </div>

      </div>
    </footer >
  );
}

export default SiteFooter;