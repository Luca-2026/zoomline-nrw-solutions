import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrustBadges } from "@/components/shared/TrustBadges";

const UeberUns = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Über Zoomlion NRW",
    "description": "Exklusiver Fachhändler für Zoomlion Minibagger und Arbeitsbühnen in Nordrhein-Westfalen",
    "url": "https://www.zoomlion-nrw.de/ueber-uns",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zoomlion NRW",
      "legalName": "SLT Technology Group GmbH & Co. KG",
      "foundingDate": "2020",
      "areaServed": "Nordrhein-Westfalen"
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Über uns – Zoomlion Fachhändler NRW | SLT Technology Group</title>
        <meta 
          name="title" 
          content="Über uns – Zoomlion Fachhändler NRW | SLT Technology Group" 
        />
        <meta 
          name="description" 
          content="Zoomlion NRW ist Ihr exklusiver Fachhändler für Minibagger & Arbeitsbühnen in Nordrhein-Westfalen. ➤ 3 Standorte ✓ Erfahrenes Team ✓ Service vor Ort. Teil der SLT Technology Group." 
        />
        <meta 
          name="keywords" 
          content="Zoomlion NRW, SLT Technology Group, Zoomlion Händler Deutschland, Baumaschinen Fachhändler NRW, Zoomlion Partner, Baumaschinen Experte" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/ueber-uns" />
        
        <meta property="og:title" content="Über Zoomlion NRW – Ihr Baumaschinen-Partner" />
        <meta property="og:description" content="Exklusiver Zoomlion Fachhändler in NRW mit 3 Standorten und erfahrenem Team." />
        <meta property="og:url" content="https://www.zoomlion-nrw.de/ueber-uns" />
        
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading
            badge="Über uns"
            title="Zoomlion NRW – Ihr Partner für Baumaschinen"
            subtitle="Exklusiver Fachhändler für Zoomlion Minibagger und Arbeitsbühnen in Nordrhein-Westfalen"
          />
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              <strong>Zoomlion NRW</strong> ist Ihr exklusiver Ansprechpartner für <strong>Zoomlion Minibagger</strong> und 
              <strong> Arbeitsbühnen kaufen</strong> in Nordrhein-Westfalen. Mit drei Standorten in Bonn, Krefeld und 
              Mülheim an der Ruhr sind wir immer in Ihrer Nähe.
            </p>
            <p>
              Als Teil der <strong>SLT Technology Group GmbH & Co. KG</strong> verbinden wir langjährige Erfahrung 
              im Baumaschinenhandel mit modernem Service und kompetenter Beratung. Unser Ziel: Ihnen beim 
              <strong> Baumaschinen kaufen in NRW</strong> die beste Lösung zu bieten.
            </p>
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">Warum Zoomlion NRW?</h2>
            <ul>
              <li><strong>Top 5 Hersteller weltweit:</strong> Zoomlion gehört zu den größten Baumaschinenherstellern der Welt</li>
              <li><strong>3 Jahre Garantie:</strong> Umfassender Schutz für Ihre Investition</li>
              <li><strong>Ersatzteile vor Ort:</strong> Schnelle Verfügbarkeit an allen Standorten</li>
              <li><strong>Flexible Finanzierung:</strong> Attraktive Konditionen für Ihr Budget</li>
              <li><strong>Kompetente Beratung:</strong> Erfahrene Experten für Minibagger und Arbeitsbühnen</li>
            </ul>
          </div>
          <TrustBadges />
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
