import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Loader2 } from "lucide-react";
import { TrustBadges } from "@/components/shared/TrustBadges";
import benediktImage from "@/assets/benedikt-noechel.jpg";
import { SocialMeta } from "@/components/shared/SocialMeta";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    firma: "",
    name: "",
    email: "",
    tel: "",
    plz: "",
    msg: "",
    dsgvo: false,
    agb: false,
    _hp_field: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.dsgvo || !form.agb) {
      toast({ title: "Bitte AGB und Datenschutz akzeptieren", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-inquiry", {
        body: {
          type: "kontakt",
          firma: form.firma,
          ansprechpartner: form.name,
          email: form.email,
          telefon: form.tel,
          plz: form.plz,
          nachricht: form.msg,
          _hp_field: form._hp_field,
        },
      });
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);
      toast({
        title: "Anfrage gesendet ✓",
        description: "Wir melden uns kurzfristig bei Ihnen.",
      });
      setForm({ firma: "", name: "", email: "", tel: "", plz: "", msg: "", dsgvo: false, agb: false, _hp_field: "" });
    } catch (err: any) {
      console.error("Inquiry error:", err);
      toast({
        title: "Fehler beim Senden",
        description: err?.message || "Bitte versuchen Sie es erneut oder rufen Sie uns an.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        
        {/* Open Graph & Twitter Card via SocialMeta below */}
        
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>
      <SocialMeta
        title="Kontakt – Zoomlion NRW"
        description="Jetzt unverbindliches Angebot für Minibagger oder Arbeitsbühnen anfragen."
        url="https://www.zoomlion-nrw.de/kontakt"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Start", href: "/" },
              { label: "Kontakt" }
            ]} 
          />
          <SectionHeading
            as="h1"
            badge="Kontakt"
            title="Minibagger & Arbeitsbühne anfragen – Kontakt Zoomlion NRW"
            subtitle="Wir melden uns kurzfristig mit Empfehlung, Verfügbarkeit und Preis"
          />
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="_hp_field"
                  value={form._hp_field}
                  onChange={(e) => setForm({ ...form, _hp_field: e.target.value })}
                  style={{ position: "absolute", left: "-9999px" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label htmlFor="firma">Firma *</Label><Input id="firma" required value={form.firma} onChange={(e) => setForm({ ...form, firma: e.target.value })} /></div>
                  <div><Label htmlFor="name">Ansprechpartner *</Label><Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label htmlFor="email">E-Mail *</Label><Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                  <div><Label htmlFor="tel">Telefon *</Label><Input id="tel" type="tel" required value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} /></div>
                </div>
                <div><Label htmlFor="plz">PLZ / Einsatzort</Label><Input id="plz" placeholder="z.B. 50667 Köln" value={form.plz} onChange={(e) => setForm({ ...form, plz: e.target.value })} /></div>
                <div><Label htmlFor="msg">Ihre Nachricht</Label><Textarea id="msg" rows={4} placeholder="Welche Maschine suchen Sie? (Minibagger, Arbeitsbühne, Gewichtsklasse, etc.)" value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} /></div>
                <div className="flex items-start gap-2">
                  <Checkbox id="dsgvo" required checked={form.dsgvo} onCheckedChange={(c) => setForm({ ...form, dsgvo: c === true })} />
                  <Label htmlFor="dsgvo" className="text-sm">Ich stimme der Verarbeitung meiner Daten gemäß Datenschutzerklärung zu *</Label>
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Wird gesendet…</>) : "Anfrage senden"}
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-heading font-bold mb-4">Ihr persönlicher Ansprechpartner</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={benediktImage}
                    alt="Benedikt Nöchel – Vertrieb & Beratung Zoomlion NRW"
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full object-cover ring-2 ring-primary/20 shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-heading font-bold text-foreground">Benedikt Nöchel</p>
                    <p className="text-sm text-muted-foreground">Vertrieb & Beratung</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Sprechen Sie mich direkt an – ich berate Sie gerne persönlich zu Minibaggern, Arbeitsbühnen und Teleskopladern.
                </p>
                <div className="space-y-3">
                  <a href="tel:02151-4179904" className="flex items-center gap-3 text-foreground hover:text-primary">
                    <Phone className="h-5 w-5 text-primary" /> 02151 4179904
                  </a>
                  <a href="mailto:verkauf@zoomlion-nrw.de" className="flex items-center gap-3 text-foreground hover:text-primary text-sm">
                    <Mail className="h-5 w-5 text-primary" /> verkauf@zoomlion-nrw.de
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-heading font-bold mb-4">Direktkontakt Standorte</h3>
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
