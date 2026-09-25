import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  labelledBy: string;
  className?: string;
  containerClassName?: string;
  /** When false, the section is only as tall as its content. */
  fullHeight?: boolean;
  children: React.ReactNode;
};

/** Landing section (full viewport height by default) with a centred content container. */
export function Section({
  id,
  labelledBy,
  className,
  containerClassName,
  fullHeight = true,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "flex scroll-mt-16 items-center py-20 sm:py-24",
        fullHeight && "min-h-dvh",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
