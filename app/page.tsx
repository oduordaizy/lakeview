'use client';

import {
  ArrowUpRight,
  Briefcase,
  CheckCircle,
  Globe,
  GraduationCap,
  MapPin,
  Award,
  PlayCircle
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import TeamSection from '../components/meet-admin';
import FAQPage from '../components/faq';
import { ProgramsSnapshot } from '../components/programs';

const whyChooseUs = [
  {
    icon: Globe,
    title: 'Flexible Online & Physical Classes',
    description: 'Learn from anywhere in Kenya or join us in person in Kisumu with our state-of-the-art facilities.',
  },
  {
    icon: UsersIcon,
    title: 'Experienced, Learner-Centred Instructors',
    description: 'Teachers who understand your goals and adapt to your pace, ensuring maximum retention.',
  },
  {
    icon: Briefcase,
    title: 'Full Ausbildung & Job Application Support',
    description: 'We guide you beyond language to your career opportunities in Germany and Europe.',
  },
  {
    icon: GraduationCap,
    title: 'Internationally Aligned Curriculum (A1–B2)',
    description: 'CEFR-aligned training recognized globally by embassies and universities.',
  },
];

// Helper icon
function UsersIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col relative overflow-hidden">
      <SiteHeader />

      {/* Premium Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero3.png" 
            alt="Lakeview German School" 
            className="w-full h-full object-cover object-top scale-105 transform"
          />
          {/* Deep dark gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2752]/95 via-[#0D2752]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2752] via-transparent to-transparent opacity-80"></div>
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl flex flex-col items-start space-y-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-dark text-white font-medium text-sm shadow-lg border border-white/20 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              New Intakes Ongoing
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] 2xl:text-[5.5rem] font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Speak German with <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2795D3] to-sky-200">
                Confidence
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl 2xl:text-2xl text-slate-300 leading-relaxed max-w-xl"
            >
              CEFR-aligned German training preparing you for jobs, <strong className="text-white">Ausbildung</strong>, and further university studies in Germany.
            </motion.p>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D6001C] text-white font-bold text-base 2xl:text-lg shadow-lg shadow-[#D6001C]/30 hover:bg-[#b50018] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Start Your Journey</span>
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/programs"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-dark text-white font-semibold text-base 2xl:text-lg shadow-sm hover:bg-white/10 transition-all duration-300"
              >
                <PlayCircle size={20} className="text-[#2795D3] group-hover:scale-110 transition-transform duration-300" />
                <span>View Programs</span>
              </Link>
            </motion.div>

            {/* Quick Trust Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 flex items-center gap-8 border-t border-white/10 w-full max-w-lg mt-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#2795D3] shrink-0 border border-white/10">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">CEFR Standard</p>
                  <p className="text-xs text-slate-400">A1 to B2 Levels</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Ausbildung</p>
                  <p className="text-xs text-slate-400">Placement Support</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Premium Trust Strip */}
      <section className="bg-[#0D2752] text-white py-8 relative overflow-hidden z-20 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left divide-x divide-white/10">
            {[
              { icon: CheckCircle, text: 'CEFR-Aligned' },
              { icon: Globe, text: 'Online & Physical Classes' },
              { icon: Briefcase, text: 'Job & Ausbildung Support' },
              { icon: MapPin, text: 'Kisumu-Based, Global Reach' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-center md:justify-center gap-4 px-4"
              >
                <item.icon className="text-[#2795D3] shrink-0" size={28} />
                <span className="text-sm lg:text-base font-semibold tracking-wide">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 lg:py-32 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0367B4]/20 to-[#2795D3]/20 rounded-[2rem] blur-2xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
                <div className="absolute inset-0 bg-[#0D2752]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src="/lv-teacher.png"
                  alt="Students in classroom setting"
                  className="w-full h-80 sm:h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#0367B4]"></span>
                <span className="text-sm font-bold uppercase tracking-wider text-[#0367B4]">Welcome</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D2752] tracking-tight leading-tight">
                Welcome to Lakeview <br/> German School
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg sm:text-xl font-light">
                We offer CEFR-aligned German training from A1 to B2 — preparing you for jobs, Ausbildung, and further studies in Germany. Learn German. Open doors. Build your future.
              </p>
              <div className="pt-4">
                <Link href="/about" className="group inline-flex items-center gap-2 text-[#0367B4] font-semibold text-lg hover:text-[#0D2752] transition-colors">
                  Learn more about our mission
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-extrabold text-[#0D2752]"
            >
              What Sets Lakeview Apart
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-slate-500"
            >
              We combine world-class curriculum with personalized support to ensure you succeed.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                key={index}
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 text-[#0367B4] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0367B4] group-hover:text-white group-hover:border-transparent transition-all duration-300 shrink-0">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0D2752] mb-3 leading-snug">{feature.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProgramsSnapshot />
      <TeamSection />

      {/* Student Life */}
      <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-sm font-bold uppercase tracking-wider text-[#0367B4] mb-2 block">Student Life</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0D2752]">
                Join Our Growing Community
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-[#0D2752] font-semibold hover:border-[#0367B4] hover:text-[#0367B4] hover:shadow-md transition-all whitespace-nowrap"
              >
                <span>See Full Gallery</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3].map((item, i) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-[2rem] overflow-hidden shadow-soft aspect-[4/5] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2752]/80 via-[#0D2752]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
                <img
                  src={`/student-${item}.png`}
                  alt={`Student life photo ${item}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQPage />
      <SiteFooter />
    </main>
  );
}