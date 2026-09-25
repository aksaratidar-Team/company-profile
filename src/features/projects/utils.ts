import type { Project } from "@/features/projects/types";

/** Cover first, then gallery images, without duplicates. */
export function getProjectImages(project: Project): string[] {
  const images = [project.cover_image, ...project.gallery].filter(
    (src): src is string => Boolean(src),
  );
  return Array.from(new Set(images));
}

/** "Client · Year", falling back to whichever part exists. */
export function getProjectSubtitle(project: Project): string | null {
  const parts = [project.client, project.year].filter(Boolean);
  return parts.length > 0 ? parts.join(" · ") : null;
}
