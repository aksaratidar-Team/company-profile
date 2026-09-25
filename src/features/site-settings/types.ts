import { z } from "zod";

import { imageUrlSchema } from "@/lib/api/image-url";
import { socialLinkSchema } from "@/lib/social-links";

// Mirrors cms/app/Http/Resources/SiteSettingResource.php
export const siteSettingsSchema = z.object({
  id: z.number(),
  company_name: z.string(),
  company_logo: imageUrlSchema,
  contact_email: z.string().nullable(),
  contact_phone: z.string().nullable(),
  address: z.string().nullable(),
  // Plain text from a Filament Textarea.
  about_us_text: z.string().nullable(),
  social_media: z.array(socialLinkSchema).default([]),
});

export type SiteSettings = z.infer<typeof siteSettingsSchema>;
