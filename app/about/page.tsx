import type { Metadata } from 'next';
import { ArrowUpRight, Check, HeartHandshake, MapPin, Sparkles } from 'lucide-react';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

export const metadata: Metadata = {
  title: 'About LakeView German School | Practical German Learning',
  description: 'Meet LakeView German School, a learner-first German language school in Kisumu and online, helping students build confident futures.',
  alternates: { canonical: '/about' },
};

const values = [
  ['01', 'Human first', 'Every learner deserves patience, clarity, and a teacher who sees the person behind the language.'],
  ['02', 'Useful always', 'We practise the German you need for work, study, travel, and the everyday moments in between.'],
  ['03', 'Forward together', 'Your next step matters to us, from the first class through to the opportunity it unlocks.'],
];

export default function AboutPage() {
  return <main><SiteHeader /><section className="inner-hero"><div className="inner-hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> Our story · Kisumu & online</div><h1>A school with<br /><em>somewhere to go.</em></h1><p>LakeView exists for people who are ready to make a bigger life possible, one confident German sentence at a time.</p><a href="/contact" className="button button-coral">Meet your next step <ArrowUpRight size={16} /></a></div><div className="story-art"><div className="story-sun" /><div className="story-card story-card-main"><Sparkles size={18} /><strong>Wort für Wort</strong><span>Progress becomes possibility.</span></div><div className="story-card story-card-note"><MapPin size={16} /><span>Kisumu<br /><b>Kenya</b></span></div><div className="story-line" /></div></section><section className="about-intro section-pad"><div className="section-kicker">01 <span>Why we started</span></div><div className="about-split"><h2>Language is the<br /><span>first open door.</span></h2><div><p>We started LakeView because learning German should feel connected to real life. Not like a test you pass and forget, but like a skill that gives you more choices.</p><p>Our classes bring structure, warmth, and practical direction together. You leave each lesson knowing what you can say now and where it can take you next.</p><a href="/contact" className="text-link">Talk with our team <ArrowUpRight size={16} /></a></div></div></section><section className="values-section section-pad"><div className="section-kicker light">02 <span>What guides us</span></div><div className="values-heading"><h2>Small steps.<br /><em>Big horizons.</em></h2><HeartHandshake size={42} /></div><div className="values-grid">{values.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><Check size={17} /></article>)}</div></section><section className="about-cta section-pad"><div><span className="contact-badge">Ready when you are</span><h2>Let&apos;s make<br /><em>room for more.</em></h2></div><a href="/contact" className="button button-dark">Start learning <ArrowUpRight size={16} /></a></section><SiteFooter /></main>;
}