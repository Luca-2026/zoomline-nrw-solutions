import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ExcavatorConfigurator } from "@/components/configurator/ExcavatorConfigurator";
import { SocialMeta } from "@/components/shared/SocialMeta";
import { getProductPagesByCategory } from "@/data/productPages";
import { SITE_URL } from "@/data/seoRoutes";

const Bagger = () => {
  // ItemList aus realen Detailseiten (PRODUCT_PAGES) – korrekte Deep-Links
  const baggerPages = getProductPagesByCategory("bagger");

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/bagger/`,
    "name": "Zoomlion Minibagger & Kompaktbagger kaufen in NRW",
    "description":
      "Übersicht der Zoomlion Minibagger zum Kauf in Nordrhein-Westfalen: ZE20G (2 t), ZE27GU (2,5 t Kurzheck) und ZE55GU (5,8 t Kompaktbagger) mit Kubota-Dieselmotor in EU Stage V und 3 Jahren Garantie.",
    "url": `${SITE_URL}/bagger/`,
    "inLanguage": "de-DE",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": baggerPages.length,
      "itemListElement": baggerPages.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": `${SITE_URL}/bagger/${p.slug}/`,
        "item": {
          "@type": "Product",
          "@id": `${SITE_URL}/bagger/${p.slug}/#product`,
          "name": p.name,
          "image": `${SITE_URL}${p.imagePublicPath}`,
          "url": `${SITE_URL}/bagger/${p.slug}/`,
          "brand": { "@type": "Brand", "name": "Zoomlion" },
          "category": p.categoryLabel,
          "offers": {
            "@type": "Offer",
            "url": `${SITE_URL}/bagger/${p.slug}/`,
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
      { "@type": "Question", "name": "Welcher Minibagger eignet sich für den Garten- und Landschaftsbau?", "acceptedAnswer": { "@type": "Answer", "text": "Für GaLaBau-Arbeiten empfehlen wir den ZE20G (2 t) oder den ZE27GU (2,5 t Kurzheck). Beide Modelle sind kompakt, wendig und schonen empfindliche Rasenflächen." } },
      { "@type": "Question", "name": "Welche Antriebsart haben die Zoomlion Minibagger?", "acceptedAnswer": { "@type": "Answer", "text": "Alle aktuell angebotenen Zoomlion Minibagger (ZE20G, ZE27GU, ZE55GU) sind mit bewährten Kubota-Dieselmotoren in EU Stage V ausgestattet." } },
      { "@type": "Question", "name": "Wie lange ist die Garantie auf einen Zoomlion Minibagger?", "acceptedAnswer": { "@type": "Answer", "text": "Alle Zoomlion Minibagger haben 3 Jahre Garantie oder 3.000 Betriebsstunden." } },
      { "@type": "Question", "name": "Kann ich meinen alten Bagger in Zahlung geben?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir nehmen Ihren Gebrauchtbagger in Zahlung – unabhängig vom Hersteller." } }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Minibagger kaufen NRW – ZE20G, ZE27GU & ZE55GU | Zoomlion NRW</title>
        <meta 
          name="title" 
          content="Minibagger kaufen NRW – ZE20G, ZE27GU & ZE55GU | Zoomlion NRW" 
        />
        <meta 
          name="description" 
          content="Zoomlion Minibagger kaufen in NRW ➤ ZE20G (2 t), ZE27GU (2,5 t Kurzheck) & ZE55GU (5,8 t) ✓ Kubota-Diesel EU Stage V ✓ 3 Jahre Garantie ✓ Finanzierung ✓ Inzahlungnahme. Jetzt Angebot anfordern!" 
        />
        <meta 
          name="keywords" 
          content="Minibagger kaufen, Minibagger kaufen NRW, Bagger kaufen NRW, Kompaktbagger kaufen, Minibagger neu, Mini Bagger kaufen, Kettenbagger kaufen, ZE20G kaufen, ZE27GU kaufen, ZE55GU kaufen, Minibagger 2t kaufen, Minibagger 2,5t kaufen, Minibagger 5,8t kaufen, Minibagger Köln, Minibagger Düsseldorf, Minibagger Bonn, Minibagger Essen, Minibagger Dortmund, Bagger finanzieren NRW" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/bagger/" />
        
        {/* Open Graph & Twitter Card via SocialMeta below */}
        
        <script type="application/ld+json">
          {JSON.stringify(collectionPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SocialMeta
        title="Minibagger kaufen NRW – ZE20G, ZE27GU & ZE55GU | Zoomlion NRW"
        description="Zoomlion Minibagger neu kaufen in NRW: ZE20G, ZE27GU & ZE55GU mit Kubota-Diesel EU Stage V – 3 Jahre Garantie."
        url="https://www.zoomlion-nrw.de/bagger"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Start", href: "/" },
              { label: "Minibagger" }
            ]} 
          />
          <SectionHeading
            as="h1"
            badge="Minibagger kaufen"
            title="Minibagger & Kompaktbagger kaufen in NRW"
            subtitle="Zoomlion ZE20G, ZE27GU & ZE55GU – filtern, vergleichen, anfragen"
          />
          <ExcavatorConfigurator />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">Minibagger kaufen in Nordrhein-Westfalen</h2>
            <p>
              Als exklusiver <strong>Zoomlion Fachhändler in NRW</strong> bieten wir Ihnen unser sofort verfügbares 
              Minibagger-Sortiment für <strong>GaLaBau</strong>, <strong>Tiefbau</strong>, leichte 
              <strong>Abbrucharbeiten</strong> und den universellen Einsatz – mit kurzen Lieferzeiten ab unseren 
              Standorten in Krefeld, Bonn und Mülheim an der Ruhr.
            </p>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Vorteile beim Minibagger-Kauf bei Zoomlion NRW</h3>
            <ul>
              <li><strong>3 Jahre Garantie</strong> oder 3.000 Betriebsstunden auf alle Neumaschinen</li>
              <li><strong>Ersatzteile vor Ort</strong> an allen 3 Standorten in NRW</li>
              <li><strong>Flexible Finanzierung</strong> mit attraktiven Konditionen</li>
              <li><strong>Inzahlungnahme</strong> Ihrer Gebrauchtmaschine möglich</li>
              <li><strong>Bewährter Kubota-Dieselmotor</strong> in EU Stage V – sparsam und langlebig</li>
            </ul>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Minibagger für jeden Einsatzbereich</h3>
            <p>
              Unser Sortiment reicht vom kompakten <strong>2-Tonnen-Minibagger ZE20G</strong> über den 
              <strong> 2,5-Tonnen-Kurzheckbagger ZE27GU</strong> bis zum <strong>5,8-Tonnen-Kompaktbagger ZE55GU</strong> – 
              alle mit bewährten <strong>Kubota-Dieselmotoren in EU Stage V</strong>. Damit decken wir Einsätze von 
              beengten innerstädtischen Baustellen bis zu mittleren Tiefbau- und Erdarbeiten zuverlässig ab.
            </p>
            <p>
              Für die <Link to="/service" className="text-primary hover:underline font-medium">regelmäßige Wartung Ihres Baggers</Link> bieten wir 
              maßgeschneiderte <Link to="/servicevertraege" className="text-primary hover:underline font-medium">Serviceverträge</Link> an – 
              inklusive UVV-Prüfung. Berechnen Sie Ihre monatliche Rate mit unserem <Link to="/finanzierung" className="text-primary hover:underline font-medium">Finanzierungsrechner</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6 text-center">Häufige Fragen zum Minibagger-Kauf</h2>
          <div className="space-y-4">
            {[
              { q: "Welcher Minibagger eignet sich für den Garten- und Landschaftsbau?", a: "Für GaLaBau-Arbeiten empfehlen wir den ZE20G (2 t) oder den ZE27GU (2,5 t Kurzheck). Beide Modelle sind kompakt, wendig und schonen empfindliche Rasenflächen dank geringer Bodenbelastung." },
              { q: "Welche Antriebsart haben die Zoomlion Minibagger?", a: "Alle aktuell angebotenen Zoomlion Minibagger (ZE20G, ZE27GU, ZE55GU) sind mit bewährten Kubota-Dieselmotoren in EU Stage V ausgestattet – sparsam, langlebig und EU-konform." },
              { q: "Wie lange ist die Garantie auf einen Zoomlion Minibagger?", a: "Alle Zoomlion Minibagger haben 3 Jahre Garantie oder 3.000 Betriebsstunden. Bei einem Servicevertrag profitieren Sie zusätzlich von planbaren Wartungskosten." },
              { q: "Kann ich meinen alten Bagger in Zahlung geben?", a: "Ja, wir nehmen Ihren Gebrauchtbagger in Zahlung – unabhängig vom Hersteller. Sprechen Sie uns an für eine unverbindliche Bewertung." },
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

export default Bagger;
