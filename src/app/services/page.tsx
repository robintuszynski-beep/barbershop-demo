import { Services } from "@/components/Services";
import { VisitFlow } from "@/components/VisitFlow";
import { ServicesCTA } from "@/components/ServicesCTA";

export const metadata = {
  title: "Nos Services & Tarifs | ROYAL BARBER",
  description:
    "Découvrez nos prestations : coupe classique, barbe, forfait complet, coupe enfant. Tarifs transparents et déroulé d'une visite.",
};

export default function ServicesPage() {
  return (
    <div>
      <Services title="Nos Services & Tarifs" />
      <VisitFlow />
      <ServicesCTA />
    </div>
  );
}
