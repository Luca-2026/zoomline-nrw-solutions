// Zoomline NRW Produktdaten - Arbeitsbühnen & Bagger
// Diese Datei enthält Platzhalter-Produkte, die später durch echte Modelle ersetzt werden können

export interface AerialPlatform {
  id: string;
  name: string;
  category: "scissor" | "boom" | "mast" | "trailer";
  categoryLabel: string;
  workingHeight: number; // in Metern
  reach: number; // seitliche Reichweite in Metern
  drive: "diesel" | "electric" | "hybrid";
  driveLabel: string;
  usage: "indoor" | "outdoor" | "hybrid";
  usageLabel: string;
  lithiumBattery: boolean;
  features: string[];
  image: string;
  description: string;
  pdfDownload?: string;
}

export interface Excavator {
  id: string;
  name: string;
  category: "mini" | "compact" | "midi" | "standard";
  categoryLabel: string;
  weightClass: "1-2t" | "2-3t" | "3-5t" | "5-8t" | ">8t";
  weightClassLabel: string;
  drive: "diesel" | "electric";
  driveLabel: string;
  application: "tiefbau" | "galabau" | "abbruch" | "universal";
  applicationLabel: string;
  features: string[];
  equipment: {
    quickCoupler: boolean;
    additionalHydraulics: boolean;
    tiltrotatorReady: boolean;
    cabin: boolean;
    adjustableArm: boolean;
  };
  image: string;
  description: string;
  pdfDownload?: string;
}

// Placeholder Arbeitsbühnen
export const aerialPlatforms: AerialPlatform[] = [
  {
    id: "zl-scissor-10e",
    name: "Zoomline ZL 10E",
    category: "scissor",
    categoryLabel: "Scherenarbeitsbühne",
    workingHeight: 10,
    reach: 0,
    drive: "electric",
    driveLabel: "Elektro",
    usage: "indoor",
    usageLabel: "Innen",
    lithiumBattery: true,
    features: ["Kompakt", "Nicht markierende Reifen", "Lithium-Ionen Akku", "Automatische Nivellierung"],
    image: "/placeholder.svg",
    description: "Kompakte elektrische Scherenarbeitsbühne ideal für Hallenarbeiten und Innenräume."
  },
  {
    id: "zl-scissor-14e",
    name: "Zoomline ZL 14E",
    category: "scissor",
    categoryLabel: "Scherenarbeitsbühne",
    workingHeight: 14,
    reach: 0,
    drive: "electric",
    driveLabel: "Elektro",
    usage: "indoor",
    usageLabel: "Innen",
    lithiumBattery: true,
    features: ["Große Arbeitsfläche", "Nicht markierende Reifen", "Lithium-Ionen Akku"],
    image: "/placeholder.svg",
    description: "Leistungsstarke Scherenarbeitsbühne für höhere Arbeitshöhen in Innenräumen."
  },
  {
    id: "zl-boom-16j",
    name: "Zoomline ZL 16J",
    category: "boom",
    categoryLabel: "Gelenkteleskopbühne",
    workingHeight: 16,
    reach: 8,
    drive: "diesel",
    driveLabel: "Diesel",
    usage: "outdoor",
    usageLabel: "Außen",
    lithiumBattery: false,
    features: ["360° Schwenkbereich", "Geländegängig", "Korb drehbar"],
    image: "/placeholder.svg",
    description: "Flexible Gelenkteleskopbühne für Außeneinsätze mit großer Reichweite."
  },
  {
    id: "zl-boom-20j",
    name: "Zoomline ZL 20J",
    category: "boom",
    categoryLabel: "Gelenkteleskopbühne",
    workingHeight: 20,
    reach: 12,
    drive: "diesel",
    driveLabel: "Diesel",
    usage: "outdoor",
    usageLabel: "Außen",
    lithiumBattery: false,
    features: ["360° Schwenkbereich", "Allrad", "Geländegängig", "Pendel-Achse"],
    image: "/placeholder.svg",
    description: "Professionelle Gelenkteleskopbühne für anspruchsvolle Außeneinsätze."
  },
  {
    id: "zl-boom-26s",
    name: "Zoomline ZL 26S",
    category: "boom",
    categoryLabel: "Teleskoparbeitsbühne",
    workingHeight: 26,
    reach: 18,
    drive: "diesel",
    driveLabel: "Diesel",
    usage: "outdoor",
    usageLabel: "Außen",
    lithiumBattery: false,
    features: ["Maximale Reichweite", "Allrad-Antrieb", "Stabilisatoren"],
    image: "/placeholder.svg",
    description: "Teleskoparbeitsbühne für große Höhen und maximale seitliche Reichweite."
  },
  {
    id: "zl-scissor-12h",
    name: "Zoomline ZL 12H",
    category: "scissor",
    categoryLabel: "Scherenarbeitsbühne",
    workingHeight: 12,
    reach: 0,
    drive: "hybrid",
    driveLabel: "Hybrid",
    usage: "hybrid",
    usageLabel: "Innen+Außen",
    lithiumBattery: true,
    features: ["Hybrid-Antrieb", "Innen & Außen geeignet", "Emissionsfrei im E-Modus"],
    image: "/placeholder.svg",
    description: "Vielseitige Hybrid-Scherenarbeitsbühne für Innen- und Außeneinsätze."
  },
  {
    id: "zl-mast-8e",
    name: "Zoomline ZL 8M",
    category: "mast",
    categoryLabel: "Mastbühne",
    workingHeight: 8,
    reach: 3,
    drive: "electric",
    driveLabel: "Elektro",
    usage: "indoor",
    usageLabel: "Innen",
    lithiumBattery: true,
    features: ["Ultra-kompakt", "Durchfahrtsbreite 80cm", "Ideal für Regale"],
    image: "/placeholder.svg",
    description: "Kompakte Mastbühne für enge Bereiche und Lagerarbeiten."
  },
  {
    id: "zl-trailer-12",
    name: "Zoomline ZL 12T",
    category: "trailer",
    categoryLabel: "Anhängerbühne",
    workingHeight: 12,
    reach: 6,
    drive: "electric",
    driveLabel: "Elektro",
    usage: "outdoor",
    usageLabel: "Außen",
    lithiumBattery: false,
    features: ["PKW-Anhänger", "Schnelle Aufstellung", "Autark"],
    image: "/placeholder.svg",
    description: "Mobile Anhängerbühne für flexible Einsatzorte."
  }
];

