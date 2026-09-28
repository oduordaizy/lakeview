'use client';

import { ArrowUpRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
    { value: 'A1–B2', label: 'CEFR-aligned levels' },
    { value: '8 months', label: 'Beginner to fluent' },
    { value: 'Online + Kisumu', label: 'Learn your way' },
];

const serif = { fontFamily: "'Fraunces', Georgia, serif" };

export function PremiumHero() {
    return (
        <section className="relative isolate overflow-hidden bg-[#0D2752] min-h-[92svh] flex items-center">
            {/* ---------- Background image (slow settle-in zoom) ---------- */}
            <motion.img
                src="/hero3.png"
                alt="Students learning German at Lakeview German School"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.4, ease: 'easeOut' }}
                className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
            />

            {/* ---------- Layered overlays for depth + legibility ---------- */}
            {/* Left-to-right navy wash keeps the text side dark, lets the photo breathe on the right */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#0D2752] via-[#0D2752]/85 to-[#0D2752]/10" />
            {/* Top + bottom vignette */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0D2752]/70 via-transparent to-[#0D2752]/90" />
            {/* Soft blue light bloom */}
            <div className="pointer-events-none absolute -top-32 -left-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#0367B4]/30 blur-[120px]" />
            {/* Fine grain */}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            {/* ---------- Content ---------- */}
            <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8 pt-16 sm:pt-24 pb-40 lg:pt-40 lg:pb-48">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-1.5 pl-2 pr-4 backdrop-blur-md"
                    >
                        <span className="flex h-6 items-center rounded-full bg-[#D6001C] px-2.5 text-[11px] font-semibold tracking-wide text-white">
                            NEW
                        </span>
                        <span className="text-sm text-slate-200">
                            Enrolling now — online & in Kisumu
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={serif}
                        className="mt-8 text-[2.75rem] sm:text-6xl lg:text-[5rem] font-medium leading-[1.02] tracking-tight text-white"
                    >
                        Speak German
                        <br />
                        with{' '}
                        <span className="italic bg-gradient-to-r from-[#2795D3] to-sky-200 bg-clip-text text-transparent">
                            confidence.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="mt-7 max-w-xl text-lg sm:text-xl font-light leading-relaxed text-slate-300"
                    >
                        CEFR-aligned training from A1 to B2 — preparing you for jobs,
                        Ausbildung, and further study in Germany.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/contact"
                            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#D6001C] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#D6001C]/30 transition-all hover:bg-[#b50018] hover:-translate-y-0.5"
                        >
                            Start your journey
                            <ArrowUpRight
                                size={18}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>
                        <Link
                            href="/programs"
                            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/15"
                        >
                            View programs & pricing
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.dl
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-x-10 border-t border-white/15 pt-8 max-w-2xl"
                    >
                        {stats.map((s) => (
                            <div key={s.label}>
                                <dt style={serif} className="text-2xl text-white">
                                    {s.value}
                                </dt>
                                <dd className="mt-1 text-xs tracking-wide text-slate-400">
                                    {s.label}
                                </dd>
                            </div>
                        ))}
                    </motion.dl>
                </div>
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-24 right-8 hidden lg:flex flex-col items-center gap-2 text-white/60">
                <span className="text-[11px] tracking-[0.25em] [writing-mode:vertical-rl]">
                    SCROLL
                </span>
                <ChevronDown size={16} className="animate-bounce" />
            </div>

            {/* Curved bottom edge into the next (white) section */}
            <div className="absolute inset-x-0 bottom-0 leading-none">
                <svg
                    viewBox="0 0 1440 90"
                    preserveAspectRatio="none"
                    className="block h-12 sm:h-16 lg:h-20 w-full"
                >
                    <path
                        d="M0,90 L0,50 C240,0 480,70 720,45 C960,20 1200,70 1440,25 L1440,90 Z"
                        fill="#FFFFFF"
                    />
                </svg>
            </div>
        </section>
    );
}

export default PremiumHero;