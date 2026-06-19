import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc, deleteDoc, serverTimestamp, doc } from 'firebase/firestore';
import { Play, Plus, Trash2, Video, Search } from 'lucide-react';
import { normalizeVideoUrl } from '../../utils/video';

type TestimonialCardStyle = 'light' | 'dark' | 'gold';

type TestimonialFormState = {
  name: string;
  course: string;
  quote: string;
  badge: string;
  videoUrl: string;
  cardStyle: TestimonialCardStyle;
  featured: boolean;
};

const initialTestimonialState: TestimonialFormState = {
  name: '',
  course: '',
  quote: '',
  badge: 'Student Story',
  videoUrl: '',
  cardStyle: 'dark',
  featured: false,
};

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [newTestimonial, setNewTestimonial] = useState<TestimonialFormState>(initialTestimonialState);
  const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'testimonials'), (snapshot) => {
      const tests = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      tests.sort((a: any, b: any) => {
        const timeA = a.createdAt && typeof a.createdAt.toMillis === 'function' ? a.createdAt.toMillis() : 0;
        const timeB = b.createdAt && typeof b.createdAt.toMillis === 'function' ? b.createdAt.toMillis() : 0;
        return timeB - timeA;
      });
      setTestimonials(tests);
    });
    return () => unsubscribe();
  }, []);

  const handleAddTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.videoUrl || !newTestimonial.quote) return;
    
    setIsAddingTestimonial(true);
    try {
      const normalizedVideoUrl = normalizeVideoUrl(newTestimonial.videoUrl);
      await addDoc(collection(db, 'testimonials'), {
        ...newTestimonial,
        videoUrl: normalizedVideoUrl,
        quote: newTestimonial.quote.trim(),
        badge: newTestimonial.badge.trim() || 'Student Story',
        createdAt: serverTimestamp()
      });
      setNewTestimonial(initialTestimonialState);
    } catch (error: any) {
      console.error(error);
      alert("Error adding testimonial: " + error.message);
    }
    setIsAddingTestimonial(false);
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      await deleteDoc(doc(db, 'testimonials', id));
    }
  };

  const filteredTestimonials = testimonials.filter((test) => {
    const text = `${test.name || ''} ${test.course || ''} ${test.quote || ''} ${test.badge || ''} ${test.videoUrl || ''} ${test.cardStyle || ''}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  const adminSummary = [
    { label: 'Quote text', value: 'Admin-managed' },
    { label: 'Badge label', value: 'Customizable' },
    { label: 'Card style', value: 'Light / Dark / Gold' },
  ];

  return (
    <div className="admin-page-stack">
      <div className="admin-surface admin-panel">
        <h1 className="admin-header-title">Testimonials Manager</h1>
        <p className="admin-page-copy">Create and maintain student testimonial entries shown on your public site. Control the copy, badge text, card theme, and featured state from here.</p>
        <div className="admin-grid-3 mt-4" style={{ gap: '0.75rem' }}>
          {adminSummary.map((item) => (
            <div key={item.label} className="admin-list-item" style={{ padding: '0.9rem 1rem' }}>
              <p className="text-xs admin-text-muted" style={{ marginBottom: '0.25rem' }}>{item.label}</p>
              <p className="font-semibold admin-text-primary" style={{ marginBottom: 0 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-grid-2 items-start">
        <section className="admin-surface admin-panel">
          <div className="admin-section-head">
            <div>
              <h2 className="admin-section-title">Create New Entry</h2>
              <p className="admin-section-subtitle">Publish a student testimonial video.</p>
            </div>
            <span className="admin-badge">
              <Plus size={12} /> Add
            </span>
          </div>

          <form onSubmit={handleAddTestimonial} className="space-y-4">
            <div className="admin-form-group">
              <label className="admin-label">Student Name</label>
              <input
                type="text"
                required
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                className="admin-input"
                placeholder="e.g. Rahul Sharma"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Course Or Batch</label>
              <input
                type="text"
                required
                value={newTestimonial.course}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, course: e.target.value })}
                className="admin-input"
                placeholder="e.g. 5-Day Intensive Program"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Testimonial Text</label>
              <textarea
                required
                value={newTestimonial.quote}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, quote: e.target.value })}
                className="admin-input"
                placeholder="Write the quote or review text shown on the public page"
                rows={5}
              />
            </div>

            <div className="admin-grid-2" style={{ gap: '1rem' }}>
              <div className="admin-form-group">
                <label className="admin-label">Badge Label</label>
                <input
                  type="text"
                  value={newTestimonial.badge}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, badge: e.target.value })}
                  className="admin-input"
                  placeholder="e.g. Student Story"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Card Style</label>
                <select
                  value={newTestimonial.cardStyle}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, cardStyle: e.target.value as TestimonialCardStyle })}
                  className="admin-input"
                >
                  <option value="dark">Dark cinematic</option>
                  <option value="light">Light editorial</option>
                  <option value="gold">Gold spotlight</option>
                </select>
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Featured On Testimonials Page</label>
              <label className="admin-list-item" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={newTestimonial.featured}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, featured: e.target.checked })}
                />
                <span className="admin-text-primary">Give this testimonial a highlighted presence in the list</span>
              </label>
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Video URL</label>
              <input
                type="url"
                required
                value={newTestimonial.videoUrl}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, videoUrl: e.target.value })}
                className="admin-input"
                placeholder="https://res.cloudinary.com/..."
              />
            </div>

            <div className="admin-form-actions">
              <button type="submit" disabled={isAddingTestimonial} className="admin-button primary w-full">
                {isAddingTestimonial ? (
                  <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Plus size={16} /> Publish Testimonial
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        <section className="admin-surface admin-panel">
          <div className="admin-section-head">
            <div>
              <h2 className="admin-section-title">Published Testimonials</h2>
              <p className="admin-section-subtitle">Search and maintain your student video list.</p>
            </div>
            <span className="admin-badge">
              <Video size={12} /> {filteredTestimonials.length}
            </span>
          </div>

          <div className="relative mb-4">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 admin-text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="admin-input with-icon"
              placeholder="Search by name, course, or URL"
            />
          </div>

          {filteredTestimonials.length === 0 ? (
            <div className="admin-empty">No testimonials match your search.</div>
          ) : (
            <div className="admin-list">
              {filteredTestimonials.map((test) => (
                <article key={test.id} className="admin-list-item">
                  <div className="admin-list-row">
                    <div className="min-w-0">
                      <p className="font-semibold admin-text-primary truncate">{test.name}</p>
                      <p className="text-xs admin-text-muted mt-1 truncate">{test.course}</p>
                      <p className="text-xs admin-text-muted mt-1 truncate">{test.badge || 'Student Story'} · {test.cardStyle || 'dark'} · {test.featured ? 'Featured' : 'Standard'}</p>
                      <p className="text-sm admin-text-primary-soft mt-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '520px' }}>
                        {test.quote || 'No testimonial text provided.'}
                      </p>
                    </div>

                    <div className="admin-item-actions shrink-0">
                      <a href={test.videoUrl} target="_blank" rel="noreferrer" className="admin-button danger compact">
                        <Play size={12} /> Open
                      </a>
                      <button onClick={() => handleDeleteTestimonial(test.id)} className="admin-button danger compact">
                        <Trash2 size={12} /> Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminTestimonials;
