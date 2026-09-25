import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.fallbackName} | ${siteConfig.seo.titleSuffix}`,
    short_name: siteConfig.fallbackName,
    description: siteConfig.seo.description,
    start_url: "/",
    display: "browser",
    background_color: "#F8FAFC",
    theme_color: "#0F172A",
    lang: "id-ID",
    icons: [{ src: "/icon", sizes: "192x192", type: "image/png" }],
  };
}
