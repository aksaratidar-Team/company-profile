import type { SiteSettings } from "@/features/site-settings/types";

// Development-only fallback while the CMS singleton is still empty.
export const mockSiteSettings: SiteSettings = {
  id: 0,
  company_name: "Aksara Tidar",
  company_logo: null,
  contact_email: "aksaratidar@gmail.com",
  contact_phone: "+62 293 812 3456",
  address: "Girirejo, Tegalrejo, Kab Magelang, Jawa Tengah, Indonesia",
  about_us_text:
    "Aksara Tidar adalah perusahaan pengembang perangkat lunak yang berdiri sejak 2026, berkomitmen menghadirkan solusi teknologi yang relevan bagi UMKM, korporasi, hingga instansi pemerintah di seluruh Indonesia.",
  social_media: [
    { platform: "instagram", url: "https://instagram.com/" },
    { platform: "linkedin", url: "https://linkedin.com/" },
    { platform: "x", url: "https://x.com/" },
    { platform: "facebook", url: "https://facebook.com/" },
    { platform: "github", url: "https://github.com/" },
  ],
};
