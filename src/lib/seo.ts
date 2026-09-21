export const SITE_URL = "https://mglobalbusinessconsultancy.com";
export const SITE_NAME = "M’Global Business Consultancy";
const SOCIAL_IMAGE = `${SITE_URL}/og-mglobal.png`;

interface PageSeo {
  title: string;
  description: string;
  label: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage";
}

// Every public route needs an entry here: metadata, static HTML and the sitemap
// are generated from this list. Descriptions reflect existing page content.
export const seoPages: Record<string, PageSeo> = {
  "/": {
    title: "Web Design, App Development & IT Consulting in Kenya | M’Global",
    description: "M’Global helps businesses in Kenya and beyond with web design, mobile apps, graphic design, digital marketing, connected systems and IT consulting.",
    label: "Home",
  },
  "/about": {
    title: "About Our Business & Technology Consultancy | M’Global",
    description: "Learn about M’Global’s mission, values and approach to business consultancy, digital transformation and technology solutions in Kenya and East Africa.",
    label: "About us",
    type: "AboutPage",
  },
  "/team": {
    title: "Meet Our Strategy, Design & Technology Team | M’Global",
    description: "Meet the people behind M’Global’s business consultancy, software development, design and digital marketing work. Based in Kenya, building beyond borders.",
    label: "Our team",
    type: "CollectionPage",
  },
  "/projects/smartdrop": {
    title: "SmartDrop Smart Locker Platform Project | M’Global",
    description: "Explore M’Global’s work on SmartDrop: a smart locker platform supporting secure parcel collection, OTP access, SMS notifications and merchant delivery workflows.",
    label: "SmartDrop Smart Locker Platform",
  },
  "/projects/agriflock360-admin": {
    title: "AgriFlock360 Admin Dashboard Project | M’Global",
    description: "Explore the AgriFlock360 admin dashboard for farm operations, IoT devices, deployments, firmware, support, inventory, revenue and platform management.",
    label: "AgriFlock360 Admin Dashboard",
  },
  "/projects/agriflock360": {
    title: "AgriFlock360 Poultry Management & IoT Project | M’Global",
    description: "Discover M’Global’s AgriFlock360 work: poultry management software, an offline-capable mobile app, custom PCB design and connected farm monitoring hardware.",
    label: "AgriFlock360 Platform",
  },
  "/projects/truk-logistics": {
    title: "TRUKFLOW Logistics Website & Mobile App | M’Global",
    description: "Explore the TRUKFLOW logistics website and mobile app, supporting driver onboarding, goods movement and smart locker delivery workflows in East Africa.",
    label: "TRUKFLOW Logistics Platform",
  },
  "/projects/truk-admin": {
    title: "TRUKFLOW Admin Dashboard Project | M’Global",
    description: "See M’Global’s TRUKFLOW admin dashboard, a responsive web application for monitoring logistics operations, platform metrics and user activity.",
    label: "TRUKFLOW Admin Dashboard",
  },
  "/projects/church-website": {
    title: "Deliverance Church Nyansiongo Website Project | M’Global",
    description: "Explore M’Global’s website for Deliverance Church International Nyansiongo, bringing together church programs, audio recordings and YouTube content.",
    label: "Deliverance Church Website",
  },
  "/projects/healthtech": {
    title: "HealthTech Mobile App Project | M’Global",
    description: "Explore the HealthTech mobile app in M’Global’s portfolio, featuring telemedicine consultations, health tracking and connections between patients and doctors.",
    label: "HealthTech Mobile App",
  },
  "/projects/fintech": {
    title: "FinTech Analytics Dashboard Project | M’Global",
    description: "Explore M’Global’s FinTech dashboard project, with financial analytics, portfolio tracking and investment insights presented in a responsive interface.",
    label: "FinTech Dashboard",
  },
  "/projects/educational-platform": {
    title: "Educational Learning Platform Project | M’Global",
    description: "Explore M’Global’s educational platform project: a learning management system with video lessons, progress tracking and collaborative learning tools.",
    label: "Educational Platform",
  },
};

