'use client';

import { ArrowUpRight, HeartHandshake, Sparkles, BookOpen, Users, Trophy, Target, Compass, Zap, Shield, Sun, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

const coreValues = [
  { icon: Trophy, title: 'Excellence', description: 'Delivering the highest quality German language education' },
  { icon: Target, title: 'Discipline', description: 'Fostering commitment and consistent learning habits' },
  { icon: Shield, title: 'Integrity', description: 'Upholding honesty and ethical practices in all we do' },
  { icon: Users, title: 'Student-Centred', description: 'Tailoring education to individual learner needs' },
  { icon: Compass, title: 'Cultural Awareness', description: 'Embracing German culture and cross-cultural understanding' },
  { icon: Zap, title: 'Innovation', description: 'Continuously improving our teaching methods' },
  { icon: HeartHandshake, title: 'Community', description: 'Building a supportive learning environment for all' },
  { icon: Sun, title: 'Results', description: 'Measuring success through student achievements' },
];

export default function AboutPage() {
  return (
    <main className="flex-1 bg-slate-50 font-sans selection:bg-[#0367B4] selection:text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 bg-[#0D2752] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0367B4]/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D6001C]/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2795D3] mb-6 backdrop-blur-sm"
          >
            About Us
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Our Story, Vision, <br className="hidden md:block"/> and Values
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Empowering learners to speak German with confidence since our founding
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-[#0367B4] mb-2 block">Our Story</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2752] mb-6">Why Lakeview <br/> German School</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Lakeview German School was founded with a clear mission: to make quality German language education accessible to learners in Kenya and beyond. We chose Kisumu as our home base because of its strategic location and vibrant community, but our reach extends far beyond through our online programs.
                </p>
                <p>
                  We believe that learning German is more than acquiring a new language—it's opening doors to education, employment, cultural exchange, and new opportunities. Our learner-centred approach combines experienced instructors with practical, real-world applications to ensure every student achieves their goals.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0367B4]/20 to-transparent rounded-3xl blur-2xl"></div>
              <img src="/lv-teacher.png" alt="Lakeview Classroom" className="relative rounded-[2rem] shadow-2xl object-cover h-[400px] w-full border-4 border-white" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-soft border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe size={120} />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF4FB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0367B4] mb-6">
                Our Vision
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0D2752] mb-4">To Become a Leading German Institution in Africa</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Connecting learners to global opportunities through quality language education, cultural understanding, and professional development.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0D2752] text-white p-10 lg:p-12 rounded-[2.5rem] shadow-soft relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-white">
                <BookOpen size={120} />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white mb-6">
                Our Mission
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4">Providing Accessible, High-Quality Education</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                To provide accessible, high-quality and practical German language education that equips learners with the communication skills, confidence, and knowledge needed to succeed in academic, professional, and everyday environments in Germany and the wider German-speaking world.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <span className="text-sm font-bold uppercase tracking-wider text-[#0367B4] mb-2 block">Core Values</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2752]">What Guides Us</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#0367B4] mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0D2752] mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="py-20 bg-[#0367B4] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight"
          >
            Learn German. Open Doors. Build Your Future.
          </motion.h2>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2752] mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-slate-600 mb-10">Join our community of learners and open doors to your future</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D6001C] text-white font-bold text-lg shadow-lg hover:bg-[#b50018] hover:-translate-y-1 transition-all">
            Get in Touch <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
