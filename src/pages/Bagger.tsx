import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ExcavatorConfigurator } from "@/components/configurator/ExcavatorConfigurator";

const Bagger = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Start",
        "item": "https://www.zoomlion-nrw.de/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Minibagger kaufen",
        "item": "https://www.zoomlion-nrw.de/bagger"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Zoomlion Minibagger & Kompaktbagger kaufen NRW",
    "description": "Übersicht aller Zoomlion Minibagger und Kompaktbagger zum Kauf in Nordrhein-Westfalen. Von 1,8 bis 25 Tonnen.",
    "numberOfItems": 15,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ZE18GU Minibagger",
        "url": "https://www.zoomlion-nrw.de/bagger#ze18gu"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "ZE36GU Minibagger",
        "url": "https://www.zoomlion-nrw.de/bagger#ze36gu"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ZE75G Kompaktbagger",
        "url": "https://www.zoomlion-nrw.de/bagger#ze75g"
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Minibagger kaufen NRW | Zoomlion Kompaktbagger ✓ 3 Jahre Garantie</title>
        <meta 
          name="title" 
          content="Minibagger kaufen NRW | Zoomlion Kompaktbagger ✓ 3 Jahre Garantie" 
        />
        <meta 
          name="description" 
          content="Minibagger kaufen in NRW ➤ Zoomlion Mini- & Kompaktbagger 1,8-25t ✓ 3 Jahre Garantie ✓ Elektro & Diesel ✓ Finanzierung möglich ✓ Ersatzteile vor Ort. Jetzt Angebot anfordern!" 
        />
        <meta 
          name="keywords" 
          content="Minibagger kaufen NRW, Minibagger kaufen Köln, Minibagger kaufen Düsseldorf, Kompaktbagger kaufen, Elektro Minibagger kaufen, Kettenbagger kaufen NRW, Bagger kaufen Nordrhein-Westfalen, Zoomlion Minibagger, Minibagger neu kaufen, Bagger finanzieren NRW" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/bagger" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Minibagger kaufen NRW | Zoomlion Kompaktbagger" />
        <meta property="og:description" content="Minibagger kaufen in NRW beim exklusiven Zoomlion Fachhändler. Von 1,8 bis 25 Tonnen, mit 3 Jahren Garantie." />
        <meta property="og:url" content="https://www.zoomlion-nrw.de/bagger" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
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
              <strong>Kompaktbaggern bis 25 Tonnen</strong> für schwere Einsätze im Tiefbau – unser Sortiment deckt 
              alle Anforderungen ab. Alle Modelle überzeugen durch <strong>deutsche Qualitätsstandards</strong> und 
              ein <strong>hervorragendes Preis-Leistungs-Verhältnis</strong>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bagger;
