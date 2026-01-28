import Link from "next/link";
import { MessageCircleIcon, PhoneIcon } from "@/components/icons";

const PHONE_RAW = "123456789";
const PHONE_DISPLAY = "01 23 45 67 89";
const ADDRESS = "123 Rue de la Coupe, 75001 Paris";
const WHATSAPP_URL = `https://wa.me/33${PHONE_RAW}`;
const TEL_URL = "tel:+33123456789";

const HORAIRES = [
  "Lundi : Fermé",
  "Mardi - Vendredi : 9h - 19h",
  "Samedi : 9h - 18h",
  "Dimanche : Fermé",
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#1a1a1a] py-16 sm:py-20 lg:py-24"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="contact-title"
          className="font-heading mb-12 text-center text-3xl font-bold tracking-tight text-[#f5f5f5] sm:text-4xl"
        >
          Nous trouver
        </h2>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Colonne gauche : infos */}
          <div className="space-y-6 text-[#f5f5f5]/90">
            <div>
              <p className="mb-1 font-semibold text-[#d4af37]">Adresse</p>
              <p>{ADDRESS}</p>
            </div>
            <div>
              <p className="mb-1 font-semibold text-[#d4af37]">Téléphone</p>
              <a href={TEL_URL} className="hover:text-[#d4af37] hover:underline">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <p className="mb-2 font-semibold text-[#d4af37]">Horaires</p>
              <ul className="space-y-1">
                {HORAIRES.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Colonne droite : boutons WhatsApp + Appeler */}
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:flex-col">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-4 font-semibold text-white transition-colors hover:bg-[#20bd5a]"
            >
              <MessageCircleIcon className="size-5 shrink-0" />
              WhatsApp
            </Link>
            <a
              href={TEL_URL}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#d4af37] bg-transparent px-6 py-4 font-semibold text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-[#1a1a1a]"
            >
              <PhoneIcon className="size-5 shrink-0" />
              Appeler
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
