import { ArrowUpRight } from "lucide-react";

import { SocialIcon } from "@/components/shared/social-icon";
import { getSocialPlatformLabel, type SocialLink } from "@/lib/social-links";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  links: SocialLink[];
  /** "pill" shows the platform name, "icon" shows a round icon button. */
  variant?: "pill" | "icon";
  className?: string;
  linkClassName?: string;
};

export function SocialLinks({ links, variant = "pill", className, linkClassName }: SocialLinksProps) {
  if (links.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-2", variant === "icon" && "gap-3", className)}>
      {links.map((link) => {
        const label = getSocialPlatformLabel(link.platform);
        return (
          <li key={`${link.platform}-${link.url}`}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={variant === "icon" ? `${label} (membuka tab baru)` : undefined}
              className={cn(
                "transition-colors",
                variant === "icon"
                  ? "flex size-10 items-center justify-center rounded-full border"
                  : "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-sm",
                linkClassName,
              )}
            >
              {variant === "icon" ? (
                <SocialIcon platform={link.platform} />
              ) : (
                <>
                  {label}
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  <span className="sr-only">(membuka tab baru)</span>
                </>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
