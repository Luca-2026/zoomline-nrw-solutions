import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, FileText } from "lucide-react";

export interface TocItem {
  id: string;
  label: string;
}

interface LegalDocLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  standDatum: string;
  version?: string;
  pdfHref?: string;
  pdfFilename?: string;
  toc?: TocItem[];
  children: ReactNode;
}

export function LegalDocLayout({
  title,
  metaTitle,
  metaDescription,
  canonical,
  standDatum,
  version = "1.0",
  pdfHref,
  pdfFilename,
  toc,
  children,
}: LegalDocLayoutProps) {
  return (
    <Layout showCTABar={false}>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10 max-w-6xl mx-auto">
            {/* Sticky TOC desktop */}
            {toc && toc.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Inhalt
                  </p>
                  <nav className="space-y-1.5 text-sm">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-muted-foreground hover:text-primary transition-colors leading-snug"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            <div className="max-w-3xl">
              <div className="mb-6">
                <Link
                  to="/agb"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" /> Zur AGB-Übersicht
                </Link>
              </div>

              <header className="mb-8 pb-6 border-b border-border">
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  {title}
                </h1>
                <p className="mt-3 text-sm text-muted-foreground">
                  Stand: {standDatum} · Version {version} ·{" "}
                  <Link to="/agb/archiv" className="underline hover:text-primary">
                    Archivierte Versionen
                  </Link>
                </p>
                {pdfHref && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button asChild>
                      <a href={pdfHref} download={pdfFilename}>
                        <Download className="mr-2 h-4 w-4" /> PDF herunterladen
                      </a>
                    </Button>
                  </div>
                )}
              </header>

              {/* Mobile TOC */}
              {toc && toc.length > 0 && (
                <details className="lg:hidden mb-8 rounded-lg border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-sm flex items-center gap-2">
                    <FileText className="h-4 w-4" /> Inhaltsverzeichnis
                  </summary>
                  <nav className="mt-3 space-y-2 text-sm">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-muted-foreground hover:text-primary"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </details>
              )}

              <article className="legal-prose">{children}</article>

              <footer className="mt-12 pt-6 border-t border-border flex flex-wrap gap-4 text-sm">
                <Link to="/agb" className="text-primary hover:underline">
                  ← Zur AGB-Übersicht
                </Link>
                <Link to="/impressum" className="text-muted-foreground hover:text-primary">
                  Impressum
                </Link>
                <Link to="/datenschutz" className="text-muted-foreground hover:text-primary">
                  Datenschutz
                </Link>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
