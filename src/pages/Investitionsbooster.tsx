import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Calendar,
  Building2,
  Users,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SocialMeta } from "@/components/shared/SocialMeta";

const faqs = [
  {
    q: "Gilt der Investitionsbooster auch für gebrauchte Baumaschinen?",
    a: "Nein. Die degressive AfA nach § 7 Abs. 2 EStG gilt ausschließlich für neu angeschaffte oder hergestellte bewegliche Wirtschaftsgüter. Gebrauchtmaschinen fallen nicht unter diese Sonderregelung – hier greifen aber ggf. andere Instrumente wie der IAB nach § 7g EStG.",
  },
  {
    q: "Ist der Investitionsbooster auch bei Finanzierung oder Leasing anwendbar?",
    a: "Bei klassischer Finanzierung (Kauf mit Darlehen) und beim Mietkauf ist die Abschreibung durch den Käufer möglich, da er wirtschaftlicher Eigentümer wird. Beim reinen Leasing liegt die Abschreibung in der Regel beim Leasinggeber.",
  },
  {
    q: "Muss ich einen Antrag stellen?",
    a: "Nein. Die Inanspruchnahme erfolgt direkt über die Steuererklärung. Wichtig ist die saubere Dokumentation der Anschaffung und der betrieblichen Nutzung.",
  },
  {
    q: "Was passiert, wenn ich die Maschine vor Ablauf der Nutzungsdauer verkaufe?",
    a: "Ein vorzeitiger Verkauf oder die Entnahme aus dem Betriebsvermögen kann zu einer Rückgängigmachung oder Korrektur der Abschreibung führen. Ihr Steuerberater sollte Ihnen die Folgen individuell darstellen.",
  },
  {
    q: "Gilt der Booster auch, wenn ich die Maschine vermiete oder untervermiete?",
    a: "Ja, solange die Maschine Teil des betrieblichen Anlagevermögens ist und die 90 %-Nutzungsbedingung erfüllt wird. Vermietbetriebe profitieren explizit.",
  },
  {
    q: "Kann ich Try & Buy mit dem Investitionsbooster kombinieren?",
    a: "Ja. Entscheiden Sie sich nach der Try-&-Buy-Testphase für den Kauf, gilt als Anschaffungsdatum das Datum des Kaufvertrags – sofern dieses im Zeitraum 30.06.2025 bis 31.12.2027 liegt, greift der Booster regulär.",
  },
  {
    q: "Was ist der Unterschied zwischen linearer und degressiver AfA?",
    a: "Bei der linearen AfA wird der Anschaffungswert gleichmäßig über die Nutzungsdauer verteilt (z. B. 7 Jahre bei Baumaschinen → jährlich 14,3 %). Die degressive AfA rechnet stattdessen einen konstanten Prozentsatz (hier 30 %) auf den jeweils sinkenden Restbuchwert an – die Entlastung ist in den ersten Jahren deutlich höher.",
  },
  {
    q: "Was passiert nach dem 31.12.2027?",
    a: "Die degressive AfA läuft aus. Stattdessen senkt der Gesetzgeber ab 2028 die Körperschaftsteuer schrittweise von 15 % auf 10 % (bis 2032). Für kurzfristige Steuerentlastung bleibt der Investitionsbooster aber das wirkungsvollste Instrument – und nur bis Ende 2027 nutzbar.",
  },
];

