import Link from "next/link";

const ADDRESS = "123 Rue de la Coupe, 75001 Paris";
const PHONE = "01 23 45 67 89";

export function HomeContactPreview() {
  return (
    <section
      className="bg-[#e8e8e8] py-16 sm:py-20 lg:py-24"
      aria-labelledby="contact-preview-title"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="contact-preview-title"
          className="font-heading mb-4 text-2xl font-bold tracking-tight text-[#1a1a1a] sm:text-3xl md:text-4xl"
        >
          Nous trouver
        </h2>
        <p className="mb-2 text-[#1a1a1a]/80">{ADDRESS}</p>
        <p className="mb-8">
          <a href="tel:+33123456789" className="font-medium text-[#d4af37] hover:underline">
            {PHONE}
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md bg-[#1a1a1a] px-6 py-3 text-base font-semibold text-[#f5f5f5] transition-colors hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 sm:px-8 sm:py-4 sm:text-lg"
        >
          Contact & prise de RDV
        </Link>
      </div>
    </section>
  );
}
