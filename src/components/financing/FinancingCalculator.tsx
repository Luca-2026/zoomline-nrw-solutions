import { useState, useMemo, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Info, ArrowRight, HelpCircle } from "lucide-react";
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
  FinancingInputs,
  FinancingResult
} from "@/lib/financing";

interface FinancingCalculatorProps {
  initialPrice?: number;
  productName?: string;
  onTransferToInquiry?: (data: {
    netPurchasePrice: number;
    downPaymentPercent: number;
    termMonths: number;
    balloonPercent: number;
    monthlyRate: number;
  }) => void;
  compact?: boolean;
}

export function FinancingCalculator({
  initialPrice = 0,
  productName,
  onTransferToInquiry,
  compact = false
}: FinancingCalculatorProps) {
  // Formatierter Preis für Anzeige
  const [priceInput, setPriceInput] = useState<string>(
    initialPrice > 0 ? initialPrice.toLocaleString('de-DE') : ""
  );
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [termMonths, setTermMonths] = useState<number>(36);
  const [balloonPercent, setBalloonPercent] = useState<number>(DEFAULT_BALLOON_PERCENT);

  // Parse den Preis-Input zu einer Zahl
  const netPurchasePrice = useMemo(() => {
    return parseGermanNumber(priceInput);
  }, [priceInput]);

  // Berechne Finanzierung live
  const result: FinancingResult = useMemo(() => {
    const inputs: FinancingInputs = {
      netPurchasePrice,
      downPaymentPercent,
      termMonths,
      balloonPercent
    };
    return calculateFinancing(inputs);
  }, [netPurchasePrice, downPaymentPercent, termMonths, balloonPercent]);

  // Handle Preis-Input mit Formatierung
  const handlePriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Erlaube nur Zahlen, Punkte und Kommas
    const cleaned = value.replace(/[^0-9.,]/g, '');
    setPriceInput(cleaned);
  }, []);

  // Formatiere Preis beim Verlassen des Feldes
  const handlePriceBlur = useCallback(() => {
    const parsed = parseGermanNumber(priceInput);
    if (parsed > 0) {
      setPriceInput(parsed.toLocaleString('de-DE'));
    }
  }, [priceInput]);

  const handleTransferToInquiry = useCallback(() => {
    if (onTransferToInquiry && result.isValid) {
      onTransferToInquiry({
        netPurchasePrice,
        downPaymentPercent,
        termMonths,
        balloonPercent,
        monthlyRate: result.monthlyRate
      });
    }
  }, [onTransferToInquiry, result, netPurchasePrice, downPaymentPercent, termMonths, balloonPercent]);

  const interestRateDisplay = `${(ANNUAL_INTEREST_RATE * 100).toFixed(1)}%`;

  return (
    <Card className={`${compact ? '' : 'max-w-2xl mx-auto'} animate-fade-in`}>
      <CardHeader className={compact ? 'pb-4' : ''}>
        <div className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          <CardTitle className="font-heading text-xl">
            Finanzierungsrechner
          </CardTitle>
        </div>
        {productName && (
          <CardDescription>Berechnung für: {productName}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Eingabefelder */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Nettokaufpreis */}
          <div className="space-y-2 sm:col-span-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="netPrice">Nettokaufpreis (EUR)</Label>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Geben Sie den Nettokaufpreis der Maschine ein</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="relative">
              <Input
                id="netPrice"
                type="text"
                inputMode="decimal"
                placeholder="z.B. 25.000"
                value={priceInput}
                onChange={handlePriceChange}
                onBlur={handlePriceBlur}
                className="pr-12"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
            </div>
          </div>

          {/* Anzahlung */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="downPayment">Anzahlung</Label>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Anzahlung reduziert den Finanzierungsbetrag</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select
              value={downPaymentPercent.toString()}
              onValueChange={(v) => setDownPaymentPercent(parseInt(v))}
            >
              <SelectTrigger id="downPayment">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DOWN_PAYMENT_PERCENT_OPTIONS.map((percent) => (
                  <SelectItem key={percent} value={percent.toString()}>
                    {percent}% {netPurchasePrice > 0 && `(${formatCurrency((netPurchasePrice * percent) / 100)})`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Laufzeit */}
          <div className="space-y-2">
            <Label htmlFor="term">Laufzeit</Label>
            <Select
              value={termMonths.toString()}
              onValueChange={(v) => setTermMonths(parseInt(v))}
            >
              <SelectTrigger id="term">
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
          <div className="space-y-2 sm:col-span-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="balloon">Schlussrate</Label>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Restbetrag am Laufzeitende</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select
              value={balloonPercent.toString()}
              onValueChange={(v) => setBalloonPercent(parseInt(v))}
            >
              <SelectTrigger id="balloon">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {BALLOON_PERCENT_OPTIONS.map((percent) => (
                  <SelectItem key={percent} value={percent.toString()}>
                    {percent}% {netPurchasePrice > 0 && `(${formatCurrency((netPurchasePrice * percent) / 100)})`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Ergebnisbereich */}
        {netPurchasePrice > 0 && (
          <div className="rounded-lg border bg-muted/50 p-4 space-y-3 animate-fade-in">
            {result.isValid ? (
              <>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Finanzierter Betrag</p>
                    <p className="text-lg font-semibold">{formatCurrency(result.financedAmount)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Schlussrate</p>
                    <p className="text-lg font-semibold">{formatCurrency(result.balloonEur)}</p>
                  </div>
                </div>
                
                <div className="pt-3 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Monatliche Rate (ca.)</p>
                      <p className="text-2xl font-bold text-primary">{formatCurrency(result.monthlyRate)}</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-start gap-2 text-destructive">
                <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">{result.errorMessage}</p>
              </div>
            )}
          </div>
        )}

        {/* Rechtlicher Hinweis */}
        <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
          <Info className="h-4 w-4 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 dark:text-amber-300">
            Unverbindliche Beispielrechnung ({interestRateDisplay} p.a.). Die tatsächlichen Konditionen 
            hängen von Bonität, Objekt, Laufzeit und Finanzierungspartner ab. 
            Dieses Tool stellt kein verbindliches Angebot dar.
          </p>
        </div>

        {/* CTA Button */}
        {onTransferToInquiry && result.isValid && netPurchasePrice > 0 && (
          <Button onClick={handleTransferToInquiry} className="w-full" size="lg">
            <span>Ergebnis in Anfrage übernehmen</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
