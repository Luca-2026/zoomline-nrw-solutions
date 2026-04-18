import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { locations } from "@/data/products";
import { STANDORTE } from "@/data/standorte";
import { Phone, Mail, Building2, ArrowRight, Clock, MapPin } from "lucide-react";
import { staedte } from "@/pages/StadtSeite";
import bonnImage from "@/assets/locations/bonn.webp";
import krefeldImage from "@/assets/locations/krefeld.jpg";
import { SocialMeta } from "@/components/shared/SocialMeta";

// Mapping von Standort-IDs zu Bildern
const locationImages: Record<string, string | null> = {
  bonn: bonnImage,
  krefeld: krefeldImage,
  muelheim: null,
};

// Slug-Mapping zur Detailseite (locations[].id entspricht 1:1 Standort-Slug)
const detailSlug: Record<string, "bonn" | "krefeld" | "muelheim"> = {
  bonn: "bonn",
  krefeld: "krefeld",
  muelheim: "muelheim",
};

const EMAIL = "verkauf@zoomlion-nrw.de";

const Standorte = () => {
  // LocalBusiness coordinates per location (for Google Rich Results)
  const locationGeo: Record<string, { lat: number; lng: number; postalCode: string; image: string }> = {
    bonn: { lat: 50.6703, lng: 7.1503, postalCode: "53179", image: "https://www.zoomlion-nrw.de/og-image.jpg" },
    krefeld: { lat: 51.3127, lng: 6.5853, postalCode: "47807", image: "https://www.zoomlion-nrw.de/og-image.jpg" },
    muelheim: { lat: 51.4275, lng: 6.8826, postalCode: "45478", image: "https://www.zoomlion-nrw.de/og-image.jpg" },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: locations.map((loc, i) => {
      const geo = locationGeo[loc.id];
      const business: Record<string, unknown> = {
        "@type": "LocalBusiness",
        "@id": `https://www.zoomlion-nrw.de/standorte#${loc.id}`,
        name: `Zoomlion NRW – ${loc.name}`,
        image: geo?.image ?? "https://www.zoomlion-nrw.de/og-image.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: loc.address,
          postalCode: geo?.postalCode,
          addressLocality: loc.city.replace(/^\d+\s*/, ""),
          addressRegion: "NRW",
          addressCountry: "DE",
        },
        email: EMAIL,
        url: `https://www.zoomlion-nrw.de/standorte#${loc.id}`,
        priceRange: "€€",
        areaServed: { "@type": "AdministrativeArea", name: "Nordrhein-Westfalen" },
      };
      if (loc.phone) business.telephone = `+49-${loc.phone.replace(/\D/g, "").replace(/^0/, "")}`;
      if (geo) business.geo = { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng };
      return { "@type": "ListItem", position: i + 1, item: business };
    })
  };
  return (
    <Layout>
      <Helmet>
        <title>Standorte NRW – Minibagger & Arbeitsbühnen kaufen | Bonn, Krefeld, Mülheim</title>
        <meta 
          name="title" 
          content="Standorte NRW – Minibagger & Arbeitsbühnen kaufen | Bonn, Krefeld, Mülheim" 
        />
        <meta 
          name="description" 
          content="3 Standorte in NRW für Minibagger & Arbeitsbühnen ➤ Bonn ✓ Krefeld ✓ Mülheim/Ruhrgebiet ✓ Ersatzteile vor Ort ✓ Service & Beratung. Finden Sie Ihren nächsten Zoomlion Händler!" 
        />
        <meta 
          name="keywords" 
          content="Zoomlion Händler NRW, Baumaschinen Bonn, Baumaschinen Krefeld, Baumaschinen Ruhrgebiet, Minibagger Händler Köln, Arbeitsbühnen Händler Düsseldorf, Baumaschinen Service NRW, Zoomlion Deutschland" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/standorte" />
        
        {/* Open Graph & Twitter Card via SocialMeta below */}
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>
      <SocialMeta
        title="3 Standorte in NRW – Zoomlion Minibagger & Arbeitsbühnen"
        description="Beratung, Service und Ersatzteile immer in Ihrer Nähe. 3 Standorte in Nordrhein-Westfalen."
        url="https://www.zoomlion-nrw.de/standorte"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Start", href: "/" },
              { label: "Standorte" }
            ]} 
          />
          <SectionHeading
            as="h1"
            badge="Standorte"
            title="Zoomlion Standorte in NRW – Bonn, Krefeld & Mülheim"
            subtitle="Beratung, Ersatzteile & Service immer in Ihrer Nähe – Minibagger & Arbeitsbühnen kaufen"
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
                        alt={`Zoomlion Händler ${loc.name} - Minibagger und Arbeitsbühnen kaufen in ${loc.city}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
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

      {/* SEO Content */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">Ihr Zoomlion Händler in NRW</h2>
            <p>
              Mit <strong>3 Standorten in Nordrhein-Westfalen</strong> sind wir immer in Ihrer Nähe. 
              Ob Sie einen <strong>Minibagger kaufen</strong> möchten, eine <strong>Arbeitsbühne</strong> suchen 
              oder <strong>Ersatzteile</strong> benötigen – unser Team berät Sie kompetent vor Ort.
            </p>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Regionale Abdeckung</h3>
            <ul>
              <li><strong>Standort Bonn:</strong> Köln, Bonn, Bergisch Gladbach, Leverkusen, Rhein-Sieg-Kreis</li>
              <li><strong>Standort Krefeld:</strong> Düsseldorf, Duisburg, Mönchengladbach, Neuss, Niederrhein</li>
              <li><strong>Standort Mülheim:</strong> Essen, Dortmund, Bochum, Oberhausen, gesamtes Ruhrgebiet</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Städte-Links für interne Verlinkung */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl font-bold mb-6 text-center">Baumaschinen kaufen in Ihrer Stadt</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {Object.values(staedte).map((city) => (
              <Link
                key={city.slug}
                to={`/baumaschinen/${city.slug}`}
                className="group flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all text-sm font-medium"
              >
                {city.name}
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Standorte;
