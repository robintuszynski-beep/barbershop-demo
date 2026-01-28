import Link from "next/link";
import { MessageCircleIcon, PhoneIcon } from "./icons";
import { ContactForm } from "./ContactForm";

const ADDRESS = "123 Rue de la Coupe, 75001 Paris";
const PHONE_DISPLAY = "01 23 45 67 89";
const TEL_URL = "tel:+33123456789";
const WHATSAPP_URL = "https://wa.me/33123456789";

const HORAIRES = [
  "Lundi : Fermé",
  "Mardi - Vendredi : 9h - 19h",
  "Samedi : 9h - 18h",
  "Dimanche : Fermé",
];

export function ContactPage() {
  return (
    <div className="bg-[#f5f5f5]">
      <section
        className="py-16 sm:py-20 lg:py-24"
        aria-labelledby="contact-page-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            id="contact-page-title"
            className="font-heading mb-12 text-center text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl"
          >
            Nous Contacter
          </h1>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Formulaire */}
            <div className="rounded-2xl border border-[#1a1a1a]/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <h2 className="font-heading mb-6 text-xl font-semibold text-[#1a1a1a]">
                Envoyer un message
              </h2>
              <ContactForm />
            </div>

            {/* Infos + boutons */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-[#1a1a1a]/10 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-heading mb-6 text-xl font-semibold text-[#1a1a1a]">
                  Infos pratiques
                </h2>
                <div className="space-y-4 text-[#1a1a1a]/80">
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
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#20bd5a]"
                  >
                    <MessageCircleIcon className="size-5 shrink-0" />
                    WhatsApp
                  </Link>
                  <a
                    href={TEL_URL}
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-[#d4af37] bg-transparent px-5 py-3 font-semibold text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-[#1a1a1a]"
                  >
                    <PhoneIcon className="size-5 shrink-0" />
                    Appeler
                  </a>
                </div>
              </div>

              {/* Carte placeholder */}
              <div className="overflow-hidden rounded-2xl border border-[#1a1a1a]/10 bg-[#e8e8e8]">
                <div className="flex aspect-video w-full items-center justify-center text-[#1a1a1a]/50">
                  <span className="text-center text-sm font-medium sm:text-base">
                    Carte / plan d&apos;accès (placeholder)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
