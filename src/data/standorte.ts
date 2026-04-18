/**
 * Zentrale Standortdaten für SLT/Zoomlion NRW.
 *
 * Wird von /standorte, /baumaschinen/[stadt] (CityStandortCard), Footer
 * und JSON-LD verwendet. Single source of truth für Adresse, Telefon,
 * Öffnungszeiten und Geo-Koordinaten.
 *
 * Hinweis Mülheim: kein eigener Telefonanschluss am Standort, Hotline
 * läuft über Krefeld (so im Impressum/Footer kommuniziert).
 */

export interface StandortInfo {
  /** Anzeigename, exakt so wie auch in `staedte.standort` referenziert */
  name: string;
  /** URL-Slug (z. B. für /standorte#krefeld oder zukünftige /standorte/krefeld) */
  slug: "bonn" | "krefeld" | "muelheim";
  street: string;
  postalCode: string;
  city: string;
  /** E.164-Format für tel:-Links und Schema.org */
  phone: string;
  /** Anzeigeformat mit deutschen Leerzeichen */
  phoneDisplay: string;
  email: string;
  hours: string;
  lat: number;
  lng: number;
}

export const STANDORTE: Record<"bonn" | "krefeld" | "muelheim", StandortInfo> = {
  bonn: {
    name: "Bonn",
    slug: "bonn",
    street: "Drachenburgstraße 8",
    postalCode: "53179",
    city: "Bonn",
    phone: "+49228504660 61",
    phoneDisplay: "0228 50466061",
    email: "verkauf@zoomlion-nrw.de",
    hours: "Mo–Fr 08:00–17:00",
    lat: 50.7374,
    lng: 7.0982,
  },
  krefeld: {
    name: "Krefeld",
    slug: "krefeld",
    street: "Anrather Straße 291",
    postalCode: "47807",
    city: "Krefeld",
    phone: "+4921514179904",
    phoneDisplay: "02151 4179904",
    email: "verkauf@zoomlion-nrw.de",
    hours: "Mo–Fr 08:00–17:00",
    lat: 51.3388,
    lng: 6.5853,
  },
  muelheim: {
    name: "Mülheim an der Ruhr",
    slug: "muelheim",
    street: "Ruhrorter Straße",
    postalCode: "45478",
    city: "Mülheim an der Ruhr",
    // Hotline läuft über Krefeld
    phone: "+4921514179904",
    phoneDisplay: "02151 4179904",
    email: "verkauf@zoomlion-nrw.de",
    hours: "Mo–Fr 08:00–17:00 (Hotline Krefeld)",
    lat: 51.4268,
    lng: 6.8826,
  },
};

/**
 * Map "Anzeigename → STANDORTE-Key", weil `staedte.standort` als String
 * mit Umlauten gepflegt ist (z. B. "Mülheim an der Ruhr").
 */
export function resolveStandort(name: string | undefined): StandortInfo {
  if (!name) return STANDORTE.krefeld;
  if (name === "Bonn") return STANDORTE.bonn;
  if (name === "Krefeld") return STANDORTE.krefeld;
  if (name === "Mülheim an der Ruhr") return STANDORTE.muelheim;
  return STANDORTE.krefeld;
}
