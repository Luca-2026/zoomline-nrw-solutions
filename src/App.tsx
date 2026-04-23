import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Eagerly load the index page for fast initial load
import Index from "./pages/Index";
import { ScrollToTop } from "./components/shared/ScrollToTop";

// TryAndBuyModal: only renders a popup later — no need in initial bundle.
const TryAndBuyModal = lazy(() =>
  import("./components/shared/TryAndBuyModal").then((m) => ({ default: m.TryAndBuyModal }))
);

// Lazy load all other pages for code-splitting
const Arbeitsbuehnen = lazy(() => import("./pages/Arbeitsbuehnen"));
const Bagger = lazy(() => import("./pages/Bagger"));
const Teleskoplader = lazy(() => import("./pages/Teleskoplader"));
const HotDeals = lazy(() => import("./pages/HotDeals"));
const Service = lazy(() => import("./pages/Service"));
const Servicevertraege = lazy(() => import("./pages/Servicevertraege"));
const Standorte = lazy(() => import("./pages/Standorte"));
const UeberUns = lazy(() => import("./pages/UeberUns"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Finanzierung = lazy(() => import("./pages/Finanzierung"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const Impressum = lazy(() => import("./pages/Impressum"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));
const StadtSeite = lazy(() => import("./pages/StadtSeite"));
const TryAndBuy = lazy(() => import("./pages/TryAndBuy"));
const StandortKrefeld = lazy(() => import("./pages/StandortKrefeld"));
const StandortBonn = lazy(() => import("./pages/StandortBonn"));
const StandortMuelheim = lazy(() => import("./pages/StandortMuelheim"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const AGBUebersicht = lazy(() => import("./pages/AGBUebersicht"));
const AGBVerkauf = lazy(() => import("./pages/AGBVerkauf"));
const AGBVermietung = lazy(() => import("./pages/AGBVermietung"));
const AGBArchiv = lazy(() => import("./pages/AGBArchiv"));
const Widerrufsbelehrung = lazy(() => import("./pages/Widerrufsbelehrung"));
const Investitionsbooster = lazy(() => import("./pages/Investitionsbooster"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 Minuten
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
    },
  },
});

// Loading fallback component (lightweight, no spinner-flash for fast lazy chunks)
const PageLoader = () => (
  <div className="min-h-screen bg-background" aria-hidden="true" />
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/arbeitsbuehnen" element={<Arbeitsbuehnen />} />
              <Route path="/bagger" element={<Bagger />} />
              <Route path="/bagger/:slug" element={<ProductPage category="bagger" />} />
              <Route path="/arbeitsbuehnen/:slug" element={<ProductPage category="arbeitsbuehnen" />} />
              <Route path="/teleskoplader" element={<Teleskoplader />} />
              <Route path="/top-seller" element={<HotDeals />} />
              <Route path="/hot-deals" element={<Navigate to="/top-seller" replace />} />
              <Route path="/service" element={<Service />} />
              <Route path="/servicevertraege" element={<Servicevertraege />} />
              <Route path="/standorte" element={<Standorte />} />
              <Route path="/standorte/krefeld" element={<StandortKrefeld />} />
              <Route path="/standorte/bonn" element={<StandortBonn />} />
              <Route path="/standorte/muelheim" element={<StandortMuelheim />} />
              <Route path="/ueber-uns" element={<UeberUns />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/finanzierung" element={<Finanzierung />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/agb" element={<AGBUebersicht />} />
              <Route path="/agb/verkauf" element={<AGBVerkauf />} />
              <Route path="/agb/vermietung" element={<AGBVermietung />} />
              <Route path="/agb/archiv" element={<AGBArchiv />} />
              <Route path="/widerrufsbelehrung" element={<Widerrufsbelehrung />} />
              <Route path="/investitionsbooster" element={<Investitionsbooster />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/baumaschinen/:stadt" element={<StadtSeite />} />
              <Route path="/try-and-buy" element={<TryAndBuy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Suspense fallback={null}>
            <TryAndBuyModal />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
