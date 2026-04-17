import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HotDealsSection } from "@/components/home/HotDealsSection";
import { ProductCategories } from "@/components/home/ProductCategories";
import { USPSection } from "@/components/home/USPSection";
import { FinancingTeaser } from "@/components/home/FinancingTeaser";
import { ServiceTeaser } from "@/components/home/ServiceTeaser";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { LocationsTeaser } from "@/components/home/LocationsTeaser";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { SocialMeta } from "@/components/shared/SocialMeta";

const Index = () => {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.zoomlion-nrw.de/#organization",
    name: "Zoomlion NRW",
    legalName: "SLT Technology Group GmbH & Co. KG",
    url: "https://www.zoomlion-nrw.de",
    logo: {
      "@type": "ImageObject",
      url: "https://www.zoomlion-nrw.de/logo-512.png",
      width: 512,
      height: 512,
    },
    image: "https://www.zoomlion-nrw.de/og-image.jpg",
    email: "verkauf@zoomlion-nrw.de",
    telephone: "+49-2151-4179904",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Anrather Straße 291",
      postalCode: "47807",
      addressLocality: "Krefeld",
      addressRegion: "NRW",
      addressCountry: "DE"
    },
    areaServed: { "@type": "AdministrativeArea", name: "Nordrhein-Westfalen" }
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.zoomlion-nrw.de/#website",
    name: "Zoomlion NRW",
    url: "https://www.zoomlion-nrw.de",
    inLanguage: "de-DE",
    publisher: { "@id": "https://www.zoomlion-nrw.de/#organization" }
  };
  return (
    <Layout showCTABar={false}>
      <Helmet>
        <title>Minibagger & Arbeitsbühne kaufen NRW – Bagger, Hebebühne & Teleskoplader</title>
        <meta name="title" content="Minibagger & Arbeitsbühne kaufen NRW – Bagger, Hebebühne & Teleskoplader" />
        <meta
          name="description"
          content="Minibagger, Arbeitsbühne, Bagger & Teleskoplader kaufen in NRW ➤ Direkt vom Fachhändler ✓ 3 Jahre Garantie ✓ 3 Standorte (Bonn, Krefeld, Mülheim) ✓ Finanzierung ✓ Made in EU. Jetzt unverbindlich Angebot anfordern!"
        />
        <meta
          name="keywords"
          content="Minibagger kaufen, Bagger kaufen, Arbeitsbühne kaufen, Hebebühne kaufen, Teleskoplader kaufen NRW, Minibagger kaufen NRW, Kompaktbagger kaufen, Scherenarbeitsbühne kaufen, Baumaschinen kaufen NRW, Telehandler kaufen, Minibagger Köln, Minibagger Düsseldorf"
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      </Helmet>
      <SocialMeta
        title="Minibagger & Arbeitsbühne kaufen NRW – Bagger & Teleskoplader vom Händler"
        description="Minibagger, Bagger, Arbeitsbühnen & Teleskoplader kaufen in NRW. 3 Standorte, 3 Jahre Garantie, Finanzierung möglich, Made in EU."
        url="https://www.zoomlion-nrw.de/"
      />
      <HeroSection />
      <USPSection />
      <HotDealsSection />
      <ProductCategories />
      <FinancingTeaser />
      <ServiceTeaser />
      <ComparisonSection />
      <LocationsTeaser />
      <ContactTeaser />
    </Layout>
  );
};

export default Index;
