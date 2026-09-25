import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

type RemotePattern = NonNullable<NonNullable<NextConfig["images"]>["remotePatterns"]>[number];

// CMS uploads are served from `/storage` on the same host as the API.
// A URL pattern implies `search: ""`, i.e. no query string allowed.
function getApiImagePattern(): URL | null {
  const apiBaseUrl = process.env.API_BASE_URL;
  if (!apiBaseUrl) return null;

  const { protocol, host } = new URL(apiBaseUrl);
  return new URL(`${protocol}//${host}/storage/**`);
}

export default function config(phase: string): NextConfig {
  const remotePatterns: RemotePattern[] = [];

  const apiImagePattern = getApiImagePattern();
  if (apiImagePattern) remotePatterns.push(apiImagePattern);

  // Mock data is only used by `next dev` and relies on Unsplash photos,
  // whose URLs carry sizing query params (so `search` is left open).
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    remotePatterns.push({ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" });
  }

  return {
    images: { remotePatterns },
  };
}
