import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SocialMeta } from "@/components/shared/SocialMeta";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  Phone,
  Wrench,
  Factory,
  Truck,
  Clock,
  Shield,
  CheckCircle2,
} from "lucide-react";

export { staedte, type StadtData } from "@/data/staedte";
import { staedte } from "@/data/staedte";

const StadtSeite = () => {
  const { stadt } = useParams<{ stadt: string }>();
  const data = stadt ? staedte[stadt] : undefined;

  if (!data) {
    return <Navigate to="/standorte" replace />;
  }

  const standortAddresses: Record<string, { street: string; postalCode: string; city: string; phone: string }> = {
    Bonn: { street: "Drachenburgstraße 8", postalCode: "53179", city: "Bonn", phone: "+49-228-50466061" },
    Krefeld: { street: "Anrather Straße 291", postalCode: "47807", city: "Krefeld", phone: "+49-2151-4179904" },
    "Mülheim a. d. Ruhr": { street: "Ruhrorter Straße", postalCode: "45478", city: "Mülheim an der Ruhr", phone: "+49-2151-4179904" },
  };
  const standortKey = data.standort && standortAddresses[data.standort] ? data.standort : "Krefeld";
  const standortInfo = standortAddresses[standortKey];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.zoomlion-nrw.de/baumaschinen/${data.slug}#business`,
    name: `Zoomlion NRW – Baumaschinen kaufen in ${data.name}`,
    description: `Minibagger, Arbeitsbühne, Bagger und Teleskoplader kaufen in ${data.name}. Exklusiver Zoomlion Fachhändler in NRW.`,
    url: `https://www.zoomlion-nrw.de/baumaschinen/${data.slug}`,
    telephone: standortInfo.phone,
    email: "verkauf@zoomlion-nrw.de",
    image: "https://www.zoomlion-nrw.de/og-image.jpg",
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: standortInfo.street,
      postalCode: standortInfo.postalCode,
      addressLocality: standortInfo.city,
      addressRegion: "NRW",
      addressCountry: "DE",
    },
    areaServed: [
      {
        "@type": "City",
        name: data.name,
        containedInPlace: { "@type": "State", name: "Nordrhein-Westfalen" },
      },
      ...data.nearbyAreas.map((area) => ({ "@type": "City", name: area })),
    ],
    ...(data.lat && data.lng
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: data.lat,
            longitude: data.lng,
          },
        }
      : {}),
    brand: { "@type": "Brand", name: "Zoomlion" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Baumaschinen in ${data.name}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: `Minibagger kaufen ${data.name}`,
            category: "Minibagger",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: `Arbeitsbühne kaufen ${data.name}`,
            category: "Arbeitsbühne",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: `Teleskoplader kaufen ${data.name}`,
            category: "Teleskoplader",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://www.zoomlion-nrw.de/" },
      { "@type": "ListItem", position: 2, name: "Standorte", item: "https://www.zoomlion-nrw.de/standorte" },
      {
        "@type": "ListItem",
        position: 3,
        name: data.name,
        item: `https://www.zoomlion-nrw.de/baumaschinen/${data.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Kann ich einen Minibagger in ${data.name} kaufen?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Ja, wir liefern Zoomlion Minibagger von 1,8 bis 25 Tonnen direkt nach ${data.name}. Beratung und Probefahrt am Standort ${data.standort ?? "Krefeld"}.`,
        },
      },
      {
        "@type": "Question",
        name: `Wie lange dauert die Lieferung einer Arbeitsbühne nach ${data.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Lagerware liefern wir typischerweise innerhalb von 5–10 Werktagen nach ${data.name}. Bei individuellen Konfigurationen sprechen wir die Lieferzeit ab.`,
        },
      },
      {
        "@type": "Question",
        name: `Gibt es Service & Ersatzteile in ${data.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Ja – Service, UVV-Prüfung und Ersatzteile organisieren wir vom nächstgelegenen Standort ${data.standort ?? "Krefeld"} aus, oft auch mit mobilem Service direkt vor Ort.`,
        },
      },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="title" content={data.metaTitle} />
        <meta name="description" content={data.metaDescription} />
        <meta
          name="robots"
          content={
            (data.seoTier ?? "noindex") === "index"
              ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
              : "noindex, follow"
          }
        />
        <meta
          name="keywords"
          content={`Minibagger kaufen ${data.name}, Bagger kaufen ${data.name}, Arbeitsbühne kaufen ${data.name}, Hebebühne kaufen ${data.name}, Teleskoplader kaufen ${data.name}, Baumaschinen kaufen ${data.name}, Baumaschinen ${data.name}, Bagger ${data.name}, Telehandler ${data.name}`}
        />
        <link rel="canonical" href={`https://www.zoomlion-nrw.de/baumaschinen/${data.slug}`} />

        {/* Open Graph & Twitter Card via SocialMeta below */}

        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SocialMeta
        title={data.metaTitle}
        description={data.metaDescription}
        url={`https://www.zoomlion-nrw.de/baumaschinen/${data.slug}`}
      />

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Start", href: "/" },
              { label: "Standorte", href: "/standorte" },
              { label: data.name },
            ]}
          />
          <SectionHeading
            as="h1"
            badge={`Baumaschinen ${data.name}`}
            title={`Minibagger, Arbeitsbühne & Teleskoplader kaufen in ${data.name}`}
            subtitle={`Made in EU – 3 Jahre Garantie – Lieferung & Einweisung in ${data.name} und Umgebung`}
          />

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg">{data.description}</p>
              <p>{data.longDescription}</p>
            </div>

            {/* Standort-Hinweis */}
            {data.standort && (
              <div className="mb-8 p-5 rounded-xl border border-primary/20 bg-primary/5 flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">
                    {data.distanceKm === 0
                      ? `Standort direkt in ${data.name}`
                      : `Nächster Standort: ${data.standort}${data.distanceKm ? ` (ca. ${data.distanceKm} km)` : ""}`}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Persönliche Beratung, Maschinenbesichtigung, Probefahrt und schnelle Ersatzteilversorgung.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Button asChild size="sm">
                      <Link to="/kontakt">
                        Termin vereinbaren <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href="tel:02151-4179904">
                        <Phone className="mr-2 h-4 w-4" /> 02151 4179904
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Produkt-Links */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <Link
                to="/bagger"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-heading font-bold text-lg mb-2">Minibagger kaufen in {data.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">Mini- & Kompaktbagger 1,8–25 t</p>
                <span className="text-primary text-sm font-medium flex items-center gap-1">
                  Modelle ansehen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/arbeitsbuehnen"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-heading font-bold text-lg mb-2">Arbeitsbühne kaufen in {data.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">Scheren-, Gelenk- & Teleskopbühnen</p>
                <span className="text-primary text-sm font-medium flex items-center gap-1">
                  Modelle ansehen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/teleskoplader"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-heading font-bold text-lg mb-2">Teleskoplader kaufen in {data.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">Starr & drehbar bis 24,8 m</p>
                <span className="text-primary text-sm font-medium flex items-center gap-1">
                  Modelle ansehen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">3 Jahre Garantie</p>
                  <p className="text-sm text-muted-foreground">Auf alle Neumaschinen – auch in {data.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Truck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Lieferung nach {data.name}</p>
                  <p className="text-sm text-muted-foreground">Schnelle Anlieferung und Einweisung vor Ort</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Wrench className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Service & Ersatzteile</p>
                  <p className="text-sm text-muted-foreground">
                    Schnelle Verfügbarkeit über Standort {data.standort ?? "Krefeld"}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mb-12">
              <Button asChild size="lg" className="group">
                <Link to="/kontakt">
                  Jetzt unverbindliches Angebot für {data.name} anfragen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* SEO Content – Produktblöcke */}
            <div className="space-y-8 mb-12">
              <article>
                <h2 className="font-heading text-2xl font-bold mb-3">Minibagger kaufen in {data.name}</h2>
                <p className="text-muted-foreground mb-3">
                  Bauunternehmen und GaLaBauer in {data.name} setzen auf <strong>Zoomlion Minibagger</strong> –
                  vom 1,8-Tonnen-Modell für die enge Innenstadt bis zum 25-Tonnen-Kompaktbagger für den Tiefbau.
                  Alle Modelle gibt es als Diesel- oder Elektro-Variante. Für emissionsfreie Baustellen in {data.name}{" "}
                  empfehlen wir unsere <strong>Elektro-Minibagger</strong>.
                </p>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Minibagger 1,8 t – ideal für GaLaBau und enge Höfe in {data.name}</li>
                  <li>Minibagger 3–5 t – Allrounder für Wohnungsbau und Sanierung</li>
                  <li>Kompaktbagger 8–25 t – für Tiefbau, Abbruch und Industrie</li>
                </ul>
              </article>

              <article>
                <h2 className="font-heading text-2xl font-bold mb-3">Arbeitsbühne kaufen in {data.name}</h2>
                <p className="text-muted-foreground mb-3">
                  Für Fassadenarbeiten, Hallenbau und Innenstadtbaustellen in {data.name} bieten wir das komplette Spektrum
                  an <strong>Hebebühnen, Scherenarbeitsbühnen und Teleskopbühnen</strong> – elektrisch, Diesel oder Hybrid,
                  bis 68 m Arbeitshöhe. Alle Maschinen sind CE- und EU-konform.
                </p>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Scherenarbeitsbühnen – Indoor (elektrisch) & Outdoor (Diesel/Hybrid)</li>
                  <li>Gelenkteleskopbühnen – flexibel über Hindernisse hinweg</li>
                  <li>Teleskopbühnen bis 68 m – für Hochhäuser und Industrieanlagen in {data.name}</li>
                </ul>
              </article>

              <article>
                <h2 className="font-heading text-2xl font-bold mb-3">Teleskoplader kaufen in {data.name}</h2>
                <p className="text-muted-foreground mb-3">
                  Vom <strong>starren Telehandler</strong> bis zum <strong>360°-Drehteleskoplader</strong> – unsere Zoomlion
                  Teleskoplader sind perfekt für Bau, Hallenlogistik und Landwirtschaft in {data.name}. Mit 4×4-Allrad
                  meistern sie auch unbefestigte Baustellen problemlos.
                </p>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Starre Telehandler – wirtschaftlicher Materialtransport</li>
                  <li>Drehteleskoplader bis 24,8 m Arbeitshöhe – maximale Flexibilität</li>
                  <li>Optionale Anbaugeräte: Hebebühne, Schaufel, Ausleger</li>
                </ul>
              </article>
            </div>

            {/* Branchen */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Typische Einsatzgebiete in {data.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.industries.map((industry) => (
                  <span
                    key={industry}
                    className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* Liefergebiet */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Liefergebiet rund um {data.name}
              </h2>
              <p className="text-muted-foreground mb-4">
                Neben {data.name} beliefern wir auch die umliegenden Städte und Gemeinden in der Region {data.region}:
              </p>
              <div className="flex flex-wrap gap-2">
                {data.nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-sm text-foreground/80"
                  >
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold mb-6">
                Häufige Fragen zum Baumaschinen-Kauf in {data.name}
              </h2>
              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-heading font-bold mb-2">
                    Kann ich einen Minibagger in {data.name} kaufen?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ja. Wir liefern Zoomlion Minibagger von 1,8 bis 25 Tonnen direkt nach {data.name}. Beratung,
                    Besichtigung und Probefahrt erfolgen am Standort {data.standort ?? "Krefeld"}.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-heading font-bold mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Wie schnell wird nach {data.name} geliefert?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Lagerware liefern wir in der Regel innerhalb von 5–10 Werktagen. Bei individuellen Konfigurationen
                    stimmen wir die Lieferzeit persönlich mit Ihnen ab.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-heading font-bold mb-2">
                    Gibt es Service, UVV-Prüfung und Ersatzteile in {data.name}?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Service, UVV-Prüfung nach DGUV und Ersatzteile organisieren wir vom Standort{" "}
                    {data.standort ?? "Krefeld"} aus – auf Wunsch auch mit mobilem Service direkt bei Ihnen.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-heading font-bold mb-2">
                    Bieten Sie Finanzierung oder Leasing in {data.name} an?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ja, wir bieten flexible Finanzierungs- und Leasingmodelle. Berechnen Sie Ihre Rate mit unserem{" "}
                    <Link to="/finanzierung" className="text-primary hover:underline font-medium">
                      Finanzierungsrechner
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            <TrustBadges />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StadtSeite;
