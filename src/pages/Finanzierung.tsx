import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FinancingCalculator } from "@/components/financing/FinancingCalculator";
import { InquiryModal } from "@/components/configurator/InquiryModal";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calculator, Clock, Shield, Percent } from "lucide-react";

const Finanzierung = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [financingData, setFinancingData] = useState<{
    netPurchasePrice: number;
    downPaymentPercent: number;
    termMonths: number;
    balloonPercent: number;
    monthlyRate: number;
  } | null>(null);

  const handleTransferToInquiry = (data: {
    netPurchasePrice: number;
    downPaymentPercent: number;
    termMonths: number;
    balloonPercent: number;
    monthlyRate: number;
  }) => {
    setFinancingData(data);
    setIsModalOpen(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const benefits = [
    {
      icon: Calculator,
      title: "Transparente Kalkulation",
      description: "Sofort sehen, was die monatliche Rate kostet – ohne versteckte Gebühren."
    },
    {
      icon: Clock,
      title: "Flexible Laufzeiten",
      description: "12 bis 48 Monate – passend zu Ihrem Projekt und Cashflow."
    },
    {
      icon: Percent,
      title: "Attraktive Konditionen",
      description: "Wettbewerbsfähige Zinssätze für Gewerbekunden und Bauunternehmen."
    },
    {
      icon: Shield,
      title: "Sicherheit & Beratung",
      description: "Persönliche Beratung durch unsere Finanzierungsexperten."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Minibagger & Arbeitsbühne finanzieren NRW | Zoomlion Finanzierungsrechner</title>
        <meta 
          name="title" 
          content="Minibagger & Arbeitsbühne finanzieren NRW | Zoomlion Finanzierungsrechner" 
        />
        <meta 
          name="description" 
          content="Minibagger oder Arbeitsbühne finanzieren ➤ Online-Rechner für monatliche Rate ✓ Flexible Laufzeiten 12-48 Monate ✓ Attraktive B2B-Konditionen ✓ Baumaschinen Leasing NRW. Jetzt berechnen!" 
        />
        <meta 
          name="keywords" 
          content="Minibagger finanzieren, Arbeitsbühne finanzieren, Baumaschinen Leasing NRW, Bagger Finanzierung, Arbeitsbühne Leasing, Baumaschinen Ratenkauf, Zoomlion Finanzierung" 
        />
        <link rel="canonical" href="https://www.zoomlion-nrw.de/finanzierung" />
        
        <meta property="og:title" content="Baumaschinen finanzieren – Zoomlion Finanzierungsrechner" />
        <meta property="og:description" content="Berechnen Sie Ihre monatliche Rate für Minibagger und Arbeitsbühnen. Flexible B2B-Konditionen." />
        <meta property="og:url" content="https://www.zoomlion-nrw.de/finanzierung" />
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Finanzierung"
            title="Finanzierungsrechner"
            subtitle="Berechnen Sie Ihre monatliche Rate – schnell, transparent und unverbindlich"
          />

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Rechner */}
            <div className="lg:col-span-2">
              <FinancingCalculator 
                onTransferToInquiry={handleTransferToInquiry}
              />
            </div>

            {/* Vorteile Sidebar */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-lg mb-4">Ihre Vorteile</h3>
              {benefits.map((benefit, index) => (
                <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-4 flex gap-3">
                    <benefit.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">{benefit.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="mt-6">
                <TrustBadges variant="compact" />
              </div>
            </div>
          </div>

          {/* Beispielrechnung */}
          <div className="max-w-6xl mx-auto mt-16">
            <h3 className="font-heading font-bold text-xl mb-6 text-center">Beispielrechnung</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Nettokaufpreis", value: "25.000 €" },
                { label: "Anzahlung (20%)", value: "5.000 €" },
                { label: "Laufzeit", value: "36 Monate" },
                { label: "Schlussrate (20%)", value: "5.000 €" }
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-lg font-bold">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              → Monatliche Rate: ca. <strong>463,78 €</strong> (4,0% p.a., unverbindlich)
            </p>
          </div>

          {/* FAQ Bereich */}
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="font-heading font-bold text-xl mb-6 text-center">Häufige Fragen zur Finanzierung</h3>
            <div className="space-y-4">
              {[
                {
                  q: "Welche Voraussetzungen gibt es für eine Finanzierung?",
                  a: "Als B2B-Partner benötigen wir einen Handelsregistereintrag oder Gewerbeschein, die letzten zwei Jahresabschlüsse und eine positive Bonität."
                },
                {
                  q: "Kann ich die Laufzeit individuell anpassen?",
                  a: "Ja, neben den Standardlaufzeiten können wir bei vielen Finanzierungspartnern auch individuelle Laufzeiten vereinbaren."
                },
                {
                  q: "Was passiert am Ende der Laufzeit?",
                  a: "Bei einer Ballonfinanzierung zahlen Sie die Schlussrate. Alternativ kann diese refinanziert oder die Maschine zurückgegeben werden."
                },
                {
                  q: "Sind Sondertilgungen möglich?",
                  a: "Je nach Finanzierungspartner sind Sondertilgungen möglich. Details besprechen wir gerne persönlich mit Ihnen."
                }
              ].map((faq, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card">
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">{faq.q}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal mit Finanzierungsdaten */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="kontakt"
        filters={financingData ? {
          finanzierung: `Netto: ${formatCurrency(financingData.netPurchasePrice)}, ` +
            `Anzahlung: ${financingData.downPaymentPercent}%, ` +
            `Laufzeit: ${financingData.termMonths} Monate, ` +
            `Schlussrate: ${financingData.balloonPercent}%, ` +
            `Rate ca.: ${formatCurrency(financingData.monthlyRate)}`
        } : undefined}
      />
    </Layout>
  );
};

export default Finanzierung;
