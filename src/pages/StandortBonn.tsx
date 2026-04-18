import { StandortPageLayout } from "@/components/standort/StandortPageLayout";
import { STANDORTE } from "@/data/standorte";
import bonnImage from "@/assets/locations/bonn.webp";

const StandortBonn = () => (
  <StandortPageLayout
    standort={STANDORTE.bonn}
    metaTitle="Zoomlion Händler Bonn – SLT Technology Group Standort Bonn"
    metaDescription="Zoomlion Minibagger, Arbeitsbühnen & Teleskoplader in Bonn kaufen. Probefahrt, persönliche Beratung und Ersatzteile an unserem Standort Bonn."
    h1="Zoomlion Händler Bonn – Ihr Zoomlion-Standort im Rheinland"
    subtitle="Verkauf · Beratung · Probefahrt für Bonn, Köln-Süd und Rhein-Sieg-Kreis"
    heroImageSrc={bonnImage}
    schemaImageUrl="https://www.zoomlion-nrw.de/og-image.jpg"
    introParagraphs={[
      "Unser Standort Bonn bedient als Zoomlion-Fachhändler den gesamten Raum Bonn, Rhein-Sieg-Kreis und die nördliche Eifel. Von Bonn aus erreichen Sie in unter einer Stunde Köln, Koblenz sowie Aachen.",
      "Vereinbaren Sie gerne einen Termin zur Probefahrt oder kommen Sie während unserer Öffnungszeiten auf unseren Hof. Wir beraten Sie persönlich und unverbindlich rund um Minibagger, Arbeitsbühnen und Teleskoplader Made in EU.",
    ]}
    anfahrtText="Anfahrt mit dem PKW: Über die A59 / A565 erreichen Sie uns aus allen Richtungen schnell. Von Köln-Süd ca. 30 Minuten, von Siegburg 15 Minuten, von Königswinter 20 Minuten."
    einzugsgebietText="Von Bonn aus beliefern wir Kunden in Köln (südlicher Teil), dem Rhein-Sieg-Kreis, Siegburg, Troisdorf, Hennef, Königswinter, Bad Honnef und Euskirchen. Auf Wunsch liefern wir Ihre Zoomlion-Maschine direkt zur Baustelle."
    areaServed={["Bonn", "Köln", "Siegburg", "Troisdorf", "Hennef", "Königswinter", "Bad Honnef", "Euskirchen"]}
  />
);

export default StandortBonn;
