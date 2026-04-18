import { StandortPageLayout } from "@/components/standort/StandortPageLayout";
import { STANDORTE } from "@/data/standorte";
import krefeldImage from "@/assets/locations/krefeld.jpg";

const StandortKrefeld = () => (
  <StandortPageLayout
    standort={STANDORTE.krefeld}
    metaTitle="Zoomlion Händler Krefeld – SLT Technology Group Hauptsitz"
    metaDescription="Zoomlion Hauptsitz NRW in Krefeld: Minibagger, Arbeitsbühnen & Teleskoplader kaufen. Probefahrt, Ersatzteile, Werkstatt & persönliche Beratung am Showroom."
    h1="Zoomlion Händler Krefeld – Ihr Hauptsitz für Baumaschinen in NRW"
    subtitle="Hauptsitz der SLT Technology Group · Showroom · Werkstatt · Ersatzteile"
    heroImageSrc={krefeldImage}
    schemaImageUrl="https://www.zoomlion-nrw.de/og-image.jpg"
    introParagraphs={[
      "Willkommen am Hauptsitz der SLT Technology Group GmbH & Co. KG in Krefeld. Als exklusiver Zoomlion-Fachhändler für Nordrhein-Westfalen finden Sie bei uns das vollständige Zoomlion-Sortiment – vom 1,8-Tonnen-Minibagger bis zum Drehteleskoplader.",
      "Auf unserem Ausstellungshof können Sie Maschinen Probe fahren, technische Details persönlich mit unserem Team besprechen und Ersatzteile direkt vor Ort mitnehmen. Ihr Ansprechpartner in Krefeld: Benedikt Nöchel.",
    ]}
    anfahrtText="Anfahrt mit dem PKW: Direkt an der A57, Abfahrt Krefeld-Oppum. Von Düsseldorf 25 Minuten, von Duisburg 20 Minuten, von Mönchengladbach 20 Minuten."
    einzugsgebietText="Von Krefeld aus betreuen wir Kunden in Mönchengladbach, Duisburg, Viersen, Kempen, Willich, Meerbusch sowie dem westlichen Rhein-Kreis Neuss. Gerne organisieren wir auf Wunsch auch die Auslieferung Ihrer Zoomlion-Maschine direkt zur Baustelle."
    areaServed={["Krefeld", "Mönchengladbach", "Duisburg", "Düsseldorf", "Viersen", "Meerbusch", "Neuss"]}
  />
);

export default StandortKrefeld;
