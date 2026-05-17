import { useState } from "react";
import clsx from "clsx";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Gallery() {
  usePageTitle("Gallery");
  const [filter, setFilter] = useState("all");

  const items = [
    {
      category: "sessions",
      img: "/assets/images/mahesh_instructor.jpg",
      alt: "Mic Masters coaching session",
      title: "Founder-Led Coaching",
      desc: "Practical training built from real stage experience.",
      isBrand: false,
    },
    {
      category: "founder",
      img: "/assets/images/WhatsApp%20Image%202026-05-16%20at%2020.41.04.jpeg",
      alt: "Mahesh Ushir speaking on stage",
      title: "Stage Presence",
      desc: "The energy and precision behind the coaching style.",
      isBrand: false,
    },
    {
      category: "founder",
      img: "/assets/images/WhatsApp%20Image%202026-05-16%20at%2020.41.11.jpeg",
      alt: "Mahesh Ushir during a speaking session",
      title: "Coaching in Action",
      desc: "Direct, practical guidance in real time.",
      isBrand: false,
    },
    {
      category: "founder",
      img: "/assets/images/WhatsApp%20Image%202026-05-16%20at%2020.41.41.jpeg",
      alt: "Mahesh Ushir portrait",
      title: "The Founder",
      desc: "The face behind Mic Masters Academy.",
      isBrand: false,
    },
    {
      category: "founder",
      img: "/assets/images/WhatsApp%20Image%202026-05-16%20at%2020.41.42.jpeg",
      alt: "Mahesh Ushir at Mic Masters Academy",
      title: "Behind the Mic",
      desc: "A glimpse into the presence that shapes the method.",
      isBrand: false,
    },
    {
      category: "workshops",
      img: "/assets/images/logo-clean.png",
      alt: "Mic Masters Academy logo",
      title: "Institution Workshops",
      desc: "Communication sessions for schools and colleges.",
      isBrand: true,
    },
    {
      category: "awards",
      img: "/assets/images/logo-clean.png",
      alt: "Mic Masters Academy logo mark",
      title: "Speaking Achievements",
      desc: "200+ elocution and debate awards behind the method.",
      isBrand: true,
    },
  ];

  return (
    <>
      <header className="hero hero--subpage">
        <div className="hero-corner hero-corner--tl"></div>
        <div className="hero-corner hero-corner--br"></div>
        <div className="hero-crest"></div>
        <div className="hero-fade"></div>
        <div className="hero-content">
          <div className="hero-copy" style={{ maxWidth: '800px' }}>
            <span className="hero-kicker fade-up delay-100">The Visual Story</span>
            <h1 className="hero-title fade-up delay-200">Moments of Mastery.</h1>
            <hr className="hero-rule fade-up delay-250" />
            <p className="hero-subtitle fade-up delay-300">
              A glimpse into the stages we've conquered, the workshops we've led, and the students who have found their voice.
            </p>
          </div>
        </div>
      </header>

      <section className="section-padding bg-cream">
        <div className="container">
          <div className="filter-container fade-up" aria-label="Gallery filters" style={{ marginBottom: '3rem' }}>
            {['all', 'sessions', 'founder', 'awards', 'workshops'].map((f) => (
              <button
                key={f}
                className={clsx("filter-btn", { active: filter === f })}
                type="button"
                onClick={() => setFilter(f)}
                style={filter === f ? { background: 'var(--color-primary)', color: 'var(--color-accent)', borderColor: 'var(--color-primary)' } : {}}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className="gallery-grid fade-up delay-100" style={{ gap: '2rem' }}>
            {items.map((item, idx) => (
              <article
                key={idx}
                className={clsx("gallery-item", { "brand-tile": item.isBrand })}
                hidden={filter !== "all" && item.category !== filter}
                style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}
              >
                <img src={item.img} alt={item.alt} loading="lazy" width={400} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="gallery-overlay" style={{ background: 'linear-gradient(to top, var(--color-primary) 0%, transparent 100%)', padding: '2rem' }}>
                  <h3 style={{ color: 'var(--color-accent)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-light)', fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
