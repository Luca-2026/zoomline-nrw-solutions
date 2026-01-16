import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { locations } from "@/data/products";
import { MapPin, Phone } from "lucide-react";

const Standorte = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Standorte"
            title="3 Standorte in Nordrhein-Westfalen"
            subtitle="Beratung, Ersatzteile & Service immer in Ihrer Nähe"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {locations.map((loc) => (
              <div key={loc.id} className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-primary/30" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2">{loc.name}</h3>
                  <p className="text-muted-foreground">{loc.address}</p>
                  <p className="text-muted-foreground mb-4">{loc.city}</p>
                  {loc.showPhone && loc.phone && (
                    <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-primary font-medium">
                      <Phone className="h-4 w-4" /> {loc.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Standorte;
