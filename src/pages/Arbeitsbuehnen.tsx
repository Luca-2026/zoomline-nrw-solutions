import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PlatformConfigurator } from "@/components/configurator/PlatformConfigurator";

const Arbeitsbuehnen = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Zoomlion Arbeitsbühnen kaufen NRW",
    "description": "Übersicht aller Zoomlion Arbeitsbühnen zum Kauf in Nordrhein-Westfalen. Scheren-, Gelenk- und Teleskopbühnen bis 68m.",
    "numberOfItems": 50,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@type": "Product", "name": "Zoomlion Scherenarbeitsbühnen", "url": "https://www.zoomlion-nrw.de/arbeitsbuehnen#scheren", "brand": { "@type": "Brand", "name": "Zoomlion" } } },
      { "@type": "ListItem", "position": 2, "item": { "@type": "Product", "name": "Zoomlion Gelenkteleskopbühnen", "url": "https://www.zoomlion-nrw.de/arbeitsbuehnen#gelenk", "brand": { "@type": "Brand", "name": "Zoomlion" } } },
      { "@type": "ListItem", "position": 3, "item": { "@type": "Product", "name": "Zoomlion Teleskopbühnen", "url": "https://www.zoomlion-nrw.de/arbeitsbuehnen#teleskop", "brand": { "@type": "Brand", "name": "Zoomlion" } } }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Welche Arbeitsbühnen kann ich bei Zoomlion NRW kaufen?", "acceptedAnswer": { "@type": "Answer", "text": "Wir bieten Scherenarbeitsbühnen (elektrisch, Diesel, Hybrid), Gelenkteleskopbühnen, Teleskopbühnen bis 68m und Raupenarbeitsbühnen. Alle Modelle sind CE-zertifiziert und EU-konform." } },
      { "@type": "Question", "name": "Gibt es eine Garantie auf Zoomlion Arbeitsbühnen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, alle Zoomlion Arbeitsbühnen haben 3 Jahre Garantie oder 3.000 Betriebsstunden." } },
      { "@type": "Question", "name": "Kann ich eine Arbeitsbühne auch finanzieren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir bieten flexible Finanzierungsmöglichkeiten mit Laufzeiten von 12 bis 48 Monaten." } },
      { "@type": "Question", "name": "Wie läuft die Wartung meiner Arbeitsbühne ab?", "acceptedAnswer": { "@type": "Answer", "text": "Wir bieten drei Servicepakete: ZL|Care (Wartungsteile), ZL|Pro (Inspektion inkl. UVV) und ZL|Complete (Full-Service mit Ersatzgerät)." } }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Arbeitsbühne kaufen NRW – Hebebühne, Scherenbühne & Steiger neu</title>
        <meta 
          name="title" 
          content="Arbeitsbühne kaufen NRW – Hebebühne, Scherenbühne & Steiger neu" 
        />
        <meta 
          name="description" 
          content="Arbeitsbühne kaufen in NRW ➤ Scherenarbeitsbühnen, Gelenk- & Teleskopbühnen ✓ Bis 68 m Arbeitshöhe ✓ Elektro, Diesel & Hybrid ✓ 3 Jahre Garantie ✓ Finanzierung ✓ Made in EU. Jetzt Angebot anfordern!" 
        />
        <meta 
          name="keywords" 
          content="Arbeitsbühne kaufen, Arbeitsbühne kaufen NRW, Scherenarbeitsbühne kaufen, Hubarbeitsbühne kaufen, Hebebühne kaufen, Teleskopbühne kaufen, Gelenkbühne kaufen, Steiger kaufen NRW, Elektro Arbeitsbühne kaufen, Arbeitsbühne neu, Arbeitsbühne Köln, Arbeitsbühne Düsseldorf, Arbeitsbühne Bonn, Arbeitsbühne finanzieren" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/arbeitsbuehnen" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Arbeitsbühne kaufen NRW – Hebebühne, Scherenbühne & Steiger neu" />
        <meta property="og:description" content="Arbeitsbühnen kaufen in NRW. Scherenbühnen, Teleskopbühnen bis 68 m, Elektro/Diesel/Hybrid – 3 Jahre Garantie." />
        <meta property="og:url" content="https://www.zoomlion-nrw.de/arbeitsbuehnen" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

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
            subtitle="Zoomlion Scheren-, Gelenk- und Teleskopbühnen – filtern, vergleichen, anfragen"
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
              Als exklusiver <strong>Zoomlion Fachhändler in NRW</strong> bieten wir Ihnen das komplette Sortiment 
              an Arbeitsbühnen für jeden Einsatzzweck. Von kompakten <strong>Scherenarbeitsbühnen</strong> für Innenarbeiten 
              bis zu <strong>Teleskopbühnen mit 68 Metern Arbeitshöhe</strong> für große Bauprojekte.
            </p>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Unser Arbeitsbühnen-Sortiment</h3>
            <ul>
              <li><strong>Scherenarbeitsbühnen</strong> – Elektrisch oder Diesel, für Indoor und Outdoor</li>
              <li><strong>Gelenkteleskopbühnen</strong> – Flexibel einsetzbar mit hoher Reichweite</li>
              <li><strong>Teleskopbühnen</strong> – Für maximale Arbeitshöhen bis 68 Meter</li>
              <li><strong>Raupenarbeitsbühnen</strong> – Für schwieriges Gelände</li>
              <li><strong>Anhängerarbeitsbühnen</strong> – Mobil und schnell einsatzbereit</li>
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
              { q: "Welche Arbeitsbühnen kann ich bei Zoomlion NRW kaufen?", a: "Wir bieten Scherenarbeitsbühnen (elektrisch, Diesel, Hybrid), Gelenkteleskopbühnen, Teleskopbühnen bis 68m und Raupenarbeitsbühnen. Alle Modelle sind CE-zertifiziert und EU-konform." },
              { q: "Gibt es eine Garantie auf Zoomlion Arbeitsbühnen?", a: "Ja, alle Zoomlion Arbeitsbühnen haben 3 Jahre Garantie oder 3.000 Betriebsstunden. Zusätzlich bieten wir Serviceverträge mit UVV-Prüfung und kostenlosem Ersatzgerät." },
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
