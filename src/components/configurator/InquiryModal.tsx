import { useState, useCallback } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle } from "lucide-react";
import { FinancingSection } from "@/components/financing/FinancingSection";
import { FinancingRequestData } from "@/lib/financing";
import { TradeInSection, TradeInData } from "@/components/configurator/TradeInSection";

const inquirySchema = z.object({
  firma: z.string().trim().min(1, "Firma ist erforderlich").max(100),
  ansprechpartner: z.string().trim().min(1, "Ansprechpartner ist erforderlich").max(100),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  telefon: z.string().trim().min(1, "Telefon ist erforderlich").max(50),
  plz: z.string().max(50).optional(),
  nachricht: z.string().max(2000).optional(),
  rueckruf: z.boolean().optional(),
  dsgvo: z.literal(true, { errorMap: () => ({ message: "Bitte stimmen Sie der Datenschutzerklärung zu" }) }),
});

const anbaugeraeteOptions = [
  { id: "schnellwechsler", label: "Schnellwechsler" },
  { id: "tieflöffel", label: "Tieflöffel" },
  { id: "grabenraumlöffel", label: "Grabenräumlöffel" },
  { id: "hydraulikhammer", label: "Hydraulikhammer" },
  { id: "greifer", label: "Greifer" },
  { id: "anbauverdichter", label: "Anbauverdichter" },
  { id: "tiltrotator", label: "Tiltrotator" },
  { id: "räumschild", label: "Räumschild" },
];

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "arbeitsbuehne" | "bagger" | "service" | "kontakt";
  selectedProduct?: string;
  filters?: Record<string, any>;
  productPrice?: number;
}

