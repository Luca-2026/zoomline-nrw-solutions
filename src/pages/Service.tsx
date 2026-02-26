import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
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
  ArrowRight,
  Eye,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { locations } from "@/data/products";

const servicePackages = [
  {
    name: "ZL|Care",
    id: "zl-care",
    subtitle: "Wartungsteile-Paket",
    icon: Package,
    features: [
      { label: "Wartungsteile", value: "Original Zoomlion", included: true },
      { label: "Lieferung", value: "just in time", included: true },
      { label: "Öldiagnose-Set", value: "inklusive", included: true },
      { label: "Ölversorgung", value: "optional", included: false },
    ],
  },
  {
    name: "ZL|Pro",
    id: "zl-pro",
    subtitle: "Inspektionsvertrag",
    icon: Eye,
    popular: true,
    features: [
      { label: "Wartungsteile", value: "Original Zoomlion", included: true },
      { label: "Wartung", value: "inklusive", included: true },
      { label: "UVV-Prüfung", value: "inklusive", included: true },
      { label: "Öldiagnose", value: "inklusive", included: true },
      { label: "Anfahrt", value: "optional", included: false },
    ],
  },
  {
    name: "ZL|Complete",
    id: "zl-complete",
    subtitle: "Full-Service-Vertrag",
    icon: Wrench,
    features: [
      { label: "Wartungsteile", value: "Original Zoomlion", included: true },
      { label: "Wartung", value: "inklusive", included: true },
      { label: "Reparaturen", value: "inklusive", included: true },
      { label: "Ersatzgerät", value: "kostenlos", included: true },
      { label: "UVV-Prüfung", value: "inklusive", included: true },
      { label: "Öldiagnose", value: "inklusive", included: true },
      { label: "Anfahrt", value: "optional", included: false },
    ],
  },
];

const mainServices = [
  { 
    icon: Package, 
    title: "Ersatzteile für Baumaschinen", 
    desc: "Sofort verfügbar an unseren 3 NRW-Standorten – Original-Ersatzteile für Arbeitsbühnen, Bagger und Teleskoplader",
    features: ["Lagerbestand an allen Standorten", "24h Expressbestellung möglich", "Original Zoomlion-Teile"]
  },
  { 
    icon: Wrench, 
    title: "Werkstatt & Reparatur-Service", 
    desc: "Professionelle Wartung, Reparatur & Instandsetzung Ihrer Arbeitsbühnen, Minibagger und Teleskoplader durch geschulte Techniker",
    features: ["Alle Maschinentypen", "UVV-Prüfungen nach DGUV", "Garantiearbeiten"]
  },
  { 
    icon: Users, 
    title: "Einweisung & Schulung", 
    desc: "Professionelle Inbetriebnahme und Bedienerschulungen für den sicheren Einsatz Ihrer Baumaschinen",
    features: ["Vor-Ort-Einweisung", "Dokumentation", "Zertifikate"]
  },
];

const additionalServices = [
  { icon: FileCheck, title: "UVV-Prüfung", desc: "Gesetzeskonforme Sicherheitsprüfungen nach DGUV für Arbeitsbühnen & Baumaschinen" },
  { icon: Settings, title: "Wartungsverträge", desc: "Planbare Kosten, maximale Verfügbarkeit für Ihre Maschinenflotte" },
  { icon: Truck, title: "Hol- & Bringservice", desc: "Wir holen Ihre Maschine ab und liefern sie gewartet zurück" },
  { icon: Shield, title: "Garantieverlängerung", desc: "Zusätzliche Absicherung über die Standardgarantie hinaus" },
];

const stats = [
  { value: "3", label: "Standorte in NRW" },
  { value: "24h", label: "Express-Teileversand" },
  { value: "100%", label: "Original-Teile" },
  { value: "5+", label: "Servicetechniker" },
];

