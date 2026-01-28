import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ScissorsIcon,
  SparklesIcon,
  StarIcon,
  SmileIcon,
} from "@/components/icons";

const SERVICES = [
  {
    title: "Coupe Classique",
    price: "25€",
    description: "Coupe moderne et élégante",
    Icon: ScissorsIcon,
  },
  {
    title: "Taille de Barbe",
    price: "20€",
    description: "Entretien et stylisation",
    Icon: SparklesIcon,
  },
  {
    title: "Forfait Complet",
    price: "40€",
    description: "Coupe + Barbe + Soins",
    Icon: StarIcon,
  },
  {
    title: "Coupe Enfant",
    price: "18€",
    description: "Pour les -12 ans",
    Icon: SmileIcon,
  },
];

type ServicesProps = { title?: string };

export function Services({ title = "Nos Services" }: ServicesProps) {
  return (
    <section
      className="bg-[#e8e8e8] py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="services-title"
          className="font-heading mb-12 text-center text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl"
        >
          {title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, price, description, Icon }) => (
            <Card key={title} className="group">
              <CardHeader>
                <div className="mb-2 inline-flex size-12 items-center justify-center rounded-lg bg-[#d4af37]/20 text-[#d4af37] transition-colors group-hover:bg-[#d4af37] group-hover:text-[#1a1a1a]">
                  <Icon className="size-6" />
                </div>
                <CardTitle className="flex items-baseline justify-between gap-2">
                  <span>{title}</span>
                  <span className="font-heading text-[#d4af37]">{price}</span>
                </CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
