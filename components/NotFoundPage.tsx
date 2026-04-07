import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen bg-[#ffffff] px-6 pb-20 pt-28 sm:px-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(197, 203, 217, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 203, 217, 0.08) 1px, transparent 1px)",
          backgroundSize: "min(18vw, 180px) min(18vw, 180px)",
        }}
      >
        <section className="mx-auto flex max-w-7xl items-center justify-center pt-12 sm:pt-16">
          <div className="w-full max-w-5xl overflow-hidden bg-white/90 backdrop-blur-sm">
            <div className=" px-6 py-8 sm:px-10 sm:py-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f2c39c] bg-white px-3 py-1 text-[12px] font-medium text-[#c96e20]">
                <MapPin size={14} />
                <span>Page not found</span>
              </div>

              <h1 className="mt-6 max-w-2xl text-[36px] font-normal leading-[1.02] tracking-[-0.05em] text-[#0d0f17] sm:text-[58px]">
                This page doesn&apos;t
                <span className="font-[Georgia,serif] italic text-(--accent-color)"> exist</span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#697082] sm:text-[16px]">
                The link you followed may be broken, or the page may have been moved or removed.
                Head back to the homepage and find what you&apos;re looking for from there.
              </p>
            </div>

            <div className="grid gap-8 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="rounded-3xl border border-[#eef1f5] bg-[#fafbfc] p-5 sm:p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#959daf]">
                    Where to go
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 rounded-full bg-(--accent-color) px-4 py-2 text-[14px] font-medium text-white shadow-[0_20px_35px_-22px_rgba(240,140,84,0.9)] transition hover:bg-[#e98147]"
                    >
                      <span>Back to home</span>
                      <ArrowRight size={16} />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-[#dfe4ea] bg-white px-4 py-2 text-[14px] font-medium text-[#222836] transition hover:border-[#cfd6df] hover:bg-[#f8fafc]"
                    >
                      <span>Contact us</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#eef1f5] bg-[#0b1220] p-6 text-white shadow-[0_18px_40px_-30px_rgba(15,23,42,0.55)]">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#f3b37c]">
                  Quick links
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {[
                    { label: "Product", href: "/product/portfolio-dashboard" },
                    { label: "About Us", href: "/about" },
                    { label: "Blog", href: "/blog" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-[13px] text-slate-300 transition hover:bg-white/10 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={13} className="text-slate-500" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
