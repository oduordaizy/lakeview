'use client';

import { ArrowUpRight, Globe, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

const courseLevels = [
  { level: 'A1', duration: '2 months', focus: 'Foundations — everyday communication' },
  { level: 'A2', duration: '2 months', focus: 'Building confidence in conversation' },
  { level: 'B1', duration: '2 months', focus: 'Independent, work-ready German' },
  { level: 'B2', duration: '2 months', focus: 'Advanced fluency, exam & Ausbildung readiness' },
];

export default function ProgramsPage() {
  return (
    <main className="flex-1 bg-slate-50 font-sans selection:bg-[#0367B4] selection:text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 bg-[#0D2752] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0367B4]/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2795D3] mb-6 backdrop-blur-sm"
          >
            Programs & Pricing
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6"
          >
            Choose the Learning Format <br className="hidden md:block"/> That Fits Your Life
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Online from anywhere, or in person in Kisumu
          </motion.p>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="py-16 lg:py-24 relative z-20 -mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Online Classes Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-soft border border-slate-100 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#EAF4FB] text-[#0367B4] flex items-center justify-center mb-8">
                <Globe size={32} />
              </div>
              <h2 className="text-3xl font-extrabold text-[#0D2752] mb-2">Online Classes</h2>
              <div className="text-4xl font-black text-[#0367B4] mb-8">
                KES 10,000 <span className="text-lg font-medium text-slate-500">/month</span>
              </div>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-sm font-bold text-[#0D2752] mb-1">Daytime</div>
                  <div className="text-slate-600">9 AM – 2 PM</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-sm font-bold text-[#0D2752] mb-1">Evening</div>
                  <div className="text-slate-600">8 PM – 10 PM</div>
                </div>
              </div>
              
              <p className="text-sm text-slate-500 mb-6 font-medium">Live online classes — join from Narok, Mombasa, or anywhere</p>
              
              <a href="/contact" className="group flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#0D2752] text-white font-bold hover:bg-[#0367B4] transition-colors">
                Join Online Classes <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* Physical Classes Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-xl border-2 border-[#0367B4] flex flex-col relative hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute -top-4 right-8 bg-[#D6001C] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                Popular
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#0367B4] text-white flex items-center justify-center mb-8 shadow-glow">
                <MapPin size={32} />
              </div>
              <h2 className="text-3xl font-extrabold text-[#0D2752] mb-2">Physical Classes</h2>
              <div className="text-4xl font-black text-[#0367B4] mb-8">
                KES 12,000 <span className="text-lg font-medium text-slate-500">/month</span>
              </div>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 h-full flex flex-col justify-center">
                  <div className="text-sm font-bold text-[#0D2752] mb-1">Location</div>
                  <div className="text-slate-600">Oginga Odinga Street, Kisumu</div>
                </div>
              </div>
              
              <p className="text-sm text-slate-500 mb-6 font-medium">In-person classes with hands-on instructor support</p>
              
              <a href="/locations" className="group flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#D6001C] text-white font-bold hover:bg-[#b50018] shadow-lg shadow-[#D6001C]/20 transition-all">
                Visit Us in Kisumu <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Course Structure Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-[#0367B4] mb-2 block">Course Structure</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2752] mb-4">Your Path from A1 to B2</h2>
            <p className="text-lg text-slate-500">Total program: A1–B2 in 8 months</p>
          </div>
          
          <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
            <div className="grid grid-cols-12 bg-slate-50 p-6 border-b border-slate-200 text-sm font-bold text-[#0D2752] uppercase tracking-wider hidden md:grid">
              <div className="col-span-3">Level</div>
              <div className="col-span-3">Duration</div>
              <div className="col-span-6">Focus</div>
            </div>
            
            <div className="divide-y divide-slate-100">
              {courseLevels.map((course, index) => (
                <motion.div 
                  key={course.level}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 hover:bg-slate-50 transition-colors items-center"
                >
                  <div className="col-span-1 md:col-span-3 flex items-center gap-4">
                    <span className="md:hidden text-xs font-bold text-slate-400 uppercase tracking-wider">Level</span>
                    <span className="text-2xl font-black text-[#0367B4]">{course.level}</span>
                  </div>
                  <div className="col-span-1 md:col-span-3 flex items-center gap-4 text-slate-700 font-medium">
                    <span className="md:hidden text-xs font-bold text-slate-400 uppercase tracking-wider">Duration</span>
                    {course.duration}
                  </div>
                  <div className="col-span-1 md:col-span-6 flex items-center gap-4 text-slate-600">
                    <span className="md:hidden text-xs font-bold text-slate-400 uppercase tracking-wider">Focus</span>
                    {course.focus}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 p-6 rounded-2xl bg-[#EAF4FB] border border-[#0367B4]/20 text-center">
            <p className="text-[#0D2752] font-medium">Every level is CEFR-aligned, so your certificate is recognized for study, work, and visa applications in Germany.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2752] mb-6">Not Sure Which Class Fits You?</h2>
          <p className="text-lg text-slate-600 mb-10">Talk to us and we'll help you find the perfect fit</p>
          <a
            href="https://wa.me/254702562730?text=Hi, I'd like to know more about German classes at Lakeview German School"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg shadow-lg hover:bg-[#20b858] hover:-translate-y-1 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={24} /> Chat with us on WhatsApp
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
