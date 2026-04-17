import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CheckCircle2, ArrowRight, Wrench, Euro, Shield, Truck } from "lucide-react";
import tryAndBuyImage from "@/assets/try-and-buy.png";

const benefits = [
  {
    icon: Shield,
    title: "Risikolos testen",
    description: "Überzeugen Sie sich im echten Einsatz von der Qualität – ganz ohne Kaufverpflichtung."
  },
  {
    icon: Euro,
    title: "100 % Anrechnung",
    description: "Die komplette Testmiete wird beim Kauf vollständig auf den Kaufpreis angerechnet."
  },
  {
    icon: Wrench,
    title: "Service inklusive",
    description: "Während der Testphase profitieren Sie von unserem vollen Service- und Ersatzteil-Support."
  },
  {
    icon: Truck,
    title: "Lieferung & Einweisung",
    description: "Wir liefern die Maschine direkt zu Ihrer Baustelle und weisen Ihr Team fachgerecht ein."
  }
];

const steps = [
  {
    number: "01",
    title: "Maschine auswählen",
    description: "Wählen Sie aus unserem Sortiment an Arbeitsbühnen, Baggern oder Teleskopladern."
  },
  {
    number: "02",
    title: "Testphase vereinbaren",
    description: "Wir vereinbaren einen Mietzeitraum, der zu Ihrem Projekt passt."
  },
  {
    number: "03",
    title: "Im Einsatz überzeugen",
    description: "Testen Sie die Maschine unter realen Bedingungen auf Ihrer Baustelle."
  },
  {
    number: "04",
    title: "Kaufen & sparen",
    description: "Bei Übernahme wird die gesamte Miete zu 100 % auf den Kaufpreis angerechnet."
  }
];

const faqs = [
  {
    question: "Wie lange kann ich eine Maschine testen?",
    answer: "Die Testdauer ist flexibel und richtet sich nach Ihrem Projekt – typischerweise zwischen 2 Wochen und 3 Monaten."
  },
  {
    question: "Wird wirklich die komplette Miete angerechnet?",
    answer: "Ja. Bei einer Kaufentscheidung im Anschluss an die Testmiete wird 100 % der gezahlten Miete auf den Kaufpreis angerechnet."
  },
  {
    question: "Was passiert, wenn ich die Maschine doch nicht kaufe?",
    answer: "Kein Problem – Sie zahlen nur die reguläre Miete und geben die Maschine zurück. Keine versteckten Kosten."
  },
  {
    question: "Welche Maschinen sind für Try & Buy verfügbar?",
    answer: "Grundsätzlich alle Modelle aus unserem Zoomlion-Portfolio: Arbeitsbühnen, Bagger und Teleskoplader. Bitte sprechen Sie uns für Details an."
  }
];

const TryAndBuy = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>Try & Buy – Baumaschine testen, Miete wird voll angerechnet | Zoomlion NRW</title>
        <meta
          name="description"
          content="Try & Buy bei Zoomlion NRW: Bagger, Arbeitsbühne oder Teleskoplader risikolos testen ✓ 100 % der Testmiete wird auf den Kaufpreis angerechnet ✓ Made in EU. Jetzt Testmiete anfragen!"
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/try-and-buy" />
        <meta property="og:title" content="Try & Buy – Baumaschine testen statt blind kaufen | Zoomlion NRW" />
        <meta property="og:description" content="Testen Sie Bagger, Arbeitsbühnen & Teleskoplader im echten Einsatz. Die komplette Miete wird beim Kauf angerechnet." />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                Exklusives Angebot
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Try & Buy:
                <span className="block text-primary mt-2">Erst testen, dann kaufen</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90">
                Überzeugen Sie sich im echten Einsatz von der Qualität unserer Zoomlion-Maschinen –
                und sparen Sie bei Kauf <strong className="text-primary">100 % der Testmiete</strong>.
              </p>
              <p className="mt-4 text-base text-white/80">
                Zoomlion ist etablierter White-Label-Hersteller für viele bekannte Marken in Europa –
                jetzt erstmals unter eigener Marke verfügbar. Testen Sie selbst, warum.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt?betreff=try-and-buy" className="flex items-center">
                    Testmiete anfragen
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                  <a href="#ablauf">So funktioniert's</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src={tryAndBuyImage}
                alt="Try & Buy – Bagger testen und kaufen"
                className="max-w-md w-full"
                width={768}
                height={768}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Ihre Vorteile"
            title="Warum Try & Buy?"
            subtitle="Eine echte Investition will erprobt sein – wir machen es Ihnen einfach"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {benefits.map((b) => (
              <div key={b.title} className="h-full flex flex-col p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary mb-4">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="So funktioniert's"
            title="In 4 Schritten zur passenden Maschine"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {steps.map((s) => (
              <div key={s.number} className="h-full flex flex-col p-6 rounded-xl bg-card border border-border">
                <span className="font-heading text-4xl font-bold text-primary mb-3">{s.number}</span>
                <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading badge="FAQ" title="Häufige Fragen zu Try & Buy" />
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.question} className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-heading font-bold text-lg mb-2 flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                  {f.question}
                </h3>
                <p className="text-muted-foreground pl-7">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit, sich selbst zu überzeugen?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Sprechen Sie mit unserem Team – wir finden die passende Maschine und einen fairen Testzeitraum für Ihr Projekt.
          </p>
          <Button asChild size="lg" className="group">
            <Link to="/kontakt?betreff=try-and-buy" className="flex items-center">
              Jetzt Testmiete anfragen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default TryAndBuy;
