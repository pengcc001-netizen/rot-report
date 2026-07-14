import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { rotSubtypes } from '../data/rotSubtypes'
import Ad from '../components/Ad'

export default function LeaderboardPage() {
  const ranked = [...rotSubtypes].sort((a, b) => b.rotScore - a.rotScore)

  return (
    <div className="fade-in">
      <Helmet>
        <title>Rot Score Leaderboard - Ranked by Severity | Rot Report</title>
        <meta name="description" content="All brain rot subtypes ranked by Rot Score. See which subtypes have the highest and lowest cognitive decay scores." />
      </Helmet>

      <div className="terminal-label" style={{ marginBottom: 8 }}>{'> ROT SCORE RANKING'}</div>
      <h1 className="mono" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, marginBottom: 12, color: 'var(--green)' }}>
        Rot Score Leaderboard
      </h1>
      <p className="mono" style={{ color: 'var(--text-soft)', fontSize: 13, lineHeight: 1.7, maxWidth: 560, marginBottom: 24 }}>
        All {rotSubtypes.length} subtypes ranked by Rot Score (0-999 scale). Higher = more cooked.
      </p>

      <div className="terminal-card" style={{ padding: '8px 20px', marginBottom: 32 }}>
        {ranked.map((s, i) => (
          <Link key={s.slug} to={`/subtypes/${s.slug}`} style={{ textDecoration: 'none' }}>
            <div key={s.slug} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < ranked.length - 1 ? '1px dashed var(--border)' : 'none' }}>
              <span className="mono" style={{ color: 'var(--text-faint)', fontSize: 12, width: 24 }}>{i + 1}</span>
              <span style={{ fontSize: '1.25rem' }}>{s.emoji}</span>
              <div style={{ flex: 1 }}>
                <span className="mono" style={{ fontSize: 13, color: 'var(--text)', fontWeight: 600 }}>{s.name}</span>
                <span className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', marginLeft: 8 }}>{s.fakeICD}</span>
              </div>
              <span className="mono nums" style={{ fontSize: '1.125rem', fontWeight: 700, color: s.rotScore >= 800 ? 'var(--red)' : s.rotScore >= 500 ? 'var(--amber)' : 'var(--green)' }}>
                {s.rotScore}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Ad />
    </div>
  )
}
