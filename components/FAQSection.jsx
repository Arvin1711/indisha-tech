export default function FAQSection({
  badge = "FAQ'S",
  title = "Let's Make Something\nAwesome Together",
  description = "",
  highlightItems = [],
  faqItems = [],
  accordionName = "faq-accordion",
  defaultOpenIndex = 0,
}) {
  const titleLines = title.split("\n");

  return (
    <section className="mx-auto mt-6 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="p-5 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div>
            <span className="inline-flex rounded-full bg-[#e9edff] px-4 py-1.5 text-[10px] font-semibold tracking-[0.02em] text-[#5a63f2]">
              {badge}
            </span>
            <h2 className="mt-5 text-[26px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#181338] sm:text-[32px]">
              {titleLines.map((line, idx) => (
                <span key={`${line}-${idx}`}>
                  {line}
                  {idx < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-xl text-[12px] leading-[1.75] text-[#62647b] sm:text-[13px]">
              {description}
            </p>

            <div className="mt-9 border-y border-[#d9def1] py-7">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px] text-[#53546a]">
                {highlightItems.map((item) => (
                  <p key={item} className="inline-flex items-center gap-2">
                    <span className="grid h-5 w-5 place-items-center rounded-full border border-[#7f87ff] text-[9px] text-[#6a72f8]">✓</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <details
                key={`${item.question}-${index}`}
                name={accordionName}
                open={index === defaultOpenIndex}
                className="group rounded-sm border border-[#ececf2] bg-white px-6 py-5 shadow-[0_12px_22px_-20px_rgba(15,23,42,0.4)]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <h3 className="text-[16px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#221a3f] group-open:text-[#5d61f2]">
                    {item.question}
                  </h3>
                  <span className="mt-1 text-[24px] leading-none text-[#6f74ff] transition-transform group-open:rotate-90">
                    »
                  </span>
                </summary>

                {item.answer && (
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-open:mt-4 group-open:grid-rows-[1fr] group-open:opacity-100">
                    <div className="overflow-hidden">
                      <p className="max-w-[95%] translate-y-1 text-[14px] leading-normal text-[#61657c] transition-transform duration-300 ease-out group-open:translate-y-0">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
