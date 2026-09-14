import { useState } from "react";
import { ArrowDown, ArrowUpRight, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { portfolioCategories, type PortfolioItem } from "@/data/portfolio";
import Reveal from "./Reveal";

const socialIcons = {
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  x: FaXTwitter,
  tiktok: FaTiktok,
};
const categoryLabels: Record<string, string> = {
  "web-dev": "Web & apps",
  "design-marketing": "Design & marketing",
  "system-design": "Systems & deployment",
  "it-consulting": "IT consulting",
};

const ProjectCard = ({
  item,
  index,
  featured = false,
}: {
  item: PortfolioItem;
  index: number;
  featured?: boolean;
}) => (
  <article className={`project-card${featured ? " project-featured" : ""}`}>
    <Link
      to={
        item.detailsUrl === "#"
          ? "/?service=Social%20media%20management#contact"
          : item.detailsUrl
      }
      className={`project-visual project-tone-${index % 4}`}
      aria-label={`Explore ${item.title}`}
    >
      <div className="project-preview-bar">
        <span />
        <span />
        <span />
        <span className="preview-label">{item.tags[0]}</span>
      </div>
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        decoding="async"
        width="1200"
        height="750"
      />
      <span className="project-open">
        <ArrowUpRight size={21} />
      </span>
    </Link>
    <div className="project-info">
      {featured && (
        <>
          <p className="eyebrow featured-eyebrow">
            <span className="status-dot" /> FEATURED PROJECT / 01
          </p>
          <p className="featured-client">{item.title}</p>
        </>
      )}
      <div className="project-tags">
        {item.tags.slice(0, 3).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h3>
        <Link
          to={
            item.detailsUrl === "#"
              ? "/?service=Social%20media%20management#contact"
              : item.detailsUrl
          }
        >
          {featured && item.feature ? item.feature.headline : item.title}
        </Link>
      </h3>
      <p>{item.description}</p>
      {featured && item.feature && (
        <dl className="featured-facts">
          {item.feature.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <div className="project-links">
        {item.detailsUrl !== "#" && (
          <Link to={item.detailsUrl} className="text-link">
            Explore project <ArrowUpRight size={15} />
          </Link>
        )}
        {item.liveUrl && (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Visit website <ArrowUpRight size={15} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
        {item.socialLinks && (
          <div className="project-socials">
            {Object.entries(item.socialLinks).map(([network, url]) => {
              const Icon = socialIcons[network as keyof typeof socialIcons];
              return (
                <a
                  key={network}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} on ${network}`}
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  </article>
);

const PortfolioSection = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section
      id="portfolio"
      className="section-pad portfolio-section"
      aria-labelledby="portfolio-heading"
    >
      <div className="site-container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-index">02 /</span> SELECTED WORK
            </p>
            <h2 id="portfolio-heading">
              Real challenges.
              <br />
              <span className="muted">Remarkable possibilities.</span>
            </h2>
          </div>
          <p className="section-intro">
            A closer look at the platforms, experiences, and brands we’ve helped
            bring into the world.
          </p>
        </Reveal>
        <Tabs defaultValue="web-dev" onValueChange={() => setExpanded(false)}>
          <TabsList className="portfolio-tabs" aria-label="Project categories">
            {portfolioCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {categoryLabels[category.id]}
                <span>{String(category.items.length).padStart(2, "0")}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {portfolioCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="portfolio-tab-content"
            >
              {category.items.length ? (
                <>
                  <div
                    className={`project-grid${category.id === "web-dev" ? " project-grid-featured" : ""}${expanded ? " is-expanded" : ""}`}
                  >
                    {category.items
                      .slice(0, expanded ? undefined : 4)
                      .map((item, index) => (
                        <ProjectCard
                          key={item.id}
                          item={item}
                          index={index}
                          featured={category.id === "web-dev" && index === 0}
                        />
                      ))}
                  </div>
                  {category.items.length > 4 && (
                    <div className="portfolio-more">
                      <span aria-live="polite">
                        Showing {expanded ? category.items.length : 4} of{" "}
                        {category.items.length} projects
                      </span>
                      <button
                        type="button"
                        className="button button-outline"
                        aria-expanded={expanded}
                        onClick={() => setExpanded(!expanded)}
                      >
                        {expanded ? "Show fewer projects" : "View all projects"}
                        <ArrowDown
                          size={16}
                          className={expanded ? "rotate-180" : ""}
                        />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="portfolio-empty">
                  <Layers3 size={32} strokeWidth={1.2} />
                  <h3>Your next project could be here.</h3>
                  <p>
                    We’re preparing case studies in this area. In the meantime,
                    let’s talk about what we can build for your business.
                  </p>
                  <Link
                    to={`/?service=${encodeURIComponent(category.label)}#contact`}
                    className="button button-outline"
                  >
                    Discuss your project <ArrowUpRight size={17} />
                  </Link>
                </div>
              )}
              {category.id === "design-marketing" && (
                <div className="design-work">
                  <div>
                    <p className="eyebrow">BRANDS IN MOTION</p>
                    <h3>Ideas that move.</h3>
                    <p>
                      A look at our animation and creative work for TRUKFLOW.
                    </p>
                  </div>
                  <figure>
                    <video
                      controls
                      playsInline
                      preload="none"
                      poster="/previews/trukflow.jpg"
                      aria-label="TRUKFLOW animation video"
                    >
                      <source
                        src="/TRUK_Animation_video_1.mp4"
                        type="video/mp4"
                      />
                      <a href="/TRUK_Animation_video_1.mp4">
                        Download the TRUKFLOW animation video
                      </a>
                    </video>
                    <figcaption>TRUKFLOW Animation Video</figcaption>
                  </figure>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PortfolioSection;
