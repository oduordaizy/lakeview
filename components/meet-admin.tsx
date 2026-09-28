import Image from "next/image";
import { CheckCircle2, MessageCircle } from "lucide-react";

const admin = {
    name: "Fredrick Ouma",
    title: "School Administrator",
    photo: "/frednew.jpg",
    bio: "Fredrick oversees day-to-day operations at Lakeview German School, supporting students from enrollment through every stage of their learning journey — including class scheduling, exam coordination, and guidance on Ausbildung and job application processes.",
    badges: [
        "Ausbildung & Visa Guidance",
        "Goethe & TELC Exam Coordination",
        "Enrollment & Class Schedules",
        "Bilingual Student Support",
    ],
};

export default function TeamSection() {
    const whatsappUrl =
        "https://wa.me/254702562730?text=" +
        encodeURIComponent(
            "Hi, I'd like to know more about German classes at Lakeview German School"
        );

    return (
        <section className="relative overflow-hidden bg-white py-24 md:py-32">
            <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#EAF4FB] to-transparent blur-3xl opacity-50" />

            <div className="relative mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">

                    {/* Content Column (Left on Desktop) */}
                    <div className="flex flex-col lg:col-span-6 lg:pr-8 order-2 lg:order-1">
                        <div className="mb-6">
                            <span className="inline-block rounded-full bg-[#EAF4FB] px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-[#0367B4]">
                                Meet Our Administrator
                            </span>
                            <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0D2752]">
                                {admin.name}
                            </h2>
                            <p className="mt-2 text-xl font-medium text-[#2795D3]">
                                {admin.title}
                            </p>
                        </div>

                        <p className="text-lg leading-relaxed text-slate-600">
                            {admin.bio}
                        </p>

                        <div className="mt-10 pt-10 border-t border-slate-100">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0D2752] mb-6">
                                Areas of Expertise
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {admin.badges.map((badge) => (
                                    <div key={badge} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#0367B4]" />
                                        <span className="text-base font-semibold text-slate-700">
                                            {badge}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <p className="text-base font-bold text-[#0D2752]">
                                    Have enrollment questions?
                                </p>
                                <p className="text-sm text-slate-500 mt-1">
                                    Get direct administrative support.
                                </p>
                            </div>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg transition-all"
                            >
                                <MessageCircle className="h-5 w-5 fill-current" />
                                WhatsApp Fredrick
                            </a>
                        </div>
                    </div>

                    {/* Image Column (Right on Desktop) */}
                    <div className="relative w-full lg:col-span-6 order-1 lg:order-2">
                        <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:ml-auto">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0367B4]/20 to-[#D6001C]/10 rounded-[2.5rem] blur-2xl transform rotate-3"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100">
                                <Image
                                    src={admin.photo}
                                    alt={admin.name}
                                    fill
                                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}