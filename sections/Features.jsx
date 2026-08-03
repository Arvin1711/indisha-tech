import waveBg from "@/public/images/wavebg.png";

const featureItems = [
    {
        title: "Product Development",
        description:
            "We build scalable web and mobile products tailored to your business goals, from MVP launch to enterprise-grade platforms.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" style={{ color: "#f08c54" }}>
                <path
                    d="M4.5 14.5c0-1.9 1.6-3.5 3.5-3.5h.4c1.4 0 2.6-1.1 2.6-2.6 0-1.9 1.6-3.4 3.5-3.4h.8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
                <circle cx="7.2" cy="14.5" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="15.7" cy="7.1" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
    },
    {
        title: "Modern UI/UX Design",
        description:
            "Our design team creates intuitive, conversion-focused user experiences that make complex workflows simple and engaging.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" style={{ color: "#f08c54" }}>
                <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 15l2.2-2.2 2.3 2.3 3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M15.8 11.6h1.6v1.7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Cloud & API Integration",
        description:
            "We connect your product to third-party services and cloud infrastructure for secure, reliable, and high-performance operations.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" style={{ color: "#f08c54" }}>
                <path d="M5 8h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M7 12.1h10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M9 16h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M4.8 6.3l1.7 1.8 2.4-2.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.8 10.4l1.7 1.8 2.4-2.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Quality Assurance & Support",
        description:
            "From automated testing to ongoing maintenance, we ensure your software stays stable, secure, and ready for growth.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" style={{ color: "#f08c54" }}>
                <path d="M12 4.8a4.2 4.2 0 0 1 4.2 4.2c0 1.6-.7 2.6-1.8 3.7l-1.2 1.2h-2.4l-1.2-1.2C8.5 11.6 7.8 10.6 7.8 9A4.2 4.2 0 0 1 12 4.8z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 19.2a6.6 6.6 0 0 1-6.6-6.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="16.5" cy="8" r="1.3" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
    },
];

function FeatureCard({ item }) {
    return (
        <article className="relative rounded-2xl border border-white/2 bg-white/2 px-4 py-4 backdrop-blur-[6px]">
            <div className="mb-7 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/1 shadow-[0_8px_20px_-14px_rgba(0,0,0,0.55)]">
                {item.icon}
            </div>
            <h3 className="text-[16px] font-medium tracking-[-0.02em] text-white sm:text-[16px] md:text-[16px] lg:text-[16px]">
                {item.title}
            </h3>
            <p className="mt-3 text-sm text-[#e5e9ff] sm:text-sm">{item.description}</p>
        </article>
    );
}

export default function Features() {
    return (
        <section className="relative overflow-hidden bg-[rgb(20,25,38)] py-20 sm:py-24">
            <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
                style={{ backgroundImage: `url(${waveBg.src})`, mixBlendMode: "color-burn" }}
            />
            <div className="pointer-events-none absolute right-0 bottom-0 h-26 w-full bg-[radial-gradient(70%_130%_at_50%_100%,rgba(0,0,0,0.38)_0%,rgba(7,2,3,0)_70%)]" />

            <div className="relative mx-auto max-w-340 px-4 sm:px-8">
                <header className="flex flex-col gap-8 lg:flex-row">
                    <div className="flex w-fit items-center gap-5">
                        <h2 className="text-[28px] leading-[1.08] font-semibold tracking-[-0.03em] text-white sm:text-[32px] md:whitespace-nowrap md:text-[34px] lg:text-[34px] xl:text-[34px]">
                            aurumxai <span className="font-serif text-(--accent-color) italic">Core</span> Services
                        </h2>
                        <div className="flex items-center invisible">
                            <span className="relative top-0 -right-1 hidden h-px bg-(--accent-color) md:block md:w-20 lg:w-26" />
                            <span className="hidden leading-none text-(--accent-color) md:block md:text-[20px] lg:text-[24px]">→</span>
                        </div>
                    </div>

                    <p className="max-w-auto text-[14px] leading-[1.55] text-[#f2efee] sm:text-[14px] md:text-[16px] lg:text-[16px]">
                        End-to-end <span className="text-(--accent-color) italic">software services</span> built to help teams ship faster,
                        scale confidently, and deliver <span className="text-(--accent-color) italic">measurable business impact</span>.
                    </p>
                </header>

                <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {featureItems.map((item) => (
                        <FeatureCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
