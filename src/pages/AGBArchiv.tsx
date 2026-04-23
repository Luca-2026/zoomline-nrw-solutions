import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const AGBArchiv = () => (
  <Layout showCTABar={false}>
    <Helmet>
      <title>AGB Archiv | Zoomlion NRW</title>
      <meta name="description" content="Archivierte Versionen unserer AGB." />
      <meta name="robots" content="noindex,follow" />
      <link rel="canonical" href="https://www.zoomlion-nrw.de/agb/archiv/" />
    </Helmet>
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">AGB Archiv</h1>
        <p className="text-muted-foreground mb-6">
          Hier werden ältere Versionen unserer AGB zur Einsicht bereitgestellt.
        </p>
        <div className="rounded-lg border border-border bg-card p-6 text-muted-foreground">
          Keine archivierten Versionen vorhanden.
        </div>
        <div className="mt-8">
          <Link to="/agb" className="text-primary hover:underline text-sm">
            ← Zur AGB-Übersicht
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default AGBArchiv;
