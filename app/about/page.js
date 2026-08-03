import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { MousePointerClick, Sparkles } from "lucide-react";

const values = [
  {
    icon: "🚀",
    title: "Product-Led",
    description:
      "We align business goals, user needs, and technology choices to build products that create measurable impact.",
  },
  {
    icon: "🔐",
    title: "Built Secure",
    description:
      "Security is integrated into every stage of delivery, from architecture and code reviews to deployment and monitoring.",
  },
  {
    icon: "🤝",
    title: "True Partnership",
    description:
      "We colaurumxai as an extension of your team with transparent communication, shared ownership, and clear priorities.",
  },
  {
    icon: "⚡",
    title: "Fast Execution",
    description:
      "Agile workflows, modern tooling, and senior engineering help us ship quality software quickly and consistently.",
  },
];

const leadershipMembers = [
  {
    name: "Sarah Lim",
    role: "Co-Founder & Chief Executive Officer (CEO)",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Daniel Hartono",
    role: "Co-Founder & Chief Technology Officer (CTO)",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Amelia Zhang",
    role: "Chief Product Officer (CPO)",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Hana Yamada",
    role: "Head of People & Culture",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
  },
  // {
  // 	name: "Ravi Kumar",
  // 	role: "Chief Operating Officer (COO)",
  // 	image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80",
  // },
  // {
  // 	name: "Elena Martinez",
  // 	role: "Chief Marketing Officer (CMO)",
  // 	image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=700&q=80",
  // },
  // {
  // 	name: "Michael Tan",
  // 	role: "Chief Financial Officer (CFO)",
  // 	image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=700&q=80",
  // },
  // {
  // 	name: "James O'Connor",
  // 	role: "Head of Sales & Partnerships",
  // 	image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
  // },
];

export const metadata = {
  title: "Our Company — aurumxai",
  description:
    "Learn how aurumxai designs and builds scalable software products for startups and enterprises.",
};

const visions = [
  {
    title: "Vision 01",
    description:
      "To become a trusted global software partner for ambitious teams building the next generation of digital products.",
  },
  {
    title: "Vision 02",
    description:
      "To make high-quality engineering accessible, enabling companies of every size to launch, scale, and innovate with confidence.",
  },
];

const missions = [
  {
    title: "Mission 01",
    description:
      "Deliver reliable, maintainable software through strong architecture, clean code standards, and robust quality assurance.",
  },
  {
    title: "Mission 02",
    description:
      "Help clients move faster with product discovery, rapid prototyping, and iterative releases focused on real user value.",
  },
  {
    title: "Mission 03",
    description:
      "Support long-term growth with scalable cloud infrastructure, performance optimization, and continuous product improvements.",
  },
];

