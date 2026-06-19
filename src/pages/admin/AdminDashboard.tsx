import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, getDoc, doc } from 'firebase/firestore';
import { Video, ArrowRight, Play, Settings, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [testiCount, setTestiCount] = useState(0);
  const [homeVideoUrl, setHomeVideoUrl] = useState('');
  const [recentTestimonials, setRecentTestimonials] = useState<Array<{ id: string; name?: string; course?: string; videoUrl?: string }>>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'testimonials'), (snapshot) => {
      setTestiCount(snapshot.docs.length);

      const recent = snapshot.docs
        .map((item) => ({ id: item.id, ...item.data() } as { id: string; name?: string; course?: string; videoUrl?: string; createdAt?: { toMillis?: () => number } }))
        .sort((a, b) => {
          const aTime = a.createdAt && typeof a.createdAt.toMillis === 'function' ? a.createdAt.toMillis() : 0;
          const bTime = b.createdAt && typeof b.createdAt.toMillis === 'function' ? b.createdAt.toMillis() : 0;
          return bTime - aTime;
        })
        .slice(0, 4)
        .map(({ id, name, course, videoUrl }) => ({ id, name, course, videoUrl }));

      setRecentTestimonials(recent);
    });

    const loadSettings = async () => {
      const docSnap = await getDoc(doc(db, 'settings', 'homepage'));
      if (docSnap.exists()) {
        setHomeVideoUrl(docSnap.data().videoUrl || '');
      }
    };
    loadSettings();

    return () => unsubscribe();
  }, []);

  const StatCard = ({ title, count, icon: Icon, linkTo, linkText }: {
    title: string;
    count: number;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    linkTo: string;
    linkText: string;
  }) => (
    <article className="admin-stat-card">
      <div className="admin-stat-head">
        <div className="admin-stat-icon">
          <Icon size={20} />
        </div>
        <span className="admin-stat-value">{count}</span>
      </div>
      <p className="admin-stat-title">{title}</p>
      <Link to={linkTo} className="admin-action-link">
          {linkText} <ArrowRight size={14} />
        </Link>
    </article>
  );

  return (
    <div className="admin-page-stack">
      <div className="admin-surface admin-panel">
        <h1 className="admin-header-title">Control Center</h1>
        <p className="admin-page-copy">Monitor testimonial inventory and homepage media status from a single screen.</p>
      </div>

      <div className="admin-grid-2">
        <StatCard 
          title="Published Testimonials" 
          count={testiCount} 
          icon={Video}
          linkTo="/admin/testimonials"
          linkText="Open manager"
        />
        <StatCard 
          title="Homepage Video Config" 
          count={homeVideoUrl ? 1 : 0}
          icon={Settings}
          linkTo="/admin/settings"
          linkText="Edit settings"
        />
      </div>

      <div className="admin-grid-2">
        <section className="admin-surface admin-panel">
          <div className="admin-section-head">
            <div>
              <h2 className="admin-section-title">Current Homepage Video</h2>
              <p className="admin-section-subtitle">Public home page media source</p>
            </div>
            <Link to="/admin/settings" className="admin-action-link">Update</Link>
          </div>

          <div className="admin-list-item">
            <div className="admin-list-row">
              <div className="flex items-center gap-2 min-w-0">
                <Play size={16} className="admin-text-accent" />
                {homeVideoUrl ? (
                  <a href={homeVideoUrl} target="_blank" rel="noreferrer" className="truncate text-sm font-semibold admin-text-primary-soft hover:underline">
                    {homeVideoUrl}
                  </a>
                ) : (
                  <span className="truncate text-sm font-semibold admin-text-primary-soft">Not configured yet</span>
                )}
              </div>
              {homeVideoUrl && (
                <div className="admin-item-actions shrink-0">
                  <a href={homeVideoUrl} target="_blank" rel="noreferrer" className="admin-button danger compact">
                    <ExternalLink size={12} /> Open
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="admin-surface admin-panel">
          <div className="admin-section-head">
            <div>
              <h2 className="admin-section-title">Recent Testimonials</h2>
              <p className="admin-section-subtitle">Latest published student entries</p>
            </div>
            <Link to="/admin/testimonials" className="admin-action-link">View all</Link>
          </div>

          {recentTestimonials.length === 0 ? (
            <div className="admin-empty">No testimonial data found.</div>
          ) : (
            <div className="admin-list">
              {recentTestimonials.map((item) => (
                <article key={item.id} className="admin-list-item">
                  <div className="admin-list-row">
                    <div className="min-w-0">
                      <p className="font-semibold admin-text-primary truncate">{item.name || 'Unnamed Student'}</p>
                      <p className="text-xs admin-text-muted truncate mt-1">{item.course || 'Course not provided'}</p>
                    </div>
                    {item.videoUrl ? (
                      <a href={item.videoUrl} target="_blank" rel="noreferrer" className="admin-button danger compact">
                        <Play size={12} /> Watch
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      <div className="admin-surface admin-panel">
        <h2 className="admin-section-title">Admin Shortcuts</h2>
        <p className="admin-section-subtitle">Fast actions for common content operations.</p>

        <div className="admin-grid-3 admin-shortcuts-grid">
          <Link to="/admin/testimonials" className="admin-list-item admin-link-card">
            <p className="font-semibold admin-text-primary">Add New Testimonial</p>
            <p className="text-xs admin-text-muted mt-2">Publish a new student review video.</p>
          </Link>

          <Link to="/admin/testimonials" className="admin-list-item admin-link-card">
            <p className="font-semibold admin-text-primary">Review Existing Videos</p>
            <p className="text-xs admin-text-muted mt-2">Check and maintain testimonial links.</p>
          </Link>

          <Link to="/admin/settings" className="admin-list-item admin-link-card">
            <p className="font-semibold admin-text-primary">Update Homepage Media</p>
            <p className="text-xs admin-text-muted mt-2">Edit the hero background video URL.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
