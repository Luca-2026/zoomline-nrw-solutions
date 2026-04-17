/**
 * Stadt-Daten für /baumaschinen/:stadt – als reine Daten-Datei extrahiert,
 * damit Build-Skripte (scripts/prerender.ts) sie ohne React/JSX-Imports laden können.
 */

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
}

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
  },
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
  },
  // === Neue Städte ===
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
  },
};
