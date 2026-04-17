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
    title: "Minibagger kaufen NRW – Zoomlion Bagger 1,8 t bis 25 t neu",
    description:
      "Zoomlion Minibagger & Kompaktbagger kaufen in NRW ➤ 1,8 bis 25 Tonnen ✓ Elektro & Diesel ✓ 3 Jahre Garantie ✓ Made in EU ✓ Finanzierung ✓ Lieferung. Jetzt Angebot anfragen!",
    h1: "Zoomlion Minibagger & Kompaktbagger kaufen in NRW",
    intro: [
      "Zoomlion Bagger sind robuste, EU-produzierte Baumaschinen für GaLaBau, Tiefbau, Hochbau und Industrie. Unser Sortiment reicht vom kompakten 1,8-Tonnen-Minibagger bis zum 25-Tonnen-Kettenbagger – als Diesel- oder vollelektrische Variante.",
      "Alle Modelle erhalten Sie als Neumaschine mit 3 Jahren Garantie, optionaler Finanzierung und Lieferung in ganz Nordrhein-Westfalen. Konfigurieren Sie Ihren Wunsch-Bagger online oder fordern Sie ein individuelles Angebot an.",
    ],
  },
  {
    path: "/arbeitsbuehnen",
    title: "Arbeitsbühne kaufen NRW – Scheren-, Gelenk- & Teleskopbühnen",
    description:
      "Zoomlion Arbeitsbühnen kaufen in NRW ➤ Scheren-, Gelenk- & Teleskoparbeitsbühnen bis 68 m ✓ Elektrisch, Diesel oder Hybrid ✓ 3 Jahre Garantie ✓ Made in EU. Jetzt Angebot anfragen!",
    h1: "Zoomlion Arbeitsbühnen kaufen – Scherenbühnen, Gelenk- & Teleskopbühnen",
    intro: [
      "Ob Scherenarbeitsbühne für die Halle, Gelenkteleskopbühne für die Fassadenarbeit oder Teleskopbühne bis 68 m Arbeitshöhe – Zoomlion Arbeitsbühnen sind die wirtschaftliche Alternative zu Premium-Marken bei vollwertiger EU-Qualität.",
      "Wir liefern Hubarbeitsbühnen elektrisch, dieselbetrieben oder als Hybridversion in ganz NRW. Inklusive Einweisung, optionalem Servicevertrag und 3 Jahren Garantie auf alle Neumaschinen.",
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
    path: "/hot-deals",
    title: "Hot Deals – Baumaschinen Sonderangebote NRW",
    description:
      "Aktuelle Sonderangebote für Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader in NRW ➤ Sofort verfügbar ✓ Mit Rabatt ✓ Solange Vorrat reicht. Jetzt Schnäppchen sichern!",
    h1: "Hot Deals – Aktuelle Baumaschinen-Sonderangebote",
    intro: [
      "Hier finden Sie unsere aktuellen Sonderangebote für sofort verfügbare Zoomlion Baumaschinen in NRW. Profitieren Sie von attraktiven Rabatten auf Minibagger, Arbeitsbühnen und Teleskoplader – solange der Vorrat reicht.",
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
];
