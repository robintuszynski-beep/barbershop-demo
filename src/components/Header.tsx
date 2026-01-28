"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "./icons";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

function NavLink({
  href,
  label,
  isActive,
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={
        isActive
          ? `font-medium text-[#d4af37] ${className}`
          : `font-medium text-[#f5f5f5]/90 transition-colors hover:text-[#d4af37] ${className}`
      }
    >
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[#d4af37]/20 bg-[#1a1a1a] backdrop-blur-sm"
      id="header"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-xl font-semibold tracking-wide text-[#f5f5f5] transition-colors hover:text-[#d4af37] sm:text-2xl"
        >
          ROYAL BARBER
        </Link>

        <nav
          className="hidden gap-8 md:flex"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink
              key={href}
              href={href}
              label={label}
              isActive={pathname === href}
              className="text-sm"
            />
          ))}
        </nav>

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

      {/* Backdrop (clic = fermer) */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Fermer le menu"
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm transform bg-[#1a1a1a] shadow-xl transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-16 items-center justify-end px-4 sm:h-20">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex size-10 items-center justify-center rounded-md text-[#f5f5f5] hover:bg-white/10"
            aria-label="Fermer le menu"
          >
            <XIcon />
          </button>
        </div>
        <nav
          className="flex flex-col gap-1 px-6 py-4"
          aria-label="Navigation mobile"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink
              key={href}
              href={href}
              label={label}
              isActive={pathname === href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-lg hover:bg-[#d4af37]/20"
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
