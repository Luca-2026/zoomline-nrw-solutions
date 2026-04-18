// Bild-Mapping für Produkt-Detailseiten.
// Bewusst getrennt von productPages.ts, damit das Prerender-Skript (tsx)
// keine .png/.jpg-Imports laden muss.

import ze20gImage from "@/assets/hot-deals/ze20g.png";
import ze27guImage from "@/assets/hot-deals/ze27gu.jpg";
import ze55guImage from "@/assets/hot-deals/ze55gu.png";
import zs0607acLiImage from "@/assets/hot-deals/zs0607ac-li.png";
import zs1012acLiImage from "@/assets/hot-deals/zs1012ac-li.png";
import zmp09jImage from "@/assets/hot-deals/zmp09j.png";

export const PRODUCT_IMAGES: Record<string, string> = {
  ze20g: ze20gImage,
  ze27gu: ze27guImage,
  ze55gu: ze55guImage,
  "zs0607ac-li": zs0607acLiImage,
  "zs1012ac-li": zs1012acLiImage,
  zmp09j: zmp09jImage,
};

export function getProductImage(slug: string): string | undefined {
  return PRODUCT_IMAGES[slug];
}
