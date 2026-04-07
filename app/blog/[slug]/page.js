import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// Shared post data (in a real app this would come from a CMS / DB)
const allPosts = [
	{
		slug: "unlocking-business-efficiency-with-saas-solutions",
		badge: "Business",
		title: "Unlocking Business Efficiency with SaaS Solutions",
		image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
		author: "Jennifer Taylor",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
		readTime: "4 min read",
		date: "March 10, 2026",
		excerpt: "Explore how SaaS platforms are reshaping business operations and enabling new levels of operational efficiency across industries.",
		content: [
			"In today's competitive landscape, businesses that adopt Software-as-a-Service (SaaS) solutions are gaining a significant edge over those relying on legacy infrastructure. From automated workflows to real-time collaboration, SaaS is fundamentally changing the way teams operate.",
			"One of the primary advantages of SaaS is its scalability. Unlike traditional software that requires costly hardware upgrades, SaaS platforms can expand with your business at the click of a button. This flexibility allows startups and enterprise organizations alike to right-size their technology investment.",
			"Security is another area where modern SaaS providers excel. Leading platforms invest heavily in compliance certifications (SOC 2, ISO 27001), data encryption at rest and in transit, and continuous monitoring — capabilities that would be prohibitively expensive for most businesses to replicate in-house.",
			"Integration is the final pillar of SaaS efficiency. Open APIs and pre-built connectors mean your CRM, ERP, and communication tools work together seamlessly, eliminating data silos and reducing manual entry errors that cost businesses thousands of hours each year.",
		],
	},
	{
		slug: "revolutionizing-industries-through-saas-implementation",
		badge: "Technology",
		title: "Revolutionizing Industries through SaaS implementation",
		image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
		author: "Jennifer Taylor",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
		readTime: "5 min read",
		date: "March 8, 2026",
		excerpt: "From healthcare to logistics, SaaS is powering the next wave of industry transformation.",
		content: [
			"SaaS has moved well beyond its roots in productivity software. Today it underpins mission-critical processes in healthcare, manufacturing, finance, and logistics — industries once considered too complex or regulated for cloud adoption.",
			"In healthcare, SaaS electronic health record (EHR) systems have slashed administrative overhead while improving patient outcomes through better data visibility. Cloud-based telehealth platforms scaled to millions of concurrent users during peak demand, something on-premise deployments could never achieve.",
			"In logistics, real-time visibility platforms built on SaaS architecture are replacing fragmented spreadsheet workflows. Shippers, carriers, and customers share a single source of truth, reducing disputes and enabling proactive exception management.",
		],
	},
	{
		slug: "synergizing-saas-and-ux-design",
		badge: "Design",
		title: "Synergizing saas and UX design for elevating digital experiences",
		image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
		author: "Jennifer Taylor",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
		readTime: "4 min read",
		date: "March 6, 2026",
		excerpt: "Great SaaS products start with great UX. Here is how top teams align product and design.",
		content: [
			"The most successful SaaS companies have one thing in common: an obsessive focus on user experience. Product and design teams work in lockstep, sharing the same metrics and the same definition of success — user outcomes, not feature counts.",
			"Modern SaaS UX borrows extensively from consumer app design patterns. Progressive disclosure, contextual onboarding, and empty-state guidance reduce time-to-value for new users while keeping power features accessible to advanced ones.",
		],
	},
	{
		slug: "navigating-saas-waters-with-intuitive-ui-and-ux",
		badge: "Design",
		title: "Navigating saas waters with intuitive UI and UX",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
		author: "Ryan A.",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
		readTime: "3 min read",
		date: "March 4, 2026",
		excerpt: "Intuitive interfaces are the difference between SaaS products that delight and those that frustrate.",
		content: [
			"With hundreds of competing SaaS tools in every category, intuitive UI is no longer optional — it is a competitive necessity. Users evaluate a new product within seconds, and first impressions are almost impossible to reverse.",
			"Clarity beats cleverness every time. Navigation should reflect how users think about their work, not how engineers structured the codebase. Investing in information architecture research before writing a single line of UI code saves exponentially more time in rework.",
		],
	},
	{
		slug: "sculpting-saas-success-the-art-of-ui-and-ux-design",
		badge: "Design",
		title: "Sculpting saas success – the art of UI and UX design",
		image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
		author: "Sarah Kim",
		avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=80&q=80",
		readTime: "5 min read",
		date: "March 2, 2026",
		excerpt: "A look at how deliberate design choices translate directly into product growth and retention.",
		content: [
			"Design is strategy made visible. The color palette, spacing system, and type hierarchy of a SaaS product communicate brand values before a user reads a single word. High-growth SaaS companies treat design as a core competency, not an afterthought.",
			"Micro-interactions — the subtle animations and feedback states that confirm user actions — build trust and confidence. A well-placed loading indicator or a success toast notification can be the difference between a confused user and a delighted one.",
		],
	},
	{
		slug: "transforming-saas-platforms-a-ui-ux-design-odyssey",
		badge: "Design",
		title: "Transforming saas platforms – a UI/UX design odyssey",
		image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
		author: "Daniel Lee",
		avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80",
		readTime: "6 min read",
		date: "February 28, 2026",
		excerpt: "Case studies in platform redesigns that drove measurable business results.",
		content: [
			"Redesigning an established SaaS platform is one of the most challenging undertakings in product design. You must simultaneously satisfy existing power users who have muscle memory built around the old interface and new users who need a more modern, guided experience.",
			"The most successful platform transformations share a phased approach: audit the existing information architecture, identify the top 20% of features responsible for 80% of engagement, and redesign around those workflows before tackling edge cases.",
		],
	},
	{
		slug: "mastering-ui-elements-a-practical-guide-for-designers",
		badge: "Design",
		title: "Mastering UI Elements: A Practical Guide for Designers",
		image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
		author: "Jennifer Taylor",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
		readTime: "3 min read",
		date: "February 25, 2026",
		excerpt: "Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.",
		content: [
			"UI elements are the building blocks of every digital product. Buttons, inputs, modals, cards — each carries a set of implicit conventions users have come to expect. Violating those conventions without a good reason creates friction and erodes trust.",
			"A practical toolkit for designers: always start with the system. Before creating a custom component, check whether an existing one can be adapted. Custom components multiply quickly, and each one adds to the maintenance burden of the design system.",
			"Accessibility is not a feature — it is a foundation. Colour contrast, keyboard navigation, and screen reader support should be baked into every element from day one. Retrofitting accessibility is always more expensive than building it in.",
		],
	},
	{
		slug: "crafting-seamless-experiences-the-art-of-intuitive-ui-design",
		badge: "Design",
		title: "Crafting Seamless Experiences: The Art of Intuitive UI Design",
		image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
		author: "Jennifer Taylor",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
		readTime: "5 min read",
		date: "February 22, 2026",
		excerpt: "Explore the principles and techniques that drive user-centric UI design, ensuring a seamless user experience.",
		content: [
			"Seamless experiences do not happen by accident. They are the result of disciplined user research, rapid prototyping, and iterative testing — a cycle that never really ends because users and contexts are always evolving.",
			"Cognitive load is the hidden enemy of great UX. Every element on the screen competes for attention. The best interfaces ruthlessly eliminate noise, using white space and visual hierarchy to guide the user's eye to what matters most at any given moment.",
			"Motion design is an often-overlooked component of seamless UX. Purposeful animation communicates spatial relationships, provides feedback, and creates a sense of continuity as users move through workflows.",
		],
	},
	{
		slug: "beyond-aesthetics-the-power-of-emotional-ux-design",
		badge: "UX",
		title: "Beyond Aesthetics: The Power of Emotional UX Design",
		image: "https://images.unsplash.com/photo-1497366754035-f200586c559f?auto=format&fit=crop&w=1200&q=80",
		author: "Ryan A.",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
		readTime: "2 min read",
		date: "February 20, 2026",
		excerpt: "Delve into emotional design and discover how incorporating empathy and psychology boosts retention.",
		content: [
			"Don Norman's three levels of design — visceral, behavioural, and reflective — offer a powerful framework for understanding why some products inspire loyalty while others are merely tolerated. Emotional design targets all three levels simultaneously.",
			"Delight is not decoration. Thoughtfully placed moments of joy — a celebratory animation when a goal is reached, a friendly error message that makes a frustrating moment bearable — create emotional memories that users associate with your brand.",
		],
	},
	{
		slug: "bear-market-strategies-how-top-cfos-plan-for-recession",
		badge: "Finance strategy",
		title: "Bear Market Strategies: How Top CFO's Plan for Recession",
		image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
		author: "Ian Schnoor",
		avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&q=80",
		readTime: "6 min read",
		date: "February 18, 2026",
		excerpt: "Top CFOs share the frameworks and tactics they rely on when markets turn south.",
		content: [
			"When equity markets decline and credit conditions tighten, CFOs who have prepared scenario models in advance are far better positioned than those reacting in real time. Proactive planning is the single biggest differentiator between finance leaders who merely survive downturns and those who emerge with competitive advantage.",
			"Cash is king in a bear market. Accelerating receivables, negotiating extended payables, and building a rolling 13-week cash flow forecast are table stakes. Leading CFOs go further — they maintain a pre-negotiated revolving credit facility as dry powder before they need it.",
		],
	},
	{
		slug: "financial-modeling-masterclass-with-ian-schnoor",
		badge: "Finance Insights",
		title: "Financial Modeling Masterclass with Ian Schnoor of The Marquee Group",
		image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80",
		author: "Ian Schnoor",
		avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&q=80",
		readTime: "40 min read",
		date: "February 15, 2026",
		excerpt: "A comprehensive masterclass on building institutional-quality financial models from scratch.",
		content: [
			"Financial modeling is equal parts art and science. The science is the mechanics — linking income statements, balance sheets, and cash flow statements so that every assumption flows through correctly. The art is knowing which assumptions actually matter and building your model to make sensitivity analysis easy.",
			"The most common mistake analysts make is starting with the output. A well-structured model starts with inputs — clearly labeled, grouped by driver category, and separated from calculations. This architecture makes auditing trivial and reduces errors dramatically.",
		],
	},
	{
		slug: "the-future-of-ui-design-trends-to-watch",
		badge: "Trends",
		title: "The Future of UI Design: Trends to Watch in 2026",
		image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
		author: "Sarah Kim",
		avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=80&q=80",
		readTime: "4 min read",
		date: "February 12, 2026",
		excerpt: "From glassmorphism to AI-powered interfaces, these are the design trends shaping the next wave of digital experiences.",
		content: [
			"2026 is shaping up to be the year AI moves from novelty feature to foundational design primitive. Interfaces that adapt in real time to individual user behaviour, surfaces that reorganize themselves based on context, and copy that writes itself — these are no longer science fiction.",
			"Spatial computing is beginning to influence flat screen design. The depth and layering cues popularized by Vision Pro are trickling into web and mobile design, bringing a new vocabulary of shadows, translucency, and motion parallax.",
		],
	},
	{
		slug: "design-systems-building-consistency-at-scale",
		badge: "Systems",
		title: "Design Systems: Building Consistency at Scale",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
		author: "Daniel Lee",
		avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80",
		readTime: "6 min read",
		date: "February 10, 2026",
		excerpt: "A deep dive into how design systems empower teams to deliver consistent, high-quality products faster.",
		content: [
			"A design system is not a component library. It is a shared language — a set of decisions, principles, and patterns that enable distributed teams to make locally coherent choices that add up to a globally consistent product.",
			"The most effective design systems are living documents, not static artifacts. They include decision rationale alongside the decisions themselves, making it possible for new team members to understand not just what the system prescribes, but why.",
		],
	},
	{
		slug: "color-theory-for-digital-designers",
		badge: "Design",
		title: "Color Theory for Digital Designers: A Practical Guide",
		image: "https://images.unsplash.com/photo-1541707578-a5c2f7b6e3e0?auto=format&fit=crop&w=1200&q=80",
		author: "Amelia Zhang",
		avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
		readTime: "3 min read",
		date: "February 8, 2026",
		excerpt: "Understanding color psychology and application can dramatically improve user engagement and brand recall.",
		content: [
			"Color is the fastest communication channel a designer has. Before a user reads a word, color has already conveyed mood, brand, and hierarchy. Mastering color theory is not optional — it is a core professional competency.",
			"Digital color has its own unique constraints. RGB gamuts, display calibration variance, and WCAG contrast requirements mean that the rules of traditional color theory must be adapted for screens. A palette that looks perfect in a print mockup can fail accessibility checks entirely.",
		],
	},
];

