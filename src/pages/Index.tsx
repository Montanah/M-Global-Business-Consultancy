import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  PenTool,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactForm from "@/components/ContactForm";
import OrbitalVisual from "@/components/OrbitalVisual";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Web design & development",
    description:
      "Distinctive, responsive websites that bring your brand to life and turn visitors into customers.",
    icon: Code2,
    tags: "Websites · Web applications · E-commerce",
  },
  {
    title: "App development",
    description:
      "Thoughtful mobile experiences that keep your business in your customers’ hands, wherever they are.",
    icon: Smartphone,
    tags: "iOS · Android · Cross-platform",
  },
  {
    title: "Graphic design",
    description:
      "A visual identity with a point of view. From your first impression to every brand interaction.",
    icon: PenTool,
    tags: "Brand identity · Digital design · Print",
  },
  {
    title: "System design & deployment",
    description:
      "The architecture behind your ambition. Connected, scalable systems built for the way you work.",
    icon: Cpu,
    tags: "Architecture · Cloud deployment · IoT",
  },
  {
    title: "Digital marketing & social media",
    description:
      "Make your voice matter. Strategy, content, and campaigns that connect you with the right people.",
    icon: Globe2,
    tags: "SEO · Content strategy · Social media",
  },
  {
    title: "IT consulting & tech support",
    description:
      "Clarity in a complex digital world. Practical guidance and dependable support to keep you moving.",
    icon: Layers3,
    tags: "IT strategy · Technical support · Consulting",
  },
];

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We listen first. Together, we define your goals, understand your audience, and find the right opportunity.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Strategy becomes tangible. We shape the experience, explore the direction, and refine the details with you.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We bring the vision to life with thoughtful engineering, regular check-ins, and testing throughout.",
  },
  {
    number: "04",
    title: "Deliver & evolve",
    description:
      "Launch is a new beginning. We help you get up and running, then support what comes next.",
  },
];

