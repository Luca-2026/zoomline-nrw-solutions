import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SocialMeta } from "@/components/shared/SocialMeta";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { Button } from "@/components/ui/button";
import { CityStandortCard } from "@/components/stadt/CityStandortCard";
import { CityReferences } from "@/components/stadt/CityReferences";
import { resolveStandort } from "@/data/standorte";
import {
  ArrowRight,
  Wrench,
  Factory,
  Truck,
  Shield,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export { staedte, type StadtData } from "@/data/staedte";
import { staedte } from "@/data/staedte";

const StadtSeite = () => {
  const { stadt } = useParams<{ stadt: string }>();
  const data = stadt ? staedte[stadt] : undefined;

  if (!data) {
    return <Navigate to="/standorte" replace />;
  }

  const standort = resolveStandort(data.standort);
  const seoTier = data.seoTier ?? "noindex";
  const isIndexable = seoTier === "index";
  const cityContent = data.cityContent;

  // ----- JSON-LD ------------------------------------------------------------
  // Service-Schema (statt LocalBusiness): Stadt ist Liefergebiet, NICHT Standort.
  // LocalBusiness gehört nur auf /standorte (siehe index.html und /standorte-Seite).
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Baumaschinenverkauf",
    name: `Zoomlion Baumaschinen kaufen in ${data.name}`,
    description: `Verkauf, Lieferung und Service von Zoomlion Minibaggern, Arbeitsbühnen und Teleskopladern in ${data.name} und Umgebung.`,
    url: `https://www.zoomlion-nrw.de/baumaschinen/${data.slug}`,
    areaServed: {
      "@type": "City",
      name: data.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: data.name,
        addressRegion: "Nordrhein-Westfalen",
        addressCountry: "DE",
      },
    },
    // Provider verweist nur per @id auf den realen Standort (AutomotiveBusiness),
    // KEIN eigenständiges LocalBusiness auf der Stadt-URL (kein physischer Standort hier).
    provider: {
      "@id": `https://www.zoomlion-nrw.de/standorte/${standort.slug}#localbusiness`,
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

  // FAQ: bevorzugt stadtspezifisch (cityContent.faq), Fallback auf generisch.
  const faqEntries = cityContent?.faq ?? [
    {
      question: `Kann ich einen Minibagger in ${data.name} kaufen?`,
      answer: `Ja, wir liefern Zoomlion Minibagger von 1,8 bis 25 Tonnen direkt nach ${data.name}. Beratung und Probefahrt am Standort ${standort.name}.`,
    },
    {
      question: `Wie lange dauert die Lieferung einer Arbeitsbühne nach ${data.name}?`,
      answer: `Lagerware liefern wir typischerweise innerhalb von 5–10 Werktagen nach ${data.name}. Bei individuellen Konfigurationen sprechen wir die Lieferzeit ab.`,
    },
    {
      question: `Gibt es Service & Ersatzteile in ${data.name}?`,
      answer: `Ja – Service, UVV-Prüfung und Ersatzteile organisieren wir vom nächstgelegenen Standort ${standort.name} aus, oft auch mit mobilem Service direkt vor Ort.`,
    },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
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
            isIndexable
              ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
              : "noindex, follow"
          }
        />
        <meta
          name="keywords"
          content={`Minibagger kaufen ${data.name}, Bagger kaufen ${data.name}, Arbeitsbühne kaufen ${data.name}, Hebebühne kaufen ${data.name}, Teleskoplader kaufen ${data.name}, Baumaschinen kaufen ${data.name}, Baumaschinen ${data.name}, Bagger ${data.name}, Telehandler ${data.name}`}
        />
        <link rel="canonical" href={`https://www.zoomlion-nrw.de/baumaschinen/${data.slug}`} />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SocialMeta
        title={data.metaTitle}
        description={data.metaDescription}
        url={`https://www.zoomlion-nrw.de/baumaschinen/${data.slug}`}
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Start", href: "/" },
              { label: "Standorte", href: "/standorte" },
              { label: data.name },
            ]}
          />

          {/* HERO – exakter H1-Wortlaut laut SEO-Prompt */}
          <SectionHeading
            as="h1"
            badge={`Baumaschinen ${data.name}`}
            title={`Zoomlion Baumaschinen in ${data.name} kaufen – Minibagger, Arbeitsbühnen & Teleskoplader`}
            subtitle={`Made in EU – 3 Jahre Garantie – Lieferung & Einweisung in ${data.name} und Umgebung`}
          />

          <div className="max-w-4xl mx-auto">
            {/* Stadt-spezifischer Intro-Absatz (≥150 Wörter) */}
            <div className="prose prose-lg max-w-none mb-10">
              {cityContent ? (
                <p className="text-lg leading-relaxed">{cityContent.intro}</p>
              ) : (
                <>
                  <p className="text-lg">{data.description}</p>
                  <p>{data.longDescription}</p>
                </>
              )}
            </div>

            {/* Standort-Karte mit OSM-Bild + CTAs */}
            {cityContent && (
              <CityStandortCard
                cityName={data.name}
                osmBbox={cityContent.osmBbox}
                routeDescription={cityContent.routeFromCenter}
                driveTimeMinutes={cityContent.driveTimeMinutes}
                distanceKm={data.distanceKm ?? 0}
                standort={standort}
              />
            )}

            {/* Empfohlene Maschinen für diese Stadt */}
            {cityContent && cityContent.recommendedProducts.length > 0 && (
              <section aria-labelledby="city-products" className="mb-12">
                <h2 id="city-products" className="font-heading text-2xl font-bold mb-2">
                  Top-Maschinen für {data.name}
                </h2>
                <p className="text-muted-foreground mb-6 text-sm">
                  Unsere Empfehlung für die typischen Anwendungen in {data.name} und Umgebung:
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {cityContent.recommendedProducts.map((product) => (
                    <Link
                      key={product.name}
                      to={product.link}
                      className="group p-5 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                    >
                      <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">
                        {product.category}
                      </p>
                      <h3 className="font-heading font-bold text-base mb-2 leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{product.reason}</p>
                      <span className="text-primary text-sm font-medium flex items-center gap-1">
                        Details ansehen
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Generische Branchen-Referenzen mit PLZ */}
            {cityContent && (
              <CityReferences cityName={data.name} references={cityContent.references} />
            )}

            {/* Allgemeine Produkt-Kategorien (führt in die Hauptseiten) */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <Link
                to="/bagger"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-heading font-bold text-lg mb-2">Alle Minibagger</h3>
                <p className="text-sm text-muted-foreground mb-3">Mini- & Kompaktbagger 1,8–25 t</p>
                <span className="text-primary text-sm font-medium flex items-center gap-1">
                  Modelle ansehen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/arbeitsbuehnen"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-heading font-bold text-lg mb-2">Alle Arbeitsbühnen</h3>
                <p className="text-sm text-muted-foreground mb-3">Scheren-, Gelenk- & Teleskopbühnen</p>
                <span className="text-primary text-sm font-medium flex items-center gap-1">
                  Modelle ansehen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/teleskoplader"
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-heading font-bold text-lg mb-2">Alle Teleskoplader</h3>
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
                    Schnelle Verfügbarkeit über Standort {standort.name}
                  </p>
                </div>
              </div>
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
                Neben {data.name}{cityContent ? ` (PLZ ${cityContent.plzRange})` : ""} beliefern wir
                auch die umliegenden Städte und Gemeinden in der Region {data.region}:
              </p>
              <div className="flex flex-wrap gap-2">
                {data.nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-sm text-foreground/80"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Hinweis: Vermietung über Schwesterunternehmen SLT Rental */}
            <aside
              aria-labelledby="rental-hint"
              className="mb-12 p-6 rounded-xl border border-primary/20 bg-primary/5"
            >
              <h2 id="rental-hint" className="font-heading text-xl font-bold mb-2">
                Sie möchten eine Maschine in {data.name} mieten statt kaufen?
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Auf zoomlion-nrw.de geht es ausschließlich um den Verkauf von Zoomlion
                Neumaschinen. Für die klassische Vermietung von Baumaschinen und Arbeitsbühnen
                ist unser Schwesterunternehmen <strong>SLT Rental</strong> zuständig – ebenfalls
                mit Standorten in NRW und persönlicher Beratung. Eine kostenfreie{" "}
                <strong>Try &amp; Buy-Testmiete</strong> Ihrer Wunschmaschine vor dem Kauf bieten
                wir Ihnen selbstverständlich auch direkt über uns an.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://www.slt-rental.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Zur Vermietung auf slt-rental.de
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/try-and-buy">Try &amp; Buy-Testmiete</Link>
                </Button>
              </div>
            </aside>

            {/* Stadtspezifische FAQ */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold mb-6">
                Häufige Fragen zum Baumaschinen-Kauf in {data.name}
              </h2>
              <div className="space-y-4">
                {faqEntries.map((faq) => (
                  <div key={faq.question} className="p-5 rounded-xl border border-border bg-card">
                    <h3 className="font-heading font-bold mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
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

            {/* Final-CTA */}
            <div className="text-center mb-12">
              <Button asChild size="lg" className="group">
                <Link to="/kontakt">
                  Jetzt unverbindliches Angebot für {data.name} anfragen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <TrustBadges />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StadtSeite;
