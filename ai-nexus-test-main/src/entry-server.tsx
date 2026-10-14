/**
 * src/entry-server.tsx
 *
 * Vite SSR entry point. Exports a render(url) function used by
 * scripts/prerender.mjs to statically render each route.
 *
 * In React Router v7, StaticRouter is exported from the main
 * 'react-router-dom' package (not 'react-router-dom/server').
 *
 * SSR safety rules:
 *   - No top-level window/document/localStorage access anywhere in
 *     this module or anything it imports at module-evaluation time.
 *   - Contact.tsx window.location.origin is guarded with typeof check.
 *   - framer-motion initial states render safely on server (no window dep).
 */
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

export function render(url: string): string {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );
}
