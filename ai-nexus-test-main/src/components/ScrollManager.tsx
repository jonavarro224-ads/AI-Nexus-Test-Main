import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * ScrollManager
 *
 * Handles three behaviors that BrowserRouter does NOT do automatically:
 *
 * 1. Hash-URL redirect shim: old hash-router URLs like /#/pricing are
 *    rewritten to /pricing on the client. Permanent bookmarks still work.
 *
 * 2. Scroll-to-top on route change (unless a hash fragment is present).
 *
 * 3. Scroll-to-hash: after navigation, if the URL has a fragment (#section)
 *    the page scrolls to that element smoothly.
 */
export default function ScrollManager() {
  const location = useLocation();
  const navigate = useNavigate();

  // ── 1. Hash-router shim ───────────────────────────────────────────────────
  // Runs once on mount. If the URL is /#/some-path redirect to /some-path.
  useEffect(() => {
    const hash = window.location.hash;
    // Old HashRouter URLs look like: /#/pricing or /#/schedule
    // BrowserRouter puts us at pathname="/", hash="#!/pricing"
    if (hash.startsWith('#/') || hash.startsWith('#!/')) {
      const newPath = hash.replace(/^#!?/, ''); // strip leading # or #!
      navigate(newPath, { replace: true });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── 2 & 3. Scroll management on route change ─────────────────────────────
  useEffect(() => {
    const { hash } = location;

    if (hash) {
      // Scroll to the element with this id
      const id = hash.slice(1); // strip '#'
      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 5) {
          // Retry a few times for lazily rendered content
          setTimeout(() => tryScroll(attempts + 1), 100);
        }
      };
      tryScroll();
    } else {
      // No hash → scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return null;
}
