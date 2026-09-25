import { z } from "zod";

import { imageUrlSchema } from "@/lib/api/image-url";
import { socialLinkSchema } from "@/lib/social-links";

// Mirrors cms/app/Http/Resources/TeamMemberResource.php
export const teamMemberSchema = z.object({
  id: z.number(),
  name: z.string().trim(),
  // e.g. "CTO (Chief Technology Officer)"; see parseRole().
  role: z.string().trim(),
  photo: imageUrlSchema,
  // Plain text from a Filament Textarea.
  bio: z.string().nullable(),
  social_links: z.array(socialLinkSchema).default([]),

  // TODO: konfirmasi dengan backend — these fields are not in TeamMemberResource yet.
  // They are optional so the UI hides them until the CMS provides them.
  skills: z.array(z.string()).default([]),
  email: z.string().nullish(),
});

export type TeamMember = z.infer<typeof teamMemberSchema>;
