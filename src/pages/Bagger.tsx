import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Bagger = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Bagger"
            title="Finden Sie den passenden Bagger"
            subtitle="Einsatzbereich wählen, filtern, anfragen"
          />
          <div className="text-center py-12 border-2 border-dashed border-border rounded-xl">
            <p className="text-muted-foreground mb-4">Konfigurator wird geladen...</p>
            <Button asChild>
              <Link to="/kontakt">Direkt anfragen</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bagger;
