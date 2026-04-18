import { StandortPageLayout } from "@/components/standort/StandortPageLayout";
import { STANDORTE } from "@/data/standorte";

const StandortMuelheim = () => (
  <StandortPageLayout
    standort={STANDORTE.muelheim}
    metaTitle="Zoomlion Händler Mülheim an der Ruhr – SLT Technology Group"
    metaDescription="Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader in Mülheim an der Ruhr. Probefahrt, Ersatzteile und Werkstatt im Herzen des Ruhrgebiets."
    h1="Zoomlion Händler Mülheim an der Ruhr – Ihr Partner im Ruhrgebiet"
    subtitle="Zentral zwischen Duisburg, Essen und Oberhausen · Hotline über Krefeld"
    schemaImageUrl="https://www.zoomlion-nrw.de/og-image.jpg"
    introParagraphs={[
      "Unser Standort Mülheim an der Ruhr liegt zentral im Herzen des Ruhrgebiets – direkt zwischen Duisburg, Essen und Oberhausen. Von hier aus betreuen wir Bauunternehmen, Garten- und Landschaftsbauer sowie Tiefbauer zwischen Wesel im Norden, Dortmund im Osten und Solingen im Süden.",
      "Kurze Wege, schnelle Ersatzteilversorgung und persönliche Betreuung – das zeichnet unseren Standort Mülheim aus. Die telefonische Beratung läuft zentral über unsere Hotline am Hauptsitz Krefeld.",
    ]}
    anfahrtText="Anfahrt mit dem PKW: Über die A40 / A52 zentral aus dem gesamten Ruhrgebiet erreichbar. Von Essen ca. 15 Minuten, von Duisburg 15 Minuten, von Oberhausen 10 Minuten."
    einzugsgebietText="Von Mülheim aus beliefern wir Duisburg, Essen, Oberhausen, Bottrop, Gelsenkirchen, Dortmund, Bochum und Wesel. Auf Wunsch organisieren wir die Auslieferung Ihrer Zoomlion-Maschine direkt zur Baustelle im gesamten Ruhrgebiet."
    areaServed={["Mülheim an der Ruhr", "Duisburg", "Essen", "Oberhausen", "Bottrop", "Gelsenkirchen", "Dortmund", "Bochum"]}
  />
);

export default StandortMuelheim;
