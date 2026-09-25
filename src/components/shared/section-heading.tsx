import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
}: SectionHeadingProps) {
  const onDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
      )}
    >
      <p
        className={cn(
          "text-sm font-semibold tracking-widest uppercase",
          onDark ? "text-white/80" : "text-tech-blue",
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          onDark ? "text-white" : "text-tech-dark",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("text-base leading-relaxed", onDark ? "text-white/80" : "text-slate-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
