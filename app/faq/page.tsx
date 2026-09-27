'use client';

import { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

const faqItems = [
  {
    question: 'Do I need any German knowledge to start A1?',
    answer: 'No. We welcome complete beginners at A1. Our A1 course is designed for students with no prior German experience, taking you from your first "Hallo" to basic everyday communication.',
  },
  {
    question: 'What\'s the difference between online and physical classes?',
    answer: 'Online classes are conducted via live video sessions, allowing you to learn from anywhere in Kenya including Narok and Mombasa. Physical classes are held in person at our Kisumu location on Oginga Odinga Street, offering face-to-face interaction with instructors.',
  },
  {
    question: 'Can I switch from online to physical mid-program?',
    answer: 'Yes, we offer flexibility. You can switch between online and physical formats based on your schedule and preferences, subject to availability. Contact us to discuss your options.',
  },
  {
    question: 'Do you help with visa applications after B2?',
    answer: 'Yes, we provide comprehensive support beyond language learning. Our "Beyond the Classroom" services include visa guidance, document preparation, and connections to help you navigate the process of moving to Germany.',
  },
  {
    question: 'What happens if I miss a class?',
    answer: 'We understand that life happens. We offer make-up sessions and provide access to recorded lessons (for online classes) so you can catch up on missed content. Your instructor will also provide materials to help you stay on track.',
  },
  {
    question: 'How do I pay for classes?',
    answer: 'We accept various payment methods including M-Pesa, bank transfers, and mobile money. Payment is made monthly at the beginning of each month. Contact us for specific payment details and instructions.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            FAQ
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            Frequently Asked <br className="hidden md:block"/> Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Find answers to common questions about our German classes and services
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 relative z-20 -mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 sm:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-[#0D2752] mb-4">Got Questions? We Have Answers.</h2>
              <p className="text-slate-500 text-lg">Can't find what you're looking for? Feel free to contact us directly.</p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border-[#0367B4] bg-[#EAF4FB]/30 shadow-md ring-4 ring-[#0367B4]/5'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between p-6 sm:p-8 text-left focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-lg sm:text-xl font-bold pr-4 transition-colors ${isOpen ? 'text-[#0367B4]' : 'text-[#0D2752] group-hover:text-[#0367B4]'}`}>
                        {item.question}
                      </span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                          isOpen
                            ? 'bg-[#0367B4] text-white rotate-180'
                            : 'bg-slate-100 text-[#0D2752] group-hover:bg-slate-200'
                        }`}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-8 sm:px-8 sm:pb-8 text-slate-600 text-base sm:text-lg leading-relaxed border-t border-slate-100/50 pt-4">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2752] mb-6">Still Have Questions?</h2>
          <p className="text-lg text-slate-600 mb-10">Our team is here to help you find the right path</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D6001C] text-white font-bold text-lg shadow-lg hover:bg-[#b50018] hover:-translate-y-1 transition-all">
            Contact Us <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
