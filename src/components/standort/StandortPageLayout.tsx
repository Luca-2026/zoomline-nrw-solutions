import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight, Map as MapIcon, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SocialMeta } from "@/components/shared/SocialMeta";
import { Button } from "@/components/ui/button";
import type { StandortInfo } from "@/data/standorte";

export interface StandortPageProps {
  standort: StandortInfo;
  /** SEO-Titel (≤ 60 Zeichen empfohlen) */
  metaTitle: string;
  /** Meta-Description (≤ 160 Zeichen empfohlen) */
  metaDescription: string;
  /** Sichtbarer H1 */
  h1: string;
  /** Untertitel unter H1 */
  subtitle?: string;
  /** Hauptintro – 2 Absätze */
  introParagraphs: [string, string];
  /** Beschreibung des Einzugsgebiets (1 Absatz) */
  einzugsgebietText: string;
  /** Anfahrt-Hinweis-Text (PKW) */
  anfahrtText: string;
  /** Optionales Hero-Bild (URL relativ zur Domain) */
  heroImage?: string;
  /** Städte für areaServed im Schema */
  areaServed: string[];
  /** Hero-Bild URL für JSON-LD (absolut) */
  schemaImageUrl: string;
  /** Bildschirm-Hero-Bild als import */
  heroImageSrc?: string;
}

/**
 * Wiederverwendbares Layout für /standorte/[slug]-Seiten.
 *
 * Liefert:
 *  - Vollständige Meta-Tags + Canonical
 *  - LocalBusiness (AutomotiveBusiness) JSON-LD mit @id (für referenzierende Service-Schemas)
 *  - BreadcrumbList JSON-LD
 *  - Sichtbaren Content-Block mit Intro, USPs, Kontakt, Einzugsgebiet, CTA
 */
