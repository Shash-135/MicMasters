import { handleWhatsAppSubmit } from "../utils/whatsapp";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Workshops() {
  usePageTitle("Workshops");
  return (
    <>
      <header className="hero hero--subpage">
        <div className="hero-corner hero-corner--tl"></div>
        <div className="hero-corner hero-corner--br"></div>
        <div className="hero-crest"></div>
        <div className="hero-fade"></div>
        <div className="hero-content">
          <div className="hero-copy" style={{ maxWidth: '800px' }}>
            <span className="hero-kicker fade-up delay-100">For Institutions</span>
            <h1 className="hero-title fade-up delay-200">Elevate Your Campus.</h1>
            <hr className="hero-rule fade-up delay-250" />
            <p className="hero-subtitle fade-up delay-300">
              Degrees get students the interview. Communication gets them the job. Bring high-octane, practical soft-skills training directly to your institution.
            </p>
          </div>
        </div>
      </header>

      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center fade-up" style={{ marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 className="section-title">The Corporate Edge</h2>
            <p className="lead mx-auto" style={{ fontSize: '1.15rem' }}>
              We partner with schools, colleges, and placement cells to run immersive workshops. We don't do boring lectures. We do live drills, stage exercises, and real-time feedback.
            </p>
          </div>

          <div className="partnership-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
            <article className="card fade-up delay-100" style={{ background: 'var(--color-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
              <div className="card-icon" style={{ fontSize: '2rem', color: 'var(--color-accent)', marginBottom: '1rem' }}><i className="fas fa-bolt"></i></div>
              <h3 className="card-title" style={{ fontSize: '1.25rem' }}>The Catalyst</h3>
              <p className="card-body" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>A high-energy 3-4 hour sprint focusing on dismantling stage fear and mastering first impressions.</p>
            </article>
            <article className="card fade-up delay-200" style={{ background: 'var(--color-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
              <div className="card-icon" style={{ fontSize: '2rem', color: 'var(--color-accent)', marginBottom: '1rem' }}><i className="fas fa-handshake"></i></div>
              <h3 className="card-title" style={{ fontSize: '1.25rem' }}>Placement Prep</h3>
              <p className="card-body" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Rigorous mock group discussions and interview roleplay tailored for T&P cells.</p>
            </article>
            <article className="card fade-up delay-300" style={{ background: 'var(--color-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
              <div className="card-icon" style={{ fontSize: '2rem', color: 'var(--color-accent)', marginBottom: '1rem' }}><i className="fas fa-users-cog"></i></div>
              <h3 className="card-title" style={{ fontSize: '1.25rem' }}>Club Mentorship</h3>
              <p className="card-body" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Specialized, ongoing coaching for debate teams, drama clubs, and student leadership councils.</p>
            </article>
            <article className="card fade-up delay-400" style={{ background: 'var(--color-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
              <div className="card-icon" style={{ fontSize: '2rem', color: 'var(--color-accent)', marginBottom: '1rem' }}><i className="fas fa-calendar-check"></i></div>
              <h3 className="card-title" style={{ fontSize: '1.25rem' }}>Term Integration</h3>
              <p className="card-body" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>A semester-long partnership where we integrate our communication curriculum into your timetable.</p>
            </article>
          </div>

          <div className="proposal-card fade-up delay-200" style={{ background: 'var(--color-primary)', color: 'var(--color-light)', padding: '4rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
            <div className="text-center mb-8">
              <h2 style={{ color: 'var(--color-light)', fontSize: '2.5rem', marginBottom: '1rem' }}>Initiate a Partnership</h2>
              <p style={{ color: 'var(--color-accent)', fontSize: '1.1rem' }}>Fill out the form below to receive a custom proposal via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleWhatsAppSubmit} data-whatsapp-recipient="919921362708" data-whatsapp-prefix="Institution workshop enquiry" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="proposal-name" style={{ color: 'rgba(255,255,255,0.8)' }}>Name</label>
                  <input id="proposal-name" type="text" className="form-control" name="name" required placeholder="Your name" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="proposal-institution" style={{ color: 'rgba(255,255,255,0.8)' }}>Institution</label>
                  <input id="proposal-institution" type="text" className="form-control" name="institution" required placeholder="School or college name" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="proposal-designation" style={{ color: 'rgba(255,255,255,0.8)' }}>Designation</label>
                  <input id="proposal-designation" type="text" className="form-control" name="designation" required placeholder="Principal, TPO, etc." style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="proposal-phone" style={{ color: 'rgba(255,255,255,0.8)' }}>Phone</label>
                  <input id="proposal-phone" type="tel" className="form-control" name="phone" required placeholder="+91" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label" htmlFor="proposal-email" style={{ color: 'rgba(255,255,255,0.8)' }}>Email</label>
                <input id="proposal-email" type="email" className="form-control" name="email" required placeholder="name@institution.edu" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label className="form-label" htmlFor="proposal-message" style={{ color: 'rgba(255,255,255,0.8)' }}>Mission Objectives</label>
                <textarea
                  id="proposal-message"
                  className="form-control"
                  name="message"
                  required
                  placeholder="Tell us about your student group size, preferred dates, and the specific transformation you want to see."
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)', minHeight: '120px' }}
                ></textarea>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn btn-primary" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', border: 'none', padding: '14px 40px', fontSize: '1.1rem' }}>
                  <i className="fab fa-whatsapp" aria-hidden="true" style={{ marginRight: '8px' }}></i> Request Custom Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
