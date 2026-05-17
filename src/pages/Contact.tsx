import { handleWhatsAppSubmit } from "../utils/whatsapp";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Contact() {
  usePageTitle("Contact");
  return (
    <>
      <header className="hero hero--subpage">
        <div className="hero-crest"></div>
        <div className="hero-fade"></div>
        <div className="hero-content">
          <div className="hero-copy" style={{ maxWidth: '800px' }}>
            <span className="hero-kicker fade-up delay-100">Take Action</span>
            <h1 className="hero-title fade-up delay-200">Start Your Story.</h1>
            <hr className="hero-rule fade-up delay-250" />
            <p className="hero-subtitle fade-up delay-300">
              Whether you want to join a batch, book a personal session, or request an institutional workshop—your transformation begins with a simple message.
            </p>
          </div>
        </div>
      </header>

      <section className="section-padding bg-cream">
        <div className="container contact-container" style={{ gap: '4rem' }}>
          <aside className="contact-info-card fade-right" style={{ background: 'var(--color-primary)', color: 'var(--color-light)', padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ color: 'var(--color-accent)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Direct Line</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>We review all applications and inquiries personally. Expect a response within 24 hours.</p>

            <div className="info-list" style={{ display: 'grid', gap: '2rem' }}>
              <div className="info-item" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <span className="info-icon" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '1.2rem', flexShrink: 0 }}>
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                </span>
                <div className="info-content">
                  <h3 style={{ color: 'var(--color-light)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>WhatsApp / Phone</h3>
                  <p style={{ margin: 0 }}>
                    <a href="https://wa.me/919921362708" style={{ color: 'rgba(255,255,255,0.9)' }}>+91 99213 62708</a>
                  </p>
                </div>
              </div>
              <div className="info-item" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <span className="info-icon" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '1.2rem', flexShrink: 0 }}>
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </span>
                <div className="info-content">
                  <h3 style={{ color: 'var(--color-light)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</h3>
                  <p style={{ margin: 0 }}>
                    <a href="mailto:maheshushir583@gmail.com" style={{ color: 'rgba(255,255,255,0.9)' }}>maheshushir583@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="info-item" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <span className="info-icon" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '1.2rem', flexShrink: 0 }}>
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                </span>
                <div className="info-content">
                  <h3 style={{ color: 'var(--color-light)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Headquarters</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', margin: 0 }}>Pimpri Chinchwad, Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="social-links" aria-label="Social links" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '1rem' }}>
              <a href="https://instagram.com/micmasters_with_mahesh" className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </aside>

          <div className="contact-form-card fade-left" style={{ background: 'var(--color-light)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Send a Message</h2>
            <p className="lead" style={{ marginBottom: '2.5rem', fontSize: '1rem' }}>Fill this out, and it will instantly open a pre-formatted WhatsApp message ready to send.</p>
            
            <form onSubmit={handleWhatsAppSubmit} data-whatsapp-recipient="919921362708" data-whatsapp-prefix="New website enquiry">
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label" htmlFor="contact-name" style={{ fontWeight: 600, color: 'var(--color-text-body)', marginBottom: '0.5rem', display: 'block' }}>
                  Full Name
                </label>
                <input id="contact-name" type="text" name="name" className="form-control" required placeholder="Your name" style={{ width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email" style={{ fontWeight: 600, color: 'var(--color-text-body)', marginBottom: '0.5rem', display: 'block' }}>
                    Email
                  </label>
                  <input id="contact-email" type="email" name="email" className="form-control" required placeholder="you@example.com" style={{ width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)' }} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone" style={{ fontWeight: 600, color: 'var(--color-text-body)', marginBottom: '0.5rem', display: 'block' }}>
                    Phone
                  </label>
                  <input id="contact-phone" type="tel" name="phone" className="form-control" placeholder="+91" style={{ width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)' }} />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label" htmlFor="contact-subject" style={{ fontWeight: 600, color: 'var(--color-text-body)', marginBottom: '0.5rem', display: 'block' }}>
                  Path of Interest
                </label>
                <select id="contact-subject" name="subject" className="form-control" required defaultValue="" style={{ width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)' }}>
                  <option value="" disabled>Select an option</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Course Enquiry">15-Day Masterclass</option>
                  <option value="Personal Training Enquiry">Personal Mentorship</option>
                  <option value="Workshop Enquiry">Institutional Workshop</option>
                  <option value="Free Demo">Book Free Demo</option>
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label className="form-label" htmlFor="contact-message" style={{ fontWeight: 600, color: 'var(--color-text-body)', marginBottom: '0.5rem', display: 'block' }}>
                  Your Message
                </label>
                <textarea id="contact-message" name="message" className="form-control" required placeholder="Tell us what you're looking to achieve..." style={{ width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', minHeight: '120px' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <i className="fab fa-whatsapp" aria-hidden="true"></i> Dispatch Message
              </button>
            </form>
          </div>
        </div>

        <div className="container fade-up delay-200" style={{ marginTop: '4rem' }}>
          <div className="map-container" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.93187093223!2d73.73801089901511!3d18.627999863832876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b851bc0411ed%3A0xe5eb6cba8d15a5f1!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pimpri Chinchwad map"
              style={{ width: '100%', height: '400px', border: 'none' }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
