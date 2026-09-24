'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs & Pricing' },
  { href: '/beyond-classroom', label: 'Beyond Classroom' },
  { href: '/gallery', label: 'Gallery' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 py-1 transition-all">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20 2xl:h-24">

            {/* Brand / Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex items-center gap-2 transition-transform active:scale-[0.98] shrink-0"
            >
              <img
                src="/logo.jpg"
                alt="Lakeview German School Logo"
                className="w-20 sm:w-24 2xl:w-28 h-auto object-contain transition-all"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3"
              aria-label="Main navigation"
            >
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-3 py-2 xl:px-4 xl:py-2.5 2xl:px-5 2xl:py-2.5 rounded-lg text-sm xl:text-base 2xl:text-base font-medium transition-all duration-200',
                      isActive
                        ? 'text-[#0367B4] font-semibold bg-[#EAF4FB]/70'
                        : 'text-[#0D2752] hover:text-[#0367B4] hover:bg-[#EAF4FB]/60'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 xl:px-6 xl:py-3 2xl:px-7 2xl:py-3.5 rounded-full bg-[#D6001C] text-white text-sm xl:text-base 2xl:text-base font-semibold shadow-md shadow-[#D6001C]/20 hover:bg-[#b50018] hover:shadow-lg hover:shadow-[#D6001C]/30 active:scale-95 transition-all duration-200"
              >
                <span>Enroll Now</span>
                <ArrowUpRight
                  size={16}
                  className="2xl:w-5 2xl:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-xl text-[#0D2752] hover:bg-[#EAF4FB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0367B4]"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden transition-opacity duration-300',
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeMenu}
      />

      {/* Mobile Drawer Content */}
      <aside
        className={cn(
          'fixed top-0 right-0 z-40 h-full w-full max-w-xs bg-white shadow-2xl lg:hidden transition-transform duration-300 ease-out flex flex-col justify-between p-6 pt-24',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col gap-1.5">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  'px-4 py-3 rounded-xl text-base font-medium transition-colors',
                  isActive
                    ? 'text-[#0367B4] bg-[#EAF4FB] font-semibold'
                    : 'text-[#0D2752] hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile CTA */}
        <div className="pt-6 border-t border-slate-100">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-full bg-[#D6001C] text-white font-semibold text-center shadow-md shadow-[#D6001C]/25 active:scale-95 transition-all"
          >
            <span>Enroll Now</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </aside>
    </>
  );
}