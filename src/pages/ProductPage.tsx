import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Download, CheckCircle2, ChevronRight, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SocialMeta } from "@/components/shared/SocialMeta";
import { InquiryModal } from "@/components/configurator/InquiryModal";
import {
  type ProductCategory,
  type ProductPage as ProductPageType,
  getProductPageBySlug,
  getProductPagesByCategory,
} from "@/data/productPages";
import { getProductImage } from "@/data/productImages";
import { SITE_URL } from "@/data/seoRoutes";

const categoryToInquiryType: Record<ProductCategory, "bagger" | "arbeitsbuehne"> = {
  bagger: "bagger",
  arbeitsbuehnen: "arbeitsbuehne",
};

interface ProductPageProps {
  category: ProductCategory;
}

const categoryParentPath: Record<ProductCategory, string> = {
  bagger: "/bagger",
  arbeitsbuehnen: "/arbeitsbuehnen",
};

const categoryParentLabel: Record<ProductCategory, string> = {
  bagger: "Bagger",
  arbeitsbuehnen: "Arbeitsbühnen",
};

// JSON-LD wird zentral vom Prerender-Skript (scripts/prerender.ts) injiziert.

export default function ProductPage({ category }: ProductPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductPageBySlug(slug) : undefined;
  const [inquiryOpen, setInquiryOpen] = useState(false);

  if (!product || product.category !== category) {
    return <Navigate to="/404" replace />;
  }

  const url = `${SITE_URL}${categoryParentPath[category]}/${product.slug}/`;
  const title = `${product.name} kaufen | Zoomlion NRW`;
  const description = `${product.tagline} Exklusiver Zoomlion-Fachhändler in NRW, 3 Jahre Garantie, Probefahrt in Bonn, Krefeld & Mülheim.`.slice(
    0,
    160,
  );

  const related = product.relatedSlugs
    .map((s) => getProductPageBySlug(s))
    .filter((p): p is ProductPageType => Boolean(p));

  // Sicher: Verwandte aus selber Kategorie für sinnvolle Links
  const relatedSameCategory = getProductPagesByCategory(category).filter(
    (p) => p.slug !== product.slug,
  );
  const relatedToShow = related.length > 0 ? related : relatedSameCategory.slice(0, 3);

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
      </Helmet>
      <SocialMeta
        title={title}
        description={description}
        url={url}
        type="product"
        image={`${SITE_URL}${product.imagePublicPath}`}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="container mx-auto px-4 pt-6 text-sm text-muted-foreground"
      >
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link to="/" className="hover:text-primary">
              Start
            </Link>
          </li>
          <li>
            <ChevronRight className="inline h-3.5 w-3.5" />
          </li>
          <li>
            <Link to={categoryParentPath[category]} className="hover:text-primary">
              {categoryParentLabel[category]}
            </Link>
          </li>
          <li>
            <ChevronRight className="inline h-3.5 w-3.5" />
          </li>
          <li className="text-foreground" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-4 py-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-xl bg-muted/40 p-6 flex items-center justify-center">
            <img
              src={getProductImage(product.slug) ?? product.imagePublicPath}
              alt={`${product.name} – ${product.typeLabel}`}
              className="max-h-[420px] w-auto object-contain"
              loading="eager"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {product.categoryLabel} · {product.typeLabel}
            </p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              {product.name} kaufen
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{product.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={() => setInquiryOpen(true)}>
                Angebot anfordern
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={product.datasheetPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Datenblatt herunterladen (PDF)
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Preis auf Anfrage · 3 Jahre Garantie · Made in EU
            </p>
          </div>
        </div>
      </section>

      {/* Beschreibung */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl space-y-4 text-base leading-relaxed">
          {product.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* USPs */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="font-heading text-2xl font-bold mb-6">Ihre Vorteile</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {product.usps.map((u, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
              <span>{u}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Einsatzbereiche */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="font-heading text-2xl font-bold mb-6">Typische Einsatzbereiche</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.useCases.map((u, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">{u.title}</h3>
                <p className="text-sm text-muted-foreground">{u.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech-Daten */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="font-heading text-2xl font-bold mb-6">Technische Daten</h2>
        <Accordion
          type="multiple"
          defaultValue={product.specGroups.map((g) => g.heading)}
          className="w-full"
        >
          {product.specGroups.map((g) => (
            <AccordionItem key={g.heading} value={g.heading}>
              <AccordionTrigger className="text-left">{g.heading}</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      {g.specs.map((s, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <th
                            scope="row"
                            className="text-left font-medium text-muted-foreground py-2 pr-4 align-top w-1/2"
                          >
                            {s.label}
                          </th>
                          <td className="py-2 align-top">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-6 text-sm text-muted-foreground">
          Vollständige technische Daten im offiziellen Zoomlion-Datenblatt:{" "}
          <a
            href={product.datasheetPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline"
          >
            PDF herunterladen
          </a>
        </p>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="font-heading text-2xl font-bold mb-6">Häufige Fragen zum {product.name}</h2>
        <Accordion type="single" collapsible className="w-full">
          {product.faq.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
              <AccordionContent>{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Verwandte Modelle */}
      {relatedToShow.length > 0 && (
        <section className="container mx-auto px-4 py-8">
          <h2 className="font-heading text-2xl font-bold mb-6">Verwandte Modelle</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedToShow.map((r) => (
              <Card key={r.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Link to={`${categoryParentPath[r.category]}/${r.slug}`}>
                  <div className="bg-muted/40 p-4 flex items-center justify-center h-40">
                    <img
                      src={getProductImage(r.slug) ?? r.imagePublicPath}
                      alt={r.name}
                      className="max-h-32 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-xs text-primary font-semibold uppercase">
                      {r.typeLabel}
                    </p>
                    <h3 className="font-semibold mt-1">{r.name}</h3>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* CTA-Footer Standorte */}
      <section className="bg-muted/40 py-12 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold mb-3">
            Probefahrt an einem unserer 3 Standorte in NRW
          </h2>
          <p className="text-muted-foreground mb-6">
            Erleben Sie den {product.name} live – wir vereinbaren gerne einen Termin.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline">
              <Link to="/standorte/krefeld">
                <MapPin className="mr-2 h-4 w-4" /> Krefeld
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/standorte/bonn">
                <MapPin className="mr-2 h-4 w-4" /> Bonn
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/standorte/muelheim">
                <MapPin className="mr-2 h-4 w-4" /> Mülheim a. d. Ruhr
              </Link>
            </Button>
          </div>
          <div className="mt-6">
            <Button size="lg" onClick={() => setInquiryOpen(true)}>
              Jetzt Angebot anfordern
            </Button>
          </div>
        </div>
      </section>

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        type={categoryToInquiryType[category]}
        selectedProduct={product.name}
      />
    </Layout>
  );
}
