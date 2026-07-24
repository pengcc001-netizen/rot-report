import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { quizQuestions } from '../data/questions'
import { rotSubtypes } from '../data/rotSubtypes'
import { brainrotTerms } from '../data/brainrotTerms'
import Ad from '../components/Ad'
import ShareButtons from '../components/ShareButtons'

type Phase = 'intro' | 'quiz' | 'result'

export default function Home() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const navigate = useNavigate()

  const handleAnswer = (slug: string) => {
    const newAnswers = [...answers, slug]
    setAnswers(newAnswers)
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      const counts: Record<string, number> = {}
      newAnswers.forEach(s => { counts[s] = (counts[s] || 0) + 1 })
      const encoded = btoa(newAnswers.join(',')).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
      window.history.replaceState(null, '', `/r/${encoded}`)
      setPhase('result')
    }
  }

  const reset = () => { setPhase('intro'); setCurrentQ(0); setAnswers([]); navigate('/') }

  // ---------- INTRO ----------
  if (phase === 'intro') {
    return (
      <div className="fade-in">
        <Helmet>
          <title>Rot Report - Brain Rot Assessment [Satire] | 2026</title>
          <meta name="description" content="Take the Brain Rot Assessment. 10 satirical subtypes, 80+ terms explained. Discover your Rot Score. Entertainment only — NOT a real medical diagnosis." />
          <meta property="og:title" content="Rot Report - Brain Rot Assessment" />
          <meta property="og:description" content="Take the satirical Brain Rot Assessment. 10 subtypes, 80+ terms explained. Discover your Rot Score." />
          <meta property="og:url" content="https://rot.csskey.com/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Rot Report",
            "url": "https://rot.csskey.com/",
            "description": "Satirical Brain Rot Assessment with 80+ terms explained.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://rot.csskey.com/terms?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}</script>
        </Helmet>

        <section style={{ textAlign: 'center', padding: '24px 0 48px' }}>
          <div className="terminal-label" style={{ marginBottom: 16 }}>{'> DIGITAL QUARANTINE TERMINAL v2.0'}</div>
          <h1 className="crt-green" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: 20, letterSpacing: '-0.03em', lineHeight: 1, textShadow: '0 0 20px rgba(0, 255, 136, 0.2)' }}>
            ROT REPORT
          </h1>
          <p className="mono" style={{ color: 'var(--text-soft)', maxWidth: 480, margin: '0 auto 32px', fontSize: 14, lineHeight: 1.7 }}>
            {'> '}Take the satirical Brain Rot Assessment. Answer 12 questions. Discover your Rot Score and your assigned subtype. Based on {brainrotTerms.length}+ brainrot terms and {rotSubtypes.length} satirical subtypes.
          </p>
          <button onClick={() => setPhase('quiz')} className="btn btn-terminal pulse-green" style={{ padding: '14px 40px', fontSize: 13 }}>
            {'>'} INITIATE ASSESSMENT
          </button>
          <div style={{ marginTop: 12 }}>
            <span className="mono" style={{ color: 'var(--text-faint)', fontSize: 11 }}>12 questions · ~2 min · FREE</span>
          </div>
        </section>

        {/* Warning box */}
        <div className="warning-box" style={{ marginBottom: 32 }}>
          <strong className="crt-amber">[!] SATIRE NOTICE:</strong> This assessment is entertainment. Brain rot is NOT a real medical diagnosis. The subtypes, ICD codes, and prescriptions are jokes. If you are experiencing genuine cognitive concerns, please consult a healthcare professional.
        </div>

        <Ad />

        {/* Featured subtypes */}
        <section style={{ marginBottom: 40 }}>
          <div className="terminal-label" style={{ marginBottom: 12 }}>{'> ASSIGNED SUBTYPES'}</div>
          <h2 className="mono" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 20, color: 'var(--green)' }}>{rotSubtypes.length} Rot Subtypes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {rotSubtypes.slice(0, 6).map(s => (
              <Link key={s.slug} to={`/subtypes/${s.slug}`} style={{ textDecoration: 'none' }}>
                <div className="terminal-card" style={{ padding: '18px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: '1.5rem' }}>{s.emoji}</span>
                    <span className={`chip chip-${s.severity === 'terminal' ? 'red' : s.severity === 'severe' ? 'red' : s.severity === 'moderate' ? 'amber' : 'green'}`}>{s.fakeICD}</span>
                  </div>
                  <div className="mono" style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{s.name}</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--text-soft)' }}>ROT SCORE: {s.rotScore}</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <Link to="/subtypes" className="btn btn-outline" style={{ fontSize: 11 }}>{'> '}VIEW ALL SUBTYPES</Link>
          </div>
        </section>
      </div>
    )
  }

  // ---------- QUIZ ----------
  if (phase === 'quiz') {
    const q = quizQuestions[currentQ]
    const progress = ((currentQ + 1) / quizQuestions.length) * 100
    return (
      <div className="fade-in">
        <Helmet><title>Assessment - Q{currentQ + 1}/{quizQuestions.length} | Rot Report</title></Helmet>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span className="mono" style={{ fontSize: 11, color: 'var(--text-soft)' }}>{'> Q{currentQ + 1}/{quizQuestions.length}'}</span>
            <span className="mono crt-green" style={{ fontSize: 11 }}>{Math.round(progress)}%</span>
          </div>
          <div style={{ height: 2, background: 'var(--bg-terminal)', border: '1px solid var(--border)' }}>
            </div>
        <h2 className="mono" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.375rem)', fontWeight: 700, lineHeight: 1.4, marginBottom: 24, color: 'var(--text)' }}>
          {q.question}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(opt.subtypeSlug)} className="terminal-card" style={{ padding: '16px 20px', textAlign: 'left', cursor: 'pointer', color: 'var(--text)', fontSize: 13, fontFamily: 'var(--font-mono)', lineHeight: 1.5, border: '1px solid var(--border)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--green-dim)'; e.currentTarget.style.background = 'var(--green-faint)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-terminal)' }}>
              <span className="crt-green" style={{ fontWeight: 700, marginRight: 10 }}>{String.fromCharCode(65 + i)}</span>
              {opt.text}
            </button>
          ))}
        </div>
        {currentQ > 0 && (
          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <button onClick={() => { setCurrentQ(currentQ - 1); setAnswers(answers.slice(0, -1)) }} className="mono" style={{ background: 'none', border: 'none', color: 'var(--text-faint)', cursor: 'pointer', fontSize: 12 }}>{'< PREV'}</button>
          </div>
        )}
      </div>
    )
  }

  // ---------- RESULT ----------
  if (phase === 'result') {
    const counts: Record<string, number> = {}
    answers.forEach(s => { counts[s] = (counts[s] || 0) + 1 })
    const winnerSlug = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
    const subtype = rotSubtypes.find(s => s.slug === winnerSlug)!
    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://rot.csskey.com'

    return (
      <div className="fade-in">
        <Helmet>
          <title>Rot Score: {subtype.rotScore} — {subtype.name} | Rot Report</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>

        {/* Terminal diagnostic report */}
        <div className="terminal-card" style={{ padding: '32px 28px', marginBottom: 24 }}>
          <div className="terminal-label" style={{ marginBottom: 4 }}>{'> ROT REPORT — ASSESSMENT COMPLETE'}</div>
          <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', marginBottom: 20 }}>
            ID: {Math.random().toString(36).substring(2, 8).toUpperCase()} · DATE: {new Date().toISOString().split('T')[0]}
          </div>
          <hr style={{ border: 'none', borderTop: '1px dashed var(--border)', margin: '0 0 20px' }} />

          {/* Rot Score */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div className="terminal-label" style={{ marginBottom: 8 }}>{'> ROT SCORE'}</div>
            <div className="mono nums crt-green" style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', fontWeight: 700, lineHeight: 1, textShadow: '0 0 24px rgba(0,255,136,0.2)' }}>
              {subtype.rotScore}
            </div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 4 }}>/ 999</div>
          </div>

          {/* Subtype */}
          <div style={{ textAlign: 'center', padding: '20px 0', borderTop: '1px dashed var(--border)', borderBottom: '1px dashed var(--border)', marginBottom: 24 }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{subtype.emoji}</div>
            <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--green)', marginBottom: 4 }}>{subtype.name}</div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--amber)' }}>FAKE ICD: {subtype.fakeICD} · SEVERITY: {subtype.severity.toUpperCase()}</div>
            <p className="mono" style={{ marginTop: 12, fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.7 }}>{subtype.tagline}</p>
          </div>

          {/* Symptoms */}
          <div style={{ marginBottom: 20 }}>
            <div className="terminal-label" style={{ marginBottom: 10 }}>{'> OBSERVED INDICATORS'}</div>
            {subtype.symptoms.map((sym, i) => (
              <div key={i} className="mono" style={{ fontSize: 12, color: 'var(--text)', padding: '4px 0', paddingLeft: 16 }}>
                <span className="crt-amber">{'> '}</span>{sym}
              </div>
            ))}
          </div>

          {/* Fake prescription */}
          <div className="warning-card" style={{ padding: '16px 20px' }}>
            <div className="terminal-label" style={{ marginBottom: 10, color: 'var(--amber)' }}>{'> PRESCRIBED RECOVERY [SATIRE]'}</div>
            {subtype.fakePrescription.map((p, i) => (
              <div key={i} className="mono" style={{ fontSize: 12, color: 'var(--text)', padding: '4px 0', paddingLeft: 16 }}>
                <span className="crt-green">{'> '}</span>{p}
              </div>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: '1px dashed var(--border)', margin: '20px 0 12px' }} />
          <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', textAlign: 'center' }}>
            [!] THIS IS SATIRE. NOT A MEDICAL DIAGNOSIS. PLEASE TOUCH GRASS.
          </div>
        </div>

        {/* Share */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div className="terminal-label" style={{ marginBottom: 12 }}>{'> SHARE YOUR ROT SCORE'}</div>
          <ShareButtons url={shareUrl} title={`My Rot Score is ${subtype.rotScore} — I am ${subtype.name} (${subtype.fakeICD}). Take the assessment:`} />
        </div>

        <Ad />

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <button onClick={reset} className="btn btn-ghost" style={{ fontSize: 11 }}>{'< REASSESS'}</button>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div className="terminal-label" style={{ marginBottom: 12 }}>{'> EXPLORE MORE'}</div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/subtypes" className="btn btn-outline" style={{ fontSize: 10 }}>ALL SUBTYPES</Link>
            <Link to="/terms" className="btn btn-outline" style={{ fontSize: 10 }}>BRAINROT TERMS</Link>
            <Link to="/stages" className="btn btn-outline" style={{ fontSize: 10 }}>4 STAGES</Link>
          </div>
        </div>
      </div>
    )
  }
  // Defensive fallback — should never be reached
  return (
    <div className="fade-in" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <Helmet>
        <title>Page Not Found - Rot Report</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1>
      <p>Something went wrong. Please try again.</p>
      <Link to="/" style={{ textDecoration: 'none', fontWeight: 600, color: 'var(--accent)' }}>Go Home</Link>
    </div>
  )
}
