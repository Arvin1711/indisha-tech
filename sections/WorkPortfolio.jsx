import { ChevronsLeftRightEllipsis, DatabaseSearch, Rotate3d, TabletSmartphone, WandSparkles } from "lucide-react";

const tabs = [
    "Product Discovery",
    "UI/UX Design",
    "App Development",
    "Web Platform",
];

const iconMap = {
    "Product Discovery": (
        <DatabaseSearch />
    ),
    "UI/UX Design": (
        <WandSparkles />
    ),
    "App Development": (
        <TabletSmartphone />
    ),
    "Web Platform": (
        <ChevronsLeftRightEllipsis />
    ),
};

function TabIcon({ active = false, tab }) {
    const icon = iconMap[tab];

    return (
        <div
            className={`mx-auto grid h-14 w-14 place-items-center rounded-full transition-all duration-300 sm:h-16 sm:w-16 ${active
                ? "bg-white shadow-[0_10px_28px_-16px_rgba(33,62,182,0.55)]"
                : "bg-white shadow-[0_8px_22px_-18px_rgba(23,33,68,0.4)] group-hover:shadow-[0_12px_30px_-16px_rgba(33,62,182,0.55)]"
                }`}
        >
            <span className="text-[#3550f6]">{icon}</span>
        </div>
    );
}

function Stat({ title }) {
    return (
        <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#eef2ff] text-[#3550f6]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                    <path d="M4 16h16M6.5 11h4M6.5 8h8M14 11h3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            </div>
            <p className="text-[14px] font-semibold leading-tight text-[#101522] sm:text-[16px]">{title}</p>
        </div>
    );
}

export default function WorkPortfolio() {
    return (
        <section className="bg-white px-4 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-7xl">
                <header className="text-center">
                    <p className="inline-flex items-center gap-4 text-[11px] font-medium tracking-[0.08em] text-black sm:text-[12px]">
                        <span aria-hidden="true">&larr;</span>
                        SOFTWARE PROJECT SHOWCASE
                        <span aria-hidden="true">&rarr;</span>
                    </p>
                    <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-[#101526] sm:text-[32px] lg:text-[36px]">
                        Software That Delivers Results
                    </h2>
                </header>

                <div className="relative z-10 m-auto mt-14 grid max-w-272 grid-cols-2 gap-x-3 gap-y-8 sm:mt-20 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-4 lg:gap-y-4">
                    {tabs.map((tab, index) => {
                        const active = index === 2;
                        return (
                            <div
                                key={tab}
                                className={`group rounded-2xl border px-2 pb-6 pt-1 text-center transition-all duration-300 sm:px-3 sm:pb-8 ${active
                                    ? "border-[#3e5af6] bg-[#3e5af6]"
                                    : "border-[#dde2f5] bg-[#fbfcff] hover:border-[#3e5af6] hover:bg-[#3e5af6]"
                                    }`}
                            >
                                <div className="-mt-7 sm:-mt-8">
                                    <TabIcon active={active} tab={tab} />
                                </div>
                                <p className={`mt-6 text-[13px] font-semibold leading-tight transition-colors sm:mt-8 sm:text-[15px] ${active ? "text-white" : "text-[#121826] group-hover:text-white"}`}>
                                    {tab}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <article className="relative -mt-5 rounded-[26px] bg-[#eceff9] px-5 pb-18 pt-20 sm:px-8 lg:px-10 lg:pb-20 lg:pt-22">
                    <div className="grid gap-6 lg:grid-cols-[1fr_1.95fr] lg:items-stretch">
                        <div className="overflow-hidden rounded-[22px] border-6 border-white shadow-[0_12px_30px_-22px_rgba(14,24,62,0.5)]">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1300&q=80"
                                alt="Portfolio project preview"
                                className="h-full min-h-72 w-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        <div className="rounded-[20px] bg-white lg:block" style={{ overflow: 'hidden' }}>
                            {/* <div className="grid gap-6 lg:grid-cols-[1fr_230px] lg:items-stretch"> */}
                            <div>
                                <div className="px-6 py-7 sm:px-8">
                                    <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[#101522] sm:text-[22px]">
                                        We design Project
                                    </h3>
                                    <p className="mt-3 text-[14px] leading-[1.7] text-[#62647b] sm:text-[14px]">
                                        We design and deliver high-performance digital products from discovery to deployment, helping teams launch faster and scale with confidence. Our cross-functional team combines product strategy, UX design, and robust engineering to build reliable web and mobile solutions tailored to business goals. From MVPs to enterprise platforms, we focus on performance, security, and long-term maintainability.
                                    </p>

                                    <div className="mt-7 grid gap-4 sm:grid-cols-2 text-[16px]">
                                        <Stat title="Scalable Web Architecture" />
                                        <Stat title="Quality-Driven Delivery" />
                                        <Stat title="API & Cloud Integration" />
                                    </div>
                                </div>

                                {/* <div className="overflow-hidden relative -bottom-[62px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1300&q=80"
                                        alt="Portfolio project preview"
                                        className="h-64 min-h-32 w-full object-cover"
                                        loading="lazy"
                                    />
                                </div> */}
                            </div>
                            <div className="circle-section">
                                <div id="circle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="80"
                                        height="80"
                                        viewBox="0 0 80 80"
                                    >
                                        <defs>
                                            <path
                                                id="circlePath"
                                                d="M40,40 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0"
                                            />
                                        </defs>

                                        <circle cx="40" cy="40" r="30" fill="none" />

                                        <text
                                            fontSize="6"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <textPath
                                                xlinkHref="#circlePath"
                                                startOffset="50%"
                                                textAnchor="middle"
                                            >
                                                . EXPLORE MORE • EXPLORE MORE
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>


                </article>
            </div>
        </section>
    );
}
