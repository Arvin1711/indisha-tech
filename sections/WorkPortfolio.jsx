"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronsLeftRightEllipsis, DatabaseSearch, TabletSmartphone, WandSparkles } from "lucide-react";

const steps = [
    {
        title: "Product Discovery",
        description: "Research, scope, and align on a clear product roadmap.",
        icon: <DatabaseSearch />,
    },
    {
        title: "UI/UX Design",
        description: "Craft intuitive interfaces that convert and delight users.",
        icon: <WandSparkles />,
    },
    {
        title: "App Development",
        description: "Build scalable mobile apps with modern tech stacks.",
        icon: <TabletSmartphone />,
    },
    {
        title: "Web Platform",
        description: "Deploy performant web platforms built to grow with you.",
        icon: <ChevronsLeftRightEllipsis />,
    },
];

function Stat({ title }) {
    return (
        <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#eef2ff] text-[#3550f6]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                    <path d="M4 16h16M6.5 11h4M6.5 8h8M14 11h3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
            </div>
            <p className="text-[13px] font-semibold leading-tight text-[#101522] sm:text-[15px]">{title}</p>
        </div>
    );
}

export default function WorkPortfolio() {
    const [activeStep, setActiveStep] = useState(2);

    return (
        <section className="bg-[#f7f9ff] px-4 py-16 sm:px-8 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <header className="text-center">
                    <p className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.08em] text-(--accent-color) sm:text-[12px]">
                        <span aria-hidden="true">&larr;</span>
                        SOFTWARE PROJECT SHOWCASE
                        <span aria-hidden="true">&rarr;</span>
                    </p>
                    <h2 className="mt-4 text-[28px] font-bold tracking-[-0.02em] text-[#0d1226] sm:text-[28px] lg:text-[28px]">
                        Software That Delivers Results
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-[#6b7394] sm:text-[16px]">
                        From the first idea to a live product — we own the full journey.
                    </p>
                </header>

                {/* Process steps */}
                <div className="relative mt-12 sm:mt-16">
                    {/* Connector line — desktop only */}
                    <div
                        className="absolute inset-x-8 top-11.5 hidden h-px lg:block"
                        style={{ background: "linear-gradient(to right, transparent, #d0d7f5 20%, #d0d7f5 80%, transparent)" }}
                        aria-hidden="true"
                    />

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
                        {steps.map((step, index) => {
                            const active = activeStep === index;
                            return (
                                <button
                                    key={step.title}
                                    type="button"
                                    onClick={() => setActiveStep(index)}
                                    className={`group relative flex flex-col rounded-2xl p-5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e5af6]/50 sm:rounded-3xl sm:p-6 ${active
                                        ? "bg-linear-to-br from-[#f98265] to-(--accent-color) text-white shadow-[0_10px_28px_-10px_rgba(62,90,246,0.18)]"
                                        : "border border-[#e6eaf6] bg-white shadow-[0_2px_12px_-6px_rgba(14,24,62,0.1)] hover:-translate-y-0.5 hover:border-[#c5ceee] hover:shadow-[0_10px_28px_-10px_rgba(62,90,246,0.18)]"
                                        }`}
                                >

                                    {/* Icon box */}
                                    <div className={`relative mb-5 grid h-11 w-11 place-items-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12 sm:rounded-2xl ${active
                                        ? "bg-white/15 text-white"
                                        : "bg-[#edf0fc] text-(--accent-color) group-hover:bg-(--accent-color)/12"
                                        }`}>
                                        <span className="[&>svg]:h-5 [&>svg]:w-5">
                                            {step.icon}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <p className={`text-[13px] font-bold leading-snug transition-colors sm:text-[14px] ${active ? "text-white" : "text-[#0d1226] group-hover:text-[#1a2450]"}`}>
                                        {step.title}
                                    </p>

                                    {/* Description */}
                                    <p className={`mt-1.5 text-[11px] leading-relaxed transition-colors sm:text-[12px] ${active ? "text-white/65" : "text-[#9099b8] group-hover:text-[#6b7394]"}`}>
                                        {step.description}
                                    </p>

                                    {/* Bottom accent bar */}
                                    <div className={`mt-4 h-0.75 rounded-full transition-all duration-300 ${active ? "w-8 bg-white/35" : "w-0 bg-[#3e5af6]/25 group-hover:w-6"}`} />
                                </button>
                            );
                        })}
                    </div>
                </div>

                <article className="relative mt-16 rounded-[26px]">
                    <div className="grid gap-6 lg:grid-cols-[1fr_1.95fr] lg:items-stretch">
                        <div className="overflow-hidden rounded-[22px] border-[6px] border-white shadow-[0_12px_30px_-22px_rgba(14,24,62,0.5)]">
                            <div className="relative min-h-72 h-full w-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1300&q=80"
                                    alt="Portfolio project preview"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="rounded-[20px] bg-white lg:block" style={{ overflow: "hidden" }}>
                            <div>
                                <div className="px-6 py-7 sm:px-8">
                                    <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[#101522] sm:text-[22px]">
                                        We design Project
                                    </h3>
                                    <p className="mt-3 text-[14px] leading-[1.7] text-[#62647b] sm:text-[14px]">
                                        We design and deliver high-performance digital products from discovery to deployment, helping teams launch faster and scale with confidence. Our cross-functional team combines product strategy, UX design, and robust engineering to build reliable web and mobile solutions tailored to business goals. From MVPs to enterprise platforms, we focus on performance, security, and long-term maintainability.
                                    </p>

                                    <div className="mt-7 grid gap-4 text-[16px] sm:grid-cols-2">
                                        <Stat title="Scalable Web Architecture" />
                                        <Stat title="Quality-Driven Delivery" />
                                        <Stat title="API & Cloud Integration" />
                                    </div>
                                </div>
                            </div>
                            <div className="circle-section">
                                <div id="circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
                                        <defs>
                                            <path id="circlePath" d="M40,40 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0" />
                                        </defs>
                                        <circle cx="40" cy="40" r="30" fill="none" />
                                        <text fontSize="6" textAnchor="middle" dominantBaseline="middle">
                                            <textPath xlinkHref="#circlePath" startOffset="50%" textAnchor="middle">
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
