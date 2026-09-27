'use client';

import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-[#0367B4] selection:text-white">
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
            Contact & Enroll
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            Start Your German <br className="hidden md:block"/> Journey Today
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Get in touch to enroll or learn more about our programs
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2752] mb-4">Get in Touch</h2>
                <p className="text-lg text-slate-600 mb-10">We're here to help you find the right German learning path.</p>

                <div className="space-y-6">
                  <a href="https://wa.me/254702562730?text=Hi, I'd like to know more about German classes at Lakeview German School" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#25D366]/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                      <MessageCircle size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">WhatsApp</p>
                      <p className="text-lg font-bold text-[#0D2752]">0702 562 730</p>
                    </div>
                    <ArrowUpRight className="text-slate-300 group-hover:text-[#25D366] transition-colors" />
                  </a>

                  <a href="tel:+254103390866" className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#0367B4]/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF4FB] text-[#0367B4] flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Call</p>
                      <p className="text-lg font-bold text-[#0D2752]">0103 390 866</p>
                    </div>
                    <ArrowUpRight className="text-slate-300 group-hover:text-[#0367B4] transition-colors" />
                  </a>

                  <a href="mailto:lakeviewgermanschool@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#0367B4]/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF4FB] text-[#0367B4] flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email</p>
                      <p className="text-base sm:text-lg font-bold text-[#0D2752] break-all">lakeviewgermanschool<br/>@gmail.com</p>
                    </div>
                    <ArrowUpRight className="text-slate-300 group-hover:text-[#0367B4] transition-colors" />
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF4FB] text-[#0367B4] flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Visit us</p>
                      <p className="text-lg font-bold text-[#0D2752]">Oginga Odinga Street, Kisumu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 hidden lg:block">
                <a
                  href="https://wa.me/254702562730?text=Hi, I'd like to know more about German classes at Lakeview German School"
                  className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg shadow-lg hover:bg-[#20b858] hover:-translate-y-1 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                  Chat with us on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Enrollment Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
                {sent ? (
                  <div className="text-center py-16 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-3xl font-extrabold text-[#0D2752] mb-4">Enrollment Request Received</h2>
                    <p className="text-lg text-slate-600 mb-8">Thanks for your interest! Our team will be in touch shortly to help you get started.</p>
                    <button type="button" className="text-[#0367B4] font-bold hover:underline flex items-center gap-1 mx-auto" onClick={() => setSent(false)}>
                      Submit another request <ArrowUpRight size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-10">
                      <span className="text-sm font-bold uppercase tracking-wider text-[#0367B4] mb-2 block">Enrollment Form</span>
                      <h2 className="text-3xl font-extrabold text-[#0D2752]">Tell Us About Yourself</h2>
                      <p className="text-slate-500 mt-2">Fill out this form and we'll help you find the perfect class</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-[#0D2752] mb-2">Full Name</label>
                        <input name="name" required placeholder="Your full name" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0367B4] focus:bg-white transition-all" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#0D2752] mb-2">Phone Number</label>
                        <input name="phone" type="tel" required placeholder="07XX XXX XXX" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0367B4] focus:bg-white transition-all" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-[#0D2752] mb-2">Preferred Format</label>
                          <select name="format" required defaultValue="" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0367B4] focus:bg-white transition-all text-slate-700">
                            <option value="" disabled>Select an option</option>
                            <option value="online">Online Classes</option>
                            <option value="physical">Physical Classes (Kisumu)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-[#0D2752] mb-2">Preferred Schedule</label>
                          <select name="schedule" required defaultValue="" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0367B4] focus:bg-white transition-all text-slate-700">
                            <option value="" disabled>Select an option</option>
                            <option value="daytime">Daytime (9 AM – 2 PM)</option>
                            <option value="evening">Evening (8 PM – 10 PM)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#0D2752] mb-2">Current Level</label>
                        <select name="level" required defaultValue="" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0367B4] focus:bg-white transition-all text-slate-700">
                          <option value="" disabled>Select an option</option>
                          <option value="beginner">Beginner (No prior knowledge)</option>
                          <option value="a1">A1 (Beginner)</option>
                          <option value="a2">A2 (Elementary)</option>
                          <option value="b1">B1 (Intermediate)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#0D2752] mb-2">Message (Optional)</label>
                        <textarea name="message" placeholder="Tell us about your goals or any questions..." rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0367B4] focus:bg-white transition-all resize-none" />
                      </div>

                      <button type="submit" className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#D6001C] text-white font-bold text-lg shadow-lg hover:bg-[#b50018] hover:-translate-y-1 transition-all">
                        Submit Enrollment Request <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
