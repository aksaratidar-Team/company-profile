import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteLogo } from "@/components/layout/site-logo";
import { sectionIds, siteConfig } from "@/config/site";

type SiteHeaderProps = {
  siteName: string;
  logoUrl: string | null;
};

// Fixed so it floats over the page without taking layout space;
// sections use scroll-mt-16 so anchored headings clear it.
export function SiteHeader({ siteName, logoUrl }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/40 bg-white/70 shadow-sm shadow-tech-dark/5 backdrop-blur-lg">
      <div className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8">
        <SiteLogo name={siteName} logoUrl={logoUrl} className="text-tech-dark" />

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-tech-dark/80 transition-colors hover:text-tech-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end">
          <a
            href={`#${sectionIds.contact}`}
            className="hidden rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-tech-orange/20 transition hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
          >
            Hubungi Kami
          </a>
          <MobileNav links={siteConfig.navLinks} siteName={siteName} />
        </div>
      </div>
    </header>
  );
}