const Index = () => (
  <main id="main-content">
    <section className="hero" aria-labelledby="hero-heading">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="status-dot" /> IDEAS. TECHNOLOGY. POSSIBILITY.
          </div>
          <h1 id="hero-heading">
            We build
            <br />
            what’s{" "}
            <span className="next-word">
              next
              <svg viewBox="0 0 250 18" fill="none" aria-hidden="true">
                <path
                  d="M3 14C66 2 168 0 245 7"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </span>
            <span className="brand-accent-text">.</span>
          </h1>
          <p className="hero-description">
            Strategy, distinctive websites, powerful apps, and connected
            systems. We bring your next big idea to life, from the first
            conversation to launch.
          </p>
          <div className="hero-actions">
            <Link to="/#contact" className="button button-brand">
              Build with us <ArrowUpRight size={19} />
            </Link>
            <Link to="/#portfolio" className="text-link">
              Explore our work <ArrowRight size={17} />
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="tiny-cross">+</span> BASED IN KENYA. BUILT FOR THE
            WORLD.
          </div>
        </div>
        <OrbitalVisual />
      </div>
      <div className="site-container hero-bottom">
        <span>YOUR PARTNER IN DIGITAL TRANSFORMATION</span>
        <Link to="/#services">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </Link>
      </div>
    </section>

    <section className="trust-strip" aria-label="Selected clients and projects">
      <div className="site-container trust-inner">
        <p>
          Good company.
          <br />
          <span>Great possibilities.</span>
        </p>
        <div className="client-wordmarks">
          <Link to="/projects/smartdrop" className="client-smartdrop">
            <span aria-hidden="true">▦</span> SmartDrop
            <span className="client-period">.</span>
          </Link>
          <Link to="/projects/agriflock360" className="client-agriflock">
            AgriFlock<span>360</span>
          </Link>
          <Link to="/projects/truk-logistics" className="client-truk">
            TRUK<span>FLOW</span>
            <ArrowUpRight size={20} />
          </Link>
          <Link to="/projects/church-website" className="client-dcin">
            <span aria-hidden="true">✦</span>
            <span>
              DELIVERANCE CHURCH<small>INTERNATIONAL NYANSIONGO</small>
            </span>
          </Link>
        </div>
      </div>
    </section>

    <section
      id="services"
      className="section-pad section-light services-section"
      aria-labelledby="services-heading"
    >
      <div className="site-container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-index">01 /</span> WHAT WE DO
            </p>
            <h2 id="services-heading">
              Big-picture thinking.
              <br />
              <span className="muted">Every-detail execution.</span>
            </h2>
          </div>
          <p className="section-intro">
            From the first spark to the final launch, we connect the dots
            between where you are and where you want to be.
          </p>
        </Reveal>
        <div className="services-grid">
          {services.map(({ title, description, icon: Icon, tags }, index) => (
            <Reveal key={title} delay={(index % 3) * 0.06}>
              <Link
                to={`/?service=${encodeURIComponent(title)}#contact`}
                className="service-item"
              >
                <div className="service-top">
                  <Icon size={25} strokeWidth={1.3} />
                  <span aria-hidden="true">0{index + 1}</span>
                  <ArrowUpRight
                    className="service-arrow"
                    size={20}
                    aria-hidden="true"
                  />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="service-tags">{tags}</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="studio-note">
          <div className="studio-portraits" role="group" aria-label="Our team">
            <img
              src="/Official Photo.jpg"
              alt="Mititi Isaac"
              width="64"
              height="64"
              loading="lazy"
            />
            <img
              src="/Mumbua Photo.jpeg"
              alt="Mumbua Mutuku"
              width="64"
              height="64"
              loading="lazy"
            />
          </div>
          <div>
            <h3>Good work starts with a real conversation.</h3>
            <p>
              A direct line to the designers and engineers bringing your idea to
              life.
            </p>
          </div>
          <Link to="/team" className="text-link">
            Meet your team <ArrowUpRight size={17} />
          </Link>
        </Reveal>
      </div>
    </section>

    <PortfolioSection />

    <section
      className="section-pad section-light approach-section"
      id="approach"
      aria-labelledby="approach-heading"
    >
      <div className="site-container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-index">03 /</span> HOW WE WORK
            </p>
            <h2 id="approach-heading">
              Great things happen
              <br />
              <span className="muted">when we build together.</span>
            </h2>
          </div>
          <p className="section-intro">
            No black boxes. No unnecessary complexity. Just a clear,
            collaborative process, with you at the centre.
          </p>
        </Reveal>
        <div className="process-grid">
          {steps.map((step) => (
            <Reveal key={step.number}>
              <article className="process-step">
                <div className="process-number">
                  <span>{step.number}</span>
                  <ArrowUpRight size={18} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="impact-panel">
          <div className="impact-title">
            <span className="status-dot" />
            <p>
              Different industries.
              <br />
              <strong>One commitment to excellence.</strong>
            </p>
          </div>
          <div className="impact-stats">
            {[
              { value: "20+", label: "Website clients" },
              { value: "5+", label: "Mobile app clients" },
              { value: "50+", label: "Graphic design clients" },
              { value: "20+", label: "Digital marketing clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <TestimonialSection />

    <section
      id="contact"
      className="contact-section section-pad section-light"
      aria-labelledby="contact-heading"
    >
      <div className="site-container contact-grid">
        <Reveal className="contact-copy">
          <p className="eyebrow">
            <span className="section-index">05 /</span> YOUR NEXT CHAPTER
          </p>
          <h2 id="contact-heading">
            Something
            <br />
            great starts
            <br />
            with <span className="brand-accent-text">hello.</span>
          </h2>
          <p>
            Have an idea, a challenge, or a big ambition?
            <br />
            We’d love to hear what you’re thinking.
          </p>
          <a
            className="contact-email text-link"
            href="mailto:hello@mglobalbusinessconsultancy.com"
          >
            hello@mglobalbusinessconsultancy.com <ArrowUpRight size={18} />
          </a>
          <a className="contact-phone" href="tel:+254799863070">
            +254 799 863 070
          </a>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  </main>
);

export default Index;
