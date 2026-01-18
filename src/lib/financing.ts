/**
 * Finanzierungsrechner Utility
 * Zentrale Berechnungslogik für Ballonfinanzierung
 * Zoomlion NRW - B2B Finanzierungsrechner
 */

// Konstanten
export const ANNUAL_INTEREST_RATE = 0.04; // 4,0% p.a.
export const MONTHLY_INTEREST_RATE = ANNUAL_INTEREST_RATE / 12;

// Dropdown Optionen
export const TERM_OPTIONS = [12, 18, 24, 36, 48] as const;
export const DOWN_PAYMENT_PERCENT_OPTIONS = [0, 10, 20, 30, 40] as const;
export const BALLOON_PERCENT_OPTIONS = [0, 10, 20, 30, 40] as const;
export const DEFAULT_BALLOON_PERCENT = 20;

export type TermMonths = typeof TERM_OPTIONS[number];
export type DownPaymentPercent = typeof DOWN_PAYMENT_PERCENT_OPTIONS[number];
export type BalloonPercent = typeof BALLOON_PERCENT_OPTIONS[number];

export interface FinancingInputs {
  netPurchasePrice: number;      // P = Nettokaufpreis
  downPaymentPercent: number;    // Anzahlung in %
  termMonths: number;            // n = Laufzeit in Monaten
  balloonPercent: number;        // Schlussrate in %
}

export interface FinancingResult {
  monthlyRate: number;           // A = Monatliche Rate
  downPaymentEur: number;        // Anzahlung in EUR
  balloonEur: number;            // B = Schlussrate in EUR
  financedAmount: number;        // PV = Finanzierter Betrag
  isValid: boolean;
  errorMessage?: string;
}

/**
 * Berechnet die monatliche Rate bei Ballonfinanzierung
 * 
 * Formel:
 * A = ((PV - (B / (1+r)^n)) * r) / (1 - (1+r)^(-n))
 * 
 * wobei:
 * - PV = Finanzierter Betrag (Nettopreis - Anzahlung)
 * - B = Schlussrate in EUR
 * - r = Monatszins (0.04 / 12)
 * - n = Laufzeit in Monaten
 */
export function calculateFinancing(inputs: FinancingInputs): FinancingResult {
  const { netPurchasePrice, downPaymentPercent, termMonths, balloonPercent } = inputs;
  
  // Validierung
  if (netPurchasePrice <= 0) {
    return {
      monthlyRate: 0,
      downPaymentEur: 0,
      balloonEur: 0,
      financedAmount: 0,
      isValid: false,
      errorMessage: "Der Nettokaufpreis muss größer als 0 sein."
    };
  }
  
  if (!TERM_OPTIONS.includes(termMonths as TermMonths)) {
    return {
      monthlyRate: 0,
      downPaymentEur: 0,
      balloonEur: 0,
      financedAmount: 0,
      isValid: false,
      errorMessage: "Ungültige Laufzeit gewählt."
    };
  }
  
  const downPaymentEur = (netPurchasePrice * downPaymentPercent) / 100;
  const balloonEur = (netPurchasePrice * balloonPercent) / 100;
  
  // Validierung: Anzahlung + Schlussrate darf nicht den Nettokaufpreis überschreiten
  if (downPaymentEur + balloonEur > netPurchasePrice) {
    return {
      monthlyRate: 0,
      downPaymentEur,
      balloonEur,
      financedAmount: 0,
      isValid: false,
      errorMessage: "Anzahlung + Schlussrate darf den Nettokaufpreis nicht überschreiten."
    };
  }
  
  const financedAmount = netPurchasePrice - downPaymentEur;
  const r = MONTHLY_INTEREST_RATE;
  const n = termMonths;
  
  let monthlyRate: number;
  
  if (r > 0) {
    // Formel für Ballonfinanzierung:
    // A = ((PV - (B / (1+r)^n)) * r) / (1 - (1+r)^(-n))
    const discountedBalloon = balloonEur / Math.pow(1 + r, n);
    const presentValue = financedAmount - discountedBalloon;
    const annuityFactor = r / (1 - Math.pow(1 + r, -n));
    monthlyRate = presentValue * annuityFactor;
  } else {
    // Fallback für r == 0
    monthlyRate = (financedAmount - balloonEur) / n;
  }
  
  // Negative Rate verhindern (sollte nicht vorkommen bei validen Inputs)
  if (monthlyRate < 0) {
    return {
      monthlyRate: 0,
      downPaymentEur,
      balloonEur,
      financedAmount,
      isValid: false,
      errorMessage: "Die Berechnung ergab eine ungültige Rate."
    };
  }
  
  return {
    monthlyRate: Math.round(monthlyRate * 100) / 100,
    downPaymentEur: Math.round(downPaymentEur * 100) / 100,
    balloonEur: Math.round(balloonEur * 100) / 100,
    financedAmount: Math.round(financedAmount * 100) / 100,
    isValid: true
  };
}

/**
 * Formatiert einen Betrag im deutschen Format (1.234,56 €)
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

/**
 * Formatiert eine Zahl im deutschen Format mit Tausendertrennzeichen
 */
export function formatNumber(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

/**
 * Parst einen deutschen Zahlenstring zu einer Zahl
 */
export function parseGermanNumber(value: string): number {
  // Entferne Tausendertrennzeichen (Punkte) und ersetze Komma durch Punkt
  const cleaned = value.replace(/\./g, '').replace(',', '.');
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Interface für Finanzierungsdaten in der Anfrage
 */
export interface FinancingRequestData {
  financingRequested: boolean;
  netPurchasePrice?: number;
  downPaymentPercent?: number;
  downPaymentEur?: number;
  termMonths?: number;
  balloonPercent?: number;
  balloonEur?: number;
  estimatedMonthlyRate?: number;
  priceOnRequest?: boolean;
}
