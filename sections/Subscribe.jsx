import { subscribeAction } from "@/app/actions/subscribe";

const experts = [
	"https://randomuser.me/api/portraits/women/44.jpg",
	"https://randomuser.me/api/portraits/men/32.jpg",
	"https://randomuser.me/api/portraits/women/68.jpg",
	"https://randomuser.me/api/portraits/men/75.jpg",
];

export default function Subscribe({ status }) {
	return (
		<section className="subscribe-section bg-white px-4 pt-16 sm:px-8 sm:pt-20 lg:pt-24">
			<div className="mx-auto max-w-302.5">
				<div className="text-center">
					<h1 className="subscribe-title text-[28px] font-semibold tracking-[-0.02em] text-[#0a0a0b] sm:text-[42px] md:text-[36px]">
						Stay Updated With Software Insights
					</h1>
					<p className="subscribe-subtitle mx-auto mt-4 max-w-190 text-base text-[#62647b] text-[14px] sm:text-[16px]">
						Get product strategy, engineering best practices, and delivery tips straight to your inbox.
					</p>

					<form
						action={subscribeAction}
						className="mx-auto mt-10 flex w-full max-w-150 flex-row items-center gap-2 sm:justify-center"
					>
						<label className="subscribe-input-wrap flex h-12 w-full flex-1 items-center gap-2 rounded-md border border-[#e5e8ee] bg-[#fafbfc] px-3 text-[#2c3442] transition focus-within:border-[#f08c54] focus-within:bg-white">
							<span aria-hidden="true" className="text-[13px] text-[#9ca4b3]">
								✉
							</span>
							<input
								type="email"
								name="email"
								required
								placeholder="Enter your email address"
								className="subscribe-input min-h-11 h-full w-full bg-transparent text-[13px] text-[#2c3442] outline-none placeholder:text-[#97a0b1]"
							/>
						</label>

						<button
							type="submit"
							className="subscribe-submit h-12 shrink-0 rounded-md bg-[#141926] px-4 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#252d3b] sm:px-5 sm:text-[13px] sm:tracking-[0.14em]"
						>
							Subscribe
						</button>
					</form>

					{status === "success" && (
						<p className="mt-3 text-sm text-emerald-700">Thanks for subscribing. We will be in touch soon.</p>
					)}
					{status === "error" && (
						<p className="mt-3 text-sm text-red-600">Unable to subscribe. Please check your email and try again.</p>
					)}
					{status === "exists" && (
						<p className="mt-3 text-sm text-amber-700">This email is already subscribed.</p>
					)}

					<div className="mt-10 flex items-center justify-center gap-3 text-slate-600">
						<span className="subscribe-helper text-sm text-[#606773] sm:text-base">Our engineering team is ready to help!</span>
						<div className="flex">
							{experts.map((src, index) => (
								<img
									key={src}
									src={src}
									alt="Expert avatar"
									className={`h-8 w-8 rounded-full border-2 border-[#f3f3f5] object-cover ${index ? "-ml-2" : ""}`}
									loading="lazy"
								/>
							))}
						</div>
					</div>
				</div>

				<article className="subscribe-cta relative mt-28 overflow-hidden rounded-[28px] bg-linear-to-r from-[#1239f3] via-[#4c60ef] to-[#95a5f3] px-7 py-12 sm:px-12 sm:py-16 -mb-5.5">
					<div className="relative z-10 max-w-190">
						<h2 className="subscribe-cta-title text-[28px] font-medium leading-[1.1] text-white sm:text-[32px] md:text-[32px]">
							Build Your Next Software Product With Us
						</h2>
						<p className="subscribe-cta-subtitle mt-3 text-base text-blue-100 sm:text-[14px]">
							We help startups and enterprises design, develop, and scale secure digital products with speed and precision.
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-6">
							<button className="subscribe-cta-primary rounded-full bg-[#10229a] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#0c1a77] sm:text-[14px]">
								Start Your Project
							</button>
							<a href="#" className="subscribe-cta-link text-sm text-white hover:underline sm:text-[14px]">
								View Our Work ↗
							</a>
						</div>
					</div>

					<div className="pointer-events-none absolute right-0 bottom-0 hidden h-full w-[39%] items-end justify-end sm:flex">
						<span className="absolute right-[6%] bottom-0 text-[390px] font-semibold leading-[0.82] text-white/72">M</span>
						{/* <img
							src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
							alt="Legal expert"
							className="relative z-10 h-[118%] max-h-130 w-auto translate-y-4 object-contain"
							loading="lazy"
						/> */}
					</div>
				</article>
			</div>
		</section>
	);
}
