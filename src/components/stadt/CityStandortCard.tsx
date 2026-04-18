import { MapPin, Phone, Clock, ArrowRight, Map as MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { StandortInfo } from "@/data/standorte";

interface CityStandortCardProps {
  /** Stadt-Anzeigename, z. B. "Köln" */
  cityName: string;
  /** Bounding-Box "lonMin,latMin,lonMax,latMax" für die statische OSM-Karte */
  osmBbox: string;
  /** Beschreibung der Anfahrt vom Stadtzentrum (z. B. "Köln-Innenstadt → A555 → Standort Bonn") */
  routeDescription: string;
  /** Fahrzeit in Minuten – 0 wenn der Standort direkt in der Stadt liegt */
  driveTimeMinutes: number;
  /** Distanz in km */
  distanceKm: number;
  /** Daten des nächsten SLT-Standorts */
  standort: StandortInfo;
}

/**
 * Standort-Karte für Stadt-Landingpages.
 *
 * - Statische OSM-Karte (kein API-Key, DSGVO-freundlich, kein Cookie-Consent nötig)
 * - Klickbares Telefon, Öffnungszeiten, "Probefahrt vereinbaren"-CTA und externer
 *   Routing-Link zu Google Maps (öffnet in neuem Tab).
 *
 * Bewusst statisches <img> (keine iframes, keine externen Skripte, kein Tracking).
 */
export function CityStandortCard({
  cityName,
  osmBbox,
  routeDescription,
  driveTimeMinutes,
  distanceKm,
  standort,
}: CityStandortCardProps) {
  const standortAddress = `${standort.street}, ${standort.postalCode} ${standort.city}`;
  const mapImageUrl = `https://staticmap.openstreetmap.de/staticmap.php?bbox=${osmBbox}&size=640x320&maptype=mapnik&markers=${standort.lat},${standort.lng},lightblue1`;
  const googleMapsRouteUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    cityName + ", Deutschland",
  )}&destination=${encodeURIComponent(standortAddress)}`;
  const isLocalStandort = driveTimeMinutes === 0;

  return (
    <section
      aria-labelledby={`standort-${standort.slug}`}
      className="mb-12 rounded-2xl border border-border bg-card overflow-hidden"
    >
      <div className="grid md:grid-cols-2">
        {/* Statische OSM-Karte – DSGVO-freundlich, kein Tracking */}
        <a
          href={googleMapsRouteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-[2/1] md:aspect-auto md:min-h-[240px] block group"
          aria-label={`Route von ${cityName} zum Standort ${standort.name} in Google Maps öffnen`}
        >
          <img
            src={mapImageUrl}
            alt={`Karte: Standort Zoomlion NRW – ${standort.name} (${standortAddress})`}
            loading="lazy"
            width={640}
            height={320}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur group-hover:bg-background transition-colors">
            <MapIcon className="h-3.5 w-3.5" />
            In Google Maps öffnen
          </span>
        </a>

        {/* Standort-Infos */}
        <div className="p-6 md:p-8">
          <h2
            id={`standort-${standort.slug}`}
            className="font-heading text-xl md:text-2xl font-bold mb-1"
          >
            {isLocalStandort
              ? `Unser Standort direkt in ${cityName}`
              : `Nächster Standort: ${standort.name}`}
          </h2>
          {!isLocalStandort && (
            <p className="text-sm text-muted-foreground mb-4">
              Anfahrt: {routeDescription} · ca. {distanceKm} km / {driveTimeMinutes} min
            </p>
          )}

          <ul className="space-y-3 mb-6 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>
                <strong className="block">Zoomlion NRW – {standort.name}</strong>
                {standort.street}, {standort.postalCode} {standort.city}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <a
                href={`tel:${standort.phone}`}
                className="font-medium hover:text-primary transition-colors"
              >
                {standort.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{standort.hours}</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to={`/kontakt?from=${encodeURIComponent(cityName.toLowerCase())}`}>
                Probefahrt in {cityName} vereinbaren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href={`tel:${standort.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {standort.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
