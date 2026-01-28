import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/icons";

const SOCIAL = [
  { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", Icon: FacebookIcon },
  { href: "https://x.com", label: "Twitter", Icon: TwitterIcon },
];

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] py-8 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-6">
          {SOCIAL.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f5f5]/70 transition-colors hover:text-[#d4af37]"
              aria-label={label}
            >
              <Icon className="size-6" />
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#f5f5f5]/60">
          © 2026 Royal Barber — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
