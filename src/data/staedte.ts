/**
 * Stadt-Daten für /baumaschinen/:stadt – als reine Daten-Datei extrahiert,
 * damit Build-Skripte (scripts/prerender.ts) sie ohne React/JSX-Imports laden können.
 */

/**
 * SEO-Indexierungs-Tier pro Stadtseite.
 *
 * - "index"     → in Sitemap, ohne <meta robots noindex>. Nur für Seiten mit
 *                 ausreichend einzigartigem Content (Tier 1).
 * - "noindex"   → bleibt in Sitemap, bekommt aber <meta robots="noindex,follow">,
 *                 bis Content unique genug ist (Tier 2 – Übergangsphase).
 * - "excluded"  → KEINE Sitemap-Aufnahme + <meta robots="noindex,follow">.
 *                 Reine Doorway-Pages mit hohem Penalty-Risiko (Tier 3).
 */
export type SeoTier = "index" | "noindex" | "excluded";

/**
 * Generische Branchen-Referenz mit PLZ-Range (statt echter Kundennamen).
 */
export interface CityReference {
  branche: string;
  plzRange: string;
}

/**
 * Drei stadtspezifische FAQ-Einträge (überschreiben das generische FAQ-Schema).
 */
export interface CityFaqItem {
  question: string;
  answer: string;
}

/**
 * Empfohlenes Produkt pro Stadt (kuratiert nach typischen Anwendungsfällen).
 * `link` zeigt auf die Kategorie-Seite mit Anker.
 */
export interface CityRecommendedProduct {
  name: string;
  category: string;
  reason: string;
  link: string;
}

/**
 * Kompletter Unique-Content-Block pro Stadt (≥500 Wörter).
 */
export interface CityContent {
  /** 150–200 Wörter, ein zusammenhängender Absatz mit Standort/Autobahn/Großprojekten */
  intro: string;
  /** PLZ-Range der Stadt (z. B. "50667–51149") */
  plzRange: string;
  /** Beschreibung der Anfahrt vom Stadtzentrum zum nächsten Standort */
  routeFromCenter: string;
  /** Fahrzeit in Minuten zum nächsten Standort */
  driveTimeMinutes: number;
  /** OSM-Bounding-Box "lonMin,latMin,lonMax,latMax" für statische Karte */
  osmBbox: string;
  /** 3–5 Branchen-Referenzen mit PLZ */
  references: CityReference[];
  /** Genau 3 für die Stadt besonders relevante Maschinen */
  recommendedProducts: CityRecommendedProduct[];
  /** 3 stadtspezifische FAQs */
  faq: CityFaqItem[];
}

export interface StadtData {
  name: string;
  slug: string;
  region: string;
  /** Kurzbeschreibung (oberhalb der Inhalte) */
  description: string;
  /** Längerer Local-SEO-Absatz mit Branchenbezug */
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  nearbyAreas: string[];
  /** Branchen, in denen die Maschinen vor Ort typischerweise eingesetzt werden */
  industries: string[];
  /** Zugehöriger Standort + Entfernung in km */
  standort?: string;
  distanceKm?: number;
  /** Geo-Koordinaten für LocalBusiness Schema */
  lat?: number;
  lng?: number;
  /** SEO-Indexierungs-Tier (default: "noindex" – sicherer Fallback gegen Thin Content) */
  seoTier?: SeoTier;
  /** Unique-Content-Block (Tier 1 Pflicht). Fehlt → Seite zeigt Legacy-Content. */
  cityContent?: CityContent;
}

// ---- Wiederverwendbare Produkt-Empfehlungen ---------------------------------

const PROD_ZE18GU: CityRecommendedProduct = {
  name: "Zoomlion ZE18GU Minibagger (1,8 t)",
  category: "Minibagger",
  reason: "Ideal für enge Innenstadt- und GaLaBau-Baustellen, passt durch jede Hofeinfahrt.",
  link: "/bagger#ze18gu",
};
const PROD_ZE27GU: CityRecommendedProduct = {
  name: "Zoomlion ZE27GU Minibagger (2,7 t)",
  category: "Minibagger",
  reason: "Allrounder für Wohnungsbau, Sanierung und kleinere Tiefbau-Projekte.",
  link: "/bagger#ze27gu",
};
const PROD_ZE55GU: CityRecommendedProduct = {
  name: "Zoomlion ZE55GU Kompaktbagger (5,5 t)",
  category: "Minibagger",
  reason: "Robuster Kompaktbagger für Erschließungen und mittlere Tiefbauprojekte.",
  link: "/bagger#ze55gu",
};
const PROD_ZE135G: CityRecommendedProduct = {
  name: "Zoomlion ZE135G (13,5 t)",
  category: "Mobilbagger",
  reason: "Wirtschaftlicher Allrounder für Tiefbau, Konversion und Industrieprojekte.",
  link: "/bagger#ze135g",
};
const PROD_ZE210GLC: CityRecommendedProduct = {
  name: "Zoomlion ZE210GLC (21 t)",
  category: "Mobilbagger",
  reason: "Leistungsstarker Bagger für Industriebaustellen, Hafen- und Logistikflächen.",
  link: "/bagger#ze210glc",
};
const PROD_ZS0607: CityRecommendedProduct = {
  name: "Zoomlion ZS0607AC-LI Scherenarbeitsbühne (Indoor)",
  category: "Arbeitsbühne",
  reason: "Lithium-elektrisch, leise und emissionsfrei – perfekt für Innenausbau.",
  link: "/arbeitsbuehnen#zs0607ac-li",
};
const PROD_ZS1218ERT: CityRecommendedProduct = {
  name: "Zoomlion ZS1218ERT Rough-Terrain-Schere",
  category: "Arbeitsbühne",
  reason: "Geländegängige Scherenbühne für Außenfassaden und Hallenbau.",
  link: "/arbeitsbuehnen#zs1218ert",
};
const PROD_ZT22JE: CityRecommendedProduct = {
  name: "Zoomlion ZT22JE Gelenkteleskopbühne",
  category: "Arbeitsbühne",
  reason: "Flexibel über Hindernisse hinweg – ideal für Fassaden- und Industriearbeiten.",
  link: "/arbeitsbuehnen#zt22je",
};
const PROD_ZT58J: CityRecommendedProduct = {
  name: "Zoomlion ZT58J Teleskopbühne (58 m)",
  category: "Arbeitsbühne",
  reason: "Große Reichweite für Hochhäuser, Brückenarbeiten und Industrieanlagen.",
  link: "/arbeitsbuehnen#zt58j",
};
const PROD_TELEHANDLER: CityRecommendedProduct = {
  name: "Zoomlion ZTH4525 Teleskoplader",
  category: "Teleskoplader",
  reason: "Vielseitig für Bau, Hallenlogistik und Landwirtschaft – mit 4×4-Allrad.",
  link: "/teleskoplader#zth4525",
};

// ---- Stadt-Daten ------------------------------------------------------------

