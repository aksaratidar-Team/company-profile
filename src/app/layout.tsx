import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { OrganizationJsonLd } from "@/components/layout/organization-json-ld";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { getSiteSettings } from "@/features/site-settings/api/get-site-settings";
import { getServerEnv, publicEnv } from "@/lib/env";
import { cn } from "@/lib/utils";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const siteName = settings?.company_name ?? siteConfig.fallbackName;
  const { titleSuffix, description, keywords } = siteConfig.seo;
  const title = `${siteName} | ${titleSuffix}`;

  return {
    metadataBase: new URL(publicEnv.NEXT_PUBLIC_SITE_URL),
    title: { default: title, template: `%s | ${siteName}` },
    description,
    keywords,
    applicationName: siteName,
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    category: "technology",
    // Image comes from app/opengraph-image.tsx.
    openGraph: { type: "website", locale: "id_ID", url: "/", siteName, title, description },
    twitter: { card: "summary_large_image", title, description },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    verification: { google: getServerEnv().GOOGLE_SITE_VERIFICATION },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  const siteName = settings?.company_name ?? siteConfig.fallbackName;

  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={cn("font-sans motion-safe:scroll-smooth", plusJakarta.variable)}
    >
      <body className="flex min-h-dvh flex-col bg-tech-light text-tech-dark antialiased">
        <SiteHeader siteName={siteName} logoUrl={settings?.company_logo ?? null} />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter siteName={siteName} settings={settings} />
        <OrganizationJsonLd siteName={siteName} settings={settings} />
      </body>
    </html>
  );
}
