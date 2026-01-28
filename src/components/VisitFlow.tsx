import { ClipboardCheckIcon, ScissorsIcon, SparklesIcon } from "./icons";

const STEPS = [
  {
    title: "Accueil & café",
    description: "On vous accueille, vous installe et vous propose un café.",
    Icon: ClipboardCheckIcon,
  },
  {
    title: "Échange & coupe",
    description: "On discute de votre style, puis on s'occupe de la coupe ou de la barbe.",
    Icon: ScissorsIcon,
  },
  {
    title: "Finitions & soins",
    description: "Finitions au rasoir, pose de produits et conseils d'entretien.",
    Icon: SparklesIcon,
  },
];

export function VisitFlow() {
  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="visit-flow-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="visit-flow-title"
          className="font-heading mb-12 text-center text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl"
        >
          Comment ça se passe ?
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(({ title, description, Icon }, i) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 rounded-xl border border-[#1a1a1a]/10 bg-[#f5f5f5]/50 p-6 text-center"
            >
              <span className="font-heading text-2xl font-bold text-[#d4af37]">
                {i + 1}
              </span>
              <div className="flex size-14 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37]">
                <Icon className="size-7" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#1a1a1a]">
                {title}
              </h3>
              <p className="text-[#1a1a1a]/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
