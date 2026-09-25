import { CircleCheck, Sparkles } from "lucide-react";

const chipClass =
  "absolute flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold whitespace-nowrap text-white shadow-lg shadow-tech-dark/20 backdrop-blur-md sm:px-4 sm:py-2.5 sm:text-sm";

/**
 * Glass card illustration on the right of the hero.
 * Placeholder for a future 3D asset; decorative, hidden from assistive tech.
 */
export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-72 sm:max-w-sm lg:max-w-md">
      {/* Soft glow behind the card */}
      <div className="absolute inset-[15%] rounded-full bg-tech-cyan/30 blur-3xl" />

      {/* Glass frame */}
      <div className="absolute inset-[18%] rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl shadow-tech-dark/30 backdrop-blur-md">
        {/* Gradient tile */}
        <div className="absolute inset-[16%] flex rotate-[5deg] items-center justify-center rounded-[1.75rem] bg-linear-to-br from-tech-cyan via-tech-blue to-tech-dark shadow-xl shadow-tech-dark/40">
          <Sparkles className="size-14 text-white sm:size-16" strokeWidth={1.75} />
        </div>
      </div>

      {/* Floating chips */}
      <div className={`${chipClass} top-[10%] left-0 sm:top-[12%]`}>
        <CircleCheck className="size-4 text-tech-cyan" />
        Deploy Sukses
      </div>
      <div className={`${chipClass} right-0 bottom-[10%] sm:bottom-[12%]`}>
        <span className="flex size-5 items-center justify-center rounded-full bg-gradient-accent text-[10px] font-bold sm:size-6">
          AI
        </span>
        Powered Insight
      </div>
    </div>
  );
}