const serviceFaqs = [
  {
    q: "Welche Baumaschinen werden bei Ihnen gewartet?",
    a: "Wir warten und reparieren alle Zoomlion Arbeitsbühnen, Minibagger, Kompaktbagger und Teleskoplader. Als exklusiver Fachhändler kennen wir jedes Modell im Detail."
  },
  {
    q: "Wie läuft eine UVV-Prüfung für Arbeitsbühnen ab?",
    a: "Die UVV-Prüfung nach DGUV umfasst eine vollständige Sicherheitsprüfung Ihrer Arbeitsbühne – von der Hydraulik über die Elektrik bis zur Tragfähigkeit. Sie erhalten ein Prüfprotokoll und die Prüfplakette."
  },
  {
    q: "Bieten Sie Serviceverträge für Baumaschinen an?",
    a: "Ja, wir bieten drei maßgeschneiderte Servicepakete: ZL|Care (Wartungsteile), ZL|Pro (Inspektionsvertrag inkl. UVV) und ZL|Complete (Full-Service mit kostenlosem Ersatzgerät im Reparaturfall)."
  },
  {
    q: "Wie schnell sind Ersatzteile verfügbar?",
    a: "Gängige Wartungs- und Verschleißteile sind an unseren 3 NRW-Standorten (Bonn, Krefeld, Mülheim) sofort verfügbar. Spezialteile liefern wir per 24h-Expressversand."
  },
];

