import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TelehandlerConfigurator } from "@/components/configurator/TelehandlerConfigurator";

const Teleskoplader = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Zoomlion Teleskoplader kaufen NRW",
    "description": "Übersicht aller Zoomlion Teleskoplader zum Kauf in Nordrhein-Westfalen. Drehbare und nicht rotierende Modelle bis 24,8 m Arbeitshöhe.",
    "numberOfItems": 5,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ZTH2506 Teleskoplader",
        "url": "https://www.zoomlion-nrw.de/teleskoplader#zth2506"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "ZTH3507 Teleskoplader",
        "url": "https://www.zoomlion-nrw.de/teleskoplader#zth3507"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ZTH3513 Teleskoplader",
        "url": "https://www.zoomlion-nrw.de/teleskoplader#zth3513"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "ZTH4518R Drehteleskoplader",
        "url": "https://www.zoomlion-nrw.de/teleskoplader#zth4518r"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "ZTH4525R Drehteleskoplader",
        "url": "https://www.zoomlion-nrw.de/teleskoplader#zth4525r"
      }
    ]
  };

  const productOfferSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.zoomlion-nrw.de/teleskoplader#product",
    "name": "Zoomlion Teleskoplader",
    "description": "Zoomlion Teleskoplader kaufen in NRW. Drehbare und nicht rotierende Modelle mit bis zu 4.500 kg Hubkraft und 24,8 m Arbeitshöhe. 3 Jahre Garantie.",
    "image": "https://www.zoomlion-nrw.de/telehandlers/zth4525r.png",
    "brand": {
      "@type": "Brand",
      "name": "Zoomlion"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Zoomlion Heavy Industry Science & Technology Co., Ltd."
    },
    "category": "Teleskoplader",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "offerCount": "5",
      "seller": {
        "@type": "Organization",
        "name": "Zoomlion NRW",
        "@id": "https://www.zoomlion-nrw.de/#organization"
      }
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Teleskoplader kaufen NRW | Zoomlion Telehandler ✓ 3 Jahre Garantie</title>
        <meta 
          name="title" 
          content="Teleskoplader kaufen NRW | Zoomlion Telehandler ✓ 3 Jahre Garantie" 
        />
        <meta 
          name="description" 
          content="Teleskoplader kaufen in NRW ➤ Zoomlion Telehandler bis 24,8m Arbeitshöhe ✓ Drehbar & starr ✓ 3 Jahre Garantie ✓ 4×4 Allrad ✓ Finanzierung möglich ✓ Ersatzteile vor Ort. Jetzt Angebot anfordern!" 
        />
        <meta 
          name="keywords" 
          content="Teleskoplader kaufen NRW, Teleskoplader kaufen Nordrhein-Westfalen, Telehandler kaufen, Drehteleskoplader kaufen, Teleskoplader kaufen Köln, Teleskoplader kaufen Düsseldorf, Teleskoplader kaufen Bonn, Zoomlion Teleskoplader, Teleskoplader neu kaufen, Teleskoplader finanzieren NRW, Teleskoplader Allrad, Radlader kaufen NRW, Baumaschinen kaufen NRW" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/teleskoplader" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Teleskoplader kaufen NRW | Zoomlion Telehandler" />
        <meta property="og:description" content="Teleskoplader kaufen in NRW beim exklusiven Zoomlion Fachhändler. Drehbar und starr, bis 24,8m Arbeitshöhe, mit 3 Jahren Garantie." />
        <meta property="og:url" content="https://www.zoomlion-nrw.de/teleskoplader" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productOfferSchema)}
        </script>
      </Helmet>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Start", href: "/" },
              { label: "Teleskoplader" }
            ]} 
          />
          <SectionHeading
            badge="Teleskoplader kaufen"
            title="Teleskoplader kaufen in NRW"
            subtitle="Zoomlion Telehandler – drehbar & starr – filtern, vergleichen, anfragen"
          />
          <TelehandlerConfigurator />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">Teleskoplader kaufen in Nordrhein-Westfalen</h2>
            <p>
              Als exklusiver <strong>Zoomlion Fachhändler in NRW</strong> bieten wir Ihnen leistungsstarke 
              Teleskoplader für Bau, Landwirtschaft und Industrie. Von kompakten <strong>nicht rotierenden Modellen</strong> bis 
              zu <strong>360°-Drehteleskopladern</strong> mit bis zu 24,8 m Arbeitshöhe.
            </p>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Vorteile beim Teleskoplader-Kauf bei Zoomlion NRW</h3>
            <ul>
              <li><strong>3 Jahre Garantie</strong> oder 3.000 Betriebsstunden auf alle Neumaschinen</li>
              <li><strong>Ersatzteile vor Ort</strong> an allen 3 Standorten in NRW</li>
              <li><strong>Flexible Finanzierung</strong> mit attraktiven Konditionen</li>
              <li><strong>Inzahlungnahme</strong> Ihrer Gebrauchtmaschine möglich</li>
              <li><strong>4×4-Allradantrieb</strong> für maximale Geländegängigkeit</li>
            </ul>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Teleskoplader für jeden Einsatzbereich</h3>
            <p>
              Unsere <strong>Zoomlion Teleskoplader</strong> sind vielseitig einsetzbar – dank serienmäßiger schwebender Gabel 
              und optionaler Anbaugeräte wie <strong>Hebebühne</strong>, <strong>Schaufel</strong>, <strong>Ausleger</strong> und 
              weiteres Zubehör. Alle Modelle verfügen über ein <strong>4×4-Antriebssystem</strong> mit Antischlupf-Differentialgetriebe 
              für hohe Zugkraft und Geländegängigkeit.
            </p>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Drehteleskoplader vs. starre Teleskoplader</h3>
            <p>
              <strong>Nicht rotierende Teleskoplader</strong> (ZTH2506, ZTH3507, ZTH3513) eignen sich ideal für den Materialtransport 
              auf Baustellen und in der Landwirtschaft. <strong>Drehteleskoplader</strong> (ZTH4518R, ZTH4525R) bieten mit ihrer 
              <strong>360°-Endlosdrehung</strong> maximale Flexibilität und einen riesigen Arbeitsbereich – perfekt für komplexe 
              Bauprojekte und beengte Platzverhältnisse.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Teleskoplader;
