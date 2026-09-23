'use client';

import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  CheckCircle,
  Clock,
  Globe,
  GraduationCap,
  MapPin,
  MessageCircle,
  Sparkles,
  Users,
  Award,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import TeamSection from '../components/meet-admin';

const whyChooseUs = [
  {
    icon: Globe,
    title: 'Flexible Online & Physical Classes',
    description: 'Learn from anywhere in Kenya or join us in person in Kisumu.',
  },
  {
    icon: Users,
    title: 'Experienced, Learner-Centred Instructors',
    description: 'Teachers who understand your goals and adapt to your pace.',
  },
  {
    icon: Briefcase,
    title: 'Full Ausbildung & Job Application Support',
    description: 'We guide you beyond language to your career opportunities.',
  },
  {
    icon: GraduationCap,
    title: 'Internationally Aligned Curriculum (A1–B2)',
    description: 'CEFR-aligned training recognized globally.',
  },
];

const programs = [
  {
    title: 'Online Classes',
    price: 'KES 10,000/month',
    schedule: 'Daytime: 9 AM – 2 PM | Evening: 8 PM – 10 PM',
    location: 'Join from anywhere globally',
    cta: 'Enroll now',
    link: '/contact',
  },
  {
    title: 'Physical Classes',
    price: 'KES 12,000/month',
    schedule: 'Flexible timing options',
    location: 'Kisumu, Oginga Odinga Street',
    cta: 'Enroll Now',
    link: '/contact',
  },
];

