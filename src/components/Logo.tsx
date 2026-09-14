import { Link } from "react-router-dom";

const Logo = () => (
  <Link
    to="/"
    className="brand"
    aria-label="M'Global Business Consultancy home"
  >
    <img src="/Logo.png" alt="" width="48" height="48" />
    <span className="brand-wordmark">
      M’Global<span>BUSINESS CONSULTANCY</span>
    </span>
  </Link>
);

export default Logo;
