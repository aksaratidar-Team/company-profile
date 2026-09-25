import { z } from "zod";

// Shared by site settings (`social_media`) and team members (`social_links`).
export const socialLinkSchema = z.object({
  platform: z.string(),
  url: z.string(),
});

export type SocialLink = z.infer<typeof socialLinkSchema>;

const PLATFORM_LABELS: Record<string, string> = {
  instagram: "Instagram",
  github: "GitHub",
  linkedin: "LinkedIn",
  facebook: "Facebook",
  youtube: "YouTube",
  tiktok: "TikTok",
  twitter: "X (Twitter)",
  x: "X",
  whatsapp: "WhatsApp",
  website: "Website",
};

export function getSocialPlatformLabel(platform: string): string {
  const key = platform.trim().toLowerCase();
  return PLATFORM_LABELS[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
}
