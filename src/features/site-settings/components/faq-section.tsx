import { ChevronDown } from "lucide-react";

import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionIds, siteConfig } from "@/config/site";

export function FaqSection() {
  const { faq } = siteConfig;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <Section id={sectionIds.faq} labelledBy="faq-heading" className="bg-white" fullHeight={false}>
      <SectionHeading
        id="faq-heading"
        eyebrow="FAQ"
        title="Pertanyaan Seputar Aksara Tidar"
        description="Hal-hal yang paling sering ditanyakan tentang siapa kami dan bagaimana kami bekerja."
      />

      {/* Native <details>: answers stay in the HTML for search engines and work without JS. */}
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
        {faq.map((item, index) => (
          <details
            key={item.question}
            open={index === 0}
            className="group rounded-2xl border border-slate-200 bg-tech-light px-5 py-4 transition-colors open:border-tech-cyan/40 open:bg-white sm:px-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-tech-dark [&::-webkit-details-marker]:hidden">
              <h3 className="text-base">{item.question}</h3>
              <ChevronDown
                aria-hidden="true"
                className="size-5 shrink-0 text-tech-blue transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="pt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>

      <JsonLd data={faqJsonLd} />
    </Section>
  );
}