const notFound: PageSeo = {
  title: "Page Not Found | M’Global Business Consultancy",
  description: "This page could not be found. Explore M’Global’s services and projects, meet our team, or contact us about your next project.",
  label: "Page not found",
};

export const normalizePath = (pathname: string) =>
  pathname.split(/[?#]/, 1)[0].replace(/\/+$/, "").toLowerCase() || "/";

export function getPageSeo(pathname: string) {
  const path = normalizePath(pathname);
  const page = Object.prototype.hasOwnProperty.call(seoPages, path) ? seoPages[path] : undefined;
  return {
    ...(page ?? notFound),
    path,
    canonical: page ? `${SITE_URL}${path === "/" ? "/" : path}` : undefined,
    robots: page ? "index, follow, max-image-preview:large" : "noindex, follow",
    isNotFound: !page,
  };
}

export function getStructuredData(pathname: string) {
  const page = getPageSeo(pathname);
  if (page.isNotFound) return null;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/Logo.png`,
      email: "hello@mglobalbusinessconsultancy.com",
      telephone: "+254799863070",
      address: { "@type": "PostalAddress", addressCountry: "KE" },
      sameAs: [
        "https://x.com/mglobalbconsult",
        "https://www.instagram.com/mglobalbconsult/",
        "https://www.facebook.com/share/1ABgx22hrx/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      publisher: { "@id": organizationId },
      inLanguage: "en",
    },
    {
      "@type": page.type ?? "WebPage",
      "@id": `${page.canonical}#webpage`,
      name: page.title,
      description: page.description,
      url: page.canonical,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      inLanguage: "en",
      ...(page.path !== "/" && { breadcrumb: { "@id": `${page.canonical}#breadcrumb` } }),
    },
  ];
  if (page.path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${page.canonical}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: page.label, item: page.canonical },
      ],
    });
  } else {
    graph.push(...[
      "Web design & development",
      "App development",
      "Graphic design",
      "System design & deployment",
      "Digital marketing & social media",
      "IT consulting & tech support",
    ].map((name, index) => ({
      "@type": "Service",
      "@id": `${SITE_URL}/#service-${index + 1}`,
      name,
      serviceType: name,
      provider: { "@id": organizationId },
      url: `${SITE_URL}/#services`,
    })));
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export function getMetaTags(pathname: string) {
  const page = getPageSeo(pathname);
  return [
    { name: "description", content: page.description },
    { name: "robots", content: page.robots },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_KE" },
    { property: "og:title", content: page.title },
    { property: "og:description", content: page.description },
    ...(page.canonical ? [{ property: "og:url", content: page.canonical }] : []),
    { property: "og:image", content: SOCIAL_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "M’Global: We build what’s next. Strategy, design, and technology." },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: page.title },
    { name: "twitter:description", content: page.description },
    { name: "twitter:image", content: SOCIAL_IMAGE },
    { name: "twitter:image:alt", content: "M’Global: We build what’s next. Strategy, design, and technology." },
  ];
}

export const serializeJsonLd = (value: unknown) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]!);

export function renderSeoHead(pathname: string) {
  const page = getPageSeo(pathname);
  const structuredData = getStructuredData(pathname);
  return [
    `<title>${escapeHtml(page.title)}</title>`,
    ...getMetaTags(pathname).map(tag =>
      `<meta data-seo ${"name" in tag ? `name="${tag.name}"` : `property="${tag.property}"`} content="${escapeHtml(tag.content)}" />`,
    ),
    ...(page.canonical ? [`<link data-seo rel="canonical" href="${page.canonical}" />`] : []),
    ...(structuredData ? [`<script data-seo type="application/ld+json">${serializeJsonLd(structuredData)}</script>`] : []),
  ].join("\n    ");
}
