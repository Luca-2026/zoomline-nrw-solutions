import { Helmet } from "react-helmet-async";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Phone, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const notFoundSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Seite nicht gefunden - 404",
    "description": "Die angeforderte Seite wurde nicht gefunden. Besuchen Sie unsere Startseite für Minibagger und Arbeitsbühnen in NRW.",
    "url": `https://www.zoomlion-nrw.de${location.pathname}`,
    "isPartOf": {
      "@id": "https://www.zoomlion-nrw.de/#website"
    }
  };

  return (
    <Layout showCTABar={false}>
      <Helmet>
        <title>Seite nicht gefunden (404) | Zoomlion NRW</title>
        <meta name="title" content="Seite nicht gefunden (404) | Zoomlion NRW" />
        <meta 
          name="description" 
          content="Die angeforderte Seite wurde leider nicht gefunden. Besuchen Sie unsere Startseite für Minibagger & Arbeitsbühnen in NRW oder kontaktieren Sie uns." 
        />
        <meta name="robots" content="noindex, follow" />
        <meta name="googlebot" content="noindex, follow" />
        
        <script type="application/ld+json">
          {JSON.stringify(notFoundSchema)}
        </script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <span className="text-9xl md:text-[12rem] font-heading font-bold text-primary/20">
                404
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Seite nicht gefunden
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Die Seite <code className="bg-muted px-2 py-1 rounded text-sm">{location.pathname}</code> existiert leider nicht. 
              Möglicherweise wurde sie verschoben oder der Link ist fehlerhaft.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Zur Startseite
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/kontakt">
                  <Phone className="mr-2 h-5 w-5" />
                  Kontakt
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="bg-muted/50 rounded-xl p-6 md:p-8">
              <h2 className="font-heading text-xl font-bold mb-4 flex items-center justify-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Das könnte Sie interessieren
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <Link 
                  to="/bagger" 
                  className="p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <h3 className="font-semibold mb-1">Minibagger kaufen</h3>
                  <p className="text-sm text-muted-foreground">
                    Zoomlion Minibagger von 1,8 bis 25 Tonnen
                  </p>
                </Link>
                <Link 
                  to="/arbeitsbuehnen" 
                  className="p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <h3 className="font-semibold mb-1">Arbeitsbühnen kaufen</h3>
                  <p className="text-sm text-muted-foreground">
                    Scheren-, Gelenk- und Teleskopbühnen
                  </p>
                </Link>
                <Link 
                  to="/hot-deals" 
                  className="p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <h3 className="font-semibold mb-1">Hot Deals</h3>
                  <p className="text-sm text-muted-foreground">
                    Aktuelle Sonderangebote entdecken
                  </p>
                </Link>
                <Link 
                  to="/standorte" 
                  className="p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <h3 className="font-semibold mb-1">Standorte</h3>
                  <p className="text-sm text-muted-foreground">
                    3 Standorte in NRW finden
                  </p>
                </Link>
              </div>
            </div>

            {/* Back Link */}
            <button 
              onClick={() => window.history.back()} 
              className="mt-8 inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur vorherigen Seite
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
