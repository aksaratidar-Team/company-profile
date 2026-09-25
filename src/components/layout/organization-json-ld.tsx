import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/config/site";
import type { SiteSettings } from "@/features/site-settings/types";
import { publicEnv } from "@/lib/env";

type OrganizationJsonLdProps = {
  siteName: string;
  settings: SiteSettings | null;
};

/** schema.org Organization + WebSite so search engines know the brand and its legal entity. */
export function OrganizationJsonLd({ siteName, settings }: OrganizationJsonLdProps) {
  const siteUrl = publicEnv.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  const sameAs = settings?.social_media.map((link) => link.url) ?? [];

  // Undefined fields are dropped by JSON.stringify.
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        legalName: siteConfig.legalName,
        description: siteConfig.seo.description,
        url: siteUrl,
        // Falls back to the generated app icon (app/apple-icon.tsx).
        logo: settings?.company_logo ?? `${siteUrl}/apple-icon`,
        email: settings?.contact_email ?? undefined,
        telephone: settings?.contact_phone ?? undefined,
        address: settings?.address ?? undefined,
        areaServed: "ID",
        sameAs: sameAs.length > 0 ? sameAs : undefined,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        inLanguage: "id-ID",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return <JsonLd data={data} />;
}
