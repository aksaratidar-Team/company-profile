import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

type SiteLogoProps = {
  name: string;
  logoUrl: string | null;
  className?: string;
};

export function SiteLogo({ name, logoUrl, className }: SiteLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${name} - Beranda`}
      className={cn("flex shrink-0 items-center gap-2.5 font-bold tracking-tight", className)}
    >
      {logoUrl ? (
        <Image src={logoUrl} alt="" width={36} height={36} className="size-9 object-contain" />
      ) : (
        <span
          aria-hidden="true"
          className="flex size-9 items-center justify-center rounded-xl bg-linear-to-br from-tech-cyan to-tech-blue text-white shadow-md shadow-tech-cyan/30"
        >
          <Sparkles className="size-5" />
        </span>
      )}
      <span className="text-lg">{name}</span>
    </Link>
  );
}
