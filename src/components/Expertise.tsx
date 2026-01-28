import { AwardIcon, ClockIcon, UsersIcon } from "@/components/icons";

const ITEMS = [
  {
    title: "15 ans d'expérience",
    Icon: AwardIcon,
  },
  {
    title: "Plus de 5000 clients satisfaits",
    Icon: UsersIcon,
  },
  {
    title: "Service rapide et soigné",
    Icon: ClockIcon,
  },
];

export function Expertise() {
  return (
    <section
      className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="expertise-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="expertise-title"
          className="font-heading mb-12 text-center text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl"
        >
          Pourquoi nous choisir ?
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ title, Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="flex size-16 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37]">
                <Icon className="size-8" />
              </div>
              <p className="text-lg font-medium text-[#1a1a1a] sm:text-xl">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
