import Image from "next/image";
import { ArrowRight, Building2, CircleCheck } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionIds, siteConfig } from "@/config/site";

type AboutSectionProps = {
  aboutText: string | null;
};

export function AboutSection({ aboutText }: AboutSectionProps) {
  const { eyebrow, title, image, highlights } = siteConfig.about;

  return (
    <Section id={sectionIds.about} labelledBy="about-heading" className="bg-white">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="about-heading"
            eyebrow={eyebrow}
            title={title}
            description={aboutText ?? siteConfig.fallbackDescription}
            align="left"
          />

          <p className="-mt-3 flex items-center gap-2 text-sm text-slate-600">
            <Building2 aria-hidden="true" className="size-4 shrink-0 text-tech-cyan" />
            <span>
              Dikelola oleh{" "}
              <span className="font-semibold text-tech-dark">{siteConfig.legalName}</span>
            </span>
          </p>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item.title}
                className="flex gap-3 rounded-2xl border border-slate-100 bg-tech-light/60 p-5 shadow-sm"
              >
                <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-tech-cyan" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-tech-dark">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={`#${sectionIds.team}`}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-tech-dark shadow-sm transition hover:border-tech-blue hover:text-tech-blue"
          >
            Kenali Tim Kami
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-[2rem] shadow-2xl shadow-tech-dark/15">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
