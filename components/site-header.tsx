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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-2" : "bg-white/50 backdrop-blur-sm border-b border-transparent py-4"
      )}>
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">

            {/* Brand / Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex items-center gap-2 transition-transform active:scale-[0.98] shrink-0"
            >
              <img
                src="/logo.jpg"
                alt="Lakeview German School Logo"
                className="w-24 sm:w-28 lg:w-32 h-auto object-contain transition-all"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 bg-slate-50/50 rounded-full px-2 py-1 border border-slate-200/60 shadow-inner"
              aria-label="Main navigation"
            >
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
                      isActive
                        ? 'bg-white text-[#0367B4] shadow-sm ring-1 ring-slate-900/5'
                        : 'text-slate-600 hover:text-[#0D2752] hover:bg-white/50'
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
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0D2752] text-white text-sm font-bold shadow-soft hover:bg-[#0367B4] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Enroll Now</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="lg:hidden p-2.5 rounded-full bg-slate-50 text-[#0D2752] border border-slate-200 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
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
          'fixed top-0 right-0 z-40 h-full w-full max-w-[280px] bg-white shadow-2xl lg:hidden transition-transform duration-300 ease-out flex flex-col',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <img src="/logo.jpg" alt="Logo" className="w-24 object-contain" />
            <button onClick={closeMenu} className="p-2 rounded-full bg-slate-100 text-slate-600">
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    'px-5 py-3.5 rounded-2xl text-base font-semibold transition-colors',
                    isActive
                      ? 'text-[#0367B4] bg-[#EAF4FB]'
                      : 'text-slate-600 hover:text-[#0D2752] hover:bg-slate-50'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="pt-6 border-t border-slate-100 mt-auto pb-4">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full bg-[#0D2752] text-white font-bold text-center shadow-soft active:scale-95 transition-all"
            >
              <span>Enroll Now</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}