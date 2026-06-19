import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { CheckCircle2, Play, Layout, Save } from 'lucide-react';
import { normalizeVideoUrl } from '../../utils/video';

const AdminSettings = () => {
  const [homeVideoUrl, setHomeVideoUrl] = useState('');
  const [isSavingHome, setIsSavingHome] = useState(false);
  const [homeSaveStatus, setHomeSaveStatus] = useState(false);

  useEffect(() => {
    const loadHomeSettings = async () => {
      const docRef = doc(db, 'settings', 'homepage');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setHomeVideoUrl(docSnap.data().videoUrl || '');
      }
    };
    loadHomeSettings();
  }, []);

  const handleSaveHomeVideo = async () => {
    setIsSavingHome(true);
    setHomeSaveStatus(false);
    try {
      const normalizedVideoUrl = normalizeVideoUrl(homeVideoUrl);
      await setDoc(doc(db, 'settings', 'homepage'), { videoUrl: normalizedVideoUrl }, { merge: true });
      setHomeVideoUrl(normalizedVideoUrl);
      setHomeSaveStatus(true);
      setTimeout(() => setHomeSaveStatus(false), 3000);
    } catch (error: any) {
      console.error(error);
      alert("Error saving video: " + error.message);
    }
    setIsSavingHome(false);
  };

  return (
    <div className="admin-page-stack">
      <div className="admin-surface admin-panel">
        <h1 className="admin-header-title">Global Settings</h1>
        <p className="admin-page-copy">Control public homepage media configuration used across the website.</p>
      </div>

      <div className="admin-grid-2 items-start">
        <section className="admin-surface admin-panel">
          <div className="admin-section-head">
            <div className="flex items-center gap-4">
              <div className="admin-stat-icon">
                <Layout size={20} />
              </div>
              <div>
                <h2 className="admin-section-title">Homepage Hero Video</h2>
                <p className="admin-section-subtitle">Update the cinematic video source for the hero section.</p>
              </div>
            </div>
          </div>

          <div className="admin-form-group">
            <label className="admin-label flex items-center gap-2">
              <Play size={13} /> Video URL
            </label>
            <input
              type="url"
              value={homeVideoUrl}
              onChange={(e) => setHomeVideoUrl(e.target.value)}
              placeholder="https://res.cloudinary.com/..."
              className="admin-input"
            />
          </div>

          <p className="text-xs admin-text-muted mt-3">Use a valid public Cloudinary video URL. Leave blank to disable the homepage video.</p>

          <div className="admin-form-actions flex items-center justify-between gap-3">
            <div className="h-5">
              {homeSaveStatus && (
                <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <CheckCircle2 size={14} /> Saved successfully
                </span>
              )}
            </div>
            <button onClick={handleSaveHomeVideo} disabled={isSavingHome} className="admin-button primary min-w-36">
              {isSavingHome ? (
                <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Save size={15} /> Save Changes
                </>
              )}
            </button>
          </div>
        </section>

        <section className="admin-surface admin-panel">
          <div className="admin-section-head">
            <div className="admin-stat-icon">
              <Play size={20} />
            </div>
            <div>
              <h2 className="admin-section-title">Live Preview Link</h2>
              <p className="admin-section-subtitle">Verify the currently configured media source.</p>
            </div>
          </div>

          <div className="admin-list">
            <article className="admin-list-item">
              <p className="admin-label mb-2">Current URL</p>
              <a href={homeVideoUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold admin-text-primary-soft hover:underline break-all">
                {homeVideoUrl || 'Not configured yet'}
              </a>
            </article>

            <article className="admin-list-item">
              <p className="admin-label mb-2">Behavior</p>
              <p className="text-sm admin-text-muted">
                This value is read by the public homepage and rendered as the background video in the hero section.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminSettings;
