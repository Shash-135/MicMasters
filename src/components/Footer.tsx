import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src="/assets/images/logo-clean.png" alt="Mic Masters Academy" className="nav-logo" loading="lazy" width={160} height={88} />
            <p>Find Your Voice. Command Every Room.</p>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/workshops">Workshops</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i> Pune, Maharashtra, India
              </li>
              <li>
                <i className="fab fa-whatsapp" aria-hidden="true"></i>{" "}
                <a href="https://wa.me/919921362708">+91 99213 62708</a>
              </li>
              <li>
                <i className="fas fa-envelope" aria-hidden="true"></i>{" "}
                <a href="mailto:maheshushir583@gmail.com">maheshushir583@gmail.com</a>
              </li>
              <li>
                <i className="fab fa-instagram" aria-hidden="true"></i>{" "}
                <a href="https://instagram.com/micmasters_with_mahesh" target="_blank" rel="noopener noreferrer">
                  @micmasters_with_mahesh
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">&copy; 2026 Mic Masters Academy of Communication. All rights reserved.</div>
      </div>
    </footer>
  );
}
