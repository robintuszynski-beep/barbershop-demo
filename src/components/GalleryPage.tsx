"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "toutes" | "coupes" | "barbes" | "styles";

const GALLERY: { src: string; alt: string; category: Category }[] = [
  // COUPES - Images de coupes de cheveux masculines
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "Coupe moderne en action",
    category: "coupes",
  },
  {
    src: "https://images.unsplash.com/photo-1654097801176-cb1795fd0c5e?w=600&q=80",
    alt: "Coupe au salon",
    category: "coupes",
  },
  {
    src: "https://images.unsplash.com/photo-1654097800183-574ba7368f74?w=600&q=80",
    alt: "Coupe stylée",
    category: "coupes",
  },
  {
    src: "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=600&q=80",
    alt: "Coupe professionnelle",
    category: "coupes",
  },
  
  // BARBES - Images de taille/entretien de barbe
  {
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=600&q=80",
    alt: "Taille de barbe précise",
    category: "barbes",
  },
  {
    src: "https://images.unsplash.com/photo-1654097803253-d481b6751f29?w=600&q=80",
    alt: "Entretien barbe",
    category: "barbes",
  },
  {
    src: "https://images.unsplash.com/photo-1743779035881-9205ef92f1ce?w=600&q=80",
    alt: "Rasage tondeuse",
    category: "barbes",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431618-317f6a5f9a6b?w=600&q=80",
    alt: "Soin de barbe",
    category: "barbes",
  },
  
  // SALON - Intérieur barbershop, fauteuils, ambiance
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
    alt: "Ambiance barbershop classique",
    category: "styles",
  },
  {
    src: "https://images.unsplash.com/photo-1621645582931-d1d3e6564943?w=600&q=80",
    alt: "Fauteuil professionnel",
    category: "styles",
  },
  {
    src: "https://images.unsplash.com/photo-1592647420148-bfcc177e2117?w=600&q=80",
    alt: "Salon moderne",
    category: "styles",
  },
  {
    src: "https://images.unsplash.com/photo-1549271568-e87e07c5406b?w=600&q=80",
    alt: "Outils de barbier",
    category: "styles",
  },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "toutes", label: "Toutes" },
  { id: "coupes", label: "Coupes" },
  { id: "barbes", label: "Barbes" },
  { id: "styles", label: "Salon" },
];

export function GalleryPage() {
  const [active, setActive] = useState<Category>("toutes");

  const filtered =
    active === "toutes"
      ? GALLERY
      : GALLERY.filter((img) => img.category === active);

  return (
    <section
      className="bg-[#f5f5f5] py-16 sm:py-20 lg:py-24"
      aria-labelledby="gallery-page-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="gallery-page-title"
          className="font-heading mb-10 text-center text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl"
        >
          Notre Galerie
        </h2>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-6 sm:py-2.5 ${
                active === id
                  ? "bg-[#d4af37] text-[#1a1a1a]"
                  : "bg-[#1a1a1a]/10 text-[#1a1a1a] hover:bg-[#d4af37]/20"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {filtered.map(({ src, alt }, i) => (
            <div
              key={`${src}-${i}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}