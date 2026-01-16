import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { locations } from "@/data/products";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import bonnImage from "@/assets/locations/bonn.webp";
import krefeldImage from "@/assets/locations/krefeld.jpg";

// Mapping von Standort-IDs zu Bildern
const locationImages: Record<string, string | null> = {
  bonn: bonnImage,
  krefeld: krefeldImage,
  muelheim: null, // Platzhalter für Mülheim
};

const EMAIL = "verkauf@zoomlion-nrw.de";

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
            {locations.map((loc) => {
              const locationImage = locationImages[loc.id];
              
              return (
                <div key={loc.id} className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                  {/* Location Image */}
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    {locationImage ? (
                      <img
                        src={locationImage}
                        alt={`Zoomlion NRW ${loc.name} - Arbeitsbühnen und Bagger kaufen in ${loc.city}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/80">
                        <div className="text-center">
                          <Building2 className="h-12 w-12 text-primary/30 mx-auto mb-2" />
                          <p className="text-sm font-medium text-muted-foreground">{loc.mapPlaceholder}</p>
                          <p className="text-xs text-muted-foreground/70 mt-1">Bild folgt</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-2">{loc.name}</h3>
                    <p className="text-muted-foreground">{loc.address}</p>
                    <p className="text-muted-foreground mb-4">{loc.city}</p>
                    
                    <div className="space-y-2">
                      {loc.showPhone && loc.phone && (
                        <a 
                          href={`tel:${loc.phone.replace(/\s/g, "")}`} 
                          className="flex items-center gap-2 text-primary font-medium hover:underline"
                        >
                          <Phone className="h-4 w-4" /> {loc.phone}
                        </a>
                      )}
                      
                      <a 
                        href={`mailto:${EMAIL}`} 
                        className="flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        <Mail className="h-4 w-4" /> {EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Standorte;
