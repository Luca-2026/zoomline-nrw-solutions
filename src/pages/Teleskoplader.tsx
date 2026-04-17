import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TelehandlerConfigurator } from "@/components/configurator/TelehandlerConfigurator";
import { SocialMeta } from "@/components/shared/SocialMeta";

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
        "item": {
          "@type": "Product",
          "name": "Zoomlion ZTH2506 Teleskoplader",
          "url": "https://www.zoomlion-nrw.de/teleskoplader#zth2506",
          "brand": { "@type": "Brand", "name": "Zoomlion" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Zoomlion ZTH3507 Teleskoplader",
          "url": "https://www.zoomlion-nrw.de/teleskoplader#zth3507",
          "brand": { "@type": "Brand", "name": "Zoomlion" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Zoomlion ZTH3513 Teleskoplader",
          "url": "https://www.zoomlion-nrw.de/teleskoplader#zth3513",
          "brand": { "@type": "Brand", "name": "Zoomlion" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Zoomlion ZTH4518R Drehteleskoplader",
          "url": "https://www.zoomlion-nrw.de/teleskoplader#zth4518r",
          "brand": { "@type": "Brand", "name": "Zoomlion" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "Zoomlion ZTH4525R Drehteleskoplader",
          "url": "https://www.zoomlion-nrw.de/teleskoplader#zth4525r",
          "brand": { "@type": "Brand", "name": "Zoomlion" }
        }
      }
    ]
  };

  // Note: Product/AggregateOffer requires lowPrice (and highPrice) for Google Rich Results.
  // Since prices are "auf Anfrage" / per quote, we omit the offers entirely to avoid
  // a "Missing field 'lowPrice'" error. The Product remains valid without offers.
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
    "category": "Teleskoplader"
  };

  return (
    <Layout>
      <Helmet>
        <title>Teleskoplader kaufen NRW – Telehandler bis 25 m | Drehbar & starr</title>
        <meta 
          name="title" 
          content="Teleskoplader kaufen NRW – Telehandler bis 25 m | Drehbar & starr" 
        />
        <meta 
          name="description" 
          content="Teleskoplader kaufen in NRW ➤ Starre & Dreh-Telehandler bis 24,8 m Arbeitshöhe ✓ 4×4 Allrad ✓ 3 Jahre Garantie ✓ Finanzierung ✓ Anbaugeräte ✓ Made in EU. Jetzt Angebot anfordern!" 
        />
        <meta 
          name="keywords" 
          content="Teleskoplader kaufen, Teleskoplader kaufen NRW, Telehandler kaufen, Telehandler kaufen NRW, Drehteleskoplader kaufen, Teleskoplader neu, Teleskoplader Allrad, Teleskoplader Landwirtschaft, Teleskoplader Bau, Teleskoplader Köln, Teleskoplader Düsseldorf, Teleskoplader Bonn, Teleskoplader finanzieren, Radlader Alternative" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/teleskoplader" />
        
        {/* Open Graph & Twitter Card via SocialMeta below */}
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productOfferSchema)}
        </script>
      </Helmet>
      <SocialMeta
        title="Teleskoplader kaufen NRW – Telehandler bis 25 m | Drehbar & starr"
        description="Teleskoplader kaufen in NRW. Starre & Dreh-Telehandler bis 24,8 m, 4×4 Allrad, 3 Jahre Garantie."
        url="https://www.zoomlion-nrw.de/teleskoplader"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Start", href: "/" },
              { label: "Teleskoplader" }
            ]} 
          />
          <SectionHeading
            as="h1"
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
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Drehteleskoplader vs. starre Teleskoplader</h3>
            <p>
              <strong>Nicht rotierende Teleskoplader</strong> (ZTH2506, ZTH3507, ZTH3513) eignen sich ideal für den Materialtransport 
              auf Baustellen und in der Landwirtschaft. <strong>Drehteleskoplader</strong> (ZTH4518R, ZTH4525R) bieten mit ihrer 
              <strong> 360°-Endlosdrehung</strong> maximale Flexibilität – perfekt für komplexe 
              Bauprojekte und beengte Platzverhältnisse.
            </p>
            <p>
              Nutzen Sie unsere <Link to="/finanzierung" className="text-primary hover:underline font-medium">Finanzierungsoptionen</Link> und 
              sichern Sie sich einen <Link to="/servicevertraege" className="text-primary hover:underline font-medium">Wartungsvertrag für Ihren Teleskoplader</Link> – 
              für maximale Verfügbarkeit bei planbaren Kosten.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6 text-center">Häufige Fragen zum Teleskoplader-Kauf</h2>
          <div className="space-y-4">
            {[
              { q: "Was ist der Unterschied zwischen Drehteleskoplader und starrem Teleskoplader?", a: "Starre Teleskoplader (z.B. ZTH2506) haben einen fixen Oberwagen, Drehteleskoplader (z.B. ZTH4525R) können sich 360° endlos drehen. Das ermöglicht einen riesigen Arbeitsbereich ohne Umsetzen der Maschine." },
              { q: "Welche Anbaugeräte gibt es für Zoomlion Teleskoplader?", a: "Serienmäßig wird eine schwebende Gabel mitgeliefert. Optional sind Hebebühne, Schaufel, Ausleger und weiteres Zubehör erhältlich. So wird Ihr Teleskoplader zum vielseitigen Multitalent." },
              { q: "Bieten Sie Wartungsverträge für Teleskoplader an?", a: "Ja, unsere drei Servicepakete (ZL|Care, ZL|Pro, ZL|Complete) gelten auch für Teleskoplader – inklusive UVV-Prüfung und optionalem kostenlosen Ersatzgerät." },
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

export default Teleskoplader;
