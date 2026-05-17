import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle();
  const videoRef = useRef<HTMLVideoElement>(null);
  const clipEndSeconds = 10;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play the first 10 seconds whenever the section is visible.
            const video = videoRef.current;

            if (!video) {
              return;
            }

            video.currentTime = 0;
            video.play().catch((e) => console.log("Autoplay prevented:", e));
          } else {
            // Pause video when scrolled out of view
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || video.currentTime < clipEndSeconds) {
      return;
    }

    video.currentTime = 0;
    video.play().catch((e) => console.log("Autoplay prevented:", e));
  };

  return (
    <>
      {/* Chapter 1: The Hook */}
      <header className="hero">
        <div className="hero-fade"></div>
        <div className="hero-content">
          <div className="hero-copy">
            <span className="hero-kicker fade-up delay-100">Mic Masters Academy</span>
            <h1 className="hero-title fade-up delay-200">Don't Just Speak.<br/>Be Heard.</h1>
            <hr className="hero-rule fade-up delay-250" />
            <p className="hero-subtitle fade-up delay-300">
              In a noisy world, the loudest voice doesn't win—the clearest one does. Learn to command any room, inspire any audience, and tell your story with conviction.
            </p>
            <div className="hero-buttons fade-up delay-400">
              <a href="#the-story" className="btn btn-primary">
                Read Our Story <i className="fas fa-arrow-down" aria-hidden="true" style={{ marginLeft: '8px' }}></i>
              </a>
            </div>
          </div>
          <div className="hero-portrait fade-left delay-200" aria-hidden="true">
            <img src="/assets/images/WhatsApp%20Image%202026-05-16%20at%2020.41.11.jpeg" alt="Mahesh Ushir" width={600} height={800} />
          </div>
        </div>
      </header>

      {/* Trust Banner (As Seen At) */}
      <div style={{ background: 'var(--color-surface-dark)', padding: '2.5rem 0' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>Trusted by students & leaders from</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(2rem, 5vw, 5rem)', flexWrap: 'wrap', opacity: 0.5, filter: 'grayscale(100%)' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-light)', fontFamily: 'var(--font-heading)' }}>Global Shapers</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-light)', letterSpacing: '1px' }}>GOYN</span>
            <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-light)', fontFamily: 'var(--font-heading)' }}>Pune University</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-light)', textTransform: 'uppercase' }}>Top T&P Cells</span>
          </div>
        </div>
      </div>

      {/* Cinematic Full Width Video Section */}
      <section style={{ width: '100%', height: 'clamp(400px, 70vh, 800px)', position: 'relative', overflow: 'hidden' }}>
        <video 
          ref={videoRef}
          poster="/assets/images/mahesh_instructor.jpg"
          preload="metadata"
          muted 
          onTimeUpdate={handleVideoTimeUpdate}
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        >
          <source src="/assets/videos/speech-optimized.mp4" type="video/mp4" />
          <source src="/assets/videos/speech-optimized.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Dark gradient overlay for a premium cinematic look */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(8,12,24,0.1) 0%, rgba(8,12,24,0.6) 100%)', pointerEvents: 'none' }}></div>
        
        {/* Optional text over video */}
        <div style={{ position: 'absolute', bottom: '10%', left: '0', width: '100%', textAlign: 'center', pointerEvents: 'none' }}>
          <div className="container">
            <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', textShadow: '0 4px 20px rgba(0,0,0,0.5)', margin: 0 }}>Watch the Transformation</h2>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Conflict */}
      <section id="the-story" className="section-padding bg-cream" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center fade-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">The Cost of Staying Quiet</h2>
            <p className="lead mx-auto" style={{ fontSize: '1.15rem', marginTop: '2rem', color: 'var(--color-text-body)' }}>
              Have you ever had the right answer, but hesitated to raise your hand? Walked into an interview knowing you were qualified, but struggled to prove it? 
            </p>
            <p className="lead mx-auto" style={{ fontSize: '1.15rem', marginTop: '1rem', color: 'var(--color-text-body)' }}>
              Great ideas die when they aren't spoken. Opportunities are lost when confidence fades. The truth is, communication isn't just a soft skill—it's the bridge between where you are and where you want to be.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Guide */}
      <section className="section-padding">
        <div className="container split-grid">
          <div className="fade-right">
            <div className="founder-photo-wrapper" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <img src="/assets/images/WhatsApp%20Image%202026-05-16%20at%2020.41.04.jpeg" alt="Mahesh Ushir, founder of Mic Masters Academy" className="founder-photo" loading="lazy" width={600} height={800} />
            </div>
          </div>
          <div className="fade-left">
            <span style={{ color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1rem', display: 'block' }}>Meet Your Guide</span>
            <h2 className="section-title left-align">We Built a System for Confidence</h2>
            <p className="lead">
              Mahesh Ushir didn't start out as a master speaker. He built his confidence stage by stage, eventually securing over 200 state and national elocution wins.
            </p>
            <p>
              Mic Masters Academy was born from a simple belief: charismatic communicators aren't born; they are trained. We took years of competitive speaking experience and distilled it into a proven, step-by-step system to remove fear, structure thoughts, and deliver with power.
            </p>
            <blockquote className="quote-panel" style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--color-bg-alt)', borderLeft: '4px solid var(--color-accent)', fontStyle: 'italic' }}>
              "Every student has a voice worth hearing. My job is to give them the tools to make sure the world listens."
              <br />
              <strong style={{ display: 'block', marginTop: '0.75rem', fontStyle: 'normal', color: 'var(--color-primary)' }}>— Mahesh Ushir, Founder</strong>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Chapter 4: The Proof */}
      <section className="stats-section bg-alt" id="stats">
        <div className="container">
          <div className="text-center fade-up" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">The Transformation is Real</h2>
            <p className="lead mx-auto">We measure our success by the breakthroughs our students experience every single day.</p>
          </div>
          <div className="stats-grid">
            <div className="stat-item fade-in delay-100">
              <span className="stat-number" data-target="200" data-plus="true">0</span>
              <span className="stat-label">Awards Won</span>
            </div>
            <div className="stat-item fade-in delay-200">
              <span className="stat-number" data-target="50" data-plus="true">0</span>
              <span className="stat-label">Students Transformed</span>
            </div>
            <div className="stat-item fade-in delay-300">
              <span className="stat-number" data-target="3">0</span>
              <span className="stat-label">Successful Batches</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5: The Plan */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center fade-up">
            <h2 className="section-title">Your Path to Mastery</h2>
            <p className="lead mx-auto">
              Choose the journey that fits your schedule. Every program is designed to get you out of your comfort zone and onto the stage.
            </p>
          </div>

          <div className="offerings-grid">
            <article className="card fade-up delay-100">
              <div className="card-icon">
                <i className="fas fa-laptop-house" aria-hidden="true"></i>
              </div>
              <h3 className="card-title">15-Day Online Course</h3>
              <p className="card-body">
                A daily habit-building program covering debate, storytelling, and body language with live, constructive feedback.
              </p>
              <Link to="/courses#online" className="btn btn-outline">
                Explore Course
              </Link>
            </article>

            <article className="card fade-up delay-200">
              <div className="card-icon">
                <i className="fas fa-users" aria-hidden="true"></i>
              </div>
              <h3 className="card-title">5-Day Intensive</h3>
              <p className="card-body">
                Immersive, in-person practice designed to shatter stage fright through relentless stage time and peer review.
              </p>
              <Link to="/courses#intensive" className="btn btn-outline">
                View Schedule
              </Link>
            </article>

            <article className="card fade-up delay-300">
              <div className="card-icon">
                <i className="fas fa-user-check" aria-hidden="true"></i>
              </div>
              <h3 className="card-title">Personal Mentorship</h3>
              <p className="card-body">
                One-to-one coaching laser-focused on your specific goals—be it an upcoming interview, pitch, or keynote.
              </p>
              <Link to="/courses#personal-training" className="btn btn-outline">
                Book a Session
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Chapter 6: The Lead Magnet */}
      <section className="section-padding bg-alt">
        <div className="container split-grid" style={{ alignItems: 'center' }}>
          <div className="fade-right">
            <div style={{ background: 'var(--color-light)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1rem', display: 'block' }}>Free Resource</span>
              <h2 className="section-title left-align" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>The 3-Minute Pre-Speech Ritual</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>Not ready to enroll yet? Download our free, battle-tested guide to eliminating stage fright right before you step up to the mic.</p>
              <form style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} onSubmit={(e) => { e.preventDefault(); alert("Lead captured! Guide will be sent via email."); }}>
                <input type="email" placeholder="Enter your email address" style={{ flex: '1 1 200px', padding: '14px 20px', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', outline: 'none' }} required />
                <button type="submit" className="btn btn-primary" style={{ whiteSpace: 'nowrap', padding: '14px 24px' }}>Get the Free Guide</button>
              </form>
            </div>
          </div>
          <div className="fade-left text-center">
            <div style={{ width: 'min(280px, 100%)', height: '360px', background: 'var(--gradient-primary)', margin: '0 auto', borderRadius: '4px 12px 12px 4px', boxShadow: '-15px 15px 40px rgba(8,12,24,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', padding: '2.5rem', position: 'relative', borderRight: '1px solid rgba(255,255,255,0.1)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
               {/* Book binding effect */}
               <div style={{ position: 'absolute', left: '15px', top: 0, bottom: 0, width: '3px', background: 'rgba(255,255,255,0.15)', boxShadow: '2px 0 5px rgba(0,0,0,0.2)' }}></div>
               <div style={{ position: 'absolute', left: '22px', top: 0, bottom: 0, width: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
               
               <i className="fas fa-book-open" style={{ fontSize: '3.5rem', color: 'var(--color-accent)', marginBottom: '1.5rem' }}></i>
               <h3 style={{ fontSize: '1.4rem', color: 'white', margin: 0, fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>The 3-Minute<br/>Pre-Speech Ritual</h3>
               <span style={{ display: 'block', marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>By Mahesh Ushir</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 7: The Resolution & CTA */}
      <section className="section-padding cta-section" style={{ background: 'var(--gradient-primary)', color: 'var(--color-light)', textAlign: 'center' }}>
        <div className="container fade-up" style={{ padding: '4rem 0' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-light)', marginBottom: '1.5rem', border: 'none' }} className="section-title left-align">Are You Ready to Write Your Next Chapter?</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Don't let another opportunity pass by because you couldn't find the right words. Your voice is your greatest asset. Let's unlock it together.
          </p>
          <a href="https://wa.me/919921362708" className="btn btn-primary" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', border: 'none', fontSize: '1.1rem', padding: '14px 36px' }} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp" aria-hidden="true" style={{ marginRight: '8px' }}></i> Book Your Free Demo
          </a>
        </div>
      </section>
    </>
  );
}