// Placeholder Bagger
export const excavators: Excavator[] = [
  {
    id: "zl-mini-17",
    name: "Zoomline ZE 17",
    category: "mini",
    categoryLabel: "Minibagger",
    weightClass: "1-2t",
    weightClassLabel: "1-2 Tonnen",
    drive: "diesel",
    driveLabel: "Diesel",
    application: "galabau",
    applicationLabel: "GaLaBau",
    features: ["Kompakt", "Nullheck", "Gummiketten"],
    equipment: {
      quickCoupler: true,
      additionalHydraulics: true,
      tiltrotatorReady: false,
      cabin: false,
      adjustableArm: false
    },
    image: "/placeholder.svg",
    description: "Kompakter Minibagger ideal für Garten- und Landschaftsbau."
  },
  {
    id: "zl-mini-25",
    name: "Zoomline ZE 25",
    category: "mini",
    categoryLabel: "Minibagger",
    weightClass: "2-3t",
    weightClassLabel: "2-3 Tonnen",
    drive: "diesel",
    driveLabel: "Diesel",
    application: "universal",
    applicationLabel: "Universal",
    features: ["Nullheck", "Kabine optional", "Leistungsstark"],
    equipment: {
      quickCoupler: true,
      additionalHydraulics: true,
      tiltrotatorReady: true,
      cabin: true,
      adjustableArm: true
    },
    image: "/placeholder.svg",
    description: "Vielseitiger Minibagger für verschiedene Einsatzbereiche."
  },
  {
    id: "zl-compact-35",
    name: "Zoomline ZE 35",
    category: "compact",
    categoryLabel: "Kompaktbagger",
    weightClass: "3-5t",
    weightClassLabel: "3-5 Tonnen",
    drive: "diesel",
    driveLabel: "Diesel",
    application: "tiefbau",
    applicationLabel: "Tiefbau",
    features: ["Kurzheck", "Klimakabine", "Hohe Grabkraft"],
    equipment: {
      quickCoupler: true,
      additionalHydraulics: true,
      tiltrotatorReady: true,
      cabin: true,
      adjustableArm: true
    },
    image: "/placeholder.svg",
    description: "Leistungsstarker Kompaktbagger für Tiefbauarbeiten."
  },
  {
    id: "zl-compact-50",
    name: "Zoomline ZE 50",
    category: "compact",
    categoryLabel: "Kompaktbagger",
    weightClass: "5-8t",
    weightClassLabel: "5-8 Tonnen",
    drive: "diesel",
    driveLabel: "Diesel",
    application: "tiefbau",
    applicationLabel: "Tiefbau",
    features: ["Vollausstattung", "Klimakabine", "Verstellausleger"],
    equipment: {
      quickCoupler: true,
      additionalHydraulics: true,
      tiltrotatorReady: true,
      cabin: true,
      adjustableArm: true
    },
    image: "/placeholder.svg",
    description: "Professioneller Kompaktbagger für anspruchsvolle Tiefbauarbeiten."
  },
  {
    id: "zl-mini-15e",
    name: "Zoomline ZE 15E",
    category: "mini",
    categoryLabel: "Minibagger",
    weightClass: "1-2t",
    weightClassLabel: "1-2 Tonnen",
    drive: "electric",
    driveLabel: "Elektro",
    application: "galabau",
    applicationLabel: "GaLaBau",
    features: ["Elektrisch", "Emissionsfrei", "Leise"],
    equipment: {
      quickCoupler: true,
      additionalHydraulics: true,
      tiltrotatorReady: false,
      cabin: false,
      adjustableArm: false
    },
    image: "/placeholder.svg",
    description: "Elektrischer Minibagger für emissionsfreie Einsätze."
  },
  {
    id: "zl-midi-60",
    name: "Zoomline ZE 60",
    category: "midi",
    categoryLabel: "Midibagger",
    weightClass: ">8t",
    weightClassLabel: "> 8 Tonnen",
    drive: "diesel",
    driveLabel: "Diesel",
    application: "abbruch",
    applicationLabel: "Abbruch",
    features: ["Hohe Reißkraft", "Verstärkte Struktur", "Abbruch-Paket"],
    equipment: {
      quickCoupler: true,
      additionalHydraulics: true,
      tiltrotatorReady: true,
      cabin: true,
      adjustableArm: true
    },
    image: "/placeholder.svg",
    description: "Robuster Midibagger für Abbrucharbeiten."
  }
];

