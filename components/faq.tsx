'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ChevronDown,
    MessageCircle,
    Mail,
    ArrowUpRight,
    Sparkles,
} from 'lucide-react';

const faqItems = [
    {
        question: 'Do I need any German knowledge to start A1?',
        answer: 'No. We welcome complete beginners at A1. Our A1 course is designed for students with no prior German experience, taking you from your first "Hallo" to basic everyday communication.',
    },
    {
        question: "What's the difference between online and physical classes?",
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
        <div className="bg-slate-50 relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

            <section className="py-24 lg:py-32 relative z-10">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    
                    <div className="mb-16 text-center">
                        <span className="inline-block rounded-full bg-white border border-slate-200 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-[#0D2752] mb-4 shadow-sm">
                            Support
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0D2752] tracking-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Got questions? We have answers.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                        isOpen
                                            ? 'border-[#0367B4] bg-white shadow-soft ring-4 ring-[#0367B4]/5'
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

                                    <div 
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="px-6 pb-8 sm:px-8 sm:pb-8 text-slate-600 text-base sm:text-lg leading-relaxed border-t border-slate-100 pt-4">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* Premium CTA Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#0D2752] to-[#0367B4] py-20 lg:py-24 mx-4 sm:mx-8 mb-16 rounded-[2.5rem] shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md mb-6">
                        <Sparkles className="h-4 w-4" />
                        Still Have Questions?
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
                        Our Team is Here to Help
                    </h2>
                    <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
                        Reach out for guidance on course enrollment, exam scheduling, or customized payment options.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://wa.me/254702562730?text=Hi%2C%20I%20have%20a%20question%20about%20German%20classes%20at%20Lakeview%20German%20School"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-bold text-[#0D2752] shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            <MessageCircle className="h-5 w-5 text-[#25D366]" />
                            Chat on WhatsApp
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-8 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                        >
                            <Mail className="h-5 w-5" />
                            Contact Us Page
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}