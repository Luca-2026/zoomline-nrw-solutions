import { Award, MapPin, Wrench, TrendingDown, Clock, Shield } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const usps = [
  {
    icon: Award,
    title: "3 Jahre Garantie",
    description: "Oder 3.000 Betriebsstunden auf alle Maschinen"
  },
  {
    icon: MapPin,
    title: "3 Standorte in NRW",
    description: "Bonn, Krefeld & Mülheim – immer in Ihrer Nähe"
  },
  {
    icon: Wrench,
    title: "Ersatzteile vor Ort",
    description: "Sofort verfügbar an allen Standorten"
  },
  {
    icon: TrendingDown,
    title: "Preis-Leistungs-Vorteil",
    description: "Mehr Ausstattung & Qualität für Ihr Budget"
  },
  {
    icon: Clock,
    title: "Kurze Reaktionszeiten",
    description: "Eigenes Team für Service & Inbetriebnahme"
  },
  {
    icon: Shield,
    title: "Exklusiver Fachhändler",
    description: "Ihr Zoomlion Partner in Nordrhein-Westfalen"
  }
];

export function USPSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Ihre Vorteile"
          title="Warum Zoomlion NRW?"
          subtitle="Wir bieten mehr als nur Maschinen – wir sind Ihr verlässlicher Partner für Beratung, Service und Ersatzteile"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {usps.map((usp, index) => (
            <div
              key={usp.title}
              className="group relative p-6 rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <usp.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {usp.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
