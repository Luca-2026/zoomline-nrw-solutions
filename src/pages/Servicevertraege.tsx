import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowDown,
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
  Star,
} from "lucide-react";

const packages = [
  {
    id: "zl-care",
    name: "ZL|Care",
    subtitle: "Wartungsteile-Paket",
    tagline: "Für alle, die selbst schrauben – aber keine Kompromisse bei den Teilen machen.",
    description:
      "Mit ZL|Care erhalten Sie regelmäßig alle benötigten Original-Wartungsteile und -kits – automatisch, rechtzeitig und perfekt abgestimmt auf Ihre Zoomlion-Maschine. Führen Sie Inspektionen in Eigenregie durch oder lassen Sie unser Team übernehmen. Inklusive kostenloser Beratung für optimale Maschinenplanung und Auslastung.",
    icon: Package,
    color: "from-blue-500/10 to-blue-600/5",
    idealFor: ["Werkstattleiter mit eigenem Mechaniker-Team", "Unternehmen mit eigener Serviceabteilung", "Erfahrene Maschinenbediener, die selbst warten"],
    features: [
      { label: "Original Zoomlion-Wartungsteile", included: true },
      { label: "Automatische Just-in-time-Lieferung", included: true },
      { label: "Öldiagnose-Set", included: true },
      { label: "Kostenlose Serviceberatung", included: true },
      { label: "Ölversorgung", included: false, note: "optional zubuchbar" },
      { label: "Durchführung der Wartung", included: false, note: "eigenständig" },
      { label: "UVV-Prüfung", included: false },
      { label: "Reparaturen", included: false },
      { label: "Ersatzgerät", included: false },
    ],
    highlight: false,
  },
  {
    id: "zl-pro",
    name: "ZL|Pro",
    subtitle: "Inspektionsvertrag",
    tagline: "Volle Kostenkontrolle bei jeder Inspektion – keine Überraschungen.",
    description:
      "ZL|Pro sichert Ihnen planbare Inspektionskosten in einem festen Vertrag. Arbeitszeit, Anfahrt, Original-Wartungsteile und die gesetzlich vorgeschriebene UVV-Prüfung sind bereits enthalten. Ihre Maschinen bleiben zuverlässig im Einsatz – ohne versteckte Kosten. Wir kümmern uns um die termingerechte Durchführung aller Inspektionen, sodass im Tagesgeschäft nichts übersehen wird.",
    icon: Eye,
    color: "from-primary/10 to-primary/5",
    idealFor: ["Flottenmanager mit mehreren Maschinen", "Unternehmen ohne eigene Werkstatt", "Betriebe, die planbare Fixkosten bevorzugen"],
    features: [
      { label: "Original Zoomlion-Wartungsteile", included: true },
      { label: "Komplette Wartungsdurchführung", included: true },
      { label: "UVV-Prüfung", included: true },
      { label: "Öldiagnose", included: true },
      { label: "Automatische Terminplanung", included: true },
      { label: "Ölversorgung", included: false, note: "optional zubuchbar" },
      { label: "Anfahrt", included: false, note: "optional zubuchbar" },
      { label: "Reparaturen", included: false },
      { label: "Ersatzgerät", included: false },
    ],
    highlight: true,
  },
  {
    id: "zl-complete",
    name: "ZL|Complete",
    subtitle: "Full-Service-Vertrag",
    tagline: "Das Rundum-Sorglos-Paket – inklusive kostenlosem Ersatzgerät.",
    description:
      "ZL|Complete ist Ihr Rundum-Sorglos-Vertrag für Wartung und Reparatur. Neben allen Inspektionen sind auch sämtliche Reparaturen inklusive – mit Ersatzteilen, Arbeitslohn und Anfahrt. Das Besondere: Im Reparaturfall stellen wir Ihnen kostenlos ein baugleiches oder höherwertiges Ersatzgerät zur Verfügung, damit Ihre Baustelle nicht stillsteht. So vermeiden Sie ungeplante Kosten und maximale Maschinenverfügbarkeit ist garantiert.",
    icon: Wrench,
    color: "from-green-500/10 to-green-600/5",
    idealFor: ["Großprojekte mit engem Zeitplan", "Unternehmen, die null Ausfallrisiko brauchen", "Betriebe ohne eigene Werkstattkapazitäten"],
    features: [
      { label: "Original Zoomlion-Wartungsteile", included: true },
      { label: "Komplette Wartungsdurchführung", included: true },
      { label: "Alle Reparaturen inkl. Arbeitslohn", included: true },
      { label: "Kostenloses Ersatzgerät (baugleich/höherwertig)", included: true },
      { label: "UVV-Prüfung", included: true },
      { label: "Öldiagnose", included: true },
      { label: "Anfahrt", included: true },
      { label: "Ölversorgung", included: false, note: "optional zubuchbar" },
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
  const location = useLocation();

  // Scroll to hash on navigation
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [location.hash]);

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
        <title>Servicevertrag Baumaschinen NRW | Wartungsvertrag Arbeitsbühne & Bagger</title>
        <meta
          name="description"
          content="Servicevertrag für Baumaschinen in NRW ➤ Wartungsverträge für Arbeitsbühnen, Bagger & Teleskoplader ✓ UVV-Prüfung inklusive ✓ Kostenloses Ersatzgerät ✓ 3 Standorte. Jetzt beraten lassen!"
        />
        <meta name="keywords" content="Servicevertrag Baumaschinen, Wartungsvertrag Arbeitsbühne, Wartungsvertrag Bagger, UVV-Prüfung Arbeitsbühnen, Baumaschinen Wartung NRW, Servicevertrag Teleskoplader, Full-Service Baumaschinen, Inspektionsvertrag Baumaschinen" />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/servicevertraege" />
        {/* Open Graph & Twitter Card via SocialMeta below */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <SocialMeta
        title="Servicevertrag Baumaschinen NRW | Zoomlion"
        description="Maßgeschneiderte Serviceverträge für Arbeitsbühnen, Bagger & Teleskoplader. UVV-Prüfung, Wartung und Reparatur aus einer Hand."
        url="https://www.zoomlion-nrw.de/servicevertraege"
      />

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
              Serviceverträge & Wartungsverträge für Baumaschinen in NRW
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Maximale Maschinenverfügbarkeit – mit voller Kostenkontrolle und
              erstklassigem Service. Wir garantieren, dass keine Inspektion im
              Tagesgeschäft übersehen wird und Ihre Maschinen stets die notwendige Wartung erhalten.
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

      {/* Pakete Kurzübersicht mit Anchor-Links */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Vergleich"
            title="Drei Pakete – ein Ziel: Ihre Maschine läuft."
            subtitle={'Wählen Sie das Paket, das zu Ihrem Betrieb passt. Klicken Sie auf „Details" für alle Leistungen.'}
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1">
                    <Star className="h-3 w-3" /> Beliebteste Wahl
                  </div>
                )}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <pkg.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{pkg.subtitle}</p>
                <p className="text-sm text-foreground/80 italic mb-6">{pkg.tagline}</p>
                <div className="space-y-2 mb-8 flex-1">
                  {pkg.features.slice(0, 5).map((f) => (
                    <div key={f.label} className="flex items-center gap-2 text-sm">
                      {f.included ? (
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-muted-foreground/40 flex-shrink-0" />
                      )}
                      <span className={f.included ? "" : "text-muted-foreground"}>{f.label}</span>
                    </div>
                  ))}
                  {pkg.features.length > 5 && (
                    <p className="text-xs text-muted-foreground ml-6">+ {pkg.features.length - 5} weitere Leistungen</p>
                  )}
                </div>
                <Button
                  asChild
                  variant={pkg.highlight ? "default" : "outline"}
                  className="w-full"
                >
                  <a href={`#${pkg.id}`}>
                    Details ansehen
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailsektionen für jedes Paket */}
      {packages.map((pkg, index) => (
        <section
          key={pkg.id}
          id={pkg.id}
          className={`py-16 md:py-24 scroll-mt-20 ${index % 2 === 0 ? "bg-muted/50" : ""}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-10 items-start">
                {/* Left: Info */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center`}>
                      <pkg.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold">{pkg.name}</h2>
                      <p className="text-sm text-primary font-medium">{pkg.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="font-heading font-bold mb-3">Ideal für:</h3>
                    <ul className="space-y-2">
                      {pkg.idealFor.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild size="lg">
                    <Link to="/kontakt">
                      {pkg.name} anfragen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Right: Feature-Liste */}
                <div className="lg:col-span-2">
                  <div className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-heading font-bold mb-4">Leistungen</h3>
                    <div className="space-y-3">
                      {pkg.features.map((f) => (
                        <div key={f.label} className="flex items-start gap-3 text-sm">
                          {f.included ? (
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="h-5 w-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                          )}
                          <div>
                            <span className={f.included ? "font-medium" : "text-muted-foreground"}>
                              {f.label}
                            </span>
                            {f.note && (
                              <span className="block text-xs text-muted-foreground">{f.note}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

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
                Mit unserem Service-Versprechen sichern Sie langfristige Einsatzfähigkeit, maximale Betriebskontinuität und nachhaltigen Investitionsschutz.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/10">
                <Truck className="h-10 w-10 mb-4 opacity-90" />
                <h3 className="font-heading text-xl font-bold mb-3">Ersatzteilverfügbarkeit</h3>
                <p className="opacity-90">
                  Wartungs-, Verschleiß- und übliche Reparaturteile: verfügbar am nächsten Werktag ab unseren NRW-Standorten. Dank schneller Ersatzteilverfügbarkeit minimieren wir Ausfallzeiten konsequent.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/10">
                <Wrench className="h-10 w-10 mb-4 opacity-90" />
                <h3 className="font-heading text-xl font-bold mb-3">Schnelle Reparaturen</h3>
                <p className="opacity-90">
                  Übliche Reparaturen innerhalb von zwei Werktagen oder nach Wunschtermin. Umfangreiche Reparaturen nach Vereinbarung. So bleiben Ihre Maschinen einsatzbereit.
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

      {/* 6 Gründe */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Vorteile" title="Sechs Gründe für einen Servicevertrag" />
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
                  <span className="text-sm font-bold text-primary">{i + 1}.</span>
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
                  Ob für eine Maschine oder eine ganze Flotte – wir haben den passenden Servicevertrag. Unser Expertenteam berät Sie persönlich und unverbindlich – an 3 Standorten in NRW.
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
                  <h3 className="font-heading font-bold mb-2">Serviceberatung</h3>
                  <p className="text-sm text-muted-foreground">
                    Wir analysieren Ihre Maschinennutzung und empfehlen das optimale Servicepaket. Vereinbaren Sie jetzt Ihren persönlichen Beratungstermin.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Shield className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-heading font-bold mb-2">Maßgeschneiderte Verträge</h3>
                  <p className="text-sm text-muted-foreground">
                    Exakt abgestimmt auf Ihre Maschinennutzung und Ihr Budget: Erfahren Sie alles über Leistungen, Unterschiede und Vorteile unserer drei Servicepakete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abschluss CTA */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Wartung und Service für Ihre Baumaschinen
            </h2>
            <p className="opacity-90 mb-4">
              Mit professioneller Wartung und vorausschauender Diagnostik sorgen wir dafür, dass Ihre Baumaschinen zuverlässig und effizient im Einsatz bleiben.
            </p>
            <p className="opacity-90 mb-8">
              Ob Filterkit für den Selbsteinbau oder umfassender Full-Service-Vertrag mit kostenlosem Ersatzgerät – wir bieten die passende Lösung.
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
