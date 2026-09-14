import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    let id: string;
    try {
      id = decodeURIComponent(hash.slice(1));
    } catch {
      return;
    }
    const scroll = () => {
      const target = document.getElementById(id);
      if (!target) return false;
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
      return true;
    };
    // Wait for a lazily loaded route before resolving its anchor.
    if (scroll()) return;
    const observer = new MutationObserver(() => {
      if (scroll()) observer.disconnect();
    });
    observer.observe(document.getElementById("root")!, {
      childList: true,
      subtree: true,
    });
    const timeout = window.setTimeout(() => observer.disconnect(), 10000);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [pathname, hash, key]);
  return null;
};

export default ScrollToTop;
