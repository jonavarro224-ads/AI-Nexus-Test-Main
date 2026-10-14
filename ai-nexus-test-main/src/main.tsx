/**
 * src/main.tsx
 *
 * Client entry point.
 *
 * Hydration strategy:
 *   - If the #root element already contains prerendered HTML (from dist/)
 *     use hydrateRoot to avoid a full re-render and prevent flicker.
 *   - If #root is empty (dev server, or route without prerender)
 *     fall back to createRoot as normal.
 */
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root')!;

// Detect whether the server has already rendered content into #root.
// A prerendered page will have child nodes; an empty SPA shell will not.
const isPrerendered = rootEl.hasChildNodes();

if (isPrerendered) {
  hydrateRoot(
    rootEl,
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
