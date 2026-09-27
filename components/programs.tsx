import Link from 'next/link';
import { Globe, MapPin, ArrowUpRight, Clock, Calendar } from 'lucide-react';

const programs = [
    {
        title: 'Online Classes',
        price: 'KSh 15,000',
        period: '/ month',
        schedule: 'Flexible Evening & Weekend Batches',
        location: 'Live Interactive Zoom / Google Meet',
        cta: 'View Online Schedule',
        link: '/programs#online',
    },
    {
        title: 'Physical Campus',
        price: 'KSh 18,000',
        period: '/ month',
        schedule: 'Morning & Afternoon Weekday Sessions',
        location: 'Kisumu Campus, Oginga Odinga Street',
        cta: 'View Campus Batches',
        link: '/programs#physical',
    },
];

export function ProgramsSnapshot() {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-[#0367B4]/20 blur-[100px]" />
            <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#D6001C]/10 blur-[100px]" />

            <div className="relative z-20 mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="inline-block rounded-full border border-[#0367B4]/30 bg-[#0367B4]/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-[#2795D3]">
                        Our Programs
                    </span>
                    <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                        Choose Your Learning Format
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        World-class German education delivered exactly how you need it.
                    </p>
                </div>

                {/* Program Cards Grid */}
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 glass-dark p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#0367B4]/50 hover:shadow-glow overflow-hidden"
                        >
                            {/* Card Background Gradient on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0367B4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-[#2795D3] group-hover:bg-[#0367B4] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                                        {index === 0 ? <Globe size={28} /> : <MapPin size={28} />}
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl sm:text-3xl font-extrabold text-white">{program.price}</div>
                                        <div className="text-sm font-medium text-slate-400">{program.period}</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-3xl font-extrabold text-white mb-6">
                                    {program.title}
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-[#2795D3] shrink-0 mt-0.5" />
                                        <p className="text-base text-slate-300">
                                            {program.schedule}
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-[#2795D3] shrink-0 mt-0.5" />
                                        <p className="text-base text-slate-300">
                                            {program.location}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
                                <Link
                                    href={program.link}
                                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 py-4 px-6 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#0D2752] active:scale-[0.98]"
                                >
                                    <span>{program.cta}</span>
                                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}