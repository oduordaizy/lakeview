'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ChevronDown,
    HelpCircle,
    MessageCircle,
    Mail,
    ArrowUpRight,
    Sparkles,
} from 'lucide-react';


import SiteFooter from './site-footer';
import { SiteHeader } from './site-header';
const faqItems = [
    {
        question: 'Do I need any German knowledge to start A1?',
        answer:
            'No. We welcome complete beginners at A1. Our A1 course is designed for students with no prior German experience, taking you from your first "Hallo" to basic everyday communication.',
    },
    {
        question: "What's the difference between online and physical classes?",
        answer:
            'Online classes are conducted via live video sessions, allowing you to learn from anywhere in Kenya including Narok and Mombasa. Physical classes are held in person at our Kisumu location on Oginga Odinga Street, offering face-to-face interaction with instructors.',
    },
    {
        question: 'Can I switch from online to physical mid-program?',
        answer:
            'Yes, we offer flexibility. You can switch between online and physical formats based on your schedule and preferences, subject to availability. Contact us to discuss your options.',
    },
    {
        question: 'Do you help with visa applications after B2?',
        answer:
            'Yes, we provide comprehensive support beyond language learning. Our "Beyond the Classroom" services include visa guidance, document preparation, and connections to help you navigate the process of moving to Germany.',
    },
    {
        question: 'What happens if I miss a class?',
        answer:
            'We understand that life happens. We offer make-up sessions and provide access to recorded lessons (for online classes) so you can catch up on missed content. Your instructor will also provide materials to help you stay on track.',
    },
    {
        question: 'How do I pay for classes?',
        answer:
            'We accept various payment methods including M-Pesa, bank transfers, and mobile money. Payment is made monthly at the beginning of each month. Contact us for specific payment details and instructions.',
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#0367B4] selection:text-white">

            {/* FAQ Accordion Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="mx-auto max-w-4xl 2xl:max-w-5xl px-4 sm:px-6 lg:px-8 2xl:px-12">

                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0367B4]">
                            Help & Support
                        </span>
                        <h2 className="mt-1 text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-[#0D2752] tracking-tight">
                            Got Questions? We Have Answers.
                        </h2>
                        <p className="mt-2 text-base 2xl:text-lg text-slate-600">
                            Can’t find what you’re looking for? Feel free to contact our administration directly.
                        </p>
                    </div>

                    {/* Interactive Accordion */}
                    <div className="space-y-4">
                        {faqItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                                        ? 'border-[#0367B4] bg-[#EAF4FB]/40 shadow-sm'
                                        : 'border-slate-200 bg-white hover:border-slate-300'
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFAQ(index)}
                                        className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-base sm:text-lg 2xl:text-xl font-bold text-[#0D2752] pr-4">
                                            {item.question}
                                        </span>
                                        <span
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${isOpen
                                                ? 'bg-[#0367B4] text-white rotate-180'
                                                : 'bg-slate-100 text-[#0D2752]'
                                                }`}
                                        >
                                            <ChevronDown className="h-5 w-5" />
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-700 text-sm sm:text-base 2xl:text-lg leading-relaxed border-t border-[#0367B4]/10 pt-4">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* Support & CTA Banner */}
            <section className="bg-[#EAF4FB] py-16 lg:py-20 border-t border-[#d7e5e9]">
                <div className="mx-auto max-w-5xl 2xl:max-w-6xl px-4 sm:px-6 lg:px-8 2xl:px-12 text-center">

                    <div className="mx-auto max-w-2xl 2xl:max-w-3xl space-y-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0367B4]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0367B4]">
                            <Sparkles className="h-3.5 w-3.5 text-[#0367B4]" />
                            Still Have Questions?
                        </span>
                        <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-[#0D2752] tracking-tight">
                            Our Team is Here to Help You
                        </h2>
                        <p className="text-base sm:text-lg 2xl:text-xl text-slate-600 leading-relaxed">
                            Reach out for guidance on course enrollment, exam scheduling, or customized payment options.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://wa.me/254702562730?text=Hi%2C%20I%20have%20a%20question%20about%20German%20classes%20at%20Lakeview%20German%20School"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#D6001C] px-8 py-4 text-base 2xl:text-lg font-bold text-white shadow-lg shadow-[#D6001C]/25 transition-all hover:bg-[#b50018] active:scale-[0.98]"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Chat on WhatsApp
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-[#0D2752] bg-white px-8 py-3.5 text-base 2xl:text-lg font-bold text-[#0D2752] shadow-sm transition-all hover:bg-[#0D2752] hover:text-white active:scale-[0.98]"
                        >
                            <Mail className="h-5 w-5" />
                            Contact Us Page
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                </div>
            </section>


        </main>
    );
}