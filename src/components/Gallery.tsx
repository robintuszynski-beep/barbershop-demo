import Image from "next/image";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
  "https://images.unsplash.com/photo-1605499461357-ed26c536969c?w=600&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
];

export function Gallery() {
  return (
    <section
      id="galerie"
      className="scroll-mt-20 bg-[#f5f5f5] py-16 sm:py-20 lg:py-24"
      aria-labelledby="gallery-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="gallery-title"
          className="font-heading mb-12 text-center text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl"
        >
          Galerie
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={src}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt={`Galerie Royal Barber ${i + 1}`}
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
