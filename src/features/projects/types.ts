import { z } from "zod";

import { imageListSchema, imageUrlSchema } from "@/lib/api/image-url";

export const projectStatusSchema = z.enum(["On Going", "Completed"]);

// Mirrors cms/app/Http/Resources/ProjectResource.php
export const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  // Optional in the CMS (e.g. internal products).
  client: z.string().nullable().default(null),
  // Year the project was built. The API sends a number; coerced to a string for display.
  // Defaults keep the old API shape (before the CMS migration) valid too.
  year: z.coerce.string().nullable().default(null),
  status: projectStatusSchema,
  // HTML produced by Filament RichEditor.
  description: z.string(),
  technologies: z.array(z.string()).default([]),
  highlights: z.array(z.string()).default([]),
  cover_image: imageUrlSchema,
  gallery: imageListSchema,
  project_url: z.string().nullable(),
});

export type ProjectStatus = z.infer<typeof projectStatusSchema>;

export type Project = z.infer<typeof projectSchema>;
