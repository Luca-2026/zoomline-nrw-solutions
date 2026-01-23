import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { hotDeals, type HotDeal } from "@/data/hotDeals";

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
        <img
          src={deal.image}
          alt={`Zoomlion ${deal.name} ${deal.type === "bagger" ? "Minibagger" : "Arbeitsbühne"} kaufen - ${deal.highlight} - Sonderangebot NRW`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
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
          <p className="text-xs text-muted-foreground">Aktionspreis ab</p>
          <p className="font-heading text-2xl font-bold text-primary">
            {formatPrice(deal.dealPrice)}
          </p>
          <p className="text-xs text-muted-foreground">(zzgl. USt.)</p>
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
          <Link to="/hot-deals">
            Jetzt sichern
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
  
  // Duplicate deals for seamless infinite scroll
  const duplicatedDeals = [...hotDeals, ...hotDeals, ...hotDeals];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset scroll position when we've scrolled through one set of deals
        const singleSetWidth = scrollContainer.scrollWidth / 3;
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-destructive/5 to-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Flame className="h-8 w-8 text-destructive animate-pulse" />
          <SectionHeading
            title="Hot Deals"
            subtitle="Limitierte Sonderangebote – Jetzt zugreifen!"
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
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden px-4 md:px-8"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedDeals.map((deal, index) => (
            <div key={`${deal.id}-${index}`} className="flex-shrink-0">
              <HotDealCard deal={deal} />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6">
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/hot-deals">
              Alle {hotDeals.length} Hot Deals ansehen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