// Filter-Optionen
export const platformFilterOptions = {
  usage: [
    { value: "all", label: "Alle Einsatzorte" },
    { value: "indoor", label: "Innen" },
    { value: "outdoor", label: "Außen" },
    { value: "hybrid", label: "Innen + Außen" }
  ],
  drive: [
    { value: "all", label: "Alle Antriebe" },
    { value: "electric", label: "Elektro" },
    { value: "diesel", label: "Diesel" },
    { value: "hybrid", label: "Hybrid" }
  ],
  category: [
    { value: "all", label: "Alle Typen" },
    { value: "scissor", label: "Scherenarbeitsbühne" },
    { value: "boom", label: "Gelenk-/Teleskopbühne" },
    { value: "mast", label: "Mastbühne" },
    { value: "trailer", label: "Anhängerbühne" }
  ]
};

export const excavatorFilterOptions = {
  application: [
    { value: "all", label: "Alle Einsatzbereiche" },
    { value: "tiefbau", label: "Tiefbau" },
    { value: "galabau", label: "GaLaBau" },
    { value: "abbruch", label: "Abbruch" },
    { value: "universal", label: "Universal" }
  ],
  weightClass: [
    { value: "all", label: "Alle Gewichtsklassen" },
    { value: "1-2t", label: "1-2 Tonnen" },
    { value: "2-3t", label: "2-3 Tonnen" },
    { value: "3-5t", label: "3-5 Tonnen" },
    { value: "5-8t", label: "5-8 Tonnen" },
    { value: ">8t", label: "> 8 Tonnen" }
  ],
  drive: [
    { value: "all", label: "Alle Antriebe" },
    { value: "diesel", label: "Diesel" },
    { value: "electric", label: "Elektro" }
  ]
};

// Standorte
export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  phone?: string;
  showPhone: boolean;
  mapPlaceholder: string;
}

export const locations: Location[] = [
  {
    id: "bonn",
    name: "Standort Bonn",
    address: "Drachenburgstraße 8",
    city: "53179 Bonn",
    phone: "0228 504 660 61",
    showPhone: true,
    mapPlaceholder: "Bonn"
  },
  {
    id: "krefeld",
    name: "Standort Krefeld",
    address: "Anrather Straße 291",
    city: "47807 Krefeld",
    phone: "02151 4179904",
    showPhone: true,
    mapPlaceholder: "Krefeld"
  },
  {
    id: "muelheim",
    name: "Standort Mülheim a. d. Ruhr",
    address: "Ruhrorter Straße",
    city: "Mülheim an der Ruhr",
    phone: undefined,
    showPhone: false,
    mapPlaceholder: "Mülheim"
  }
];
