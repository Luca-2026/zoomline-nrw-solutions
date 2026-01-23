import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

// Route to label mapping
const routeLabels: Record<string, string> = {
  "/": "Start",
  "/arbeitsbuehnen": "Arbeitsbühnen",
  "/bagger": "Minibagger",
  "/hot-deals": "Hot Deals",
  "/service": "Service",
  "/standorte": "Standorte",
  "/ueber-uns": "Über uns",
  "/kontakt": "Kontakt",
  "/finanzierung": "Finanzierung",
  "/datenschutz": "Datenschutz",
  "/impressum": "Impressum",
  "/faq": "FAQ",
};

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const location = useLocation();
  
  // Generate breadcrumbs from current path if not provided
  const breadcrumbItems: BreadcrumbItem[] = items || [
    { label: "Start", href: "/" },
    { label: routeLabels[location.pathname] || "Seite" },
  ];

  // Generate JSON-LD structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href 
        ? `https://www.zoomlion-nrw.de${item.href === "/" ? "" : item.href}`
        : undefined,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav 
        aria-label="Breadcrumb" 
        className={`py-3 ${className}`}
      >
        <ol 
          className="flex items-center flex-wrap gap-1 text-sm"
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            
            return (
              <li 
                key={index}
                className="flex items-center"
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground/50 flex-shrink-0" />
                )}
                
                {item.href && !isLast ? (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                    itemProp="item"
                  >
                    {index === 0 && <Home className="h-4 w-4" />}
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span 
                    className="text-foreground font-medium"
                    itemProp="name"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
