/**
 * Zentrale SEO-Metadaten pro statischer Route.
 * Wird vom Build-time Prerender-Skript (scripts/prerender.mjs) gelesen,
 * um pro Route eine eigene dist/<route>/index.html mit korrekten
 * <title>, <meta description>, canonical, og:*, twitter:* und einem
 * statischen <h1>+SEO-Text-Block für Crawler ohne JS auszuliefern.
 *
 * Stadtseiten (/baumaschinen/:stadt) werden separat aus
 * src/pages/StadtSeite.tsx (Export `staedte`) generiert.
 */

export interface SeoRoute {
  /** URL-Pfad (mit führendem /) */
  path: string;
  /** <title> (≤ 60 Zeichen empfohlen) */
  title: string;
  /** <meta name="description"> (≤ 160 Zeichen empfohlen) */
  description: string;
  /** Sichtbarer H1 für Crawler (vor JS-Hydration) */
  h1: string;
  /** 1–3 Absätze SEO-Text, die Crawler ohne JS lesen */
  intro: string[];
  /** Wenn true: <meta name="robots" content="noindex,follow"> */
  noindex?: boolean;
  /** Wenn true: Route wird NICHT in sitemap.xml aufgenommen */
  excludeFromSitemap?: boolean;
}

export const SITE_URL = "https://www.zoomlion-nrw.de";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const seoRoutes: SeoRoute[] = [
  {
    path: "/",
    title: "Minibagger & Arbeitsbühne kaufen NRW – Bagger & Teleskoplader",
    description:
      "Minibagger, Arbeitsbühne, Bagger & Teleskoplader kaufen in NRW ✓ 3 Jahre Garantie ✓ 3 Standorte ✓ Finanzierung ✓ Made in EU.",
    h1: "Zoomlion NRW – Minibagger, Arbeitsbühnen & Teleskoplader kaufen",
    intro: [
      "Willkommen bei Zoomlion NRW – Ihrem exklusiven Fachhändler für Zoomlion Baumaschinen in Nordrhein-Westfalen. Wir verkaufen Minibagger, Kompaktbagger, Scherenarbeitsbühnen, Gelenk- und Teleskoparbeitsbühnen sowie Teleskoplader Made in EU.",
      "An unseren drei Standorten Bonn, Krefeld und Mülheim an der Ruhr bieten wir persönliche Beratung, Probefahrt, Finanzierung und Service aus einer Hand. Alle Neumaschinen kommen mit 3 Jahren Garantie und EU-Qualität aus der Produktion in Ungarn.",
      "Fordern Sie jetzt ein unverbindliches Angebot an oder vereinbaren Sie eine Probefahrt an einem unserer Standorte in NRW.",
    ],
  },
  {
    path: "/bagger",
    title: "Minibagger kaufen NRW – ZE20G, ZE27GU & ZE55GU | Zoomlion",
    description:
      "Zoomlion Minibagger kaufen in NRW ➤ ZE20G (2 t), ZE27GU (2,5 t Kurzheck) & ZE55GU (5,8 t) ✓ Kubota-Diesel EU Stage V ✓ 3 Jahre Garantie ✓ Finanzierung ✓ Made in EU.",
    h1: "Zoomlion Minibagger & Kompaktbagger kaufen in NRW",
    intro: [
      "Zoomlion Bagger sind robuste, EU-produzierte Baumaschinen für GaLaBau, Tiefbau, Hochbau und Industrie. Unser Sortiment reicht vom kompakten 2-Tonnen-Minibagger ZE20G über den 2,5-Tonnen-Kurzheckbagger ZE27GU bis zum 5,8-Tonnen-Kompaktbagger ZE55GU – alle mit bewährten Kubota-Dieselmotoren in EU Stage V.",
      "Alle Modelle erhalten Sie als Neumaschine mit 3 Jahren Garantie, optionaler Finanzierung und Lieferung in ganz Nordrhein-Westfalen. Konfigurieren Sie Ihren Wunsch-Bagger online oder fordern Sie ein individuelles Angebot an.",
    ],
  },
  {
    path: "/arbeitsbuehnen",
    title: "Arbeitsbühne kaufen NRW – Scherenbühnen & Mastbühne | Zoomlion",
    description:
      "Zoomlion Arbeitsbühnen kaufen in NRW ➤ Elektro-Scherenarbeitsbühnen 7,8–15,7 m & Teleskopmastbühne ZMP09J (11,2 m) ✓ CE-zertifiziert ✓ 3 Jahre Garantie ✓ Made in EU.",
    h1: "Zoomlion Arbeitsbühnen kaufen – Scherenbühnen & Teleskopmastbühne",
    intro: [
      "Ob Scherenarbeitsbühne für die Halle (7,8 bis 15,7 m Arbeitshöhe, elektrisch mit Lithium-Akku) oder Teleskopmastbühne ZMP09J für enge Innenräume (11,2 m Arbeitshöhe) – Zoomlion Arbeitsbühnen sind die wirtschaftliche Alternative zu Premium-Marken bei vollwertiger EU-Qualität.",
      "Wir liefern Hubarbeitsbühnen elektrisch in ganz NRW – inklusive Einweisung, optionalem Servicevertrag und 3 Jahren Garantie auf alle Neumaschinen.",
    ],
  },
  {
    path: "/teleskoplader",
    title: "Teleskoplader kaufen NRW – Zoomlion Telehandler vom Händler",
    description:
      "Zoomlion Teleskoplader kaufen in NRW ➤ Kompakt- & Drehteleskoplader ✓ Made in EU ✓ 3 Jahre Garantie ✓ Ideal für GaLaBau, Landwirtschaft & Industrie. Jetzt Angebot anfragen!",
    h1: "Zoomlion Teleskoplader kaufen in NRW",
    intro: [
      "Zoomlion Teleskoplader sind die universellen Helfer auf der Baustelle, im GaLaBau, in der Landwirtschaft und in der Industrie. Wir bieten kompakte Modelle mit hoher Wendigkeit ebenso wie Drehteleskoplader für anspruchsvolle Hanglagen.",
      "Alle Telehandler erhalten Sie als Neumaschine mit 3 Jahren Garantie, optionaler Finanzierung und Lieferung in ganz Nordrhein-Westfalen.",
    ],
  },
  {
    path: "/top-seller",
    title: "Top Seller – Aktionsmodelle Baumaschinen NRW | Zoomlion",
    description:
      "Aktionsmodelle der beliebtesten Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader in NRW ➤ Sofort verfügbar ✓ Zu besonderen Konditionen ✓ Solange Vorrat reicht.",
    h1: "Top Seller – Aktionsmodelle zu besonderen Konditionen",
    intro: [
      "Hier finden Sie unsere beliebtesten Zoomlion Baumaschinen als Aktionsmodelle – sofort verfügbar in NRW. Profitieren Sie von besonderen Konditionen auf Top-Seller-Minibagger, -Arbeitsbühnen und -Teleskoplader, solange der Vorrat reicht.",
    ],
  },
  {
    path: "/service",
    title: "Service & Wartung Baumaschinen NRW – ZL|Care, ZL|Pro, ZL|Complete",
    description:
      "Service, Wartung, UVV-Prüfung & Ersatzteile für Zoomlion Baumaschinen in NRW ➤ ZL|Care, ZL|Pro & ZL|Complete Servicepakete ✓ Werkstatt vor Ort ✓ Mobiler Service.",
    h1: "Service, Wartung & Ersatzteile für Zoomlion Baumaschinen",
    intro: [
      "Mit unseren Servicepaketen ZL|Care, ZL|Pro und ZL|Complete halten wir Ihre Zoomlion Baumaschinen zuverlässig im Einsatz. Wir übernehmen Wartung, UVV-Prüfung, Reparaturen und Ersatzteilversorgung – wahlweise in unserer Werkstatt in Krefeld oder mobil bei Ihnen vor Ort.",
    ],
  },
  {
    path: "/servicevertraege",
    title: "Serviceverträge Baumaschinen NRW – ZL|Care, ZL|Pro, ZL|Complete",
    description:
      "Serviceverträge für Zoomlion Baumaschinen in NRW ➤ Drei Pakete: ZL|Care (Basis), ZL|Pro (Premium) & ZL|Complete (Full-Service) ✓ Planbare Kosten ✓ Maximale Verfügbarkeit.",
    h1: "Serviceverträge für Zoomlion Baumaschinen",
    intro: [
      "Mit unseren Serviceverträgen ZL|Care, ZL|Pro und ZL|Complete planen Sie Wartung und Reparaturen Ihrer Baumaschinen kalkulierbar und sichern maximale Verfügbarkeit. Wählen Sie das Paket, das zu Ihrer Einsatzintensität passt.",
    ],
  },
  {
    path: "/standorte",
    title: "Standorte NRW – Bonn, Krefeld & Mülheim | Zoomlion Händler",
    description:
      "Zoomlion NRW Standorte ➤ Bonn (Drachenburgstraße), Krefeld (Hauptstandort, Anrather Straße) & Mülheim an der Ruhr ✓ Showroom, Werkstatt & Ersatzteile vor Ort.",
    h1: "Unsere Standorte in NRW – Bonn, Krefeld & Mülheim",
    intro: [
      "Mit drei Standorten in Nordrhein-Westfalen sind wir nah bei Ihnen: Hauptstandort Krefeld (Anrather Straße 291) mit Showroom und Werkstatt, Standort Bonn (Drachenburgstraße 8) für das Rheinland und Standort Mülheim an der Ruhr für das Ruhrgebiet.",
    ],
  },
  {
    path: "/ueber-uns",
    title: "Über uns – Zoomlion NRW | SLT Technology Group",
    description:
      "Zoomlion NRW ist der exklusive Fachhändler für Zoomlion Baumaschinen in Nordrhein-Westfalen, betrieben von der SLT Technology Group GmbH & Co. KG.",
    h1: "Über Zoomlion NRW",
    intro: [
      "Zoomlion NRW ist der exklusive Fachhändler für Zoomlion Baumaschinen in Nordrhein-Westfalen, betrieben von der SLT Technology Group GmbH & Co. KG. Mit drei Standorten, eigener Werkstatt und einem erfahrenen Vertriebsteam sind wir Ihr Partner für Verkauf, Service und Beratung.",
    ],
  },
  {
    path: "/kontakt",
    title: "Kontakt – Zoomlion NRW | Verkauf & Beratung",
    description:
      "Kontakt zu Zoomlion NRW ➤ Telefon Krefeld +49 2151 4179904, Bonn +49 228 50466061 ✓ E-Mail verkauf@zoomlion-nrw.de ✓ Kontaktformular für Anfragen.",
    h1: "Kontakt – Zoomlion NRW",
    intro: [
      "Sprechen Sie mit unserem Verkaufsteam: Telefon Krefeld +49 2151 4179904, Bonn +49 228 50466061, E-Mail verkauf@zoomlion-nrw.de. Oder nutzen Sie unser Kontaktformular für eine unverbindliche Anfrage.",
    ],
  },
  {
    path: "/finanzierung",
    title: "Baumaschinen-Finanzierung NRW – Leasing & Mietkauf Zoomlion",
    description:
      "Finanzierung & Leasing für Zoomlion Baumaschinen in NRW ➤ Mietkauf, Leasing, klassische Finanzierung ✓ Online-Rechner ✓ Schnelle Zusage ✓ Made in EU.",
    h1: "Finanzierung & Leasing für Ihre Baumaschine",
    intro: [
      "Finanzieren oder leasen Sie Ihre Zoomlion Baumaschine flexibel: Mit unserem Online-Finanzierungsrechner kalkulieren Sie Ihre Wunschrate für Mietkauf, Leasing oder klassische Finanzierung in wenigen Sekunden.",
    ],
  },
  {
    path: "/datenschutz",
    title: "Datenschutzerklärung – Zoomlion NRW",
    description:
      "Datenschutzerklärung von Zoomlion NRW (SLT Technology Group GmbH & Co. KG) gemäß DSGVO. Informationen zu Datenerhebung, Cookies, Rechten der Betroffenen.",
    h1: "Datenschutzerklärung",
    intro: [
      "Diese Datenschutzerklärung informiert Sie über die Verarbeitung personenbezogener Daten beim Besuch unserer Website www.zoomlion-nrw.de gemäß Datenschutz-Grundverordnung (DSGVO).",
    ],
  },
  {
    path: "/impressum",
    title: "Impressum – Zoomlion NRW | SLT Technology Group GmbH & Co. KG",
    description:
      "Impressum von Zoomlion NRW – SLT Technology Group GmbH & Co. KG, Anrather Straße 291, 47807 Krefeld. Verantwortlich gemäß § 5 TMG.",
    h1: "Impressum",
    intro: [
      "Anbieter dieser Website ist die SLT Technology Group GmbH & Co. KG, Anrather Straße 291, 47807 Krefeld. Hier finden Sie alle Pflichtangaben gemäß § 5 TMG.",
    ],
  },
  {
    path: "/faq",
    title: "FAQ – Häufige Fragen zu Zoomlion Baumaschinen NRW",
    description:
      "Antworten auf die häufigsten Fragen zu Zoomlion Minibaggern, Arbeitsbühnen, Teleskopladern, Garantie, Finanzierung, Service & Lieferung in NRW.",
    h1: "Häufig gestellte Fragen (FAQ)",
    intro: [
      "Hier beantworten wir die häufigsten Fragen rund um den Kauf, die Garantie, die Finanzierung und den Service von Zoomlion Baumaschinen in NRW.",
    ],
  },
  {
    path: "/try-and-buy",
    title: "Try & Buy – Zoomlion Baumaschine vor dem Kauf testen",
    description:
      "Try & Buy bei Zoomlion NRW ➤ Testen Sie Ihren Wunsch-Minibagger, Arbeitsbühne oder Teleskoplader vor dem Kauf ✓ Probefahrt vereinbaren ✓ Risikofrei.",
    h1: "Try & Buy – Erst testen, dann kaufen",
    intro: [
      "Mit unserem Try & Buy Programm testen Sie Ihre Zoomlion Wunschmaschine in der Praxis, bevor Sie kaufen. Vereinbaren Sie eine Probefahrt oder einen Test-Einsatz auf Ihrer Baustelle und überzeugen Sie sich selbst.",
    ],
  },
  {
    path: "/standorte/krefeld",
    title: "Zoomlion Händler Krefeld – SLT Technology Group Hauptsitz",
    description:
      "Zoomlion Hauptsitz NRW in Krefeld: Minibagger, Arbeitsbühnen & Teleskoplader kaufen. Probefahrt, Ersatzteile, Werkstatt & persönliche Beratung am Showroom.",
    h1: "Zoomlion Händler Krefeld – Ihr Hauptsitz für Baumaschinen in NRW",
    intro: [
      "Willkommen am Hauptsitz der SLT Technology Group GmbH & Co. KG in Krefeld. Als exklusiver Zoomlion-Fachhändler für Nordrhein-Westfalen finden Sie bei uns das vollständige Zoomlion-Sortiment – vom 1,8-Tonnen-Minibagger bis zum Drehteleskoplader.",
      "Auf unserem Ausstellungshof können Sie Maschinen Probe fahren, technische Details persönlich mit unserem Team besprechen und Ersatzteile direkt vor Ort mitnehmen. Anrather Straße 291, 47807 Krefeld – Telefon 02151 4179904.",
    ],
  },
  {
    path: "/standorte/bonn",
    title: "Zoomlion Händler Bonn – SLT Technology Group Standort Bonn",
    description:
      "Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader in Bonn kaufen. Probefahrt, persönliche Beratung und Ersatzteile an unserem Standort Bonn.",
    h1: "Zoomlion Händler Bonn – Ihr Zoomlion-Standort im Rheinland",
    intro: [
      "Unser Standort Bonn bedient als Zoomlion-Fachhändler den gesamten Raum Bonn, Rhein-Sieg-Kreis und die nördliche Eifel. Von Bonn aus erreichen Sie in unter einer Stunde Köln, Koblenz sowie Aachen.",
      "Drachenburgstraße 8, 53179 Bonn – Telefon 0228 50466061. Vereinbaren Sie gerne einen Termin zur Probefahrt oder kommen Sie während unserer Öffnungszeiten auf unseren Hof.",
    ],
  },
  {
    path: "/standorte/muelheim",
    title: "Zoomlion Händler Mülheim an der Ruhr – SLT Technology Group",
    description:
      "Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader in Mülheim an der Ruhr. Probefahrt, Ersatzteile und Werkstatt im Herzen des Ruhrgebiets.",
    h1: "Zoomlion Händler Mülheim an der Ruhr – Ihr Partner im Ruhrgebiet",
    intro: [
      "Unser Standort Mülheim an der Ruhr liegt zentral im Herzen des Ruhrgebiets – direkt zwischen Duisburg, Essen und Oberhausen. Von hier aus betreuen wir Bauunternehmen, Garten- und Landschaftsbauer sowie Tiefbauer im gesamten Ruhrgebiet.",
      "Ruhrorter Straße, 45478 Mülheim an der Ruhr. Telefonische Beratung über unsere Hotline am Hauptsitz Krefeld: 02151 4179904.",
    ],
  },
];

// ====================================================================
// Produkt-Detailseiten (/bagger/:slug, /arbeitsbuehnen/:slug)
// werden automatisch aus PRODUCT_PAGES generiert.
// ====================================================================
import { PRODUCT_PAGES } from "./productPages";

export const productRoutes: SeoRoute[] = PRODUCT_PAGES.map((p) => ({
  path: `/${p.category}/${p.slug}`,
  title: `${p.name} kaufen | Zoomlion NRW`,
  description:
    `${p.tagline} Exklusiver Zoomlion-Fachhändler in NRW, 3 Jahre Garantie, Probefahrt in Bonn, Krefeld & Mülheim.`.slice(0, 160),
  h1: `${p.name} kaufen`,
  // intro[2] enthält einen statischen Datenblatt-Link, der bereits im
  // Prerender-HTML (vor JS-Hydration) für Crawler sichtbar ist.
  intro: [
    p.tagline,
    p.description[0],
    `Datenblatt als PDF: ${SITE_URL}${p.datasheetPdf}`,
  ],
}));

// Komplette Liste für Prerender (statisch + Produktseiten)
export const allSeoRoutes: SeoRoute[] = [...seoRoutes, ...productRoutes];
