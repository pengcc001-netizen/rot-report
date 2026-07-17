import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { rotSubtypes } from '../data/rotSubtypes'
import Ad from '../components/Ad'

export default function SubtypesPage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>All {rotSubtypes.length} Brain Rot Subtypes - Rot Report</title>
        <meta name="description" content={`Browse all ${rotSubtypes.length} satirical brain rot subtypes. From Skibidi Syndrome to Cooked Terminal Stage. Fake ICD codes, joke prescriptions. Entertainment only.`} />
        <meta property="og:title" content={`All ${rotSubtypes.length} Brain Rot Subtypes`} />
        <meta property="og:description" content={`Browse all ${rotSubtypes.length} satirical brain rot subtypes with fake ICD codes and joke prescriptions.`} />
        <meta property="og:url" content="https://rot.csskey.com/subtypes" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: `All ${rotSubtypes.length} Brain Rot Subtypes`, description: `Browse all ${rotSubtypes.length} satirical brain rot subtypes.`, url: 'https://rot.csskey.com/subtypes' }) }} />
      </Helmet>

      <div className="terminal-label" style={{ marginBottom: 8 }}>{'> SUBTYPE DATABASE'}</div>
      <h1 className="mono" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, marginBottom: 12, color: 'var(--green)' }}>
        {rotSubtypes.length} Rot Subtypes
      </h1>
      <p className="mono" style={{ color: 'var(--text-soft)', fontSize: 13, lineHeight: 1.7, maxWidth: 560, marginBottom: 28 }}>
        Satirical brain rot subtypes with fake ICD codes (BR-###), observed indicators, and joke prescriptions. Each is a reflection of internet culture, NOT a real medical condition.
      </p>

      <div className="warning-box" style={{ marginBottom: 24 }}>
        <strong className="crt-amber">[!] NOTICE:</strong> All ICD codes (BR-###) are FAKE. All prescriptions are jokes. This is satire.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
        {rotSubtypes.map((s, i) => (
          <Link key={s.slug} to={`/subtypes/${s.slug}`} style={{ textDecoration: 'none' }}>
            <div className="terminal-card" style={{ padding: '20px 24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: 16, alignItems: 'center' }}>
                <div style={{ fontSize: '1.5rem' }}>{s.emoji}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span className="mono" style={{ fontSize: 10, color: 'var(--text-faint)' }}>#{i + 1}</span>
                    <span className="mono" style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{s.name}</span>
                  </div>
                  <p className="mono" style={{ fontSize: 12, color: 'var(--text-soft)', lineHeight: 1.5 }}>{s.tagline}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className={`chip chip-${s.severity === 'terminal' || s.severity === 'severe' ? 'red' : s.severity === 'moderate' ? 'amber' : 'green'}`}>{s.fakeICD}</div>
                  <div className="mono nums crt-green" style={{ fontSize: '1.125rem', fontWeight: 700, marginTop: 4 }}>{s.rotScore}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Ad />
    </div>
  )
}
