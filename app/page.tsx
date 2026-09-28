'use client';

import {
  ArrowUpRight,
  Briefcase,
  CheckCircle,
  Globe,
  GraduationCap,
  MapPin,
  Award,
  Quote,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import TeamSection from '../components/meet-admin';
import FAQPage from '../components/faq';
import { ProgramsSnapshot } from '../components/programs';
import PremiumHero from '../components/hero';


const whyChooseUs = [
  {
    icon: Globe,
    title: 'Flexible online & physical classes',
    description:
      'Learn from anywhere in Kenya, or join us in person on Oginga Odinga Street, Kisumu.',
  },
  {
    icon: UsersIcon,
    title: 'Learner-centred instructors',
    description:
      'Teaching that adapts to your pace, with real feedback and real conversation practice.',
  },
  {
    icon: Briefcase,
    title: 'Ausbildung & job application support',
    description:
      'We guide you past the language itself — into CVs, interviews, and real opportunities.',
  },
  {
    icon: GraduationCap,
    title: 'CEFR-aligned, A1 through B2',
    description:
      'A curriculum recognised by institutions and employers across Germany.',
  },
];

const levels = [
  { code: 'A1', label: 'Foundations', detail: 'Everyday communication' },
  { code: 'A2', label: 'Building confidence', detail: 'Real conversation' },
  { code: 'B1', label: 'Independence', detail: 'Work-ready German' },
  { code: 'B2', label: 'Fluency', detail: 'Exam & Ausbildung ready' },
];

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Home() {
  return (
    <main className="flex-1 bg-[#FDFDFD] text-[#0D2752] font-sans antialiased flex flex-col">
      <SiteHeader />

      <PremiumHero />

      {/* ================= OUR STORY ================= */}
      <section className="py-24 lg:py-32 bg-[#FDFDFD]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="text-sm font-medium tracking-wide text-[#0367B4] mb-4">
                Our story
              </p>
              <h2
                className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#0D2752] mb-6"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Learning German is a pathway, not just a subject.
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg font-light mb-6">
                Lakeview German School started in Kisumu with a simple belief:
                that German should open doors to education, employment, and a
                different future — not just fill a classroom.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg font-light mb-8">
                Today we teach learners online across Kenya — from Narok to
                Mombasa — and in person on Oginga Odinga Street, Kisumu,
                carrying every student from their first word to B2 fluency.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[#0367B4] font-semibold hover:text-[#0D2752] transition-colors"
              >
                Read our full story
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 mt-8 lg:mt-0">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] sm:mt-10">
                  <img
                    src="/girl-with-gerflag2.png"
                    alt="Instructor teaching a class at Lakeview German School"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                  <img
                    src="/student-3.png"
                    alt="Students at Lakeview German School"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 lg:py-32 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium tracking-wide text-[#0367B4] mb-4">
              Why Lakeview
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#0D2752]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Built around what actually gets you to Germany.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-8 flex flex-col"
              >
                <feature.icon size={24} className="text-[#0367B4] mb-6" />
                <h3 className="text-base font-semibold text-[#0D2752] mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IN THE CLASSROOM ================= */}
      <section className="relative py-24 lg:py-32 bg-[#0D2752] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Quote size={36} className="text-[#2795D3] mb-6" />
              <p
                className="font-serif text-2xl sm:text-3xl leading-snug text-white mb-6"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Every class is built around real conversation — not just
                grammar on a page.
              </p>
              <p className="text-slate-300 leading-relaxed font-light mb-8">
                Whether you join us online from Narok or Mombasa, or in
                person in Kisumu, our instructors teach for confidence first
                — because that's what carries you through an interview, an
                exam, or your first weeks in Germany.
              </p>
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 text-white font-semibold hover:text-[#2795D3] transition-colors"
              >
                See more classroom moments
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[16/11]">
                <img
                  src="/lv-teacher.png"
                  alt="A teacher leading a German class at Lakeview German School"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAM LEVELS STRIP ================= */}
      <section className="py-20 bg-[#EAF4FB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-medium tracking-wide text-[#0367B4] mb-3">
                Your path to B2
              </p>
              <h2
                className="font-serif text-3xl sm:text-4xl leading-tight text-[#0D2752]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Four levels. Eight months. One clear goal.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, i) => (
              <div
                key={level.code}
                className="relative bg-white rounded-2xl p-6 shadow-sm"
              >
                <span className="absolute top-6 right-6 text-xs font-medium text-[#0D2752]/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-2xl font-serif text-[#0367B4] mb-2" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                  {level.code}
                </p>
                <p className="text-sm font-semibold text-[#0D2752] mb-1">
                  {level.label}
                </p>
                <p className="text-xs text-slate-500">{level.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProgramsSnapshot />
      <TeamSection />

      {/* ================= STUDENT LIFE ================= */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div className="max-w-xl">
              <p className="text-sm font-medium tracking-wide text-[#0367B4] mb-3">
                Student life
              </p>
              <h2
                className="font-serif text-3xl sm:text-4xl leading-tight text-[#0D2752]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Join our growing community.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-[#0D2752] font-medium hover:border-[#0367B4] hover:text-[#0367B4] transition-all whitespace-nowrap"
            >
              See full gallery
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-sm aspect-[4/5]"
              >
                <img
                  src={`/student-${item}.png`}
                  alt={`Student life at Lakeview German School ${item}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative bg-[#0D2752] py-20 overflow-hidden">
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#D6001C]/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2
            className="font-serif text-3xl sm:text-4xl text-white mb-5"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Your Germany journey starts here.
          </h2>
          <p className="text-slate-300 mb-9 font-light">
            Call or WhatsApp us: 0702 562 730 · 0103 390 866
          </p>
          <a
            href="https://wa.me/254702562730?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20German%20classes%20at%20Lakeview%20German%20School"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D6001C] text-white font-semibold shadow-lg shadow-[#D6001C]/25 hover:bg-[#b50018] transition-all"
          >
            Chat with us on WhatsApp
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <FAQPage />
      <SiteFooter />
    </main>
  );
}