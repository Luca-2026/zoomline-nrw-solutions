import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

/**
 * Kompakter Hinweis-Block für Produktdetailseiten und andere Sub-Pages.
 */
export function InvestitionsboosterCallout() {
  return (
    <aside
      className="rounded-lg border-2 border-primary/30 bg-primary/5 p-4 md:p-5"
      aria-label="Investitionsbooster-Hinweis"
    >
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="h-5 w-5 text-primary shrink-0" />
        <h3 className="font-heading text-sm font-bold text-foreground">
          Investitionsbooster anwendbar
        </h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Bis 31.12.2027 sind bis zu <strong className="text-foreground">30 % degressive AfA</strong> im
        Anschaffungsjahr möglich (§ 7 Abs. 2 EStG).{" "}
        <Link
          to="/investitionsbooster"
          className="text-primary font-semibold hover:underline"
        >
          Mehr erfahren →
        </Link>
      </p>
      <p className="mt-2 text-[11px] text-muted-foreground/80 italic leading-snug">
        Allgemeine Information, ersetzt keine steuerliche Beratung.
      </p>
    </aside>
  );
}
