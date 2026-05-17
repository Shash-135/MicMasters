import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page Not Found");

  return (
    <div className="not-found">
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">
          <i className="fas fa-home" aria-hidden="true"></i> Back to Home
        </Link>
      </div>
    </div>
  );
}
