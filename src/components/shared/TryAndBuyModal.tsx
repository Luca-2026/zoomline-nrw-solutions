import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import tryAndBuyImage from "@/assets/try-and-buy.png";

const STORAGE_KEY = "try-and-buy-popup-seen";
const COOKIE_CONSENT_KEY = "zoomlion_cookie_consent";

export function TryAndBuyModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    let timeoutId: number | undefined;

    const scheduleOpen = () => {
      // 1,2 s nach Cookie-Consent sanft einblenden
      timeoutId = window.setTimeout(() => setOpen(true), 1200);
    };

    // Nur anzeigen, wenn Cookie-Consent bereits getroffen wurde –
    // sonst überlagern sich Cookie-Banner und Try&Buy-Dialog und
    // ein Klick auf den Cookie-Banner schließt das Try&Buy-Modal.
    if (localStorage.getItem(COOKIE_CONSENT_KEY)) {
      scheduleOpen();
      return () => {
        if (timeoutId) window.clearTimeout(timeoutId);
      };
    }

    // Auf Consent warten: pollen + Storage-Event (für andere Tabs)
    const checkConsent = () => {
      if (localStorage.getItem(COOKIE_CONSENT_KEY)) {
        cleanup();
        scheduleOpen();
      }
    };
    const intervalId = window.setInterval(checkConsent, 500);
    const onStorage = (e: StorageEvent) => {
      if (e.key === COOKIE_CONSENT_KEY) checkConsent();
    };
    window.addEventListener("storage", onStorage);

    function cleanup() {
      window.clearInterval(intervalId);
      window.removeEventListener("storage", onStorage);
    }

    return () => {
      cleanup();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  const handleClose = (val: boolean) => {
    setOpen(val);
    if (!val) localStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/30 p-6 md:p-8">
          <div className="flex justify-center mb-4">
            <img src={tryAndBuyImage} alt="Try & Buy" className="h-40 w-40 object-contain" width={768} height={768} />
          </div>
          <DialogHeader>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary mb-3 self-start">
              <Sparkles className="h-3 w-3" />
              EXKLUSIVES ANGEBOT
            </div>
            <DialogTitle className="font-heading text-2xl md:text-3xl font-bold leading-tight">
              Try & Buy: Erst testen, dann kaufen
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              Überzeugen Sie sich im echten Einsatz von der Qualität unserer Zoomlion-Maschinen –
              und sparen Sie bei Kauf <strong className="text-primary">100 % der Testmiete</strong>.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1 group" onClick={() => handleClose(false)}>
              <Link to="/try-and-buy" className="flex items-center justify-center">
                Mehr erfahren
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="ghost" onClick={() => handleClose(false)}>
              Vielleicht später
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