const locations = [
  {
    name: 'Narok Online Class',
    description: 'Live online sessions serving learners in Narok and surrounding areas',
  },
  {
    name: 'Mombasa Online Class',
    description: 'Live online sessions serving learners on the coast',
  },
  {
    name: 'Kisumu Physical Location',
    description: 'In-person classes, hands-on instructor support',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#0367B4] selection:text-white">
      <SiteHeader />

      {/* Modern Split Hero Section */}
      <section className="relative bg-white overflow-hidden pt-4 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-100">
        {/* Glow ambient backgrounds */}
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-[#EAF4FB] rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-[#D6001C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-8">

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D2752] tracking-tight leading-[1.15]">
                Empowering You to Speak German with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0367B4] to-[#2795D3]">
                  Confidence
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                CEFR-aligned German training preparing you for jobs, <strong>Ausbildung</strong>, and further university studies in Germany.
              </p>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#D6001C] text-white font-bold text-base shadow-lg shadow-[#D6001C]/25 hover:bg-[#b50018] hover:shadow-xl hover:shadow-[#D6001C]/35 active:scale-[0.98] transition-all duration-200"
                >
                  <span>Start Your German Journey</span>
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border-2 border-slate-200 text-[#0D2752] font-semibold text-base hover:bg-slate-50 hover:border-[#0367B4] hover:text-[#0367B4] active:scale-[0.98] transition-all duration-200"
                >
                  <span>View Programs</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-100 w-full">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF4FB] flex items-center justify-center text-[#0367B4]">
                    <Award size={18} />
                  </div>
                  <span className="text-xs font-semibold text-[#0D2752]">CEFR Standard</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <CheckCircle size={18} />
                  </div>
                  <span className="text-xs font-semibold text-[#0D2752]">Ausbildung Placement</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">

                {/* Visual Backdrop Frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0367B4] to-[#2795D3] opacity-20 blur-xl" />

                {/* Hero Image Wrapper */}
                <div className="relative overflow-hidden ">
                  <img
                    src="/hero2.png"
                    alt="Lakeview German School Classroom"
                    className="w-full h-[420px] sm:h-[480px] object-cover object-top hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlaid Floating Badge Top Right */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/40 shadow-lg flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-[#0D2752]">New Intake Ongoing</span>
                  </div>

                  {/* Overlaid Floating Card Bottom Left */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0D2752]/95 backdrop-blur-md text-white p-4 rounded-xl border border-white/10 shadow-xl max-w-xs">
                    <p className="text-xs font-medium text-slate-300">Classrooms & Online</p>
                    <p className="text-sm font-bold text-white mt-0.5">• Nairobi • Kisumu • Eldoret • Narok • Mombasa</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[#0D2752] text-white py-6 border-y border-[#0367B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <CheckCircle className="text-[#2795D3] shrink-0" size={22} />
              <span className="text-sm font-medium tracking-wide">CEFR-Aligned</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Globe className="text-[#2795D3] shrink-0" size={22} />
              <span className="text-sm font-medium tracking-wide">Online & Physical Classes</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Briefcase className="text-[#2795D3] shrink-0" size={22} />
              <span className="text-sm font-medium tracking-wide">Job & Ausbildung Support</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="text-[#2795D3] shrink-0" size={22} />
              <span className="text-sm font-medium tracking-wide">Kisumu-Based, Global Reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0367B4]">Welcome</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2752] tracking-tight">
                Welcome to Lakeview German School
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                We offer CEFR-aligned German training from A1 to B2 — preparing you for jobs, Ausbildung, and further studies in Germany. Learn German. Open doors. Build your future.
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src="/lv-teacher.png"
                alt="Students in classroom setting"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-[#EAF4FB]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0367B4]">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2752] mt-1">
              What Sets Lakeview Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((feature, index) => (
              <div
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                key={index}
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF4FB] text-[#0367B4] flex items-center justify-center mb-5">
                  <feature.icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-[#0D2752] mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Snapshot */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0367B4]">Our Programs</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2752] mt-1">
              Choose Your Learning Format
            </h2>
            <p className="text-slate-600 mt-2">Online from anywhere, or in person in Kisumu</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <div
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-between hover:border-[#0367B4] transition-colors"
                key={index}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0367B4] text-white flex items-center justify-center mb-4">
                    {index === 0 ? <Globe size={24} /> : <MapPin size={24} />}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0D2752]">{program.title}</h3>
                  <div className="text-xl font-bold text-[#D6001C] mt-1">{program.price}</div>
                  <p className="text-sm font-medium text-slate-700 mt-4">{program.schedule}</p>
                  <p className="text-sm text-slate-500 mt-1">{program.location}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200">
                  <Link
                    href={program.link}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl border border-[#0D2752] text-[#0D2752] font-semibold hover:bg-[#0D2752] hover:text-white transition-colors"
                  >
                    <span>{program.cta}</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Our Reach Section */}
      {/* <section className="py-16 lg:py-24 bg-[#EAF4FB]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0367B4]">Our Reach</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2752] mt-1">
              Reaching Learners Across Kenya
            </h2>
            <p className="text-slate-600 mt-2">Wherever you are, Lakeview German School comes to you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm" key={index}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#EAF4FB] text-[#0367B4]">
                    <MapPin size={20} />
                  </div>
                  <h3 className="font-bold text-[#0D2752]">{location.name}</h3>
                </div>
                <p className="text-sm text-slate-600">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Student Life */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0367B4]">Student Life</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2752] mt-1">
              Join Our Growing Community
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <img
                  src={`/student-${item}.png`}
                  alt={`Student life photo ${item}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-[#0D2752] font-semibold hover:border-[#0367B4] hover:text-[#0367B4] transition-colors"
            >
              <span>See more of student life</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-[#0D2752] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Your Germany Journey Starts Here
          </h2>
          <p className="text-slate-300 font-medium">
            Call/WhatsApp: 0702 562 730 | 0103 390 866
          </p>
          <div>
            <a
              href="https://wa.me/254702562730?text=Hi,%20I'd%20like%20to%20know%20more%20about%20German%20classes%20at%20Lakeview%20German%20School"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#D6001C] text-white font-bold shadow-lg hover:bg-[#b50018] active:scale-95 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}