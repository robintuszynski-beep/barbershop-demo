"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "./icons";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[#d4af37]/20 bg-[#1a1a1a] backdrop-blur-sm"
      id="header"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#accueil"
          className="font-heading text-xl font-semibold tracking-wide text-[#f5f5f5] transition-colors hover:text-[#d4af37] sm:text-2xl"
        >
          ROYAL BARBER
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden gap-8 md:flex"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-[#f5f5f5]/90 transition-colors hover:text-[#d4af37]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex size-10 items-center justify-center rounded-md text-[#f5f5f5] transition-colors hover:bg-white/10 md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-[#1a1a1a]/95 backdrop-blur-md md:hidden"
          aria-hidden="false"
        >
          <nav
            className="flex flex-col gap-1 px-4 py-6"
            aria-label="Navigation mobile"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-lg font-medium text-[#f5f5f5] transition-colors hover:bg-[#d4af37]/20 hover:text-[#d4af37]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
