import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { locations } from "@/data/products";

export function LocationsTeaser() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Standorte"
          title="3 Standorte in NRW"
          subtitle="Beratung, Ersatzteile & Service immer in Ihrer Nähe"
        />

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.id}
              className="group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              {/* Map Placeholder */}
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 text-primary/30 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">{location.mapPlaceholder}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {location.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {location.address}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {location.city}
                </p>

                {location.showPhone && location.phone && (
                  <a
                    href={`tel:${location.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {location.phone}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/standorte">
              Alle Standorte ansehen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
