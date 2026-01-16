import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import iconArbeitsbuehne from "@/assets/icons/icon-arbeitsbuehne.png";
import iconBagger from "@/assets/icons/icon-bagger.png";

const categories = [
  {
    id: "arbeitsbuehnen",
    title: "Arbeitsbühnen",
    description: "Scheren-, Gelenk- und Teleskopbühnen für jeden Einsatz. Elektrisch, Diesel oder Hybrid.",
    icon: iconArbeitsbuehne,
    href: "/arbeitsbuehnen",
    features: ["Scherenarbeitsbühnen", "Gelenkteleskopbühnen", "Mastbühnen", "Anhängerbühnen"]
  },
  {
    id: "bagger",
    title: "Bagger",
    description: "Mini- und Kompaktbagger für Tiefbau, GaLaBau, Abbruch und universelle Einsätze.",
    icon: iconBagger,
    href: "/bagger",
    features: ["Minibagger 1-3t", "Kompaktbagger 3-8t", "Elektrobagger", "Abbruchbagger"]
  }
];

export function ProductCategories() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Produktkategorien"
          title="Finden Sie die passende Maschine"
          subtitle="Nutzen Sie unsere Konfiguratoren für eine schnelle und einfache Auswahl"
        />

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30"
            >
              {/* Icon */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-muted overflow-hidden transition-colors group-hover:bg-primary/10">
                <img 
                  src={category.icon} 
                  alt={`${category.title} kaufen bei Zoomlion NRW - ${category.features.join(", ")}`}
                  className="h-14 w-14 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {category.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {category.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto flex items-center text-sm font-medium text-primary">
                Zum Konfigurator
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
