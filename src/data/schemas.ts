/**
 * Zentrale JSON-LD Schema-Builder pro Route-Typ.
 *
 * Diese Builder werden ausschließlich vom Build-Time-Prerender-Skript
 * (scripts/prerender.ts) konsumiert und in das jeweilige
 * dist/<route>/index.html VOR </head> eingefügt – nach den globalen
 * Organization- und WebSite-Schemas aus index.html.
 *
 * Die Funktionen sind reine Datenfabriken (keine React/JSX-Importe),
 * damit sie problemlos in Node/tsx ausgeführt werden können.
 */

import { SITE_URL } from "./seoRoutes";
import { PRODUCT_PAGES, type ProductPage } from "./productPages";
import { STANDORTE, type StandortInfo, resolveStandort } from "./standorte";
import type { StadtData } from "./staedte";

type Schema = Record<string, unknown>;

const CATEGORY_LABEL: Record<"bagger" | "arbeitsbuehnen", string> = {
  bagger: "Minibagger",
  arbeitsbuehnen: "Arbeitsbühnen",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function buildBreadcrumb(
  items: Array<{ name: string; url: string }>,
): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

// ---------------------------------------------------------------------------
// Product (Detailseiten)
// ---------------------------------------------------------------------------

export function buildProductSchemas(product: ProductPage): Schema[] {
  const url = `${SITE_URL}/${product.category}/${product.slug}/`;

  const additionalProperty = product.specGroups
    .flatMap((g) => g.specs)
    .filter((s) => s.schemaName && s.schemaValue !== undefined)
    .map((s) => ({
      "@type": "PropertyValue",
      name: s.schemaName,
      value: s.schemaValue,
      ...(s.schemaUnit ? { unitCode: s.schemaUnit } : {}),
    }));

  const productSchema: Schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    alternateName: product.alternateNames,
    description: product.description.join(" "),
    image: [`${SITE_URL}${product.imagePublicPath}`],
    sku: product.slug.toUpperCase(),
    mpn: product.slug.toUpperCase(),
    category: product.categoryLabel,
    brand: { "@type": "Brand", name: "Zoomlion" },
    manufacturer: {
      "@type": "Organization",
      name: "Zoomlion Heavy Industry Science & Technology Co., Ltd.",
      url: "https://en.zoomlion.com/",
    },
    countryOfOrigin: product.countryOfOrigin,
    additionalProperty,
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "EUR",
      ...(product.priceFrom ? { price: product.priceFrom } : {}),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "AutomotiveBusiness",
        "@id": `${SITE_URL}/standorte/krefeld/#localbusiness`,
      },
    },
  };

  const faqSchema: Schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumb = buildBreadcrumb([
    { name: "Start", url: `${SITE_URL}/` },
    {
      name: CATEGORY_LABEL[product.category],
      url: `${SITE_URL}/${product.category}/`,
    },
    { name: product.name, url },
  ]);

  return [productSchema, faqSchema, breadcrumb];
}

// ---------------------------------------------------------------------------
// Kategorie-Übersichten (/bagger/, /arbeitsbuehnen/, /teleskoplader/)
// ---------------------------------------------------------------------------