export default function Investitionsbooster() {
  const url = "https://www.zoomlion-nrw.de/investitionsbooster";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>Investitionsbooster 2026/2027: 30 % Sofortabschreibung Baumaschine</title>
        <meta
          name="description"
          content="Investitionsbooster nutzen: bis zu 30 % degressive AfA auf Bagger, Arbeitsbühnen & Teleskoplader bis 31.12.2027. Steuerlich profitieren mit Zoomlion NRW."
        />
        <meta
          name="keywords"
          content="Investitionsbooster, Wachstumsbooster, degressive AfA, 30 Prozent Abschreibung, Baumaschine steuerlich absetzen, § 7 Abs. 2 EStG, Sofortabschreibung 2027, Bagger Steuer"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <SocialMeta
        title="Investitionsbooster: 30 % Sofortabschreibung bis 2027 – Zoomlion NRW"
        description="Bis zu 30 % degressive AfA auf neue Baumaschinen bis 31.12.2027 sichern. Bagger, Arbeitsbühnen, Teleskoplader steuerlich optimal anschaffen."
        url={url}
      />

      {/* Hero – füllt initial mind. die Viewport-Höhe (abzgl. Header) */}
      <section className="bg-secondary text-secondary-foreground flex flex-col min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4 pt-6">
          {/* Heller Breadcrumb für dunklen Hero */}
          <nav aria-label="Breadcrumb" className="py-3">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-1.5 text-white/70 hover:text-primary transition-colors"
                >
                  <span>Start</span>
                </Link>
              </li>
              <li className="flex items-center text-white/40">
                <ArrowRight className="h-3.5 w-3.5 mx-1 rotate-0" />
              </li>
              <li>
                <span className="text-white font-medium" aria-current="page">
                  Investitionsbooster
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <div className="container mx-auto px-4 py-10 md:py-16 flex-1 flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-primary/30 mb-5">
                Steuer-Tipp 2026 / 2027
              </span>
              <h1
                className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight break-words hyphens-auto"
                lang="de"
              >
                Investitionsbooster nutzen:{" "}
                <span className="text-primary">30 % Sofortabschreibung</span> auf
                Ihre neue Baumaschine
              </h1>
              <p className="mt-6 text-lg text-secondary-foreground/85 leading-relaxed">
                Bis zum <strong>31.12.2027</strong> profitieren Unternehmen und
                Selbstständige in Deutschland vom steuerlichen
                Investitionssofortprogramm. Wer jetzt eine Zoomlion Baumaschine
                anschafft, kann im ersten Jahr bis zu 30 % der Anschaffungskosten
                degressiv abschreiben — und so die Steuerlast spürbar senken.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link to="/kontakt?betreff=investitionsbooster">
                    Unverbindliches Angebot anfordern
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <a
                    href="/dokumente/investitionsbooster-onepager.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Onepager als PDF
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative text-center">
                  <div className="font-heading text-[10rem] md:text-[12rem] leading-none font-black text-primary">
                    30%
                  </div>
                  <p className="mt-2 text-lg font-semibold text-secondary-foreground/80">
                    degressive AfA p.&nbsp;a.
                  </p>
                  <p className="mt-1 text-sm text-secondary-foreground/60">
                    bis 31.12.2027
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Was ist der Investitionsbooster */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Der Wachstumsbooster auf einen Blick
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/90">
            <p>
              Mit dem am 19. Juli 2025 in Kraft getretenen „Gesetz für ein
              steuerliches Investitionssofortprogramm" hat die Bundesregierung
              eine der wirksamsten Investitionsanreize der letzten Jahre
              geschaffen. Der sogenannte <strong>Wachstumsbooster</strong> oder{" "}
              <strong>Investitionsbooster</strong> erlaubt Unternehmen, bewegliche
              Wirtschaftsgüter des Anlagevermögens — und damit auch Baumaschinen
              wie <strong>Minibagger, Arbeitsbühnen und Teleskoplader</strong> —
              mit bis zu 30 Prozent pro Jahr degressiv abzuschreiben. Die
              rechtliche Grundlage bildet der neu gefasste § 7 Abs. 2 EStG.
            </p>
            <p>
              Die Regelung gilt für Investitionen, die{" "}
              <strong>zwischen dem 30. Juni 2025 und dem 31. Dezember 2027</strong>{" "}
              getätigt werden. Danach läuft die Sonderregelung aus; ab 2028 senkt
              der Gesetzgeber stattdessen schrittweise die Körperschaftsteuer von
              15 % auf 10 % bis 2032. Für Unternehmen, die ohnehin in ihren
              Maschinenpark investieren möchten, ergibt sich damit bis Ende 2027
              ein klares <strong>steuerliches Zeitfenster</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Wer profitiert? */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10 text-center">
            Für wen gilt der Investitionsbooster?
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Alle Unternehmen",
                text: "Unabhängig von Branche, Größe oder Rechtsform — Einzelunternehmen, Freiberufler, GmbH, KG, UG, AG. Vom Solo-Gartenbauer bis zum mittelständischen Bauunternehmen kann jeder die Regelung nutzen.",
              },
              {
                icon: Users,
                title: "Typische Einsatzfelder",
                text: "Besonders attraktiv für Bauunternehmen, GaLaBau-Betriebe, Handwerksbetriebe, kommunale Bauhöfe, Abbruchunternehmen, Industriebetriebe und Vermieter, die ihre Maschinenflotte modernisieren oder erweitern wollen.",
              },
              {
                icon: ShieldCheck,
                title: "Voraussetzungen",
                text: "Das Wirtschaftsgut muss neu angeschafft sein, ins Betriebsvermögen aufgenommen und im Förderzeitraum in Betrieb genommen werden. Eine mindestens 90 %-ige betriebliche Nutzung ist Voraussetzung. Kein Antrag nötig — die Abschreibung erfolgt direkt über die Steuererklärung.",
              },
            ].map((c) => (
              <Card key={c.title} className="border-2">
                <CardContent className="pt-6">
                  <c.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {c.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Rechenbeispiel */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">
            Was das konkret bedeutet — ein Rechenbeispiel
          </h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 md:p-4 font-semibold">Jahr</th>
                  <th className="text-left p-3 md:p-4 font-semibold">
                    Degressive AfA (30 %)
                  </th>
                  <th className="text-left p-3 md:p-4 font-semibold">
                    Abschreibung
                  </th>
                  <th className="text-left p-3 md:p-4 font-semibold">
                    Restbuchwert
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 md:p-4">Anschaffung Baumaschine</td>
                  <td className="p-3 md:p-4 text-muted-foreground">—</td>
                  <td className="p-3 md:p-4">50.000 €</td>
                  <td className="p-3 md:p-4">50.000 €</td>
                </tr>
                <tr>
                  <td className="p-3 md:p-4">Jahr 1 (Anschaffungsjahr)</td>
                  <td className="p-3 md:p-4">30 % von 50.000 €</td>
                  <td className="p-3 md:p-4 font-bold text-primary">15.000 €</td>
                  <td className="p-3 md:p-4">35.000 €</td>
                </tr>
                <tr>
                  <td className="p-3 md:p-4">Jahr 2</td>
                  <td className="p-3 md:p-4">30 % von 35.000 €</td>
                  <td className="p-3 md:p-4 font-bold text-primary">10.500 €</td>
                  <td className="p-3 md:p-4">24.500 €</td>
                </tr>
                <tr>
                  <td className="p-3 md:p-4">Jahr 3</td>
                  <td className="p-3 md:p-4">30 % von 24.500 €</td>
                  <td className="p-3 md:p-4 font-bold text-primary">7.350 €</td>
                  <td className="p-3 md:p-4">17.150 €</td>
                </tr>
                <tr className="bg-muted/60">
                  <td className="p-3 md:p-4 font-bold">
                    Summe nach 3 Jahren
                  </td>
                  <td className="p-3 md:p-4"></td>
                  <td className="p-3 md:p-4 font-bold text-primary">32.850 €</td>
                  <td className="p-3 md:p-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-4 text-base leading-relaxed">
            <p>
              Zum Vergleich: Bei der klassischen linearen Abschreibung über 7
              Jahre Nutzungsdauer würden nach 3 Jahren nur ca. 21.400 €
              abgeschrieben sein. Die degressive Abschreibung nach dem
              Investitionsbooster erzeugt also in den ersten Jahren einen{" "}
              <strong>Liquiditätsvorsprung von über 11.000 €</strong> — Geld, das
              im Betrieb investiert werden kann, anstatt es als Steuer abzuführen.
            </p>
            <p className="text-sm text-muted-foreground italic border-l-4 border-primary/40 pl-4">
              Hinweis: Bei unterjähriger Anschaffung wird die degressive AfA
              monatsgenau gekürzt (pro vollem Kalendermonat vor der Anschaffung
              um 1/12). Die konkrete Berechnung für Ihr Unternehmen nimmt Ihr
              Steuerberater vor.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Kombinationsmöglichkeiten */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Noch mehr steuerliche Entlastung durch Kombination
          </h2>
          <p className="text-base md:text-lg text-foreground/85 mb-10 leading-relaxed">
            Kleine und mittlere Unternehmen (KMU) mit einem Gewinn von höchstens
            200.000 € im Vorjahr können den Investitionsbooster mit weiteren
            Instrumenten nach § 7g EStG kombinieren:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Investitionsabzugsbetrag (IAB)",
                text: "Bis zu 50 % der geplanten Anschaffungskosten bereits vor dem Kauf steuerlich ansetzen — wirkt gewinnmindernd im Jahr der Bildung.",
              },
              {
                title: "Sonderabschreibung § 7g EStG",
                text: "Zusätzliche 40 % Sonderabschreibung im Anschaffungsjahr, flexibel auf 5 Jahre verteilbar.",
              },
              {
                title: "Degressive AfA (Investitionsbooster)",
                text: "Die hier beschriebenen bis zu 30 % pro Jahr auf den jeweiligen Restbuchwert.",
              },
            ].map((c) => (
              <Card key={c.title}>
                <CardContent className="pt-6">
                  <h3 className="font-heading text-base font-bold mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {c.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 rounded-lg bg-primary/10 border-l-4 border-primary p-5">
            <p className="text-base md:text-lg font-semibold text-foreground">
              In Kombination können KMU so im ersten Jahr bis zu{" "}
              <span className="text-primary">~70 % der Anschaffungskosten</span>{" "}
              steuerlich geltend machen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Passende Maschinen */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10 text-center">
            Diese Zoomlion Maschinen qualifizieren sich für den Investitionsbooster
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                title: "Minibagger & Kompaktbagger",
                desc: "ZE20G, ZE27GU, ZE55GU – ideal für Tiefbau, GaLaBau und Abbruch.",
                href: "/bagger",
              },
              {
                title: "Arbeitsbühnen",
                desc: "ZS0607AC-Li, ZS1012AC-Li, ZMP06, ZMP09J – Scheren- und Teleskopmastbühnen.",
                href: "/arbeitsbuehnen",
              },
              {
                title: "Teleskoplader",
                desc: "Robuste Telehandler für Landwirtschaft, Bau und Industrie.",
                href: "/teleskoplader",
              },
            ].map((c) => (
              <Card key={c.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {c.desc}
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={c.href}>
                      Modelle ansehen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Zeitstrahl */}
      <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10 text-center">
            Das Zeitfenster schließt sich am 31.12.2027
          </h2>
          <div className="relative py-10">
            <div className="h-1 w-full bg-secondary-foreground/20 rounded-full" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="h-4 w-4 rounded-full bg-primary ring-4 ring-secondary" />
              <span className="mt-3 text-xs md:text-sm text-center">
                <strong className="block">01.07.2025</strong>
                <span className="text-secondary-foreground/70">Start Booster</span>
              </span>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="h-5 w-5 rounded-full bg-primary ring-4 ring-secondary animate-pulse" />
              <span className="mt-3 text-xs md:text-sm text-center">
                <strong className="block text-primary">Heute</strong>
                <span className="text-secondary-foreground/70">Jetzt handeln</span>
              </span>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="h-4 w-4 rounded-full bg-destructive ring-4 ring-secondary" />
              <span className="mt-3 text-xs md:text-sm text-center">
                <strong className="block">31.12.2027</strong>
                <span className="text-secondary-foreground/70">Deadline</span>
              </span>
            </div>
          </div>
          <p className="mt-12 text-base md:text-lg leading-relaxed text-secondary-foreground/85">
            Nach dem 31.12.2027 ist die 30-prozentige degressive Abschreibung
            nicht mehr möglich. Wer von der vollen Wirkung im ersten Jahr
            profitieren will, sollte die Anschaffung möglichst{" "}
            <strong>früh im Wirtschaftsjahr</strong> tätigen, da bei unterjähriger
            Anschaffung nur anteilig abgeschrieben werden kann.
          </p>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10 text-center">
            Häufige Fragen zum Investitionsbooster
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-lg border bg-card p-5 open:shadow-sm"
              >
                <summary className="cursor-pointer font-semibold text-base md:text-lg list-none flex items-start justify-between gap-3">
                  <span>{f.q}</span>
                  <span className="text-primary transition-transform group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Kontakt */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-center">
            Bereit zu investieren? Wir beraten Sie persönlich.
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            An allen drei Standorten in NRW – persönlich, schnell, unverbindlich.
          </p>
          <div className="grid gap-6 md:grid-cols-3 mb-10">
            <Card>
              <CardContent className="pt-6">
                <MapPin className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-bold mb-1">Krefeld (Hauptsitz)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Anrather Straße 291<br />47807 Krefeld
                </p>
                <div className="space-y-1 text-sm">
                  <a href="tel:+4921514179904" className="flex items-center gap-2 text-primary hover:underline">
                    <Phone className="h-4 w-4" /> 02151 4179904
                  </a>
                  <a href="mailto:verkauf@zoomlion-nrw.de" className="flex items-center gap-2 text-primary hover:underline">
                    <Mail className="h-4 w-4" /> verkauf@zoomlion-nrw.de
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <MapPin className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-bold mb-1">Bonn</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Standort Bonn
                </p>
                <a href="tel:+4922850466061" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <Phone className="h-4 w-4" /> 0228 50466061
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <MapPin className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-bold mb-1">Mülheim an der Ruhr</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Standort Mülheim
                </p>
                <Link to="/standorte/muelheim" className="text-sm text-primary hover:underline">
                  Standort-Details
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link to="/kontakt?betreff=investitionsbooster">
                Jetzt Angebot anfordern
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="/dokumente/investitionsbooster-onepager.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Onepager als PDF
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 9: Disclaimer */}
      <section className="bg-[#F5F5F5] py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-3 text-xs md:text-sm text-foreground/70 leading-relaxed italic">
            <Calendar className="h-4 w-4 mt-0.5 shrink-0" />
            <p>
              Alle Angaben zum Investitionsbooster und zu steuerlichen
              Auswirkungen dienen der allgemeinen Information und erheben keinen
              Anspruch auf Vollständigkeit oder Richtigkeit im Einzelfall. Sie
              ersetzen keine steuerliche oder rechtliche Beratung. Die
              tatsächliche steuerliche Wirkung hängt von den individuellen
              Verhältnissen Ihres Unternehmens ab. Wir empfehlen, vor einer
              Investitionsentscheidung Ihren Steuerberater oder Wirtschaftsprüfer
              zu konsultieren. Stand der Information: April 2026 — gesetzliche
              Änderungen vorbehalten.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
