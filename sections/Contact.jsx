export default function Contact() {
    return (
        <main
            className="min-h-screen bg-white pb-14 pt-24 sm:pb-18"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(197, 203, 217, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 203, 217, 0.2) 1px, transparent 1px)",
                backgroundSize: "min(18vw, 180px) min(18vw, 180px)",
            }}
        >
            <section className="">
                <div className="">
                    <div className="py-16 text-center">
                        <h1 className="mx-auto mt-16 text-[36px] font-normal leading-[1.357] tracking-[-0.07em] text-[#0d0f17] sm:text-[60px] sm:tracking-[-0.07em] md:text-[58px] lg:text-[58px] xl:text-[58px]">
                            <span className="font-[Georgia,serif] font-normal italic text-(--accent-color)">Smart Engineering</span>{" "}
                            <span className="inline-block">Building Better</span>
                            <br className="hidden sm:block" />
                            <span className="block sm:inline">Products With{" "}</span>
                            <span className="font-[Georgia,serif] font-normal italic text-(--accent-color)">Modern Engineering</span>
                        </h1>

                        <p className="mx-auto mt-10 max-w-150 text-[14px] leading-[1.7] text-(--muted-color) sm:mt-6 sm:text-[16px]">
                            aurumxai helps startups and enterprises design, build, and scale reliable software products that drive measurable business results.
                        </p>
                    </div>

                    <div className="mx-auto max-w-340 px-4 sm:px-6 lg:px-8 grid gap-7 p-5 sm:p-7 lg:grid-cols-[1.2fr_0.95fr] lg:gap-8 lg:p-8">
                        <div>
                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-(--accent-color)">Contact us</p>
                            <h2 className="mt-2 max-w-sm text-[28px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#141926] sm:text-[28px]">
                                Let&apos;s Build Your Next Software Project
                            </h2>
                            <p className="mt-4 max-w-md text-[14px] sm:text-[14px] leading-normal text-[#62647b]">
                                Reach out for product strategy, development support, or dedicated team collaboration. Our experts respond within one business day.
                            </p>

                            <div className="mt-8 grid gap-5 text-[14px] sm:text-[14px] text-[#62647b] sm:grid-cols-2">
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9aa2b0]">Address</p>
                                    <p className="mt-2 leading-[1.55]">
                                        Yanuma Tower, 2nd Floor
                                        <br />
                                        New Delhi, India 110001
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9aa2b0]">Open Hours</p>
                                    <p className="mt-2 leading-[1.55]">
                                        Mon - Fri: 09:00 - 18:00
                                        <br />
                                        Sat: 10:00 - 14:00
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9aa2b0]">Email</p>
                                    <a href="mailto:hello@aurumxai.dev" className="mt-2 inline-block text-[#2b3240] hover:text-[#f08c54]">
                                        info@aurumxai.com
                                    </a>
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9aa2b0]">Phone</p>
                                    <a href="tel:+919885432100" className="mt-2 inline-block text-[#2b3240] hover:text-[#f08c54]">
                                        +91 988-543-2100
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-[#eceef3] bg-white p-5 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.34)] sm:p-6">
                            <h3 className="text-[17px] font-semibold text-[#1c2230]">Get in Touch</h3>
                            <p className="mt-1 text-[12px] text-[#97a0b1]">Share your project details and we will get back to you.</p>

                            <form className="mt-5 space-y-4">
                                <label className="block">
                                    <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca4b3]">Name</span>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full rounded-md border border-[#e5e8ee] bg-[#fafbfc] px-3 py-2.5 text-[13px] text-[#2c3442] outline-none transition focus:border-[#f08c54] focus:bg-white"
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca4b3]">Email</span>
                                    <input
                                        type="email"
                                        placeholder="you@email.com"
                                        className="w-full rounded-md border border-[#e5e8ee] bg-[#fafbfc] px-3 py-2.5 text-[13px] text-[#2c3442] outline-none transition focus:border-[#f08c54] focus:bg-white"
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca4b3]">Message</span>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us briefly how we can help"
                                        className="w-full resize-none rounded-md border border-[#e5e8ee] bg-[#fafbfc] px-3 py-2.5 text-[13px] text-[#2c3442] outline-none transition focus:border-[#f08c54] focus:bg-white"
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="inline-flex items-center rounded-full bg-[#141926] px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#252d3b]"
                                >
                                    Start Conversation
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* <div className="px-5 pb-5 sm:px-7 sm:pb-7 lg:px-8 lg:pb-8">
                        <div className="overflow-hidden rounded-xl border border-[#e8ebf1] bg-[#f2f3f6]">
                            <iframe
                                title="Verovio office location"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=106.8125%2C-6.2470%2C106.8425%2C-6.2170&layer=mapnik&marker=-6.2320%2C106.8275"
                                className="h-56 w-full grayscale"
                                loading="lazy"
                            />
                        </div>
                    </div> */}
                </div>
            </section>
        </main>
    );
}
