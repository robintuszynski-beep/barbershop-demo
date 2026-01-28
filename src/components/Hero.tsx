import Image from "next/image";
import Link from "next/link";
import { CalendarIcon } from "./icons";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden sm:min-h-[90vh]"
      aria-labelledby="hero-title"
    >
      {/* Background image */}
      <Image
        src={HERO_IMAGE}
        alt="Intérieur premium d'un barbershop"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#1a1a1a]/70"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <h1
          id="hero-title"
          className="font-heading mb-4 text-4xl font-bold tracking-wide text-[#f5f5f5] drop-shadow-lg sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          ROYAL BARBER
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/90 sm:mb-10 sm:text-xl md:text-2xl">
          L&apos;excellence du coiffeur homme. Coupe classique, barbe soignée et
          ambiance premium.
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-[#d4af37] px-6 py-3 text-base font-semibold text-[#1a1a1a] shadow-lg transition-all hover:bg-[#c4a02e] hover:shadow-[#d4af37]/30 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#1a1a1a] sm:px-8 sm:py-4 sm:text-lg"
        >
          <CalendarIcon className="size-5 sm:size-6" />
          Prendre RDV
        </Link>
      </div>
    </section>
  );
}
