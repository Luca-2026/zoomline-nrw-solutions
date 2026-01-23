import { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { hotDeals, type HotDeal } from "@/data/hotDeals";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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
    <div className="group relative rounded-xl border-2 border-primary/30 bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary h-full">
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
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Auto-scroll interval (4 seconds)
  const AUTOPLAY_INTERVAL = 4000;

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-scroll effect
  useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [api, isPaused]);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-destructive/5 to-background">
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

        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mt-10"
          >
            <CarouselContent className="-ml-4">
              {hotDeals.map((deal) => (
                <CarouselItem key={deal.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <HotDealCard deal={deal} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6" />
          </Carousel>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Gehe zu Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

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
