import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Cookie, Settings, X } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const COOKIE_CONSENT_KEY = "zoomlion_cookie_consent";

const getStoredPreferences = (): CookiePreferences | null => {
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Ignore parsing errors
  }
  return null;
};

const savePreferences = (preferences: CookiePreferences) => {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
};

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: 0,
  });

  useEffect(() => {
    const stored = getStoredPreferences();
    if (!stored) {
      // Show banner after a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    };
    savePreferences(newPreferences);
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    const newPreferences: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    };
    savePreferences(newPreferences);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const newPreferences: CookiePreferences = {
      ...preferences,
      essential: true, // Always required
      timestamp: Date.now(),
    };
    savePreferences(newPreferences);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 pointer-events-none">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 pointer-events-auto" 
        onClick={() => {}} 
      />
      
      {/* Banner */}
      <div className="relative w-full max-w-4xl bg-background border border-border rounded-xl shadow-2xl pointer-events-auto animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-lg">Cookie-Einstellungen</h2>
              <p className="text-sm text-muted-foreground">Ihre Privatsphäre ist uns wichtig</p>
            </div>
          </div>
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Einstellungen anzeigen"
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
            Einige Cookies sind für den Betrieb der Website notwendig, während andere uns helfen, 
            die Website zu verbessern und Ihnen relevante Inhalte anzuzeigen.{" "}
            <Link to="/datenschutz" className="text-primary hover:underline">
              Mehr erfahren
            </Link>
          </p>

          {/* Detailed Settings */}
          {showDetails && (
            <div className="space-y-4 mb-6 p-4 bg-muted/50 rounded-lg">
              {/* Essential Cookies */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label className="font-semibold">Notwendige Cookies</Label>
                  <p className="text-xs text-muted-foreground">
                    Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>
                <Switch checked disabled className="data-[state=checked]:bg-primary" />
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label className="font-semibold">Analyse-Cookies</Label>
                  <p className="text-xs text-muted-foreground">
                    Helfen uns zu verstehen, wie Besucher unsere Website nutzen.
                  </p>
                </div>
                <Switch 
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: checked }))}
                  className="data-[state=checked]:bg-primary"
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label className="font-semibold">Marketing-Cookies</Label>
                  <p className="text-xs text-muted-foreground">
                    Werden verwendet, um Ihnen relevante Werbung anzuzeigen.
                  </p>
                </div>
                <Switch 
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: checked }))}
                  className="data-[state=checked]:bg-primary"
                />
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {showDetails ? (
              <>
                <Button 
                  variant="outline" 
                  onClick={handleRejectNonEssential}
                  className="flex-1"
                >
                  Nur notwendige
                </Button>
                <Button 
                  onClick={handleSavePreferences}
                  className="flex-1"
                >
                  Auswahl speichern
                </Button>
                <Button 
                  onClick={handleAcceptAll}
                  className="flex-1"
                >
                  Alle akzeptieren
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  onClick={handleRejectNonEssential}
                  className="flex-1"
                >
                  Nur notwendige Cookies
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setShowDetails(true)}
                  className="flex-1"
                >
                  Einstellungen anpassen
                </Button>
                <Button 
                  onClick={handleAcceptAll}
                  className="flex-1"
                >
                  Alle akzeptieren
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Hook to check cookie consent status
export const useCookieConsent = () => {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    const stored = getStoredPreferences();
    setPreferences(stored);
  }, []);

  return {
    hasConsent: preferences !== null,
    analyticsAllowed: preferences?.analytics ?? false,
    marketingAllowed: preferences?.marketing ?? false,
    preferences,
  };
};
