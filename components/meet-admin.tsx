import Image from "next/image";

/**
 * Brand Color Palette:
 *   --primary-navy: #0D2752
 *   --primary-blue: #0367B4
 *   --secondary-blue: #2795D3
 *   --accent-red: #D6001C
 *   --white: #FDFDFD
 *   --pale-blue: #EAF4FB
 *   --line: #d7e5e9
 */

const admin = {
    name: "Fredrick Ouma",
    title: "School Administrator",
    photo: "/fred.jpg",
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
        <section className="relative overflow-hidden bg-[#EAF4FB] py-16 md:py-24 2xl:py-32">
            {/* Soft background subtle blur effect */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 2xl:h-[600px] 2xl:w-[600px] rounded-full bg-[#0367B4]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 2xl:h-[600px] 2xl:w-[600px] rounded-full bg-[#2795D3]/10 blur-3xl" />

            <div className="relative mx-auto max-w-5xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8 2xl:px-12">

                {/* Section Header */}
                <div className="mb-10 text-center md:mb-14 2xl:mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#0367B4]/20 bg-[#FDFDFD] px-3.5 py-1 text-xs 2xl:text-sm font-semibold uppercase tracking-wider text-[#0367B4]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D6001C]" />
                        Student Services & Administration
                    </div>
                    <h2 className="mt-3 text-3xl sm:text-4xl 2xl:text-5xl font-bold tracking-tight text-[#0D2752]">
                        Meet Our Administrator
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl 2xl:max-w-2xl text-base 2xl:text-xl text-[#0D2752]/75">
                        Dedicated operational leadership ensuring your learning journey runs smoothly from day one.
                    </p>
                </div>

                {/* Adaptive Single Admin Spotlight Card */}
                <div className="overflow-hidden rounded-2xl border border-[#d7e5e9] bg-[#FDFDFD] shadow-xl shadow-[#0D2752]/5 transition-all duration-300">
                    <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">

                        {/* Image Column: FULL Uncropped Photo on ALL Screens */}
                        <div className="relative min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] 2xl:min-h-[600px] w-full lg:col-span-5 bg-[#0D2752]/5 flex items-center justify-center p-4 sm:p-6">
                            <div className="relative w-full h-full min-h-[340px] sm:min-h-[400px] lg:min-h-[460px] 2xl:min-h-[540px]">
                                <Image
                                    src={admin.photo}
                                    alt={admin.name}
                                    fill
                                    priority
                                    className="object-contain"
                                    sizes="(min-width: 1536px) 35vw, (min-width: 1024px) 40vw, 100vw"
                                />
                            </div>

                            {/* Mobile overlay title (bottom of photo canvas) */}
                            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#0D2752]/90 backdrop-blur-md p-3 text-[#FDFDFD] lg:hidden">
                                <span className="inline-block rounded bg-[#D6001C] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide">
                                    {admin.title}
                                </span>
                                <h3 className="mt-0.5 text-xl font-bold">{admin.name}</h3>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10 2xl:p-12">
                            <div>
                                {/* Desktop Header */}
                                <div className="hidden lg:block">
                                    <span className="inline-block rounded border border-[#0367B4]/20 bg-[#EAF4FB] px-3 py-1 text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#0367B4]">
                                        {admin.title}
                                    </span>
                                    <h3 className="mt-2 text-3xl 2xl:text-4xl font-bold tracking-tight text-[#0D2752]">
                                        {admin.name}
                                    </h3>
                                </div>

                                {/* Main Bio */}
                                <p className="mt-4 text-base 2xl:text-xl leading-relaxed text-[#0D2752]/85">
                                    {admin.bio}
                                </p>

                                {/* Key Focus Badges */}
                                <div className="mt-6 2xl:mt-8 border-t border-[#d7e5e9] pt-6 2xl:pt-8">
                                    <h4 className="text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#0367B4]">
                                        How Fredrick Can Help You:
                                    </h4>
                                    <div className="mt-3 flex flex-wrap gap-2 2xl:gap-3">
                                        {admin.badges.map((badge) => (
                                            <span
                                                key={badge}
                                                className="inline-flex items-center gap-1.5 rounded-md border border-[#d7e5e9] bg-[#EAF4FB] px-3 py-1.5 2xl:px-4 2xl:py-2 text-xs 2xl:text-sm font-semibold text-[#0D2752]"
                                            >
                                                <svg
                                                    className="h-3.5 w-3.5 2xl:h-4 2xl:w-4 text-[#0367B4]"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2.5}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Call To Action Box */}
                            <div className="mt-8 2xl:mt-10 rounded-xl border border-[#d7e5e9] bg-[#EAF4FB]/60 p-4 2xl:p-6 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm 2xl:text-base font-semibold text-[#0D2752]">
                                        Have questions about classes or enrollment?
                                    </p>
                                    <p className="text-xs 2xl:text-sm text-[#0D2752]/70 mt-0.5">
                                        Get direct administrative support today.
                                    </p>
                                </div>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#D6001C] px-5 py-2.5 2xl:px-7 2xl:py-3.5 text-sm 2xl:text-base font-semibold text-[#FDFDFD] shadow-md transition-all hover:bg-[#b50017] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D6001C] focus:ring-offset-2 sm:mt-0 sm:w-auto shrink-0"
                                >
                                    <svg
                                        className="h-4 w-4 2xl:h-5 2xl:w-5 fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12.031 2c-5.514 0-9.999 4.486-9.999 10 0 1.763.459 3.48 1.332 5l-1.364 4.981 5.101-1.338c1.467.8 3.12 1.22 4.802 1.22 5.514 0 10-4.486 10-10s-4.486-10-10-10zm0 18.271c-1.517 0-3.003-.408-4.302-1.182l-.309-.184-3.197.838.853-3.115-.202-.322c-.848-1.353-1.296-2.915-1.296-4.506 0-4.562 3.711-8.271 8.271-8.271s8.271 3.709 8.271 8.271-3.709 8.271-8.271 8.271z" />
                                    </svg>
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}