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

const Index = () => {
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
        <meta property="og:title" content="Minibagger & Arbeitsbühne kaufen NRW – Bagger & Teleskoplader vom Händler" />
        <meta property="og:description" content="Minibagger, Bagger, Arbeitsbühnen & Teleskoplader kaufen in NRW. 3 Standorte, 3 Jahre Garantie, Finanzierung möglich, Made in EU." />
        <meta property="og:url" content="https://www.zoomlion-nrw.de/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <HeroSection />
      <HotDealsSection />
      <ProductCategories />
      <USPSection />
      <FinancingTeaser />
      <ServiceTeaser />
      <ComparisonSection />
      <LocationsTeaser />
      <ContactTeaser />
    </Layout>
  );
};

export default Index;
