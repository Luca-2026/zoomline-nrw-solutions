import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PlatformConfigurator } from "@/components/configurator/PlatformConfigurator";
import { SocialMeta } from "@/components/shared/SocialMeta";
import { getProductPagesByCategory } from "@/data/productPages";
import { SITE_URL } from "@/data/seoRoutes";

const Arbeitsbuehnen = () => {
  // ItemList aus realen Detailseiten (PRODUCT_PAGES) – korrekte Deep-Links
  const platformPages = getProductPagesByCategory("arbeitsbuehnen");

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/arbeitsbuehnen/`,
    "name": "Zoomlion Arbeitsbühnen kaufen in NRW",
    "description":
      "Übersicht der Zoomlion Arbeitsbühnen zum Kauf in Nordrhein-Westfalen: Elektro-Scherenarbeitsbühnen von 7,8 bis 15,7 m Arbeitshöhe sowie die Teleskopmastbühne ZMP09J mit 11,2 m – CE-zertifiziert und EU-konform.",
    "url": `${SITE_URL}/arbeitsbuehnen/`,
    "inLanguage": "de-DE",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": platformPages.length,
      "itemListElement": platformPages.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": `${SITE_URL}/arbeitsbuehnen/${p.slug}/`,
        "item": {
          "@type": "Product",
          "@id": `${SITE_URL}/arbeitsbuehnen/${p.slug}/#product`,
          "name": p.name,
          "image": `${SITE_URL}${p.imagePublicPath}`,
          "url": `${SITE_URL}/arbeitsbuehnen/${p.slug}/`,
          "brand": { "@type": "Brand", "name": "Zoomlion" },
          "category": p.categoryLabel,
          "offers": {
            "@type": "Offer",
            "url": `${SITE_URL}/arbeitsbuehnen/${p.slug}/`,
            "availability": "https://schema.org/InStock",
            "priceCurrency": "EUR",
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "AutomotiveBusiness",
              "@id": `${SITE_URL}/standorte/krefeld#localbusiness`,
            },
          },
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Welche Arbeitsbühnen kann ich bei Zoomlion NRW kaufen?", "acceptedAnswer": { "@type": "Answer", "text": "Wir bieten elektrische Scherenarbeitsbühnen von 7,8 bis 15,7 m Arbeitshöhe sowie die Teleskopmastbühne ZMP09J mit 11,2 m Arbeitshöhe für enge Innenräume. Alle Modelle sind CE-zertifiziert und EU-konform." } },
      { "@type": "Question", "name": "Gibt es eine Garantie auf Zoomlion Arbeitsbühnen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, alle Zoomlion Arbeitsbühnen haben 3 Jahre Garantie oder 3.000 Betriebsstunden." } },
      { "@type": "Question", "name": "Kann ich eine Arbeitsbühne auch finanzieren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir bieten flexible Finanzierungsmöglichkeiten mit Laufzeiten von 12 bis 48 Monaten." } },
      { "@type": "Question", "name": "Wie läuft die Wartung meiner Arbeitsbühne ab?", "acceptedAnswer": { "@type": "Answer", "text": "Wir bieten drei Servicepakete: ZL|Care (Wartungsteile), ZL|Pro (Inspektion inkl. UVV) und ZL|Complete (Full-Service mit Ersatzgerät)." } }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Arbeitsbühne kaufen NRW – Scherenbühne & Mastbühne neu | Zoomlion NRW</title>
        <meta 
          name="title" 
          content="Arbeitsbühne kaufen NRW – Scherenbühne & Mastbühne neu | Zoomlion NRW" 
        />
        <meta 
          name="description" 
          content="Arbeitsbühne kaufen in NRW ➤ Elektro-Scherenarbeitsbühnen 7,8–15,7 m & Teleskopmastbühne ZMP09J (11,2 m) ✓ CE-zertifiziert ✓ 3 Jahre Garantie ✓ Finanzierung ✓ Made in EU. Jetzt Angebot anfordern!" 
        />
        <meta 
          name="keywords" 
          content="Arbeitsbühne kaufen, Arbeitsbühne kaufen NRW, Scherenarbeitsbühne kaufen, Hubarbeitsbühne kaufen, Hebebühne kaufen, Mastbühne kaufen, Teleskopmastbühne kaufen, Elektro Arbeitsbühne kaufen, Arbeitsbühne neu, Arbeitsbühne Köln, Arbeitsbühne Düsseldorf, Arbeitsbühne Bonn, Arbeitsbühne finanzieren, ZS0607AC-LI, ZS1012AC-LI, ZMP09J" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/arbeitsbuehnen/" />
      </Helmet>
      <SocialMeta
        title="Arbeitsbühne kaufen NRW – Scherenbühne & Mastbühne neu | Zoomlion NRW"
        description="Arbeitsbühnen kaufen in NRW: Elektro-Scherenbühnen 7,8–15,7 m und Teleskopmastbühne ZMP09J (11,2 m) – 3 Jahre Garantie."
        url="https://www.zoomlion-nrw.de/arbeitsbuehnen"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Start", href: "/" },
              { label: "Arbeitsbühnen" }
            ]} 
          />
          <SectionHeading
            as="h1"
            badge="Arbeitsbühnen kaufen"
            title="Arbeitsbühnen kaufen in NRW"
            subtitle="Zoomlion Elektro-Scherenbühnen & Teleskopmastbühne – filtern, vergleichen, anfragen"
          />
          <PlatformConfigurator />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">Arbeitsbühnen kaufen in Nordrhein-Westfalen</h2>
            <p>
              Als exklusiver <strong>Zoomlion Fachhändler in NRW</strong> bieten wir Ihnen unser sofort verfügbares 
              Arbeitsbühnen-Sortiment für Innen- und Außeneinsätze. Ob <strong>Scherenarbeitsbühne für die Halle</strong> 
              (7,8 bis 15,7 m Arbeitshöhe) oder <strong>Teleskopmastbühne für enge Innenräume</strong> (ZMP09J mit 11,2 m) – 
              Zoomlion Arbeitsbühnen überzeugen mit hoher Qualität zu fairem Preis.
            </p>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Unser Arbeitsbühnen-Sortiment</h3>
            <ul>
              <li><strong>Elektro-Scherenarbeitsbühnen</strong> – Arbeitshöhen von 7,8 bis 15,7 m, ideal für Indoor und leichte Outdoor-Einsätze</li>
              <li><strong>Lithium-Ionen-Varianten</strong> (ZS0607AC-LI, ZS1012AC-LI) – längere Einsatzzeiten, schnelles Laden, wartungsarm</li>
              <li><strong>Teleskopmastbühne ZMP09J</strong> – 11,2 m Arbeitshöhe, kompakt für enge Innenräume und Türdurchfahrten</li>
            </ul>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Warum Arbeitsbühnen bei Zoomlion NRW kaufen?</h3>
            <p>
              Mit <strong>3 Jahren Garantie</strong>, <strong>Ersatzteilen vor Ort</strong> und 
              <strong> flexibler Finanzierung</strong> machen wir Ihnen den Kauf so einfach wie möglich. 
              Als <strong>Top 5 Hersteller weltweit</strong> steht Zoomlion für Qualität und Zuverlässigkeit 
              zu einem <strong>hervorragenden Preis-Leistungs-Verhältnis</strong>.
            </p>
            <p>
              Neben dem Kauf bieten wir auch maßgeschneiderte <Link to="/servicevertraege" className="text-primary hover:underline font-medium">Serviceverträge für Arbeitsbühnen</Link> – 
              inklusive <strong>UVV-Prüfung</strong> und optionalem <strong>kostenlosen Ersatzgerät</strong>. 
              Informieren Sie sich auch über unsere <Link to="/finanzierung" className="text-primary hover:underline font-medium">Finanzierungsmöglichkeiten</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6 text-center">Häufige Fragen zum Arbeitsbühnen-Kauf</h2>
          <div className="space-y-4">
            {[
              { q: "Welche Arbeitsbühnen kann ich bei Zoomlion NRW kaufen?", a: "Wir bieten elektrische Scherenarbeitsbühnen von 7,8 bis 15,7 m Arbeitshöhe (z.B. ZS0607AC-LI, ZS1012AC-LI) sowie die Teleskopmastbühne ZMP09J mit 11,2 m Arbeitshöhe. Alle Modelle sind CE-zertifiziert und EU-konform." },
              { q: "Gibt es eine Garantie auf Zoomlion Arbeitsbühnen?", a: "Ja, alle Zoomlion Arbeitsbühnen haben 3 Jahre Garantie oder 3.000 Betriebsstunden. Zusätzlich bieten wir Serviceverträge mit UVV-Prüfung und optional kostenlosem Ersatzgerät." },
              { q: "Kann ich eine Arbeitsbühne auch finanzieren?", a: "Ja, wir bieten flexible Finanzierungsmöglichkeiten mit Laufzeiten von 12 bis 48 Monaten. Nutzen Sie unseren Online-Finanzierungsrechner für eine erste Kalkulation." },
              { q: "Wie läuft die Wartung meiner Arbeitsbühne ab?", a: "Wir bieten drei Servicepakete: ZL|Care (Wartungsteile), ZL|Pro (Inspektion inkl. UVV) und ZL|Complete (Full-Service mit Ersatzgerät). Die UVV-Prüfung nach DGUV ist in ZL|Pro und ZL|Complete enthalten." },
            ].map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl border border-border bg-card">
                <h3 className="font-heading font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Arbeitsbuehnen;
