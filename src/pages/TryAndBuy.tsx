import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Wrench, Euro, Shield, Truck, Sparkles } from "lucide-react";
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
  { number: "01", title: "Maschine auswählen", description: "Wählen Sie aus unserem Sortiment an Arbeitsbühnen, Baggern oder Teleskopladern." },
  { number: "02", title: "Testphase vereinbaren", description: "Wir vereinbaren einen Mietzeitraum, der zu Ihrem Projekt passt." },
  { number: "03", title: "Im Einsatz überzeugen", description: "Testen Sie die Maschine unter realen Bedingungen auf Ihrer Baustelle." },
  { number: "04", title: "Kaufen & sparen", description: "Bei Übernahme wird die gesamte Miete zu 100 % auf den Kaufpreis angerechnet." }
];

const faqs = [
  { question: "Wie lange kann ich eine Maschine testen?", answer: "Die Testdauer ist flexibel und richtet sich nach Ihrem Projekt – typischerweise zwischen 2 Wochen und 3 Monaten." },
  { question: "Wird wirklich die komplette Miete angerechnet?", answer: "Ja. Bei einer Kaufentscheidung im Anschluss an die Testmiete wird 100 % der gezahlten Miete auf den Kaufpreis angerechnet." },
  { question: "Was passiert, wenn ich die Maschine doch nicht kaufe?", answer: "Kein Problem – Sie zahlen nur die reguläre Miete und geben die Maschine zurück. Keine versteckten Kosten." },
  { question: "Welche Maschinen sind für Try & Buy verfügbar?", answer: "Grundsätzlich alle Modelle aus unserem Zoomlion-Portfolio: Arbeitsbühnen, Bagger und Teleskoplader. Bitte sprechen Sie uns für Details an." }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
};

const TryAndBuy = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);

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
        <meta name="description" content="Try & Buy bei Zoomlion NRW: Bagger, Arbeitsbühne oder Teleskoplader risikolos testen ✓ 100 % der Testmiete wird auf den Kaufpreis angerechnet ✓ Made in EU." />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/try-and-buy" />
        <meta property="og:title" content="Try & Buy – Baumaschine testen statt blind kaufen | Zoomlion NRW" />
        <meta property="og:description" content="Testen Sie Bagger, Arbeitsbühnen & Teleskoplader im echten Einsatz. Die komplette Miete wird beim Kauf angerechnet." />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      {/* Hero with parallax */}
      <section ref={heroRef} className="relative overflow-hidden bg-secondary min-h-[90vh] flex items-center">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container relative mx-auto px-4 py-20 md:py-28"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary mb-6"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Exklusives Angebot
              </motion.div>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
              >
                Try & Buy.
                <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent mt-2">
                  Erst testen.<br />Dann kaufen.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
              >
                Überzeugen Sie sich im echten Einsatz von unserer Qualität – und sparen Sie bei Kauf{" "}
                <span className="text-primary font-semibold">100 % der Testmiete</span>.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="group rounded-full px-8 shadow-lg shadow-primary/30">
                  <Link to="/kontakt?betreff=try-and-buy" className="flex items-center">
                    Testmiete anfragen
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white/15 hover:text-white">
                  <a href="#ablauf">So funktioniert's</a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ scale: imageScale, rotate: imageRotate }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex justify-center relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <motion.img
                src={tryAndBuyImage}
                alt="Try & Buy – Bagger testen und kaufen"
                className="relative max-w-md w-full drop-shadow-2xl"
                width={768}
                height={768}
                loading="lazy"
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              className="h-2 w-1 rounded-full bg-white/60"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Big quote / value statement */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground"
          >
            Eine Maschine kauft man nicht blind.{" "}
            <span className="text-muted-foreground/60">Deshalb gibt es </span>
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Try & Buy</span>
            <span className="text-muted-foreground/60">.</span>
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Ihre Vorteile</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mt-3">Warum Try & Buy?</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr"
          >
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="h-full flex flex-col p-8 rounded-3xl border border-border bg-card hover:shadow-2xl hover:shadow-primary/5 transition-shadow"
              >
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-6"
                >
                  <b.icon className="h-7 w-7" />
                </motion.div>
                <h3 className="font-heading text-xl font-bold mb-3 tracking-tight">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Steps with progress line */}
      <section id="ablauf" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">So funktioniert's</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mt-3">In 4 Schritten zur Maschine</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.number}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="h-full flex flex-col p-8 rounded-3xl bg-gradient-to-br from-card to-muted/30 border border-border relative overflow-hidden group"
              >
                <motion.span
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="font-heading text-6xl font-bold bg-gradient-to-br from-primary to-primary/40 bg-clip-text text-transparent mb-4"
                >
                  {s.number}
                </motion.span>
                <h3 className="font-heading text-xl font-bold mb-3 tracking-tight">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mt-3">Häufige Fragen</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="space-y-4"
          >
            {faqs.map((f) => (
              <motion.div
                key={f.question}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.01 }}
                className="p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="font-heading font-bold text-lg mb-3 flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span>{f.question}</span>
                </h3>
                <p className="text-muted-foreground pl-8 leading-relaxed">{f.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="container relative mx-auto px-4 text-center max-w-3xl"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Bereit, sich selbst<br />zu überzeugen?
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed">
            Sprechen Sie mit unserem Team – wir finden die passende Maschine und einen fairen Testzeitraum für Ihr Projekt.
          </p>
          <Button asChild size="lg" className="group rounded-full px-10 shadow-2xl shadow-primary/30">
            <Link to="/kontakt?betreff=try-and-buy" className="flex items-center text-base">
              Jetzt Testmiete anfragen
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </Layout>
  );
};

export default TryAndBuy;
