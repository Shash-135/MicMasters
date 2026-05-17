import { useEffect, useRef, useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Testimonials() {
  usePageTitle("Testimonials");

  const testimonialVideos = [
    {
      mp4: "/assets/videos/testimonial-1-optimized.mp4",
      webm: "/assets/videos/testimonial-1-optimized.webm",
      title: "Student transformation clip 1",
    },
    {
      mp4: "/assets/videos/testimonial-2-optimized.mp4",
      webm: "/assets/videos/testimonial-2-optimized.webm",
      title: "Student transformation clip 2",
    },
    {
      mp4: "/assets/videos/testimonial-3-optimized.mp4",
      webm: "/assets/videos/testimonial-3-optimized.webm",
      title: "Student transformation clip 3",
    },
  ];

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const unmuteTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const activeVideo = videoRefs.current[activeVideoIndex];

    videoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      if (index !== activeVideoIndex) {
        video.pause();
        video.muted = true;
      }
    });

    if (!activeVideo) {
      return;
    }

    activeVideo.currentTime = 0;
    activeVideo.muted = true;

    if (unmuteTimeoutRef.current !== null) {
      window.clearTimeout(unmuteTimeoutRef.current);
    }

    activeVideo.play().catch((error) => console.log("Autoplay prevented:", error));
    unmuteTimeoutRef.current = window.setTimeout(() => {
      activeVideo.muted = false;
    }, 300);

    return () => {
      if (unmuteTimeoutRef.current !== null) {
        window.clearTimeout(unmuteTimeoutRef.current);
        unmuteTimeoutRef.current = null;
      }
    };
  }, [activeVideoIndex]);

  useEffect(() => {
    const observers = itemRefs.current
      .map((item, index) => {
        if (!item) {
          return null;
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveVideoIndex(index);
              }
            });
          },
          { threshold: 0.6 }
        );

        observer.observe(item);
        return observer;
      })
      .filter((observer): observer is IntersectionObserver => observer !== null);

    return () => {
      observers.forEach((observer) => observer.disconnect());
      if (unmuteTimeoutRef.current !== null) {
        window.clearTimeout(unmuteTimeoutRef.current);
        unmuteTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <header className="hero hero--subpage">

        <div className="hero-crest"></div>
        <div className="hero-fade"></div>
        <div className="hero-content">
          <div className="hero-copy" style={{ maxWidth: '800px' }}>
            <span className="hero-kicker fade-up delay-100">The Proof</span>
            <h1 className="hero-title fade-up delay-200">Voices Activated.</h1>
            <hr className="hero-rule fade-up delay-250" />
            <p className="hero-subtitle fade-up delay-300">
              The true measure of our system isn't what we say. It's the confidence our students exude when they step up to the mic.
            </p>
          </div>
        </div>
      </header>

      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center fade-up" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">Watch Their Transformations</h2>
            <p className="lead mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--color-text-body)' }}>Hear directly from our students about how Mic Masters helped them overcome their fears and dominate the stage.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {testimonialVideos.map((video, index) => {
              const cardStyles =
                index === 2
                  ? { background: 'var(--color-primary)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', display: 'flex', flexWrap: 'wrap' as const }
                  : { background: 'var(--color-light)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', overflow: 'hidden', display: 'flex', flexWrap: 'wrap' as const };
              const isActive = index === activeVideoIndex;

              return (
                <article key={video.mp4} ref={(element) => { itemRefs.current[index] = element; }} className={`fade-up delay-${(index + 1) * 100}`} style={cardStyles}>
                  <div style={{ flex: '1 1 400px', background: '#000', position: 'relative', minHeight: '350px' }}>
                    <video
                      ref={(element) => {
                        videoRefs.current[index] = element;
                      }}
                      title={video.title}
                      poster="/assets/images/WhatsApp%20Image%202026-05-16%20at%2020.41.04.jpeg"
                      preload={isActive ? "auto" : "metadata"}
                      loop
                      muted
                      playsInline
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                      <source src={video.mp4} type="video/mp4" />
                      <source src={video.webm} type="video/webm" />
                    </video>
                  </div>
                  <div style={{ flex: '1 1 400px', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                    <i className="fas fa-quote-left" aria-hidden="true" style={{ position: 'absolute', top: '2rem', right: '3rem', fontSize: '5rem', color: index === 2 ? 'rgba(255,255,255,0.03)' : 'rgba(201,162,39,0.05)' }}></i>
                    <div style={{ position: 'absolute', top: '1.1rem', left: '3rem', zIndex: 1 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.35rem 0.8rem', borderRadius: '999px', background: isActive ? 'rgba(201,162,39,0.16)' : 'rgba(15,30,61,0.08)', color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: isActive ? 'var(--color-accent)' : 'rgba(101, 113, 136, 0.6)' }}></span>
                        {isActive ? 'Playing' : 'Paused'}
                      </span>
                    </div>
                    <div className="stars" aria-label="5 star review" style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                      <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                    </div>
                    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: index === 2 ? 'var(--color-light)' : 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                      {index === 0 && '"Before Mic Masters, I could not speak in front of a mirror without freezing. The course completely dismantled my fear. The feedback was surgical, and it helped me prepare for and win my first college debate."'}
                      {index === 1 && '"The 5-day bootcamp in Pune was intense in the best way possible. We did not just sit and listen to theory. We were thrown on stage, forced to speak, corrected immediately, and the growth was undeniable."'}
                      {index === 2 && '"The workshop kept our entire placement batch engaged for 4 straight hours. The actionable frameworks on impromptu speaking and interview body language were exactly what our students needed before placement season."'}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: index === 2 ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--color-bg-alt)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: index === 2 ? 'var(--color-accent)' : 'var(--color-primary)', color: index === 2 ? 'var(--color-primary)' : 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        {index === 0 ? 'R' : index === 1 ? 'S' : <i className="fas fa-school" aria-hidden="true"></i>}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0', color: index === 2 ? 'var(--color-light)' : 'var(--color-primary)' }}>
                          {index === 0 ? 'Rahul M.' : index === 1 ? 'Sneha J.' : 'Training & Placement Officer'}
                        </h3>
                        <span style={{ fontSize: '0.9rem', color: index === 2 ? 'var(--color-accent)' : 'var(--color-text-muted)' }}>
                          {index === 0 ? '15-Day Masterclass' : index === 1 ? 'Intensive Bootcamp' : 'Pune Engineering College'}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
