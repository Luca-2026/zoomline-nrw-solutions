import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { locations } from "@/data/products";
import bonnImage from "@/assets/locations/bonn.webp";
import krefeldImage from "@/assets/locations/krefeld.jpg";

// Mapping von Standort-IDs zu Bildern
const locationImages: Record<string, string | null> = {
  bonn: bonnImage,
  krefeld: krefeldImage,
  muelheim: null, // Platzhalter für Mülheim
};

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
          {locations.map((location) => {
            const locationImage = locationImages[location.id];
            
            return (
              <div
                key={location.id}
                className="group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
              >
                {/* Location Image */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  {locationImage ? (
                    <img
                      src={locationImage}
                      alt={`Zoomlion NRW ${location.name} - Arbeitsbühnen und Bagger Standort ${location.city}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/80">
                      <div className="text-center">
                        <Building2 className="h-12 w-12 text-primary/30 mx-auto mb-2" />
                        <p className="text-sm font-medium text-muted-foreground">{location.mapPlaceholder}</p>
                        <p className="text-xs text-muted-foreground/70 mt-1">Bild folgt</p>
                      </div>
                    </div>
                  )}
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
            );
          })}
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
