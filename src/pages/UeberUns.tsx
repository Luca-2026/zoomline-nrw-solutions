import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TrustBadges } from "@/components/shared/TrustBadges";

const UeberUns = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading
            badge="Über uns"
            title="Zoomlion NRW – Ihr Partner für Baumaschinen"
            subtitle="Exklusiver Fachhändler für Zoomlion Arbeitsbühnen und Bagger in Nordrhein-Westfalen"
          />
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              <strong>Zoomlion NRW</strong> ist Ihr exklusiver Ansprechpartner für Zoomlion Arbeitsbühnen und Bagger 
              in Nordrhein-Westfalen. Mit drei Standorten in Bonn, Krefeld und Mülheim an der Ruhr sind wir 
              immer in Ihrer Nähe.
            </p>
            <p>
              Als Teil der <strong>SLT Technology Group GmbH & Co. KG</strong> verbinden wir langjährige Erfahrung 
              im Baumaschinenhandel mit modernem Service und kompetenter Beratung.
            </p>
          </div>
          <TrustBadges />
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