export function StandortPageLayout({
  standort,
  metaTitle,
  metaDescription,
  h1,
  subtitle,
  introParagraphs,
  einzugsgebietText,
  anfahrtText,
  areaServed,
  schemaImageUrl,
  heroImageSrc,
}: StandortPageProps) {
  const canonical = `https://www.zoomlion-nrw.de/standorte/${standort.slug}`;
  const standortAddress = `${standort.street}, ${standort.postalCode} ${standort.city}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(standortAddress)}`;
  // OSM embed (kein API-Key, DSGVO-freundlich, kein Cookie-Consent nötig).
  // bbox ca. ±0.01° um den Standort = ~2 km Radius.
  const d = 0.01;
  const bbox = `${standort.lng - d}%2C${standort.lat - d}%2C${standort.lng + d}%2C${standort.lat + d}`;
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${standort.lat}%2C${standort.lng}`;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${canonical}#localbusiness`,
    name: `Zoomlion NRW – SLT Technology Group ${standort.name}`,
    alternateName: `Zoomlion Händler ${standort.name}`,
    description: metaDescription,
    url: canonical,
    telephone: standort.phone,
    email: standort.email,
    image: schemaImageUrl,
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: standort.street,
      postalCode: standort.postalCode,
      addressLocality: standort.city,
      addressRegion: "NW",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: standort.lat,
      longitude: standort.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: areaServed.map((city) => ({ "@type": "City", name: city })),
    parentOrganization: {
      "@type": "Organization",
      name: "SLT Technology Group GmbH & Co. KG",
      url: "https://www.zoomlion-nrw.de",
    },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Zoomlion Minibagger" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Zoomlion Arbeitsbühnen" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Zoomlion Teleskoplader" } },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.zoomlion-nrw.de/" },
      { "@type": "ListItem", position: 2, name: "Standorte", item: "https://www.zoomlion-nrw.de/standorte" },
      { "@type": "ListItem", position: 3, name: standort.name, item: canonical },
    ],
  };

  const usps = [
    "Ausstellungshof mit Zoomlion-Maschinen vor Ort",
    "Probefahrt auf Vereinbarung – auch kurzfristig",
    "Ersatzteillager mit Verschleißteilen ab Lager",
    "Werkstatt für Inspektion, Wartung & Garantiereparaturen",
    "Finanzierungsberatung ab 0 % (abhängig von Bonität)",
    "Beratung in Deutsch und Englisch",
  ];

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <SocialMeta title={metaTitle} description={metaDescription} url={canonical} image={schemaImageUrl} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Start", href: "/" },
              { label: "Standorte", href: "/standorte" },
              { label: standort.name },
            ]}
          />

          {/* Hero */}
          <div className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{h1}</h1>
            {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
          </div>

          {heroImageSrc && (
            <div className="mb-10 rounded-2xl overflow-hidden border border-border aspect-[2/1] bg-muted">
              <img
                src={heroImageSrc}
                alt={`Zoomlion NRW Standort ${standort.name} – ${standortAddress}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          )}

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p>{introParagraphs[0]}</p>
            <p>{introParagraphs[1]}</p>
          </div>

          {/* USPs */}
          <section aria-labelledby="usps-heading" className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 id="usps-heading" className="font-heading text-2xl font-bold mb-6">
              Unser Angebot am Standort {standort.name}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {usps.map((usp) => (
                <li key={usp} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{usp}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Anfahrt & Kontakt */}
          <section
            aria-labelledby="anfahrt-heading"
            className="mb-12 rounded-2xl border border-border bg-card overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[2/1] md:aspect-auto md:min-h-[320px] bg-muted">
                <iframe
                  src={osmEmbedUrl}
                  title={`Karte: Standort Zoomlion NRW ${standort.name}, ${standortAddress}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1.5 text-xs font-medium shadow-md hover:bg-background transition-colors"
                  aria-label={`Standort ${standort.name} in Google Maps öffnen`}
                >
                  <MapIcon className="h-3.5 w-3.5" />
                  In Google Maps öffnen
                </a>
              </div>

              <div className="p-6 md:p-8">
                <h2 id="anfahrt-heading" className="font-heading text-2xl font-bold mb-4">
                  Anfahrt & Kontakt
                </h2>
                <address className="not-italic mb-4 text-sm">
                  <strong className="block">SLT Technology Group GmbH &amp; Co. KG</strong>
                  Zoomlion NRW – {standort.name}
                  <br />
                  {standort.street}
                  <br />
                  {standort.postalCode} {standort.city}
                </address>
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <a href={`tel:${standort.phone}`} className="font-medium hover:text-primary transition-colors">
                      {standort.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <a href={`mailto:${standort.email}`} className="hover:text-primary transition-colors">
                      {standort.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Öffnungszeiten: {standort.hours}</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">{anfahrtText}</p>
              </div>
            </div>
          </section>

          {/* Einzugsgebiet */}
          <section aria-labelledby="einzugsgebiet-heading" className="mb-12">
            <h2 id="einzugsgebiet-heading" className="font-heading text-2xl font-bold mb-4">
              Einzugsgebiet {standort.name}
            </h2>
            <p className="text-muted-foreground">{einzugsgebietText}</p>
          </section>

          {/* CTA */}
          <section
            aria-labelledby="cta-heading"
            className="rounded-2xl bg-primary/5 border border-primary/20 p-8 md:p-10 text-center"
          >
            <h2 id="cta-heading" className="font-heading text-2xl md:text-3xl font-bold mb-3">
              Probefahrt am Standort {standort.name} vereinbaren
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Buchen Sie unverbindlich einen Termin und erleben Sie Zoomlion-Qualität aus EU-Produktion (Made in Ungarn,
              3 Jahre Garantie).
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg">
                <Link to={`/kontakt?from=${standort.slug}`}>
                  Termin anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${standort.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {standort.phoneDisplay}
                </a>
              </Button>
            </div>
          </section>

          {/* Andere Standorte */}
          <section className="mt-16 pt-8 border-t border-border">
            <h2 className="font-heading text-xl font-bold mb-4">Unsere weiteren Standorte in NRW</h2>
            <div className="flex flex-wrap gap-3">
              {(["bonn", "krefeld", "muelheim"] as const)
                .filter((s) => s !== standort.slug)
                .map((slug) => (
                  <Button key={slug} asChild variant="outline" size="sm">
                    <Link to={`/standorte/${slug}`}>
                      <MapPin className="mr-2 h-4 w-4" />
                      Standort {slug === "muelheim" ? "Mülheim a. d. Ruhr" : slug.charAt(0).toUpperCase() + slug.slice(1)}
                    </Link>
                  </Button>
                ))}
              <Button asChild variant="ghost" size="sm">
                <Link to="/standorte">Alle Standorte ansehen</Link>
              </Button>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
