import { Helmet } from 'react-helmet-async'
import { rotStages } from '../data/rotStages'
import Ad from '../components/Ad'

export default function StagesPage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>The 4 Stages of Brain Rot | Rot Report</title>
        <meta name="description" content="From Slang Creep to Content Void. The 4 satirical stages of brain rot progression and how to reverse each one." />
        </Helmet>

      <div className="terminal-label" style={{ marginBottom: 8 }}>{'> PROGRESSION ANALYSIS'}</div>
      <h1 className="mono" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, marginBottom: 12, color: 'var(--green)' }}>
        4 Stages of Brain Rot
      </h1>
      <p className="mono" style={{ color: 'var(--text-soft)', fontSize: 13, lineHeight: 1.7, maxWidth: 560, marginBottom: 24 }}>
        A satirical framework for understanding how excessive internet content consumption affects cognition. Each stage is reversible. None of this is a real medical diagnosis.
      </p>

      <div className="warning-box" style={{ marginBottom: 24 }}>
        <strong className="crt-amber">[!] SATIRE:</strong> These stages are jokes about internet culture. They are NOT a medical classification.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
        {rotStages.map(stage => (
          <div key={stage.number} className="terminal-card" style={{ padding: '24px 28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div className={`mono ${stage.number === 4 ? 'crt-red' : stage.number === 3 ? 'crt-amber' : 'crt-green'}`} style={{ fontSize: '2rem', fontWeight: 700 }}>
                {stage.number}
              </div>
              <div>
                <h2 className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)' }}>{stage.name}</h2>
                <span className={`chip chip-${stage.number >= 3 ? 'red' : stage.number === 2 ? 'amber' : 'green'}`}>STAGE {stage.number}</span>
              </div>
            </div>
            <p className="mono" style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.8, marginBottom: 16 }}>{stage.description}</p>

            <div style={{ marginBottom: 12 }}>
              <div className="terminal-label" style={{ marginBottom: 8 }}>{'> INDICATORS'}</div>
              {stage.symptoms.map((sym, i) => (
                <div key={i} className="mono" style={{ fontSize: 12, color: 'var(--text)', padding: '3px 0', paddingLeft: 16 }}>
                  <span className="crt-amber">{'> '}</span>{sym}
                </div>
              ))}
            </div>

            <div className="warning-card" style={{ padding: '12px 16px' }}>
              <div className="terminal-label" style={{ marginBottom: 6, color: 'var(--amber)' }}>{'> RECOVERY'}</div>
              <p className="mono" style={{ fontSize: 12, color: 'var(--text)', lineHeight: 1.6 }}>{stage.recovery}</p>
            </div>
          </div>
        ))}
      </div>

      <Ad />
    </div>
  )
}
