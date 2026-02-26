import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  Package,
  Wrench,
  Shield,
  Clock,
  TrendingUp,
  Target,
  Cog,
  Users,
  Phone,
  FileText,
  Truck,
  Eye,
} from "lucide-react";

const packages = [
  {
    name: "ZL|Care",
    subtitle: "Wartungsteile-Paket",
    description:
      "Sie erhalten regelmäßig alle benötigten Original-Wartungsteile und -kits – automatisch, rechtzeitig und perfekt abgestimmt auf Ihre Maschine. So führen Sie Inspektionen selbst durch oder lassen uns übernehmen. Inklusive kostenloser Beratung für optimale Maschinenplanung.",
    icon: Package,
    features: [
      { label: "Wartungsteile", value: "Original Zoomlion" },
      { label: "Lieferung", value: "just in time" },
      { label: "Öldiagnose-Set", value: "inklusive" },
      { label: "Ölversorgung", value: "optional" },
    ],
    highlight: false,
  },
  {
    name: "ZL|Pro",
    subtitle: "Inspektionsvertrag",
    description:
      "Planbare Inspektionskosten in einem festen Vertrag. Arbeitszeit, Anfahrt, Original-Wartungsteile und UVV-Prüfung sind bereits enthalten. So bleiben Ihre Maschinen zuverlässig im Einsatz – ohne Überraschungen bei den Kosten.",
    icon: Eye,
    features: [
      { label: "Wartungsteile", value: "Original Zoomlion" },
      { label: "Wartung", value: "inklusive" },
      { label: "UVV-Prüfung", value: "inklusive" },
      { label: "Öldiagnose", value: "inklusive" },
      { label: "Ölversorgung", value: "optional" },
      { label: "Anfahrt", value: "optional" },
    ],
    highlight: true,
  },
  {
    name: "ZL|Complete",
    subtitle: "Full-Service-Vertrag",
    description:
      "Ihr Rundum-Sorglos-Paket für Wartung und Reparatur. Neben allen Inspektionen sind auch Reparaturen inklusive – mit Ersatzteilen, Arbeitslohn und Anfahrt. Im Reparaturfall erhalten Sie kostenlos ein baugleiches oder höherwertiges Ersatzgerät, damit Sie weiterarbeiten können. So vermeiden Sie ungeplante Kosten und Stillstände.",
    icon: Wrench,
    features: [
      { label: "Wartungsteile", value: "Original Zoomlion" },
      { label: "Wartung", value: "inklusive" },
      { label: "Reparaturen", value: "inklusive" },
      { label: "Ersatzgerät", value: "inklusive" },
      { label: "UVV-Prüfung", value: "inklusive" },
      { label: "Öldiagnose", value: "inklusive" },
      { label: "Ölversorgung", value: "optional" },
      { label: "Anfahrt", value: "optional" },
    ],
    highlight: false,
  },
];

const reasons = [
  {
    icon: TrendingUp,
    title: "Kalkulieren Sie mit fixen Kosten",
    desc: "Mit einem Servicevertrag entsteht mehr Kostentransparenz – so können Sie mit sicheren Maschinenkosten rechnen.",
  },
  {
    icon: Users,
    title: "Für Selberschrauber, Werkstattleiter oder Flottenmanager",
    desc: "Maßgeschneiderte Serviceangebote für Ihre Bau- und Hebemaschinen – egal ob Arbeitsbühne, Bagger oder Teleskoplader.",
  },
  {
    icon: Shield,
    title: "Erhöhen Sie die Ausfallsicherheit",
    desc: "Das gilt für den einzelnen Minibagger ebenso wie für die gesamte Arbeitsbühnen-Flotte.",
  },
  {
    icon: Cog,
    title: "Genießen Sie reibungslose Reparaturabwicklung",
    desc: "Unser Service-Team kennt und unterstützt Sie – wie auch Ihre Maschine zu 100 %.",
  },
  {
    icon: Target,
    title: "Profitieren Sie beim Gebrauchtmaschinenverkauf",
    desc: "Mit einem Servicevertrag im Rücken erzielt Ihre Gebrauchtmaschine deutlich bessere Preise.",
  },
  {
    icon: Clock,
    title: "Konzentrieren Sie sich auf Ihr Kerngeschäft",
    desc: "Denn Geld verdienen Sie nur auf der Baustelle, nicht in der Werkstatt.",
  },
];

