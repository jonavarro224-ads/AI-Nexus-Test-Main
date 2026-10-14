/**
 * src/seo/routes.ts
 *
 * Single source of truth for per-route SEO metadata.
 * Used by:
 *   - PageMeta (client-side) for dynamic <head> updates on navigation
 *   - scripts/prerender.mjs (server-side) for static <head> injection at build time
 *
 * Copy guidelines (per user):
 *   - No "24/7 support" claim (plans differ: 24h/12h/4h response)
 *   - No "measurable ROI" claim
 *   - First-person founder voice ("I", "Jon") — not "our team / our experts"
 *   - Pricing: generic "plans from $79/mo" — do NOT hardcode plan prices here
 */

const SITE_URL = 'https://aidirectsupport.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const SITE_NAME = 'AI Direct Support';

export interface RouteMetaJson {
  /** JSON-serialisable LD+JSON object (or null) */
  type: string;
  [key: string]: unknown;
}

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  canonical: string;
  /** robots content — default "index,follow" */
  robots: string;
  ogImage: string;
  jsonLd: RouteMetaJson;
}

const professionalServiceBase: RouteMetaJson = {
  type: 'ProfessionalService',
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'Web design, SEO, and automation services for small businesses in Gurnee, Illinois and the greater Chicago area.',
  founder: {
    '@type': 'Person',
    name: 'Jon Avarro',
  },
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
          description: 'Fully engineered, mobile-responsive business website with managed hosting and SSL.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Optimization',
          description: 'Keyword tracking, Google Business Profile management, and targeted blog content.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Automation',
          description: 'Lead capture funnels, landing page A/B testing, and workflow automation.',
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

export const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    path: '/',
    title: 'Web Design & SEO Services – Gurnee, IL | AI Direct Support',
    description:
      'I build fast, SEO-optimized websites and automation systems for businesses in Gurnee, Illinois. Professional web design with plans from $79/mo.',
    canonical: `${SITE_URL}/`,
    robots: 'index,follow',
    ogImage: OG_IMAGE,
    jsonLd: professionalServiceBase,
  },
  '/pricing': {
    path: '/pricing',
    title: 'Pricing – Web Design & SEO Plans | AI Direct Support',
    description:
      'Transparent web design, SEO, and automation plans for Gurnee, IL businesses. One setup fee, then flat monthly pricing from $79/mo. No lock-in.',
    canonical: `${SITE_URL}/pricing`,
    robots: 'index,follow',
    ogImage: OG_IMAGE,
    jsonLd: {
      ...professionalServiceBase,
      '@type': 'ProfessionalService',
      type: 'ProfessionalService',
    },
  },
  '/schedule': {
    path: '/schedule',
    title: 'Book a Strategy Session | AI Direct Support',
    description:
      'Schedule a free 30-minute strategy call with Jon. I\'ll review your site, discuss SEO and automation opportunities, and outline a plan — no pitch, just clarity.',
    canonical: `${SITE_URL}/schedule`,
    robots: 'index,follow',
    ogImage: OG_IMAGE,
    jsonLd: {
      ...professionalServiceBase,
      '@type': 'ProfessionalService',
      type: 'ProfessionalService',
    },
  },
  '/legal': {
    path: '/legal',
    title: 'Legal – Terms, Privacy & Cookies | AI Direct Support',
    description:
      'Terms of service, privacy policy, cookie policy, and compliance information for AI Direct Support, serving Gurnee, Illinois.',
    canonical: `${SITE_URL}/legal`,
    robots: 'index,follow',
    ogImage: OG_IMAGE,
    jsonLd: {
      ...professionalServiceBase,
      '@type': 'ProfessionalService',
      type: 'ProfessionalService',
    },
  },
  '/thank-you': {
    path: '/thank-you',
    title: 'Thank You | AI Direct Support',
    description:
      'Thank you for contacting AI Direct Support. Jon will review your message and respond promptly.',
    canonical: `${SITE_URL}/thank-you`,
    robots: 'noindex,nofollow',
    ogImage: OG_IMAGE,
    jsonLd: {
      ...professionalServiceBase,
      '@type': 'ProfessionalService',
      type: 'ProfessionalService',
    },
  },
  '/404': {
    path: '/404',
    title: '404 – Page Not Found | AI Direct Support',
    description: 'This page could not be found.',
    canonical: `${SITE_URL}/`,
    robots: 'noindex,nofollow',
    ogImage: OG_IMAGE,
    jsonLd: professionalServiceBase,
  },
};

export const SITE_URL_CONST = SITE_URL;
export const OG_IMAGE_URL = OG_IMAGE;
export const SITE_NAME_CONST = SITE_NAME;
