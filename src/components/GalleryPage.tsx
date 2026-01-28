"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "toutes" | "coupes" | "barbes" | "styles";

const GALLERY: { src: string; alt: string; category: Category }[] = [
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
    alt: "Barbershop",
    category: "coupes",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    alt: "Coupe",
    category: "coupes",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    alt: "Style",
    category: "styles",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
    alt: "Barbe",
    category: "barbes",
  },
  {
    src: "https://images.unsplash.com/photo-1605499461357-ed26c536969c?w=600&q=80",
    alt: "Coupe homme",
    category: "coupes",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Barbier",
    category: "barbes",
  },
  {
    src: "https://images.unsplash.com/photo-1622287162716-f311bad1e2f9?w=600&q=80",
    alt: "Salon",
    category: "styles",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    alt: "Rasage",
    category: "barbes",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
    alt: "Ambiance",
    category: "styles",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Coupe moderne",
    category: "coupes",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    alt: "Détails",
    category: "styles",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
    alt: "Taille barbe",
    category: "barbes",
  },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "toutes", label: "Toutes" },
  { id: "coupes", label: "Coupes" },
  { id: "barbes", label: "Barbes" },
  { id: "styles", label: "Styles" },
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
