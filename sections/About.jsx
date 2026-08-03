import Image from "next/image";
const serviceCards = [
    {
        title: "Full-Stack Development",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#f08c54]">
                <path d="M8 8h8M8 12h6M8 16h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
    },
    {
        title: "UI/UX & Product Design",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#f08c54]">
                <path d="M7 16.2l2.8-2.8 2.2 2.2 4.2-4.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.8 11.4h2.4v2.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7" cy="7" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
    },
];

const stats = [
    { value: "320+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "12+", label: "Years of Experience" },
];

export default function About() {
    return (
        <section className="about-section relative overflow-hidden bg-[#141926] px-4 py-22 sm:px-8 sm:py-28 lg:py-36">
            <div className="pointer-events-none absolute -left-12 bottom-10 hidden h-52 w-52 rounded-full border border-white/10 sm:block" />
            <div className="pointer-events-none absolute -left-4 bottom-3 hidden h-34 w-34 rounded-full border border-white/10 sm:block" />
            <div className="pointer-events-none absolute right-8 bottom-10 hidden h-20 w-20 rounded-full border border-white/10 sm:block" />
            <div className="pointer-events-none absolute right-13 bottom-15 hidden h-10 w-10 rounded-full border border-white/10 sm:block" />

            <div className="relative mx-auto grid max-w-340 gap-12 sm:gap-22 lg:grid-cols-[1.02fr_1.5fr] lg:items-center lg:gap-26">
                <div className="relative">
                    <div className="absolute right-2 top-2 grid h-24 w-24 place-items-center rounded-full border border-white/55 bg-[#141926] text-white shadow-[0_18px_40px_-24px_rgba(0,0,0,0.55)] sm:-right-6 sm:-top-6 sm:h-30 sm:w-30 lg:-right-12 lg:-top-8 lg:h-36 lg:w-36">

                        <svg
                            viewBox="0 0 140 140"
                            className="absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite]"
                            aria-hidden="true"
                        >
                            <defs>
                                <path
                                    id="aboutRingPath"
                                    d="M70,70 m-55,0 a55,55 0 1,1 110,0 a55,55 0 1,1 -110,0"
                                />
                            </defs>

                            <text
                                fill="currentColor"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="text-[9px] font-extralight tracking-[0.14em] uppercase sm:text-[10px] lg:text-[11px]"
                            >
                                <textPath href="#aboutRingPath" startOffset="50%" textAnchor="middle">
                                    • About aurumxai • About aurumxai • About aurumxai
                                </textPath>
                            </text>
                        </svg>

                        {/* Center Arrow */}
                        <span className="absolute flex items-center justify-center text-lg sm:text-xl">
                            →</span>

                    </div>
                    <div className="overflow-hidden rounded-[26px] shadow-[0_22px_56px_-34px_rgba(3,11,44,0.72)]">
                        <div className="relative h-80 w-full sm:h-112.5">
                        <Image
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                            alt="Engineer working at a workstation"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                    </div>


                    <div className="absolute -bottom-7 -right-1 w-[58%] overflow-hidden rounded-3xl border-6 border-[#f4f7ff] shadow-[0_22px_46px_-30px_rgba(0,0,0,0.55)] sm:-right-4 sm:-bottom-8 sm:w-[52%] sm:border-8 lg:-right-14">
                        <div className="relative h-40 w-full sm:h-52">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                                alt="Team collaborating on a laptop"
                                fill
                                sizes="(max-width: 768px) 58vw, 400px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="pb-10 sm:pb-18 lg:pb-2">
                    <p className="inline-flex items-center gap-4 text-[10px] font-semibold tracking-[0.09em] text-[#e8ecff] uppercase sm:text-[11px]">
                        <span aria-hidden="true">←</span>
                        About aurumxai
                        <span aria-hidden="true">→</span>
                    </p>

                    <h2 className="mt-5 max-w-146 text-[24px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[32px] lg:text-[36px]">
                        We Build Software That Scales With Your Business
                    </h2>

                    <p className="mt-6 max-w-165 text-sm text-[#e5e9ff] sm:text-sm">
                        aurumxai is a software development studio that partners with startups and enterprises to design, build, and scale digital products. We bring together product thinking, clean engineering, and a culture of ownership to ship software that works — on time and on spec.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4">
                        {serviceCards.map((card, index) => (
                            <article key={card.title} className="flex items-center gap-4 rounded-2xl border border-white/2 bg-white/2 px-4 py-4 backdrop-blur-[2px] sm:px-5">
                                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/1 shadow-[0_8px_20px_-14px_rgba(0,0,0,0.55)]">
                                    {card.icon}
                                </div>
                                <h3 className={`font-medium leading-tight text-white ${index === 1 ? "text-[14px]" : "text-[14px]"}`}>{card.title}</h3>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-8">
                        {stats.map((item) => (
                            <div key={item.label} className="px-1 py-2 sm:px-0 sm:py-0">
                                <p className="text-[24px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[30px]">{item.value}</p>
                                <p className="mt-2 text-xs text-[#e0e6ff] sm:text-xs">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
