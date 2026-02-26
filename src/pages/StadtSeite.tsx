import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Wrench, Factory } from "lucide-react";

interface StadtData {
  name: string;
  slug: string;
  region: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  nearbyAreas: string[];
  standort?: string;
}

const staedte: Record<string, StadtData> = {
  koeln: {
    name: "Köln",
    slug: "koeln",
    region: "Rheinland",
    description: "Als größte Stadt in NRW ist Köln ein Zentrum für Bauprojekte jeder Größenordnung. Ob Hochbau in der Innenstadt, Tiefbau am Rheinufer oder Sanierungsarbeiten in den Veedeln – wir liefern die passende Maschine.",
    metaTitle: "Baumaschinen kaufen Köln | Zoomlion Bagger & Arbeitsbühnen",
    metaDescription: "Baumaschinen kaufen in Köln ➤ Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader ✓ Made in EU ✓ 3 Jahre Garantie ✓ Standort Bonn in der Nähe. Jetzt anfragen!",
    nearbyAreas: ["Bonn", "Leverkusen", "Bergisch Gladbach", "Brühl", "Hürth"],
    standort: "Bonn"
  },
  duesseldorf: {
    name: "Düsseldorf",
    slug: "duesseldorf",
    region: "Rheinland",
    description: "In der Landeshauptstadt Düsseldorf sind Baumaschinen für den Hoch- und Tiefbau, Gleisbau und die Gebäudesanierung gefragt. Unser Standort Krefeld versorgt Sie schnell mit Maschinen, Ersatzteilen und Service.",
    metaTitle: "Baumaschinen kaufen Düsseldorf | Zoomlion Bagger & Arbeitsbühnen",
    metaDescription: "Baumaschinen kaufen in Düsseldorf ➤ Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader ✓ Made in EU ✓ 3 Jahre Garantie ✓ Standort Krefeld in der Nähe. Jetzt anfragen!",
    nearbyAreas: ["Krefeld", "Neuss", "Meerbusch", "Ratingen", "Hilden"],
    standort: "Krefeld"
  },
  bonn: {
    name: "Bonn",
    slug: "bonn",
    region: "Rheinland",
    description: "Am Standort Bonn sind wir direkt vor Ort für Sie da. Ob für Projekte in der Bundesstadt, im Siebengebirge oder im Vorgebirge – kurze Wege, schnelle Verfügbarkeit und persönliche Beratung.",
    metaTitle: "Baumaschinen kaufen Bonn | Zoomlion Bagger & Arbeitsbühnen ✓ Standort vor Ort",
    metaDescription: "Baumaschinen kaufen in Bonn ➤ Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader ✓ Standort direkt in Bonn ✓ Made in EU ✓ 3 Jahre Garantie. Jetzt anfragen!",
    nearbyAreas: ["Siegburg", "Sankt Augustin", "Troisdorf", "Königswinter", "Bad Honnef"],
    standort: "Bonn"
  },
  essen: {
    name: "Essen",
    slug: "essen",
    region: "Ruhrgebiet",
    description: "Im Herzen des Ruhrgebiets setzen Bauunternehmen auf zuverlässige Maschinen. Unser Standort Mülheim an der Ruhr ist nur wenige Minuten entfernt und liefert Maschinen, Service und Ersatzteile.",
    metaTitle: "Baumaschinen kaufen Essen | Zoomlion Bagger & Arbeitsbühnen",
    metaDescription: "Baumaschinen kaufen in Essen ➤ Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader ✓ Made in EU ✓ 3 Jahre Garantie ✓ Standort Mülheim in der Nähe. Jetzt anfragen!",
    nearbyAreas: ["Mülheim an der Ruhr", "Oberhausen", "Gelsenkirchen", "Bochum", "Bottrop"],
    standort: "Mülheim an der Ruhr"
  },
  dortmund: {
    name: "Dortmund",
    slug: "dortmund",
    region: "Ruhrgebiet",
    description: "Dortmund ist eine der wachstumsstärksten Städte im Ruhrgebiet. Für Ihre Bauprojekte liefern wir Zoomlion Maschinen mit EU-Qualität und umfassendem Service direkt in die Region.",
    metaTitle: "Baumaschinen kaufen Dortmund | Zoomlion Bagger & Arbeitsbühnen",
    metaDescription: "Baumaschinen kaufen in Dortmund ➤ Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader ✓ Made in EU ✓ 3 Jahre Garantie ✓ Service in NRW. Jetzt anfragen!",
    nearbyAreas: ["Hagen", "Unna", "Lünen", "Witten", "Herdecke"],
  },
  duisburg: {
    name: "Duisburg",
    slug: "duisburg",
    region: "Ruhrgebiet",
    description: "Als Logistik-Drehscheibe und Industriestandort benötigt Duisburg leistungsstarke Baumaschinen. Von unserem Standort Krefeld und Mülheim aus sind wir schnell bei Ihnen.",
    metaTitle: "Baumaschinen kaufen Duisburg | Zoomlion Bagger & Arbeitsbühnen",
    metaDescription: "Baumaschinen kaufen in Duisburg ➤ Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader ✓ Made in EU ✓ 3 Jahre Garantie ✓ Standorte Krefeld & Mülheim. Jetzt anfragen!",
    nearbyAreas: ["Krefeld", "Moers", "Oberhausen", "Mülheim an der Ruhr", "Dinslaken"],
    standort: "Krefeld"
  },
  krefeld: {
    name: "Krefeld",
    slug: "krefeld",
    region: "Niederrhein",
    description: "Direkt an unserem Standort Krefeld profitieren Sie von kurzen Wegen, persönlicher Beratung und sofort verfügbaren Ersatzteilen. Ideal für Projekte am Niederrhein.",
    metaTitle: "Baumaschinen kaufen Krefeld | Zoomlion ✓ Standort vor Ort",
    metaDescription: "Baumaschinen kaufen in Krefeld ➤ Zoomlion Standort direkt vor Ort ✓ Minibagger, Arbeitsbühnen & Teleskoplader ✓ Made in EU ✓ 3 Jahre Garantie. Jetzt anfragen!",
    nearbyAreas: ["Mönchengladbach", "Viersen", "Duisburg", "Düsseldorf", "Neuss"],
    standort: "Krefeld"
  },
  muelheim: {
    name: "Mülheim an der Ruhr",
    slug: "muelheim",
    region: "Ruhrgebiet",
    description: "Unser Standort in Mülheim an der Ruhr ist Ihr Anlaufpunkt für das gesamte westliche Ruhrgebiet. Maschinen ansehen, Probefahrt machen, direkt kaufen.",
    metaTitle: "Baumaschinen kaufen Mülheim | Zoomlion ✓ Standort vor Ort",
    metaDescription: "Baumaschinen kaufen in Mülheim an der Ruhr ➤ Zoomlion Standort direkt vor Ort ✓ Minibagger, Arbeitsbühnen & Teleskoplader ✓ Made in EU. Jetzt anfragen!",
    nearbyAreas: ["Essen", "Oberhausen", "Duisburg", "Ratingen", "Düsseldorf"],
    standort: "Mülheim an der Ruhr"
  },
  aachen: {
    name: "Aachen",
    slug: "aachen",
    region: "Euregio",
    description: "Im Dreiländereck liefern wir Zoomlion Baumaschinen für Projekte in Aachen und der gesamten Euregio. EU-produzierte Qualität, die überzeugt.",
    metaTitle: "Baumaschinen kaufen Aachen | Zoomlion Bagger & Arbeitsbühnen",
    metaDescription: "Baumaschinen kaufen in Aachen ➤ Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader ✓ Made in EU ✓ 3 Jahre Garantie ✓ Lieferung in die Euregio. Jetzt anfragen!",
    nearbyAreas: ["Düren", "Eschweiler", "Stolberg", "Herzogenrath", "Würselen"],
  },
  wuppertal: {
    name: "Wuppertal",
    slug: "wuppertal",
    region: "Bergisches Land",
    description: "Im Bergischen Land stellt das Gelände besondere Anforderungen an Baumaschinen. Unsere Zoomlion Bagger und Bühnen meistern auch anspruchsvolle Hanglagen.",
    metaTitle: "Baumaschinen kaufen Wuppertal | Zoomlion Bagger & Arbeitsbühnen",
    metaDescription: "Baumaschinen kaufen in Wuppertal ➤ Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader ✓ Made in EU ✓ 3 Jahre Garantie ✓ Service in NRW. Jetzt anfragen!",
    nearbyAreas: ["Solingen", "Remscheid", "Velbert", "Haan", "Mettmann"],
  }
};