export function InquiryModal({ isOpen, onClose, type, selectedProduct, filters, productPrice }: InquiryModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedAnbaugeraete, setSelectedAnbaugeraete] = useState<string[]>([]);
  const [financingData, setFinancingData] = useState<FinancingRequestData>({
    financingRequested: false,
    netPurchasePrice: 0,
    downPaymentPercent: 20,
    downPaymentEur: 0,
    termMonths: 36,
    balloonPercent: 20,
    balloonEur: 0,
    estimatedMonthlyRate: 0
  });
  const [tradeInData, setTradeInData] = useState<TradeInData>({
    enabled: false,
    hersteller: "",
    modell: "",
    baujahr: "",
    betriebsstunden: "",
    zustand: "",
    seriennummer: "",
    ausstattung: "",
    letzteWartung: "",
    standort: "",
    anmerkungen: "",
    imageUrls: [],
  });
  
  const [formData, setFormData] = useState({
    firma: "",
    ansprechpartner: "",
    email: "",
    telefon: "",
    plz: "",
    nachricht: "",
    rueckruf: false,
    wartungsvertrag: false,
    dsgvo: false,
  });

  const handleFinancingChange = useCallback((data: FinancingRequestData) => {
    setFinancingData(data);
  }, []);

  const handleTradeInChange = useCallback((data: TradeInData) => {
    setTradeInData(data);
  }, []);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const toggleAnbaugeraet = (id: string) => {
    setSelectedAnbaugeraete((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = inquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const anbaugeraeteLabels = selectedAnbaugeraete.map(
        (id) => anbaugeraeteOptions.find((o) => o.id === id)?.label || id
      );

      const { data, error } = await supabase.functions.invoke("send-inquiry", {
        body: {
          type,
          firma: formData.firma,
          ansprechpartner: formData.ansprechpartner,
          email: formData.email,
          telefon: formData.telefon,
          plz: formData.plz || undefined,
          nachricht: formData.nachricht || undefined,
          rueckruf: formData.rueckruf,
          wartungsvertrag: formData.wartungsvertrag,
          selectedProduct,
          filters: {
            ...filters,
            anbaugeraete: type === "bagger" && anbaugeraeteLabels.length > 0 ? anbaugeraeteLabels : undefined,
          },
          financing: financingData.financingRequested ? financingData : undefined,
          tradeIn: tradeInData.enabled ? tradeInData : undefined,
        },
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns kurzfristig bei Ihnen.",
      });

      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          firma: "",
          ansprechpartner: "",
          email: "",
          telefon: "",
          plz: "",
          nachricht: "",
          rueckruf: false,
          wartungsvertrag: false,
          dsgvo: false,
        });
        setSelectedAnbaugeraete([]);
        setFinancingData({
          financingRequested: false,
          netPurchasePrice: 0,
          downPaymentPercent: 20,
          downPaymentEur: 0,
          termMonths: 36,
          balloonPercent: 20,
          balloonEur: 0,
          estimatedMonthlyRate: 0
        });
        setTradeInData({
          enabled: false,
          hersteller: "",
          modell: "",
          baujahr: "",
          betriebsstunden: "",
          zustand: "",
          seriennummer: "",
          ausstattung: "",
          letzteWartung: "",
          standort: "",
          anmerkungen: "",
          imageUrls: [],
        });
      }, 2000);
    } catch (error: any) {
      console.error("Error submitting inquiry:", error);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const typeLabels: Record<string, string> = {
    arbeitsbuehne: "Arbeitsbühne",
    bagger: "Bagger",
    service: "Service",
    kontakt: "Kontakt",
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="h-16 w-16 text-primary mb-4" />
            <h3 className="font-heading text-xl font-bold mb-2">Vielen Dank!</h3>
            <p className="text-muted-foreground">
              Wir haben Ihre Anfrage erhalten und melden uns kurzfristig.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading">
            {selectedProduct ? `Anfrage: ${selectedProduct}` : `${typeLabels[type]} anfragen`}
          </DialogTitle>
          <DialogDescription>
            Füllen Sie das Formular aus – wir melden uns kurzfristig mit Verfügbarkeit und Angebot.
          </DialogDescription>
        </DialogHeader>

        {/* Filter Summary */}
        {filters && Object.keys(filters).some(k => filters[k]) && (
          <div className="p-3 rounded-lg bg-muted text-sm">
            <p className="font-medium mb-1">Ihre Auswahl:</p>
            <ul className="space-y-0.5 text-muted-foreground">
              {Object.entries(filters).map(([key, value]) => {
                if (!value || (Array.isArray(value) && value.length === 0)) return null;
                const labels: Record<string, string> = {
                  einsatzort: "Einsatzort",
                  antrieb: "Antrieb",
                  lithium: "Lithium-Ionen",
                  arbeitshoehe: "Max. Arbeitshöhe",
                  reichweite: "Max. Reichweite",
                  einsatzbereich: "Einsatzbereich",
                  gewichtsklasse: "Gewichtsklasse",
                  ausstattung: "Ausstattung",
                  lieferung: "Lieferung",
                  anbaugeraete: "Anbaugeräte",
                };
                let displayValue = value;
                if (typeof value === "boolean") displayValue = value ? "Ja" : "Nein";
                if (Array.isArray(value)) displayValue = value.join(", ");
                if (key === "arbeitshoehe" || key === "reichweite") displayValue = `${value} m`;
                return (
                  <li key={key}>
                    <span className="font-medium">{labels[key] || key}:</span> {displayValue}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firma">Firma *</Label>
              <Input
                id="firma"
                value={formData.firma}
                onChange={(e) => handleChange("firma", e.target.value)}
                className={errors.firma ? "border-destructive" : ""}
              />
              {errors.firma && <p className="text-xs text-destructive mt-1">{errors.firma}</p>}
            </div>
            <div>
              <Label htmlFor="ansprechpartner">Ansprechpartner *</Label>
              <Input
                id="ansprechpartner"
                value={formData.ansprechpartner}
                onChange={(e) => handleChange("ansprechpartner", e.target.value)}
                className={errors.ansprechpartner ? "border-destructive" : ""}
              />
              {errors.ansprechpartner && <p className="text-xs text-destructive mt-1">{errors.ansprechpartner}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">E-Mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="telefon">Telefon *</Label>
              <Input
                id="telefon"
                type="tel"
                value={formData.telefon}
                onChange={(e) => handleChange("telefon", e.target.value)}
                className={errors.telefon ? "border-destructive" : ""}
              />
              {errors.telefon && <p className="text-xs text-destructive mt-1">{errors.telefon}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="plz">PLZ / Einsatzort</Label>
            <Input
              id="plz"
              value={formData.plz}
              onChange={(e) => handleChange("plz", e.target.value)}
            />
          </div>

          {/* Anbaugeräte - nur bei Bagger */}
          {type === "bagger" && (
            <div className="space-y-2">
              <Label>Gewünschte Anbaugeräte (optional)</Label>
              <div className="grid grid-cols-2 gap-2">
                {anbaugeraeteOptions.map((option) => (
                  <div key={option.id} className="flex items-center gap-2">
                    <Checkbox
                      id={option.id}
                      checked={selectedAnbaugeraete.includes(option.id)}
                      onCheckedChange={() => toggleAnbaugeraet(option.id)}
                    />
                    <Label htmlFor={option.id} className="cursor-pointer text-sm">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Finanzierung - bei Arbeitsbühnen und Bagger */}
          {(type === "arbeitsbuehne" || type === "bagger") && (
            <FinancingSection
              productPrice={productPrice}
              onChange={handleFinancingChange}
            />
          )}

          {/* Inzahlungnahme - bei Arbeitsbühnen und Bagger */}
          {(type === "arbeitsbuehne" || type === "bagger") && (
            <TradeInSection 
              value={tradeInData} 
              onChange={handleTradeInChange} 
              productType={type}
            />
          )}

          <div>
            <Label htmlFor="nachricht">Nachricht / Anwendung</Label>
            <Textarea
              id="nachricht"
              rows={3}
              value={formData.nachricht}
              onChange={(e) => handleChange("nachricht", e.target.value)}
              placeholder="Beschreiben Sie Ihren Einsatzzweck oder Ihre Anforderungen..."
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="rueckruf"
              checked={formData.rueckruf}
              onCheckedChange={(v) => handleChange("rueckruf", !!v)}
            />
            <Label htmlFor="rueckruf" className="cursor-pointer">Bitte um Rückruf</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="wartungsvertrag"
              checked={formData.wartungsvertrag}
              onCheckedChange={(v) => handleChange("wartungsvertrag", !!v)}
            />
            <Label htmlFor="wartungsvertrag" className="cursor-pointer">
              Wartungsvertrag gewünscht
            </Label>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="dsgvo"
              checked={formData.dsgvo}
              onCheckedChange={(v) => handleChange("dsgvo", !!v)}
              className={errors.dsgvo ? "border-destructive" : ""}
            />
            <div>
              <Label htmlFor="dsgvo" className="cursor-pointer text-sm">
                Ich stimme der Verarbeitung meiner Daten gemäß <a href="/datenschutz" target="_blank" className="text-primary underline">Datenschutzerklärung</a> zu *
              </Label>
              {errors.dsgvo && <p className="text-xs text-destructive mt-1">{errors.dsgvo}</p>}
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              "Anfrage senden"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
