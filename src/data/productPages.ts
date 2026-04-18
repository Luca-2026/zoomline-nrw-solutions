// Produkt-Detailseiten (Single Source of Truth pro Modell)
// Hinweis: Diese Datei ergänzt src/data/products.ts (Katalog/Konfigurator)
// und liefert die ausführlichen Detail-Inhalte mit Datenblatt-PDF & JSON-LD.
// WICHTIG: Bilder bewusst NICHT hier importieren, sondern in productImages.ts.
// Grund: Diese Datei wird vom Prerender-Skript (tsx/Node) gelesen und kann
// keine .png/.jpg-Module laden.

export type ProductCategory = "bagger" | "arbeitsbuehnen";

export interface ProductSpec {
  label: string;
  value: string;
  schemaName?: string;
  schemaUnit?: string;
  schemaValue?: string | number;
}

export interface ProductSpecGroup {
  heading: string;
  specs: ProductSpec[];
}

export interface ProductPage {
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  /** Kurzer Produkttyp, z. B. "Minibagger 2 Tonnen" */
  typeLabel: string;
  /** Hauptmodellbezeichnung */
  name: string;
  alternateNames: string[];
  tagline: string;
  /** Public-URL für Schema/Sitemap (absolute path beginnend mit /) – auch
   *  als Fallback-`<img src>` nutzbar, wenn kein Asset-Mapping vorliegt. */
  imagePublicPath: string;
  datasheetPdf: string;
  description: string[];
  useCases: { title: string; description: string }[];
  usps: string[];
  specGroups: ProductSpecGroup[];
  faq: { question: string; answer: string }[];
  countryOfOrigin: string;
  priceFrom: number | null;
  relatedSlugs: string[];
}

