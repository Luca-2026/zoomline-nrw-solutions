import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LazyImage } from "@/components/shared/LazyImage";
import { hotDeals, type HotDeal } from "@/data/hotDeals";
import { getProductPageRoute } from "@/data/productPageLinks";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

function HotDealCard({ deal }: { deal: HotDeal }) {
  return (
    <div className="group relative rounded-xl border-2 border-primary/30 bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary h-full min-w-[320px] md:min-w-[360px]">
      {/* Hot Deal Badge */}
      {deal.highlight && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 rounded-full bg-destructive px-3 py-1 text-xs font-bold text-destructive-foreground animate-pulse">
            <Flame className="h-3 w-3" />
            {deal.highlight}
          </span>
        </div>
      )}

      {/* Image */}
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        <LazyImage
          src={deal.image}
          alt={`Zoomlion ${deal.name} ${deal.type === "bagger" ? "Minibagger" : "Arbeitsbühne"} kaufen - ${deal.highlight} - Sonderangebot NRW`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          wrapperClassName="absolute inset-0"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center rounded-md bg-primary/90 px-2.5 py-1 text-xs font-medium text-primary-foreground">
            {deal.type === "bagger" ? "Minibagger" : "Arbeitsbühne"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2">
          <h3 className="font-heading text-xl font-bold text-foreground">
            {deal.name}
          </h3>
          <p className="text-sm text-muted-foreground">{deal.typeLabel}</p>
        </div>

        {/* Price */}
        <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
          <p className="text-xs text-muted-foreground">Aktionspreis</p>
          <p className="font-heading text-2xl font-bold text-primary">
            Auf Anfrage
          </p>
        </div>

        {/* Key Specs */}
        <div className="space-y-1.5 mb-4">
          {deal.specs.slice(0, 4).map((spec) => (
            <div key={spec.label} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{spec.label}:</span>
              <span className="font-medium text-foreground">{spec.value}</span>
            </div>
          ))}
        </div>

        <Button asChild className="w-full group/btn">
          <Link to={getProductPageRoute(deal.id) ?? "/top-seller"}>
            Details &amp; Datenblatt
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function HotDealsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const interactionTimeoutRef = useRef<number | null>(null);

  // Duplicate deals for seamless infinite scroll
  const duplicatedDeals = [...hotDeals, ...hotDeals, ...hotDeals];

  // Pause autoplay temporarily after user interaction, then resume
  const pauseTemporarily = (ms = 4000) => {
    setIsPaused(true);
    if (interactionTimeoutRef.current) {
      window.clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
      interactionTimeoutRef.current = null;
    }, ms);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        const singleSetWidth = scrollContainer.scrollWidth / 3;
        let next = scrollContainer.scrollLeft + scrollSpeed;
        if (next >= singleSetWidth * 2) {
          next -= singleSetWidth;
        }
        scrollContainer.scrollLeft = next;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactionTimeoutRef.current) {
        window.clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, [isPaused]);

  // Keep scrollLeft within the middle copy so infinite loop works in both directions
  const normalizeScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const singleSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft < singleSetWidth * 0.5) {
      el.scrollLeft += singleSetWidth;
    } else if (el.scrollLeft > singleSetWidth * 2) {
      el.scrollLeft -= singleSetWidth;
    }
  };

  const handleNav = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    userInteractedRef.current = true;
    normalizeScroll();
    const card = el.querySelector<HTMLElement>("[data-deal-card]");
    const cardWidth = card ? card.offsetWidth + 24 /* gap-6 */ : 340;
    el.scrollBy({ left: direction === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-destructive/5 to-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Flame className="h-8 w-8 text-destructive animate-pulse" />
          <SectionHeading
            title="Top Seller"
            subtitle="Aktionsmodelle zu besonderen Konditionen – jetzt sichern!"
            align="center"
          />
          <Flame className="h-8 w-8 text-destructive animate-pulse" />
        </div>
      </div>

      {/* Continuous Scroll Container */}
      <div 
        className="mt-10 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Prev / Next Buttons */}
        <button
          type="button"
          aria-label="Vorheriges Modell"
          onClick={() => handleNav("prev")}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-background/90 border border-border shadow-md flex items-center justify-center hover:bg-background hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          type="button"
          aria-label="Nächstes Modell"
          onClick={() => handleNav("next")}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-background/90 border border-border shadow-md flex items-center justify-center hover:bg-background hover:text-primary transition-colors"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 md:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
          onTouchStart={() => { userInteractedRef.current = true; }}
          onPointerDown={() => { userInteractedRef.current = true; }}
          onScroll={normalizeScroll}
        >
          {duplicatedDeals.map((deal, index) => (
            <div key={`${deal.id}-${index}`} data-deal-card className="flex-shrink-0 snap-start">
              <HotDealCard deal={deal} />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6">
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/top-seller">
              Alle {hotDeals.length} Top-Seller-Aktionsmodelle ansehen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
