import { Helmet } from "react-helmet-async";
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
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt - Zoomlion NRW",
    "description": "Kontaktieren Sie Zoomlion NRW für Minibagger und Arbeitsbühnen. Beratung, Angebote und Service.",
    "url": "https://www.zoomlion-nrw.de/kontakt",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zoomlion NRW",
      "telephone": ["+49-2151-4179904", "+49-228-50466061"],
      "email": "verkauf@zoomlion-nrw.de"
    }
  };

  return (
    <Layout showCTABar={false}>
      <Helmet>
        <title>Kontakt – Minibagger & Arbeitsbühnen Anfrage | Zoomlion NRW</title>
        <meta 
          name="title" 
          content="Kontakt – Minibagger & Arbeitsbühnen Anfrage | Zoomlion NRW" 
        />
        <meta 
          name="description" 
          content="Jetzt Angebot für Minibagger oder Arbeitsbühne anfragen ➤ Schnelle Beratung ✓ Kostenlose Angebote ✓ Finanzierung möglich ✓ 3 Standorte in NRW. Rufen Sie an oder schreiben Sie uns!" 
        />
        <meta 
          name="keywords" 
          content="Zoomlion Kontakt, Minibagger Angebot anfordern, Arbeitsbühne Anfrage, Baumaschinen Beratung NRW, Zoomlion NRW Telefon, Baumaschinen kaufen Beratung" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/kontakt" />
        
        <meta property="og:title" content="Kontakt – Zoomlion NRW" />
        <meta property="og:description" content="Jetzt unverbindliches Angebot für Minibagger oder Arbeitsbühnen anfragen." />
        <meta property="og:url" content="https://www.zoomlion-nrw.de/kontakt" />
        
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Kontakt"
            title="Jetzt Angebot anfragen"
            subtitle="Wir melden uns kurzfristig mit Empfehlung, Verfügbarkeit und Preis"
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
                <div><Label htmlFor="plz">PLZ / Einsatzort</Label><Input id="plz" placeholder="z.B. 50667 Köln" /></div>
                <div><Label htmlFor="msg">Ihre Nachricht</Label><Textarea id="msg" rows={4} placeholder="Welche Maschine suchen Sie? (Minibagger, Arbeitsbühne, Gewichtsklasse, etc.)" /></div>
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
                <p className="text-sm text-muted-foreground mb-4">
                  Sie möchten lieber direkt mit uns sprechen? Rufen Sie uns an – wir beraten Sie gerne zu Minibaggern und Arbeitsbühnen!
                </p>
                <div className="space-y-3">
                  <a href="tel:022850466061" className="flex items-center gap-3 text-foreground hover:text-primary">
                    <Phone className="h-5 w-5 text-primary" /> Bonn: 0228 50466061
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
