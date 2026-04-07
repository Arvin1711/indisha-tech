import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sectionContent = {
  members: {
    label: "Leadership Team",
    icon: "👥",
    description: "Meet the leaders driving Verovio's vision and strategy.",
    people: [
      { name: "Aria Sutanto", role: "Chief Executive Officer", bio: "Visionary leader with 15 years in fintech, guiding Verovio's global growth." },
      { name: "Reno Prakasa", role: "Chief Technology Officer", bio: "Architect of Verovio's core platform, passionate about scalable financial systems." },
      { name: "Diana Kartika", role: "Head of Product", bio: "Bridges user needs and engineering to ship tools investors actually love." },
      { name: "Felix Hendra", role: "Chief Risk Officer", bio: "10 years in asset management ensuring every product meets the highest safety standards." },
    ],
  },
  mission: {
    label: "Mission and Values",
    icon: "🌍",
    description: "Why we exist, what we believe, and the impact we want to create.",
    pillars: [
      { icon: "🎯", title: "Our Mission", body: "To democratize intelligent investing by giving every individual access to the same tools that professionals rely on." },
      { icon: "👁", title: "Our Vision", body: "A world where financial confidence is not a privilege — it is a right available to everyone, everywhere." },
      { icon: "⚖️", title: "Our Values", body: "Transparency, integrity, and relentless innovation drive every decision we make at Verovio." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(sectionContent).map((section) => ({ section }));
}

export async function generateMetadata({ params }) {
  const { section } = await params;
  const content = sectionContent[section];
  if (!content) return {};
  return { title: `${content.label} — Verovio` };
}

export default async function AboutSectionPage({ params }) {
  const { section } = await params;
  const content = sectionContent[section];

  if (!content) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f5f2] pb-20 pt-24">
        {/* Page header */}
        <section className="mx-auto max-w-5xl px-6 pt-10 lg:px-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f0c89a] bg-[#fff4eb] px-4 py-1.5 text-[13px] font-medium text-[#c96e20]">
            {content.icon} About Verovio
          </span>
          <h1 className="mt-5 text-[40px] font-semibold tracking-[-0.04em] text-[#0d0f17] sm:text-[52px]">
            {content.label}
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#7a8192]">{content.description}</p>
        </section>

        {/* Leadership grid */}
        {section === "members" && (
          <section className="mx-auto mt-12 max-w-5xl px-6 lg:px-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {content.people.map((person) => (
                <div
                  key={person.name}
                  className="rounded-2xl border border-[#ebebf0] bg-white p-6 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.1)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3ea] text-[22px]">👤</div>
                  <h2 className="mt-4 text-[17px] font-semibold text-[#1a1d28]">{person.name}</h2>
                  <p className="text-[13px] font-medium text-[#f08c54]">{person.role}</p>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#7a8192]">{person.bio}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Mission/Vision pillars */}
        {section === "mission" && (
          <section className="mx-auto mt-12 max-w-5xl px-6 lg:px-10">
            <div className="grid gap-5 sm:grid-cols-3">
              {content.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex flex-col gap-4 rounded-2xl border border-[#ebebf0] bg-white p-7 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.1)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#fff3ea] text-[22px]">
                    {pillar.icon}
                  </span>
                  <h2 className="text-[18px] font-semibold text-[#1a1d28]">{pillar.title}</h2>
                  <p className="text-[14px] leading-[1.7] text-[#7a8192]">{pillar.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

