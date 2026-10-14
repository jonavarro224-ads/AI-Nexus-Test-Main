/**
 * scripts/prerender.mjs
 *
 * Post-build static prerendering script.
 *
 * How it works:
 *   1. Reads the dist/index.html shell produced by `vite build`.
 *   2. Imports the SSR bundle from dist-server/entry-server.js
 *      (produced by `vite build --ssr src/entry-server.tsx --outDir dist-server`).
 *   3. For each route, calls render(url) to get the HTML string.
 *   4. Injects the rendered HTML into the <div id="root"> placeholder.
 *   5. Updates <head> with per-route title, meta description, canonical,
 *      OG/Twitter tags, robots, and JSON-LD — reading from the SAME
 *      ROUTE_META map that PageMeta.tsx uses on the client.
 *   6. Writes the result to dist/<route>/index.html (or dist/index.html for /).
 *   7. Also writes dist/404.html from the /* catch-all route.
 *
 * Dependencies added by this script:
 *   - None beyond Node.js built-ins (fs, path, url).
 *   - The SSR bundle (dist-server/) is temporary and .gitignored.
 *
 * New package.json scripts:
 *   "build:ssr" : "vite build --ssr src/entry-server.tsx --outDir dist-server"
 *   "build"     : "vite build && npm run build:ssr && node scripts/prerender.mjs"
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const distServerDir = path.join(root, 'dist-server');

// ── Load the SSR bundle ───────────────────────────────────────────────────────
const serverEntryPath = path.join(distServerDir, 'entry-server.js');
if (!fs.existsSync(serverEntryPath)) {
  console.error(`\n❌  SSR bundle not found at ${serverEntryPath}`);
  console.error('   Run: vite build --ssr src/entry-server.tsx --outDir dist-server\n');
  process.exit(1);
}

// On Windows, dynamic import() requires a file:// URL, not a bare path
const serverEntryUrl = new URL(`file:///${serverEntryPath.replace(/\\/g, '/')}`);
const { render } = await import(serverEntryUrl.href);

// ── Load ROUTE_META from the SSR bundle's companion (same module graph) ───────
// We re-import routes.ts via the SSR bundle since it was compiled into it.
// Instead, we replicate the metadata here as a plain JS object.
// This avoids a separate import chain and keeps the script self-contained.

const SITE_URL = 'https://aidirectsupport.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const professionalServiceLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AI Direct Support',
  url: SITE_URL,
  description:
    'Web design, SEO, and automation services for small businesses in Gurnee, Illinois and the greater Chicago area.',
  founder: { '@type': 'Person', name: 'Jon Avarro' },
  areaServed: {
    '@type': 'Place',
    name: 'Gurnee, Illinois and surrounding Chicago suburbs',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Professional Business Website',
          description:
            'Fully engineered, mobile-responsive business website with managed hosting and SSL.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Optimization',
          description:
            'Keyword tracking, Google Business Profile management, and targeted blog content.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Automation',
          description:
            'Lead capture funnels, landing page A/B testing, and workflow automation.',
        },
      },
    ],
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@aidirectsupport.com',
    contactType: 'customer support',
  },
};

/** @type {Record<string, { title: string; description: string; canonical: string; robots: string; ogImage: string; jsonLd: object; outFile: string }>} */
const ROUTES = {
  '/': {
    title: 'Web Design & SEO Services – Gurnee, IL | AI Direct Support',
    description:
      'I build fast, SEO-optimized websites and automation systems for businesses in Gurnee, Illinois. Professional web design with plans from $79/mo.',
    canonical: `${SITE_URL}/`,
    robots: 'index,follow',
    ogImage: OG_IMAGE,
    jsonLd: professionalServiceLd,
    outFile: 'index.html',
  },
  '/pricing': {
    title: 'Pricing – Web Design & SEO Plans | AI Direct Support',
    description:
      'Transparent web design, SEO, and automation plans for Gurnee, IL businesses. One setup fee, then flat monthly pricing from $79/mo. No lock-in.',
    canonical: `${SITE_URL}/pricing`,
    robots: 'index,follow',
    ogImage: OG_IMAGE,
    jsonLd: professionalServiceLd,
    outFile: 'pricing/index.html',
  },
  '/schedule': {
    title: 'Book a Strategy Session | AI Direct Support',
    description:
      "Schedule a free 30-minute strategy call with Jon. I'll review your site, discuss SEO and automation opportunities, and outline a plan — no pitch, just clarity.",
    canonical: `${SITE_URL}/schedule`,
    robots: 'index,follow',
    ogImage: OG_IMAGE,
    jsonLd: professionalServiceLd,
    outFile: 'schedule/index.html',
  },
  '/legal': {
    title: 'Legal – Terms, Privacy & Cookies | AI Direct Support',
    description:
      'Terms of service, privacy policy, cookie policy, and compliance information for AI Direct Support, serving Gurnee, Illinois.',
    canonical: `${SITE_URL}/legal`,
    robots: 'index,follow',
    ogImage: OG_IMAGE,
    jsonLd: professionalServiceLd,
    outFile: 'legal/index.html',
  },
  '/thank-you': {
    title: 'Thank You | AI Direct Support',
    description:
      'Thank you for contacting AI Direct Support. Jon will review your message and respond promptly.',
    canonical: `${SITE_URL}/thank-you`,
    robots: 'noindex,nofollow',
    ogImage: OG_IMAGE,
    jsonLd: professionalServiceLd,
    outFile: 'thank-you/index.html',
  },
  '/404': {
    title: '404 – Page Not Found | AI Direct Support',
    description: 'This page could not be found.',
    canonical: `${SITE_URL}/`,
    robots: 'noindex,nofollow',
    ogImage: OG_IMAGE,
    jsonLd: professionalServiceLd,
    outFile: '404.html',
  },
};

