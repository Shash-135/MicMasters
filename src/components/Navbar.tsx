import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={clsx("navbar", {
        scrolled: isScrolled,
        "menu-open": isMenuOpen,
      })}
      id="navbar"
    >
      <div className="container navbar-nav">
        <Link to="/" className="nav-brand" aria-label="Mic Masters Academy home" onClick={closeMenu}>
          <img src="/assets/images/logo-clean.png" alt="Mic Masters Academy" className="nav-logo" width={160} height={72} />
        </Link>
        <button
          className="mobile-menu-btn"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <i className={clsx("fas", isMenuOpen ? "fa-times" : "fa-bars")} aria-hidden="true"></i>
        </button>
        <ul className={clsx("nav-links", { active: isMenuOpen })}>
          <li>
            <NavLink to="/" className={({ isActive }) => clsx("nav-link", { active: isActive })} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => clsx("nav-link", { active: isActive })} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={({ isActive }) => clsx("nav-link", { active: isActive })} onClick={closeMenu}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/workshops" className={({ isActive }) => clsx("nav-link", { active: isActive })} onClick={closeMenu}>
              Workshops
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={({ isActive }) => clsx("nav-link", { active: isActive })} onClick={closeMenu}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" className={({ isActive }) => clsx("nav-link", { active: isActive })} onClick={closeMenu}>
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => clsx("nav-link", { active: isActive })} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <Link to="/contact" className="btn btn-outline-white" onClick={closeMenu}>
              Free Demo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