export const staedte: Record<string, StadtData> = {
  koeln: {
    name: "Köln",
    slug: "koeln",
    region: "Rheinland",
    description:
      "Als größte Stadt in NRW ist Köln ein Zentrum für Bauprojekte jeder Größenordnung. Ob Hochbau in der Innenstadt, Tiefbau am Rheinufer oder Sanierungsarbeiten in den Veedeln – wir liefern die passende Maschine.",
    longDescription:
      "In Köln entstehen permanent neue Wohnquartiere, Bürohochhäuser und Infrastrukturprojekte – vom MesseCity-Quartier in Deutz bis zum Ausbau der Stadtbahn. Für all diese Projekte sind kompakte Minibagger, leistungsstarke Arbeitsbühnen und vielseitige Teleskoplader gefragt. Vom nahegelegenen Standort Bonn liefern wir Zoomlion Baumaschinen direkt nach Köln, Köln-Mülheim, Ehrenfeld, Lindenthal und in alle Veedel.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Köln – Bagger neu vom Händler",
    metaDescription:
      "Minibagger, Arbeitsbühne, Bagger & Teleskoplader kaufen in Köln ➤ Made in EU ✓ 3 Jahre Garantie ✓ Standort Bonn nur 30 km ✓ Lieferung & Einweisung. Jetzt Angebot anfragen!",
    nearbyAreas: ["Bonn", "Leverkusen", "Bergisch Gladbach", "Brühl", "Hürth", "Pulheim", "Frechen"],
    industries: ["Hochbau", "Tiefbau", "Stadtbahnausbau", "GaLaBau", "Sanierung", "Abbruch"],
    standort: "Bonn",
    distanceKm: 30,
    lat: 50.9375,
    lng: 6.9603,
    seoTier: "index",
    cityContent: {
      intro:
        "Sie wollen einen Bagger kaufen in Köln, eine Arbeitsbühne mieten oder einen Teleskoplader für Hallenbau und Logistik anschaffen? Als exklusiver Zoomlion-Händler für Köln und das Rheinland liefern wir Minibagger, Mobilbagger, Kettenbagger, Scheren- und Gelenkteleskopbühnen sowie Drehteleskoplader direkt aus NRW – Made in EU, 3 Jahre Garantie. Köln ist mit über einer Million Einwohnern die größte Baustelle Nordrhein-Westfalens: Vom MesseCity-Quartier in Deutz, dem Rheinauhafen, der Sanierung des Hauptbahnhofs und Opern-Quartiers über den mehrjährigen Ausbau der KVB-Stadtbahnlinien U1, U4 und U5 bis zu den Großprojekten Parkstadt Süd, Cologneo (Mülheim) und Clouth-Quartier (Nippes) entstehen ständig neue Bauprojekte. Auch das Rheinufer wird in Deutz, Mülheim und Riehl umfassend neu gestaltet, und in den Veedeln Ehrenfeld, Sülz, Lindenthal und Nippes laufen unzählige Wohnungsbau-, Schul- und Fassadensanierungen in der Gründerzeit-Substanz. Unser nächster Standort in Bonn liegt nur rund 30 km südlich – über die A555 (Schnellweg) und A559 sind wir in etwa 35 Minuten am Kölner Stadtrand. In Köln werden Zoomlion Minibagger (ZE18GU 1,8 t bis ZE55GU 5,5 t) vor allem für GaLaBau, Hofneuanlagen, Pool- und Kellerausbau sowie enge Innenstadtbaustellen eingesetzt; Lithium-Scherenarbeitsbühnen (ZS0607AC-LI) kommen emissionsfrei in Tiefgaragen und Tiefbahnhöfen zum Einsatz, Gelenkteleskopbühnen bei Fassadensanierungen in Ehrenfeld und der Südstadt. Für die Großprojekte am Rhein, Hallenbau in Marsdorf/Ossendorf und die Logport-ähnlichen Logistikflächen in Köln-Niehl sind unsere Mobilbagger ZE135G/ZE210GLC, Kettenbagger und Drehteleskoplader ZTH4525 die richtige Wahl. Auch Bauunternehmen, GaLaBau-Betriebe und Gerüstbauer aus Leverkusen, Bergisch Gladbach, Brühl, Hürth, Pulheim und Frechen nutzen die kurzen Wege zum Standort Bonn für Probefahrt, Service und Ersatzteile.",
      plzRange: "50667–51149",
      routeFromCenter: "Köln-Innenstadt → A555 / A59 → Standort Bonn",
      driveTimeMinutes: 35,
      osmBbox: "6.80,50.86,7.10,51.02",
      references: [
        { branche: "Tiefbauunternehmen im Großraum Köln", plzRange: "50667–50859" },
        { branche: "GaLaBau-Betriebe Veedel & Vororte", plzRange: "50937–51149" },
        { branche: "Fassaden- und Sanierungsbetriebe Innenstadt", plzRange: "50670–50825" },
        { branche: "Industrie- und Logistikbetriebe rechtsrheinisch", plzRange: "51063–51109" },
      ],
      recommendedProducts: [PROD_ZE18GU, PROD_ZS0607, PROD_TELEHANDLER],
      faq: [
        {
          question: "Wo kann ich in Köln einen Zoomlion Minibagger kaufen?",
          answer:
            "Sie kaufen Ihren Zoomlion Minibagger über unseren Standort in Bonn, der nur ca. 30 km südlich von Köln liegt. Sie können die Maschinen vor Ort besichtigen, eine Probefahrt machen und werden direkt vom Vertrieb beraten. Die Auslieferung nach Köln erfolgt komplett mit Einweisung.",
        },
        {
          question: "Lohnt sich die Anfahrt von Köln zum Standort in Bonn?",
          answer:
            "Ja – Sie sind in rund 35 Minuten über die A555 oder A59 am Standort Bonn. Probefahrt, Beratung und Maschinenübergabe lassen sich problemlos in einem Vormittag erledigen. Alternativ liefern wir die Maschine direkt zu Ihnen nach Köln.",
        },
        {
          question: "Bieten Sie in Köln auch Lieferung der Maschinen an?",
          answer:
            "Ja, wir liefern Zoomlion Baumaschinen direkt zu Ihrer Baustelle in Köln und in alle Veedel inklusive Einweisung. Auch der Service und die UVV-Prüfung erfolgen vor Ort oder über unseren Standort Bonn.",
        },
      ],
    },
  },

  duesseldorf: {
    name: "Düsseldorf",
    slug: "duesseldorf",
    region: "Rheinland",
    description:
      "In der Landeshauptstadt Düsseldorf sind Baumaschinen für den Hoch- und Tiefbau, Gleisbau und die Gebäudesanierung gefragt. Unser Standort Krefeld versorgt Sie schnell mit Maschinen, Ersatzteilen und Service.",
    longDescription:
      "Düsseldorf zählt zu den wirtschaftsstärksten Städten Deutschlands – im Medienhafen, in Bilk und am Flughafen entstehen laufend neue Bauprojekte. Bauunternehmen aus Düsseldorf, Neuss, Meerbusch und Ratingen vertrauen auf unsere Zoomlion Baumaschinen: kompakte Minibagger für die Innenstadt, Scherenarbeitsbühnen für die Fassaden­sanierung und Teleskoplader für den Hallenbau. Vom Standort Krefeld sind wir in unter einer Stunde bei Ihnen.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Düsseldorf – Bagger neu vom Händler",
    metaDescription:
      "Minibagger, Bagger, Arbeitsbühne & Teleskoplader kaufen in Düsseldorf ➤ Made in EU ✓ 3 Jahre Garantie ✓ Standort Krefeld nur 25 km ✓ Schnelle Lieferung. Jetzt Angebot anfragen!",
    nearbyAreas: ["Krefeld", "Neuss", "Meerbusch", "Ratingen", "Hilden", "Erkrath", "Mettmann"],
    industries: ["Hochbau", "Medienhafen-Projekte", "Fassadensanierung", "Hallenbau", "GaLaBau"],
    standort: "Krefeld",
    distanceKm: 25,
    lat: 51.2277,
    lng: 6.7735,
    seoTier: "index",
    cityContent: {
      intro:
        "Sie wollen einen Bagger kaufen in Düsseldorf, eine Arbeitsbühne mieten oder einen Teleskoplader für Hallen- und Gewerbebau anschaffen? Als exklusiver Zoomlion-Händler für Düsseldorf und das Rheinland liefern wir Minibagger, Mobilbagger, Kettenbagger, Scheren- und Gelenkteleskopbühnen sowie Drehteleskoplader direkt aus NRW – Made in EU, 3 Jahre Garantie. Düsseldorf ist Landeshauptstadt, Mode- und Finanzplatz und eine der wirtschaftsstärksten Städte Deutschlands – entsprechend hoch ist die Bau-Aktivität: Im Medienhafen, am Flughafen Düsseldorf International, im Quartier Le Quartier Central, am Kö-Bogen II, im Grand Central und in Bilk entstehen ständig neue Büro-, Wohn- und Hotelprojekte. Hinzu kommen Großprojekte wie die Erweiterung des Flughafens Düsseldorf, der laufende U-Bahn-Ausbau der Wehrhahn-Linie sowie umfangreiche Fassadensanierungen historischer Gründerzeitbauten in der Altstadt, in Oberkassel, Pempelfort und Düsseltal. Unser Hauptsitz in Krefeld (Showroom, Werkstatt, Ersatzteillager) liegt nur rund 25 km westlich – über die A57 sind Sie in etwa 25 Minuten in der Düsseldorfer Innenstadt. Für die enge Altstadt und Kö empfehlen wir kompakte 1,8- bis 2,7-Tonnen-Minibagger (ZE18GU/ZE27GU); für den Medienhafen und Hallenbau in Reisholz, Lierenfeld und am Flughafen sind unsere Drehteleskoplader (ZTH4525) und Gelenkteleskopbühnen (ZT22JE) die richtige Wahl. Lithium-Scherenarbeitsbühnen (ZS0607AC-LI) sind in Bürotürmen und Hotels emissionsfrei einsatzbar. Auch für Bauunternehmen, GaLaBau-Betriebe und Gerüstbauer aus Neuss, Meerbusch, Ratingen, Hilden, Erkrath und Mettmann sind wir die naheliegende Adresse beim Maschinenkauf.",
      plzRange: "40210–40629",
      routeFromCenter: "Düsseldorf-Innenstadt → A57 → Standort Krefeld",
      driveTimeMinutes: 25,
      osmBbox: "6.70,51.16,6.90,51.30",
      references: [
        { branche: "Hochbauunternehmen Düsseldorf-Nord", plzRange: "40468–40629" },
        { branche: "Fassaden- und Innenausbaubetriebe Altstadt/Bilk", plzRange: "40210–40225" },
        { branche: "Hallen- und Gewerbebauer Flughafen-Region", plzRange: "40472–40880" },
        { branche: "GaLaBau-Betriebe Düsseldorf-Süd & Hilden", plzRange: "40589–40724" },
      ],
      recommendedProducts: [PROD_ZE27GU, PROD_ZT22JE, PROD_TELEHANDLER],
      faq: [
        {
          question: "Wo kann ich in Düsseldorf einen Zoomlion Minibagger kaufen?",
          answer:
            "Sie kaufen Ihren Zoomlion Minibagger über unseren Hauptstandort Krefeld, ca. 25 km westlich von Düsseldorf. Dort steht der komplette Showroom inklusive Werkstatt und Ersatzteillager – Probefahrt und Übergabe erfolgen vor Ort. Die Auslieferung nach Düsseldorf organisieren wir auf Wunsch direkt.",
        },
        {
          question: "Lohnt sich die Anfahrt von Düsseldorf zum Standort in Krefeld?",
          answer:
            "Absolut – über die A57 sind Sie in rund 25 Minuten am Standort. Probefahrt, Beratung und Vertragsabschluss schaffen Sie locker in einem halben Vormittag. Wir koordinieren den Termin so, dass die Maschine direkt im Anschluss vorgeführt werden kann.",
        },
        {
          question: "Bieten Sie in Düsseldorf auch Lieferung der Maschinen an?",
          answer:
            "Ja, wir liefern Zoomlion Baumaschinen direkt zu Ihrer Baustelle in Düsseldorf, im Medienhafen, am Flughafen oder in den Stadtteilen Bilk, Oberkassel und Pempelfort – inklusive Einweisung. Service und UVV-Prüfung übernimmt unser Standort Krefeld.",
        },
      ],
    },
  },

  bonn: {
    name: "Bonn",
    slug: "bonn",
    region: "Rheinland",
    description:
      "Am Standort Bonn sind wir direkt vor Ort für Sie da. Ob für Projekte in der Bundesstadt, im Siebengebirge oder im Vorgebirge – kurze Wege, schnelle Verfügbarkeit und persönliche Beratung.",
    longDescription:
      "In Bonn finden Sie unseren Standort direkt vor Ort. Ob Sanierungen im Regierungsviertel, Wohnungsbau in Beuel oder anspruchsvolle GaLaBau-Projekte im Siebengebirge – wir haben Minibagger, Arbeitsbühnen und Teleskoplader sofort verfügbar. Besichtigen Sie die Maschinen vor Ort, machen Sie eine Probefahrt und profitieren Sie von kürzesten Wegen für Service und Ersatzteile.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Bonn – Standort vor Ort",
    metaDescription:
      "Baumaschinen kaufen in Bonn ➤ Standort direkt vor Ort ✓ Minibagger, Arbeitsbühne, Bagger & Teleskoplader ✓ Probefahrt ✓ 3 Jahre Garantie ✓ Made in EU. Jetzt Termin vereinbaren!",
    nearbyAreas: ["Siegburg", "Sankt Augustin", "Troisdorf", "Königswinter", "Bad Honnef", "Alfter", "Bornheim"],
    industries: ["Regierungsbauten", "Wohnungsbau", "Denkmalsanierung", "GaLaBau Siebengebirge", "Tiefbau"],
    standort: "Bonn",
    distanceKm: 0,
    lat: 50.7374,
    lng: 7.0982,
    seoTier: "index",
    cityContent: {
      intro:
        "Sie wollen einen Bagger kaufen in Bonn, eine Arbeitsbühne mieten oder einen Teleskoplader für GaLaBau, Hochbau und Denkmalpflege anschaffen? In Bonn sind wir mit unserem Standort an der Drachenburgstraße 8 (53179 Bonn-Mehlem) direkt vor Ort – als exklusiver Zoomlion-Händler für Bonn, das Rheinland und den Rhein-Sieg-Kreis. Wir führen das komplette Zoomlion-Programm: Minibagger (ZE18GU 1,8 t, ZE27GU 2,7 t, ZE55GU 5,5 t), Mobil- und Kettenbagger (ZE135G, ZE210GLC), Scheren- und Gelenkteleskopbühnen (ZS0607AC-LI, ZS1218ERT, ZT22JE) sowie Drehteleskoplader (ZTH4525). Bonn entwickelt sich seit dem Wegzug der Regierungsfunktionen kontinuierlich zur UN- und Wissenschaftsstadt: Im ehemaligen Regierungsviertel laufen die Sanierungen rund um das World Conference Center Bonn (WCCB), den Post-Tower, das UN-Campus-Areal und die Beethovenhalle, in Beuel, Bad Godesberg und Plittersdorf entstehen neue Wohnquartiere wie der Bonner Bogen oder das Quartier Rheinaue, und im Siebengebirge sind anspruchsvolle GaLaBau-Projekte an Hanglagen mit kompakten Minibaggern Standard. Vom Standort Bonn aus liefern wir Zoomlion Baumaschinen direkt nach Beuel, Bad Godesberg, Hardtberg, Bonn-Castell und in die umliegenden Gemeinden Königswinter, Bad Honnef, Sankt Augustin, Siegburg, Troisdorf, Bornheim und Alfter. Probefahrt, Beratung und sofortige Verfügbarkeit von Ersatzteilen sind die zentralen Vorteile unseres Standorts. Auch das südliche Köln (Sürth, Rodenkirchen, Porz) erreichen wir über die A555 in unter 30 Minuten – viele Kölner Bauunternehmen und GaLaBauer nutzen daher den Standort Bonn für Probefahrt und Service.",
      plzRange: "53111–53229",
      routeFromCenter: "Standort direkt in Bonn (Drachenburgstraße 8, 53179 Bonn)",
      driveTimeMinutes: 0,
      osmBbox: "7.00,50.65,7.20,50.80",
      references: [
        { branche: "Denkmalsanierer & Spezialbau Innenstadt", plzRange: "53111–53127" },
        { branche: "GaLaBau-Betriebe Bad Godesberg & Siebengebirge", plzRange: "53173–53229" },
        { branche: "Wohnungsbauunternehmen Beuel & Hardtberg", plzRange: "53121–53229" },
        { branche: "Tiefbau- und Erdbauunternehmen Rhein-Sieg-Kreis", plzRange: "53721–53842" },
      ],
      recommendedProducts: [PROD_ZE18GU, PROD_ZT22JE, PROD_ZE55GU],
      faq: [
        {
          question: "Wo kann ich in Bonn einen Zoomlion Minibagger kaufen?",
          answer:
            "Direkt bei uns am Standort Bonn, Drachenburgstraße 8, 53179 Bonn. Wir haben Minibagger, Arbeitsbühnen und Teleskoplader sofort verfügbar – Probefahrt jederzeit nach Terminabsprache.",
        },
        {
          question: "Bieten Sie in Bonn Service und Ersatzteile vor Ort an?",
          answer:
            "Ja, am Standort Bonn finden Sie nicht nur den Verkauf, sondern auch direkten Zugang zu Service, Ersatzteilen und UVV-Prüfung über unsere Werkstatt am Standort Krefeld. Mobile Service-Einsätze in Bonn und im Rhein-Sieg-Kreis sind kurzfristig möglich.",
        },
        {
          question: "Bieten Sie in Bonn auch Lieferung der Maschinen an?",
          answer:
            "Ja – wir liefern Zoomlion Baumaschinen vom Standort Bonn direkt zu Ihrer Baustelle in Bonn, Beuel, Bad Godesberg sowie in die umliegenden Städte Siegburg, Sankt Augustin, Königswinter und Bad Honnef.",
        },
      ],
    },
  },

  essen: {
    name: "Essen",
    slug: "essen",
    region: "Ruhrgebiet",
    description:
      "Im Herzen des Ruhrgebiets setzen Bauunternehmen auf zuverlässige Maschinen. Unser Standort Mülheim an der Ruhr ist nur wenige Minuten entfernt und liefert Maschinen, Service und Ersatzteile.",
    longDescription:
      "Essen ist mit dem Strukturwandel zu einem der dynamischsten Bau-Standorte im Ruhrgebiet geworden – von der Zeche Zollverein über das Universitätsviertel bis zur Konversion alter Industrieflächen. Unser Standort Mülheim an der Ruhr liegt nur 15 km entfernt und liefert Minibagger, Arbeitsbühnen und Teleskoplader auch nach Essen-Werden, Kettwig, Steele und das gesamte Stadtgebiet.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Essen – Bagger neu vom Händler",
    metaDescription:
      "Minibagger, Arbeitsbühne, Bagger & Teleskoplader kaufen in Essen ➤ Made in EU ✓ 3 Jahre Garantie ✓ Standort Mülheim nur 15 km ✓ Schnelle Lieferung. Jetzt Angebot anfragen!",
    nearbyAreas: ["Mülheim an der Ruhr", "Oberhausen", "Gelsenkirchen", "Bochum", "Bottrop", "Velbert"],
    industries: ["Industriebau", "Konversion", "Wohnungsbau", "Tiefbau", "GaLaBau", "Abbruch"],
    standort: "Mülheim an der Ruhr",
    distanceKm: 15,
    lat: 51.4556,
    lng: 7.0116,
    seoTier: "index",
    cityContent: {
      intro:
        "Sie wollen einen Bagger kaufen in Essen, eine Arbeitsbühne mieten oder einen Teleskoplader für Industrie- und Hallenbau anschaffen? Als exklusiver Zoomlion-Händler für Essen und das Ruhrgebiet liefern wir Minibagger, Mobilbagger, Kettenbagger, Scheren- und Gelenkteleskopbühnen sowie Drehteleskoplader direkt aus NRW – Made in EU, 3 Jahre Garantie. Essen hat sich mit dem Strukturwandel vom Bergbau-Standort (RAG, Krupp) zur Dienstleistungs-, Handels- und Wissenschaftsmetropole entwickelt – und ist heute eine der baulich aktivsten Städte des Ruhrgebiets. Mit dem UNESCO-Welterbe Zeche Zollverein, dem Universitätsviertel rund um die Universität Duisburg-Essen, dem Folkwang-Quartier, dem Krupp-Park, der Grünen Mitte und der Konversion alter Industrieflächen in Altenessen, Schonnebeck, Bergeborbeck und Karnap entstehen ständig neue Wohn-, Bildungs- und Gewerbeflächen. Auch Großprojekte wie der Berthold-Beitz-Boulevard, der ThyssenKrupp-Campus und die Sanierung der Messe Essen erzeugen kontinuierliche Nachfrage. Unser nächster Standort in Mülheim an der Ruhr liegt nur rund 15 km westlich – über die A40 sind wir in etwa 15 Minuten in der Essener Innenstadt, alternativ über die A52 in Bredeney und Werden. Für Industriebau, Konversion und ThyssenKrupp-Werksgelände sind unsere Mobilbagger der 13–21-Tonnen-Klasse (ZE135G, ZE210GLC) besonders gefragt, ergänzt durch Gelenkteleskopbühnen (ZT22JE) für Fassadensanierung und Drehteleskoplader (ZTH4525) für Hallenbau in Bergeborbeck und am Flughafen Essen/Mülheim. In den südlichen Stadtteilen Werden, Kettwig, Bredeney und Heisingen sind kompakte 1,8–5,5-Tonnen-Minibagger (ZE18GU, ZE27GU, ZE55GU) für GaLaBau und Hangbau ein Verkaufsschlager. Auch Bauunternehmen, Gerüstbauer und Tiefbauer aus Oberhausen, Gelsenkirchen, Bochum, Bottrop und Velbert nutzen die kurzen Wege zum Standort Mülheim für Probefahrt, Service und Ersatzteile.",
      plzRange: "45127–45359",
      routeFromCenter: "Essen-Innenstadt → A40 / A52 → Standort Mülheim a. d. Ruhr",
      driveTimeMinutes: 15,
      osmBbox: "6.90,51.36,7.15,51.50",
      references: [
        { branche: "Industriebau- & Konversions-Spezialisten Innenstadt/Nord", plzRange: "45127–45359" },
        { branche: "GaLaBau-Betriebe Essen-Süd (Werden, Kettwig)", plzRange: "45219–45239" },
        { branche: "Wohnungsbauer Altenessen & Schonnebeck", plzRange: "45326–45357" },
        { branche: "Abbruch- & Recyclingbetriebe Ruhrgebiet-West", plzRange: "45141–45356" },
      ],
      recommendedProducts: [PROD_ZE135G, PROD_ZT22JE, PROD_TELEHANDLER],
      faq: [
        {
          question: "Wo kann ich in Essen einen Zoomlion Minibagger kaufen?",
          answer:
            "Sie kaufen Ihren Zoomlion Minibagger über unseren Standort in Mülheim an der Ruhr, nur ca. 15 km von Essen entfernt. Dort sehen Sie die Maschinen live, machen eine Probefahrt und werden direkt beraten. Lieferung nach Essen organisieren wir mit Einweisung.",
        },
        {
          question: "Lohnt sich die Anfahrt von Essen zum Standort in Mülheim?",
          answer:
            "Ja – über die A40 sind Sie in 15 Minuten am Standort. Beratung, Probefahrt und Übergabe sind locker an einem Vormittag möglich. Wer es eilig hat, bekommt die Maschine direkt im Anschluss zur Baustelle in Essen geliefert.",
        },
        {
          question: "Bieten Sie in Essen auch Lieferung der Maschinen an?",
          answer:
            "Ja, wir liefern Zoomlion Baumaschinen vom Standort Mülheim direkt nach Essen-Werden, Kettwig, Steele, Altenessen und in alle weiteren Stadtteile – inklusive Einweisung und mit kurzfristigem Service vor Ort.",
        },
      ],
    },
  },

  dortmund: {
    name: "Dortmund",
    slug: "dortmund",
    region: "Ruhrgebiet",
    description:
      "Dortmund ist eine der wachstumsstärksten Städte im Ruhrgebiet. Für Ihre Bauprojekte liefern wir Zoomlion Maschinen mit EU-Qualität und umfassendem Service direkt in die Region.",
    longDescription:
      "Dortmund verändert sich rasant – Phoenix-See, Technologiepark, der Hafen und die Nordstadt sind Hotspots für Bauprojekte. Bauunternehmen, GaLaBauer und Industriebetriebe in Dortmund, Hörde, Aplerbeck und Mengede setzen beim Maschinenkauf auf Made-in-EU-Qualität von Zoomlion. Wir liefern direkt nach Dortmund und in den gesamten Kreis Unna.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Dortmund – Bagger neu vom Händler",
    metaDescription:
      "Minibagger, Bagger, Arbeitsbühne & Teleskoplader kaufen in Dortmund ➤ Made in EU ✓ 3 Jahre Garantie ✓ Lieferung & Einweisung ✓ Service in NRW. Jetzt Angebot anfragen!",
    nearbyAreas: ["Hagen", "Unna", "Lünen", "Witten", "Herdecke", "Schwerte", "Castrop-Rauxel"],
    industries: ["Industriebau", "Tiefbau", "Hafen-Logistik", "Wohnungsbau", "GaLaBau"],
    standort: "Mülheim an der Ruhr",
    distanceKm: 50,
    lat: 51.5136,
    lng: 7.4653,
    seoTier: "index",
    cityContent: {
      intro:
        "Sie wollen einen Bagger kaufen in Dortmund, eine Arbeitsbühne mieten oder einen Teleskoplader für Hafen- und Industrieflächen anschaffen? Als exklusiver Zoomlion-Händler für Dortmund und das östliche Ruhrgebiet liefern wir Minibagger, Mobilbagger, Kettenbagger, Scheren- und Gelenkteleskopbühnen sowie Drehteleskoplader direkt aus NRW – Made in EU, 3 Jahre Garantie. Dortmund ist die größte Stadt Westfalens und mit Phoenix-See und PHOENIX West (Hörde), dem Technologiepark an der TU Dortmund, dem Dortmunder Hafen, der Westfalenhütte sowie der laufenden Aufwertung der Nordstadt eines der wachstumsstärksten Bau-Standorte des Ruhrgebiets. Auch der Stadtkronenbereich rund um den Hauptbahnhof, das Kronprinzenviertel, die Konversionen in Hörde (Phoenix-See, Phoenix West) sowie das Smart-Rhino-Areal (HSP-Gelände) erzeugen kontinuierliche Nachfrage nach Bau- und Hubmaschinen. Hinzu kommen typische Großprojekte aus Logistik, Industrie und Wohnungsbau in Aplerbeck, Mengede, Brackel, Hombruch und Eving. Unser nächster Standort in Mülheim an der Ruhr liegt rund 50 km westlich – über die A40 erreichen wir Dortmund in etwa 40 Minuten, alternativ über die A2 das Hafenrevier. Für Hafen- und Industrieflächen sind unsere 21-Tonnen-Mobilbagger (ZE210GLC), Kettenbagger und Drehteleskoplader (ZTH4525) die typischen Arbeitstiere; für Höhenarbeiten an Westfalenhütte, Westfalenstadion (Signal-Iduna-Park) und Hochregallagern in Ellinghausen kommen Teleskopbühnen mit bis zu 58 m Reichweite (ZT58J) zum Einsatz. Im Wohnungsbau, GaLaBau und Hausbau dominieren kompakte 1,8–5,5-Tonnen-Mini- und Kompaktbagger (ZE18GU, ZE27GU, ZE55GU). Auch für Bauunternehmen, GaLaBau-Betriebe und Gerüstbauer aus Hagen, Unna, Lünen, Witten, Herdecke, Schwerte und Castrop-Rauxel sind wir die naheliegende Adresse beim Maschinenkauf.",
      plzRange: "44135–44388",
      routeFromCenter: "Dortmund-Innenstadt → A40 → Standort Mülheim a. d. Ruhr",
      driveTimeMinutes: 40,
      osmBbox: "7.35,51.45,7.60,51.58",
      references: [
        { branche: "Industriebau & Hafen-Logistik Hafen/Nordstadt", plzRange: "44135–44147" },
        { branche: "Wohnungsbauer Hörde & Aplerbeck", plzRange: "44263–44319" },
        { branche: "GaLaBau-Betriebe Brackel & Mengede", plzRange: "44329–44388" },
        { branche: "Tiefbauunternehmen Kreis Unna & Hagen", plzRange: "58093–59425" },
      ],
      recommendedProducts: [PROD_ZE210GLC, PROD_TELEHANDLER, PROD_ZT58J],
      faq: [
        {
          question: "Wo kann ich in Dortmund einen Zoomlion Bagger kaufen?",
          answer:
            "Sie kaufen Ihre Zoomlion Maschinen über unseren Standort Mülheim an der Ruhr (ca. 50 km / 40 min via A40). Dort steht der Showroom für Probefahrt und Beratung. Die Auslieferung nach Dortmund organisieren wir komplett mit Einweisung.",
        },
        {
          question: "Lohnt sich die Anfahrt von Dortmund zum Standort in Mülheim?",
          answer:
            "Für eine Probefahrt definitiv – über die A40 erreichen Sie den Standort in rund 40 Minuten. Wer es eiliger hat: Wir liefern die Maschine inklusive Einweisung direkt nach Dortmund. Service und UVV-Prüfung organisieren wir auf Wunsch ebenfalls vor Ort.",
        },
        {
          question: "Bieten Sie in Dortmund auch Lieferung der Maschinen an?",
          answer:
            "Ja, wir liefern Zoomlion Baumaschinen direkt nach Dortmund-Hörde, Aplerbeck, Mengede, Brackel sowie in den gesamten Kreis Unna, nach Hagen, Unna, Lünen und Schwerte – inklusive Einweisung.",
        },
      ],
    },
  },

  duisburg: {
    name: "Duisburg",
    slug: "duisburg",
    region: "Ruhrgebiet",
    description:
      "Als Logistik-Drehscheibe und Industriestandort benötigt Duisburg leistungsstarke Baumaschinen. Von unseren Standorten Krefeld und Mülheim aus sind wir schnell bei Ihnen.",
    longDescription:
      "Duisburg ist mit dem größten Binnenhafen Europas und zahlreichen Stahl- und Logistikflächen ein Schwergewicht der Bauwirtschaft. Ob Hallenneubau in Logport, Sanierung in Rheinhausen oder Wohnungsbau in Hochfeld – Zoomlion Minibagger, Arbeitsbühnen und Teleskoplader liefern die nötige Power. Mit unseren beiden Standorten Krefeld und Mülheim sind wir für Duisburg perfekt aufgestellt.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Duisburg – Bagger neu vom Händler",
    metaDescription:
      "Minibagger, Bagger, Arbeitsbühne & Teleskoplader kaufen in Duisburg ➤ Made in EU ✓ 3 Jahre Garantie ✓ Standorte Krefeld & Mülheim ✓ Schnelle Lieferung. Jetzt Angebot anfragen!",
    nearbyAreas: ["Krefeld", "Moers", "Oberhausen", "Mülheim an der Ruhr", "Dinslaken", "Rheinberg"],
    industries: ["Logistik & Hafenbau", "Stahlindustrie", "Wohnungsbau", "Tiefbau", "Abbruch"],
    standort: "Krefeld",
    distanceKm: 25,
    lat: 51.4344,
    lng: 6.7623,
    seoTier: "index",
    cityContent: {
      intro:
        "Sie wollen einen Bagger kaufen in Duisburg, eine Arbeitsbühne mieten oder einen Teleskoplader für die Hafenlogistik anschaffen? Als exklusiver Zoomlion-Händler für Duisburg und das gesamte Ruhrgebiet liefern wir Minibagger, Mobilbagger, Kettenbagger, Scheren- und Gelenkteleskopbühnen sowie Teleskoplader direkt aus NRW – mit 3 Jahren Garantie und Made-in-EU-Qualität. Duisburg beherbergt mit dem Duisburger Hafen (duisport) den größten Binnenhafen Europas und ist zugleich einer der wichtigsten Stahlstandorte Deutschlands (thyssenkrupp Steel, HKM, Hüttenwerke Krupp Mannesmann). Auf den Logport-Flächen in Rheinhausen, Walsum und Friemersheim entstehen kontinuierlich neue Logistikhallen und Containerterminals, in Hochfeld, Marxloh und Bruckhausen laufen umfangreiche Wohnungsbau-, Schulbau- und Quartierssanierungen, und die Konversion ehemaliger Industrieflächen wie 6-Seen-Wedau, RheinPark Hochfeld oder Mercatorquartier ist ein Dauer-Großprojekt für Tiefbau, Erdbau und Abbruch. Unser Hauptsitz in Krefeld (Showroom, Werkstatt, Ersatzteillager) liegt nur rund 25 km südlich – über die A57 erreichen Sie uns in etwa 20 Minuten. Zusätzlich versorgt unser Standort Mülheim an der Ruhr (ca. 15 km östlich, A40) das östliche Stadtgebiet rund um Duisburg-Süd, Huckingen und Wanheim. Für Hafenausbau, Stahlwerksinstandhaltung und Industrieflächen sind unsere 21-Tonnen-Mobilbagger (ZE210GLC), Kettenbagger und Drehteleskoplader Standard – in den Wohnquartieren von Meiderich, Beeck und Homberg dominieren kompakte 1,8- bis 8-Tonnen-Minibagger sowie Elektro-Scherenarbeitsbühnen für Innenausbau und Fassade. Auch Bauunternehmen, GaLaBau-Betriebe und Gerüstbauer aus Moers, Oberhausen, Dinslaken, Rheinberg, Voerden und Kamp-Lintfort nutzen die kurzen Wege zu unseren beiden Standorten Krefeld und Mülheim für Probefahrt, Service und Ersatzteile.",
      plzRange: "47051–47279",
      routeFromCenter: "Duisburg-Innenstadt → A57 → Standort Krefeld (alt.: A40 → Mülheim)",
      driveTimeMinutes: 20,
      osmBbox: "6.65,51.38,6.85,51.50",
      references: [
        { branche: "Logistik- & Hallenbauer Logport/Rheinhausen", plzRange: "47228–47239" },
        { branche: "Industrie- & Stahlbau-Spezialisten Hüttenheim/Walsum", plzRange: "47179–47259" },
        { branche: "Wohnungsbauer Hochfeld, Marxloh & Meiderich", plzRange: "47053–47169" },
        { branche: "Tiefbau- & Erdbauunternehmen Niederrhein", plzRange: "47443–47506" },
      ],
      recommendedProducts: [PROD_ZE210GLC, PROD_TELEHANDLER, PROD_ZS1218ERT],
      faq: [
        {
          question: "Wo kann ich in Duisburg einen Zoomlion Bagger kaufen?",
          answer:
            "Sie kaufen Ihre Zoomlion Maschinen wahlweise über unseren Hauptstandort Krefeld (ca. 25 km, 20 min via A57) oder über den Standort Mülheim an der Ruhr (ca. 15 km östlich). Beide Standorte beraten Sie gleichermaßen für Duisburg.",
        },
        {
          question: "Lohnt sich die Anfahrt von Duisburg zum Standort in Krefeld?",
          answer:
            "Ja – Sie sind über die A57 in rund 20 Minuten am Hauptstandort Krefeld mit Showroom, Werkstatt und Ersatzteillager. Probefahrt und Beratung schaffen Sie an einem Vormittag.",
        },
        {
          question: "Bieten Sie in Duisburg auch Lieferung der Maschinen an?",
          answer:
            "Ja, wir liefern Zoomlion Baumaschinen direkt nach Duisburg-Logport, Rheinhausen, Hochfeld, Walsum, Marxloh sowie in die umliegenden Städte Moers, Oberhausen und Dinslaken – inklusive Einweisung.",
        },
      ],
    },
  },

  krefeld: {
    name: "Krefeld",
    slug: "krefeld",
    region: "Niederrhein",
    description:
      "Direkt an unserem Standort Krefeld profitieren Sie von kurzen Wegen, persönlicher Beratung und sofort verfügbaren Ersatzteilen. Ideal für Projekte am Niederrhein.",
    longDescription:
      "Krefeld ist unser Hauptstandort. Hier finden Sie unseren kompletten Showroom mit Minibaggern, Arbeitsbühnen und Teleskopladern, dazu eine eigene Werkstatt mit Ersatzteillager. Bauunternehmen, GaLaBauer und Industriebetriebe aus Krefeld, Mönchengladbach, Viersen und dem gesamten Niederrhein nutzen die kurzen Wege für Probefahrt, Service und Beratung – inklusive UVV-Prüfung vor Ort.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Krefeld – Standort vor Ort",
    metaDescription:
      "Baumaschinen kaufen in Krefeld ➤ Hauptstandort mit Showroom & Werkstatt ✓ Minibagger, Arbeitsbühne & Teleskoplader ✓ 3 Jahre Garantie ✓ Made in EU. Jetzt Termin vereinbaren!",
    nearbyAreas: ["Mönchengladbach", "Viersen", "Duisburg", "Düsseldorf", "Neuss", "Willich", "Tönisvorst"],
    industries: ["Wohnungsbau", "GaLaBau", "Tiefbau", "Industriebau", "Logistikbau"],
    standort: "Krefeld",
    distanceKm: 0,
    lat: 51.3388,
    lng: 6.5853,
    seoTier: "index",
    cityContent: {
      intro:
        "Sie wollen einen Bagger kaufen in Krefeld, eine Arbeitsbühne mieten oder einen Teleskoplader für Hafen, Industrie und GaLaBau anschaffen? Krefeld ist unser Hauptstandort und Showroom: An der Anrather Straße 291 (47807 Krefeld-Oppum, direkt an der A57) finden Sie das komplette Zoomlion-Programm – Minibagger (ZE18GU 1,8 t, ZE27GU 2,7 t, ZE55GU 5,5 t), Mobil- und Kettenbagger (ZE135G, ZE210GLC), Scheren- und Gelenkteleskopbühnen (ZS0607AC-LI, ZS1218ERT, ZT22JE, ZT58J) und Drehteleskoplader (ZTH4525) – inklusive eigener Werkstatt mit Ersatzteillager und sachkundigem Personal für UVV-Prüfungen. Krefeld selbst ist mit der Seidenindustrie-Tradition, dem Chemiestandort Uerdingen (Bayer/Lanxess/Covestro), dem Hafen Krefeld (RheinHafen) und neuen Wohnquartieren wie Fischeln, Hüls, Bockum und Linn baulich aktiv – hinzu kommen Großprojekte rund um den Krefelder Stadtmittebereich, das Schwanenmarkt-Quartier, die Modernisierung des ÖPNV (SWK) und die Konversion alter Industrieflächen in Linn und Uerdingen. Vom Hauptstandort Krefeld aus erreichen wir die wichtigen Bau-Standorte am Niederrhein und im westlichen Rheinland in unter 30 Minuten: Mönchengladbach (A52), Viersen, Düsseldorf (A57), Duisburg (A57/A40), Neuss, Willich und Tönisvorst. Für die typischen GaLaBau- und Wohnungsbau-Anwendungen am Niederrhein empfehlen wir kompakte Minibagger der 1,8–5,5-Tonnen-Klasse (ZE18GU, ZE27GU, ZE55GU); für den Chemiepark Uerdingen, Hafen- und Hallenbauflächen unsere Mobilbagger ZE135G/ZE210GLC und Drehteleskoplader ZTH4525. Service, UVV-Prüfung, mobiler Notdienst und Ersatzteilversand sind direkt vom Hauptstandort Krefeld organisiert.",
      plzRange: "47798–47929",
      routeFromCenter: "Standort direkt in Krefeld (Anrather Straße 291, 47807 Krefeld)",
      driveTimeMinutes: 0,
      osmBbox: "6.50,51.28,6.70,51.40",
      references: [
        { branche: "GaLaBau- und Wohnungsbau-Betriebe Krefeld & Niederrhein", plzRange: "47798–47929" },
        { branche: "Industriebau Hafen Krefeld / Uerdingen", plzRange: "47829–47839" },
        { branche: "Logistik- & Hallenbauer Willich/Tönisvorst", plzRange: "47877–47918" },
        { branche: "Tiefbauunternehmen Mönchengladbach & Viersen", plzRange: "41061–41748" },
      ],
      recommendedProducts: [PROD_ZE27GU, PROD_ZE55GU, PROD_TELEHANDLER],
      faq: [
        {
          question: "Wo kann ich in Krefeld einen Zoomlion Minibagger kaufen?",
          answer:
            "Direkt bei uns am Hauptstandort Krefeld, Anrather Straße 291. Der komplette Showroom inklusive Werkstatt und Ersatzteillager steht Ihnen für Probefahrt, Beratung und sofortige Übergabe zur Verfügung.",
        },
        {
          question: "Bieten Sie in Krefeld auch UVV-Prüfung und Werkstatt-Service an?",
          answer:
            "Ja – am Standort Krefeld haben wir eine eigene Werkstatt mit Sachkundigen-Personal für UVV-Prüfungen, Wartung und Reparatur aller Zoomlion Maschinen. Auch mobile Service-Einsätze am Niederrhein sind kurzfristig möglich.",
        },
        {
          question: "Bieten Sie in Krefeld auch Lieferung der Maschinen an?",
          answer:
            "Ja, wir liefern Zoomlion Baumaschinen direkt zu Ihrer Baustelle in Krefeld, Hüls, Fischeln, Uerdingen sowie nach Mönchengladbach, Viersen, Willich und Tönisvorst – inklusive Einweisung.",
        },
      ],
    },
  },

  muelheim: {
    name: "Mülheim an der Ruhr",
    slug: "muelheim",
    region: "Ruhrgebiet",
    description:
      "Unser Standort in Mülheim an der Ruhr ist Ihr Anlaufpunkt für das gesamte westliche Ruhrgebiet. Maschinen ansehen, Probefahrt machen, direkt kaufen.",
    longDescription:
      "In Mülheim an der Ruhr sind wir mitten im Ruhrgebiet erreichbar – ideal für Bauunternehmen aus Essen, Oberhausen, Duisburg und Ratingen. Hier können Sie Zoomlion Minibagger, Arbeitsbühnen und Teleskoplader live erleben, eine Probefahrt vereinbaren und sich vor Ort beraten lassen. Service und Ersatzteile gibt es kurzfristig direkt aus dem Standort.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Mülheim – Standort vor Ort",
    metaDescription:
      "Baumaschinen kaufen in Mülheim an der Ruhr ➤ Standort direkt vor Ort ✓ Minibagger, Arbeitsbühne & Teleskoplader ✓ Probefahrt ✓ 3 Jahre Garantie ✓ Made in EU.",
    nearbyAreas: ["Essen", "Oberhausen", "Duisburg", "Ratingen", "Düsseldorf", "Bottrop"],
    industries: ["Industriebau", "Wohnungsbau", "GaLaBau", "Tiefbau", "Hallenbau"],
    standort: "Mülheim an der Ruhr",
    distanceKm: 0,
    lat: 51.4268,
    lng: 6.8826,
    seoTier: "index",
    cityContent: {
      intro:
        "Sie wollen einen Bagger kaufen in Mülheim an der Ruhr, eine Arbeitsbühne mieten oder einen Teleskoplader für Industrie- und Hallenbau anschaffen? In Mülheim an der Ruhr sind wir mit unserem Standort an der Ruhrorter Straße (45478 Mülheim) direkt im westlichen Ruhrgebiet präsent – als exklusiver Zoomlion-Händler für Mülheim, Essen, Oberhausen, Duisburg, Bottrop und Ratingen. Wir führen das komplette Zoomlion-Programm: Minibagger (ZE18GU 1,8 t, ZE27GU 2,7 t, ZE55GU 5,5 t), Mobil- und Kettenbagger (ZE135G, ZE210GLC), Scheren- und Gelenkteleskopbühnen (ZS0607AC-LI, ZS1218ERT, ZT22JE, ZT58J) sowie Drehteleskoplader (ZTH4525). Mülheim selbst ist mit der Hochschule Ruhr West (HRW), dem Innovationsquartier am Hauptbahnhof, der Aufwertung des Ruhrbogens (Ringlokschuppen, MüGa-Gelände, Wasserbahnhof) sowie der Konversion alter Tengelmann- und Friedrich-Wilhelms-Hütten-Areale ein eigenständig wachsender Bau-Standort. Hinzu kommen Wohnungsbau in Heißen, Speldorf, Saarn und Broich, Schul- und Kitaneubauten in Styrum sowie Industrieprojekte rund um die Ruhrau und das Tengelmann-Quartier. Vom Standort Mülheim aus erreichen wir das gesamte westliche Ruhrgebiet in unter 30 Minuten: Essen-Innenstadt in 15 Minuten über die A40, Duisburg-Hafen (duisport) in 15 Minuten über die A40, Oberhausen mit CentrO direkt nebenan über die A3 und Ratingen in 20 Minuten über die A52. Für Industriebau, Hafenausbau und Stahlwerksinstandhaltung sind unsere 21-Tonnen-Mobilbagger (ZE210GLC) und Drehteleskoplader (ZTH4525) Standard, für Wohnquartiere in Speldorf und Saarn dominieren kompakte 1,8–5,5-Tonnen-Minibagger (ZE18GU, ZE27GU, ZE55GU). Hier können Sie alle Zoomlion-Maschinen live besichtigen, eine Probefahrt machen und sich beraten lassen – Service, UVV-Prüfung und Ersatzteile organisieren wir kurzfristig über unsere Werkstatt am Hauptstandort Krefeld (ca. 35 km, 30 min via A40/A57).",
      plzRange: "45468–45481",
      routeFromCenter: "Standort direkt in Mülheim a. d. Ruhr (Ruhrorter Straße, 45478 Mülheim)",
      driveTimeMinutes: 0,
      osmBbox: "6.80,51.38,7.00,51.50",
      references: [
        { branche: "Wohnungsbau Speldorf, Heißen & Saarn", plzRange: "45468–45481" },
        { branche: "Industriebau & Hallenbauer Ruhrau/Styrum", plzRange: "45478–45479" },
        { branche: "GaLaBau-Betriebe Mülheim & Ratingen", plzRange: "40878–45481" },
        { branche: "Tiefbauunternehmen Essen-West & Oberhausen", plzRange: "45355–46147" },
      ],
      recommendedProducts: [PROD_ZE55GU, PROD_TELEHANDLER, PROD_ZT22JE],
      faq: [
        {
          question: "Wo kann ich in Mülheim an der Ruhr einen Zoomlion Bagger kaufen?",
          answer:
            "Direkt bei uns am Standort Mülheim, Ruhrorter Straße, 45478 Mülheim. Sie können Minibagger, Arbeitsbühnen und Teleskoplader live besichtigen, eine Probefahrt machen und sich vor Ort beraten lassen.",
        },
        {
          question: "Bieten Sie in Mülheim auch Service und Ersatzteile vor Ort an?",
          answer:
            "Ja – am Standort Mülheim erfolgt die Beratung und Übergabe vor Ort, Werkstatt-Service und UVV-Prüfungen werden über unseren Hauptstandort Krefeld koordiniert. Mobile Service-Einsätze in Mülheim, Essen und Oberhausen sind kurzfristig möglich.",
        },
        {
          question: "Bieten Sie in Mülheim auch Lieferung der Maschinen an?",
          answer:
            "Ja, wir liefern Zoomlion Baumaschinen vom Standort Mülheim direkt nach Speldorf, Heißen, Saarn und Styrum sowie in die Nachbarstädte Essen, Oberhausen, Duisburg und Ratingen – inklusive Einweisung.",
        },
      ],
    },
  },

  // ============================================================
  // Tier 2 (noindex,follow) – Großstädte ohne Unique-Content
  // ============================================================
  aachen: {
    name: "Aachen",
    slug: "aachen",
    region: "Euregio",
    description:
      "Im Dreiländereck liefern wir Zoomlion Baumaschinen für Projekte in Aachen und der gesamten Euregio. EU-produzierte Qualität, die überzeugt.",
    longDescription:
      "Aachen ist eine wachstumsstarke Stadt mit Universität, Klinikneubauten und vielen kleineren GaLaBau-Projekten. Vom Standort Bonn aus liefern wir Minibagger, Arbeitsbühnen und Teleskoplader nach Aachen, Düren, Eschweiler und in die gesamte Euregio. Die Made-in-EU-Produktion in Ungarn sorgt für kurze Lieferzeiten und EU-konforme Qualität.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Aachen – Bagger neu vom Händler",
    metaDescription:
      "Minibagger, Bagger, Arbeitsbühne & Teleskoplader kaufen in Aachen ➤ Made in EU ✓ 3 Jahre Garantie ✓ Lieferung in die Euregio ✓ Service in NRW. Jetzt Angebot anfragen!",
    nearbyAreas: ["Düren", "Eschweiler", "Stolberg", "Herzogenrath", "Würselen", "Alsdorf"],
    industries: ["Klinikbau", "Universitätsbau", "GaLaBau", "Wohnungsbau", "Tiefbau"],
    standort: "Bonn",
    distanceKm: 90,
    lat: 50.7753,
    lng: 6.0839,
    seoTier: "noindex",
  },
  wuppertal: {
    name: "Wuppertal",
    slug: "wuppertal",
    region: "Bergisches Land",
    description:
      "Im Bergischen Land stellt das Gelände besondere Anforderungen an Baumaschinen. Unsere Zoomlion Bagger und Bühnen meistern auch anspruchsvolle Hanglagen.",
    longDescription:
      "Wuppertal ist geprägt von Hanglagen, Brückenbauten und engen Innenstadtbaustellen – ideale Einsatzbereiche für kompakte Minibagger und wendige Arbeitsbühnen. Vom Standort Krefeld liefern wir Zoomlion Baumaschinen nach Wuppertal, Solingen, Remscheid und das gesamte Bergische Land. Auch Drehteleskoplader sind in Hanglagen ein echter Vorteil.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Wuppertal – Bagger neu vom Händler",
    metaDescription:
      "Minibagger, Bagger, Arbeitsbühne & Teleskoplader kaufen in Wuppertal ➤ Made in EU ✓ 3 Jahre Garantie ✓ Ideal für Hanglagen ✓ Service in NRW. Jetzt Angebot anfragen!",
    nearbyAreas: ["Solingen", "Remscheid", "Velbert", "Haan", "Mettmann", "Schwelm"],
    industries: ["Brückenbau", "Hangsicherung", "Wohnungsbau", "GaLaBau", "Innenstadtprojekte"],
    standort: "Krefeld",
    distanceKm: 60,
    lat: 51.2562,
    lng: 7.1508,
    seoTier: "noindex",
  },

  // ============================================================
  // Tier 3 (excluded) – kein Unique-Content, raus aus Sitemap
  // ============================================================
  moenchengladbach: {
    name: "Mönchengladbach",
    slug: "moenchengladbach",
    region: "Niederrhein",
    description:
      "Mönchengladbach am Niederrhein wächst wirtschaftlich und baulich. Vom nahen Krefeld liefern wir Zoomlion Baumaschinen schnell und unkompliziert.",
    longDescription:
      "Mönchengladbach entwickelt sich mit Logistikflächen, Wohnquartieren und dem Nordpark zu einem wichtigen Bau-Standort am Niederrhein. Unser Standort Krefeld ist nur 25 km entfernt – ideale Voraussetzungen für schnelle Lieferung von Minibaggern, Arbeitsbühnen und Teleskopladern nach Mönchengladbach, Rheydt, Odenkirchen und das Umland.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Mönchengladbach – Bagger neu",
    metaDescription:
      "Minibagger, Bagger, Arbeitsbühne & Teleskoplader kaufen in Mönchengladbach ➤ Standort Krefeld nur 25 km ✓ 3 Jahre Garantie ✓ Made in EU. Jetzt anfragen!",
    nearbyAreas: ["Viersen", "Krefeld", "Erkelenz", "Korschenbroich", "Jüchen"],
    industries: ["Logistikbau", "Wohnungsbau", "GaLaBau", "Industriebau"],
    standort: "Krefeld",
    distanceKm: 25,
    lat: 51.1805,
    lng: 6.4428,
    seoTier: "excluded",
  },
  muenster: {
    name: "Münster",
    slug: "muenster",
    region: "Münsterland",
    description:
      "In Münster und im Münsterland sind hochwertige Baumaschinen gefragt – für Wohnungsbau, GaLaBau und landwirtschaftliche Betriebe.",
    longDescription:
      "Münster gehört zu den lebenswertesten Städten Deutschlands – mit kontinuierlichem Wohnungsbau, Universitätsbauten und einer starken Landwirtschaft im Umland. Zoomlion Teleskoplader sind in der Landwirtschaft besonders gefragt, kompakte Minibagger werden für GaLaBau-Projekte in Münster und Umgebung eingesetzt. Wir liefern in das gesamte Münsterland.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Münster – Bagger & Teleskoplader",
    metaDescription:
      "Minibagger, Arbeitsbühne, Bagger & Teleskoplader kaufen in Münster ➤ Made in EU ✓ 3 Jahre Garantie ✓ Lieferung ins Münsterland ✓ Ideal für GaLaBau & Landwirtschaft.",
    nearbyAreas: ["Greven", "Telgte", "Sendenhorst", "Senden", "Coesfeld", "Warendorf"],
    industries: ["Wohnungsbau", "Landwirtschaft", "GaLaBau", "Universitätsbau"],
    standort: "Mülheim an der Ruhr",
    distanceKm: 100,
    lat: 51.9607,
    lng: 7.6261,
    seoTier: "excluded",
  },
  bielefeld: {
    name: "Bielefeld",
    slug: "bielefeld",
    region: "Ostwestfalen-Lippe",
    description:
      "Bielefeld in OWL ist Industriestandort und wachsende Großstadt. Für Bauprojekte liefern wir Zoomlion Baumaschinen direkt an.",
    longDescription:
      "Bielefeld ist mit seiner Industrie, dem Klinikum und der Universität ein wichtiger Bau-Standort in Ostwestfalen-Lippe. Wir beliefern Bielefeld, Gütersloh, Herford und das Umland mit Minibaggern, Arbeitsbühnen und Teleskopladern – Made in EU mit 3 Jahren Garantie.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Bielefeld – Bagger neu vom Händler",
    metaDescription:
      "Minibagger, Bagger, Arbeitsbühne & Teleskoplader kaufen in Bielefeld ➤ Made in EU ✓ 3 Jahre Garantie ✓ Lieferung nach OWL ✓ Service in NRW. Jetzt Angebot anfragen!",
    nearbyAreas: ["Gütersloh", "Herford", "Bad Salzuflen", "Detmold", "Halle (Westf.)"],
    industries: ["Industriebau", "Klinikbau", "Wohnungsbau", "GaLaBau"],
    standort: "Mülheim an der Ruhr",
    distanceKm: 130,
    lat: 52.0302,
    lng: 8.5325,
    seoTier: "excluded",
  },
  bochum: {
    name: "Bochum",
    slug: "bochum",
    region: "Ruhrgebiet",
    description:
      "Bochum mitten im Ruhrgebiet wandelt sich vom Industriestandort zur modernen Universitätsstadt – mit vielen Bauprojekten.",
    longDescription:
      "Bochum erfindet sich neu: Mark 51°7 auf der ehemaligen Opel-Fläche, das Innenstadt-Quartier und der Ruhr-Park sind Beispiele für die Bau-Aktivität. Vom Standort Mülheim an der Ruhr (nur 25 km entfernt) liefern wir Zoomlion Minibagger, Arbeitsbühnen und Teleskoplader direkt nach Bochum, Wattenscheid und Langendreer.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Bochum – Bagger neu vom Händler",
    metaDescription:
      "Minibagger, Bagger, Arbeitsbühne & Teleskoplader kaufen in Bochum ➤ Standort Mülheim nur 25 km ✓ 3 Jahre Garantie ✓ Made in EU. Jetzt Angebot anfragen!",
    nearbyAreas: ["Essen", "Herne", "Witten", "Hattingen", "Gelsenkirchen", "Wattenscheid"],
    industries: ["Konversion", "Universitätsbau", "Wohnungsbau", "GaLaBau", "Industriebau"],
    standort: "Mülheim an der Ruhr",
    distanceKm: 25,
    lat: 51.4818,
    lng: 7.2162,
    seoTier: "excluded",
  },
  leverkusen: {
    name: "Leverkusen",
    slug: "leverkusen",
    region: "Rheinland",
    description:
      "Leverkusen zwischen Köln und Düsseldorf ist Chemie- und Industriestandort mit ständigem Bedarf an Baumaschinen.",
    longDescription:
      "Leverkusen ist mit dem Chempark, der Bayer-Industrie und dem Wohnungsbau in Opladen, Rheindorf und Manfort ein vielseitiger Bau-Markt. Vom Standort Bonn liefern wir Zoomlion Minibagger, Arbeitsbühnen und Teleskoplader nach Leverkusen – ideal für Industriewartung, GaLaBau und Wohnungsbau.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Leverkusen – Bagger neu",
    metaDescription:
      "Minibagger, Bagger, Arbeitsbühne & Teleskoplader kaufen in Leverkusen ➤ Made in EU ✓ 3 Jahre Garantie ✓ Standort Bonn nur 40 km ✓ Schnelle Lieferung. Jetzt anfragen!",
    nearbyAreas: ["Köln", "Bergisch Gladbach", "Monheim am Rhein", "Langenfeld", "Burscheid"],
    industries: ["Industriewartung", "Chemiepark-Bauten", "Wohnungsbau", "GaLaBau"],
    standort: "Bonn",
    distanceKm: 40,
    lat: 51.0459,
    lng: 7.0192,
    seoTier: "excluded",
  },
  solingen: {
    name: "Solingen",
    slug: "solingen",
    region: "Bergisches Land",
    description:
      "Solingen, die Klingenstadt im Bergischen Land, hat anspruchsvolle Bauprojekte in Hanglagen und engen Stadtkernen.",
    longDescription:
      "Solingen vereint historische Industriearchitektur mit moderner Stadtentwicklung – häufig in Hanglagen oder engen Innenstadtbereichen. Kompakte Minibagger und wendige Arbeitsbühnen sind hier besonders gefragt. Vom Standort Krefeld liefern wir Zoomlion Baumaschinen nach Solingen, Wald, Ohligs und Höhscheid.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Solingen – Bagger neu vom Händler",
    metaDescription:
      "Minibagger, Bagger, Arbeitsbühne & Teleskoplader kaufen in Solingen ➤ Made in EU ✓ 3 Jahre Garantie ✓ Ideal für Hanglagen ✓ Lieferung im Bergischen Land.",
    nearbyAreas: ["Wuppertal", "Remscheid", "Haan", "Hilden", "Leichlingen"],
    industries: ["Industriebau", "Innenstadtprojekte", "Hanglagen", "Wohnungsbau", "GaLaBau"],
    standort: "Krefeld",
    distanceKm: 55,
    lat: 51.1657,
    lng: 7.0673,
    seoTier: "excluded",
  },
  oberhausen: {
    name: "Oberhausen",
    slug: "oberhausen",
    region: "Ruhrgebiet",
    description:
      "Oberhausen mit CentrO und großen Logistikflächen ist ein dynamischer Bau-Standort im westlichen Ruhrgebiet.",
    longDescription:
      "Oberhausen hat sich zu einem Zentrum für Logistik, Einzelhandel und Wohnungsbau entwickelt. Vom benachbarten Mülheim an der Ruhr liefern wir Zoomlion Minibagger, Arbeitsbühnen und Teleskoplader direkt nach Oberhausen, Sterkrade und Osterfeld – mit kürzesten Wegen für Service und Ersatzteile.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Oberhausen – Bagger neu",
    metaDescription:
      "Minibagger, Bagger, Arbeitsbühne & Teleskoplader kaufen in Oberhausen ➤ Standort Mülheim nur 10 km ✓ 3 Jahre Garantie ✓ Made in EU. Jetzt Angebot anfragen!",
    nearbyAreas: ["Mülheim an der Ruhr", "Duisburg", "Bottrop", "Essen", "Dinslaken"],
    industries: ["Logistikbau", "Einzelhandel", "Wohnungsbau", "Industriebau", "GaLaBau"],
    standort: "Mülheim an der Ruhr",
    distanceKm: 10,
    lat: 51.4963,
    lng: 6.8631,
    seoTier: "excluded",
  },
  gelsenkirchen: {
    name: "Gelsenkirchen",
    slug: "gelsenkirchen",
    region: "Ruhrgebiet",
    description:
      "Gelsenkirchen im Herzen des Ruhrgebiets bietet vielfältige Bauprojekte – von Wohnungsbau bis Industrie-Konversion.",
    longDescription:
      "Gelsenkirchen entwickelt mit Quartier Graf Bismarck, der Veltins-Arena und vielen Wohnbauprojekten viele neue Flächen. Vom Standort Mülheim an der Ruhr beliefern wir Bauunternehmen, GaLaBauer und Industriebetriebe in Gelsenkirchen, Buer und Erle mit Minibaggern, Arbeitsbühnen und Teleskopladern.",
    metaTitle: "Minibagger & Arbeitsbühne kaufen Gelsenkirchen – Bagger neu",
    metaDescription:
      "Minibagger, Bagger, Arbeitsbühne & Teleskoplader kaufen in Gelsenkirchen ➤ Standort Mülheim nur 25 km ✓ 3 Jahre Garantie ✓ Made in EU. Jetzt anfragen!",
    nearbyAreas: ["Essen", "Bochum", "Herne", "Bottrop", "Recklinghausen"],
    industries: ["Konversion", "Wohnungsbau", "GaLaBau", "Industriebau"],
    standort: "Mülheim an der Ruhr",
    distanceKm: 25,
    lat: 51.5177,
    lng: 7.0857,
    seoTier: "excluded",
  },
};
