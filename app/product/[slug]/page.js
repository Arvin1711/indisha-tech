import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const productContent = {
  "portfolio-dashboard": {
    label: "Portfolio Dashboard",
    icon: "📊",
    description: "A real-time command center for all your investments — see performance, allocation, and trends at a glance.",
    highlights: [
      {
        icon: "📈",
        title: "Live Performance Tracking",
        body: "Monitor profit, loss, and ROI across all your assets updated in real time, so you never miss a market movement.",
      },
      {
        icon: "🗂",
        title: "Smart Allocation View",
        body: "Visual breakdowns of your portfolio by asset class, sector, and risk level to keep your strategy balanced.",
      },
      {
        icon: "🔔",
        title: "Custom Alerts",
        body: "Set price targets or threshold triggers and receive instant notifications when conditions are met.",
      },
      {
        icon: "📤",
        title: "One-Click Reports",
        body: "Export polished portfolio summaries in PDF or CSV for personal records or advisor reviews.",
      },
    ],
  },
  "risk-monitoring": {
    label: "Risk Monitoring",
    icon: "🛡",
    description: "Stay ahead of volatility with intelligent risk scoring, exposure analysis, and automated hedging suggestions.",
    highlights: [
      {
        icon: "⚠️",
        title: "Risk Score Engine",
        body: "Every asset in your portfolio receives a dynamic risk score updated daily based on market conditions.",
      },
      {
        icon: "🔍",
        title: "Exposure Analysis",
        body: "Identify dangerous concentrations in specific sectors, geographies, or asset classes before they hurt your returns.",
      },
      {
        icon: "🤖",
        title: "AI Hedging Suggestions",
        body: "Our model scans the market to suggest protective positions that reduce downside without capping upside.",
      },
      {
        icon: "📋",
        title: "Audit Trail",
        body: "Full history of risk events, responses, and outcomes so you can learn and improve your strategy over time.",
      },
    ],
  },
  "auto-rebalancing": {
    label: "Auto Rebalancing",
    icon: "⚡",
    description: "Set your target allocation once and let Verovio keep your portfolio perfectly aligned — automatically, every day.",
    highlights: [
      {
        icon: "🎯",
        title: "Target Allocation Setup",
        body: "Define your ideal portfolio mix by percentage and asset type. Verovio handles the rest.",
      },
      {
        icon: "🔄",
        title: "Automatic Drift Correction",
        body: "When market moves push your allocation out of band, trades are queued and executed to restore balance.",
      },
      {
        icon: "💰",
        title: "Tax-Efficient Execution",
        body: "Rebalancing logic considers tax implications to minimise capital gains while maintaining your strategy.",
      },
      {
        icon: "📅",
        title: "Scheduled or Threshold-Based",
        body: "Choose to rebalance on a calendar cadence or only when drift exceeds a threshold you define.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(productContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const content = productContent[slug];
  if (!content) return {};
  return { title: `${content.label} — Verovio` };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const content = productContent[slug];

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
            {content.icon} Product
          </span>
          <h1 className="mt-5 text-[40px] font-semibold tracking-[-0.04em] text-[#0d0f17] sm:text-[52px]">
            {content.label}
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-[#7a8192]">
            {content.description}
          </p>
        </section>

        {/* Feature highlights */}
        <section className="mx-auto mt-12 max-w-5xl px-6 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {content.highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-[#ebebf0] bg-white p-6 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.1)]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#fff3ea] text-[20px]">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#1a1d28]">{item.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.6] text-[#7a8192]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
