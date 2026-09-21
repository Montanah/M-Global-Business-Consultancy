import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getMetaTags, getPageSeo, getStructuredData, serializeJsonLd } from "@/lib/seo";

// The build puts the same metadata in the initial HTML. Keep it synchronized
// when React Router changes the page without a document request.
const Seo = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = getPageSeo(pathname);
    document.title = page.title;
    document.head.querySelectorAll("[data-seo]").forEach(element => element.remove());
    for (const attributes of getMetaTags(pathname)) {
      const meta = document.createElement("meta");
      meta.dataset.seo = "";
      for (const [name, value] of Object.entries(attributes)) meta.setAttribute(name, value);
      document.head.append(meta);
    }
    if (page.canonical) {
      const canonical = document.createElement("link");
      canonical.dataset.seo = "";
      canonical.rel = "canonical";
      canonical.href = page.canonical;
      document.head.append(canonical);
    }
    const structuredData = getStructuredData(pathname);
    if (structuredData) {
      const script = document.createElement("script");
      script.dataset.seo = "";
      script.type = "application/ld+json";
      script.textContent = serializeJsonLd(structuredData);
      document.head.append(script);
    }
  }, [pathname]);
  return null;
};

export default Seo;
