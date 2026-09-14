import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const team = [
  {
    name: "Mititi Isaac",
    role: "Director & Founder",
    image: "/Official Photo.jpg",
    email: "mititi.isaac@mglobalbusinessconsultancy.com",
    headline:
      "Full-stack Software Engineer and UX designer with 5+ years of experience",
    description:
      "With over a decade of experience in business consultancy and digital transformation, Mititi Isaac brings a wealth of knowledge in strategic planning, operations management, and technology integration. His vision for M'Global stems from a passion for helping businesses unlock their full potential through innovative solutions.",
    education: [
      "Software Engineering",
      "Business Administration",
      "Entrepreneurship",
      "Leadership",
    ],
    expertise: [
      "Business Strategy",
      "Digital Transformation",
      "Operations Management",
      "Branding Strategist",
    ],
  },
  {
    name: "Mumbua Mutuku",
    role: "Senior Software Engineer",
    image: "/Mumbua Photo.jpeg",
    headline:
      "Backend Software and DevOps Engineer with 5+ years of experience",
    description:
      "A passionate and experienced backend developer, IT consultant, and virtual assistant. With a deep love for all things technology, I have dedicated myself to helping businesses thrive by leveraging my expertise in these three distinct yet interrelated fields.",
    education: [
      "Software Engineering",
      "Computer Science & Technology",
      "Artificial Intelligence",
      "Virtual Assistance",
    ],
    expertise: [
      "Backend Development",
      "Database Management",
      "IT Consulting",
      "Virtual Assistance",
    ],
  },
];

const Team = () => (
  <main id="main-content">
    <section className="inner-hero">
      <div className="site-container">
        <p className="eyebrow">
          <span className="status-dot" /> THE PEOPLE BEHIND M’GLOBAL
        </p>
        <h1>
          Great work starts
          <br />
          with <span className="brand-accent-text">great people.</span>
        </h1>
        <p className="inner-intro">
          Meet the dedicated professionals who drive innovation and excellence
          at M’Global Business Consultancy. Different perspectives. A shared
          commitment to your success.
        </p>
      </div>
    </section>
    <section className="section-pad section-light">
      <div className="site-container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-index">01 /</span> LEADERSHIP TEAM
            </p>
            <h2>
              Expertise with
              <br />
              <span className="muted">a human touch.</span>
            </h2>
          </div>
        </Reveal>
        <div className="team-grid">
          {team.map((member) => (
            <Reveal key={member.name}>
              <article className="team-member">
                <div className="team-photo">
                  <img
                    src={member.image}
                    alt={member.name}
                    width="600"
                    height="675"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="team-info">
                  <p className="eyebrow brand-accent-text">{member.role}</p>
                  <h2>{member.name}</h2>
                  {member.email && (
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  )}
                  <h3>{member.headline}</h3>
                  <p>{member.description}</p>
                  <div className="team-credentials">
                    <div>
                      <h4>Education</h4>
                      <ul>
                        {member.education.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Expertise</h4>
                      <ul>
                        {member.expertise.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <section className="section-pad values-section">
      <div className="site-container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-index">02 /</span> WHAT DRIVES US
            </p>
            <h2>Better, together.</h2>
          </div>
        </Reveal>
        <div className="values-grid team-values">
          {[
            {
              title: "Collaborative spirit",
              description:
                "We believe in the power of teamwork and collaborative problem-solving to deliver exceptional results.",
            },
            {
              title: "Continuous learning",
              description:
                "Our team stays ahead of industry trends through continuous learning and professional development.",
            },
            {
              title: "Client success",
              description:
                "Every team member is committed to ensuring our clients achieve their business objectives.",
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
        <h2>Your next team, right here.</h2>
        <p>Let’s find out what we can build together.</p>
      </div>
      <Link to="/#contact" className="button button-brand">
        Work with us <ArrowUpRight size={18} />
      </Link>
    </div>
  </main>
);

export default Team;
