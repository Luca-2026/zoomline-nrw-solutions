import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CheckCircle, ArrowRight, Package, Eye, Wrench, Star } from "lucide-react";

const teaserPackages = [
  {
    name: "ZL|Care",
    subtitle: "Wartungsteile-Paket",
    icon: Package,
    highlights: ["Original Zoomlion-Teile", "Just-in-time-Lieferung", "Öldiagnose-Set"],
  },
  {
    name: "ZL|Pro",
    subtitle: "Inspektionsvertrag",
    icon: Eye,
    highlights: ["Wartung inklusive", "UVV-Prüfung inklusive", "Planbare Kosten"],
    popular: true,
  },
  {
    name: "ZL|Complete",
    subtitle: "Full-Service-Vertrag",
    icon: Wrench,
    highlights: ["Reparaturen inklusive", "Kostenloses Ersatzgerät", "Rundum-Sorglos"],
  },
];

export function ServiceTeaser() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Serviceverträge"
          title="Maximale Verfügbarkeit – planbare Kosten"
          subtitle="Drei Servicepakete für Ihre Zoomlion-Maschinen: Von der Teileversorgung bis zum Rundum-Sorglos-Paket mit kostenlosem Ersatzgerät."
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {teaserPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative p-6 rounded-2xl border bg-card transition-all hover:shadow-md ${
                pkg.popular ? "border-primary ring-1 ring-primary/20" : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1">
                  <Star className="h-3 w-3" /> Beliebt
                </div>
              )}
              <pkg.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-heading text-lg font-bold mb-1">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{pkg.subtitle}</p>
              <ul className="space-y-2">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/servicevertraege">
              Alle Servicepakete entdecken
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
