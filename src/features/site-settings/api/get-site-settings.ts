import { apiGet } from "@/lib/api/client";
import { apiResourceSchema } from "@/lib/api/types";
import { isProduction } from "@/lib/env";
import { mockSiteSettings } from "@/features/site-settings/mock-data";
import { siteSettingsSchema, type SiteSettings } from "@/features/site-settings/types";

// The backend answers `{ data: null }` until an admin fills in the settings.
const siteSettingsResponseSchema = apiResourceSchema(siteSettingsSchema.nullable());

/**
 * Used by the root layout, so it never throws.
 * Empty/failing API → mock in development, `null` in production (components use fallbacks).
 */
export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await apiGet("site-settings", {
      schema: siteSettingsResponseSchema,
      tags: ["site-settings"],
    });
    if (response.data) return response.data;
  } catch (error) {
    console.error("[site-settings] API request failed:", error);
  }

  return isProduction ? null : mockSiteSettings;
}
