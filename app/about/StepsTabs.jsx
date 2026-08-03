"use client";
import { useState } from "react";
import {
  ChevronsLeftRightEllipsis,
  DatabaseSearch,
  TabletSmartphone,
  WandSparkles,
} from "lucide-react";

const steps = [
  {
    title: "Product Discovery",
    description: "Research, scope, and align on a clear product roadmap.",
    icon: <DatabaseSearch />,
  },
  {
    title: "UI/UX Design",
    description: "Craft intuitive interfaces that convert and delight users.",
    icon: <WandSparkles />,
  },
  {
    title: "App Development",
    description: "Build scalable mobile apps with modern tech stacks.",
    icon: <TabletSmartphone />,
  },
  {
    title: "Web Platform",
    description: "Deploy performant web platforms built to grow with you.",
    icon: <ChevronsLeftRightEllipsis />,
  },
];

export default function StepsTabs() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <div className="relative mt-12 sm:mt-16">
      {/* Connector line — desktop only */}
      <div
        className="absolute inset-x-8 top-11.5 hidden h-px lg:block"
        style={{
          background:
            "linear-gradient(to right, transparent, #d0d7f5 20%, #d0d7f5 80%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {steps.map((step, index) => {
          const active = activeStep === index;
          return (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`group relative flex flex-col rounded-2xl p-5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3e5af6]/50 sm:rounded-3xl sm:p-6 ${
                active
                  ? "bg-linear-to-br from-[#f98265] to-(--accent-color) text-white shadow-[0_10px_28px_-10px_rgba(62,90,246,0.18)]"
                  : "border border-[#e6eaf6] bg-white shadow-[0_2px_12px_-6px_rgba(14,24,62,0.1)] hover:-translate-y-0.5 hover:border-[#c5ceee] hover:shadow-[0_10px_28px_-10px_rgba(62,90,246,0.18)]"
              }`}
            >
              <div
                className={`relative mb-5 grid h-11 w-11 place-items-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12 sm:rounded-2xl ${
                  active
                    ? "bg-white/15 text-white"
                    : "bg-[#edf0fc] text-(--accent-color) group-hover:bg-(--accent-color)/12"
                }`}
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5">{step.icon}</span>
              </div>

              <p
                className={`text-[13px] font-bold leading-snug transition-colors sm:text-[14px] ${active ? "text-white" : "text-[#0d1226] group-hover:text-[#1a2450]"}`}
              >
                {step.title}
              </p>

              <p
                className={`mt-1.5 text-[11px] leading-relaxed transition-colors sm:text-[12px] ${active ? "text-white/65" : "text-[#9099b8] group-hover:text-[#6b7394]"}`}
              >
                {step.description}
              </p>

              <div
                className={`mt-4 h-0.75 rounded-full transition-all duration-300 ${active ? "w-8 bg-white/35" : "w-0 bg-[#3e5af6]/25 group-hover:w-6"}`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
