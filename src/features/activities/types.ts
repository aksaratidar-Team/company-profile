import { z } from "zod";

import { imageListSchema, imageUrlSchema } from "@/lib/api/image-url";

// Mirrors cms/app/Http/Resources/ActivityResource.php
export const activitySchema = z.object({
  id: z.number(),
  title: z.string(),
  date: z.string().nullable(),
  // Already localised by the backend, e.g. "20 Agustus 2026".
  date_formatted: z.string().nullable(),
  // HTML produced by Filament RichEditor.
  description: z.string().nullable(),
  cover_image: imageUrlSchema,
  gallery: imageListSchema,
  // Optional in the CMS; the UI hides each part when it is empty.
  // Defaults keep the old API shape (before the CMS migration) valid too.
  category: z.string().nullable().default(null),
  location: z.string().nullable().default(null),
  participants: z.string().nullable().default(null),
  highlights: z.array(z.string()).default([]),
});

export type Activity = z.infer<typeof activitySchema>;
