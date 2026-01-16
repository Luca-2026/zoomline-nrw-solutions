import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ExcavatorConfigurator } from "@/components/configurator/ExcavatorConfigurator";

const Bagger = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Bagger"
            title="Finden Sie den passenden Bagger"
            subtitle="Einsatzbereich wählen, filtern, anfragen"
          />
          <ExcavatorConfigurator />
        </div>
      </section>
    </Layout>
  );
};

export default Bagger;
