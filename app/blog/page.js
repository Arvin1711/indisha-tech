import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subscribe from "@/sections/Subscribe";

const featuredPost = {
	slug: "unlocking-business-efficiency-with-saas-solutions",
	badge: "Business",
	title: "Unlocking Business Efficiency with SaaS Solutions",
	image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
	author: "Jennifer Taylor",
	readTime: "4 min read",
	excerpt: "Explore how SaaS platforms are reshaping business operations and enabling new levels of operational efficiency across industries.",
};

const otherFeaturedPosts = [
	{
		slug: "revolutionizing-industries-through-saas-implementation",
		title: "Revolutionizing Industries through SaaS implementation",
		image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=400&q=80",
	},
	{
		slug: "synergizing-saas-and-ux-design",
		title: "Synergizing saas and UX design for elevating digital experiences",
		image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80",
	},
	{
		slug: "navigating-saas-waters-with-intuitive-ui-and-ux",
		title: "Navigating saas waters with intuitive UI and UX",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
	},
	{
		slug: "sculpting-saas-success-the-art-of-ui-and-ux-design",
		title: "Sculpting saas success – the art of UI and UX design",
		image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
	},
	{
		slug: "transforming-saas-platforms-a-ui-ux-design-odyssey",
		title: "Transforming saas platforms – a UI/UX design odyssey",
		image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
	},
];

const recentPosts = [
	{
		slug: "mastering-ui-elements-a-practical-guide-for-designers",
		title: "Mastering UI Elements: A Practical Guide for Designers",
		excerpt: "Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.",
		image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
		author: "Jennifer Taylor",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
		readTime: "3 min read",
	},
	{
		slug: "crafting-seamless-experiences-the-art-of-intuitive-ui-design",
		title: "Crafting Seamless Experiences: The Art of Intuitive UI Design",
		excerpt: "Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and in...",
		image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
		author: "Jennifer Taylor",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
		readTime: "5 min read",
	},
	{
		slug: "beyond-aesthetics-the-power-of-emotional-ux-design",
		title: "Beyond Aesthetics: The Power of Emotional UX Design",
		excerpt: "Delve into the realm of emotional design and discover how incorporating empathy and psychol...",
		image: "https://images.unsplash.com/photo-1497366754035-f200586c559f?auto=format&fit=crop&w=700&q=80",
		author: "Ryan A.",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
		readTime: "2 min read",
	},
	{
		slug: "the-future-of-ui-design-trends-to-watch",
		title: "The Future of UI Design: Trends to Watch in 2026",
		excerpt: "From glassmorphism to AI-powered interfaces, these are the design trends shaping the next wave of digital experiences.",
		image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=80",
		author: "Sarah Kim",
		avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=80&q=80",
		readTime: "4 min read",
	},
	{
		slug: "design-systems-building-consistency-at-scale",
		title: "Design Systems: Building Consistency at Scale",
		excerpt: "A deep dive into how design systems empower teams to deliver consistent, high-quality products faster.",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
		author: "Daniel Lee",
		avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80",
		readTime: "6 min read",
	},
	{
		slug: "color-theory-for-digital-designers",
		title: "Color Theory for Digital Designers: A Practical Guide",
		excerpt: "Understanding color psychology and application can dramatically improve user engagement and brand recall.",
		image: "https://images.unsplash.com/photo-1541707578-a5c2f7b6e3e0?auto=format&fit=crop&w=700&q=80",
		author: "Amelia Zhang",
		avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80",
		readTime: "3 min read",
	},
];

const cfoResources = [
	{
		slug: "bear-market-strategies-how-top-cfos-plan-for-recession",
		title: "Bear Market Strategies: How Top CFOs Plan for Recession",
		tags: ["Finance strategy"],
		duration: "6min",
		image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
	},
	{
		slug: "financial-modeling-masterclass-with-ian-schnoor",
		title: "Financial Modeling Masterclass with Ian Schnoor of The Marquee Group",
		tags: ["Finance Insights"],
		duration: "40min",
		image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
		speakerImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80",
	},
];

