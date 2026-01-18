import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HotDealsSection } from "@/components/home/HotDealsSection";
import { ProductCategories } from "@/components/home/ProductCategories";
import { USPSection } from "@/components/home/USPSection";
import { FinancingTeaser } from "@/components/home/FinancingTeaser";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { LocationsTeaser } from "@/components/home/LocationsTeaser";
import { ContactTeaser } from "@/components/home/ContactTeaser";

const Index = () => {
  return (
    <Layout showCTABar={false}>
      <HeroSection />
      <HotDealsSection />
      <ProductCategories />
      <USPSection />
      <FinancingTeaser />
      <ComparisonSection />
      <LocationsTeaser />
      <ContactTeaser />
    </Layout>
  );
};

export default Index;
