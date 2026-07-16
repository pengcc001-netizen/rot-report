import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { rotSubtypes } from '../data/rotSubtypes'
import Ad from '../components/Ad'
import ShareButtons from '../components/ShareButtons'

export default function SubtypeDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const subtype = rotSubtypes.find(s => s.slug === slug)
  if (!subtype) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const url = `https://rot.csskey.com/subtypes/${subtype.slug}`

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
      <Helmet>
        <title>{subtype.name} ({subtype.fakeICD}) - Rot Report</title>
        <meta name="description" content={`${subtype.name}: ${subtype.tagline} Fake ICD: ${subtype.fakeICD}. Satire only — NOT a real medical diagnosis.`} />
        <meta property="og:title" content={`${subtype.name} (${subtype.fakeICD})`} />
        <meta property="og:description" content={subtype.tagline} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Subtypes", "item": "https://rot.csskey.com/subtypes" },
            { "@type": "ListItem", "position": 2, "name": subtype.name, "item": url },
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${subtype.name} — Satirical Subtype`,
          "description": subtype.tagline,
          "url": url,
          "author": { "@type": "Person", "name": "Dev Patel" },
          "publisher": { "@type": "Organization", "name": "Rot Report" },
          "datePublished": "2026-07-01",
          "mainEntityOfPage": url
        })}</script>
      </Helmet>

      <div style={{ marginBottom: 20 }}>
        <Link to="/subtypes" className="mono" style={{ color: 'var(--text-faint)', fontSize: 12 }}>{'< ALL SUBTYPES'}</Link>
      </div>

      {/* Header */}
      <div className="terminal-card" style={{ padding: '28px 24px', marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{subtype.emoji}</div>
            <h1 className="mono crt-green" style={{ fontSize: '1.5rem', fontWeight: 700 }}>{subtype.name}</h1>
          </div>
          <div className="warning-card" style={{ padding: '8px 12px', textAlign: 'center' }}>
            <div className="terminal-label" style={{ marginBottom: 2, fontSize: 9 }}>FAKE ICD</div>
            <div className="mono crt-amber" style={{ fontSize: '1.125rem', fontWeight: 700 }}>{subtype.fakeICD}</div>
          </div>
        </div>
        <div className="mono" style={{ fontSize: 12, color: 'var(--text-soft)' }}>
          {subtype.tagline}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <span className={`chip chip-${subtype.severity === 'terminal' || subtype.severity === 'severe' ? 'red' : subtype.severity === 'moderate' ? 'amber' : 'green'}`}>SEVERITY: {subtype.severity}</span>
          <span className="chip chip-green">ROT SCORE: {subtype.rotScore}</span>
        </div>
      </div>

      {/* Description */}
      <article className="prose" style={{ marginBottom: 24 }}>
        <h2 className="terminal-label" style={{ marginBottom: 12 }}>{'> SUBTYPE ANALYSIS'}</h2>
        <p className="dropcap mono" style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text)', textAlign: 'justify', hyphens: 'auto' }}>
          {subtype.description}
        </p>
      </article>

      <div className="warning-box" style={{ marginBottom: 24 }}>
        <strong className="crt-amber">[!] REMINDER:</strong> This is NOT a real medical diagnosis. The ICD code is fake. The symptoms are jokes about internet culture. If you have genuine cognitive concerns, consult a healthcare professional.
      </div>

      {/* Symptoms */}
      <div className="terminal-card" style={{ padding: '20px 24px', marginBottom: 20 }}>
        <h2 className="terminal-label" style={{ marginBottom: 10 }}>{'> OBSERVED INDICATORS'}</h2>
        {subtype.symptoms.map((sym, i) => (
          <div key={i} className="mono" style={{ fontSize: 13, color: 'var(--text)', padding: '5px 0', paddingLeft: 16 }}>
            <span className="crt-amber">{'> '}</span>{sym}
          </div>
        ))}
      </div>

      {/* Fake prescription */}
      <div className="warning-card" style={{ padding: '20px 24px', marginBottom: 24 }}>
        <h2 className="terminal-label" style={{ marginBottom: 10, color: 'var(--amber)' }}>{'> PRESCRIBED RECOVERY [SATIRE]'}</h2>
        {subtype.fakePrescription.map((p, i) => (
          <div key={i} className="mono" style={{ fontSize: 13, color: 'var(--text)', padding: '5px 0', paddingLeft: 16 }}>
            <span className="crt-green">{'> '}</span>{p}
          </div>
        ))}
      </div>

      <Ad />

      <div style={{ marginBottom: 32 }}>
        <ShareButtons url={url} title={`${subtype.name} (${subtype.fakeICD}) — Rot Score: ${subtype.rotScore}`} />
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/" className="btn btn-terminal" style={{ fontSize: 11 }}>{'> TAKE ASSESSMENT'}</Link>
      </div>
    </div>
  )
}