export function buildCategorySchemas(
  category: "bagger" | "arbeitsbuehnen" | "teleskoplader",
): Schema[] {
  const url = `${SITE_URL}/${category}/`;
  const label =
    category === "teleskoplader" ? "Teleskoplader" : CATEGORY_LABEL[category];

  // Teleskoplader hat (noch) keine Detailseiten in PRODUCT_PAGES – ItemList leer
  const pages =
    category === "teleskoplader"
      ? []
      : PRODUCT_PAGES.filter((p) => p.category === category);

  const collection: Schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": url,
    name: `Zoomlion ${label} kaufen in NRW`,
    url,
    inLanguage: "de-DE",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: pages.length,
      itemListElement: pages.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/${p.category}/${p.slug}/`,
        item: {
          "@type": "Product",
          "@id": `${SITE_URL}/${p.category}/${p.slug}/#product`,
          name: p.name,
          image: `${SITE_URL}${p.imagePublicPath}`,
          url: `${SITE_URL}/${p.category}/${p.slug}/`,
          brand: { "@type": "Brand", name: "Zoomlion" },
          category: p.categoryLabel,
          offers: {
            "@type": "Offer",
            url: `${SITE_URL}/${p.category}/${p.slug}/`,
            availability: "https://schema.org/InStock",
            priceCurrency: "EUR",
            itemCondition: "https://schema.org/NewCondition",
            seller: {
              "@type": "AutomotiveBusiness",
              "@id": `${SITE_URL}/standorte/krefeld/#localbusiness`,
            },
          },
        },
      })),
    },
  };

  const breadcrumb = buildBreadcrumb([
    { name: "Start", url: `${SITE_URL}/` },
    { name: label, url },
  ]);

  return [collection, breadcrumb];
}

// ---------------------------------------------------------------------------
// Standort-Detailseiten (/standorte/krefeld/, /bonn/, /muelheim/)
// ---------------------------------------------------------------------------

const STANDORT_AREA_SERVED: Record<StandortInfo["slug"], string[]> = {
  krefeld: ["Düsseldorf", "Duisburg", "Mönchengladbach", "Neuss", "Krefeld", "Niederrhein"],
  bonn: ["Bonn", "Köln", "Bergisch Gladbach", "Leverkusen", "Rhein-Sieg-Kreis"],
  muelheim: ["Mülheim an der Ruhr", "Essen", "Dortmund", "Bochum", "Oberhausen", "Duisburg"],
};

export function buildStandortSchemas(standort: StandortInfo): Schema[] {
  const url = `${SITE_URL}/standorte/${standort.slug}/`;

  const localBusiness: Schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${url}#localbusiness`,
    name: `Zoomlion NRW – SLT Technology Group ${standort.name}`,
    alternateName: `Zoomlion Händler ${standort.name}`,
    url,
    telephone: standort.phone,
    email: standort.email,
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: standort.street,
      postalCode: standort.postalCode,
      addressLocality: standort.city,
      addressRegion: "NW",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: standort.lat,
      longitude: standort.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: STANDORT_AREA_SERVED[standort.slug].map((c) => ({
      "@type": "City",
      name: c,
    })),
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Zoomlion Minibagger" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Zoomlion Arbeitsbühnen" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Zoomlion Teleskoplader" } },
    ],
  };

  const breadcrumb = buildBreadcrumb([
    { name: "Start", url: `${SITE_URL}/` },
    { name: "Standorte", url: `${SITE_URL}/standorte/` },
    { name: standort.name, url },
  ]);

  return [localBusiness, breadcrumb];
}

// ---------------------------------------------------------------------------
// /standorte (Übersicht)
// ---------------------------------------------------------------------------

export function buildStandorteIndexSchemas(): Schema[] {
  const itemList: Schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zoomlion NRW Standorte",
    itemListElement: (Object.values(STANDORTE) as StandortInfo[]).map(
      (s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/standorte/${s.slug}/`,
        item: {
          "@type": "AutomotiveBusiness",
          "@id": `${SITE_URL}/standorte/${s.slug}/#localbusiness`,
          name: `Zoomlion NRW – ${s.name}`,
          url: `${SITE_URL}/standorte/${s.slug}/`,
          telephone: s.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: s.street,
            postalCode: s.postalCode,
            addressLocality: s.city,
            addressRegion: "NW",
            addressCountry: "DE",
          },
        },
      }),
    ),
  };

  const breadcrumb = buildBreadcrumb([
    { name: "Start", url: `${SITE_URL}/` },
    { name: "Standorte", url: `${SITE_URL}/standorte/` },
  ]);

  return [itemList, breadcrumb];
}

// ---------------------------------------------------------------------------
// Stadtseiten (/baumaschinen/{stadt}/)
// ---------------------------------------------------------------------------