export const PRODUCT_PAGES: ProductPage[] = [
  // ====================== ZE20G ======================
  {
    slug: "ze20g",
    category: "bagger",
    categoryLabel: "Minibagger",
    typeLabel: "Minibagger 2 t",
    name: "Zoomlion ZE20G Minibagger",
    alternateNames: ["Zoomlion ZE20G", "ZE20G Minibagger", "Zoomlion 2-Tonnen-Bagger"],
    tagline:
      "Der kompakte 2-Tonnen-Minibagger mit variabler Fahrwerksbreite – ideal für engen Einsatz in GaLaBau, Tiefbau und Innenabbruch.",
    imagePublicPath: "/excavators/ze20g.png",
    datasheetPdf: "/datenblaetter/zoomlion-ze20g-datenblatt.pdf",
    description: [
      "Der Zoomlion ZE20G ist ein kompakter 2-Tonnen-Minibagger mit einem Einsatzgewicht von 1.970 kg. Sein variables Fahrwerk (750–1.070 mm) macht ihn zum idealen Begleiter für Arbeiten auf engstem Raum: im Garten- und Landschaftsbau, beim Innenabbruch, für Hausanschluss- und Kabelgrabenarbeiten sowie in allen Projekten, bei denen enge Hofdurchfahrten oder schmale Zuwege überwunden werden müssen.",
      "Angetrieben wird der ZE20G vom bewährten Kubota D1105 Diesel mit 15,4 kW (21 PS) – ein Motor, der sich millionenfach im Einsatz bewährt hat und der neuesten EU-Abgasstufe V / Tier 4F entspricht. Trotz der kompakten Abmessungen erreicht die Maschine eine Grabtiefe von 2.555 mm und eine maximale Grabreichweite von 4.130 mm.",
      "Wie alle Zoomlion-Neumaschinen kommt der ZE20G mit 3 Jahren Herstellergarantie und wird in der EU-Produktion (Werk Ungarn) gefertigt.",
    ],
    useCases: [
      { title: "GaLaBau", description: "Pflasterarbeiten, Teichbau, Beetgestaltung und Landschaftsformung." },
      { title: "Tiefbau (klein)", description: "Hausanschlüsse, Kabelgräben, Drainagen, Leitungsarbeiten." },
      { title: "Innenabbruch", description: "Sanierungsarbeiten in bestehenden Gebäuden dank geringer Transporthöhe." },
      { title: "Landwirtschaft", description: "Zaunbau, Pfostenlöcher, Drainagen auf Hof und Feld." },
      { title: "Private Großprojekte", description: "Poolbau, Erdarbeiten rund ums Eigenheim." },
    ],
    usps: [
      "Variables Fahrwerk 750–1.070 mm – passt durch Standardtüren",
      "Kubota D1105 Dieselmotor – weltweit bewährt",
      "EU Stage V / Tier 4F Abgasstufe – zukunftssicher",
      "3 Jahre Herstellergarantie serienmäßig",
      "EU-Produktion im Zoomlion-Werk Ungarn",
      "Beratung, Probefahrt und Service an 3 Standorten in NRW",
    ],
    specGroups: [
      {
        heading: "Grunddaten",
        specs: [
          { label: "Einsatzgewicht", value: "1.970 kg", schemaName: "Einsatzgewicht", schemaUnit: "KGM", schemaValue: 1970 },
          { label: "Standard-Schaufelinhalt", value: "0,04 m³" },
          { label: "Schwenkgeschwindigkeit", value: "9,5 U/min" },
          { label: "Fahrgeschwindigkeit (hoch/niedrig)", value: "4,2 / 2,2 km/h" },
          { label: "Max. Zugkraft", value: "16,6 kN" },
          { label: "Grabkraft Schaufel", value: "18 kN" },
          { label: "Grabkraft Stiel", value: "8,5 kN" },
        ],
      },
      {
        heading: "Motor",
        specs: [
          { label: "Hersteller", value: "Kubota" },
          { label: "Modell", value: "D1105" },
          { label: "Nennleistung", value: "15,4 kW (21 PS) bei 2.400 U/min", schemaName: "Motorleistung", schemaUnit: "KWT", schemaValue: 15.4 },
          { label: "Hubraum", value: "1,123 l" },
          { label: "Abgasstufe", value: "EU Stage V / Tier 4F" },
        ],
      },
      {
        heading: "Abmessungen",
        specs: [
          { label: "Länge", value: "3.885 mm", schemaName: "Länge", schemaUnit: "MMT", schemaValue: 3885 },
          { label: "Breite (variabel)", value: "980 / 1.300 mm", schemaName: "Breite", schemaUnit: "MMT", schemaValue: 1300 },
          { label: "Höhe", value: "2.310 mm", schemaName: "Höhe", schemaUnit: "MMT", schemaValue: 2310 },
          { label: "Auslegerlänge", value: "1.830 mm" },
          { label: "Stiellänge", value: "1.190 mm" },
          { label: "Heckschwenkradius", value: "1.100 mm" },
          { label: "Spurweite (variabel)", value: "750 / 1.070 mm" },
          { label: "Aufstandslänge Fahrwerk", value: "1.240 mm" },
        ],
      },
      {
        heading: "Arbeitsbereich",
        specs: [
          { label: "Max. Grabreichweite", value: "4.130 mm" },
          { label: "Max. Grabreichweite auf Bodenhöhe", value: "4.070 mm" },
          { label: "Max. Grabtiefe", value: "2.555 mm" },
          { label: "Max. Grabhöhe", value: "3.630 mm" },
          { label: "Max. Abkipphöhe", value: "2.550 mm" },
        ],
      },
    ],
    faq: [
      { question: "Wofür eignet sich der ZE20G besonders?", answer: "Der ZE20G ist dank seines variablen Fahrwerks (ab 750 mm) ideal für Arbeiten in engen Hofdurchfahrten, Innenhöfen und Gärten. Er passt durch die meisten Doppeltüren und ist gleichzeitig voll bauhoftauglich." },
      { question: "Ist der Kubota-Motor im ZE20G ein Markenmotor?", answer: "Ja. Zoomlion setzt im ZE20G den Kubota D1105 ein – einen weltweit millionenfach bewährten Markenmotor mit sehr guter Ersatzteilverfügbarkeit." },
      { question: "Wie hoch ist die Lieferzeit?", answer: "Lagerware ist meist innerhalb von 1–2 Wochen verfügbar. Bei Sonderausstattung oder individueller Konfiguration kalkulieren wir 6–10 Wochen ab Werksauftrag." },
      { question: "Welche Anhängerkategorie benötige ich?", answer: "Bei einem Einsatzgewicht von 1.970 kg plus Anhängergewicht ist ein 3,5-Tonnen-Anhänger (BE-Führerschein oder B96) ausreichend. Genaue Werte richten sich nach Ihrem Zugfahrzeug." },
      { question: "Gibt es eine Probefahrt?", answer: "Ja, an allen drei Standorten in NRW – Bonn, Krefeld und Mülheim an der Ruhr. Termin bitte vorab vereinbaren." },
    ],
    countryOfOrigin: "HU",
    priceFrom: null,
    relatedSlugs: ["ze27gu", "ze55gu"],
  },

  // ====================== ZE27GU ======================
  {
    slug: "ze27gu",
    category: "bagger",
    categoryLabel: "Minibagger",
    typeLabel: "Minibagger 2,5 t (Kurzheck / Null-Schwenk)",
    name: "Zoomlion ZE27GU Minibagger",
    alternateNames: ["Zoomlion ZE27GU", "ZE27GU Kurzheckbagger", "Zoomlion 2,5-Tonnen-Minibagger"],
    tagline:
      "Der vielseitige Kurzheck-Minibagger mit Null-Schwenk, Load-Sensing-Hydraulik und elektrischem Proportional-Joystick – Zoomlions Bestseller in der 2,5-t-Klasse.",
    imagePublicPath: "/excavators/ze27gu.jpg",
    datasheetPdf: "/datenblaetter/zoomlion-ze27gu-datenblatt.pdf",
    description: [
      "Der Zoomlion ZE27GU ist ein professioneller 2,5-Tonnen-Minibagger mit Null-Schwenk-Konstruktion: Der Schwenkradius des Hecks überschreitet im voll ausgefahrenen Zustand die Breite des Fahrwerks nicht. Das macht den ZE27GU zur idealen Wahl für Arbeiten an Hauswänden, in engen Innenhöfen, auf Gehwegen und an stark befahrenen Straßen.",
      "Technisches Highlight ist das Load-Sensing-Hydrauliksystem: Es verteilt die Pumpenleistung bedarfsgerecht und sorgt im Kombinationsbetrieb (z. B. gleichzeitiges Schwenken und Heben) für spürbar feinere Steuerung und höhere Effizienz als klassische Drei-Pumpen-Drosselsysteme. In der hochkonfigurierten Ausführung steuert der elektrische Proportional-Joystick zusätzliche Anbaugeräte direkt vom Joystick aus.",
      "Der ZE27GU ist mit Kabine (2.700 kg) oder mit Schutzdach (2.600 kg) erhältlich. Die hochkonfigurierte Kabinen-Variante kommt serienmäßig mit dem von Zoomlion entwickelten Klimasystem mit Heiz- und Kühlfunktion. 3 Jahre Herstellergarantie, EU-Produktion Ungarn.",
    ],
    useCases: [
      { title: "Tiefbau", description: "Hausanschlüsse, Kanalbau, Leitungsarbeiten – auch in der Innenstadt." },
      { title: "GaLaBau professionell", description: "Profimaschine für gewerbliche Garten- und Landschaftsbauer." },
      { title: "Abbruch leicht/mittel", description: "Innen- und Teilabbruch mit Schnellwechsler und Hydraulikhammer." },
      { title: "Straßenbau", description: "Baugruben, Bordsteinarbeiten, Entwässerungsschächte." },
      { title: "Rohrleitungsbau", description: "Präzise Grabenführung dank Null-Schwenk und Load-Sensing." },
    ],
    usps: [
      "Null-Schwenk (Kurzheckbagger) – sicherer Einsatz an Hauswänden",
      "Load-Sensing-Hydraulik – präzise Kombibewegungen, weniger Kraftstoff",
      "Elektrischer Proportional-Joystick (optional) für Anbaugeräte-Steuerung",
      "Kubota-Motor mit Euro V / T4F – 3-Wirbel-Verbrennungssystem (E-TVCS)",
      "Eigenentwickeltes Klimasystem in der Kabinen-Version",
      "Wahlweise mit Kabine oder Schutzdach, serienmäßig FOPS/ROPS",
      "3 Jahre Herstellergarantie, EU-Produktion",
    ],
    specGroups: [
      {
        heading: "Grunddaten",
        specs: [
          { label: "Einsatzgewicht (Kabine)", value: "2.700 kg", schemaName: "Einsatzgewicht", schemaUnit: "KGM", schemaValue: 2700 },
          { label: "Einsatzgewicht (Verdeck)", value: "2.600 kg" },
          { label: "Standard-Schaufelinhalt", value: "0,08 m³" },
          { label: "Schwenkgeschwindigkeit", value: "10 U/min" },
          { label: "Fahrgeschwindigkeit (hoch/niedrig)", value: "4,2 / 2,6 km/h" },
          { label: "Max. Zugkraft", value: "23,9 kN" },
          { label: "Grabkraft Schaufel (ISO)", value: "23 kN" },
          { label: "Grabkraft Stiel (ISO)", value: "13,8 kN" },
        ],
      },
      {
        heading: "Motor",
        specs: [
          { label: "Hersteller", value: "Kubota" },
          { label: "Nennleistung", value: "15,4 kW (21 PS) bei 2.400 U/min", schemaName: "Motorleistung", schemaUnit: "KWT", schemaValue: 15.4 },
          { label: "Abgasstufe", value: "Euro V / Tier 4F" },
          { label: "Verbrennungssystem", value: "Drei-Wirbel-System (E-TVCS), mechanische Drehzahlregelung" },
        ],
      },
      {
        heading: "Hydrauliksystem",
        specs: [
          { label: "Max. Fördermenge Hauptpumpe", value: "86 l/min" },
          { label: "Arbeitskreislauf", value: "25 MPa" },
          { label: "Schwenkkreislauf", value: "18 MPa" },
          { label: "Fahrkreislauf", value: "25 MPa" },
          { label: "Steuerkreislauf", value: "3,5 MPa" },
          { label: "System", value: "Load-Sensing mit Bedarfsregelung" },
        ],
      },
      {
        heading: "Abmessungen",
        specs: [
          { label: "Gesamtlänge", value: "4.260 mm", schemaName: "Länge", schemaUnit: "MMT", schemaValue: 4260 },
          { label: "Gesamtbreite", value: "1.500 mm", schemaName: "Breite", schemaUnit: "MMT", schemaValue: 1500 },
          { label: "Gesamthöhe (Kabine)", value: "2.490 mm", schemaName: "Höhe", schemaUnit: "MMT", schemaValue: 2490 },
          { label: "Gesamthöhe (Verdeck)", value: "2.470 mm" },
          { label: "Auslegerlänge", value: "2.100 mm" },
          { label: "Stiellänge", value: "1.300 mm" },
          { label: "Heckschwenkradius (Null-Schwenk)", value: "1.535 mm" },
          { label: "Spurweite", value: "1.200 mm" },
        ],
      },
      {
        heading: "Arbeitsbereich",
        specs: [
          { label: "Max. Grabreichweite", value: "4.910 mm" },
          { label: "Max. Grabreichweite auf Bodenhöhe", value: "4.795 mm" },
          { label: "Max. Grabtiefe", value: "2.880 mm" },
          { label: "Max. Grabhöhe", value: "4.410 mm" },
          { label: "Max. Abkipphöhe", value: "2.505 mm" },
          { label: "Min. Schwenkradius vorne", value: "2.100 mm" },
        ],
      },
      {
        heading: "Betriebsmittel-Kapazitäten",
        specs: [
          { label: "Motorkühlmittel", value: "5,1 l" },
          { label: "Motoröl", value: "2,7 l" },
          { label: "Hydrauliksystem gesamt", value: "31 l" },
          { label: "Hydrauliktank", value: "29 l" },
        ],
      },
    ],
    faq: [
      { question: "Was bedeutet „Null-Schwenk\" beim ZE27GU?", answer: "Der Schwenkradius des Hecks bleibt innerhalb der Fahrwerksbreite. Damit können Sie dicht an Mauern, in Einfahrten und entlang von Zäunen arbeiten, ohne dass das Heck nach hinten übersteht – ein erheblicher Sicherheits- und Effizienzgewinn im innerstädtischen Einsatz." },
      { question: "Wie unterscheidet sich der ZE27GU vom ZE20G?", answer: "Der ZE20G ist mit 1.970 kg leichter und hat ein variables Schmalfahrwerk (ab 750 mm). Der ZE27GU ist mit 2.700 kg in der Kabinenversion kräftiger, bietet höhere Grabkräfte (23 kN statt 18 kN an der Schaufel), Null-Schwenk und Load-Sensing-Hydraulik – die Profilösung für gewerblichen Einsatz." },
      { question: "Ist der elektrische Proportional-Joystick serienmäßig?", answer: "Nein, er gehört zur hochkonfigurierten Ausstattung. Wir beraten Sie gerne, welche Ausstattung für Ihren Einsatzzweck optimal ist." },
      { question: "Welche Anbaugeräte sind verfügbar?", answer: "Reißzahn, hydraulischer Schnellwechsler (auch schwenkbar), hydraulischer Meißelhammer, hydraulischer Grabenräumlöffel, Erdbohrer mit 300 mm oder 450 mm Schneckendurchmesser, breite und schmale Tieflöffel. Der empfohlene Meißeldurchmesser für den Hammer liegt bei 45 mm." },
      { question: "Wie sieht das Wartungskonzept aus?", answer: "Die gesamte Heckabdeckung öffnet über eine einzige Schnalle. Die Inspektionsöffnung am Kabinenboden erlaubt Sichtkontrolle der Hydraulikleitungen direkt vom Führerstand. Kühler, Hydrauliköl und Sicherheitsschalter sind über eine seitliche Servicetür zugänglich." },
    ],
    countryOfOrigin: "HU",
    priceFrom: null,
    relatedSlugs: ["ze20g", "ze55gu"],
  },

  // ====================== ZE55GU ======================
  {
    slug: "ze55gu",
    category: "bagger",
    categoryLabel: "Kompaktbagger",
    typeLabel: "Kompaktbagger 5,8 t (Kurzheck / Null-Schwenk)",
    name: "Zoomlion ZE55GU Kompaktbagger",
    alternateNames: ["Zoomlion ZE55GU", "ZE55GU Kettenbagger", "Zoomlion 5,5-Tonnen-Kompaktbagger"],
    tagline:
      "Der 5,8-Tonnen-Kompaktbagger mit Kurzheck-Design, Kubota V2607 Dieselmotor und über 6 Metern Grabreichweite – die Profiklasse für Tiefbau und Abbruch.",
    imagePublicPath: "/excavators/ze55gu.png",
    datasheetPdf: "/datenblaetter/zoomlion-ze55gu-datenblatt.pdf",
    description: [
      "Der Zoomlion ZE55GU ist ein 5,8-Tonnen-Kettenbagger mit echtem Kurzheck-Design (Heckschwenkradius nur 1.065 mm). Er richtet sich an Tiefbauer, Straßenbauer und Abbruchunternehmen, die eine Maschine mit echtem Profi-Anspruch suchen, dabei aber weiterhin auf dem 6-Tonnen-Anhänger transportabel bleiben soll.",
      "Herzstück ist der Kubota V2607 Dieselmotor mit 35 kW (48 PS) und 2,615 l Hubraum – EU Stage V / Tier 4F konform. Mit einer Grabkraft von 44 kN an der Schaufel, 48 kN Zugkraft und einer maximalen Grabtiefe von 3.670 mm deckt der ZE55GU auch anspruchsvolle Fundamentaushübe und Kanalbauarbeiten ab.",
      "Maximale Grabreichweite: 6.135 mm. Maximale Abkipphöhe: 3.885 mm. Damit lassen sich auch LKW-Beladungen auf Standard-Muldenkipper problemlos ausführen. 3 Jahre Herstellergarantie, EU-Produktion.",
    ],
    useCases: [
      { title: "Tiefbau (professionell)", description: "Kanalbau, Leitungsverlegung, Entwässerung – auch bei größeren Querschnitten." },
      { title: "Straßenbau", description: "Baugruben, Bankettarbeiten, Aufbruch- und Rückbauprojekte." },
      { title: "Abbruch", description: "Teilabbruch und Rückbauten mit Schnellwechsler, Hydraulikhammer oder Sortiergreifer." },
      { title: "Fundamentarbeiten", description: "Kellerausschachtung, Punktfundamente, Streifenfundamente." },
      { title: "Landwirtschaft (Großbetriebe)", description: "Drainage, Teichbau, Wegebau, Silogruben." },
    ],
    usps: [
      "Kurzheck-Design (Heckschwenkradius 1.065 mm) – Einsatz dicht an Wänden",
      "Kubota V2607 Dieselmotor – 35 kW / 48 PS, EU Stage V",
      "Grabkraft Schaufel 44 kN, Zugkraft 48 kN",
      "Max. Grabreichweite 6.135 mm, max. Grabtiefe 3.670 mm",
      "Transport mit 6-Tonnen-Anhänger möglich",
      "3 Jahre Herstellergarantie, EU-Produktion Ungarn",
    ],
    specGroups: [
      {
        heading: "Grunddaten",
        specs: [
          { label: "Einsatzgewicht", value: "5.800 kg", schemaName: "Einsatzgewicht", schemaUnit: "KGM", schemaValue: 5800 },
          { label: "Standard-Schaufelinhalt", value: "0,16 m³" },
          { label: "Schwenkgeschwindigkeit", value: "10 U/min" },
          { label: "Fahrgeschwindigkeit (hoch/niedrig)", value: "4,0 / 2,2 km/h" },
          { label: "Max. Zugkraft", value: "48 kN" },
          { label: "Grabkraft Schaufel", value: "44 kN" },
          { label: "Grabkraft Stiel", value: "28 kN" },
        ],
      },
      {
        heading: "Motor",
        specs: [
          { label: "Hersteller", value: "Kubota" },
          { label: "Modell", value: "V2607" },
          { label: "Nennleistung", value: "35 kW (48 PS) bei 2.200 U/min", schemaName: "Motorleistung", schemaUnit: "KWT", schemaValue: 35 },
          { label: "Hubraum", value: "2,615 l" },
          { label: "Abgasstufe", value: "EU Stage V / Tier 4F" },
        ],
      },
      {
        heading: "Abmessungen",
        specs: [
          { label: "Länge", value: "5.500 mm", schemaName: "Länge", schemaUnit: "MMT", schemaValue: 5500 },
          { label: "Breite", value: "1.960 mm", schemaName: "Breite", schemaUnit: "MMT", schemaValue: 1960 },
          { label: "Höhe", value: "2.550 mm", schemaName: "Höhe", schemaUnit: "MMT", schemaValue: 2550 },
          { label: "Auslegerlänge", value: "2.850 mm" },
          { label: "Stiellänge", value: "1.570 mm" },
          { label: "Heckschwenkradius (Null-Schwenk)", value: "1.065 mm" },
          { label: "Spurweite", value: "1.560 mm" },
          { label: "Aufstandslänge Fahrwerk", value: "1.990 mm" },
        ],
      },
      {
        heading: "Arbeitsbereich",
        specs: [
          { label: "Max. Grabreichweite", value: "6.135 mm" },
          { label: "Max. Grabreichweite auf Bodenhöhe", value: "5.995 mm" },
          { label: "Max. Grabtiefe", value: "3.670 mm" },
          { label: "Max. Grabhöhe", value: "5.560 mm" },
          { label: "Max. Abkipphöhe", value: "3.885 mm" },
        ],
      },
    ],
    faq: [
      { question: "Für welche Anwendungen ist der ZE55GU optimal?", answer: "Der ZE55GU ist ein echter Profi-Kompaktbagger für gewerblichen Tiefbau, Kanalbau, Fundamentarbeiten und Abbruch. Mit 35 kW Kubota-Motor und 44 kN Grabkraft an der Schaufel bewältigt er Einsätze, die für kleinere Minibagger bereits grenzwertig wären." },
      { question: "Ist der ZE55GU mit einem 6-Tonnen-Anhänger transportierbar?", answer: "Ja. Das Einsatzgewicht beträgt 5.800 kg. In Kombination mit einem entsprechend dimensionierten Zugfahrzeug und einem Tandem-Anhänger der 6-t-Klasse ist der Transport auf der Straße problemlos möglich." },
      { question: "Was bedeutet Kurzheck-Design beim ZE55GU?", answer: "Der Heckschwenkradius beträgt nur 1.065 mm bei einer Spurbreite von 1.560 mm. Das Heck steht also praktisch nicht über die Fahrwerksbreite hinaus – Sie können dicht an Mauern, Böschungen und Absperrungen arbeiten, ohne Kollisionsgefahr beim Schwenken." },
      { question: "Welche Kraftstoffverbrauchswerte sind realistisch?", answer: "Im typischen Mischbetrieb (Tiefbau, Wechsel zwischen Graben, Schwenken und Laden) kalkulieren Praktiker mit 4–6 Litern pro Stunde beim Kubota V2607. Exakte Werte hängen stark vom Einsatzprofil und der Fahrweise ab." },
      { question: "Gibt es auch eine Gummikettenversion?", answer: "Ja, Gummiketten sind lieferbar und empfehlen sich für Einsätze auf asphaltierten Flächen, im GaLaBau und im innerstädtischen Bereich. Sprechen Sie uns an, wir konfigurieren die Maschine passend zu Ihrem Einsatzprofil." },
    ],
    countryOfOrigin: "HU",
    priceFrom: null,
    relatedSlugs: ["ze27gu", "ze20g"],
  },

  // ====================== ZS0607AC-Li ======================
  {
    slug: "zs0607ac-li",
    category: "arbeitsbuehnen",
    categoryLabel: "Scherenarbeitsbühnen",
    typeLabel: "Elektro-Scherenbühne Lithium, 7,8 m Arbeitshöhe (indoor)",
    name: "Zoomlion ZS0607AC-Li Scherenarbeitsbühne",
    alternateNames: ["Zoomlion ZS0607AC-Li", "ZS0607 AC Lithium", "Zoomlion Scherenbühne 7,8 m"],
    tagline:
      "Kompakte Elektro-Scherenbühne mit Lithium-Ionen-Akku und indoor 7,8 m Arbeitshöhe – leise, emissionsfrei, durch Standardtüren transportierbar.",
    imagePublicPath: "/platforms/zs0607ac-li.png",
    datasheetPdf: "/datenblaetter/zoomlion-zs0607ac-li-datenblatt.pdf",
    description: [
      "Die Zoomlion ZS0607AC-Li ist eine elektrisch angetriebene Scherenarbeitsbühne aus der AC-L-Serie mit Lithium-Ionen-Batterietechnik. Sie erreicht im Indoor-Einsatz eine Arbeitshöhe von 7,8 m (Plattformhöhe 5,8 m) und outdoor 6,4 m (Plattformhöhe 4,4 m) – ideal für Wartungs-, Installations- und Instandhaltungsarbeiten in Industriehallen, Lager- und Logistikgebäuden sowie im Ladenbau.",
      "Die Lithium-Technologie bietet gegenüber klassischen Bleibatterien entscheidende Vorteile: rund 30 % mehr Laufzeit pro Ladung, höhere Zyklenzahl, schnelleres Nachladen, geringerer Wartungsaufwand und verlässliche Leistung auch bei niedrigen Temperaturen bis −20 °C. Die AC-Radmotoren sind IP67 geschützt und damit besonders langlebig.",
      "Intelligente Konnektivität: Batterie-Management-System (BMS) und Maschinensteuerung überwachen gemeinsam Ladezustand, Sicherheitsfunktionen und Betriebsparameter. Die Bühne entspricht der CE/ANSI/CSA-Norm und ist für 2 Personen indoor bzw. 1 Person outdoor zugelassen.",
    ],
    useCases: [
      { title: "Industriehallen-Wartung", description: "Beleuchtung, Lüftung, Brandschutz, Krananlagen." },
      { title: "Lager- und Logistikgebäude", description: "Regalmontage, Beschilderung, Inventurarbeiten." },
      { title: "Elektroinstallation", description: "Verkabelung, Schaltschrankmontage, Beleuchtungstechnik." },
      { title: "Messebau & Events", description: "Aufbau, Rigging, Set-Dekoration – leise und emissionsfrei." },
      { title: "Malerarbeiten Innenbereich", description: "Deckenanstriche, Stuckarbeiten, Fassaden innen." },
    ],
    usps: [
      "Lithium-Ionen-Akku: +30 % Laufzeit gegenüber Blei, bis −20 °C einsatzbereit",
      "IP67-geschützte AC-Radmotoren – besonders langlebig",
      "Integriertes Batterie-Management-System (BMS)",
      "Knickarm-Gelenke wartungs- und schmierfrei",
      "Ausfahrbare Plattform (Extension Deck), einseitig",
      "CE/ANSI/CSA-konform",
      "Lieferung, Einweisung und Service an 3 Standorten in NRW",
    ],
    specGroups: [
      {
        heading: "Arbeitsbereich",
        specs: [
          { label: "Arbeitshöhe (indoor)", value: "7,8 m" },
          { label: "Arbeitshöhe (outdoor)", value: "6,4 m" },
          { label: "Plattformhöhe ausgefahren (indoor)", value: "5,8 m" },
          { label: "Plattformhöhe ausgefahren (outdoor)", value: "4,4 m" },
          { label: "Plattformhöhe eingefahren", value: "1,05 m" },
        ],
      },
      {
        heading: "Plattform",
        specs: [
          { label: "Plattformlänge", value: "1,65 m" },
          { label: "Plattformbreite", value: "0,74 m" },
          { label: "Plattform-Erweiterung", value: "0,91 m (einseitig)" },
          { label: "Max. Plattformkapazität", value: "230 kg" },
          { label: "Kapazität auf Plattform-Erweiterung", value: "113 kg" },
          { label: "Max. Personen (indoor/outdoor)", value: "2 / 1" },
        ],
      },
      {
        heading: "Abmessungen & Transport",
        specs: [
          { label: "Gesamthöhe (Geländer aufgeklappt)", value: "2,20 m", schemaName: "Höhe", schemaUnit: "MTR", schemaValue: 2.2 },
          { label: "Gesamthöhe (Geländer eingeklappt)", value: "1,79 m" },
          { label: "Gesamtlänge", value: "1,85 m", schemaName: "Länge", schemaUnit: "MTR", schemaValue: 1.85 },
          { label: "Gesamtbreite", value: "0,76 m", schemaName: "Breite", schemaUnit: "MTR", schemaValue: 0.76 },
          { label: "Radstand", value: "1,37 m" },
          { label: "Bodenfreiheit (eingefahren)", value: "0,06 m" },
          { label: "Bodenfreiheit (angehoben)", value: "0,016 m" },
          { label: "Gewicht", value: "1.455 kg", schemaName: "Gewicht", schemaUnit: "KGM", schemaValue: 1455 },
        ],
      },
      {
        heading: "Antrieb & Fahrwerk",
        specs: [
          { label: "Fahrgeschwindigkeit (eingefahren)", value: "4 km/h" },
          { label: "Fahrgeschwindigkeit (angehoben)", value: "0,8 km/h" },
          { label: "Wenderadius (innen)", value: "0,1 m" },
          { label: "Wenderadius (außen)", value: "2,2 m" },
          { label: "Steigfähigkeit", value: "25 % (14°)" },
          { label: "Max. Arbeitsneigung (seitlich/vertikal)", value: "1,5° / 3°" },
          { label: "Reifen", value: "Ø 323 × 100 mm, vollgefüllt" },
          { label: "Hubmotor", value: "24 V / 3,3 kW" },
          { label: "Antriebsmotor", value: "2 × 0,65 kW" },
          { label: "Auf-/Abfahrzeit", value: "20 s / 24 s" },
        ],
      },
      {
        heading: "Energie",
        specs: [
          { label: "Batterie", value: "135 Ah Lithium-Ionen" },
          { label: "Ladegerät", value: "24 V / 30 A" },
        ],
      },
    ],
    faq: [
      { question: "Wie lange hält eine Akkuladung?", answer: "Bei durchschnittlichem Einsatz reicht eine volle Ladung für einen typischen Arbeitstag (ca. 6 h produktive Arbeitszeit). Die Lithium-Technologie ermöglicht ca. 30 % mehr Laufzeit als klassische Blei-Säure-Batterien und schnellere Zwischenladungen in Pausen." },
      { question: "Kann die ZS0607AC-Li durch normale Türen transportiert werden?", answer: "Mit einer Gesamtbreite von 0,76 m und einer eingeklappten Geländerhöhe von 1,79 m passt die Bühne durch die meisten Industrie-Doppeltüren und viele Standard-Industrietore. Prüfen Sie die Durchfahrthöhe Ihrer Zuwege vor dem Einsatz." },
      { question: "Ist der Einsatz im Freien möglich?", answer: "Ja. Die zulässige Arbeitshöhe im Freien liegt bei 6,4 m. Die maximal zulässige Arbeitsneigung beträgt 1,5° seitlich und 3° vertikal. Bei stärkerem Wind oder Schräglage ist der Einsatz auszusetzen." },
      { question: "Welche Vorteile hat das BMS?", answer: "Das Battery Management System überwacht Ladezustand, Zellspannung und Temperatur kontinuierlich. Es schützt den Akku vor Tiefentladung und Überladung, verlängert die Lebensdauer und bietet zusammen mit der Maschinensteuerung ein doppeltes Sicherheitsnetz." },
      { question: "Was unterscheidet die Modelle ZS0607AC-Li und ZS0607ACW-Li?", answer: "Die „W\"-Variante hat eine breitere Ausführung (0,81 m statt 0,76 m) mit anderen Kapazitätswerten. Für Indoor-Einsatz durch Standardtüren ist meist die AC-Li-Variante die bessere Wahl." },
    ],
    countryOfOrigin: "CN",
    priceFrom: null,
    relatedSlugs: ["zs1012ac-li", "zmp09j"],
  },

  // ====================== ZS1012AC-Li ======================
  {
    slug: "zs1012ac-li",
    category: "arbeitsbuehnen",
    categoryLabel: "Scherenarbeitsbühnen",
    typeLabel: "Elektro-Scherenbühne Lithium, 11,8 m Arbeitshöhe",
    name: "Zoomlion ZS1012AC-Li Scherenarbeitsbühne",
    alternateNames: ["Zoomlion ZS1012AC-Li", "ZS1012 AC Lithium", "Zoomlion Scherenbühne 11,8 m"],
    tagline:
      "Elektro-Scherenbühne mit Lithium-Ionen-Akku und 11,8 m Arbeitshöhe – für mittelhohe Industrie-, Lager- und Logistikeinsätze.",
    imagePublicPath: "/platforms/zs1012ac-li.png",
    datasheetPdf: "/datenblaetter/zoomlion-zs1012ac-li-datenblatt.pdf",
    description: [
      "Die Zoomlion ZS1012AC-Li ist die große Schwester der ZS0607AC-Li: 11,8 m Arbeitshöhe (Plattformhöhe 9,8 m), mit 350 kg Plattformkapazität, Platz für 2 Personen indoor plus Material, und einer großzügigen Plattform von 2,30 m × 1,12 m – plus zusätzlicher Plattformerweiterung von 0,91 m.",
      "Wie alle Modelle der AC-L-Serie nutzt die ZS1012AC-Li Lithium-Ionen-Batterietechnik (230 Ah) und die bewährten IP67-geschützten AC-Radmotoren. Ergebnis: längere Einsatzzeiten, geringerer Wartungsaufwand, verlässliche Leistung auch bei kalten Temperaturen.",
      "Einsatzschwerpunkt der ZS1012AC-Li: Wartung und Installation in mittelhohen Industrie- und Lagerhallen, Logistikzentren und Produktionsstätten. CE/ANSI/CSA-konform.",
    ],
    useCases: [
      { title: "Industriehallen-Wartung mittlere Höhe", description: "Krananlagen, Fördertechnik, Hallenbeleuchtung bis 11 m Höhe." },
      { title: "Lager-/Logistikzentren", description: "Hochregale, Förderband-Wartung, Sprinkleranlagen." },
      { title: "Produktionsstätten", description: "Installation von Rohr- und Kabeltrassen, Anlagenwartung." },
      { title: "Rechenzentren / Technische Gebäude", description: "Klima-, Lüftungs- und IT-Infrastrukturarbeiten." },
      { title: "Großflächige Malerarbeiten", description: "Industriehallen-Anstriche, Instandsetzung von Dachuntersichten." },
    ],
    usps: [
      "11,8 m Arbeitshöhe – eine der beliebtesten Scherenbühnen-Klassen",
      "350 kg Plattformkapazität – Platz für 2 Personen plus Material",
      "Lithium-Ionen-Akku 230 Ah mit BMS",
      "IP67-geschützte AC-Radmotoren",
      "Plattformerweiterung 0,91 m einseitig ausfahrbar",
      "Wartungsfreie Gelenke und Lager",
      "CE/ANSI/CSA-konform",
      "Beratung, Service und Ersatzteile in NRW",
    ],
    specGroups: [
      {
        heading: "Arbeitsbereich",
        specs: [
          { label: "Arbeitshöhe", value: "11,80 m" },
          { label: "Plattformhöhe ausgefahren", value: "9,80 m" },
          { label: "Plattformhöhe eingefahren", value: "1,39 m" },
        ],
      },
      {
        heading: "Plattform",
        specs: [
          { label: "Plattformlänge", value: "2,30 m" },
          { label: "Plattformbreite", value: "1,12 m" },
          { label: "Plattform-Erweiterung", value: "0,91 m (einseitig)" },
          { label: "Max. Plattformkapazität", value: "350 kg" },
          { label: "Kapazität auf Plattform-Erweiterung", value: "113 kg" },
          { label: "Max. Personen (indoor/outdoor)", value: "2 / 1" },
        ],
      },
      {
        heading: "Abmessungen & Transport",
        specs: [
          { label: "Gesamthöhe (Geländer aufgeklappt)", value: "2,53 m", schemaName: "Höhe", schemaUnit: "MTR", schemaValue: 2.53 },
          { label: "Gesamthöhe (Geländer eingeklappt)", value: "2,00 m" },
          { label: "Gesamtlänge", value: "2,49 m", schemaName: "Länge", schemaUnit: "MTR", schemaValue: 2.49 },
          { label: "Gesamtbreite", value: "1,15 m", schemaName: "Breite", schemaUnit: "MTR", schemaValue: 1.15 },
          { label: "Radstand", value: "1,85 m" },
          { label: "Bodenfreiheit (eingefahren)", value: "0,11 m" },
          { label: "Bodenfreiheit (angehoben)", value: "0,02 m" },
          { label: "Gewicht", value: "2.930 kg", schemaName: "Gewicht", schemaUnit: "KGM", schemaValue: 2930 },
        ],
      },
      {
        heading: "Antrieb & Fahrwerk",
        specs: [
          { label: "Fahrgeschwindigkeit (eingefahren)", value: "4 km/h" },
          { label: "Fahrgeschwindigkeit (angehoben)", value: "0,8 km/h" },
          { label: "Wenderadius (innen)", value: "0,1 m" },
          { label: "Wenderadius (außen)", value: "2,2 m" },
          { label: "Steigfähigkeit", value: "25 % (14°)" },
          { label: "Max. Arbeitsneigung (seitlich/vertikal)", value: "1,5° / 3°" },
          { label: "Reifen", value: "Ø 381 × 127 mm, vollgefüllt" },
          { label: "Hubmotor", value: "24 V / 3,3 kW" },
          { label: "Antriebsmotor", value: "2 × 0,75 kW" },
          { label: "Auf-/Abfahrzeit", value: "60 s / 35 s" },
        ],
      },
      {
        heading: "Energie",
        specs: [
          { label: "Batterie", value: "230 Ah Lithium-Ionen" },
          { label: "Ladegerät", value: "24 V / 30 A (optional 60 A)" },
        ],
      },
    ],
    faq: [
      { question: "Ist die ZS1012AC-Li auch outdoor einsetzbar?", answer: "Für die ZS1012AC-Li ist eine Outdoor-Klassifizierung im Hersteller-Datenblatt nicht explizit mit einer reduzierten Arbeitshöhe angegeben wie bei kleineren Modellen. Bitte klären Sie den spezifischen Outdoor-Einsatz vor Kauf mit unserem Fachteam." },
      { question: "Passt die Bühne in einen Standard-Aufzug?", answer: "Die Bühne ist mit 1,15 m Breite und 2,49 m Länge zu groß für die meisten Passagieraufzüge, passt aber in die meisten Industrie-Lastaufzüge. Prüfen Sie vor Einsatz die Aufzugsmaße." },
      { question: "Wie unterscheiden sich ZS1012AC-Li und ZS1212AC-Li?", answer: "Die ZS1212AC-Li erreicht 13,8 m Arbeitshöhe (statt 11,8 m). Bei der Plattformgröße und Kapazität (350 kg) sind beide Modelle gleich. Wahl abhängig von der benötigten Höhe." },
      { question: "Wie lange dauert eine Vollladung?", answer: "Mit dem serienmäßigen 24 V / 30 A Ladegerät rund 10 Stunden. Mit dem optionalen 60-A-Ladegerät halbiert sich die Ladezeit in etwa – ideal, wenn die Bühne im 2-Schichtbetrieb läuft." },
      { question: "Gibt es einen Überrollbügel als Kopfschutz?", answer: "Ja, als Option („Overhead Protection Bar\"). Für Einsätze unter herabfallender Last oder Werkzeugen dringend empfohlen." },
    ],
    countryOfOrigin: "CN",
    priceFrom: null,
    relatedSlugs: ["zs0607ac-li", "zmp09j"],
  },

  // ====================== ZMP09J ======================
  {
    slug: "zmp09j",
    category: "arbeitsbuehnen",
    categoryLabel: "Teleskopmastbühnen",
    typeLabel: "Senkrecht-Teleskopbühne, 11,2 m Arbeitshöhe, Null-Heckausladung",
    name: "Zoomlion ZMP09J Teleskopmastbühne",
    alternateNames: ["Zoomlion ZMP09J", "ZMP09 J", "Zoomlion Senkrechtbühne 11 m"],
    tagline:
      "Die kompakte Teleskopmastbühne mit 11,2 m Arbeitshöhe, Null-Heckausladung und Gabelstapler-Taschen – ideal für enge Innenräume mit hoher Reichweite.",
    imagePublicPath: "/platforms/zmp09j.png",
    datasheetPdf: "/datenblaetter/zoomlion-zmp09j-datenblatt.pdf",
    description: [
      "Die Zoomlion ZMP09J ist eine Teleskopmastbühne (Senkrechtbühne) mit 11,2 m Arbeitshöhe und einer Plattformhöhe von 9,2 m. Dank Null-Heckausladung und kompakten Transportmaßen (nur 2,7 m Länge, 1 m Breite, 1,99 m Höhe) ist sie die erste Wahl, wenn in engen Innenräumen auf großer Höhe gearbeitet werden muss – und andere Bühnen schlicht nicht hineinpassen.",
      "Der energiesparende, wartungsfreie AC-Motorantrieb sorgt für leisen, emissionsfreien Betrieb. Mechanischer und aktiver Schlaglochschutz erleichtern das Überwinden von Unebenheiten, und die seitlichen Gabelstaplertaschen machen den Transport mit jedem handelsüblichen Gabelstapler unkompliziert möglich.",
      "Die ZMP09J entspricht der CE/GB-Norm, bietet eine horizontale Reichweite von 3,23 m und eine Übergreifhöhe von 7,75 m – letzteres wichtig für Arbeiten über Regalen, Maschinen oder Einbauten. Plattformkapazität 200 kg, zulässig für 2 Personen indoor / 1 Person outdoor.",
    ],
    useCases: [
      { title: "Wartung in engen Innenräumen", description: "Serverräume, technische Räume, Ladengeschäfte, Hotels." },
      { title: "Ladenbau & Retail", description: "Beschilderung, Beleuchtung, Warenpräsentation auf Höhe." },
      { title: "Lagerregal-Wartung", description: "Übergreifende Arbeiten über Regalen dank 7,75 m Übergreifhöhe." },
      { title: "Messebau", description: "Standbau, Rigging, Lichttechnik – schlank und manövrierfähig." },
      { title: "Gebäudetechnik", description: "Klima, Lüftung, Brandschutz in niedrigen Hallen mit verstellten Flächen." },
    ],
    usps: [
      "11,2 m Arbeitshöhe bei nur 1 m Breite und 2,7 m Länge",
      "Null-Heckausladung – kein Überstand beim Schwenken",
      "Nur 0,2 m Wenderadius (innen) – extreme Manövrierfähigkeit",
      "Gabelstaplertaschen für einfachen Transport",
      "Energiesparender, wartungsfreier AC-Antrieb",
      "Aktives und mechanisches Schlaglochschutzsystem",
      "Plattform-Schwenkbereich 125° vertikal",
      "CE/GB-konform – Lieferung und Service in NRW",
    ],
    specGroups: [
      {
        heading: "Arbeitsbereich",
        specs: [
          { label: "Arbeitshöhe", value: "11,2 m" },
          { label: "Plattformhöhe", value: "9,2 m" },
          { label: "Horizontale Reichweite", value: "3,23 m" },
          { label: "Übergreifhöhe", value: "7,75 m" },
          { label: "Vertikaler Schwenkbereich", value: "125°" },
          { label: "Heckausladung", value: "0 m (keine Heckausladung)" },
        ],
      },
      {
        heading: "Plattform",
        specs: [
          { label: "Plattformlänge", value: "0,76 m" },
          { label: "Plattformbreite", value: "0,99 m" },
          { label: "Max. Plattformkapazität", value: "200 kg" },
          { label: "Max. Personen (indoor/outdoor)", value: "2 / 1" },
        ],
      },
      {
        heading: "Abmessungen & Transport",
        specs: [
          { label: "Eingefahrene Länge", value: "2,7 m", schemaName: "Länge", schemaUnit: "MTR", schemaValue: 2.7 },
          { label: "Eingefahrene Breite", value: "1 m", schemaName: "Breite", schemaUnit: "MTR", schemaValue: 1.0 },
          { label: "Eingefahrene Höhe", value: "1,99 m", schemaName: "Höhe", schemaUnit: "MTR", schemaValue: 1.99 },
          { label: "Radstand", value: "1,2 m" },
          { label: "Bodenfreiheit (eingefahren)", value: "0,065 m" },
          { label: "Bodenfreiheit (ausgefahren)", value: "0,015 m" },
          { label: "Gewicht", value: "2.995 kg", schemaName: "Gewicht", schemaUnit: "KGM", schemaValue: 2995 },
        ],
      },
      {
        heading: "Antrieb & Fahrwerk",
        specs: [
          { label: "Fahrgeschwindigkeit (eingefahren)", value: "4,5 km/h" },
          { label: "Fahrgeschwindigkeit (angehoben)", value: "0,5 km/h" },
          { label: "Wenderadius (innen)", value: "0,2 m" },
          { label: "Wenderadius (außen)", value: "1,61 m" },
          { label: "Steigfähigkeit", value: "25 % (14°)" },
          { label: "Max. Arbeitsneigung", value: "2,5°" },
          { label: "Reifen", value: "Vollgummireifen" },
          { label: "Hubmotor", value: "AC 24 V / 3 kW" },
          { label: "Antriebsmotor", value: "AC 24 V / 2 × 0,7 kW" },
          { label: "Auf-/Abfahrzeit", value: "42 s / 40 s" },
        ],
      },
      {
        heading: "Energie",
        specs: [
          { label: "Batterie", value: "4 × 6 V / 240 Ah" },
          { label: "Ladegerät", value: "24 V / 30 A" },
        ],
      },
    ],
    faq: [
      { question: "Worin liegt der Vorteil der ZMP09J gegenüber einer Scherenbühne?", answer: "Die ZMP09J kommt dort hin, wo eine Scherenbühne schon aufgrund ihrer Grundfläche nicht hinkommt. Mit 1 m Breite und 2,7 m Länge passt sie durch Standard-Industrietüren und manövriert bei 0,2 m Wenderadius (innen) nahezu auf der Stelle. Durch die horizontale Reichweite von 3,23 m übergreifen Sie zudem Regale, Einbauten oder Maschinen, die Sie mit einer Scherenbühne nicht anfahren könnten." },
      { question: "Kann die ZMP09J in voller Höhe verfahren werden?", answer: "Ja, sie ist in voller Arbeitshöhe fahrbar – mit deutlich reduzierter Geschwindigkeit (0,5 km/h). Das macht Feinpositionierungen auf der Plattform ohne wiederholtes Ein- und Ausfahren möglich." },
      { question: "Ist die ZMP09J outdoor einsetzbar?", answer: "Ja, mit 1 Person outdoor und bei maximaler Arbeitsneigung von 2,5°. Bei Wind oder auf unebenem Untergrund ist besondere Vorsicht geboten; für regelmäßigen Outdoor-Einsatz empfehlen wir eine Scherenbühne oder Gelenkbühne." },
      { question: "Wie wird die Bühne transportiert?", answer: "Die ZMP09J hat seitliche Gabelstaplertaschen. Jeder Standard-Gabelstapler mit ausreichender Hubkraft kann die 2.995 kg schwere Maschine aufnehmen und verladen. Für den Straßentransport eignet sich ein 3,5-t-Anhänger nicht – hier ist ein 5-t- oder größerer Anhänger nötig." },
      { question: "Welche Standardausstattung ist enthalten?", answer: "Automatisches Bremssystem, Proportionalsteuerung, Bewegungsalarme, Ladeschutz, selbstschließende Eingangstür, wartungsfreie Batterie, Notablass-System, Not-Aus-Schalter, Blinklichtanlage, aktives Schlaglochschutzsystem, Hupe, Differenzregelung, Betriebsstundenzähler, Borddiagnose, Kippschutz, Gabelstaplertaschen und Lastüberwachung. Optional: Arbeitsscheinwerfer auf der Plattform, AC-Stromversorgung zur Plattform, GPS und Fernüberwachung." },
    ],
    countryOfOrigin: "CN",
    priceFrom: null,
    relatedSlugs: ["zs0607ac-li", "zs1012ac-li"],
  },
];

export function getProductPageBySlug(slug: string): ProductPage | undefined {
  return PRODUCT_PAGES.find((p) => p.slug === slug);
}

export function getProductPagesByCategory(category: ProductCategory): ProductPage[] {
  return PRODUCT_PAGES.filter((p) => p.category === category);
}
