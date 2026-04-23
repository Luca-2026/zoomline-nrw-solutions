import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Wrench,
  Euro,
  Shield,
  Truck,
  Sparkles,
  Phone,
  MapPin,
  Shovel,
  ChevronsUp,
  Forklift,
} from "lucide-react";
import { AnimatedExcavator } from "@/components/shared/AnimatedExcavator";
import { SocialMeta } from "@/components/shared/SocialMeta";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const benefits = [
  {
    icon: Shield,
    title: "Risikolos testen im Echteinsatz",
    description:
      "Prüfen Sie Bagger, Arbeitsbühne oder Teleskoplader im tatsächlichen Baustelleneinsatz – mit realer Last, Ihrem Boden, Ihrer Crew. Kein Showroom-Eindruck, sondern echter Praxisbeweis. Keine Kaufverpflichtung, keine versteckten Klauseln.",
  },
  {
    icon: Euro,
    title: "100 % Mietanrechnung auf den Kaufpreis",
    description:
      "Entscheiden Sie sich nach der Testphase für den Kauf, werden sämtliche Mietzahlungen zu 100 % auf den Kaufpreis der Neumaschine angerechnet. Sie zahlen effektiv nur den Netto-Anschaffungspreis – die Testphase ist bei Kauf kostenlos.",
  },
  {
    icon: Wrench,
    title: "Full-Service während der Testmiete",
    description:
      "Während der gesamten Testphase haben Sie vollen Zugriff auf unseren Zoomlion Servicepartner vor Ort: Ersatzteillogistik aus Krefeld, Bonn und Mülheim a. d. Ruhr, werktäglicher Techniker-Support und kostenlose Wartungsintervalle nach Herstellervorgabe.",
  },
  {
    icon: Truck,
    title: "Lieferung & Einweisung inklusive",
    description:
      "Wir liefern die Testmaschine direkt an Ihre Baustelle in NRW – ob Köln, Düsseldorf, Essen, Dortmund oder Aachen – und weisen Ihr Team fachgerecht in Bedienung, Sicherheitsfunktionen und Wartung ein. Rückgabe erfolgt ebenso kostenfrei durch unsere Logistik.",
  },
];

const steps = [
  {
    number: "01",
    title: "Maschine auswählen",
    description:
      "Wählen Sie aus unserem Sortiment an Zoomlion Minibaggern (ZE20G, ZE27GU, ZE55GU), Scherenbühnen (ZS0607AC-Li, ZS1012AC-Li), Teleskopmastbühnen (ZMP09J, ZMP06) oder Teleskopladern. Unser Verkaufsteam berät Sie bei der passenden Maschinenklasse für Ihr Einsatzprofil – von der 2-Tonnen-Minibagger-Klasse bis zur 12 m Elektro-Arbeitsbühne.",
  },
  {
    number: "02",
    title: "Testphase & Mietbedingungen vereinbaren",
    description:
      "Wir definieren gemeinsam mit Ihnen einen realistischen Testzeitraum – typischerweise 2 Wochen bis 3 Monate, abhängig von Projektdauer und Maschinentyp. Sie erhalten einen schriftlichen Testmietvertrag mit fixierten Konditionen und der Zusicherung der vollen Mietanrechnung bei Kauf.",
  },
  {
    number: "03",
    title: "Im echten Baustelleneinsatz prüfen",
    description:
      "Wir liefern die Maschine an Ihren Einsatzort in NRW, übergeben sie mit Einweisung und stehen während der gesamten Testphase als Servicepartner bereit. Sie nutzen die Maschine so, wie Sie sie auch nach einem Kauf nutzen würden – ohne Einschränkungen.",
  },
  {
    number: "04",
    title: "Kaufen mit 100 % Anrechnung oder einfach zurückgeben",
    description:
      "Am Ende der Testphase entscheiden Sie: Kauf zum vereinbarten Festpreis minus 100 % der gezahlten Testmiete, oder Rückgabe der Maschine zum regulären Mietpreis. Keine Gebühren, keine Pönale, keine Vertragsstrafe.",
  },
];

