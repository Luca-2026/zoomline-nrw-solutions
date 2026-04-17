#!/usr/bin/env node
/**
 * Build-Time Prerender für SPA-SEO.
 *
 * Läuft NACH `vite build` und erstellt für jede statische Route sowie für
 * jede Stadtseite (/baumaschinen/<slug>) eine eigene `dist/<route>/index.html`,
 * basierend auf der von Vite generierten dist/index.html.
 *
 * Pro Route werden ersetzt / eingefügt:
 *   - <title>
 *   - <meta name="description">
 *   - <link rel="canonical">
 *   - <meta property="og:title|description|url|image">
 *   - <meta name="twitter:title|description|image|card">
 *   - vor <div id="root"> wird ein <div id="seo-prerender"> mit H1 + SEO-Text
 *     eingefügt, sichtbar für Crawler ohne JS-Ausführung. React entfernt
 *     diesen Block nach Hydration automatisch (siehe main.tsx Cleanup).
 *
 * Ergebnis: Google, Bing, Facebook, LinkedIn, X, ChatGPT etc. sehen ohne
 * JavaScript sofort vollwertige, routen-individuelle HTML-Köpfe + Hauptinhalt.
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

import { seoRoutes, SITE_URL, DEFAULT_OG_IMAGE } from "../src/data/seoRoutes";
import { staedte } from "../src/data/staedte";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const distDir = join(projectRoot, "dist");
const distIndexPath = join(distDir, "index.html");

// ---- HTML-Helfer
const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const escapeAttr = escapeHtml;

/**
 * Ersetzt oder fügt einen <meta>/<link>/<title>-Tag im <head> ein.
 */
function upsertHeadTag(html, regex, replacement) {
  if (regex.test(html)) {
    return html.replace(regex, replacement);
  }
  return html.replace(/<\/head>/i, `    ${replacement}\n  </head>`);
}

function buildSeoBlock({ h1, intro }) {
  const paragraphs = intro.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  // Wird nach Hydration von React (main.tsx) entfernt. Inline-Styles
  // sorgen dafür, dass User es kurz sehen, falls JS langsam lädt.
  return `<div id="seo-prerender" style="position:absolute;left:-9999px;top:0;width:1px;height:1px;overflow:hidden;" aria-hidden="true"><h1>${escapeHtml(
    h1,
  )}</h1>${paragraphs}</div>`;
}

function applySeoToHtml(template, route) {
  const { path, title, description, h1, intro } = route;
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const escTitle = escapeAttr(title);
  const escDesc = escapeAttr(description);

  let html = template;

  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  // meta title (manchmal vorhanden)
  html = upsertHeadTag(
    html,
    /<meta\s+name=["']title["'][^>]*>/i,
    `<meta name="title" content="${escTitle}" />`,
  );
  // description
  html = upsertHeadTag(
    html,
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${escDesc}" />`,
  );
  // canonical
  html = upsertHeadTag(
    html,
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${escapeAttr(url)}" />`,
  );

  // OG Tags
  const ogTags = [
    ["og:type", "website"],
    ["og:url", url],
    ["og:title", title],
    ["og:description", description],
    ["og:image", DEFAULT_OG_IMAGE],
    ["og:image:width", "1200"],
    ["og:image:height", "630"],
    ["og:locale", "de_DE"],
    ["og:site_name", "Zoomlion NRW"],
  ];
  for (const [prop, val] of ogTags) {
    const re = new RegExp(`<meta\\s+property=["']${prop}["'][^>]*>`, "i");
    html = upsertHeadTag(
      html,
      re,
      `<meta property="${prop}" content="${escapeAttr(val)}" />`,
    );
  }

  // Twitter Card
  const twitterTags = [
    ["twitter:card", "summary_large_image"],
    ["twitter:url", url],
    ["twitter:title", title],
    ["twitter:description", description],
    ["twitter:image", DEFAULT_OG_IMAGE],
  ];
  for (const [name, val] of twitterTags) {
    const re = new RegExp(`<meta\\s+name=["']${name}["'][^>]*>`, "i");
    html = upsertHeadTag(
      html,
      re,
      `<meta name="${name}" content="${escapeAttr(val)}" />`,
    );
  }

  // SEO-Block vor #root einfügen (oder ersetzen, falls schon vorhanden)
  const seoBlock = buildSeoBlock({ h1, intro });
  if (/<div id="seo-prerender"[\s\S]*?<\/div>/.test(html)) {
    html = html.replace(/<div id="seo-prerender"[\s\S]*?<\/div>/, seoBlock);
  } else {
    html = html.replace(/<div id="root"><\/div>/, `${seoBlock}\n    <div id="root"></div>`);
  }

  return html;
}

function stadtToRoute(stadt) {
  return {
    path: `/baumaschinen/${stadt.slug}`,
    title: stadt.metaTitle,
    description: stadt.metaDescription,
    h1: `Baumaschinen kaufen in ${stadt.name} – Minibagger, Arbeitsbühnen & Teleskoplader`,
    intro: [
      stadt.description,
      stadt.longDescription,
      stadt.standort
        ? `Beliefert vom Standort ${stadt.standort}${
            stadt.distanceKm && stadt.distanceKm > 0
              ? ` (ca. ${stadt.distanceKm} km Entfernung)`
              : ""
          }. Auch in den umliegenden Orten ${stadt.nearbyAreas.slice(0, 5).join(", ")} liefern wir Zoomlion Baumaschinen.`
        : `Auch in den umliegenden Orten ${stadt.nearbyAreas.slice(0, 5).join(", ")} liefern wir Zoomlion Baumaschinen.`,
    ],
  };
}

async function writeRouteHtml(route, template) {
  const html = applySeoToHtml(template, route);
  let outPath;
  if (route.path === "/") {
    // Root index.html überschreiben
    outPath = distIndexPath;
  } else {
    const dir = join(distDir, route.path.replace(/^\//, ""));
    await mkdir(dir, { recursive: true });
    outPath = join(dir, "index.html");
  }
  await writeFile(outPath, html, "utf8");
  return outPath;
}

// ---- Main
async function main() {
  if (!existsSync(distIndexPath)) {
    console.error(
      `[prerender] dist/index.html nicht gefunden. Bitte zuerst 'vite build' ausführen.`,
    );
    process.exit(1);
  }

  const template = await readFile(distIndexPath, "utf8");

  const stadtRoutes = Object.values(staedte).map(stadtToRoute);
  const allRoutes = [...seoRoutes, ...stadtRoutes];

  console.log(
    `[prerender] Generiere ${allRoutes.length} statische HTML-Seiten (${seoRoutes.length} statisch + ${stadtRoutes.length} Stadtseiten)…`,
  );

  let count = 0;
  for (const route of allRoutes) {
    const out = await writeRouteHtml(route, template);
    count++;
    console.log(`  ✓ ${route.path.padEnd(35)} → ${out.replace(projectRoot + "/", "")}`);
  }

  console.log(`[prerender] Fertig: ${count} Seiten geschrieben.`);
}

main().catch((err) => {
  console.error("[prerender] Fehler:", err);
  process.exit(1);
});
