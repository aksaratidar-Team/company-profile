import { z } from "zod";

import { getServerEnv } from "@/lib/env";

/**
 * Keeps only image URLs that `next/image` is allowed to load (same rule as
 * `remotePatterns` in next.config.ts: API host, `/storage/**`, no query string).
 * Any other URL would make `next/image` throw and take down the whole page,
 * so it is dropped (the UI shows its placeholder) and logged instead.
 */
function toAllowedImageUrl(src: string | null): string | null {
  if (!src) return null;

  try {
    const api = new URL(getServerEnv().API_BASE_URL);
    const url = new URL(src);
    if (url.origin === api.origin && url.pathname.startsWith("/storage/") && !url.search) {
      return src;
    }
  } catch {
    // Not a valid absolute URL; fall through to the warning.
  }

  console.warn(
    `[images] Ignoring "${src}": expected ${getServerEnv().API_BASE_URL.replace(/\/api\/?$/, "")}/storage/... ` +
      "(check APP_URL on the CMS).",
  );
  return null;
}

/** Single optional image from the CMS (cover, photo, logo). */
export const imageUrlSchema = z.string().nullable().transform(toAllowedImageUrl);

/** List of images from the CMS (gallery). */
export const imageListSchema = z
  .array(z.string())
  .default([])
  .transform((list) => list.map(toAllowedImageUrl).filter((src): src is string => src !== null));
