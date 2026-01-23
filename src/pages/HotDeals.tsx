import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Flame, Shovel, ChevronsUp, ArrowRight, Phone, Mail } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { hotDeals, type HotDeal } from "@/data/hotDeals";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FinancingSection } from "@/components/financing/FinancingSection";
import type { FinancingRequestData } from "@/lib/financing";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

function HotDealDetailCard({ deal, onInquiry }: { deal: HotDeal; onInquiry: () => void }) {
  return (
    <div className="group relative rounded-xl border-2 border-primary/30 bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary">
      {/* Hot Deal Badge */}
      {deal.highlight && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive px-4 py-1.5 text-sm font-bold text-destructive-foreground animate-pulse">
            <Flame className="h-4 w-4" />
            {deal.highlight}
          </span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="aspect-square md:aspect-auto bg-muted relative min-h-[300px] overflow-hidden">
          <img
            src={deal.image}
            alt={`Zoomlion ${deal.name} ${deal.type === "bagger" ? "Minibagger" : "Arbeitsbühne"} kaufen - ${deal.highlight} Sonderangebot NRW`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center rounded-md bg-primary/90 px-3 py-1.5 text-sm font-medium text-primary-foreground">
              {deal.type === "bagger" ? "Minibagger" : "Arbeitsbühne"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col">
          <div className="mb-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              {deal.name}
            </h2>
            <p className="text-lg text-muted-foreground">{deal.typeLabel}</p>
            <p className="text-sm text-primary font-medium mt-1">{deal.subtitle}</p>
          </div>

          {/* Price */}
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-sm text-muted-foreground">Aktionspreis ab nur</p>
            <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
              {formatPrice(deal.dealPrice)}
            </p>
            <p className="text-sm text-muted-foreground">(zzgl. USt.)</p>
          </div>

          {/* All Specs */}
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-3">Technische Daten</h4>
            <div className="grid gap-2">
              {deal.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between text-sm py-1 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground">{spec.label}:</span>
                  <span className="font-medium text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button onClick={onInquiry} size="lg" className="flex-1 group/btn">
              <Mail className="mr-2 h-4 w-4" />
              Jetzt anfragen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:02151-4179904">
                <Phone className="mr-2 h-4 w-4" />
                Anrufen
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HotDeals() {
  const [selectedDeal, setSelectedDeal] = useState<HotDeal | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    wartungsvertrag: false,
    acceptPrivacy: false,
  });

  const [financingData, setFinancingData] = useState<FinancingRequestData>({
    financingRequested: false,
  });

  const handleInquiry = (deal: HotDeal) => {
    setSelectedDeal(deal);
    setFormData((prev) => ({
      ...prev,
      message: `Ich interessiere mich für das Hot Deal Angebot: ${deal.name} (${deal.typeLabel}) zum Aktionspreis von ${formatPrice(deal.dealPrice)} zzgl. USt.`,
    }));
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptPrivacy) {
      toast({
        title: "Bitte akzeptieren Sie die Datenschutzbestimmungen",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-inquiry", {
        body: {
          type: "hot-deal",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          filters: {
            dealName: selectedDeal?.name,
            dealType: selectedDeal?.typeLabel,
            dealPrice: selectedDeal ? formatPrice(selectedDeal.dealPrice) : "",
          },
          wartungsvertrag: formData.wartungsvertrag,
          financing: financingData.financingRequested ? {
            financingRequested: financingData.financingRequested,
            netPurchasePrice: financingData.netPurchasePrice,
            downPaymentPercent: financingData.downPaymentPercent,
            downPaymentEur: financingData.downPaymentEur,
            termMonths: financingData.termMonths,
            balloonPercent: financingData.balloonPercent,
            balloonEur: financingData.balloonEur,
            estimatedMonthlyRate: financingData.estimatedMonthlyRate,
          } : undefined,
        },
      });

      if (error) throw error;

      toast({
        title: "Anfrage erfolgreich gesendet!",
        description: "Wir melden uns schnellstmöglich bei Ihnen.",
      });

      setModalOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        wartungsvertrag: false,
        acceptPrivacy: false,
      });
      setFinancingData({ financingRequested: false });
    } catch (error) {
      console.error("Error sending inquiry:", error);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es erneut oder rufen Sie uns an.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const excavators = hotDeals.filter((d) => d.type === "bagger");
  const platforms = hotDeals.filter((d) => d.type === "arbeitsbuehne");

  const dealsSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Zoomlion Hot Deals - Sonderangebote Baumaschinen NRW",
    "description": "Limitierte Sonderangebote für Minibagger und Arbeitsbühnen von Zoomlion in NRW",
    "numberOfItems": hotDeals.length,
    "itemListElement": hotDeals.map((deal, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "name": deal.name,
      "description": `${deal.typeLabel} - ${deal.subtitle}`,
      "price": deal.dealPrice,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/LimitedAvailability",
      "seller": {
        "@type": "Organization",
        "name": "Zoomlion NRW"
      }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>Hot Deals – Minibagger & Arbeitsbühnen Sonderangebote NRW | Zoomlion</title>
        <meta 
          name="title" 
          content="Hot Deals – Minibagger & Arbeitsbühnen Sonderangebote NRW | Zoomlion" 
        />
        <meta 
          name="description" 
          content="🔥 Limitierte Sonderangebote: Zoomlion Minibagger & Arbeitsbühnen zu Bestpreisen kaufen ➤ Sofort verfügbar ✓ Finanzierung möglich ✓ 3 Jahre Garantie. Jetzt zugreifen!" 
        />
        <meta 
          name="keywords" 
          content="Minibagger Angebot NRW, Arbeitsbühne Sonderangebot, Baumaschinen günstig kaufen, Zoomlion Aktion, Bagger Schnäppchen, Arbeitsbühne reduziert, Hot Deals Baumaschinen" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/hot-deals" />
        
        <meta property="og:title" content="Hot Deals – Baumaschinen Sonderangebote NRW" />
        <meta property="og:description" content="Limitierte Sonderangebote für Minibagger und Arbeitsbühnen. Jetzt zu Bestpreisen kaufen!" />
        <meta property="og:url" content="https://www.zoomlion-nrw.de/hot-deals" />
        
        <script type="application/ld+json">
          {JSON.stringify(dealsSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-destructive/10 to-background">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Flame className="h-12 w-12 text-destructive animate-pulse" />
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Hot Deals
            </h1>
            <Flame className="h-12 w-12 text-destructive animate-pulse" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Limitierte Sonderangebote für Minibagger & Arbeitsbühnen zu Bestpreisen – solange der Vorrat reicht!
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-primary font-medium">
            <span>🔥</span>
            <span>{hotDeals.length} aktuelle Angebote verfügbar</span>
            <span>🔥</span>
          </div>
        </div>
      </section>

      {/* Excavators */}
      {excavators.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex items-center gap-3 mb-8">
              <Shovel className="h-8 w-8 text-primary" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Minibagger Sonderangebote
              </h2>
            </div>
            <div className="space-y-8">
              {excavators.map((deal) => (
                <HotDealDetailCard
                  key={deal.id}
                  deal={deal}
                  onInquiry={() => handleInquiry(deal)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Platforms */}
      {platforms.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex items-center gap-3 mb-8">
              <ChevronsUp className="h-8 w-8 text-primary" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Arbeitsbühnen Sonderangebote
              </h2>
            </div>
            <div className="space-y-8">
              {platforms.map((deal) => (
                <HotDealDetailCard
                  key={deal.id}
                  deal={deal}
                  onInquiry={() => handleInquiry(deal)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Fragen zu unseren Hot Deals?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Unser Team berät Sie gerne persönlich zu allen Angeboten und findet
            die perfekte Lösung für Ihre Anforderungen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:02151-4179904">
                <Phone className="mr-2 h-5 w-5" />
                02151 4179904
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/kontakt">
                Kontaktformular
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-destructive" />
              Hot Deal anfragen
            </DialogTitle>
            <DialogDescription>
              {selectedDeal && (
                <>
                  <span className="font-semibold text-foreground">{selectedDeal.name}</span>
                  {" – "}
                  {selectedDeal.typeLabel} zum Aktionspreis von{" "}
                  <span className="font-semibold text-primary">
                    {formatPrice(selectedDeal.dealPrice)}
                  </span>{" "}
                  (zzgl. USt.)
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Firma</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Nachricht</Label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Financing Section */}
            <FinancingSection 
              productPrice={selectedDeal?.dealPrice} 
              onChange={setFinancingData}
            />

            <div className="flex items-start space-x-2">
              <Checkbox
                id="wartungsvertrag"
                checked={formData.wartungsvertrag}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, wartungsvertrag: checked as boolean })
                }
              />
              <Label htmlFor="wartungsvertrag" className="text-sm leading-relaxed">
                Ich interessiere mich für einen <strong>Wartungsvertrag</strong> (planbare Kosten, bevorzugter Service)
              </Label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="privacy"
                checked={formData.acceptPrivacy}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, acceptPrivacy: checked as boolean })
                }
              />
              <Label htmlFor="privacy" className="text-sm leading-relaxed">
                Ich habe die{" "}
                <Link to="/datenschutz" className="text-primary hover:underline" target="_blank">
                  Datenschutzbestimmungen
                </Link>{" "}
                gelesen und akzeptiere diese. *
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