export default function BlogPage() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen bg-white">
			<section
				className="pb-1 pt-24 sm:pb-1"
				style={{
					backgroundImage:
						"linear-gradient(rgba(197, 203, 217, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 203, 217, 0.2) 1px, transparent 1px)",
					backgroundSize: "min(18vw, 180px) min(18vw, 180px)",
				}}
			>
				<div className="py-16 text-center">
					<h1 className="text-[44px] font-semibold leading-[0.99] tracking-[-0.07em] text-[#0d0f17] sm:text-[53px] md:text-[68px] lg:text-[68px] xl:text-[72px]">
						<span className="font-[Georgia,serif] font-normal italic text-[#f08c54]">Insights</span>{" "}
						&amp; Ideas
						<br />
						From Our{" "}
						<span className="font-[Georgia,serif] font-normal italic text-[#f08c54]">Expert Team</span>
					</h1>
					<p className="mx-auto mt-5 max-w-150 text-[14px] leading-[1.6] text-[#9aa0ad] sm:mt-6 sm:text-[17px]">
						Explore articles on design, technology, finance, and product strategy — written by practitioners building the future.
					</p>
				</div>
			</section>
				{/* ── Hero / Featured Post ── */}
				<section className="mx-auto max-w-300 pb-4 py-10 sm:pb-6 lg:pb-8">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
						{/* Main featured post */}
						<Link href={`/blog/${featuredPost.slug}`} className="group relative overflow-hidden rounded-2xl">
							<div className="relative h-85 w-full overflow-hidden rounded-2xl sm:h-100">
								<img
									src={featuredPost.image}
									alt={featuredPost.title}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								{/* dark gradient overlay */}
								<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent rounded-2xl" />
								{/* Badge */}
								<span className="absolute left-5 top-5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm border border-white/30">
									{featuredPost.badge}
								</span>
								{/* Title */}
								<div className="absolute bottom-6 left-6 right-6">
									<h2 className="text-[22px] font-bold leading-tight text-white sm:text-[26px]">
										{featuredPost.title}
									</h2>
								</div>
							</div>
						</Link>

						{/* Other featured posts */}
						<div className="flex flex-col gap-1">
							<h3 className="mb-3 text-[13px] font-semibold text-[#111827]">Other featured posts</h3>
							<div className="flex flex-col divide-y divide-[#f3f4f6]">
								{otherFeaturedPosts.map((post) => (
									<Link
										key={post.slug}
										href={`/blog/${post.slug}`}
										className="flex items-center gap-3 py-3 group"
									>
										<div className="h-13 w-18 shrink-0 overflow-hidden rounded-lg">
											<img
												src={post.image}
												alt={post.title}
												className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
											/>
										</div>
										<p className="text-[12px] font-medium leading-snug text-[#374151] group-hover:text-[#5d61f2] transition-colors line-clamp-2">
											{post.title}
										</p>
									</Link>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* ── Recent Posts ── */}
				<section className="mx-auto max-w-300 px-4 pb-16 sm:px-6 lg:px-8">
					<div className="mb-6 flex items-center justify-between">
						<h2 className="text-[20px] font-bold text-[#111827]">Recent Posts</h2>
						<Link
							href="/blog/all"
							className="rounded-full border border-[#e5e7eb] px-4 py-1.5 text-[12px] font-medium text-[#374151] hover:bg-[#f9fafb] transition-colors"
						>
							All Posts
						</Link>
					</div>

					<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
						{recentPosts.map((post) => (
							<Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col">
								{/* Image */}
								<div className="mb-4 h-50 w-full overflow-hidden rounded-xl">
									<img
										src={post.image}
										alt={post.title}
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>
								{/* Title */}
								<h3 className="mb-2 text-[15px] font-bold leading-snug text-[#111827] group-hover:text-[#5d61f2] transition-colors">
									{post.title}
								</h3>
								{/* Excerpt */}
								<p className="mb-4 line-clamp-2 flex-1 text-[12px] leading-relaxed text-[#6b7280]">
									{post.excerpt}
								</p>
								{/* Author */}
								<div className="flex items-center gap-2">
									<img
										src={post.avatar}
										alt={post.author}
										className="h-6 w-6 rounded-full object-cover"
									/>
									<span className="text-[11px] text-[#6b7280]">
										{post.author}
									</span>
									<span className="text-[#d1d5db]">·</span>
									<span className="text-[11px] text-[#6b7280]">{post.readTime}</span>
								</div>
							</Link>
						))}
					</div>
				</section>

				<section className="bg-[#0b0630] px-14 py-24 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-300">
						<div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.05fr_1fr_1fr]">
							<div className="flex flex-col justify-between rounded-2xl bg-transparent p-1 sm:p-2">
								<div>
									<div className="mb-5 flex items-center gap-2">
										<span className="text-[11px] font-semibold tracking-[0.22em] text-[#ff6f9f]">● CFO</span>
										<span className="text-[11px] uppercase tracking-[0.22em] text-white/65">connect</span>
									</div>
									<h3 className="max-w-[14ch] text-[36px] font-semibold leading-[1.08] text-white sm:text-[40px]">
										Resources from our CFO community
									</h3>
									<p className="mt-4 max-w-[30ch] text-[13px] leading-relaxed text-white/55">
										Get videos, podcasts, and expert interviews featuring modern finance leaders.
									</p>
								</div>
								<Link
									href="/blog/cfo-connect"
									className="mt-7 inline-flex w-fit items-center gap-3 rounded-full border border-[#ff4d8f]/40 px-5 py-2.5 text-[12px] font-medium text-white transition hover:bg-white/10"
								>
									Discover CFO Connect
									<span className="text-[14px]">→</span>
								</Link>
							</div>

							<Link
								href={`/blog/${cfoResources[0].slug}`}
								className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
							>
								<div className="relative h-full min-h-72 w-full">
									<img
										src={cfoResources[0].image}
										alt={cfoResources[0].title}
										className="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-[#140733] via-[#140733]/55 to-transparent" />
									<div className="absolute inset-x-4 bottom-4">
										<h4 className="text-[16px] font-semibold leading-snug text-white">
											{cfoResources[0].title}
										</h4>
										<div className="mt-2 flex items-center gap-2">
											<span className="rounded-full bg-white/14 px-2.5 py-0.5 text-[10px] text-white/90">
												{cfoResources[0].tags[0]}
											</span>
											<span className="text-[10px] text-white/70">{cfoResources[0].duration}</span>
										</div>
									</div>
								</div>
							</Link>

							<Link
								href={`/blog/${cfoResources[1].slug}`}
								className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
							>
								<div className="relative h-full min-h-72 w-full">
									<img
										src={cfoResources[1].image}
										alt={cfoResources[1].title}
										className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-[#10052f] via-[#10052f]/55 to-transparent" />
									<div className="absolute left-4 top-4 h-16 w-16 overflow-hidden rounded-full border-2 border-white/35 shadow-lg">
										<img
											src={cfoResources[1].speakerImage}
											alt="Speaker"
											className="h-full w-full object-cover"
										/>
									</div>
									<div className="absolute inset-x-4 bottom-4">
										<h4 className="text-[15px] font-semibold leading-snug text-white">
											{cfoResources[1].title}
										</h4>
										<div className="mt-2 flex items-center gap-2">
											<span className="rounded-full bg-white/14 px-2.5 py-0.5 text-[10px] text-white/90">
												{cfoResources[1].tags[0]}
											</span>
											<span className="text-[10px] text-white/70">{cfoResources[1].duration}</span>
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</section>

			</main>
            <Subscribe />
			<Footer />
		</>
	);
}
