"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { sectionIds, type NavLink } from "@/config/site";

type MobileNavProps = {
  links: NavLink[];
  siteName: string;
};

export function MobileNav({ links, siteName }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon-lg" className="md:hidden" />}
        aria-label="Buka menu navigasi"
      >
        <Menu aria-hidden="true" className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-4/5 max-w-xs">
        <SheetHeader className="border-b">
          <SheetTitle className="text-lg font-bold text-tech-dark">{siteName}</SheetTitle>
        </SheetHeader>
        <nav aria-label="Navigasi seluler" className="flex flex-col gap-6 px-4">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-tech-dark transition-colors hover:bg-tech-light hover:text-tech-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`#${sectionIds.contact}`}
            onClick={close}
            className="rounded-full bg-gradient-accent px-5 py-3 text-center font-semibold text-white"
          >
            Hubungi Kami
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
