import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PlatformConfigurator } from "@/components/configurator/PlatformConfigurator";

const Arbeitsbuehnen = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Arbeitsbühnen"
            title="In 60 Sekunden zur passenden Arbeitsbühne"
            subtitle="Filter auswählen, Ergebnisse erhalten, direkt anfragen"
          />
          <PlatformConfigurator />
        </div>
      </section>
    </Layout>
  );
};

export default Arbeitsbuehnen;
