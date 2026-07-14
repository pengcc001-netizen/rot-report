import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import SubtypesPage from './pages/SubtypesPage'
import SubtypeDetailPage from './pages/SubtypeDetailPage'
import TermsPage from './pages/TermsPage'
import StagesPage from './pages/StagesPage'
import LeaderboardPage from './pages/LeaderboardPage'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import StaticPage from './pages/StaticPage'
import ResultPage from './pages/ResultPage'
import Ad from './components/Ad'

function NotFound() {
  return (
    <div style={{ minHeight: '55vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, textAlign: 'center' }}>
      <Helmet><meta name="robots" content="noindex,nofollow" /><title>{`404 - Not Found`}</title></Helmet>
      <div className="terminal-label">ERROR 404</div>
      <div className="mono crt-amber" style={{ fontSize: 'clamp(3rem,10vw,6rem)', fontWeight: 700 }}>404</div>
      <p className="mono" style={{ color: 'var(--text-soft)', maxWidth: 360, fontSize: 13 }}>{'> FILE NOT FOUND IN ARCHIVE'}</p>
      <Link to="/" className="btn btn-terminal">RETURN TO TERMINAL</Link>
    </div>
  )
}

const navLinks = [
  { to: '/subtypes', label: 'Subtypes' },
  { to: '/terms', label: 'Terms' },
  { to: '/stages', label: 'Stages' },
  { to: '/leaderboard', label: 'Scores' },
  { to: '/blog', label: 'Blog' },
]

function Layout({ children }: { children: React.ReactNode }) {
  const loc = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [loc.pathname])
  useEffect(() => { setMenuOpen(false) }, [loc.pathname])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--bg-overlay)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', height: 56, padding: '0 24px', gap: 16 }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="mono crt-green" style={{ fontSize: 16, fontWeight: 700 }}>ROT</span>
            <span className="mono" style={{ fontSize: 9, fontWeight: 600, color: 'var(--amber)', letterSpacing: '0.15em', borderLeft: '1px solid var(--border)', paddingLeft: 8 }}>REPORT</span>
          </Link>
          <nav style={{ display: 'flex', gap: 2, alignItems: 'center', marginLeft: 'auto' }} className="nav-desktop">
            {navLinks.map(l => <Link key={l.to} to={l.to} className="nav-link" style={{ padding: '6px 10px' }}>{l.label}</Link>)}
          </nav>
          <Link to="/" className="btn btn-terminal nav-desktop" style={{ padding: '5px 14px', fontSize: 10 }}>ASSESS</Link>
          <button onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" style={{ display: 'none', background: 'var(--bg-terminal)', border: '1px solid var(--border)', padding: 6, cursor: 'pointer', color: 'var(--green)', marginLeft: 'auto' }} className="menu-toggle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></>}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="fade-in nav-mobile" style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid var(--border)', padding: '12px 24px', gap: 2, background: 'var(--bg-terminal)' }}>
            {navLinks.map(l => <Link key={l.to} to={l.to} className="nav-link" style={{ padding: '12px 0', borderBottom: '1px solid var(--border)' }}>{l.label}</Link>)}
            <Link to="/" className="btn btn-terminal" style={{ marginTop: 10, padding: '10px 20px' }}>TAKE ASSESSMENT</Link>
          </nav>
        )}
      </header>

      {/* Satire disclaimer banner */}
      <div style={{ background: 'var(--amber-faint)', borderBottom: '1px solid var(--border-amber)', padding: '6px 24px', textAlign: 'center' }}>
        <span className="mono" style={{ fontSize: 10, color: 'var(--amber)', letterSpacing: '0.1em' }}>
          [!] SATIRE / ENTERTAINMENT ONLY — NOT A REAL MEDICAL DIAGNOSIS [!]
        </span>
      </div>

      <main style={{ flex: 1, maxWidth: 900, margin: '0 auto', padding: '32px 24px', width: '100%' }}>
        {children}
      </main>

      <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-terminal)', padding: '48px 24px 32px', marginTop: 64 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32, marginBottom: 32 }}>
            <div style={{ maxWidth: 280 }}>
              <span className="mono crt-green" style={{ fontSize: 14, fontWeight: 700 }}>ROT REPORT</span>
              <p className="mono" style={{ fontSize: 12, color: 'var(--text-soft)', lineHeight: 1.7, marginTop: 8 }}>
                Satirical brain rot assessment. 10 subtypes, 80+ terms, 4 stages. Entertainment only.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="terminal-label" style={{ marginBottom: 4 }}>Explore</span>
              <Link to="/subtypes" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 12, fontFamily: 'var(--font-mono)' }}>Subtypes</Link>
              <Link to="/terms" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 12, fontFamily: 'var(--font-mono)' }}>Terms</Link>
              <Link to="/stages" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 12, fontFamily: 'var(--font-mono)' }}>Stages</Link>
              <Link to="/blog" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 12, fontFamily: 'var(--font-mono)' }}>Blog</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="terminal-label" style={{ marginBottom: 4 }}>Site</span>
              <Link to="/about" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 12, fontFamily: 'var(--font-mono)' }}>About</Link>
              <Link to="/disclaimer" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 12, fontFamily: 'var(--font-mono)' }}>Disclaimer</Link>
              <Link to="/privacy" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 12, fontFamily: 'var(--font-mono)' }}>Privacy</Link>
              <Link to="/contact" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 12, fontFamily: 'var(--font-mono)' }}>Contact</Link>
            </div>
          </div>
          <div style={{ borderTop: '1px dashed var(--border)', paddingTop: 16, textAlign: 'center' }}>
            <p className="mono" style={{ color: 'var(--text-faint)', fontSize: 10, letterSpacing: '0.05em' }}>
              ROT REPORT · 2026 · SATIRE / ENTERTAINMENT ONLY · NOT A MEDICAL DIAGNOSIS
            </p>
            <p className="mono crt-green" style={{ fontSize: 12, marginTop: 8 }}>
              {'>'} please touch grass<span className="blink">_</span>
            </p>
          </div>
        </div>
      </footer>

      <style>{`@media (max-width: 640px) { .nav-desktop { display: none !important; } .menu-toggle { display: flex !important; } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subtypes" element={<SubtypesPage />} />
        <Route path="/subtypes/:slug" element={<SubtypeDetailPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/stages" element={<StagesPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<StaticPage page="about" />} />
        <Route path="/privacy" element={<StaticPage page="privacy" />} />
        <Route path="/terms" element={<StaticPage page="terms" />} />
        <Route path="/contact" element={<StaticPage page="contact" />} />
        <Route path="/disclaimer" element={<StaticPage page="disclaimer" />} />
        <Route path="/r/:code" element={<ResultPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Ad />
    </Layout>
  )
}
