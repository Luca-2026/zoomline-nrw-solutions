import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Wrench, Package, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  { icon: Package, title: "Ersatzteile vor Ort", desc: "Sofort verfügbar an 3 NRW-Standorten" },
  { icon: Wrench, title: "Werkstatt-Service", desc: "Wartung, Reparatur & Instandsetzung" },
  { icon: Users, title: "Einweisung", desc: "Professionelle Inbetriebnahme durch Experten" },
];

const Service = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Service & Ersatzteile"
            title="Rundum-Service für Ihre Maschinen"
            subtitle="Ersatzteile, Wartung, Reparatur und Einweisung aus einer Hand"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-xl border border-border bg-card text-center">
                <s.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/kontakt">Serviceanfrage senden</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Service;
