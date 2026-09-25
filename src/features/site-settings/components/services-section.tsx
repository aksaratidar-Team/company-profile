import { Code, Lightbulb, PenTool, type LucideIcon } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionIds, siteConfig } from "@/config/site";

const ICONS: Record<string, LucideIcon> = {
  code: Code,
  design: PenTool,
  consulting: Lightbulb,
};

export function ServicesSection() {
  return (
    <Section
      id={sectionIds.services}
      labelledBy="services-heading"
      className="bg-white"
      fullHeight={false}
    >
      <SectionHeading
        id="services-heading"
        eyebrow="Layanan"
        title="Apa yang Kami Kerjakan"
        description="Dari ide hingga produk yang siap digunakan, Aksara Tidar mendampingi setiap tahap transformasi digital Anda."
      />

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {siteConfig.services.map((service) => {
          const Icon = ICONS[service.icon] ?? Code;
          return (
            <li
              key={service.title}
              className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-tech-light p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-tech-blue/10 sm:p-8"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-tech-cyan to-tech-blue text-white shadow-md shadow-tech-cyan/30">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h3 className="text-lg font-bold text-tech-dark">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
