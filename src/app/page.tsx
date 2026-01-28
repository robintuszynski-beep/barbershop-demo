import { Hero } from "@/components/Hero";
import { HomeCTA } from "@/components/HomeCTA";

export const metadata = {
  title: "ROYAL BARBER | Barbier Premium",
  description:
    "L'excellence du coiffeur homme. Coupe classique, barbe soignée et ambiance premium. Prenez rendez-vous.",
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <HomeCTA />
    </div>
  );
}