import Image from "next/image";

import { cn } from "@/lib/utils";

type PersonAvatarProps = {
  name: string;
  photo: string | null;
  sizes: string;
  className?: string;
};

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

/** Square/circular portrait; shows initials on a gradient when there is no photo. */
export function PersonAvatar({ name, photo, sizes, className }: PersonAvatarProps) {
  return (
    // <span> so the avatar is valid inside buttons (e.g. dialog triggers).
    <span className={cn("relative block overflow-hidden bg-gradient-hero [container-type:inline-size]", className)}>
      {photo ? (
        <Image src={photo} alt={`Foto ${name}`} fill sizes={sizes} className="object-cover" />
      ) : (
        <span
          role="img"
          aria-label={`Inisial ${name}`}
          className="flex size-full items-center justify-center font-bold text-white [font-size:clamp(1rem,30cqw,3rem)]"
        >
          {getInitials(name)}
        </span>
      )}
    </span>
  );
}
