import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { TrustBadges } from "@/components/shared/TrustBadges";

const Kontakt = () => {
  return (
    <Layout showCTABar={false}>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Kontakt"
            title="Jetzt Anfrage senden"
            subtitle="Wir melden uns kurzfristig mit Empfehlung und Verfügbarkeit"
          />
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label htmlFor="firma">Firma *</Label><Input id="firma" required /></div>
                  <div><Label htmlFor="name">Ansprechpartner *</Label><Input id="name" required /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label htmlFor="email">E-Mail *</Label><Input id="email" type="email" required /></div>
                  <div><Label htmlFor="tel">Telefon *</Label><Input id="tel" type="tel" required /></div>
                </div>
                <div><Label htmlFor="plz">PLZ / Einsatzort</Label><Input id="plz" /></div>
                <div><Label htmlFor="msg">Ihre Nachricht</Label><Textarea id="msg" rows={4} /></div>
                <div className="flex items-start gap-2">
                  <Checkbox id="dsgvo" required />
                  <Label htmlFor="dsgvo" className="text-sm">Ich stimme der Verarbeitung meiner Daten gemäß Datenschutzerklärung zu *</Label>
                </div>
                <Button type="submit" size="lg" className="w-full">Anfrage senden</Button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-heading font-bold mb-4">Direktkontakt</h3>
                <div className="space-y-3">
                  <a href="tel:0228-50466061" className="flex items-center gap-3 text-foreground hover:text-primary">
                    <Phone className="h-5 w-5 text-primary" /> Bonn: 0228 504 660 61
                  </a>
                  <a href="tel:02151-4179904" className="flex items-center gap-3 text-foreground hover:text-primary">
                    <Phone className="h-5 w-5 text-primary" /> Krefeld: 02151 4179904
                  </a>
                </div>
              </div>
              <TrustBadges variant="compact" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
