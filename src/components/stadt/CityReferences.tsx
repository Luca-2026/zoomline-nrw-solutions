import { Building2 } from "lucide-react";
import type { CityReference } from "@/data/staedte";

interface CityReferencesProps {
  cityName: string;
  references: CityReference[];
}

/**
 * Generische Branchen-Referenzen mit PLZ-Range pro Stadt.
 *
 * Bewusst keine echten Kundennamen (DSGVO/NDA-Schutz), aber genau genug,
 * dass typische Such-Personas sich wiederfinden.
 */
export function CityReferences({ cityName, references }: CityReferencesProps) {
  if (references.length === 0) return null;

  return (
    <section aria-labelledby="city-refs" className="mb-12">
      <h2 id="city-refs" className="font-heading text-2xl font-bold mb-2">
        Unsere Kunden im Großraum {cityName}
      </h2>
      <p className="text-muted-foreground mb-6 text-sm">
        Aus Datenschutzgründen nennen wir keine Firmennamen. Typische Branchen
        und PLZ-Bereiche unserer Kundinnen und Kunden in der Region:
      </p>
      <ul className="grid sm:grid-cols-2 gap-3">
        {references.map((ref) => (
          <li
            key={ref.branche}
            className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card"
          >
            <Building2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-sm">{ref.branche}</p>
              <p className="text-xs text-muted-foreground mt-0.5">PLZ {ref.plzRange}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
