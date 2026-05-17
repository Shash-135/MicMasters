import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Courses() {
  usePageTitle("Courses");
  return (
    <>
      <header className="hero hero--subpage">
        <div className="hero-corner hero-corner--tl"></div>
        <div className="hero-corner hero-corner--br"></div>
        <div className="hero-crest"></div>
        <div className="hero-fade"></div>
        <div className="hero-content">
          <div className="hero-copy" style={{ maxWidth: '800px' }}>
            <span className="hero-kicker fade-up delay-100">Your Journey</span>
            <h1 className="hero-title fade-up delay-200">Choose Your Path.</h1>
            <hr className="hero-rule fade-up delay-250" />
            <p className="hero-subtitle fade-up delay-300">
              Whether you learn best online, thrive in a rigorous bootcamp, or need focused one-on-one mentorship, we have engineered a path to your mastery.
            </p>
          </div>
        </div>
      </header>

      <section className="section-padding bg-cream">
        <div className="container course-list" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* Path 1 */}
          <article className="course-row fade-up delay-100" id="online" style={{ background: 'var(--color-light)', borderRadius: 'var(--radius-lg)', padding: '3rem', boxShadow: 'var(--shadow-md)', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div className="course-info">
              <span className="tag" style={{ background: 'rgba(201,162,39,0.1)', color: 'var(--color-accent)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', display: 'inline-block' }}>The Flagship Experience</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>15-Day Masterclass</h2>
              <p className="lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                A high-impact online journey designed to build the daily habit of clear communication. Step by step, we deconstruct the art of debate, storytelling, and delivery.
              </p>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>The Curriculum</h3>
              <ul className="feature-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> Frameworks of speaking</li>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> Elocution & debate</li>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> Narrative storytelling</li>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> Group dominance</li>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> Interview mastery</li>
              </ul>
            </div>
            <div className="course-meta" style={{ background: 'var(--color-bg-alt)', padding: '2.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-accent)' }}>
              <div className="meta-item" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="far fa-clock" style={{ color: 'var(--color-text-muted)' }}></i> 15 days, daily modules</div>
              <div className="meta-item" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-laptop" style={{ color: 'var(--color-text-muted)' }}></i> Online (Pan-India)</div>
              <div className="meta-item" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-users" style={{ color: 'var(--color-text-muted)' }}></i> Ages 15-25</div>
              <div className="meta-item" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-certificate" style={{ color: 'var(--color-text-muted)' }}></i> Certification included</div>
              <div className="course-price" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1.5rem' }}>&#8377;1,500</div>
              <a href="https://wa.me/919921362708?text=I'm%20interested%20in%20the%2015-day%20online%20course" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', padding: '14px' }} target="_blank" rel="noopener noreferrer">
                Enroll Now <i className="fab fa-whatsapp" style={{ marginLeft: '8px' }}></i>
              </a>
            </div>
          </article>

          {/* Path 2 */}
          <article className="course-row fade-up delay-200" id="intensive" style={{ background: 'var(--color-light)', borderRadius: 'var(--radius-lg)', padding: '3rem', boxShadow: 'var(--shadow-md)', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div className="course-info">
              <span className="tag" style={{ background: 'rgba(139,32,40,0.1)', color: 'var(--color-secondary)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', display: 'inline-block' }}>The Immersion</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>5-Day Intensive Bootcamp</h2>
              <p className="lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                For those who want rapid transformation. We shatter stage fright through relentless stage time, peer pressure, and immediate correction in a live environment.
              </p>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>The Structure</h3>
              <ul className="feature-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> High-pressure sessions</li>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> Live practical trials</li>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> Peer-to-peer combat</li>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> Instant course correction</li>
              </ul>
            </div>
            <div className="course-meta" style={{ background: 'var(--color-bg-alt)', padding: '2.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-secondary)' }}>
              <div className="meta-item" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="far fa-clock" style={{ color: 'var(--color-text-muted)' }}></i> 5-day intense format</div>
              <div className="meta-item" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-map-marker-alt" style={{ color: 'var(--color-text-muted)' }}></i> Hosted at your venue</div>
              <div className="meta-item" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-certificate" style={{ color: 'var(--color-text-muted)' }}></i> Certification included</div>
              <div className="course-price" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Custom Quote</div>
              <Link to="/contact" className="btn btn-outline" style={{ width: '100%', textAlign: 'center', padding: '14px' }}>
                Book Your Spot
              </Link>
            </div>
          </article>

          {/* Path 3 */}
          <article className="course-row fade-up delay-300" id="personal-training" style={{ background: 'var(--color-light)', borderRadius: 'var(--radius-lg)', padding: '3rem', boxShadow: 'var(--shadow-md)', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div className="course-info">
              <span className="tag" style={{ background: 'rgba(36,57,95,0.1)', color: 'var(--color-primary-light)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', display: 'inline-block' }}>The Sniper Approach</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Personal Mentorship</h2>
              <p className="lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                One-to-one coaching laser-focused on your specific battlefield. Whether it's an upcoming board meeting, a keynote, or a high-stakes interview, we build a strategy just for you.
              </p>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>The Focus</h3>
              <ul className="feature-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> Deep skill assessment</li>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> Custom battle plan</li>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> Micro-level feedback</li>
                <li><i className="fas fa-check" style={{ color: 'var(--color-accent)' }}></i> Weekend availability</li>
              </ul>
            </div>
            <div className="course-meta" style={{ background: 'var(--color-bg-alt)', padding: '2.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-primary-light)' }}>
              <div className="meta-item" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-user" style={{ color: 'var(--color-text-muted)' }}></i> 1-on-1 Coaching</div>
              <div className="meta-item" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-sliders-h" style={{ color: 'var(--color-text-muted)' }}></i> 100% Customized</div>
              <div className="meta-item" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="far fa-calendar-check" style={{ color: 'var(--color-text-muted)' }}></i> Flexible Scheduling</div>
              <div className="course-price" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Upon Request</div>
              <Link to="/contact" className="btn btn-outline" style={{ width: '100%', textAlign: 'center', padding: '14px' }}>
                Plan My Session
              </Link>
            </div>
          </article>

        </div>
      </section>

      {/* Chapter: Workshops CTA */}
      <section className="section-padding cta-section" style={{ background: 'var(--gradient-primary)', color: 'var(--color-light)', textAlign: 'center' }}>
        <div className="container fade-up" style={{ padding: '4rem 0' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--color-light)', marginBottom: '1.5rem', border: 'none' }}>Looking to train an entire team or school?</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            We run high-energy 3-4 hour institutional workshops built around real speaking outcomes.
          </p>
          <Link to="/workshops" className="btn btn-primary" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', border: 'none', fontSize: '1.1rem', padding: '14px 36px' }}>
            Explore Institutional Workshops
          </Link>
        </div>
      </section>
    </>
  );
}
