'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Clock3,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageCircle,
  MoveRight,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

const levels = [
  { level: 'A1', title: 'Beginner', description: 'Start speaking with confidence.', tone: 'blue' },
  { level: 'A2', title: 'Elementary', description: 'Make your everyday German flow.', tone: 'lime' },
  { level: 'B1', title: 'Intermediate', description: 'Express ideas with independence.', tone: 'orange' },
  { level: 'B2', title: 'Upper intermediate', description: 'Unlock work and study opportunities.', tone: 'navy' },
];

const support = [
  { icon: BriefcaseBusiness, title: 'Career pathways', text: 'Job & Ausbildung applications, employer connections, and the confidence to take your next step.' },
  { icon: BookOpen, title: 'Application guidance', text: 'CV and motivation letter support that makes your experience stand out to German institutions.' },
  { icon: ShieldCheck, title: 'Exam to visa support', text: 'From certification guidance to document and visa preparation, we help you navigate the details.' },
];

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Kisumu & online · A1–B2</div>
          <h1>Your next chapter<br /><em>starts in German.</em></h1>
          <p>Practical, CEFR-aligned training for the people building a bigger future. Learn the language, find your confidence, and open the right doors.</p>
          <div className="hero-actions">
            <a href="#contact" className="button button-coral">Explore the journey <MoveRight size={17} /></a>
            <a href="https://wa.me/254702562730" className="play-link"><span className="play-icon"><Play size={12} fill="currentColor" /></span> Talk to an advisor</a>
          </div>
          <div className="hero-note"><div className="avatar-stack"><span>JM</span><span>AO</span><span>+</span></div><span>Join a growing community of future-ready learners</span></div>
        </div>
        <div className="hero-art" aria-label="Students learning together">
          <div className="sun-disc" />
          <div className="art-label label-top"><span className="label-icon"><Sparkles size={14} /></span><span>German, made<br /><strong>possible</strong></span></div>
          <div className="art-window"><div className="window-sky" /><div className="window-horizon" /><div className="window-water" /><div className="window-figure figure-one" /><div className="window-figure figure-two" /></div>
          <div className="art-card"><span className="mini-flag">DE</span><span><strong>Wort für Wort</strong><small>Build a global future</small></span><ArrowUpRight size={18} /></div>
          <div className="scribble">∞</div>
        </div>
        <div className="hero-bottom"><span>Learning that moves with you</span><div className="hero-rule" /><span>01 / 04</span></div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="section-kicker">01 <span>Why LakeView</span></div>
        <div className="intro-content">
          <h2>German is more than a language.<br /><span>It&apos;s a way forward.</span></h2>
          <div className="intro-aside"><p>At LakeView, we teach for the life beyond the classroom. Our learner-centred approach pairs experienced teaching with practical support, so you can move from your first <i>Hallo</i> to your next big opportunity.</p><a href="#support" className="text-link">See how we support you <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="vision-strip"><div><span className="strip-number">A</span><strong>Accessible by design</strong><p>Flexible online and physical classes that fit your rhythm.</p></div><div><span className="strip-number">B</span><strong>Built for real life</strong><p>Practical German for work, study, travel, and everyday moments.</p></div><div><span className="strip-number">C</span><strong>Connected to opportunity</strong><p>A clear path from learning to your global future.</p></div></div>
      </section>

      <section className="journey section-pad" id="journey">
        <div className="section-kicker light">02 <span>Your learning path</span></div>
        <div className="journey-heading"><div><h2>One level at a time.<br /><em>A whole new world.</em></h2></div><p>Our CEFR-aligned programme takes you from A1 to B2 in eight focused months. No guesswork, just a steady path forward.</p></div>
        <div className="level-grid">{levels.map((item, index) => <div className={`level-card ${item.tone}`} key={item.level}><div className="level-top"><span>0{index + 1}</span><span>{index === 0 ? 'Start here' : index === 3 ? 'Your goal' : 'Keep going'}</span></div><div className="level-code">{item.level}</div><div className="level-info"><strong>{item.title}</strong><p>{item.description}</p></div><div className="level-arrow"><ArrowUpRight size={18} /></div></div>)}</div>
        <div className="journey-foot"><span><Clock3 size={17} /> 2 months per level</span><span><GraduationCap size={18} /> 8 months A1–B2</span><a href="#contact">View programme details <ArrowUpRight size={15} /></a></div>
      </section>

      <section className="offer section-pad" id="support">
        <div className="section-kicker">03 <span>More than lessons</span></div>
        <div className="offer-heading"><h2>Learning that<br /><span>takes you further.</span></h2><div className="offer-intro"><p>The right language skills can change the shape of your future. We stay close from your first class through to the opportunity you&apos;re working toward.</p><div className="stamp">LEARN<br /><span>+</span> GROW</div></div></div>
        <div className="support-grid">{support.map(({ icon: Icon, title, text }, index) => <article className="support-card" key={title}><div className="support-icon"><Icon size={21} /></div><span className="support-index">0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}><ArrowUpRight size={18} /></a></article>)}</div>
      </section>

      <section className="pricing section-pad">
        <div className="pricing-card">
          <div className="pricing-copy"><div className="section-kicker light">04 <span>Choose your pace</span></div><h2>Make space for<br /><em>what&apos;s next.</em></h2><p>Whether you learn from home or in the heart of Kisumu, your next level is closer than you think.</p><div className="pricing-contact"><span>Have a question?</span><a href="tel:+254702562730">Call 0702 562 730 <ArrowUpRight size={15} /></a></div></div>
          <div className="price-options"><div className="price-option"><div className="price-icon"><MessageCircle size={20} /></div><div><span>Online classes</span><strong>KES 10,000 <small>/ month</small></strong><p>Daytime 9 AM–2 PM<br />Evening 8 PM–10 PM</p></div></div><div className="price-option featured"><div className="price-icon"><MapPin size={20} /></div><div><span>Physical classes</span><strong>KES 12,000 <small>/ month</small></strong><p>Kisumu, Oginga Odinga Street<br />Learn together, in person</p></div></div><a className="button button-light price-button" href="#contact">Find your class <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-inner"><div className="contact-badge"><HeartHandshake size={18} /> Your future is worth the first step</div><h2>Ready to say<br /><em>“Ich bin bereit”?</em></h2><p>Send us a message and we&apos;ll help you find the right level, schedule, and next step.</p><div className="contact-actions"><a href="https://wa.me/254702562730" className="button button-coral"><MessageCircle size={17} /> WhatsApp us</a><a href="tel:+254103390866" className="button button-outline">Call 0103 390 866 <ArrowUpRight size={16} /></a></div></div>
        <div className="faq"><span className="faq-label">Good to know</span>{['Do I need prior German experience?', 'When can I join a class?', 'Are certificates provided?'].map((question, index) => <div className={`faq-item ${faqOpen === index ? 'open' : ''}`} key={question}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)}><span>0{index + 1}</span>{question}<ChevronDown size={17} /></button>{faqOpen === index && <p>{index === 0 ? 'No. We welcome complete beginners at A1 and place continuing learners at the right level.' : index === 1 ? 'Reach out anytime and our advisor will share the next available online and physical class intakes.' : 'We guide you toward the right exam and certification pathway for your study or career goals.'}</p>}</div>)}</div>
      </section>

      <SiteFooter />
    </main>
  );
}
