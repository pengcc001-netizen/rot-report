import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { quizQuestions } from '../data/questions'
import { rotSubtypes } from '../data/rotSubtypes'
import Ad from '../components/Ad'
import ShareButtons from '../components/ShareButtons'

export default function ResultPage() {
  const { code } = useParams<{ code: string }>()
  const [slug, setSlug] = useState<string | null>(null)

  useEffect(() => {
    try {
      const std = (code || '').replace(/-/g, '+').replace(/_/g, '/')
      const padded = std + '='.repeat((4 - std.length % 4) % 4)
      const decoded = atob(padded)
      const slugs = decoded.split(',')
      if (slugs.length === quizQuestions.length) {
        const counts: Record<string, number> = {}
        slugs.forEach(s => { counts[s] = (counts[s] || 0) + 1 })
        setSlug(Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0])
      }
    } catch { setSlug(null) }
  }, [code])

  if (!slug) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0' }}>
        <Helmet><meta name="robots" content="noindex,nofollow" /><title>404 - Not Found | Rot Report</title></Helmet>
        <p className="mono" style={{ color: 'var(--text-soft)' }}>{'> INVALID ASSESSMENT CODE'}</p>
        <Link to="/" className="btn btn-terminal" style={{ marginTop: 16 }}>TAKE ASSESSMENT</Link>
      </div>
    )
  }

  const subtype = rotSubtypes.find(s => s.slug === slug)!
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://rot.csskey.com'

  return (
    <div className="fade-in">
      <Helmet>
        <title>Rot Score: {subtype.rotScore} ?{subtype.name} | Rot Report</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta property="og:title" content={`My Rot Score is ${subtype.rotScore} — ${subtype.name}`} />
        <meta property="og:description" content={subtype.description} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`My Rot Score: ${subtype.rotScore}`} />
        <meta name="twitter:description" content={subtype.description} />
      </Helmet>

      <div className="terminal-card" style={{ padding: '28px 24px', marginBottom: 24 }}>
        <div className="terminal-label" style={{ marginBottom: 4 }}>{'> ROT REPORT 鈥?SHARED RESULT'}</div>
        <hr style={{ border: 'none', borderTop: '1px dashed var(--border)', margin: '12px 0 20px' }} />

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div className="terminal-label" style={{ marginBottom: 8 }}>{'> ROT SCORE'}</div>
          <div className="mono nums crt-green" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 700, lineHeight: 1, textShadow: '0 0 20px rgba(0,255,136,0.2)' }}>{subtype.rotScore}</div>
        </div>

        <div style={{ textAlign: 'center', padding: '16px 0', borderTop: '1px dashed var(--border)', borderBottom: '1px dashed var(--border)', marginBottom: 20 }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{subtype.emoji}</div>
          <div className="mono" style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--green)' }}>{subtype.name}</div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--amber)' }}>FAKE ICD: {subtype.fakeICD}</div>
          <p className="mono" style={{ marginTop: 8, fontSize: 12, color: 'var(--text-soft)' }}>{subtype.tagline}</p>
        </div>

        <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', textAlign: 'center' }}>
          [!] SATIRE 鈥?NOT A MEDICAL DIAGNOSIS
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <ShareButtons url={shareUrl} title={`My Rot Score is ${subtype.rotScore} 鈥?I am ${subtype.name} (${subtype.fakeICD})`} />
      </div>

      <Ad />

      <div style={{ textAlign: 'center' }}>
        <Link to="/" className="btn btn-terminal" style={{ fontSize: 11 }}>{'> GET YOUR OWN ROT SCORE'}</Link>
      </div>
    </div>
  )
}
