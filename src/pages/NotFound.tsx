import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <main id="main-content" className="not-found">
    <p className="eyebrow">
      <span className="status-dot" /> 404 / UNCHARTED TERRITORY
    </p>
    <h1>A little off course.</h1>
    <p>This page doesn’t exist. Let’s get you back to something great.</p>
    <Link to="/" className="button button-brand">
      Back to home <ArrowUpRight size={18} />
    </Link>
  </main>
);

export default NotFound;
