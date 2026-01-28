"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Placeholder: pas d'envoi réel pour l'instant
    setTimeout(() => setStatus("done"), 800);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 sm:grid-cols-2 sm:gap-6"
      aria-label="Formulaire de contact"
    >
      <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-6">
        <div>
          <label htmlFor="contact-nom" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
            Nom *
          </label>
          <input
            id="contact-nom"
            name="nom"
            type="text"
            required
            className="w-full rounded-lg border border-[#1a1a1a]/20 bg-white px-4 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
            Email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-[#1a1a1a]/20 bg-white px-4 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30"
            placeholder="votre@email.fr"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-tel" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
          Téléphone *
        </label>
        <input
          id="contact-tel"
          name="telephone"
          type="tel"
          required
          className="w-full rounded-lg border border-[#1a1a1a]/20 bg-white px-4 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30"
          placeholder="06 12 34 56 78"
        />
      </div>
      <div>
        <label htmlFor="contact-date" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
          Date souhaitée
        </label>
        <input
          id="contact-date"
          name="date"
          type="date"
          className="w-full rounded-lg border border-[#1a1a1a]/20 bg-white px-4 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="w-full resize-y rounded-lg border border-[#1a1a1a]/20 bg-white px-4 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/30"
          placeholder="Décrivez votre demande (prestation, créneau préféré…)"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending" || status === "done"}
          className="w-full rounded-lg bg-[#1a1a1a] px-6 py-4 font-semibold text-[#f5f5f5] transition-colors hover:bg-[#2a2a2a] disabled:opacity-60 sm:w-auto sm:min-w-[200px]"
        >
          {status === "sending"
            ? "Envoi…"
            : status === "done"
              ? "Message envoyé"
              : "Envoyer"}
        </button>
        {status === "done" && (
          <p className="mt-3 text-sm text-[#1a1a1a]/70">
            Merci ! Nous vous recontacterons rapidement.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-600">
            Une erreur est survenue. Réessayez ou contactez-nous par téléphone.
          </p>
        )}
      </div>
    </form>
  );
}
