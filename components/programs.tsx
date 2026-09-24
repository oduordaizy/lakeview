import Link from 'next/link';
import { Globe, MapPin, ArrowUpRight } from 'lucide-react';

const programs = [
    {
        title: 'Online Classes',
        price: 'KSh 15,000 / month',
        schedule: 'Flexible Evening & Weekend Batches',
        location: 'Live Interactive Zoom / Google Meet',
        cta: 'View Online Schedule',
        link: '/programs#online',
    },
    {
        title: 'Physical / In-Person',
        price: 'KSh 18,000 / month',
        schedule: 'Morning & Afternoon Weekday Sessions',
        location: 'Kisumu Campus, Oginga Odinga Street',
        cta: 'View Campus Batches',
        link: '/programs#physical',
    },
];

export function ProgramsSnapshot() {
    return (
        <section
            className="relative overflow-hidden bg-slate-100 py-28 sm:py-36 lg:py-40 2xl:py-48"
            style={{
                // Top edge: Dips down in center (U-shape)
                // Bottom edge: Arches up in center (Inverted U-shape)
                clipPath: 'polygon(0% 40px, Q(50% 100px), 100% 40px, 100% calc(100% - 40px), Q(50% calc(100% - 100px)), 0% calc(100% - 40px))'
                    || 'path("M 0,50 Q 50% 120 100% 50 L 100% calc(100% - 50px) Q 50% calc(100% - 120px) 0 calc(100% - 50px) Z")'
            }}
        >
            {/* Fallback & cross-browser pure SVG Clip Path */}
            <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                <defs>
                    <clipPath id="top-bottom-u-curves" clipPathUnits="objectBoundingBox">
                        {/* Top U-curve dips to Y=0.08, Bottom Inverted U-curve arches to Y=0.92 */}
                        <path d="M 0,0.06 Q 0.5,0.12 1,0.06 L 1,0.94 Q 0.5,0.88 0,0.94 Z" />
                    </clipPath>
                </defs>
            </svg>

            <div
                className="w-full h-full"
                style={{ clipPath: 'url(#top-bottom-u-curves)' }}
            >
                {/* Background Ambient Blur Blobs */}
                <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 2xl:h-[600px] 2xl:w-[600px] rounded-full bg-[#0367B4]/15 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 2xl:h-[600px] 2xl:w-[600px] rounded-full bg-[#2795D3]/20 blur-3xl" />

                {/* Main Content Container */}
                <div className="relative z-20 mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8 2xl:px-12 my-8">

                    {/* Section Header */}
                    <div className="mx-auto mb-12 lg:mb-16 2xl:mb-20 max-w-2xl 2xl:max-w-3xl text-center">
                        <span className="inline-block rounded-full bg-white px-4 py-1 text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#0367B4] shadow-sm">
                            Our Programs
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl 2xl:text-5xl font-extrabold tracking-tight text-[#0D2752]">
                            Choose Your Learning Format
                        </h2>
                        <p className="mt-2 text-base sm:text-lg 2xl:text-xl text-slate-600">
                            Online from anywhere, or in person in Kisumu
                        </p>
                    </div>

                    {/* Program Cards Grid */}
                    <div className="mx-auto grid max-w-4xl 2xl:max-w-5xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 2xl:p-10 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0367B4] hover:shadow-2xl hover:shadow-[#0367B4]/15"
                            >
                                <div>
                                    {/* Icon Box */}
                                    <div className="mb-6 flex h-12 w-12 2xl:h-14 2xl:w-14 items-center justify-center rounded-xl bg-[#0367B4] text-white shadow-md shadow-[#0367B4]/25 transition-transform duration-300 group-hover:scale-110">
                                        {index === 0 ? (
                                            <Globe className="h-6 w-6 2xl:h-7 2xl:w-7" />
                                        ) : (
                                            <MapPin className="h-6 w-6 2xl:h-7 2xl:w-7" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl 2xl:text-3xl font-extrabold text-[#0D2752] group-hover:text-[#0367B4] transition-colors">
                                        {program.title}
                                    </h3>
                                    <div className="mt-1.5 text-xl 2xl:text-2xl font-bold text-[#D6001C]">
                                        {program.price}
                                    </div>

                                    <div className="mt-4 space-y-1">
                                        <p className="text-sm sm:text-base 2xl:text-lg font-semibold text-slate-700">
                                            {program.schedule}
                                        </p>
                                        <p className="text-xs sm:text-sm 2xl:text-base text-slate-500">
                                            {program.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <Link
                                        href={program.link}
                                        className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#0D2752] bg-transparent py-3 px-5 text-sm sm:text-base 2xl:text-lg font-bold text-[#0D2752] transition-all duration-200 hover:bg-[#0D2752] hover:text-white active:scale-[0.98]"
                                    >
                                        <span>{program.cta}</span>
                                        <ArrowUpRight className="h-4 w-4 2xl:h-5 2xl:w-5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}