import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { isAdminUser } from '../../utils/adminAuth';
import { LockKeyhole } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, authLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add('admin-mode');
    return () => {
      document.body.classList.remove('admin-mode');
    };
  }, []);

  useEffect(() => {
    if ((location.state as { reason?: string } | null)?.reason === 'unauthorized') {
      setError('Access denied. Your account is not authorized for the admin portal.');
    }
  }, [location.state]);

  useEffect(() => {
    let isMounted = true;

    const redirectAuthorizedUser = async () => {
      if (authLoading || !user) {
        return;
      }

      try {
        const allowed = await isAdminUser(user);
        if (!isMounted) {
          return;
        }

        if (allowed) {
          navigate('/admin', { replace: true });
        } else {
          await auth.signOut();
        }
      } catch {
        if (isMounted) {
          await auth.signOut();
        }
      }
    };

    redirectAuthorizedUser();

    return () => {
      isMounted = false;
    };
  }, [authLoading, navigate, user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      const allowed = await isAdminUser(credentials.user);

      if (!allowed) {
        await auth.signOut();
        setError('Access denied. Your account is not authorized for the admin portal.');
        return;
      }

      navigate('/admin', { replace: true });
    } catch (err: any) {
      setError('Invalid credentials. Please verify your identity.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-shell">
      <section className="admin-login-side">
        <div className="admin-login-branding">
          <img src="/assets/images/logo-clean.png" alt="Mic Masters Academy" className="admin-login-logo" width={210} height={94} />
          <h1 className="admin-login-title">Admin Login</h1>
          <p className="admin-login-copy">Mic Masters Academy</p>
        </div>
      </section>

      <section className="admin-login-card">
        <div className="admin-login-form-wrap">
          <div className="admin-login-form-head">
            <h2 className="admin-login-form-title">Sign In</h2>
            <p className="admin-login-form-copy">Use your admin credentials to continue.</p>
          </div>

          {error && <div className="admin-login-error">{error}</div>}

          <form className="admin-login-form" onSubmit={handleLogin}>
            <div className="admin-form-group">
              <label className="admin-login-label">Administrator Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="admin-login-input"
                placeholder="admin@micmasters.com"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-login-label">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="admin-login-input"
                placeholder="Enter secure password"
              />
            </div>

            <button type="submit" disabled={loading} className="admin-login-submit">
              {loading ? (
                <span className="w-5 h-5 border-2 border-[#101b34]/40 border-t-[#101b34] rounded-full animate-spin" />
              ) : (
                <>
                  <LockKeyhole size={16} /> Authorize Session
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
