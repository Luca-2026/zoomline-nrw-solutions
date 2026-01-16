import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  align = "center",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 lg:mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-block mb-3 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary bg-accent rounded-full animate-fade-in">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
