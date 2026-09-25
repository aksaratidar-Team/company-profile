import type { MetadataRoute } from "next";

import { publicEnv } from "@/lib/env";

// Single-page site: sections are anchors on "/", so only the home page is listed.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: publicEnv.NEXT_PUBLIC_SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
