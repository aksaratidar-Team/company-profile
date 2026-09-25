import { ImageResponse } from "next/og";

import { BrandMark } from "@/components/shared/brand-mark";

// Favicon shown in browser tabs and Google search results (multiple of 48px).
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<BrandMark size={size.width} />, size);
}
