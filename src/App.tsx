import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Arbeitsbuehnen from "./pages/Arbeitsbuehnen";
import Bagger from "./pages/Bagger";
import HotDeals from "./pages/HotDeals";
import Service from "./pages/Service";
import Standorte from "./pages/Standorte";
import UeberUns from "./pages/UeberUns";
import Kontakt from "./pages/Kontakt";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/arbeitsbuehnen" element={<Arbeitsbuehnen />} />
          <Route path="/bagger" element={<Bagger />} />
          <Route path="/hot-deals" element={<HotDeals />} />
          <Route path="/service" element={<Service />} />
          <Route path="/standorte" element={<Standorte />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
