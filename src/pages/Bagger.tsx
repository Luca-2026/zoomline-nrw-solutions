import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ExcavatorConfigurator } from "@/components/configurator/ExcavatorConfigurator";

const Bagger = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Zoomlion Minibagger & Kompaktbagger kaufen NRW",
    "description": "Übersicht aller Zoomlion Minibagger und Kompaktbagger zum Kauf in Nordrhein-Westfalen. Von 1,8 bis 25 Tonnen.",
    "numberOfItems": 15,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ZE18GU Minibagger", "url": "https://www.zoomlion-nrw.de/bagger#ze18gu" },
      { "@type": "ListItem", "position": 2, "name": "ZE36GU Minibagger", "url": "https://www.zoomlion-nrw.de/bagger#ze36gu" },
      { "@type": "ListItem", "position": 3, "name": "ZE75G Kompaktbagger", "url": "https://www.zoomlion-nrw.de/bagger#ze75g" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Welcher Minibagger eignet sich für den Garten- und Landschaftsbau?", "acceptedAnswer": { "@type": "Answer", "text": "Für GaLaBau-Arbeiten empfehlen wir den ZE18GU (1,8t) oder ZE36GU (3,6t). Diese Modelle sind kompakt, wendig und schonen empfindliche Rasenflächen." } },
      { "@type": "Question", "name": "Gibt es Elektro-Minibagger bei Zoomlion?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir führen Elektro-Minibagger für emissionsfreies und leises Arbeiten." } },
      { "@type": "Question", "name": "Wie lange ist die Garantie auf einen Zoomlion Minibagger?", "acceptedAnswer": { "@type": "Answer", "text": "Alle Zoomlion Minibagger haben 3 Jahre Garantie oder 3.000 Betriebsstunden." } },
      { "@type": "Question", "name": "Kann ich meinen alten Bagger in Zahlung geben?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir nehmen Ihren Gebrauchtbagger in Zahlung – unabhängig vom Hersteller." } }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Minibagger kaufen NRW – Bagger 1,8–25t neu | Sofort verfügbar</title>
        <meta 
          name="title" 
          content="Minibagger kaufen NRW – Bagger 1,8–25t neu | Sofort verfügbar" 
        />
        <meta 
          name="description" 
          content="Minibagger & Kompaktbagger kaufen in NRW ➤ Neu von 1,8 bis 25 t ✓ Diesel & Elektro ✓ 3 Jahre Garantie ✓ Finanzierung ✓ Inzahlungnahme ✓ Ersatzteile vor Ort. Jetzt unverbindliches Angebot anfordern!" 
        />
        <meta 
          name="keywords" 
          content="Minibagger kaufen, Minibagger kaufen NRW, Bagger kaufen NRW, Kompaktbagger kaufen, Minibagger neu, Mini Bagger kaufen, Elektro Minibagger kaufen, Kettenbagger kaufen, Minibagger 1.8t kaufen, Minibagger 3t kaufen, Minibagger 5t kaufen, Minibagger Köln, Minibagger Düsseldorf, Minibagger Bonn, Minibagger Essen, Minibagger Dortmund, Bagger finanzieren NRW" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/bagger" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Minibagger kaufen NRW – Bagger 1,8–25t neu | Sofort verfügbar" />
        <meta property="og:description" content="Minibagger & Kompaktbagger neu kaufen in NRW. Diesel & Elektro, 3 Jahre Garantie, Finanzierung möglich." />
        <meta property="og:url" content="https://www.zoomlion-nrw.de/bagger" />
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
              { label: "Minibagger" }
            ]} 
          />
          <SectionHeading
            badge="Minibagger kaufen"
            title="Minibagger & Kompaktbagger kaufen in NRW"
            subtitle="Zoomlion Bagger von 1,8 bis 25 Tonnen – filtern, vergleichen, anfragen"
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
              Als exklusiver <strong>Zoomlion Fachhändler in NRW</strong> bieten wir Ihnen ein umfangreiches Sortiment 
              an Minibaggern und Kompaktbaggern. Ob für den <strong>GaLaBau</strong>, <strong>Tiefbau</strong>, 
              <strong>Abbrucharbeiten</strong> oder den universellen Einsatz – bei uns finden Sie den passenden Bagger 
              für Ihre Anforderungen.
            </p>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Vorteile beim Minibagger-Kauf bei Zoomlion NRW</h3>
            <ul>
              <li><strong>3 Jahre Garantie</strong> oder 3.000 Betriebsstunden auf alle Neumaschinen</li>
              <li><strong>Ersatzteile vor Ort</strong> an allen 3 Standorten in NRW</li>
              <li><strong>Flexible Finanzierung</strong> mit attraktiven Konditionen</li>
              <li><strong>Inzahlungnahme</strong> Ihrer Gebrauchtmaschine möglich</li>
              <li><strong>Elektro-Minibagger</strong> für emissionsfreies Arbeiten verfügbar</li>
            </ul>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Minibagger für jeden Einsatzbereich</h3>
            <p>
              Von kompakten <strong>1,8-Tonnen-Minibaggern</strong> für beengte Baustellen bis hin zu leistungsstarken 
              <strong> Kompaktbaggern bis 25 Tonnen</strong> für schwere Einsätze im Tiefbau – unser Sortiment deckt 
              alle Anforderungen ab. Alle Modelle überzeugen durch <strong>deutsche Qualitätsstandards</strong> und 
              ein <strong>hervorragendes Preis-Leistungs-Verhältnis</strong>.
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
              { q: "Welcher Minibagger eignet sich für den Garten- und Landschaftsbau?", a: "Für GaLaBau-Arbeiten empfehlen wir den ZE18GU (1,8t) oder ZE36GU (3,6t). Diese Modelle sind kompakt, wendig und schonen empfindliche Rasenflächen dank geringer Bodenbelastung." },
              { q: "Gibt es Elektro-Minibagger bei Zoomlion?", a: "Ja, wir führen Elektro-Minibagger für emissionsfreies und leises Arbeiten – ideal für den Einsatz in Innenstädten, Hallen und sensiblen Bereichen." },
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
