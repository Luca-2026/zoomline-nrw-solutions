// Helper: Mapping zwischen Konfigurator-/HotDeal-Bezeichnungen und
// den Produkt-Detailseiten (PRODUCT_PAGES). Liefert die fertige Route
// oder undefined, wenn keine Detailseite existiert.

import { PRODUCT_PAGES, type ProductCategory } from "./productPages";

const categoryPath: Record<ProductCategory, string> = {
  bagger: "/bagger",
  arbeitsbuehnen: "/arbeitsbuehnen",
};

/** Normalisiert Modellnamen zu einem vergleichbaren Slug. */
function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/zoomlion\s+/g, "")
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Sucht die Detailseiten-Route für einen Produktnamen oder Hot-Deal-ID.
 * Akzeptiert z. B. "ZE20G", "Zoomlion ZE20G", "deal-ze20g", "ze20g".
 */
export function getProductPageRoute(
  identifier: string | undefined | null,
): string | undefined {
  if (!identifier) return undefined;
  const cleaned = identifier.trim().replace(/^deal-/i, "");
  const normalized = normalize(cleaned);

  const match = PRODUCT_PAGES.find(
    (p) =>
      normalize(p.slug) === normalized ||
      normalize(p.name) === normalized ||
      p.alternateNames.some((n) => normalize(n) === normalized),
  );

  if (!match) return undefined;
  return `${categoryPath[match.category]}/${match.slug}`;
}