const faqItems = [
  {
    question: "What types of software projects do you build?",
    answer:
      "We build web platforms, mobile apps, internal tools, SaaS products, and custom enterprise systems. Our team supports projects from early MVP stage to large-scale production environments.",
    expanded: false,
  },
  {
    question: "How does your development process work?",
    answer:
      "We start with discovery and technical planning, then move into design, development, testing, and deployment. You get weekly progress updates, sprint demos, and a clear roadmap at every step.",
    expanded: true,
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes. We frequently colaurumxai with in-house teams, providing dedicated developers, design support, architecture guidance, or end-to-end delivery depending on your needs.",
    expanded: false,
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Absolutely. We offer post-launch support including monitoring, bug fixes, performance tuning, feature enhancements, and infrastructure maintenance.",
    expanded: false,
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope and complexity. MVPs often take 8-12 weeks, while larger platforms may run longer in phased releases. We define timelines clearly before development starts.",
    expanded: false,
  },
  {
    question: "What technologies does aurumxai use?",
    answer:
      "We work with modern stacks including React, Next.js, Node.js, TypeScript, cloud platforms, and scalable databases, selecting tools based on product goals and long-term maintainability.",
    expanded: false,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen bg-[#ffffff] pt-24 pb-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(197, 203, 217, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 203, 217, 0.04) 1px, transparent 1px)",
          backgroundSize: "min(18vw, 180px) min(18vw, 180px)",
        }}
      >
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-10 text-center lg:px-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f0c89a] bg-[#fff4eb] px-4 py-1.5 text-[11px] font-medium text-[#c96e20]">
            🏢 About aurumxai
          </span>

          <h1 className="mx-auto mt-16 max-w-5xl text-[36px] font-normal leading-[0.99] tracking-[-0.07em] text-[#0d0f17] sm:text-[60px] sm:leading-[0.99] sm:tracking-[-0.07em] md:text-[58px] lg:text-[58px] xl:text-[58px]">
            <span className="inline-block">Building the future of &nbsp;</span>
            <span className="font-[Georgia,serif] font-normal italic text-(--accent-color)">
              digital products
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-5xl text-[14px] sm:text-[16px] leading-[1.7] text-[#7a8192]">
            aurumxai was founded with one mission: help companies turn ideas
            into high-impact software. We combine product strategy, design
            thinking, and modern engineering to build secure, scalable digital
            experiences that drive real business growth.
          </p>
        </section>

        {/* Stats */}
        <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-4 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.12)] sm:grid-cols-3 sm:gap-4 sm:p-8">
            {[
              { value: "320+", label: "Products launched" },
              { value: "45+", label: "Engineers & designers" },
              { value: "98%", label: "Client satisfaction" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`px-3 py-4 text-center sm:px-0 sm:py-0 ${index === 2 ? "col-span-2 mx-auto w-full max-w-[16rem] sm:col-span-1 sm:max-w-none" : ""}`}
              >
                <p className="text-[24px] font-semibold tracking-tight text-[#0d0f17] sm:text-[32px]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] text-[#8e96a7] sm:text-[12px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-10">
          <h2 className="text-[24px] font-semibold tracking-tight text-[#0d0f17]">
            What we stand for
          </h2>

          <div className="mt-3.5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val) => (
              <div
                key={val.title}
                className="flex flex-col gap-3 rounded-2xl border border-[#ebebf0] bg-white p-6 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.1)]"
              >
                {/* Row 1: icon + title */}
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#fff3ea] text-[18px]">
                    {val.icon}
                  </span>
                  <h3 className="text-[14px] font-semibold text-[#1a1d28]">
                    {val.title}
                  </h3>
                </div>

                {/* Row 2: description */}
                <p className="text-[13px] leading-[1.6] text-[#7a8192]">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section className="mx-auto mt-18 max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden px-4 pb-7 pt-5 sm:px-8 sm:pb-10 sm:pt-8 lg:px-10 lg:pb-14">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.55fr] lg:items-start">
            <div className="text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#7a7f8a]">
                Founder & Leadership team
              </p>
              <h3 className="mt-2 text-[28px] font-semibold tracking-[-0.02em] text-[#1c2029] sm:text-[34px]">
                Meet the People Behind aurumxai.
              </h3>
              <p className="mx-auto mt-2 max-w-3xl text-[12px] text-[#6f7686] sm:text-[13px]">
                From product vision to technical execution, our leadership team
                drives innovation and delivery excellence.
              </p>
            </div>

            <div className="ml-auto w-full rounded-lg max-w-67.5 bg-[#f7f7f8] p-5 sm:p-6">
              <p className="text-[36px] font-bold leading-[0.9] tracking-[-0.04em] text-(--accent-color)">
                25+
              </p>
              <p className="mt-1 text-[30px] font-semibold leading-[0.9] tracking-[-0.04em] text-[#191d26]">
                awards &amp;
              </p>
              <p className="text-[30px] font-semibold leading-[0.9] tracking-[-0.04em] text-[#191d26]">
                featured
              </p>
              <p className="mt-8 text-[12px] leading-[1.4] text-[#8a90a0]">
                Recognized for product innovation, engineering quality, and
                outstanding client outcomes.
              </p>
            </div>
          </div>

          <section>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {leadershipMembers.map((member) => (
                <article
                  key={member.name}
                  className="group relative h-72 overflow-hidden rounded-2xl border border-[#e2e5eb] bg-[#d9dde4]"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/72 via-black/32 to-transparent px-3 pb-3 pt-8 text-white">
                    <p className="text-[13px] font-semibold leading-tight">
                      {member.name}
                    </p>
                    <p className="mt-1 text-[11px] leading-[1.35] text-white/85">
                      {member.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="px-4 pb-7 pt-5 sm:px-8 sm:pb-10 sm:pt-8 lg:px-10 lg:pb-14">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
            <div className="relative rounded-2xl bg-gray-50 p-5 sm:p-6">
              <div className="max-w-full space-y-5">
                {visions.map((item, index) => (
                  <div key={index}>
                    <p
                      className="text-[20px] font-semibold text-[#1c2029] flex
											items-center gap-2"
                    >
                      <Sparkles size={16} color="#980128" /> {item.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-[1.45] text-[#1c2029] pl-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* <div className="absolute right-5 top-1/2 grid h-28 w-28 -translate-y-1/2 place-items-center rounded-md bg-white shadow-[0_12px_28px_-20px_rgba(15,23,42,0.45)]">
								<span className="text-[50px]">👁</span>
							</div> */}
            </div>

            <div className="px-2 text-center lg:px-6">
              <h3 className="text-[44px] font-semibold leading-[0.98] tracking-[-0.03em] text-[#191d26] sm:text-[52px]">
                Our Vision &amp;
                <br />
                Mission
              </h3>
              <p className="mx-auto mt-4 max-w-md text-[14px] leading-normal text-[#70788a]">
                Our vision and mission guide how we design, develop, and scale
                software products that solve real-world business challenges.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[0.95fr_1.25fr]">
            <div className="overflow-hidden rounded-2xl border border-[#dbe0ea] bg-white">
              <div className="relative min-h-36 h-full w-full">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Team handshake"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative rounded-2xl bg-gray-50 p-5 sm:p-6">
              <div className="space-y-5">
                {missions.map((item, index) => (
                  <div key={index}>
                    <p className="text-[20px] font-semibold text-[#1c2029] flex items-center gap-2">
                      <MousePointerClick size={18} color="#980128" />{" "}
                      {item.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-[1.45] text-[#1c2029] pl-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* <div className="absolute left-5 top-1/4 grid h-28 w-28 -translate-y-1/2 place-items-center rounded-md bg-white shadow-[0_12px_28px_-20px_rgba(15,23,42,0.45)]">
								<span className="text-[50px]">🚀</span>
							</div> */}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        badge="FAQ'S"
        title={`Let's Make Something\nAwesome Together`}
        description="We are your software development partner for strategy, design, and engineering. Our team helps you launch faster, scale smarter, and deliver products users love."
        highlightItems={["Dedicated product teams", "Scalable cloud solutions"]}
        faqItems={faqItems}
        accordionName="about-faq-accordion"
        defaultOpenIndex={1}
      />

      <Footer />
    </>
  );
}
