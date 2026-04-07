import { Quote } from "lucide-react";

const testimonials = [
	{
		quote:
			"indishaTech helped us modernize our legacy platform without disrupting daily operations. Their team delivered clean architecture, fast iterations, and dependable communication throughout the project.",
		name: "Alicia Morgan",
		role: "Head of Engineering",
		company: "NorthBridge Tech",
		avatar: "https://i.pravatar.cc/56?img=32",
	},
	{
		quote:
			"From product discovery to release, indishaTech felt like an extension of our internal team. They translated complex requirements into a polished app our customers adopted quickly.",
		name: "Daniel Reeves",
		role: "Product Director",
		company: "Streamline Health",
		avatar: "https://i.pravatar.cc/56?img=47",
	},
	{
		quote:
			"The quality of code, documentation, and QA process was outstanding. We shipped on schedule and saw immediate improvements in performance and user retention.",
		name: "Priya Nair",
		role: "VP of Product",
		company: "Astera Labs",
		avatar: "https://i.pravatar.cc/56?img=12",
	},
	{
		quote:
			"indishaTech redesigned our web platform and rebuilt the backend APIs for scale. The result was faster load times, lower infrastructure costs, and happier users.",
		name: "Marcus Lee",
		role: "CTO",
		company: "RetailNova",
		avatar: "https://i.pravatar.cc/56?img=15",
	},
	{
		quote:
			"Their developers brought strong technical leadership and pragmatic solutions. Every sprint shipped value, and our roadmap execution became far more predictable.",
		name: "Emily Carter",
		role: "Operations Manager",
		company: "FinEdge",
		avatar: "https://i.pravatar.cc/56?img=21",
	},
	{
		quote:
			"We trusted indishaTech to build our MVP under a tight timeline. They delivered a production-ready product that helped us secure our next round of funding.",
		name: "Noah Bennett",
		role: "Founder",
		company: "CloudSprint",
		avatar: "https://i.pravatar.cc/56?img=5",
	},
];

const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3);

function RatingRow() {
	return (
		<div className="testimonials-rating mt-6 flex items-center justify-center gap-4 text-[20px] font-semibold text-slate-600">
			<div className="grid h-8 w-8 place-items-center rounded-full bg-(--accent-color) text-xs font-bold text-white">CL</div>
			<div className="flex gap-1 text-(--accent-color)" aria-label="5.0 out of 5 stars">
				<span>★</span>
				<span>★</span>
				<span>★</span>
				<span>★</span>
				<span>★</span>
			</div>
			<span>4.7 Client Rating</span>
		</div>
	);
}

function TestimonialCard({ item }) {
	return (
		<article className="testimonial-card w-[84vw] max-w-140 min-w-[320px] rounded-3xl border border-[#f1f5f9] bg-[linear-gradient(180deg,#f9f9fd_0%,#f9fbff_55%,#f8fcfb_100%)] p-8 shadow-[0_10px_30px_-25px_rgba(15,23,42,0.4)] md:w-140">
			{/* <p className="testimonial-card-mark text-2xl leading-none text-slate-300">&ldquo;</p> */}
			<p className="testimonial-card-quote mt-3 text-[14px] leading-[1.7] text-[#62647b]">
				<Quote size={24} className="inline-block text-black/30 rotate-180" />
				<span className="pl-1">{item.quote}</span></p>

			<div className="mt-8 flex items-center gap-3">
				<img
					src={item.avatar}
					alt={item.name}
					width="40"
					height="40"
					className="h-10 w-10 rounded-full object-cover"
					loading="lazy"
				/>
				<p className="testimonial-card-meta text-sm text-[#62647b] sm:text-sm">
					<span className="testimonial-card-name font-semibold text-gray-900">{item.name}</span> · {item.role} at {item.company}
				</p>
			</div>
		</article>
	);
}

function MarqueeRow({ items, reverse = false }) {
	const duplicated = [...items, ...items];

	return (
		<div className="testimonial-marquee-shell">
			<div className={`testimonial-marquee-track ${reverse ? "testimonial-marquee-reverse" : ""}`}>
				{duplicated.map((item, index) => (
					<TestimonialCard key={`${item.name}-${index}`} item={item} />
				))}
			</div>
		</div>
	);
}

export default function Testimonials() {
	return (
		<section 
		// className="testimonials-section relative overflow-hidden bg-[linear-gradient(180deg,#f9f9fd_0%,#f9fbff_55%,#f8fcfb_100%)] py-20"
		className="testimonials-section relative overflow-hidden bg-white py-20">
			<div className="mx-auto max-w-330 px-4 sm:px-8">
				<header className="text-center">
					<h2 className="testimonials-title text-[32px] font-semibold tracking-[0.01em] text-slate-900 sm:text-[32px] lg:text-[36px]">
						Client <span className="bg-linear-to-r from-(--accent-color) to-(--accent-color) bg-clip-text text-transparent">Success Stories</span>
					</h2>
					<p className="testimonials-subtitle mx-auto mt-5 max-w-3xl text-slate-500 sm:text-lg">
						Trusted by teams that need reliable software delivery, scalable engineering, and measurable product outcomes.
					</p>
					<RatingRow />
				</header>

				<div className="mt-14 space-y-6">
					<MarqueeRow items={firstRow} />
					<MarqueeRow items={secondRow} reverse />
				</div>
			</div>
		</section>
	);
}
