import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";

const links = [
  { label: "Services", to: "/#services" },
  { label: "Our work", to: "/#portfolio" },
  { label: "About us", to: "/about" },
  { label: "Our team", to: "/team" },
];

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState("");
  const progressRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0;
      if (progressRef.current)
        progressRef.current.style.transform = `scaleX(${progress})`;
      if (location.pathname !== "/") {
        setVisibleSection("");
        return;
      }
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main > section[id]"),
      );
      const current = sections
        .filter((section) => section.getBoundingClientRect().top <= 180)
        .at(-1);
      setVisibleSection(current?.id ?? "");
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // Lazy routes and expanded project lists change the document's length.
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(document.body);
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [location.pathname]);
  const currentLocation = (to: string): "page" | "location" | undefined => {
    if (to.includes("#"))
      return location.pathname === "/" && to === `/#${visibleSection}`
        ? "location"
        : undefined;
    return to === location.pathname ? "page" : undefined;
  };

  return (
    <header className="site-header">
      <div ref={progressRef} className="reading-progress" aria-hidden="true" />
      <div className="site-container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(({ label, to }) => (
            <Link key={to} to={to} aria-current={currentLocation(to)}>
              {label}
            </Link>
          ))}
        </nav>
        <Link to="/#contact" className="button button-light header-cta">
          Let’s talk <ArrowUpRight size={16} />
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="icon-button mobile-menu-trigger"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </SheetTrigger>
          <SheetContent className="mobile-menu">
            <SheetTitle className="brand-wordmark">M’Global</SheetTitle>
            <SheetDescription>Ideas. Technology. Possibility.</SheetDescription>
            <nav aria-label="Mobile navigation">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home <ArrowUpRight />
              </Link>
              {links.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  aria-current={currentLocation(to)}
                >
                  {label}
                  <ArrowUpRight />
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className="button button-brand"
              >
                Start a project <ArrowUpRight />
              </Link>
            </nav>
            <p className="mobile-menu-note">
              Based in Kenya. Built for the world.
            </p>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default SiteHeader;
