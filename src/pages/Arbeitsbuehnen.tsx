import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Arbeitsbuehnen = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Arbeitsbühnen"
            title="In 60 Sekunden zur passenden Arbeitsbühne"
            subtitle="Filter auswählen, Ergebnisse erhalten, direkt anfragen"
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

export default Arbeitsbuehnen;
