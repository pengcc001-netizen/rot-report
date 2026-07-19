import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie_consent')
      if (!consent) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  const accept = () => {
    try { localStorage.setItem('cookie_consent', 'accepted') } catch {}
    setVisible(false)
  }

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: '#1a1a2e', color: '#e5e7eb',
      padding: '14px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center',
      gap: 16, flexWrap: 'wrap', boxShadow: '0 -4px 20px rgba(0,0,0,0.3)',
      fontSize: 13, lineHeight: 1.5,
    }}>
      <p style={{ margin: 0, flex: 1, minWidth: 200, textAlign: 'center' }}>
        We use cookies including Google AdSense to improve your experience and serve relevant ads.
        By continuing, you agree to our use of cookies.
      </p>
      <button onClick={accept} style={{
        background: '#6366f1', color: '#fff', border: 'none',
        padding: '8px 24px', borderRadius: 6, fontSize: 13, fontWeight: 600,
        cursor: 'pointer', whiteSpace: 'nowrap',
      }}>Accept</button>
    </div>
  )
}