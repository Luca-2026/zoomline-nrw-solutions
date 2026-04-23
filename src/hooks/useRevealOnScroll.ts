import { useEffect } from "react";

/**
 * One global IntersectionObserver that toggles `is-visible` on any
 * element with the class `reveal-on-scroll`. Pair with CSS:
 *
 *   .reveal-on-scroll { opacity: 0; transform: translateY(16px);
 *     transition: opacity .5s ease, transform .5s ease; }
 *   .reveal-on-scroll.is-visible { opacity: 1; transform: none; }
 *
 * Cheap: no Framer Motion, no per-item observer, no scroll listeners.
 */
export function useRevealOnScroll(rootSelector = ".reveal-on-scroll") {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // Fallback: just show everything immediately.
      document.querySelectorAll(rootSelector).forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = Array.from(document.querySelectorAll(rootSelector));

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [rootSelector]);
}
