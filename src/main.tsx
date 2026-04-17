import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Entfernt den von scripts/prerender.mjs eingefügten SEO-Block, sobald
// React die App übernommen hat. So sehen Crawler ohne JS H1+SEO-Text,
// echte Nutzer bekommen die SPA ohne Doppelinhalt.
const removePrerenderBlock = () => {
  const el = document.getElementById("seo-prerender");
  if (el) el.remove();
};

createRoot(document.getElementById("root")!).render(<App />);

// Im nächsten Tick (nach erstem Render) den SEO-Block entfernen.
if (typeof window !== "undefined") {
  requestAnimationFrame(removePrerenderBlock);
}
