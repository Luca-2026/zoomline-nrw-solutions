import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;
createRoot(rootEl).render(<App />);

// Remove the prerender SEO block AFTER React has actually painted, not before.
// Two rAFs guarantee one paint has occurred -> no blank flash between
// crawler-visible HTML and the hydrated SPA.
if (typeof window !== "undefined") {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.getElementById("seo-prerender")?.remove();
    });
  });
}
