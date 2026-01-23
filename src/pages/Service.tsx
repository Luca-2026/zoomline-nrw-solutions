import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { 
  Wrench, 
  Package, 
  Users, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Truck,
  FileCheck,
  Settings,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { locations } from "@/data/products";

const mainServices = [
  { 
    icon: Package, 
    title: "Ersatzteile vor Ort", 
    desc: "Sofort verfügbar an unseren 3 NRW-Standorten – Original-Ersatzteile mit Qualitätsgarantie",
    features: ["Lagerbestand an allen Standorten", "24h Expressbestellung möglich", "Original Zoomlion-Teile"]
  },
  { 
    icon: Wrench, 
    title: "Werkstatt-Service", 
    desc: "Professionelle Wartung, Reparatur & Instandsetzung durch geschulte Techniker",
    features: ["Alle Maschinentypen", "UVV-Prüfungen", "Garantiearbeiten"]
  },
  { 
    icon: Users, 
    title: "Einweisung & Schulung", 
    desc: "Professionelle Inbetriebnahme und Bedienerschulungen für sicheren Einsatz",
    features: ["Vor-Ort-Einweisung", "Dokumentation", "Zertifikate"]
  },
];

const additionalServices = [
  { icon: FileCheck, title: "UVV-Prüfung", desc: "Gesetzeskonforme Sicherheitsprüfungen" },
  { icon: Settings, title: "Wartungsverträge", desc: "Planbare Kosten, maximale Verfügbarkeit" },
  { icon: Truck, title: "Hol- & Bringservice", desc: "Wir holen Ihre Maschine ab und liefern sie zurück" },
  { icon: Shield, title: "Garantieverlängerung", desc: "Zusätzliche Absicherung über die Standardgarantie hinaus" },
];

const stats = [
  { value: "3", label: "Standorte in NRW" },
  { value: "24h", label: "Express-Teileversand" },
  { value: "100%", label: "Original-Teile" },
  { value: "5+", label: "Servicetechniker" },
];

const Service = () => {
  return (
    <Layout>
      <Helmet>
        <title>Service & Ersatzteile | Zoomlion NRW</title>
        <meta name="description" content="Professioneller Service für Arbeitsbühnen und Bagger in NRW: Ersatzteile, Wartung, Reparatur, UVV-Prüfung und Wartungsverträge. 3 Standorte in NRW." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Service & Ersatzteile
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Rundum-Service für Ihre Maschinen
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Von der Ersatzteilversorgung über Wartung und Reparatur bis zur UVV-Prüfung – 
              wir sorgen dafür, dass Ihre Zoomlion-Maschinen immer einsatzbereit sind.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/kontakt">
                  <Phone className="mr-2 h-4 w-4" />
                  Serviceanfrage stellen
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02151-4179904">
                  02151 - 417 99 04
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Unser Leistungsspektrum"
            subtitle="Professioneller Service aus einer Hand – für maximale Maschinenverfügbarkeit"
          />
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainServices.map((s) => (
              <div 
                key={s.title} 
                className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wartungsverträge Highlight */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Settings className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Wartungsverträge für planbare Kosten
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Mit einem Wartungsvertrag sichern Sie sich regelmäßige Inspektionen, 
              bevorzugte Terminvergabe und feste Preise. So bleiben Ihre Maschinen 
              immer in Top-Zustand – und Sie haben volle Kostenkontrolle.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="p-4 rounded-xl bg-white/10">
                <div className="font-bold mb-1">Planbare Kosten</div>
                <div className="text-sm opacity-80">Feste monatliche oder jährliche Raten</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10">
                <div className="font-bold mb-1">Bevorzugter Service</div>
                <div className="text-sm opacity-80">Schnellere Terminvergabe bei Reparaturen</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10">
                <div className="font-bold mb-1">Höhere Lebensdauer</div>
                <div className="text-sm opacity-80">Regelmäßige Wartung verlängert die Nutzung</div>
              </div>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/kontakt">
                Wartungsvertrag anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Weitere Services"
            subtitle="Alles, was Sie für den Betrieb Ihrer Maschinen brauchen"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((s) => (
              <div 
                key={s.title} 
                className="p-6 rounded-xl border border-border bg-card text-center hover:border-primary/50 transition-colors"
              >
                <s.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standorte / Hol-Bring */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Bequem & flexibel
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Bringen Sie Ihre Maschine zu uns
                </h2>
                <p className="text-muted-foreground mb-6">
                  Sie können Ihre Maschine jederzeit an einem unserer 3 NRW-Standorte 
                  zur Wartung oder Reparatur abgeben. Alternativ bieten wir auch einen 
                  komfortablen Hol- und Bringservice an.
                </p>
                <ul className="space-y-3 mb-6">
                  {locations.map((loc) => (
                    <li key={loc.id} className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>
                        <strong>{loc.name.replace("Standort ", "")}</strong> – {loc.address}, {loc.city}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/standorte">
                    Standorte anzeigen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-border">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">Servicezeiten</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mo – Fr</span>
                    <span className="font-medium">08:00 – 17:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Samstag</span>
                    <span className="font-medium">Nach Vereinbarung</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Notfall-Hotline</span>
                    <span className="font-medium">02151 - 417 99 04</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Service-Anfrage stellen
            </h2>
            <p className="text-muted-foreground mb-8">
              Ersatzteile, Reparatur, UVV-Prüfung oder Wartungsvertrag – 
              kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/kontakt">
                  Jetzt anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02151-4179904">
                  <Phone className="mr-2 h-4 w-4" />
                  Anrufen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Service;