// ── Load the index.html shell ─────────────────────────────────────────────────
const shellPath = path.join(distDir, 'index.html');
if (!fs.existsSync(shellPath)) {
  console.error(`\n❌  dist/index.html not found — run vite build first.\n`);
  process.exit(1);
}
const shell = fs.readFileSync(shellPath, 'utf-8');

// ── Helper: inject head tags ──────────────────────────────────────────────────
function buildHead(meta) {
  const ld = JSON.stringify(meta.jsonLd, null, 2);
  // Return a fragment that replaces the default head tags in the shell
  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="robots" content="${meta.robots}" />`,
    `<link rel="canonical" href="${meta.canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="AI Direct Support" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${meta.canonical}" />`,
    `<meta property="og:image" content="${meta.ogImage}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${meta.ogImage}" />`,
    `<script id="json-ld" type="application/ld+json">\n${ld}\n    </script>`,
  ].join('\n    ');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ── Render each route ─────────────────────────────────────────────────────────
let successCount = 0;
let failCount = 0;

for (const [url, meta] of Object.entries(ROUTES)) {
  try {
    // Render the React tree to an HTML string
    const appHtml = render(url);

    // Build the full page HTML:
    // 1. Replace the <div id="root"></div> placeholder with rendered content
    // 2. Replace the default <title>...</title> block with per-route tags
    let html = shell;

    // ── Inject rendered app into #root ──
    html = html.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${appHtml}</div>`,
    );

    // ── Replace head tags: from <title> to closing </script> of json-ld ──
    // We'll find and replace all the SEO tags as a block.
    // Strategy: replace from first <title> tag through the json-ld </script> tag
    // using a regex that spans multiple lines.
    const headBlockRegex = /<title>[\s\S]*?<\/script>\s*\n(\s*<!-- Fonts)/m;
    const headReplacement = buildHead(meta) + '\n\n    $1';
    if (headBlockRegex.test(html)) {
      html = html.replace(headBlockRegex, headReplacement);
    } else {
      // Fallback: just replace the <title> tag
      html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
      // And inject canonical after existing canonical
      html = html.replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="${meta.canonical}" />`,
      );
    }

    // ── Write output file ──
    const outPath = path.join(distDir, meta.outFile);
    const outDir = path.dirname(outPath);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outPath, html, 'utf-8');

    console.log(`✅  ${url.padEnd(15)} → dist/${meta.outFile}`);
    successCount++;
  } catch (err) {
    console.error(`❌  Failed to render ${url}:`, err.message);
    failCount++;
  }
}

console.log(`\n📦  Prerender complete: ${successCount} succeeded, ${failCount} failed.\n`);
if (failCount > 0) process.exit(1);
