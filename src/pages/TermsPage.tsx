import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { brainrotTerms } from '../data/brainrotTerms'
import Ad from '../components/Ad'

const TIERS = [0, 1, 2, 3, 4]

export default function TermsPage() {
  const [tier, setTier] = useState(0)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let result = brainrotTerms
    if (tier > 0) result = result.filter(t => t.tier === tier)
    if (search) result = result.filter(t => t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase()))
    return result
  }, [tier, search])

  return (
    <div className="fade-in">
      <Helmet>
        <title>Brainrot Dictionary - {brainrotTerms.length}+ Terms Explained | Rot Report</title>
        <meta name="description" content={`A searchable dictionary of ${brainrotTerms.length}+ brainrot terms. From skibidi to Tralalero Tralala. Every term explained with examples.`} />
      </Helmet>

      <div className="terminal-label" style={{ marginBottom: 8 }}>{'> BRAINROT DICTIONARY'}</div>
      <h1 className="mono" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, marginBottom: 12, color: 'var(--green)' }}>
        {brainrotTerms.length}+ Terms
      </h1>
      <p className="mono" style={{ color: 'var(--text-soft)', fontSize: 13, lineHeight: 1.7, maxWidth: 560, marginBottom: 24 }}>
        A searchable dictionary of brainrot terminology across 4 tiers: mainstream, moderate, deep lore, and Italian brainrot.
      </p>

      {/* Search + filter */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
        <input
          type="text"
          placeholder="> search terms..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="terminal-card"
          style={{ flex: 1, minWidth: 200, padding: '8px 14px', color: 'var(--text)', fontFamily: 'var(--font-mono)', fontSize: 13, outline: 'none' }}
        />
        <select value={tier} onChange={e => setTier(Number(e.target.value))} className="terminal-card" style={{ padding: '8px 14px', color: 'var(--text)', fontFamily: 'var(--font-mono)', fontSize: 13, cursor: 'pointer' }}>
          {TIERS.map(t => <option key={t} value={t}>{t === 0 ? 'ALL TIERS' : `TIER ${t}`}</option>)}
        </select>
      </div>

      <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', marginBottom: 12 }}>
        {'> '}{filtered.length} TERMS FOUND
      </div>

      {/* Terms */}
      <div className="terminal-card" style={{ padding: '4px 20px', marginBottom: 32 }}>
        {filtered.map((t, i) => (
          <div key={i} style={{ padding: '12px 0', borderBottom: i < filtered.length - 1 ? '1px dashed var(--border)' : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
              <span className={`chip chip-${t.tier === 4 ? 'amber' : t.tier === 3 ? 'red' : t.tier === 2 ? 'green' : 'green'}`} style={{ fontSize: 9 }}>T{t.tier}</span>
              <span className="mono crt-green" style={{ fontSize: 14, fontWeight: 700 }}>{t.term}</span>
            </div>
            <p className="mono" style={{ fontSize: 12, color: 'var(--text-soft)', lineHeight: 1.6, marginBottom: 4 }}>{t.definition}</p>
            <p className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', fontStyle: 'italic' }}>e.g. {t.example}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="mono" style={{ padding: '24px 0', textAlign: 'center', color: 'var(--text-faint)', fontSize: 13 }}>
            {'> NO RESULTS. TOUCH GRASS AND TRY AGAIN.'}
          </div>
        )}
      </div>

      <Ad />
    </div>
  )
}
