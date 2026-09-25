import { ArrowRight, Sparkles } from "lucide-react";

import { sectionIds, siteConfig } from "@/config/site";
import { HeroStats } from "@/features/site-settings/components/hero-stats";
import { HeroVisual } from "@/features/site-settings/components/hero-visual";

// Decorative dot grid layered over the hero gradient.
const dotGridStyle = {
  backgroundImage: "radial-gradient(rgb(255 255 255 / 0.14) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export function HeroSection() {
  const { eyebrow, headline, subheadline, stats } = siteConfig.hero;

  return (
    <section
      id={sectionIds.hero}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-dvh items-center overflow-hidden bg-gradient-hero text-white"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10" style={dotGridStyle} />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-4 pt-28 pb-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:px-8">
        <div className="flex flex-col gap-7">
          <p className="flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Sparkles aria-hidden="true" className="size-3.5" />
            {eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="max-w-xl text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {headline.before}{" "}
            <span className="bg-linear-to-r from-tech-cyan to-sky-100 bg-clip-text text-transparent">
              {headline.highlight}
            </span>{" "}
            {headline.after}
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-white/75">{subheadline}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`#${sectionIds.projects}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-tech-orange/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-tech-pink/40"
            >
              Lihat Proyek Kami
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href={`#${sectionIds.about}`}
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Tentang Kami
            </a>
          </div>

          <HeroStats stats={stats} />
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