const StadtSeite = () => {
  const { stadt } = useParams<{ stadt: string }>();
  const data = stadt ? staedte[stadt] : undefined;

  if (!data) {
    return <Navigate to="/standorte" replace />;
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Zoomlion NRW – ${data.name}`,
    "description": `Zoomlion Baumaschinen kaufen in ${data.name}. Minibagger, Arbeitsbühnen und Teleskoplader vom exklusiven Fachhändler in NRW.`,
    "url": `https://www.zoomlion-nrw.de/baumaschinen/${data.slug}`,
    "areaServed": {
      "@type": "City",
      "name": data.name,
      "containedInPlace": {
        "@type": "State",
        "name": "Nordrhein-Westfalen"
      }
    },
    "brand": {
      "@type": "Brand",
      "name": "Zoomlion"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Baumaschinen in ${data.name}`,
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Minibagger" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Arbeitsbühnen" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Teleskoplader" } }
      ]
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="title" content={data.metaTitle} />
        <meta name="description" content={data.metaDescription} />
        <meta name="keywords" content={`Baumaschinen kaufen ${data.name}, Minibagger kaufen ${data.name}, Arbeitsbühne kaufen ${data.name}, Teleskoplader kaufen ${data.name}, Bagger ${data.name}, Zoomlion ${data.name}`} />
        <link rel="canonical" href={`https://www.zoomlion-nrw.de/baumaschinen/${data.slug}`} />
        
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={`https://www.zoomlion-nrw.de/baumaschinen/${data.slug}`} />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Start", href: "/" },
              { label: "Standorte", href: "/standorte" },
              { label: data.name }
            ]}
          />
          <SectionHeading
            badge={`Baumaschinen ${data.name}`}
            title={`Baumaschinen kaufen in ${data.name}`}
            subtitle={`Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader – Made in EU, geliefert nach ${data.name}`}
          />

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-8">
              <p>{data.description}</p>
              <p>
                Alle Zoomlion Maschinen werden <strong>in Ungarn (EU) produziert</strong> und erfüllen 
                höchste europäische Qualitäts- und Sicherheitsstandards. Profitieren Sie von kurzen 
                Lieferwegen, <strong>3 Jahren Garantie</strong> und einem der besten 
                Preis-Leistungs-Verhältnisse am Markt.
              </p>
            </div>

            {/* Standort-Hinweis */}
            {data.standort && (
              <div className="mb-8 p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">
                    Nächster Standort: {data.standort}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Besuchen Sie uns für eine persönliche Beratung, Maschinenbesichtigung und Probefahrt.
                  </p>
                </div>
              </div>
            )}

            {/* Produkt-Links */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <Link
                to="/arbeitsbuehnen"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <h3 className="font-heading font-bold text-lg mb-2">Arbeitsbühnen</h3>
                <p className="text-sm text-muted-foreground mb-3">Scheren-, Gelenk- & Teleskopbühnen</p>
                <span className="text-primary text-sm font-medium flex items-center justify-center gap-1">
                  Jetzt entdecken <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/bagger"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <h3 className="font-heading font-bold text-lg mb-2">Bagger</h3>
                <p className="text-sm text-muted-foreground mb-3">Mini- & Kompaktbagger</p>
                <span className="text-primary text-sm font-medium flex items-center justify-center gap-1">
                  Jetzt entdecken <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/teleskoplader"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <h3 className="font-heading font-bold text-lg mb-2">Teleskoplader</h3>
                <p className="text-sm text-muted-foreground mb-3">Starr & drehbar</p>
                <span className="text-primary text-sm font-medium flex items-center justify-center gap-1">
                  Jetzt entdecken <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* USPs */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Factory className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Made in EU</p>
                  <p className="text-sm text-muted-foreground">Produktion in Ungarn – europäische Qualitätsstandards</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Wrench className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Service & Ersatzteile</p>
                  <p className="text-sm text-muted-foreground">Schnelle Verfügbarkeit an allen NRW-Standorten</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Persönliche Beratung</p>
                  <p className="text-sm text-muted-foreground">Erfahrene Experten für Ihre Anforderungen</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Lieferung nach {data.name}</p>
                  <p className="text-sm text-muted-foreground">Schnelle Anlieferung und Einweisung vor Ort</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mb-12">
              <Button asChild size="lg" className="group">
                <Link to="/kontakt">
                  Jetzt unverbindlich anfragen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* SEO Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="font-heading text-2xl font-bold">Baumaschinen in {data.name} und Umgebung</h2>
              <p>
                Wir beliefern neben {data.name} auch die umliegenden Städte und Gemeinden: {data.nearbyAreas.join(", ")}. 
                Als exklusiver Zoomlion Fachhändler in Nordrhein-Westfalen bieten wir Ihnen ein umfassendes 
                Sortiment an <strong>Minibaggern</strong>, <strong>Arbeitsbühnen</strong> und <strong>Teleskopladern</strong> – 
                alles <strong>Made in EU</strong> mit 3 Jahren Garantie.
              </p>
              <h3 className="font-heading text-xl font-bold">Unsere Maschinen für {data.name}</h3>
              <ul>
                <li><strong>Minibagger (1–22t)</strong> – Ideal für Tiefbau, GaLaBau und Abbruch in {data.name}</li>
                <li><strong>Scherenarbeitsbühnen</strong> – Für Innen- und Außenarbeiten, elektrisch oder Diesel</li>
                <li><strong>Gelenkteleskopbühnen</strong> – Flexibel einsetzbar bis 68m Arbeitshöhe</li>
                <li><strong>Teleskoplader</strong> – Für Bau, Landwirtschaft und Industrie in der Region {data.region}</li>
              </ul>
            </div>

            <TrustBadges />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export { staedte };
export default StadtSeite;
