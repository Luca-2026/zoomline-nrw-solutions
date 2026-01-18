import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HelpCircle, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  calculateFinancing,
  formatCurrency,
  parseGermanNumber,
  TERM_OPTIONS,
  DOWN_PAYMENT_PERCENT_OPTIONS,
  BALLOON_PERCENT_OPTIONS,
  DEFAULT_BALLOON_PERCENT,
  ANNUAL_INTEREST_RATE,
  FinancingRequestData
} from "@/lib/financing";

interface FinancingSectionProps {
  productPrice?: number; // Preis aus dem Produktkatalog
  onChange: (data: FinancingRequestData) => void;
  initialData?: Partial<FinancingRequestData>;
}

export function FinancingSection({ productPrice, onChange, initialData }: FinancingSectionProps) {
  const [financingRequested, setFinancingRequested] = useState(initialData?.financingRequested ?? false);
  const [priceInput, setPriceInput] = useState<string>(
    initialData?.netPurchasePrice 
      ? initialData.netPurchasePrice.toLocaleString('de-DE') 
      : productPrice && productPrice > 0 
        ? productPrice.toLocaleString('de-DE') 
        : ""
  );
  const [downPaymentPercent, setDownPaymentPercent] = useState(initialData?.downPaymentPercent ?? 20);
  const [termMonths, setTermMonths] = useState(initialData?.termMonths ?? 36);
  const [balloonPercent, setBalloonPercent] = useState(initialData?.balloonPercent ?? DEFAULT_BALLOON_PERCENT);

  const netPurchasePrice = parseGermanNumber(priceInput);
  const priceOnRequest = !productPrice || productPrice <= 0;
  const canCalculate = netPurchasePrice > 0;

  // Berechne die Rate
  const result = calculateFinancing({
    netPurchasePrice: canCalculate ? netPurchasePrice : 0,
    downPaymentPercent,
    termMonths,
    balloonPercent
  });

  // Update parent component
  useEffect(() => {
    onChange({
      financingRequested,
      netPurchasePrice: canCalculate ? netPurchasePrice : 0,
      downPaymentPercent,
      downPaymentEur: result.downPaymentEur,
      termMonths,
      balloonPercent,
      balloonEur: result.balloonEur,
      estimatedMonthlyRate: result.isValid ? result.monthlyRate : 0,
      priceOnRequest: priceOnRequest && !canCalculate
    });
  }, [financingRequested, netPurchasePrice, downPaymentPercent, termMonths, balloonPercent, result, canCalculate, priceOnRequest, onChange]);

  // Formatiere Preis beim Verlassen
  const handlePriceBlur = () => {
    const parsed = parseGermanNumber(priceInput);
    if (parsed > 0) {
      setPriceInput(parsed.toLocaleString('de-DE'));
    }
  };

  const interestRateDisplay = `${(ANNUAL_INTEREST_RATE * 100).toFixed(1)}%`;

  return (
    <div className="space-y-4 p-4 rounded-lg border border-border bg-muted/30">
      {/* Checkbox: Finanzierung gewünscht */}
      <div className="flex items-center gap-2">
        <Checkbox
          id="financing-requested"
          checked={financingRequested}
          onCheckedChange={(checked) => setFinancingRequested(!!checked)}
        />
        <Label htmlFor="financing-requested" className="cursor-pointer font-medium">
          Finanzierung gewünscht
        </Label>
      </div>

      {/* Conditional Fields */}
      {financingRequested && (
        <div className="space-y-4 pt-2 animate-fade-in">
          {/* Preis Eingabe - nur wenn kein Produktpreis vorhanden */}
          {priceOnRequest && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="calc-price">Kalkulationsbasis (Nettopreis)</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Optional: Geben Sie einen Schätzpreis für die Kalkulation ein</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="relative">
                <Input
                  id="calc-price"
                  type="text"
                  inputMode="decimal"
                  placeholder="Preis auf Anfrage"
                  value={priceInput}
                  onChange={(e) => setPriceInput(e.target.value.replace(/[^0-9.,]/g, ''))}
                  onBlur={handlePriceBlur}
                  className="pr-12"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Anzahlung */}
            <div className="space-y-1.5">
              <Label htmlFor="fin-downpayment" className="text-sm">Anzahlung</Label>
              <Select
                value={downPaymentPercent.toString()}
                onValueChange={(v) => setDownPaymentPercent(parseInt(v))}
              >
                <SelectTrigger id="fin-downpayment" className="h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DOWN_PAYMENT_PERCENT_OPTIONS.map((percent) => (
                    <SelectItem key={percent} value={percent.toString()}>
                      {percent}%
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Laufzeit */}
            <div className="space-y-1.5">
              <Label htmlFor="fin-term" className="text-sm">Laufzeit</Label>
              <Select
                value={termMonths.toString()}
                onValueChange={(v) => setTermMonths(parseInt(v))}
              >
                <SelectTrigger id="fin-term" className="h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TERM_OPTIONS.map((months) => (
                    <SelectItem key={months} value={months.toString()}>
                      {months} Monate
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Schlussrate */}
            <div className="space-y-1.5">
              <Label htmlFor="fin-balloon" className="text-sm">Schlussrate</Label>
              <Select
                value={balloonPercent.toString()}
                onValueChange={(v) => setBalloonPercent(parseInt(v))}
              >
                <SelectTrigger id="fin-balloon" className="h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {BALLOON_PERCENT_OPTIONS.map((percent) => (
                    <SelectItem key={percent} value={percent.toString()}>
                      {percent}%
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Berechnete Rate Anzeige */}
          {canCalculate && result.isValid ? (
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Monatliche Rate (ca.)</span>
                <span className="text-lg font-bold text-primary">{formatCurrency(result.monthlyRate)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {interestRateDisplay} p.a. – unverbindlich, bonitätsabhängig
              </p>
            </div>
          ) : canCalculate && !result.isValid ? (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
              <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>{result.errorMessage}</span>
            </div>
          ) : priceOnRequest && !canCalculate ? (
            <div className="p-3 rounded-lg bg-muted border text-center">
              <p className="text-sm text-muted-foreground">
                Rate wird nach Angebot berechnet
              </p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
