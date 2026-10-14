/**
 * src/App.tsx
 *
 * Client-side application shell.
 * Uses BrowserRouter (was HashRouter — migrated for SEO).
 *
 * Client-only concerns live here (not in AppRoutes):
 *   - PageMeta  — updates <head> on route changes via useEffect
 *   - ScrollManager — scroll-to-top, scroll-to-hash, hash-URL redirect shim
 */
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import PageMeta from './components/PageMeta';
import ScrollManager from './components/ScrollManager';

export default function App() {
  return (
    <BrowserRouter>
      {/* Client-side head manager — no-op on server */}
      <PageMeta />
      {/* Scroll management + legacy hash-URL redirect */}
      <ScrollManager />
      {/* Shared route tree */}
      <AppRoutes />
    </BrowserRouter>
  );
}