const Service = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.zoomlion-nrw.de/service#service",
    "name": "Baumaschinen Service & Wartung NRW",
    "description": "Professioneller Service für Arbeitsbühnen, Bagger und Teleskoplader in NRW: Wartung, Reparatur, UVV-Prüfung, Ersatzteile und Serviceverträge.",
    "provider": {
      "@type": "Organization",
      "name": "Zoomlion NRW",
      "@id": "https://www.zoomlion-nrw.de/#organization"
    },
    "areaServed": {
      "@type": "State",
      "name": "Nordrhein-Westfalen"
    },
    "serviceType": ["Wartung", "Reparatur", "UVV-Prüfung", "Ersatzteile", "Serviceverträge"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviceleistungen",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UVV-Prüfung Arbeitsbühnen" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wartung Baumaschinen" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Servicevertrag Baumaschinen" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>Baumaschinen Wartung & Service NRW | UVV-Prüfung & Reparatur</title>
        <meta name="description" content="Baumaschinen Service in NRW ➤ Wartung, Reparatur & UVV-Prüfung für Arbeitsbühnen, Bagger & Teleskoplader ✓ Ersatzteile vor Ort ✓ Serviceverträge ✓ 3 Standorte. Jetzt Serviceanfrage stellen!" />
        <meta name="keywords" content="Baumaschinen Wartung NRW, UVV-Prüfung Arbeitsbühnen, Baumaschinen Reparatur, Servicevertrag Baumaschinen, Wartung Arbeitsbühne, Baumaschinen Service Krefeld, Baumaschinen Service Bonn, Ersatzteile Arbeitsbühne, Zoomlion Service" />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/service" />
        <meta property="og:title" content="Baumaschinen Wartung & Service NRW | Zoomlion" />
        <meta property="og:description" content="Professioneller Service für Arbeitsbühnen, Bagger & Teleskoplader: Wartung, UVV-Prüfung, Reparatur und Serviceverträge an 3 Standorten in NRW." />
        <meta property="og:url" content="https://www.zoomlion-nrw.de/service" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Start", href: "/" },
              { label: "Service & Wartung" }
            ]} 
          />
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Service, Wartung & Reparatur
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Baumaschinen Wartung & Service in NRW
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Von der Ersatzteilversorgung über <strong>Wartung und Reparatur</strong> bis zur <strong>UVV-Prüfung nach DGUV</strong> – 
              wir sorgen dafür, dass Ihre Arbeitsbühnen, Bagger und Teleskoplader immer einsatzbereit sind. 
              An <strong>3 Standorten in Nordrhein-Westfalen</strong>.
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
      <section className="py-8 bg-card">
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
          <div className="flex justify-center mt-6">
            <ArrowRight className="h-5 w-5 text-primary/50 rotate-90 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Serviceverträge – prominent */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Top-Vorteil"
            title="Serviceverträge für Baumaschinen – Ihr Wettbewerbsvorteil"
            subtitle="Drei Pakete für maximale Verfügbarkeit bei planbaren Kosten. Beim Full-Service-Vertrag erhalten Sie ein kostenloses Ersatzgerät im Reparaturfall."
          />
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-8 rounded-2xl border bg-card transition-all hover:shadow-lg flex flex-col ${
                  pkg.popular
                    ? "border-primary shadow-md ring-1 ring-primary/20"
                    : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1">
                    <Star className="h-3 w-3" /> Beliebteste Wahl
                  </div>
                )}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <pkg.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{pkg.subtitle}</p>
                <div className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <div key={f.label} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{f.label}</span>
                      <span className={`font-medium ${f.included ? "text-primary" : "text-muted-foreground"}`}>
                        {f.included && <CheckCircle className="inline h-4 w-4 mr-1" />}
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  variant={pkg.popular ? "default" : "outline"}
                  className="w-full"
                >
                  <Link to={`/servicevertraege#${pkg.id}`}>Details ansehen</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link to="/servicevertraege">
                Alle Details zu unseren Serviceverträgen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Weiteres Leistungsspektrum"
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

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Weitere Services für Ihre Baumaschinen"
            subtitle="Alles, was Sie für den sicheren Betrieb Ihrer Maschinen brauchen"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((s) => (
              <div 
                key={s.title} 
                className="p-6 rounded-xl border border-border bg-background text-center hover:border-primary/50 transition-colors"
              >
                <s.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
              Häufige Fragen zu Wartung & Service
            </h2>
            <div className="space-y-4">
              {serviceFaqs.map((faq) => (
                <div key={faq.q} className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-heading font-bold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/faq">
                  Alle FAQ ansehen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Standorte / Hol-Bring */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Ihr Servicepartner vor Ort
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Baumaschinen-Service an 3 Standorten in NRW
                </h2>
                <p className="text-muted-foreground mb-6">
                  Bringen Sie Ihre Arbeitsbühne, Ihren Bagger oder Teleskoplader jederzeit an einem 
                  unserer Standorte zur Wartung oder Reparatur ab. Alternativ bieten wir auch einen 
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

      {/* SEO Content + Querlinks */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-bold mb-4">Baumaschinen Wartung und Reparatur in Nordrhein-Westfalen</h2>
            <p>
              Als exklusiver <strong>Zoomlion Fachhändler in NRW</strong> bieten wir Ihnen umfassenden Service 
              für alle <Link to="/arbeitsbuehnen" className="text-primary hover:underline font-medium">Arbeitsbühnen</Link>, 
              <Link to="/bagger" className="text-primary hover:underline font-medium"> Minibagger</Link> und 
              <Link to="/teleskoplader" className="text-primary hover:underline font-medium"> Teleskoplader</Link> aus dem Zoomlion-Programm.
            </p>
            <p>
              Ob regelmäßige <strong>Wartung</strong>, <strong>UVV-Prüfung nach DGUV</strong>, <strong>Reparatur</strong> oder 
              ein maßgeschneiderter <Link to="/servicevertraege" className="text-primary hover:underline font-medium">Servicevertrag für Baumaschinen</Link> – 
              unser geschultes Fachpersonal sorgt an unseren 
              <Link to="/standorte" className="text-primary hover:underline font-medium"> 3 Standorten in Bonn, Krefeld und Mülheim</Link> für 
              maximale Maschinenverfügbarkeit.
            </p>
            <h3 className="font-heading text-xl font-bold mt-6 mb-3">Service für alle Maschinentypen</h3>
            <ul>
              <li><strong>Wartung Arbeitsbühnen</strong> – Scherenarbeitsbühnen, Gelenkteleskopbühnen, Teleskopbühnen</li>
              <li><strong>Wartung Minibagger & Kompaktbagger</strong> – Von 1,8 bis 25 Tonnen</li>
              <li><strong>Wartung Teleskoplader</strong> – Starre und drehbare Telehandler</li>
              <li><strong>UVV-Prüfung</strong> – Für Arbeitsbühnen und alle weiteren Baumaschinen nach DGUV</li>
            </ul>
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