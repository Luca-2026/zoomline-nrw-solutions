import { Award, MapPin, Wrench, TrendingDown, Clock, Shield, Globe, Factory } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const usps = [
  {
    icon: Globe,
    title: "Top 5 weltweit",
    description: "Zoomlion zählt zu den 5 größten Baumaschinenherstellern der Welt mit über 9 Mrd. USD Umsatz"
  },
  {
    icon: TrendingDown,
    title: "Bestes Preis-Leistungs-Verhältnis",
    description: "Hochwertige Technik und Ausstattung zu attraktiven Anschaffungskosten"
  },
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
    icon: Clock,
    title: "Kurze Reaktionszeiten",
    description: "Eigenes Team für Service & Inbetriebnahme"
  }
];

export function USPSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Ihre Vorteile"
          title="Warum Zoomlion?"
          subtitle="Einer der weltweit größten Baumaschinenhersteller – jetzt mit exklusivem Fachhändler in NRW"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {usps.map((usp, index) => (
            <div
              key={usp.title}
              className="group relative p-6 rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <usp.icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
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
