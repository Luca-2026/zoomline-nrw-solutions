import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, FileText, Wrench, ShieldCheck } from "lucide-react";

const STAND = "23.04.2026";

const docs = [
  {
    title: "AGB Verkauf",
    desc: "Verkauf von Neu- und Gebrauchtmaschinen",
    href: "/agb/verkauf",
    pdf: "/dokumente/agb-verkauf.pdf",
    pdfName: "AGB-Verkauf-Zoomlion-NRW.pdf",
    icon: ShieldCheck,
  },
  {
    title: "AGB Vermietung",
    desc: "Vermietung von Baumaschinen & Zubehör",
    href: "/agb/vermietung",
    pdf: "/dokumente/agb-vermietung.pdf",
    pdfName: "AGB-Vermietung-Zoomlion-NRW.pdf",
    icon: Wrench,
  },
  {
    title: "Widerrufsbelehrung",
    desc: "Für Verbraucher im Fernabsatz",
    href: "/widerrufsbelehrung",
    pdf: "/dokumente/widerrufsbelehrung.pdf",
    pdfName: "Widerrufsbelehrung-Zoomlion-NRW.pdf",
    icon: FileText,
  },
];

const AGBUebersicht = () => (
  <Layout showCTABar={false}>
    <Helmet>
      <title>AGB & Widerrufsbelehrung | Zoomlion NRW</title>
      <meta
        name="description"
        content="Allgemeine Geschäftsbedingungen für Verkauf und Vermietung sowie die Widerrufsbelehrung der SLT Technology Group GmbH & Co. KG."
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href="https://www.zoomlion-nrw.de/agb/" />
    </Helmet>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary bg-accent rounded-full">
            Rechtliches
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Hier finden Sie unsere AGB für den Verkauf und die Vermietung von Baumaschinen sowie die
            Widerrufsbelehrung für Verbraucher. Alle Dokumente stehen zusätzlich als PDF zum
            Download bereit.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {docs.map(({ title, desc, href, pdf, pdfName, icon: Icon }) => (
            <div
              key={href}
              className="rounded-xl border border-border bg-card p-6 flex flex-col"
            >
              <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-heading text-xl font-bold mb-2">{title}</h2>
              <p className="text-sm text-muted-foreground mb-3">{desc}</p>
              <p className="text-xs text-muted-foreground mb-5">Stand: {STAND}</p>
              <div className="mt-auto flex flex-col gap-2">
                <Button asChild variant="outline" size="sm">
                  <a href={pdf} download={pdfName}>
                    <Download className="mr-2 h-4 w-4" /> PDF herunterladen
                  </a>
                </Button>
                <Button asChild size="sm">
                  <Link to={href}>
                    Online lesen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          <Link to="/agb/archiv" className="underline hover:text-primary">
            Archivierte Versionen anzeigen
          </Link>
        </p>
      </div>
    </section>
  </Layout>
);

export default AGBUebersicht;
