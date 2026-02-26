import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTABar } from "../shared/CTABar";
import { CookieConsent } from "../shared/CookieConsent";
import { ChatWidget } from "../chat/ChatWidget";

interface LayoutProps {
  children: React.ReactNode;
  showCTABar?: boolean;
}

export function Layout({ children, showCTABar = true }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {showCTABar && <CTABar />}
      <Footer />
      <CookieConsent />
      <ChatWidget />
    </div>
  );
}
