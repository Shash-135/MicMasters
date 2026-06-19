import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { isAdminUser } from '../utils/adminAuth';
import { LayoutDashboard, Settings, Menu, LogOut, Video, Sparkles, X } from 'lucide-react';

const AdminLayout = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    document.body.classList.add('admin-mode');
    return () => {
      document.body.classList.remove('admin-mode');
    };
  }, []);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    let isMounted = true;

    const verifyAccess = async () => {
      if (!user) {
        if (isMounted) {
          setIsAuthorized(false);
        }
        return;
      }

      try {
        const allowed = await isAdminUser(user);
        if (isMounted) {
          setIsAuthorized(allowed);
        }
      } catch {
        if (isMounted) {
          setIsAuthorized(false);
        }
      }
    };

    setIsAuthorized(null);
    verifyAccess();

    return () => {
      isMounted = false;
    };
  }, [user]);

  useEffect(() => {
    if (user && isAuthorized === false) {
      auth.signOut();
    }
  }, [user, isAuthorized]);

  if (loading || isAuthorized === null) {
    return (
      <div className="admin-shell flex items-center justify-center">
        <div className="w-10 h-10 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--admin-accent)', borderTopColor: 'transparent' }}></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!isAuthorized) {
    return <Navigate to="/admin/login" replace state={{ reason: 'unauthorized' }} />;
  }

  const pageTitles: Record<string, string> = {
    '/admin': 'Dashboard',
    '/admin/testimonials': 'Testimonials',
    '/admin/settings': 'Global Settings'
  };

  const currentPage = pageTitles[location.pathname] || 'Admin';
  const displayName = user.email || 'Administrator';

  const NavItem = ({ to, icon: Icon, label }: { to: string; icon: React.ComponentType<{ size?: number }>; label: string }) => {
    const isActive = to === '/admin' ? location.pathname === '/admin' : location.pathname.startsWith(to);

    return (
      <Link to={to} className={`admin-nav-item ${isActive ? 'active' : ''}`}>
        <Icon size={17} />
        {label}
      </Link>
    );
  };

  return (
    <div className="admin-shell">
      {isSidebarOpen && <div className="admin-overlay" onClick={() => setIsSidebarOpen(false)} />}

      <div className="admin-layout">
        <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="admin-brand">
            <div className="admin-brand-mark">
              <Video size={18} />
            </div>
            <div>
              <h1 className="admin-brand-title">Mic Masters</h1>
              <p className="admin-brand-sub">Admin Portal</p>
            </div>
            <button className="ml-auto admin-menu-btn" onClick={() => setIsSidebarOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="admin-nav-block">
            <p className="admin-nav-title">Manage</p>
            <nav>
              <NavItem to="/admin" icon={LayoutDashboard} label="Dashboard" />
              <NavItem to="/admin/testimonials" icon={Video} label="Testimonials" />
            </nav>
          </div>

          <div className="admin-nav-block">
            <p className="admin-nav-title">Configuration</p>
            <nav>
              <NavItem to="/admin/settings" icon={Settings} label="Global Settings" />
            </nav>
          </div>

          <div className="admin-sidebar-footer">
            <p className="admin-user-label">Signed In</p>
            <p className="admin-user-name">{displayName}</p>
            <button onClick={() => auth.signOut()} className="admin-signout">
              <LogOut size={14} /> Sign Out
            </button>
          </div>
        </aside>

        <div className="admin-main">
          <div className="admin-content">
            <header className="admin-topbar">
              <div className="flex items-center gap-3">
                <button className="admin-menu-btn" onClick={() => setIsSidebarOpen(true)}>
                  <Menu size={18} />
                </button>
                <div>
                  <p className="admin-topbar-kicker">Mic Masters</p>
                  <p className="admin-topbar-page">{currentPage}</p>
                </div>
              </div>

              <span className="admin-badge">
                <Sparkles size={13} /> Content Ops
              </span>
            </header>

            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
