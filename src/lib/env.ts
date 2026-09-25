import { z } from "zod";

const serverEnvSchema = z.object({
  API_BASE_URL: z.url(),
  // Optional: content of Google Search Console's HTML-tag verification.
  GOOGLE_SITE_VERIFICATION: z.string().trim().min(1).optional(),
});

const publicEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
});

// Parsed lazily so a missing server var only fails where it is actually used.
export function getServerEnv(): z.infer<typeof serverEnvSchema> {
  return serverEnvSchema.parse({
    API_BASE_URL: process.env.API_BASE_URL,
    GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  });
}

export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

export const isProduction = process.env.NODE_ENV === "production";
