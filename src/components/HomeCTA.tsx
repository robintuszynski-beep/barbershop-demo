import Link from "next/link";
import { ScissorsIcon } from "./icons";

export function HomeCTA() {
  return (
    <section
      className="bg-[#1a1a1a] py-16 sm:py-20 lg:py-24"
      aria-labelledby="cta-title"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="cta-title"
          className="font-heading mb-4 text-2xl font-bold tracking-tight text-[#f5f5f5] sm:text-3xl md:text-4xl"
        >
          Découvrez nos services
        </h2>
        <p className="mb-8 text-[#f5f5f5]/80 sm:text-lg">
          Coupe classique, barbe, forfait complet… Des tarifs transparents et une
          équipe passionnée pour vous accueillir.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-md bg-[#d4af37] px-6 py-3 text-base font-semibold text-[#1a1a1a] transition-all hover:bg-[#c4a02e] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#1a1a1a] sm:px-8 sm:py-4 sm:text-lg"
        >
          <ScissorsIcon className="size-5 sm:size-6" />
          Voir les services & tarifs
        </Link>
      </div>
    </section>
  );
}
