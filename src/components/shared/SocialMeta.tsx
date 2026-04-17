import { Helmet } from "react-helmet-async";

interface SocialMetaProps {
  /** Page title – used for og:title and twitter:title */
  title: string;
  /** Meta description – used for og:description and twitter:description */
  description: string;
  /** Canonical URL of the current page (absolute, https://...) */
  url: string;
  /** Open Graph type (default: "website", use "article" for blog/news) */
  type?: "website" | "article" | "product";
  /** Override the default OG image (absolute URL). Defaults to the site-wide branding image. */
  image?: string;
  /** Image dimensions for og:image (defaults to the universal 1200x630 banner) */
  imageWidth?: number;
  imageHeight?: number;
  /** Locale (default: de_DE) */
  locale?: string;
}

const DEFAULT_IMAGE = "https://www.zoomlion-nrw.de/og-image.jpg";
const DEFAULT_IMAGE_ALT = "Zoomlion NRW – Minibagger, Arbeitsbühnen & Teleskoplader kaufen in Bonn, Krefeld & Mülheim";
const SITE_NAME = "Zoomlion NRW";
const TWITTER_SITE = "@ZoomlionNRW";

/**
 * Centralized Open Graph + Twitter Card meta tags.
 * Renders into <head> via react-helmet-async. Place inside any page that already
 * has its own <Helmet> (or alongside one) – Helmet merges all tags automatically.
 */
export function SocialMeta({
  title,
  description,
  url,
  type = "website",
  image = DEFAULT_IMAGE,
  imageWidth = 1200,
  imageHeight = 630,
  locale = "de_DE",
}: SocialMetaProps) {
  return (
    <Helmet>
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={DEFAULT_IMAGE_ALT} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_SITE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={DEFAULT_IMAGE_ALT} />
    </Helmet>
  );
}
