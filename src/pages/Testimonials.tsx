import { useEffect, useRef, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { Sparkles } from "lucide-react";
import { db } from "../firebase";
import { usePageTitle } from "../hooks/usePageTitle";
import { normalizeVideoUrl } from "../utils/video";
import VideoEmbed from "../components/VideoEmbed";

type TestimonialCardStyle = 'light' | 'dark' | 'gold';

type TestimonialRecord = {
  id: string;
  name?: string;
  course?: string;
  quote?: string;
  badge?: string;
  videoUrl?: string;
  cardStyle?: TestimonialCardStyle;
  featured?: boolean;
  createdAt?: { toMillis?: () => number };
};

const cardThemeStyles: Record<TestimonialCardStyle, { card: string; panel: string; quote: string; border: string }> = {
  light: {
    card: 'var(--color-light)',
    panel: 'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(244,236,217,0.96))',
    quote: 'var(--color-text-body)',
    border: 'var(--color-bg-alt)',
  },
  dark: {
    card: 'var(--color-primary)',
    panel: 'linear-gradient(135deg, rgba(15,30,61,0.98), rgba(8,12,24,0.96))',
    quote: 'var(--color-light)',
    border: 'rgba(255,255,255,0.1)',
  },
  gold: {
    card: 'linear-gradient(135deg, #2c2310, #4a3710)',
    panel: 'linear-gradient(135deg, rgba(81,58,17,0.98), rgba(32,22,7,0.98))',
    quote: 'rgba(255,248,230,0.96)',
    border: 'rgba(255,220,120,0.18)',
  },
};

export default function Testimonials() {
  usePageTitle("Testimonials");

  const [testimonials, setTestimonials] = useState<TestimonialRecord[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'testimonials'),
      (snapshot) => {
        const tests = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as TestimonialRecord));
        tests.sort((a: any, b: any) => {
          const featuredA = a.featured ? 1 : 0;
          const featuredB = b.featured ? 1 : 0;
          if (featuredA !== featuredB) {
            return featuredB - featuredA;
          }
          const timeA = a.createdAt && typeof a.createdAt.toMillis === 'function' ? a.createdAt.toMillis() : 0;
          const timeB = b.createdAt && typeof b.createdAt.toMillis === 'function' ? b.createdAt.toMillis() : 0;
          return timeB - timeA;
        });
        setTestimonials(tests);
        setLoadError(null);
        setLastSyncedAt(new Date());
      },
      (error) => {
        console.error('Error loading testimonials:', error);
        setLoadError('Testimonials are unavailable. Check Firestore public read rules for testimonials collection.');
      }
    );

    return () => unsubscribe();
  }, []);

  const displayTestimonials = testimonials.filter((test) => normalizeVideoUrl(test.videoUrl || '').length > 0);

  useEffect(() => {
    const observers = itemRefs.current
      .map((item: HTMLElement | null, index: number) => {
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
      .filter((observer: IntersectionObserver | null): observer is IntersectionObserver => observer !== null);

    return () => {
      observers.forEach((observer: IntersectionObserver) => observer.disconnect());
    };
  }, [displayTestimonials]);

  const formattedSyncTime = lastSyncedAt
    ? lastSyncedAt.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      })
    : null;

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
            {formattedSyncTime && (
              <p style={{ marginTop: '1rem', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 700 }}>
                Last synced from admin: {formattedSyncTime}
              </p>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {displayTestimonials.length === 0 && (
              <p className="text-center" style={{ color: 'var(--color-text-body)' }}>No testimonials added yet.</p>
            )}
            {displayTestimonials.map((test, index) => {
              const videoUrl = normalizeVideoUrl(test.videoUrl || '');
              const isActive = index === activeVideoIndex;
              const theme = cardThemeStyles[(test.cardStyle || 'dark') as TestimonialCardStyle];
              const cardStyles =
                {
                  background: theme.card,
                  boxShadow: isActive ? '0 0 0 3px rgba(201,162,39,0.9), var(--shadow-lg)' : 'var(--shadow-lg)',
                  transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                };
              return (
                <article
                  key={test.id}
                  ref={(element) => { itemRefs.current[index] = element; }}
                  className="delay-100 testimonial-row-card"
                  style={cardStyles}
                >
                  <div className="testimonial-video-container">
                    <VideoEmbed
                      url={videoUrl}
                      playing={isActive}
                      muted={false}
                      loop={true}
                      controls={true}
                      width="100%"
                      height="100%"
                      style={{ position: 'absolute', top: 0, left: 0 }}
                    />
                  </div>
                  <div className="testimonial-content-container" style={{ background: theme.panel, color: theme.quote }}>
                    <i className="fas fa-quote-left" aria-hidden="true" style={{ position: 'absolute', top: '2rem', right: '3rem', fontSize: '5rem', color: index % 2 !== 0 ? 'rgba(255,255,255,0.03)' : 'rgba(201,162,39,0.05)' }}></i>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content', marginBottom: '1rem', padding: '0.4rem 0.8rem', borderRadius: '999px', border: `1px solid ${theme.border}`, color: index % 2 !== 0 ? 'var(--color-accent)' : 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      <Sparkles size={12} />
                      {test.badge || 'Student Story'}
                    </div>
                    
                    <div className="stars" aria-label="5 star review" style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                      <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                    </div>
                    
                    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: theme.quote, lineHeight: 1.6, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                      "{test.quote || 'Mic Masters completely transformed my confidence. The feedback was exactly what I needed!'}"
                    </p>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: `1px solid ${theme.border}`, paddingTop: '1.5rem', marginTop: 'auto' }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-accent)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        {test.name ? test.name[0].toUpperCase() : 'S'}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0', color: theme.quote }}>
                          {test.name}
                        </h3>
                        <span style={{ fontSize: '0.9rem', color: index % 2 !== 0 ? 'var(--color-accent)' : 'var(--color-text-muted)' }}>
                          {test.course}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          {loadError && (
            <p className="text-center" style={{ color: 'var(--color-secondary)', marginTop: '1.5rem' }}>{loadError}</p>
          )}
        </div>
      </section>
    </>
  );
}
