"use client";

import { useState } from "react";
import Image from "next/image";

import { CoverImage } from "@/components/shared/cover-image";
import { cn } from "@/lib/utils";

type ImageGalleryProps = {
  title: string;
  images: string[];
  /** Aspect ratio / shape of the main image, e.g. "aspect-[4/3]". */
  mainClassName?: string;
  /** Optional overlay rendered on top of the main image (e.g. a status badge). */
  overlay?: React.ReactNode;
  /** Must match the section background so the active thumbnail ring has a clean gap. */
  ringOffsetClassName?: string;
};

/** Main image with selectable thumbnails. Remount (via `key`) when the item changes. */
export function ImageGallery({
  title,
  images,
  mainClassName,
  overlay,
  ringOffsetClassName = "ring-offset-white",
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSrc = images[activeIndex] ?? null;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <CoverImage
          src={activeSrc}
          alt={`Dokumentasi ${title}, gambar ${activeIndex + 1} dari ${Math.max(images.length, 1)}`}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className={cn("rounded-3xl shadow-xl shadow-tech-dark/10", mainClassName)}
        />
        {overlay}
      </div>

      {images.length > 1 && (
        <ul className="flex gap-3 overflow-x-auto p-1" aria-label={`Galeri ${title}`}>
          {images.map((src, index) => {
            const active = index === activeIndex;
            return (
              <li key={src} className="w-[calc(25%-0.5625rem)] min-w-20 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={active}
                  aria-label={`Tampilkan gambar ${index + 1}`}
                  className={cn(
                    "relative block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl transition outline-none focus-visible:ring-3 focus-visible:ring-tech-blue/50",
                    active
                      ? cn("ring-2 ring-tech-cyan ring-offset-2", ringOffsetClassName)
                      : "opacity-80 hover:opacity-100",
                  )}
                >
                  <Image src={src} alt="" fill sizes="200px" className="object-cover" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
