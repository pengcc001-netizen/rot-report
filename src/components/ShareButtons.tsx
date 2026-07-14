import { useState } from 'react'

interface Props { url: string; title: string }

export default function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false)
  const enc = encodeURIComponent(url)
  const t = encodeURIComponent(title)

  const share = (p: string) => {
    const links: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${t}&url=${enc}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${enc}`,
      reddit: `https://reddit.com/submit?url=${enc}&title=${t}`,
    }
    window.open(links[p], '_blank', 'width=600,height=400')
  }

  const copy = () => { navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000) }

  const s: React.CSSProperties = {
    background: 'var(--bg-terminal)', color: 'var(--text-soft)', fontSize: 11, padding: '8px 16px',
    border: '1px solid var(--border)', fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.04em',
    textTransform: 'uppercase', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
  }

  return (
    <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
      <button onClick={() => share('twitter')} style={s}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--green-dim)'; e.currentTarget.style.color = 'var(--green)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-soft)' }}>Tweet</button>
      <button onClick={() => share('facebook')} style={s}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--green-dim)'; e.currentTarget.style.color = 'var(--green)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-soft)' }}>Share</button>
      <button onClick={() => share('reddit')} style={s}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--green-dim)'; e.currentTarget.style.color = 'var(--green)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-soft)' }}>Reddit</button>
      <button onClick={copy} style={s}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--green-dim)'; e.currentTarget.style.color = 'var(--green)' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-soft)' }}>
        {copied ? 'Copied_' : 'Copy Link'}
      </button>
    </div>
  )
}
