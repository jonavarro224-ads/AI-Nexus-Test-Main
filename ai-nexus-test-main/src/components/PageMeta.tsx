import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTE_META, RouteMeta } from '../seo/routes';

/**
 * PageMeta
 *
 * Client-side <head> manager. Reads from the same ROUTE_META map that
 * prerender.mjs uses at build time, so there is never a duplicate copy
 * of metadata.
 *
 * Runs on every route change via useLocation().
 * useEffect is fine here — this is purely cosmetic browser state.
 * The static prerendered HTML already has the correct tags; this merely
 * keeps them correct after client-side navigation.
 */
export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta: RouteMeta = ROUTE_META[pathname] ?? ROUTE_META['/'];

    // --- title ---
    document.title = meta.title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrValue] = selector.replace(/\[|\]/g, ' ').trim().split(/\s+=/)[0].split('=');
        // Create the identifying attribute
        el.setAttribute(attrName ?? 'name', (attrValue ?? '').replace(/"/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setOrCreate = (
      identAttr: string,
      identValue: string,
      contentAttr: string,
      contentValue: string,
    ) => {
      const selector = `meta[${identAttr}="${identValue}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(identAttr, identValue);
        document.head.appendChild(el);
      }
      el.setAttribute(contentAttr, contentValue);
    };

    // --- description ---
    setOrCreate('name', 'description', 'content', meta.description);

    // --- robots ---
    setOrCreate('name', 'robots', 'content', meta.robots);

    // --- canonical ---
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = meta.canonical;

    // --- Open Graph ---
    setOrCreate('property', 'og:title', 'content', meta.title);
    setOrCreate('property', 'og:description', 'content', meta.description);
    setOrCreate('property', 'og:url', 'content', meta.canonical);
    setOrCreate('property', 'og:image', 'content', meta.ogImage);
    setOrCreate('property', 'og:type', 'content', 'website');
    setOrCreate('property', 'og:site_name', 'content', 'AI Direct Support');

    // --- Twitter ---
    setOrCreate('name', 'twitter:card', 'content', 'summary_large_image');
    setOrCreate('name', 'twitter:title', 'content', meta.title);
    setOrCreate('name', 'twitter:description', 'content', meta.description);
    setOrCreate('name', 'twitter:image', 'content', meta.ogImage);

    // --- JSON-LD ---
    let ldScript = document.getElementById('json-ld') as HTMLScriptElement | null;
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = 'json-ld';
      ldScript.type = 'application/ld+json';
      document.head.appendChild(ldScript);
    }
    // Remove the internal `type` key we use for TypeScript discrimination
    const { type: _type, ...ldData } = meta.jsonLd as Record<string, unknown>;
    ldScript.textContent = JSON.stringify(ldData, null, 2);
  }, [pathname]);

  return null;
}
