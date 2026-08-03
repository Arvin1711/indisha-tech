"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, CircleDot, CircleStar, Headphones, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";

const topFeatures = [
    "Custom Web Application Development",
    "Scalable Cloud Architecture",
    "Secure API Integration",
    "24/7 Technical Support",
    "Agile Product Delivery",
];

const bottomFeatures = [
    "Product Discovery",
    "UI/UX Design",
    "DevOps Automation",
    "Quality Assurance",
    "Dedicated Engineering Teams",
];

function FeatureRow({ items, reverse = false }) {
    const loopItems = [...items, ...items];

    return (
        <div className="testimonial-marquee-shell py-3">
            <div className={`testimonial-marquee-track ${reverse ? "testimonial-marquee-reverse" : ""}`}>
                {loopItems.map((item, index) => (
                    <div key={`${item}-${index}`} className="flex items-center gap-3 px-2 text-[13px] font-medium whitespace-nowrap text-(--muted-color) sm:text-[14px]">
                        <span className="grid h-4 w-4 place-items-center text-[9px] leading-none text-[#f1874b]">
                            <CircleDot size={16} />
                        </span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Hero() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isContactSubmitted, setIsContactSubmitted] = useState(false);

    const openContactModal = () => {
        setIsContactSubmitted(false);
        setIsContactModalOpen(true);
    };

    const closeContactModal = () => {
        setIsContactModalOpen(false);
        setIsContactSubmitted(false);
    };

    const handleContactSubmit = (event) => {
        event.preventDefault();
        setIsContactSubmitted(true);
    };

    useEffect(() => {
        if (!isContactModalOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsContactModalOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isContactModalOpen]);

    return (
        <>
            <section
                className="relative overflow-hidden bg-white"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(197, 203, 217, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 203, 217, 0.2) 1px, transparent 1px)",
                    backgroundSize: "min(18vw, 180px) min(18vw, 180px)",
                }}
            >
                <div className="mx-auto max-w-360 px-4 pt-5 sm:px-8 sm:pt-7 lg:px-10">
                    <Navbar />

                    <div aria-hidden="true" className="h-20 sm:h-24" />

                    <div className="relative px-1 pb-8 pt-10 sm:pb-10 sm:pt-16 lg:px-5 lg:pb-12 lg:pt-18">
                        <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-[#f0c89a] bg-[#fff4eb] px-3 py-1 text-[11px] text-[#c96e20] shadow-[0_16px_30px_-26px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:text-[12px]">
                            <span>aurumxai.studio</span>
                            <span className="text-[#c96e20]">
                                <ArrowUpRight size={14} />
                            </span>
                        </div>

                        <div className="relative mx-auto mt-10 text-center sm:mt-14">
                            <div className="pointer-events-none absolute -left-2 top-2 hidden text-left lg:block">
                                <div className="flex items-center gap-3 rounded-2xl border border-[#ecebf0] bg-white/85 px-3 py-2 shadow-[0_20px_30px_-26px_rgba(15,23,42,0.5)] backdrop-blur-sm">
                                    <Image
                                        src="https://randomuser.me/api/portraits/women/44.jpg"
                                        alt="User avatar"
                                        width={44}
                                        height={44}
                                        className="h-11 w-11 rounded-xl object-cover"
                                    />
                                    <div>
                                        <div className="text-[13px] text-[#f0a334]">
                                            <Star fill="#f0a334" size={14} />
                                        </div>
                                        <div className="text-[15px] font-semibold text-[#252733]">Top Rated</div>
                                    </div>
                                </div>
                                <div className="ml-8 mt-6 h-26 w-px bg-[#ef9a67]" />
                            </div>

                            <div className="pointer-events-none absolute -right-2 top-2 hidden items-start gap-3 text-left lg:flex">
                                <div className="mt-2 text-[28px]">
                                    <Headphones size={24} color="#3e56f6" />
                                </div>
                                <div>
                                    <p className="text-[16px] font-semibold leading-tight text-[#262a35]">Reliable</p>
                                    <p className="font-[Georgia,serif] text-[18px] leading-tight italic text-(--accent-color)">Software.</p>
                                    <p className="text-[16px] font-semibold leading-tight text-[#262a35]">Built to Scale</p>
                                </div>
                            </div>

                            <h1 className="mx-auto mt-16 max-w-5xl text-[36px] font-normal leading-[1.357] tracking-[-0.07em] text-[#0d0f17] sm:text-[60px] sm:tracking-[-0.07em] md:text-[58px] lg:text-[58px] xl:text-[58px]">
                                <span className="font-[Georgia,serif] font-normal italic text-(--accent-color)">Building</span>{" "}
                                <span className="inline-block">Digital Products With</span>
                                <br className="hidden sm:block" />
                                {/* <span className="block sm:inline">With{" "}</span> */}
                                <span className="font-[Georgia,serif] font-normal italic text-(--accent-color)">Smart Engineering</span>
                            </h1>

                            <p className="mx-auto mt-5 max-w-150 text-[14px] leading-[1.7] text-(--muted-color) sm:mt-6 sm:text-[16px]">
                                aurumxai helps startups and enterprises design, build, and scale web platforms, mobile apps, and digital systems with fast-moving product teams.
                            </p>

                            <div className="mt-8 flex justify-center sm:mt-10">
                                <button
                                    type="button"
                                    onClick={openContactModal}
                                    className="inline-flex items-center gap-2 rounded-full bg-(--accent-color) px-4 py-2 text-[14px] font-medium text-white shadow-[0_20px_36px_-22px_rgba(240,140,84,0.9)] transition hover:bg-[#e98147]"
                                >
                                    <span>Start a Project</span>
                                    <span className="grid h-5 w-5 place-items-center rounded-full text-[11px]"><CircleStar size={18} /></span>
                                </button>
                            </div>
                        </div>

                        <div className="mt-10 grid gap-6 lg:mt-2 lg:grid-cols-[1fr_auto_1fr] lg:items-end">
                            <div className="max-w-100 rounded-[26px] border border-white/65 bg-white/72 p-5 shadow-[0_24px_40px_-30px_rgba(15,23,42,0.32)] backdrop-blur-sm">
                                <p className="text-[14px] font-semibold text-[#292d38]">
                                    Nina R., <span className="font-[Georgia,serif] font-normal italic text-(--accent-color)">Product Manager</span>
                                </p>
                                <p className="mt-5 text-sm text-(--muted-color)">
                                    aurumxai helped us launch our platform faster with a clean codebase, reliable delivery, and a team that understood product goals from day one.
                                </p>
                            </div>

                            <div className="hidden lg:block" />

                            <div className="justify-self-end text-left lg:max-w-72 lg:text-right">
                                <div className="mb-4 flex justify-start lg:justify-end">
                                    <div className="grid h-10 w-10 place-items-center rounded-full bg-[#1c2431] text-[18px] text-(--accent-color) shadow-[0_18px_28px_-24px_rgba(15,23,42,0.6)]">
                                        ◔
                                    </div>
                                </div>
                                <p className="text-sm text-(--muted-color)">
                                    We turn complex ideas into reliable, production-ready software.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-10 pt-10">
                    <div className="border-y border-[#ebebef] backdrop-blur-sm">
                        <FeatureRow items={topFeatures} />
                    </div>
                    <div className="border-b border-[#ebebef] backdrop-blur-sm">
                        <FeatureRow items={bottomFeatures} reverse />
                    </div>
                </div>

            </section>

            {isContactModalOpen && (
                <div
                    className="fixed inset-0 z-90 flex items-center justify-center bg-[#0f1422]/55 px-4 py-6 backdrop-blur-[2px]"
                    onClick={closeContactModal}
                >
                    <div
                        className="w-full max-w-md rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.34)] sm:p-6"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Start a project"
                    >
                        <div className="mb-4 flex items-start justify-between gap-3">
                            <div>
                                <h3 className="text-[17px] font-semibold text-[#1c2230]">Get in Touch</h3>
                                <p className="mt-1 text-[12px] text-[#97a0b1]">Share your project details and we will get back to you.</p>
                            </div>
                            <button
                                type="button"
                                onClick={closeContactModal}
                                className="grid h-8 w-8 place-items-center rounded-md border border-[#e5e8ee] bg-[#fafbfc] text-[#687182] transition hover:bg-white"
                                aria-label="Close modal"
                            >
                                ×
                            </button>
                        </div>

                        <form className="space-y-4" onSubmit={handleContactSubmit}>
                            <label className="block">
                                <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca4b3]">Name</span>
                                <input
                                    type="text"
                                    required
                                    disabled={isContactSubmitted}
                                    placeholder="Your name"
                                    className={`w-full rounded-md border border-[#e5e8ee] bg-[#fafbfc] px-3 py-2.5 text-[13px] text-[#2c3442] outline-none transition focus:border-[#f08c54] focus:bg-white ${isContactSubmitted ? "cursor-not-allowed opacity-70" : ""}`}
                                />
                            </label>

                            <label className="block">
                                <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca4b3]">Email</span>
                                <input
                                    type="email"
                                    required
                                    disabled={isContactSubmitted}
                                    placeholder="you@email.com"
                                    className={`w-full rounded-md border border-[#e5e8ee] bg-[#fafbfc] px-3 py-2.5 text-[13px] text-[#2c3442] outline-none transition focus:border-[#f08c54] focus:bg-white ${isContactSubmitted ? "cursor-not-allowed opacity-70" : ""}`}
                                />
                            </label>

                            <label className="block">
                                <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca4b3]">Message</span>
                                <textarea
                                    rows={4}
                                    required
                                    disabled={isContactSubmitted}
                                    placeholder="Tell us briefly how we can help"
                                    className={`w-full resize-none rounded-md border border-[#e5e8ee] bg-[#fafbfc] px-3 py-2.5 text-[13px] text-[#2c3442] outline-none transition focus:border-[#f08c54] focus:bg-white ${isContactSubmitted ? "cursor-not-allowed opacity-70" : ""}`}
                                />
                            </label>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <button
                                    type="submit"
                                    disabled={isContactSubmitted}
                                    className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.16em] text-white transition ${isContactSubmitted ? "cursor-not-allowed bg-[#7c8595]" : "bg-[#141926] hover:bg-[#252d3b]"}`}
                                >
                                    {isContactSubmitted ? "Submitted" : "Start Conversation"}
                                </button>

                                {isContactSubmitted && (
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#eefbf3] px-3 py-2 text-[12px] font-medium text-[#166534]">
                                        <CheckCircle2 size={16} />
                                        <span>Message sent successfully.</span>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
