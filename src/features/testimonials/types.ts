import { z } from "zod";

import { imageUrlSchema } from "@/lib/api/image-url";

// Mirrors cms/app/Http/Resources/TestimonialResource.php
export const testimonialSchema = z.object({
  id: z.number(),
  client_name: z.string(),
  client_company: z.string().nullable(),
  client_photo: imageUrlSchema,
  // May contain HTML from Filament RichEditor.
  content: z.string(),
  // Backend clamps this to 1–5.
  rating: z.number().int().min(1).max(5),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
