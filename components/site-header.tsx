'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const links = [
  { href: '/#journey', label: 'The journey' },
  { href: '/#support', label: 'How we help' },
  { href: '/about', label: 'Our story' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a href="/" className="brand" onClick={closeMenu}><span className="brand-mark"><span>LV</span></span><span className="brand-name">LakeView <b>German School</b></span></a>
      <div className={cn('nav-links', menuOpen && 'is-open')}>
        {links.map((link) => <a href={link.href} onClick={closeMenu} key={link.href}>{link.label}</a>)}
        <a href="/contact" className="nav-mobile-cta" onClick={closeMenu}>Start your journey <ArrowUpRight size={16} /></a>
      </div>
      <a href="/contact" className="button button-dark nav-cta">Start your journey <ArrowUpRight size={16} /></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
    </nav>
  );
}