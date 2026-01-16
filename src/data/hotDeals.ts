import ze20gImage from "@/assets/hot-deals/ze20g.png";
import ze27guImage from "@/assets/hot-deals/ze27gu.jpg";
import ze55guImage from "@/assets/hot-deals/ze55gu.png";
import zs0607acLiImage from "@/assets/hot-deals/zs0607ac-li.png";
import zs1012acLiImage from "@/assets/hot-deals/zs1012ac-li.png";
import zmp09jImage from "@/assets/hot-deals/zmp09j.png";

export interface HotDeal {
  id: string;
  name: string;
  type: "bagger" | "arbeitsbuehne";
  typeLabel: string;
  subtitle: string;
  dealPrice: number;
  specs: { label: string; value: string }[];
  image: string;
  highlight?: string;
}

export const hotDeals: HotDeal[] = [
  {
    id: "deal-ze20g",
    name: "ZE20G",
    type: "bagger",
    typeLabel: "2t Minibagger",
    subtitle: "Kompakter Allrounder",
    dealPrice: 19990,
    highlight: "Top-Seller",
    specs: [
      { label: "Betriebsgewicht", value: "1.970 kg" },
      { label: "Motorleistung", value: "15,4 kW @ 2.400 rpm" },
      { label: "Schaufelkapazität", value: "0,04 m³" },
      { label: "Fahrgeschwindigkeit", value: "4,2 / 2,2 km/h" },
      { label: "Schwenkgeschwindigkeit", value: "9,5 r/min" },
      { label: "Spurweite", value: "980 / 1.300 mm" },
    ],
    image: ze20gImage,
  },
  {
    id: "deal-ze27gu",
    name: "ZE27GU",
    type: "bagger",
    typeLabel: "3t Minibagger",
    subtitle: "Zero-Tail Swing",
    dealPrice: 26990,
    highlight: "Kein Hecküberstand",
    specs: [
      { label: "Betriebsgewicht", value: "2.700 kg" },
      { label: "Motorleistung", value: "15,4 kW @ 2.400 rpm" },
      { label: "Schaufelkapazität", value: "0,08 m³" },
      { label: "Max. Grabtiefe", value: "2.880 mm" },
      { label: "Max. Kipphöhe", value: "4.410 mm" },
      { label: "Besonderheit", value: "Zero-Tail Swing" },
    ],
    image: ze27guImage,
  },
  {
    id: "deal-ze55gu",
    name: "ZE55GU",
    type: "bagger",
    typeLabel: "6t Midibagger",
    subtitle: "Kraftpaket",
    dealPrice: 49900,
    highlight: "Power-Deal",
    specs: [
      { label: "Betriebsgewicht", value: "5.800 kg" },
      { label: "Motorleistung", value: "35,5 kW @ 2.200 rpm" },
      { label: "Schaufelkapazität", value: "0,16 m³" },
      { label: "Max. Grabtiefe", value: "3.670 mm" },
      { label: "Max. Kipphöhe", value: "5.560 mm" },
    ],
    image: ze55guImage,
  },
  {
    id: "deal-zs0607ac-li",
    name: "ZS0607AC-Li",
    type: "arbeitsbuehne",
    typeLabel: "7,8m Scherenarbeitsbühne",
    subtitle: "Lithium-Ionen-Akku",
    dealPrice: 12990,
    highlight: "Li-Ion Power",
    specs: [
      { label: "Arbeitshöhe", value: "7,8 m" },
      { label: "Plattformhöhe", value: "5,8 m" },
      { label: "Plattformkapazität", value: "230 kg" },
      { label: "Plattformgröße", value: "1,65 × 0,74 m" },
      { label: "Fahrgeschwindigkeit", value: "4 / 0,8 km/h" },
      { label: "Batterie", value: "135 Ah Li-Ion" },
      { label: "Bruttogewicht", value: "1.455 kg" },
    ],
    image: zs0607acLiImage,
  },
  {
    id: "deal-zs1012ac-li",
    name: "ZS1012AC-Li",
    type: "arbeitsbuehne",
    typeLabel: "11,8m Scherenarbeitsbühne",
    subtitle: "Lithium-Ionen-Akku",
    dealPrice: 16990,
    highlight: "Bestseller",
    specs: [
      { label: "Arbeitshöhe", value: "11,80 m" },
      { label: "Plattformhöhe", value: "9,80 m" },
      { label: "Plattformkapazität", value: "350 kg" },
      { label: "Plattformgröße", value: "2,30 × 1,12 m" },
      { label: "Fahrgeschwindigkeit", value: "4 / 0,8 km/h" },
      { label: "Batterie", value: "230 Ah Li-Ion" },
      { label: "Bruttogewicht", value: "2.930 kg" },
    ],
    image: zs1012acLiImage,
  },
  {
    id: "deal-zmp09j",
    name: "ZMP09J",
    type: "arbeitsbuehne",
    typeLabel: "11,2m Vertikal-Mast-Arbeitsbühne",
    subtitle: "Kompakt & Wendig",
    dealPrice: 27990,
    highlight: "Profi-Gerät",
    specs: [
      { label: "Arbeitshöhe", value: "11,2 m" },
      { label: "Plattformkapazität", value: "200 kg" },
      { label: "Max. Arbeiter", value: "2 innen / 1 außen" },
      { label: "Fahrgeschwindigkeit", value: "4,5 / 0,5 km/h" },
      { label: "Steigfähigkeit", value: "25 % (≈14°)" },
      { label: "Bruttogewicht", value: "2.990 kg" },
    ],
    image: zmp09jImage,
  },
];
