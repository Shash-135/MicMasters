import { usePageTitle } from "../hooks/usePageTitle";

export default function About() {
  usePageTitle("About");

  const founderShots = [
    "/assets/images/WhatsApp%20Image%202026-05-16%20at%2020.41.04.jpeg",
    "/assets/images/WhatsApp%20Image%202026-05-16%20at%2020.41.11.jpeg",
    "/assets/images/WhatsApp%20Image%202026-05-16%20at%2020.41.41.jpeg",
    "/assets/images/WhatsApp%20Image%202026-05-16%20at%2020.41.42.jpeg",
  ];

  return (
    <>
      {/* Chapter 1: The Origin */}
      <header className="hero hero--subpage">

        <div className="hero-crest"></div>
        <div className="hero-fade"></div>
        <div className="hero-content">
          <div className="hero-copy" style={{ maxWidth: '800px' }}>
            <span className="hero-kicker fade-up delay-100">Our Story</span>
            <h1 className="hero-title fade-up delay-200">The Birth of a Voice.</h1>
            <hr className="hero-rule fade-up delay-250" />
            <p className="hero-subtitle fade-up delay-300">
              We didn't start with a curriculum. We started with a realization: that too many brilliant minds are hidden behind quiet voices.
            </p>
          </div>
        </div>
      </header>

      {/* Chapter 2: The Philosophy */}
      <section className="section-padding bg-cream">
        <div className="container text-center fade-up" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Charisma is a Learnable Skill</h2>
          <p className="lead mx-auto" style={{ fontSize: '1.2rem', marginTop: '2rem', color: 'var(--color-text-body)' }}>
            There is a myth that great speakers are born with a gift. That confidence is a genetic trait. At Mic Masters Academy, we know the truth: <strong>confidence is a byproduct of competence</strong>.
          </p>
          <p className="lead mx-auto" style={{ fontSize: '1.2rem', marginTop: '1rem', color: 'var(--color-text-body)' }}>
            We equip students and young professionals with the clarity, confidence, and presence to express their ideas powerfully. We turn anxious speakers into prepared communicators through rigorous practice, honest feedback, and stage-ready frameworks.
          </p>
        </div>
      </section>

      {/* Chapter 3: The Guide */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div className="text-center fade-up">
              <span style={{ color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1rem', display: 'block' }}>The Architect</span>
              <h2 className="section-title">Meet Mahesh Ushir</h2>
              <p className="lead mx-auto">Founder and Head Coach</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div className="fade-right">
                <div style={{ position: 'relative', padding: '1rem 1rem 0 0' }}>
                  <div style={{ position: 'absolute', top: 0, right: 0, bottom: '2rem', left: '2rem', background: 'var(--color-accent)', borderRadius: 'var(--radius-lg)', opacity: 0.1, zIndex: 0 }}></div>
                  <div className="founder-photo-wrapper" style={{ position: 'relative', zIndex: 1, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                    <img src="/assets/images/WhatsApp%20Image%202026-05-16%20at%2020.41.04.jpeg" alt="Mahesh Ushir" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '4/5' }} />
                  </div>
                </div>
              </div>
              
              <div className="fade-left">
                <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-body)' }}>
                  Mahesh's journey wasn't an overnight success story. It was forged on over <strong>200 stages</strong> across national and state-level elocution and debate competitions. 
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
                  A Computer Science graduate by education, he found his true calling in the art of communication. Recognizing that traditional education often ignores practical speaking skills, he built a student-first coaching style designed to dismantle fear and construct lasting confidence.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ background: 'var(--color-bg-alt)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-accent)' }}>
                    <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)' }}>200+</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Wins</p>
                  </div>
                  <div style={{ background: 'var(--color-bg-alt)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-accent)' }}>
                    <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)' }}>50+</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Mentored</p>
                  </div>
                  <div style={{ background: 'var(--color-bg-alt)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-accent)' }}>
                    <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)' }}>15+</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Lectures</p>
                  </div>
                  <div style={{ background: 'var(--color-bg-alt)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-accent)' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', height: '100%' }}>Global</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Youth Advisor</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-up delay-300" style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <div>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>Founder in Frames</span>
                  <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--color-primary)' }}>Mahesh across the journey</h3>
                </div>
                <p style={{ margin: 0, color: 'var(--color-text-muted)', maxWidth: '480px' }}>
                  A few candid moments that show the energy, stage presence, and coaching style behind Mic Masters Academy.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                {founderShots.map((src, index) => (
                  <figure key={src} style={{ margin: 0, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', background: 'var(--color-bg-alt)' }}>
                    <img
                      src={src}
                      alt={`Mahesh Ushir founder photo ${index + 1}`}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', minHeight: '220px', objectFit: 'cover', display: 'block' }}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: The Core */}
      <section className="section-padding bg-alt">
        <div className="container">
          <div className="text-center fade-up" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">The Pillars of Our Process</h2>
            <p className="lead mx-auto">We don't teach theory. We engineer transformation through action.</p>
          </div>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <article className="card fade-up delay-100" style={{ padding: '2.5rem 2rem', textAlign: 'center', background: 'var(--color-light)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <div className="card-icon" style={{ margin: '0 auto 1.5rem', width: '64px', height: '64px', background: 'rgba(201, 162, 39, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '1.5rem' }}>
                <i className="fas fa-hammer" aria-hidden="true"></i>
              </div>
              <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Forged in Practice</h3>
              <p className="card-body" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Students learn by doing. They speak, receive immediate feedback, and step back up with better tools.</p>
            </article>
            <article className="card fade-up delay-200" style={{ padding: '2.5rem 2rem', textAlign: 'center', background: 'var(--color-light)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <div className="card-icon" style={{ margin: '0 auto 1.5rem', width: '64px', height: '64px', background: 'rgba(201, 162, 39, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '1.5rem' }}>
                <i className="fas fa-bullseye" aria-hidden="true"></i>
              </div>
              <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Radical Honesty</h3>
              <p className="card-body" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Feedback is direct, actionable, and tailored specifically to dismantle each student's unique roadblocks.</p>
            </article>
            <article className="card fade-up delay-300" style={{ padding: '2.5rem 2rem', textAlign: 'center', background: 'var(--color-light)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <div className="card-icon" style={{ margin: '0 auto 1.5rem', width: '64px', height: '64px', background: 'rgba(201, 162, 39, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '1.5rem' }}>
                <i className="fas fa-shield-alt" aria-hidden="true"></i>
              </div>
              <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Bulletproof Confidence</h3>
              <p className="card-body" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Stage fear evaporates when you have a reliable, repeatable system to structure your thoughts.</p>
            </article>
            <article className="card fade-up delay-400" style={{ padding: '2.5rem 2rem', textAlign: 'center', background: 'var(--color-light)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <div className="card-icon" style={{ margin: '0 auto 1.5rem', width: '64px', height: '64px', background: 'rgba(201, 162, 39, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '1.5rem' }}>
                <i className="fas fa-route" aria-hidden="true"></i>
              </div>
              <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Lifelong Mentorship</h3>
              <p className="card-body" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>The journey doesn't end when the course does. We provide ongoing support for every stage you step onto.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
