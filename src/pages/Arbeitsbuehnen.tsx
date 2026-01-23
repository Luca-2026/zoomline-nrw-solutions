import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PlatformConfigurator } from "@/components/configurator/PlatformConfigurator";

const Arbeitsbuehnen = () => {
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
        "name": "Arbeitsbühnen kaufen",
        "item": "https://www.zoomlion-nrw.de/arbeitsbuehnen"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Zoomlion Arbeitsbühnen kaufen NRW",
    "description": "Übersicht aller Zoomlion Arbeitsbühnen zum Kauf in Nordrhein-Westfalen. Scheren-, Gelenk- und Teleskopbühnen bis 68m.",
    "numberOfItems": 50,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Scherenarbeitsbühnen",
        "url": "https://www.zoomlion-nrw.de/arbeitsbuehnen#scheren"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gelenkteleskopbühnen",
        "url": "https://www.zoomlion-nrw.de/arbeitsbuehnen#gelenk"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Teleskopbühnen",
        "url": "https://www.zoomlion-nrw.de/arbeitsbuehnen#teleskop"
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Arbeitsbühne kaufen NRW | Zoomlion Hebebühnen ✓ 3 Jahre Garantie</title>
        <meta 
          name="title" 
          content="Arbeitsbühne kaufen NRW | Zoomlion Hebebühnen ✓ 3 Jahre Garantie" 
        />
        <meta 
          name="description" 
          content="Arbeitsbühne kaufen in NRW ➤ Zoomlion Scheren-, Gelenk- & Teleskopbühnen ✓ 3 Jahre Garantie ✓ Elektrisch, Diesel & Hybrid ✓ Bis 68m Arbeitshöhe ✓ Finanzierung möglich. Jetzt anfragen!" 
        />
        <meta 
          name="keywords" 
          content="Arbeitsbühne kaufen NRW, Scherenarbeitsbühne kaufen, Hubarbeitsbühne kaufen NRW, Hebebühne kaufen, Teleskopbühne kaufen, Gelenkbühne kaufen, Steiger kaufen NRW, Arbeitsbühne kaufen Köln, Arbeitsbühne kaufen Düsseldorf, Arbeitsbühne finanzieren, Zoomlion Arbeitsbühne" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/arbeitsbuehnen" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Arbeitsbühne kaufen NRW | Zoomlion Hebebühnen" />
        <meta property="og:description" content="Arbeitsbühnen kaufen in NRW beim exklusiven Zoomlion Fachhändler. Scherenarbeitsbühnen, Teleskopbühnen bis 68m, mit 3 Jahren Garantie." />
        <meta property="og:url" content="https://www.zoomlion-nrw.de/arbeitsbuehnen" />
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
              <strong>flexibler Finanzierung</strong> machen wir Ihnen den Kauf so einfach wie möglich. 
              Als <strong>Top 5 Hersteller weltweit</strong> steht Zoomlion für Qualität und Zuverlässigkeit 
              zu einem <strong>hervorragenden Preis-Leistungs-Verhältnis</strong>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Arbeitsbuehnen;