export function buildStadtSchemas(stadt: StadtData): Schema[] {
  const url = `${SITE_URL}/baumaschinen/${stadt.slug}/`;
  const standort = resolveStandort(stadt.standort);

  const service: Schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Baumaschinenverkauf",
    name: `Zoomlion Baumaschinen kaufen in ${stadt.name}`,
    description: `Verkauf, Lieferung und Service von Zoomlion Minibaggern, Arbeitsbühnen und Teleskopladern in ${stadt.name} und Umgebung.`,
    url,
    areaServed: {
      "@type": "City",
      name: stadt.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: stadt.name,
        addressRegion: "Nordrhein-Westfalen",
        addressCountry: "DE",
      },
    },
    provider: {
      "@id": `${SITE_URL}/standorte/${standort.slug}/#localbusiness`,
    },
  };

  const breadcrumb = buildBreadcrumb([
    { name: "Start", url: `${SITE_URL}/` },
    { name: "Standorte", url: `${SITE_URL}/standorte/` },
    { name: stadt.name, url },
  ]);

  const schemas: Schema[] = [service, breadcrumb];

  // Stadtspezifische FAQ, falls vorhanden
  if (stadt.cityContent?.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: stadt.cityContent.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return schemas;
}

// ---------------------------------------------------------------------------
// Startseite
// ---------------------------------------------------------------------------

export function buildHomeSchemas(): Schema[] {
  const itemList: Schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zoomlion Baumaschinen Kategorien",
    numberOfItems: 3,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Minibagger kaufen NRW", url: `${SITE_URL}/bagger/` },
      { "@type": "ListItem", position: 2, name: "Arbeitsbühnen kaufen NRW", url: `${SITE_URL}/arbeitsbuehnen/` },
      { "@type": "ListItem", position: 3, name: "Teleskoplader kaufen NRW", url: `${SITE_URL}/teleskoplader/` },
    ],
  };
  return [itemList];
}

// ---------------------------------------------------------------------------
// Generische Routen (Kontakt, Service, FAQ, etc.)
// ---------------------------------------------------------------------------

// Friendly Breadcrumb-Labels für nicht spezialisierte Routen.
// Wird vom Prerender via buildGenericSchemas() konsumiert.
const GENERIC_LABELS: Record<string, string> = {
  "/investitionsbooster": "Investitionsbooster",
  "/agb": "AGB & Widerrufsbelehrung",
  "/agb/verkauf": "AGB Verkauf",
  "/agb/vermietung": "AGB Vermietung",
  "/agb/archiv": "AGB Archiv",
  "/widerrufsbelehrung": "Widerrufsbelehrung",
  "/kontakt": "Kontakt",
  "/faq": "FAQ",
  "/ueber-uns": "Über uns",
  "/finanzierung": "Finanzierung",
  "/service": "Service & Wartung",
  "/servicevertraege": "Serviceverträge",
  "/try-and-buy": "Try & Buy",
  "/datenschutz": "Datenschutz",
  "/impressum": "Impressum",
  "/top-seller": "Top Seller",
};

export function buildGenericSchemas(path: string, fallbackName: string): Schema[] {
  const normalized = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
  const url = `${SITE_URL}${normalized === "/" ? "/" : normalized + "/"}`;

  // Mehrstufige Breadcrumbs: /agb/verkauf → Start › AGB › AGB Verkauf
  const segments = normalized.split("/").filter(Boolean);
  const items: Array<{ name: string; url: string }> = [
    { name: "Start", url: `${SITE_URL}/` },
  ];
  let acc = "";
  for (let i = 0; i < segments.length; i++) {
    acc += `/${segments[i]}`;
    const isLast = i === segments.length - 1;
    const label = GENERIC_LABELS[acc] ?? (isLast ? fallbackName : segments[i]);
    items.push({ name: label, url: `${SITE_URL}${acc}/` });
  }

  return [buildBreadcrumb(items)];
}