const Servicevertraege = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Zoomlion NRW Serviceverträge",
    description:
      "Serviceverträge für Zoomlion Arbeitsbühnen, Bagger und Teleskoplader in NRW – maximale Maschinenverfügbarkeit bei voller Kostenkontrolle.",
    provider: {
      "@type": "Organization",
      name: "Zoomlion NRW",
      url: "https://www.zoomlion-nrw.de",
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>Serviceverträge für Baumaschinen | Zoomlion NRW</title>
        <meta
          name="description"
          content="Serviceverträge für Zoomlion Arbeitsbühnen, Bagger & Teleskoplader: Wartungsteile, Inspektionen, Full-Service. Maximale Verfügbarkeit bei planbaren Kosten. 3 Standorte in NRW."
        />
        <link
          rel="canonical"
          href="https://www.zoomlion-nrw.de/servicevertraege"
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Start", href: "/" },
              { label: "Service", href: "/service" },
              { label: "Serviceverträge" },
            ]}
          />
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Servicepakete
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Serviceverträge für Ihre Baumaschinen
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Maximale Maschinenverfügbarkeit – mit voller Kostenkontrolle und
              erstklassigem Service. Wir garantieren, dass keine Inspektion im
              Tagesgeschäft übersehen wird und Ihre Maschinen stets die
              notwendige Wartung erhalten.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/kontakt">
                  Beratung anfordern
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02151-4179904">
                  <Phone className="mr-2 h-4 w-4" />
                  02151 - 417 99 04
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pakete Übersicht */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Servicepakete"
            title="Der richtige Servicevertrag"
            subtitle="Niedrigere Kosten, höhere Produktivität, mehr Sicherheit"
          />
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-8 rounded-2xl border bg-card transition-all hover:shadow-lg flex flex-col ${
                  pkg.highlight
                    ? "border-primary shadow-md ring-1 ring-primary/20"
                    : "border-border"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    Beliebteste Wahl
                  </div>
                )}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <pkg.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {pkg.subtitle}
                </p>
                <div className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-muted-foreground">{f.label}</span>
                      <span
                        className={`font-medium ${
                          f.value === "inklusive"
                            ? "text-primary"
                            : f.value === "optional"
                              ? "text-muted-foreground"
                              : "text-foreground"
                        }`}
                      >
                        {f.value === "inklusive" && (
                          <CheckCircle className="inline h-4 w-4 mr-1" />
                        )}
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  variant={pkg.highlight ? "default" : "outline"}
                  className="w-full"
                >
                  <Link to="/kontakt">Servicevertrag sichern</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Versprechen */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-4">
                Service-Versprechen
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ihre Zeit. Unsere Priorität.
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Mit unserem Service-Versprechen sichern Sie langfristige
                Einsatzfähigkeit, maximale Betriebskontinuität und nachhaltigen
                Investitionsschutz.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/10">
                <Truck className="h-10 w-10 mb-4 opacity-90" />
                <h3 className="font-heading text-xl font-bold mb-3">
                  Ersatzteilverfügbarkeit
                </h3>
                <p className="opacity-90 mb-4">
                  Wartungs-, Verschleiß- und übliche Reparaturteile: verfügbar
                  am nächsten Werktag ab unseren NRW-Standorten. Dank schneller
                  Ersatzteilverfügbarkeit minimieren wir Ausfallzeiten
                  konsequent.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/10">
                <Wrench className="h-10 w-10 mb-4 opacity-90" />
                <h3 className="font-heading text-xl font-bold mb-3">
                  Schnelle Reparaturen
                </h3>
                <p className="opacity-90 mb-4">
                  Übliche Reparaturen innerhalb von zwei Werktagen oder nach
                  Wunschtermin. Umfangreiche Reparaturen nach Vereinbarung. So
                  bleiben Ihre Maschinen einsatzbereit und Sie können sich voll
                  auf Ihr Kerngeschäft konzentrieren.
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" variant="secondary">
                <Link to="/kontakt">
                  Beratung anfordern
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pakete Detail */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Die Leistungen im Überblick"
            subtitle="Drei Servicepakete – abgestimmt auf Ihren Bedarf"
          />
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name + "-detail"}
                className="p-8 rounded-2xl border border-border bg-card"
              >
                <h3 className="font-heading text-xl font-bold mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-4">
                  {pkg.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pkg.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Beratung anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6 Gründe */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Vorteile"
            title="Sechs Gründe für einen Servicevertrag"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-primary">
                    {i + 1}.
                  </span>
                </div>
                <h3 className="font-heading font-bold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Servicepaket sichern
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Individuelle Beratung */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Individuelle Beratung
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Ihr Servicevertrag. NRW-weit.
                </h2>
                <p className="text-muted-foreground mb-6">
                  Ob für eine Maschine oder eine ganze Flotte – wir haben den
                  passenden Servicevertrag. Unser Expertenteam berät Sie
                  persönlich und unverbindlich – an 3 Standorten in NRW.
                  Gemeinsam finden wir die optimale Lösung für Ihren Bedarf.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/standorte">
                      Standorte anzeigen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/kontakt">Anfrage stellen</Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <FileText className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-heading font-bold mb-2">
                    Serviceberatung – Anfrage stellen
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Wir analysieren Ihre Maschinennutzung und empfehlen das
                    optimale Servicepaket. Vereinbaren Sie jetzt Ihren
                    persönlichen Beratungstermin.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Shield className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-heading font-bold mb-2">
                    Maßgeschneiderte Verträge
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Exakt abgestimmt auf Ihre Maschinennutzung und Ihr Budget:
                    Erfahren Sie alles über Leistungen, Unterschiede und
                    Vorteile unserer drei Servicepakete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wartung & Service Abschluss */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Wartung und Service für Ihre Baumaschinen
            </h2>
            <p className="opacity-90 mb-4">
              Mit professioneller Wartung und vorausschauender Diagnostik sorgen
              wir dafür, dass Ihre Baumaschinen zuverlässig und effizient im
              Einsatz bleiben. So vermeiden Sie ungeplante Stillstände und
              verlängern die Lebensdauer Ihrer Maschinen.
            </p>
            <p className="opacity-90 mb-8">
              Ob Sie ein passendes Filterkit für den Selbsteinbau benötigen oder
              einen umfassenden Full-Service-Vertrag wünschen – wir bieten die
              passende Lösung für Ihre Anforderungen.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/kontakt">
                Beratung anfordern
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicevertraege;
