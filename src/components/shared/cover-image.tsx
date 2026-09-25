import Image from "next/image";
import { ImageOff } from "lucide-react";

import { cn } from "@/lib/utils";

type CoverImageProps = {
  src: string | null;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
};

/** 16:9 cover with a neutral fallback. Uses <span> so it is valid inside buttons. */
export function CoverImage({ src, alt, sizes, className, imageClassName }: CoverImageProps) {
  return (
    <span className={cn("relative block aspect-video overflow-hidden bg-slate-100", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} className={cn("object-cover", imageClassName)} />
      ) : (
        <span className="flex size-full items-center justify-center text-slate-400">
          <ImageOff aria-hidden="true" className="size-8" />
          <span className="sr-only">Gambar tidak tersedia</span>
        </span>
      )}
    </span>
  );
}
