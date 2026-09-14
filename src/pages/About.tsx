import { ArrowUpRight, Award, CheckCircle, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const values = [
  {
    icon: Target,
    title: "Strategic vision",
    description:
      "We help businesses develop clear roadmaps for sustainable growth and digital transformation.",
  },
  {
    icon: Users,
    title: "Client-centric approach",
    description:
      "Every solution is tailored to meet the unique needs and objectives of our clients.",
  },
  {
    icon: Award,
    title: "Excellence in delivery",
    description:
      "We maintain the highest standards of quality in all our services and deliverables.",
  },
  {
    icon: CheckCircle,
    title: "Proven results",
    description:
      "Our track record speaks for itself with successful projects across various industries.",
  },
];

const About = () => (
  <main id="main-content">
    <section className="inner-hero">
      <div className="site-container">
        <p className="eyebrow">
          <span className="status-dot" /> ABOUT M’GLOBAL
        </p>
        <h1>
          Independent minds.
          <br />
          <span className="brand-accent-text">Shared ambition.</span>
        </h1>
        <p className="inner-intro">
          Empowering businesses with innovative digital solutions and strategic
          consulting services. We transform ideas into reality and help
          organizations thrive in the digital age.
        </p>
        <Link to="/team" className="text-link">
          Meet the people behind the work <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
    <section className="section-pad section-light">
      <div className="site-container mission-grid">
        <Reveal>
          <p className="eyebrow">
            <span className="section-index">01 /</span> OUR MISSION
          </p>
          <h2>Progress with purpose.</h2>
          <p>
            To provide comprehensive business consultancy and digital solutions
            that enable our clients to achieve sustainable growth, operational
            excellence, and competitive advantage in their respective markets.
            We are committed to delivering innovative, cost-effective solutions
            that drive measurable results.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">
            <span className="section-index">02 /</span> OUR VISION
          </p>
          <h2>Possibility for everyone.</h2>
          <p>
            To be the leading business consultancy firm in East Africa,
            recognized for our expertise in digital transformation, strategic
            planning, and innovative solutions. We envision a future where every
            business, regardless of size, has access to world-class consultancy
            services that unlock their full potential.
          </p>
        </Reveal>
      </div>
    </section>
    <section className="section-pad values-section">
      <div className="site-container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-index">03 /</span> OUR CORE VALUES
            </p>
            <h2>
              What we believe.
              <br />
              <span className="muted">How we show up.</span>
            </h2>
          </div>
          <p className="section-intro">
            The principles that guide our work and define our commitment to
            excellence.
          </p>
        </Reveal>
        <div className="values-grid">
          {values.map(({ icon: Icon, title, description }) => (
            <Reveal key={title}>
              <article className="value-card">
                <Icon size={28} strokeWidth={1.3} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <section className="section-pad section-light">
      <div className="site-container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-index">04 /</span> WHY M’GLOBAL
            </p>
            <h2>
              A partner in your
              <br />
              <span className="muted">next big step.</span>
            </h2>
          </div>
        </Reveal>
        <div className="values-grid team-values">
          {[
            {
              title: "Proven track record",
              description:
                "Successfully delivered 10+ projects across various industries with measurable results.",
            },
            {
              title: "Expert team",
              description:
                "Our team consists of experienced professionals with deep industry knowledge and expertise.",
            },
            {
              title: "Innovative solutions",
              description:
                "We combine technology and creative thinking to solve complex business challenges.",
            },
          ].map((value) => (
            <article className="value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <div className="site-container inner-cta">
      <div>
        <h2>Let’s create what’s next.</h2>
        <p>Bring your ambition. We’ll bring the expertise.</p>
      </div>
      <Link to="/#contact" className="button button-brand">
        Start a conversation <ArrowUpRight size={18} />
      </Link>
    </div>
  </main>
);

export default About;