const faqs: { question: string; answer: React.ReactNode; plain: string }[] = [
  {
    question: "Wie lange kann ich eine Baumaschine im Try-&-Buy-Modell testen?",
    answer: (
      <>
        Die Testdauer richtet sich nach Ihrem Projekt und der Maschinenklasse.
        Typische Testzeiträume liegen zwischen 2 Wochen und 3 Monaten. Für
        Minibagger und Arbeitsbühnen sind auch längere Testphasen von bis zu 6
        Monaten möglich, wenn Ihr Projekt das erfordert.
      </>
    ),
    plain:
      "Die Testdauer richtet sich nach Ihrem Projekt und der Maschinenklasse. Typische Testzeiträume liegen zwischen 2 Wochen und 3 Monaten. Für Minibagger und Arbeitsbühnen sind auch längere Testphasen von bis zu 6 Monaten möglich, wenn Ihr Projekt das erfordert.",
  },
  {
    question: "Wird wirklich die komplette Miete auf den Kaufpreis angerechnet?",
    answer: (
      <>
        Ja, zu 100 %. Wenn Sie sich nach oder während der Testphase für den Kauf
        entscheiden, werden sämtliche bereits gezahlten Mietraten vollständig
        auf den vereinbarten Kaufpreis der Neumaschine angerechnet. Die
        Mietanrechnung ist schriftlich im Testmietvertrag fixiert.
      </>
    ),
    plain:
      "Ja, zu 100 %. Wenn Sie sich nach oder während der Testphase für den Kauf entscheiden, werden sämtliche bereits gezahlten Mietraten vollständig auf den vereinbarten Kaufpreis der Neumaschine angerechnet. Die Mietanrechnung ist schriftlich im Testmietvertrag fixiert.",
  },
  {
    question: "Was passiert, wenn ich mich gegen den Kauf entscheide?",
    answer: (
      <>
        Sie geben die Maschine einfach zurück. Sie zahlen dann nur die reguläre
        Mietgebühr für den tatsächlichen Nutzungszeitraum – es gibt keine
        Stornogebühr, keine Pönale und keine versteckten Zusatzkosten.
      </>
    ),
    plain:
      "Sie geben die Maschine einfach zurück. Sie zahlen dann nur die reguläre Mietgebühr für den tatsächlichen Nutzungszeitraum – es gibt keine Stornogebühr, keine Pönale und keine versteckten Zusatzkosten.",
  },
  {
    question: "Welche Zoomlion Maschinen sind für Try & Buy verfügbar?",
    answer: (
      <>
        Grundsätzlich alle Neumaschinen aus unserem Portfolio:{" "}
        <strong>Minibagger</strong> (ZE20G, ZE27GU, ZE55GU und größere Klassen
        auf Anfrage), <strong>Scherenbühnen</strong> (ZS0607AC-Li, ZS1012AC-Li),{" "}
        <strong>Teleskopmastbühnen</strong> (ZMP06, ZMP09J) sowie{" "}
        <strong>Teleskoplader</strong>. Gebrauchtmaschinen sind aus
        versicherungsrechtlichen Gründen nicht im Programm.
      </>
    ),
    plain:
      "Grundsätzlich alle Neumaschinen aus unserem Portfolio: Minibagger (ZE20G, ZE27GU, ZE55GU und größere Klassen auf Anfrage), Scherenbühnen (ZS0607AC-Li, ZS1012AC-Li), Teleskopmastbühnen (ZMP06, ZMP09J) sowie Teleskoplader. Gebrauchtmaschinen sind aus versicherungsrechtlichen Gründen nicht im Programm.",
  },
  {
    question: "Muss ich eine Kaution hinterlegen?",
    answer: (
      <>
        In der Regel ja – eine Sicherheitskaution wird wie bei jedem regulären
        Mietvertrag vereinbart und nach Rückgabe der Maschine vollständig
        erstattet. Die Höhe richtet sich nach Maschinenwert und Mietdauer.
      </>
    ),
    plain:
      "In der Regel ja – eine Sicherheitskaution wird wie bei jedem regulären Mietvertrag vereinbart und nach Rückgabe der Maschine vollständig erstattet. Die Höhe richtet sich nach Maschinenwert und Mietdauer.",
  },
  {
    question: "Gibt es eine Bonitätsprüfung?",
    answer: (
      <>
        Für die reine Testmiete führen wir in der Regel nur eine einfache
        Bonitätsprüfung durch, wie bei jedem Mietvertrag üblich. Erst wenn Sie
        sich für den Kauf entscheiden und eine Finanzierung über uns abwickeln
        möchten, erfolgt die vollständige Prüfung durch unseren
        Finanzierungspartner.
      </>
    ),
    plain:
      "Für die reine Testmiete führen wir in der Regel nur eine einfache Bonitätsprüfung durch, wie bei jedem Mietvertrag üblich. Erst wenn Sie sich für den Kauf entscheiden und eine Finanzierung über uns abwickeln möchten, erfolgt die vollständige Prüfung durch unseren Finanzierungspartner.",
  },
  {
    question: "Kann ich die Try-&-Buy-Maschine zusätzlich finanzieren?",
    answer: (
      <>
        Ja. Wenn Sie sich nach der Testphase zum Kauf entscheiden, können Sie
        den Restkaufpreis (nach Abzug der 100 % Mietanrechnung) klassisch
        finanzieren oder leasen. Wir arbeiten mit spezialisierten
        Baumaschinen-Finanzierern zusammen und können Ihnen ab 0 % Anzahlung{" "}
        <Link to="/finanzierung" className="text-primary underline">
          individuelle Konditionen
        </Link>{" "}
        anbieten.
      </>
    ),
    plain:
      "Ja. Wenn Sie sich nach der Testphase zum Kauf entscheiden, können Sie den Restkaufpreis (nach Abzug der 100 % Mietanrechnung) klassisch finanzieren oder leasen. Wir arbeiten mit spezialisierten Baumaschinen-Finanzierern zusammen und können Ihnen ab 0 % Anzahlung individuelle Konditionen anbieten.",
  },
  {
    question: "Wer trägt Wartung und Verschleiß während der Testmiete?",
    answer: (
      <>
        Alle planmäßigen Wartungen nach Herstellervorgabe sind während der
        Testphase kostenlos durch uns abgedeckt. Verschleißteile (z. B.
        Baggerzähne, Reifen, Filter) gehen wie bei jedem regulären Mietvertrag
        zulasten des Mieters. Schäden durch unsachgemäße Bedienung sind über
        Ihre Maschinenbruchversicherung abzudecken.
      </>
    ),
    plain:
      "Alle planmäßigen Wartungen nach Herstellervorgabe sind während der Testphase kostenlos durch uns abgedeckt. Verschleißteile (z. B. Baggerzähne, Reifen, Filter) gehen wie bei jedem regulären Mietvertrag zulasten des Mieters. Schäden durch unsachgemäße Bedienung sind über Ihre Maschinenbruchversicherung abzudecken.",
  },
  {
    question: "Brauche ich eine spezielle Versicherung?",
    answer: (
      <>
        Ja – eine Maschinenbruchversicherung und Haftpflichtversicherung sind
        für Testmieten Pflicht. Falls Sie keine eigene Versicherung haben,
        bieten wir über unsere Partner eine kurzfristige Abdeckung zu günstigen
        Konditionen an.
      </>
    ),
    plain:
      "Ja – eine Maschinenbruchversicherung und Haftpflichtversicherung sind für Testmieten Pflicht. Falls Sie keine eigene Versicherung haben, bieten wir über unsere Partner eine kurzfristige Abdeckung zu günstigen Konditionen an.",
  },
  {
    question: "Liefern Sie Try-&-Buy-Maschinen in ganz NRW?",
    answer: (
      <>
        Ja, wir liefern von unseren Standorten{" "}
        <Link to="/standorte/krefeld" className="text-primary underline">
          Krefeld
        </Link>
        ,{" "}
        <Link to="/standorte/bonn" className="text-primary underline">
          Bonn
        </Link>{" "}
        und{" "}
        <Link to="/standorte/muelheim" className="text-primary underline">
          Mülheim an der Ruhr
        </Link>{" "}
        in ganz Nordrhein-Westfalen – Köln, Düsseldorf, das Ruhrgebiet, Aachen,
        Münster, Bielefeld. Transport zur Baustelle und Rücktransport sind bei
        Testmieten ab 4 Wochen Laufzeit in der Regel inklusive.
      </>
    ),
    plain:
      "Ja, wir liefern von unseren Standorten Krefeld, Bonn und Mülheim an der Ruhr in ganz Nordrhein-Westfalen – Köln, Düsseldorf, das Ruhrgebiet, Aachen, Münster, Bielefeld. Transport zur Baustelle und Rücktransport sind bei Testmieten ab 4 Wochen Laufzeit in der Regel inklusive.",
  },
  {
    question: "Wie lange dauert es bis meine Testmaschine geliefert wird?",
    answer: (
      <>
        Abhängig von Verfügbarkeit und Standort typischerweise 3 bis 10
        Werktage. Bei kurzfristigem Bedarf rufen Sie uns direkt an:{" "}
        <a href="tel:+4921514179904" className="text-primary underline">
          02151 4179904
        </a>{" "}
        – wir prüfen die Verfügbarkeit sofort.
      </>
    ),
    plain:
      "Abhängig von Verfügbarkeit und Standort typischerweise 3 bis 10 Werktage. Bei kurzfristigem Bedarf rufen Sie uns direkt an: 02151 4179904 – wir prüfen die Verfügbarkeit sofort.",
  },
  {
    question: "Ist Try & Buy auch für Privatkunden verfügbar?",
    answer: (
      <>
        Primär richtet sich das Programm an gewerbliche Kunden (Bauunternehmen,
        GaLaBau-Betriebe, Kommunen, Industriebetriebe). Für größere
        Bauherren-Projekte prüfen wir Try & Buy im Einzelfall gerne individuell.
      </>
    ),
    plain:
      "Primär richtet sich das Programm an gewerbliche Kunden (Bauunternehmen, GaLaBau-Betriebe, Kommunen, Industriebetriebe). Für größere Bauherren-Projekte prüfen wir Try & Buy im Einzelfall gerne individuell.",
  },
];

