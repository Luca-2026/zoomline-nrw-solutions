import { Suspense, lazy } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTABar } from "../shared/CTABar";

// Defer non-critical UI: not needed for initial paint, not in SEO crawl path.
const CookieConsent = lazy(() =>
  import("../shared/CookieConsent").then((m) => ({ default: m.CookieConsent }))
);
const ChatWidget = lazy(() =>
  import("../chat/ChatWidget").then((m) => ({ default: m.ChatWidget }))
);

interface LayoutProps {
  children: React.ReactNode;
  showCTABar?: boolean;
}

export function Layout({ children, showCTABar = true }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">{children}</main>
      {showCTABar && <CTABar />}
      <Footer />
      <Suspense fallback={null}>
        <CookieConsent />
        <ChatWidget />
      </Suspense>
    </div>
  );
}
