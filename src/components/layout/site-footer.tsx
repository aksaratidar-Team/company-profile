import Link from "next/link";

import { FooterContact } from "@/components/layout/footer-contact";
import { SiteLogo } from "@/components/layout/site-logo";
import { SocialLinks } from "@/components/shared/social-links";
import { sectionIds, siteConfig } from "@/config/site";
import type { SiteSettings } from "@/features/site-settings/types";

type SiteFooterProps = {
  siteName: string;
  settings: SiteSettings | null;
};

const headingClass = "text-sm font-semibold tracking-wider text-slate-400 uppercase";

export function SiteFooter({ siteName, settings }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const { tagline, navLinks, legalLinks } = siteConfig.footer;

  return (
    <footer id={sectionIds.contact} className="scroll-mt-16 bg-tech-dark text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1">
          <SiteLogo name={siteName} logoUrl={settings?.company_logo ?? null} />
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">{tagline}</p>
          <SocialLinks
            links={settings?.social_media ?? []}
            variant="icon"
            linkClassName="border-white/10 bg-white/5 text-slate-300 hover:border-tech-cyan/50 hover:bg-tech-cyan/10 hover:text-white"
          />
        </div>

        <nav aria-label="Navigasi footer" className="flex flex-col gap-5">
          <h2 className={headingClass}>Navigasi</h2>
          <ul className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-slate-300 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-5">
          <h2 className={headingClass}>Kontak</h2>
          <FooterContact
            email={settings?.contact_email ?? null}
            phone={settings?.contact_phone ?? null}
            address={settings?.address ?? null}
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {siteName}. Seluruh hak cipta dilindungi.
          </p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