const regions = [
  { name: "Köln", to: "/baumaschinen/koeln" },
  { name: "Düsseldorf", to: "/baumaschinen/duesseldorf" },
  { name: "Bonn", to: "/standorte/bonn" },
  { name: "Essen", to: "/baumaschinen/essen" },
  { name: "Dortmund", to: "/baumaschinen/dortmund" },
  { name: "Duisburg", to: "/baumaschinen/duisburg" },
  { name: "Krefeld", to: "/standorte/krefeld" },
  { name: "Mülheim a. d. Ruhr", to: "/standorte/muelheim" },
  { name: "Aachen", to: "/baumaschinen/aachen" },
  { name: "Wuppertal", to: "/baumaschinen/wuppertal" },
  { name: "Mönchengladbach", to: "/baumaschinen/moenchengladbach" },
  { name: "Münster", to: "/baumaschinen/muenster" },
  { name: "Bielefeld", to: "/baumaschinen/bielefeld" },
  { name: "Bochum", to: "/baumaschinen/bochum" },
  { name: "Leverkusen", to: "/baumaschinen/leverkusen" },
  { name: "Solingen", to: "/baumaschinen/solingen" },
  { name: "Oberhausen", to: "/baumaschinen/oberhausen" },
  { name: "Gelsenkirchen", to: "/baumaschinen/gelsenkirchen" },
  { name: "Remscheid", to: "/baumaschinen/remscheid" },
  { name: "Hagen", to: "/baumaschinen/hagen" },
  { name: "Neuss", to: "/baumaschinen/neuss" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const TryAndBuy = () => {
  useRevealOnScroll();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Try & Buy — Baumaschinen testen vor Kauf",
    serviceType: "Baumaschinen Testmiete mit Kaufanrechnung",
    provider: {
      "@type": "LocalBusiness",
      name: "Zoomlion NRW — SLT Technology Group GmbH & Co. KG",
      telephone: "+49 2151 4179904",
      email: "verkauf@zoomlion-nrw.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Anrather Straße 291",
        postalCode: "47807",
        addressLocality: "Krefeld",
        addressRegion: "NRW",
        addressCountry: "DE",
      },
    },
    areaServed: [
      { "@type": "City", name: "Köln" },
      { "@type": "City", name: "Düsseldorf" },
      { "@type": "City", name: "Bonn" },
      { "@type": "City", name: "Essen" },
      { "@type": "City", name: "Dortmund" },
      { "@type": "City", name: "Duisburg" },
      { "@type": "City", name: "Krefeld" },
      { "@type": "City", name: "Mülheim an der Ruhr" },
      { "@type": "City", name: "Aachen" },
      { "@type": "City", name: "Wuppertal" },
      { "@type": "City", name: "Mönchengladbach" },
      { "@type": "City", name: "Münster" },
      { "@type": "AdministrativeArea", name: "Nordrhein-Westfalen" },
    ],
    description:
      "Risikofreie Testmiete für Zoomlion Minibagger, Arbeitsbühnen und Teleskoplader in NRW. Die komplette Miete wird bei Kauf zu 100 % auf den Kaufpreis angerechnet.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.plain },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Start",
        item: "https://www.zoomlion-nrw.de/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Try & Buy",
        item: "https://www.zoomlion-nrw.de/try-and-buy",
      },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>
          Try & Buy NRW: Bagger & Arbeitsbühne testen vor Kauf | Zoomlion
        </title>
        <meta
          name="description"
          content="Baumaschinen erst mieten, dann kaufen: Bei Zoomlion NRW testen Sie Minibagger, Arbeitsbühnen & Teleskoplader risikolos auf Ihrer Baustelle. 100 % der Testmiete wird beim Kauf angerechnet. Jetzt Testmiete in Bonn, Krefeld oder Mülheim anfragen."
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/try-and-buy" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta
          property="og:title"
          content="Try & Buy: Baumaschinen testen vor dem Kauf | Zoomlion NRW"
        />
        <meta
          property="og:description"
          content="Minibagger, Arbeitsbühne oder Teleskoplader erst mieten, dann kaufen. Testmiete wird 100 % auf den Kaufpreis angerechnet."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zoomlion-nrw.de/try-and-buy" />
        <meta
          property="og:image"
          content="https://www.zoomlion-nrw.de/og/try-and-buy.jpg"
        />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      </Helmet>
      <SocialMeta
        title="Try & Buy: Baumaschinen testen vor dem Kauf | Zoomlion NRW"
        description="Minibagger, Arbeitsbühne oder Teleskoplader erst mieten, dann kaufen. Testmiete wird 100 % auf den Kaufpreis angerechnet."
        url="https://www.zoomlion-nrw.de/try-and-buy"
      />

      {/* Hero — einzige Section mit Framer Motion */}
      <section className="relative overflow-hidden bg-secondary min-h-[calc(100vh-4rem)] flex items-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.18),transparent_55%),radial-gradient(circle_at_85%_80%,hsl(var(--primary)/0.10),transparent_55%)]"
        />
        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary mb-6"
              >
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Exklusives Angebot · Nur für Zoomlion NRW Kunden
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
              >
                Try & Buy: Baumaschinen testen
                <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent mt-2">
                  – dann entscheiden.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
              >
                Minibagger, Arbeitsbühne oder Teleskoplader von Zoomlion erst auf
                Ihrer Baustelle im Einsatz prüfen und bei Kauf{" "}
                <span className="text-primary font-semibold">
                  100 % der Testmiete
                </span>{" "}
                auf den Kaufpreis anrechnen lassen. Exklusiv in NRW bei Ihrem
                Zoomlion Fachhändler in Bonn, Krefeld und Mülheim an der Ruhr.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full px-8 shadow-lg shadow-primary/30"
                >
                  <Link
                    to="/kontakt?betreff=try-and-buy"
                    className="flex items-center"
                  >
                    Testmiete anfragen
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <a href="#ablauf">So funktioniert's</a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex justify-center relative min-h-[320px]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-primary/15 rounded-full"
              />
              <div className="relative max-w-lg w-full">
                <AnimatedExcavator className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — SEO-Intro */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="reveal-on-scroll font-heading text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Warum eine Baumaschine vor dem Kauf testen?
          </h2>
          <div className="reveal-on-scroll space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed">
            <p>
              Der Kauf einer Baumaschine ist eine Investition über mehrere Jahre
              – oft zwischen 20.000 € und über 150.000 €. Technische Datenblätter
              und Händlergespräche geben Ihnen einen ersten Eindruck, aber erst
              der Einsatz auf Ihrer Baustelle zeigt, ob{" "}
              <Link to="/bagger" className="text-primary underline">
                Zoomlion Minibagger
              </Link>
              ,{" "}
              <Link to="/arbeitsbuehnen" className="text-primary underline">
                Scherenbühnen
              </Link>{" "}
              oder Teleskoplader wirklich zu Ihrem Einsatzprofil passen: Passt
              die Maschine durch Ihre Einfahrt? Reicht die Hydraulikleistung für
              Ihren Meißelhammer? Wie bedient sich die Kabine über einen
              9-Stunden-Tag? Wie laut ist die Maschine im Wohngebiet? Wie
              schnell lädt die Lithium-Batterie einer elektrischen Scherenbühne
              auf Ihrer Baustelle wirklich?
            </p>
            <p>
              Mit unserem <strong>Try & Buy Programm</strong> beantworten Sie
              all diese Fragen in der Praxis – auf Ihrer Baustelle, mit Ihrem
              Team, bei Ihren Wetterbedingungen. Als{" "}
              <strong>
                exklusiver Zoomlion Fachhändler für Nordrhein-Westfalen
              </strong>{" "}
              geben wir Ihnen die Möglichkeit, jede Neumaschine aus unserem
              Portfolio als Testmiete einzusetzen. Entscheiden Sie sich
              anschließend für den Kauf, rechnen wir die komplette gezahlte
              Miete zu 100 % auf den Kaufpreis an. Entscheiden Sie sich dagegen,
              geben Sie die Maschine einfach zurück – zu den regulären
              Mietkonditionen, ohne Kaufzwang und ohne versteckte Kosten. Das
              ist der Unterschied zu klassischem Mietkauf: Sie tragen kein
              Restrisiko.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Vorteile */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="reveal-on-scroll text-center mb-14 md:mb-16 min-h-[120px]">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Ihre Vorteile
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mt-3">
              Ihre Vorteile mit Try & Buy in NRW
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="reveal-on-scroll h-full flex flex-col p-8 rounded-3xl border border-border bg-card transition-shadow duration-300 hover:shadow-xl min-h-[260px]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-6 transition-transform duration-300 hover:scale-110">
                  <b.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 tracking-tight">
                  {b.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — 4-Schritte */}
      <section id="ablauf" className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="reveal-on-scroll text-center mb-14 md:mb-16 min-h-[120px]">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              So funktioniert's
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mt-3">
              In 4 Schritten zur eigenen Zoomlion Baumaschine
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {steps.map((s, i) => (
              <div
                key={s.number}
                className="reveal-on-scroll h-full flex flex-col p-8 rounded-3xl bg-gradient-to-br from-card to-muted/30 border border-border relative overflow-hidden group min-h-[280px]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-heading text-6xl font-bold bg-gradient-to-br from-primary to-primary/40 bg-clip-text text-transparent mb-4">
                  {s.number}
                </span>
                <h3 className="font-heading text-xl font-bold mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
                <div
                  aria-hidden="true"
                  className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Welche Maschinen */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="reveal-on-scroll text-center mb-14 md:mb-16 min-h-[120px]">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Verfügbare Maschinen
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mt-3">
              Diese Zoomlion Baumaschinen können Sie testen
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 auto-rows-fr">
            {/* 5a Minibagger */}
            <div className="reveal-on-scroll h-full flex flex-col p-8 rounded-3xl border border-border bg-card min-h-[360px]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary mb-6">
                <Shovel className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 tracking-tight">
                Minibagger & Kompaktbagger
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Vom 2-Tonner bis zur 5,5-Tonnen-Klasse:{" "}
                <Link to="/bagger/ze20g" className="text-primary underline">
                  Zoomlion ZE20G
                </Link>{" "}
                (2,0 t),{" "}
                <Link to="/bagger/ze27gu" className="text-primary underline">
                  ZE27GU
                </Link>{" "}
                (2,7 t, Null-Heck),{" "}
                <Link to="/bagger/ze55gu" className="text-primary underline">
                  ZE55GU
                </Link>{" "}
                (5,5 t Kompaktbagger). Ideal für Tiefbau, Garten- und
                Landschaftsbau, Kanalbau, Abbruch im Innenbereich und kommunale
                Einsätze. Alle Modelle mit EU-Stage-V-Motor, optional mit
                Schnellwechsler, Hydraulikhammer-Vorbereitung und
                Tiltrotator-Option.
              </p>
              <Button asChild variant="outline" className="mt-6 w-full">
                <Link to="/kontakt?betreff=try-and-buy-bagger">
                  Minibagger testen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* 5b Arbeitsbühnen */}
            <div className="reveal-on-scroll h-full flex flex-col p-8 rounded-3xl border border-border bg-card min-h-[360px]" style={{ transitionDelay: "80ms" }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary mb-6">
                <ChevronsUp className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 tracking-tight">
                Arbeitsbühnen & Scherenbühnen
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Elektrische Scherenbühnen mit Lithium-Ionen-Technologie:{" "}
                <Link to="/arbeitsbuehnen/zs0607ac-li" className="text-primary underline">
                  Zoomlion ZS0607AC-Li
                </Link>{" "}
                (6 m Arbeitshöhe),{" "}
                <Link to="/arbeitsbuehnen/zs1012ac-li" className="text-primary underline">
                  ZS1012AC-Li
                </Link>{" "}
                (10 m Arbeitshöhe). Teleskopmastbühnen: ZMP06,{" "}
                <Link to="/arbeitsbuehnen/zmp09j" className="text-primary underline">
                  ZMP09J
                </Link>
                . Emissionsfrei, leise, ideal für Innenraum-Montage, Hallenbau,
                Fassadenarbeiten und Ladenbau. Alle Bühnen mit CE-Abnahme und
                Betreiberschulung.
              </p>
              <Button asChild variant="outline" className="mt-6 w-full">
                <Link to="/kontakt?betreff=try-and-buy-arbeitsbuehne">
                  Arbeitsbühne testen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* 5c Teleskoplader */}
            <div className="reveal-on-scroll h-full flex flex-col p-8 rounded-3xl border border-border bg-card min-h-[360px]" style={{ transitionDelay: "160ms" }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary mb-6">
                <Forklift className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 tracking-tight">
                Teleskoplader
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                <Link to="/teleskoplader" className="text-primary underline">
                  Zoomlion Teleskoplader
                </Link>{" "}
                für Landwirtschaft, Bauhof und Industrie – in Reichweite und
                Tragkraft abgestimmt auf mittelständische Einsätze. Alle Modelle
                mit moderner Hydrostat-Antriebsarchitektur und Komfortkabine.
              </p>
              <Button asChild variant="outline" className="mt-6 w-full">
                <Link to="/kontakt?betreff=try-and-buy-teleskoplader">
                  Teleskoplader testen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Vergleich */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="reveal-on-scroll text-center mb-10 md:mb-14 min-h-[120px]">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Modellvergleich
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mt-3">
              Try & Buy, Mietkauf oder Leasing — welches Modell passt?
            </h2>
          </div>

          <div className="reveal-on-scroll text-base md:text-lg text-foreground/85 leading-relaxed mb-10 space-y-4">
            <p>
              Im Baumaschinenmarkt kursieren mehrere Begriffe für ähnliche
              Modelle, die sich aber rechtlich und wirtschaftlich stark
              unterscheiden. Der klassische <strong>Mietkauf</strong> (§ 449 BGB)
              ist eine Ratenfinanzierung mit Eigentumsvorbehalt – Sie müssen am
              Ende in jedem Fall kaufen, eine Rückgabe ist ausgeschlossen. Beim{" "}
              <strong>Leasing</strong> zahlen Sie eine Nutzungsgebühr und geben
              die Maschine nach Vertragsende meist zurück – Eigentum wird nicht
              übertragen. <strong>Try & Buy</strong> ist das flexibelste Modell:
              Sie mieten klassisch nach § 535 BGB, behalten während der
              Testphase volle Rückgabefreiheit und sichern sich nur für den Fall
              eines Kaufs die 100 % Mietanrechnung. Kein Eigentumsvorbehalt,
              kein Bonitätscheck für die Testphase, keine lange Vertragsbindung.
              Detaillierte Konditionen finden Sie in unserer{" "}
              <Link to="/finanzierung" className="text-primary underline">
                Finanzierungsübersicht
              </Link>
              .
            </p>
          </div>

          <div className="reveal-on-scroll overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-muted/60 text-left">
                <tr>
                  <th scope="col" className="p-4 font-semibold">Kriterium</th>
                  <th scope="col" className="p-4 font-semibold text-primary">Try & Buy</th>
                  <th scope="col" className="p-4 font-semibold">Mietkauf</th>
                  <th scope="col" className="p-4 font-semibold">Leasing</th>
                </tr>
              </thead>
              <tbody className="[&>tr]:border-t [&>tr]:border-border">
                <tr>
                  <td className="p-4 font-medium">Rückgabe möglich</td>
                  <td className="p-4 text-primary">✔ Ja, jederzeit zum Mietende</td>
                  <td className="p-4">✘ Nein</td>
                  <td className="p-4">✔ Bei Vertragsende</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Eigentum am Ende</td>
                  <td className="p-4 text-primary">Optional (bei Kauf)</td>
                  <td className="p-4">✔ Automatisch</td>
                  <td className="p-4">✘ Meist Rückgabe</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Bonitätsprüfung</td>
                  <td className="p-4 text-primary">Für Testphase nicht nötig</td>
                  <td className="p-4">✔ Erforderlich</td>
                  <td className="p-4">✔ Erforderlich</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Mietanrechnung</td>
                  <td className="p-4 text-primary">✔ 100 % bei Kauf</td>
                  <td className="p-4">Teilweise</td>
                  <td className="p-4">✘ Keine</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Flexibilität</td>
                  <td className="p-4 text-primary">Sehr hoch</td>
                  <td className="p-4">Niedrig (starre Laufzeit)</td>
                  <td className="p-4">Mittel</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Ideal für</td>
                  <td className="p-4 text-primary">Kaufentscheidung absichern</td>
                  <td className="p-4">Sichere Investition</td>
                  <td className="p-4">Flottenmodernisierung</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 7 — Region */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="reveal-on-scroll text-center mb-10 min-h-[120px]">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Liefergebiet
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mt-3">
              Testmiete in ganz Nordrhein-Westfalen
            </h2>
          </div>

          <p className="reveal-on-scroll text-base md:text-lg text-foreground/85 leading-relaxed mb-10">
            Als exklusiver Zoomlion Fachhändler für NRW liefern wir Testmaschinen
            in das gesamte Bundesland. Von unseren drei Standorten in{" "}
            <Link to="/standorte/krefeld" className="text-primary underline">
              Krefeld
            </Link>{" "}
            (Anrather Straße 291),{" "}
            <Link to="/standorte/bonn" className="text-primary underline">
              Bonn
            </Link>{" "}
            und{" "}
            <Link to="/standorte/muelheim" className="text-primary underline">
              Mülheim an der Ruhr
            </Link>{" "}
            erreichen wir jede Baustelle in Nordrhein-Westfalen innerhalb von 24
            bis 48 Stunden. Regelmäßige Einsatzregionen unserer
            Try-&-Buy-Maschinen sind das Rheinland (
            <strong>Köln, Düsseldorf, Leverkusen, Solingen, Bonn</strong>), das
            Ruhrgebiet (
            <strong>
              Essen, Dortmund, Duisburg, Bochum, Gelsenkirchen, Oberhausen,
              Mülheim
            </strong>
            ), der Niederrhein (
            <strong>Krefeld, Mönchengladbach, Wuppertal</strong>) sowie das
            Münsterland und Ostwestfalen (<strong>Münster, Bielefeld</strong>).
            Fragen Sie jetzt Ihre Testmiete an – wir nennen Ihnen unverbindlich
            den nächsten verfügbaren Liefertermin.
          </p>

          <div className="reveal-on-scroll flex flex-wrap gap-2">
            {regions.map((r) => (
              <Link
                key={r.name}
                to={r.to}
                className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — FAQ als native <details> */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="reveal-on-scroll text-center mb-14 min-h-[120px]">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mt-3">
              Häufige Fragen zu Try & Buy
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.question}
                className="reveal-on-scroll group rounded-2xl border border-border bg-card p-6 open:shadow-md transition-shadow min-h-[80px]"
              >
                <summary className="flex cursor-pointer list-none items-start gap-3 font-heading font-bold text-base md:text-lg text-foreground">
                  <CheckCircle2
                    className="h-5 w-5 text-primary shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span className="flex-1">{f.question}</span>
                  <span
                    aria-hidden="true"
                    className="ml-2 mt-1 text-primary transition-transform group-open:rotate-45 select-none"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-4 pl-8 text-muted-foreground leading-relaxed text-sm md:text-base">
                  {f.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 — Final CTA */}
      <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
        />
        <div className="reveal-on-scroll container relative mx-auto px-4 text-center max-w-3xl min-h-[280px]">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Bereit, Ihre nächste Baumaschine
            <br />
            unverbindlich zu testen?
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed">
            Sprechen Sie direkt mit unserem Verkaufsteam in Krefeld – wir finden
            die passende Maschine aus dem Zoomlion Portfolio und einen fairen
            Testzeitraum für Ihr Projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="group rounded-full px-10 shadow-2xl shadow-primary/30"
            >
              <Link
                to="/kontakt?betreff=try-and-buy"
                className="flex items-center text-base"
              >
                Jetzt Testmiete anfragen
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-10 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <a href="tel:+4921514179904" className="flex items-center text-base">
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                02151 4179904
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer-Links */}
      <section className="py-10 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col sm:flex-row gap-4 justify-between text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary underline-offset-4 hover:underline">
            ← Zurück zu allen Maschinen
          </Link>
          <a
            href="https://slt-rental.de"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary underline-offset-4 hover:underline"
          >
            Vermietung statt Kauf? → slt-rental.de
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default TryAndBuy;