export async function generateStaticParams() {
	return allPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }) {
	const post = allPosts.find((p) => p.slug === params.slug);

	if (!post) {
		notFound();
	}

	const relatedPosts = allPosts
		.filter((p) => p.slug !== post.slug && p.badge === post.badge)
		.slice(0, 3);

	return (
		<>
			<Navbar />
			<main className="min-h-screen bg-white">
				{/* ── Hero image ── */}
				<div className="relative h-80 w-full overflow-hidden sm:h-105 lg:h-125">
					<img
						src={post.image}
						alt={post.title}
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
					<div className="absolute bottom-0 left-0 right-0 mx-auto max-w-215 px-4 pb-10 sm:px-6">
						<span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm border border-white/30">
							{post.badge}
						</span>
						<h1 className="text-[24px] font-bold leading-tight text-white sm:text-[32px] lg:text-[38px]">
							{post.title}
						</h1>
					</div>
				</div>

				{/* ── Article body ── */}
				<article className="mx-auto max-w-215 px-4 py-10 sm:px-6">
					{/* Author row */}
					<div className="mb-8 flex items-center gap-3 border-b border-[#f3f4f6] pb-6">
						<img
							src={post.avatar}
							alt={post.author}
							className="h-10 w-10 rounded-full object-cover"
						/>
						<div>
							<p className="text-[13px] font-semibold text-[#111827]">{post.author}</p>
							<p className="text-[11px] text-[#6b7280]">
								{post.date} &nbsp;·&nbsp; {post.readTime}
							</p>
						</div>
					</div>

					{/* Lead excerpt */}
					<p className="mb-6 text-[16px] font-medium leading-relaxed text-[#374151]">
						{post.excerpt}
					</p>

					{/* Body paragraphs */}
					<div className="space-y-5">
						{post.content.map((paragraph, i) => (
							<p
								key={i}
								className="text-[14px] leading-[1.85] text-[#4b5563]"
							>
								{paragraph}
							</p>
						))}
					</div>

					{/* Back link */}
					<div className="mt-12 border-t border-[#f3f4f6] pt-8">
						<Link
							href="/blog"
							className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] px-5 py-2 text-[12px] font-medium text-[#374151] hover:bg-[#f9fafb] transition-colors"
						>
							← Back to Blog
						</Link>
					</div>
				</article>

				{/* ── Related posts ── */}
				{relatedPosts.length > 0 && (
					<section className="border-t border-[#f3f4f6] bg-[#f9fafb] px-4 py-12 sm:px-6">
						<div className="mx-auto max-w-300">
							<h2 className="mb-6 text-[18px] font-bold text-[#111827]">Related Posts</h2>
							<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
								{relatedPosts.map((related) => (
									<Link
										key={related.slug}
										href={`/blog/${related.slug}`}
										className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
									>
										<div className="h-45 w-full overflow-hidden">
											<img
												src={related.image}
												alt={related.title}
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											/>
										</div>
										<div className="flex flex-col gap-2 p-4">
											<span className="w-fit rounded-full bg-[#f3f4f6] px-2.5 py-0.5 text-[10px] font-medium text-[#6b7280]">
												{related.badge}
											</span>
											<h3 className="text-[14px] font-semibold leading-snug text-[#111827] group-hover:text-[#5d61f2] transition-colors line-clamp-2">
												{related.title}
											</h3>
											<div className="mt-auto flex items-center gap-2 pt-1">
												<img
													src={related.avatar}
													alt={related.author}
													className="h-5 w-5 rounded-full object-cover"
												/>
												<span className="text-[11px] text-[#6b7280]">{related.author}</span>
												<span className="text-[#d1d5db]">·</span>
												<span className="text-[11px] text-[#6b7280]">{related.readTime}</span>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					</section>
				)}
			</main>
			<Footer />
		</>
	);
}
