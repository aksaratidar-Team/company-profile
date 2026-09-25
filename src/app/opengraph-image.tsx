import { ImageResponse } from "next/og";

import { BrandMark } from "@/components/shared/brand-mark";
import { siteConfig } from "@/config/site";

// Preview image when the site is shared (WhatsApp, LinkedIn, X, Facebook, ...).
export const alt = `${siteConfig.fallbackName} | ${siteConfig.seo.titleSuffix}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 36,
          padding: "0 96px",
          color: "white",
          background: "linear-gradient(120deg, #0F172A 0%, #0F172A 45%, #06B6D4 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <BrandMark size={112} />
          <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -2 }}>
            {siteConfig.fallbackName}
          </div>
        </div>
        <div style={{ fontSize: 40, lineHeight: 1.3, maxWidth: 900, color: "rgba(255,255,255,0.9)" }}>
          {siteConfig.seo.titleSuffix}
        </div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.7)" }}>{siteConfig.legalName}</div>
      </div>
    ),
    size,
  );
}
