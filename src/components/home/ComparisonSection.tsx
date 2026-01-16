import { Check, X, Minus } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const comparisonData = [
  {
    category: "Anschaffungskosten",
    zoomline: { value: "Oft günstiger", positive: true },
    alternative: { value: "Meist höher", positive: false }
  },
  {
    category: "Garantie",
    zoomline: { value: "3 Jahre / 3.000 h", positive: true },
    alternative: { value: "Meist 1-2 Jahre", positive: false }
  },
  {
    category: "Ersatzteilverfügbarkeit",
    zoomline: { value: "Lokal vor Ort (NRW)", positive: true },
    alternative: { value: "Oft zentral / längere Wartezeit", positive: false }
  },
  {
    category: "Service-Nähe",
    zoomline: { value: "3 Standorte in NRW", positive: true },
    alternative: { value: "Variiert stark", neutral: true }
  },
  {
    category: "Ausstattung",
    zoomline: { value: "Hochwertig & umfangreich", positive: true },
    alternative: { value: "Unterschiedlich", neutral: true }
  },
  {
    category: "Preis-Leistung",
    zoomline: { value: "Exzellent", positive: true },
    alternative: { value: "Standard", neutral: true }
  }
];

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Wirtschaftlichkeit"
          title="Warum Zoomlion wirtschaftlich überzeugt"
          subtitle="Ein Vergleich, der für sich spricht – entscheiden Sie selbst"
        />

        <div className="max-w-3xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Kriterium
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-primary">
                    Zoomlion
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">
                    Typische Alternative
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonData.map((row) => (
                  <tr key={row.category} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {row.category}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span className="text-sm text-foreground">{row.zoomline.value}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        {row.alternative.positive ? (
                          <Check className="h-5 w-5 text-primary" />
                        ) : row.alternative.neutral ? (
                          <Minus className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <X className="h-5 w-5 text-destructive/70" />
                        )}
                        <span className="text-sm text-muted-foreground">{row.alternative.value}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row) => (
              <div key={row.category} className="rounded-lg border border-border bg-card p-4">
                <h4 className="font-medium text-foreground mb-3">{row.category}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs text-primary font-medium mb-1">Zoomlion</p>
                    <div className="flex items-center gap-1">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{row.zoomline.value}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium mb-1">Alternative</p>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      {row.alternative.positive ? (
                        <Check className="h-4 w-4" />
                      ) : row.alternative.neutral ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <X className="h-4 w-4 text-destructive/70" />
                      )}
                      <span>{row.alternative.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            * Qualitative Aussagen basierend auf Marktvergleichen. Keine konkreten Wettbewerber genannt.
          </p>
        </div>
      </div>
    </section>
  );
}
