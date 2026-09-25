import type { Activity } from "@/features/activities/types";

/** Cover first, then gallery images, without duplicates. */
export function getActivityImages(activity: Activity): string[] {
  const images = [activity.cover_image, ...activity.gallery].filter(
    (src): src is string => Boolean(src),
  );
  return Array.from(new Set(images));
}
