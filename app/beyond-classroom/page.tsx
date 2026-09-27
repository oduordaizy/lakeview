'use client';

import { ArrowUpRight, Briefcase, FileText, MessageCircle, ShieldCheck, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

const supportServices = [
  {
    icon: Briefcase,
    title: 'Job & Ausbildung',
    description: 'Guidance finding and applying to opportunities in Germany',
  },
  {
    icon: FileText,
    title: 'CV & Letters',
    description: 'German-standard application documents that stand out',
  },
  {
    icon: MessageCircle,
    title: 'Interview Prep',
    description: 'Mock interviews and confidence coaching',
  },
  {
    icon: ShieldCheck,
    title: 'Exam Guidance',
    description: 'Prepping for official CEFR exams',
  },
  {
    icon: Users,
    title: 'Employer Connections',
    description: 'Network access to German institutions and employers',
  },
  {
    icon: Globe,
    title: 'Visa Guidance',
    description: 'Navigating the paperwork for your move to Germany',
  },
];

export default function BeyondClassroomPage() {
  return (
    <main className="flex-1 bg-slate-50 font-sans selection:bg-[#0367B4] selection:text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 bg-[#0D2752] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0367B4]/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2795D3] mb-6 backdrop-blur-sm"
          >
            Beyond the Classroom
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Learning German is Step One. <br className="hidden md:block"/> We Walk With You All the Way.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Comprehensive support services to help you succeed in your German journey
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 lg:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2752] mb-8"
          >
            More Than Just Language Classes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed"
          >
            At Lakeview German School, we understand that learning German is just the beginning of your journey. That's why we offer comprehensive support services designed to help you navigate every step from your first class to your new life in Germany. Our experienced team provides personalized guidance on job applications, document preparation, interview skills, and visa processes.
          </motion.p>
        </div>
      </section>

      {/* Support Services Grid */}
      <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0367B4]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <span className="text-sm font-bold uppercase tracking-wider text-[#0367B4] mb-2 block">Our Support Services</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0D2752] mb-4">How We Help You</h2>
            <p className="text-lg text-slate-500">Comprehensive guidance for your journey to Germany</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-soft hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#EAF4FB] text-[#0367B4] flex items-center justify-center mb-6 group-hover:bg-[#0367B4] group-hover:text-white transition-colors duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2752] mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-[#0D2752] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <span className="text-sm font-bold uppercase tracking-wider text-[#2795D3] mb-2 block">Your Journey</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">From Classroom to Career</h2>
            <p className="text-lg text-slate-300">A clear pathway from learning German to achieving your goals</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { title: 'Learn German', text: 'Complete A1-B2 CEFR-aligned courses with our experienced instructors' },
                { title: 'Get Certified', text: 'Prepare for and pass official CEFR exams recognized in Germany' },
                { title: 'Build Your Profile', text: 'Create German-standard CV and motivation letters with our guidance' },
                { title: 'Apply & Interview', text: 'Get job/Ausbildung placement support and interview preparation' },
                { title: 'Visa & Move', text: 'Navigate visa requirements and prepare for your move to Germany' },
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-6 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#0367B4] text-white font-black text-xl flex items-center justify-center border-4 border-[#0D2752] shadow-glow">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-300 text-lg">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2752] mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-slate-600 mb-10">Let us help you achieve your goals in Germany</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D6001C] text-white font-bold text-lg shadow-lg hover:bg-[#b50018] hover:-translate-y-1 transition-all">
            Get in Touch <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
