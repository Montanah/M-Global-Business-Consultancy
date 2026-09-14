import { ArrowUpRight, Facebook, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => (
  <footer id="footer" className="site-footer">
    <div className="site-container">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo />
          <p>
            Independent minds.
            <br />
            Extraordinary possibilities.
          </p>
          <div className="footer-socials">
            <a
              href="https://x.com/mglobalbconsult?s=11&t=p6v18hsMnUboiUq__V9F5A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="M'Global on X"
            >
              <FaXTwitter size={17} />
            </a>
            <a
              href="https://www.facebook.com/share/1ABgx22hrx/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="M'Global on Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/mglobalbconsult?igsh=MWt1ODdkN3Qxdmdwdw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="M'Global on Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h2>EXPERTISE</h2>
          {[
            "Web design & development",
            "App development",
            "Graphic design",
            "Digital marketing",
            "Social media management",
            "System design & deployment",
            "IT consulting & tech support",
            "Business planning & registration",
          ].map((service) => (
            <Link
              key={service}
              to={`/?service=${encodeURIComponent(service)}#contact`}
            >
              {service}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <h2>EXPLORE</h2>
          <Link to="/about">About us</Link>
          <Link to="/team">Our team</Link>
          <Link to="/#portfolio">Our work</Link>
          <Link to="/#approach">Our approach</Link>
          <Link to="/#contact">Get in touch</Link>
          <a href="mailto:hello@mglobalbusinessconsultancy.com?subject=Careers%20at%20M%27Global">
            Careers <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="footer-column footer-contact">
          <h2>LET’S MAKE IT HAPPEN</h2>
          <a href="mailto:hello@mglobalbusinessconsultancy.com">
            hello@mglobalbusinessconsultancy.com
          </a>
          <a href="tel:+254799863070">+254 799 863 070</a>
          <p>
            Based in Kenya.
            <br />
            Building beyond borders.
          </p>
          <Link to="/#contact" className="text-link">
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} M’Global Business Consultancy. All
          rights reserved.
        </p>
        <span>STRATEGY. DESIGN. TECHNOLOGY.</span>
        <Link to="/#main-content" className="text-link">
          Back to top ↑
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
