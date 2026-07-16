import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const PAGES: Record<string, { title: string; content: string }> = {
  about: {
    title: 'About',
    content: `## About Rot Report

I built this site because brain rot is the defining cultural phenomenon of our generation. Oxford University Press named it the 2024 Word of the Year. Usage increased 230%. And yet, most people over 30 have no idea what it means.

My name is Dev Patel. I have been writing about internet culture since 2020. When I first heard my younger cousin say "skibidi" in a sentence, I did not know what was happening. After three hours of research, I understood less. After three days, I understood enough to build this site.

### What You Will Find Here

- 10 satirical brain rot subtypes with fake ICD codes
- 80+ brainrot terms explained in a searchable dictionary
- 4 stages of brain rot progression
- A 12-question quiz that calculates your Rot Score
- A blog about brain rot culture, Italian Brainrot, and recovery strategies
- Free, no sign-up, no data collection

### Important Disclaimer

Everything on this site is satire. The "subtypes" are jokes about internet culture. The ICD codes are fake. The prescriptions are real advice wrapped in fake medical packaging. If you have genuine cognitive concerns, please consult a healthcare professional.

### Contact

Email: support@csskey.com`,
  },
  privacy: {
    title: 'Privacy Policy',
    content: `## Privacy Policy

**Last updated: July 2026**

### Information We Collect

Rot Report does not collect personal information. Your quiz answers are encoded in your browser and never sent to a server.

### Cookies

We do not set cookies directly. Google AdSense may set cookies.

### Contact

Questions? Email support@csskey.com`,
  },
  terms: {
    title: 'Terms of Service',
    content: `## Terms of Service

**Last updated: July 2026**

### Use of Service

This site is satire and entertainment. The brain rot subtypes, ICD codes, and prescriptions are fictional.

### Intellectual Property

All content is owned by us. Share links freely.

### Disclaimer

The site is provided "as is" without warranties.

### Contact

Questions? Email support@csskey.com`,
  },
  contact: {
    title: 'Contact',
    content: `## Contact

Email: support@csskey.com

Most emails get a reply within two business days.`,
  },
  disclaimer: {
    title: 'Disclaimer',
    content: `## Disclaimer

**Last updated: July 2026**

### SATIRE / ENTERTAINMENT ONLY

Rot Report is a satire and entertainment website. Everything on this site is fictional, including:

- All brain rot subtypes and their names
- All ICD codes (BR-### format) — these are FAKE
- All symptoms and indicators
- All prescriptions and recovery suggestions
- The Rot Score calculation
- The 4 stages of brain rot progression

### NOT A MEDICAL DIAGNOSIS

Nothing on this site is a medical diagnosis. The subtypes are jokes about internet culture. If you are experiencing genuine cognitive difficulties, memory problems, attention issues, or any other health concerns, PLEASE CONSULT A QUALIFIED HEALTHCARE PROFESSIONAL.

### NO MEDICAL ADVICE

The content on this site is not medical advice. The "prescriptions" are common-sense wellness tips (touch grass, reduce screen time, talk to people) wrapped in satirical medical packaging. They are not medical recommendations.

### NO LIABILITY

We are not liable for any decisions made based on the content of this site. The Rot Score is a random number assigned to satirical categories. It has no clinical significance.

### Contact

Questions? Email support@csskey.com`,
  },
}

export default function StaticPage({ page }: { page: string }) {
  const info = PAGES[page]
  if (!info) return (
      <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
        <Helmet>
          <title>Page Not Found</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <h1 className="mono" style={{ fontSize: '1.5rem', marginBottom: 16 }}>404 - Page Not Found</h1>
        <p style={{ marginBottom: 24, color: 'var(--text-soft)' }}>The page you are looking for does not exist.</p>
        <Link to="/" style={{ color: 'var(--green)' }}>← Back to Home</Link>
      </div>
    )

  let isFirst = true

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
      <Helmet>
        <title>{info.title} - Rot Report</title>
        <meta name="description" content={`Rot Report ${info.title.toLowerCase()} page.`} />
        </Helmet>

      <article>
        {info.content.split('\n').map((line, i) => {
          if (line.startsWith('## ')) return <h1 key={i} className="mono crt-green" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, marginBottom: 24, paddingBottom: 16, borderBottom: '1px dashed var(--border)', letterSpacing: '-0.02em' }}>{line.replace('## ', '')}</h1>
          if (line.startsWith('### ')) return <h2 key={i} className="mono" style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--green)', margin: '28px 0 12px' }}>{line.replace('### ', '')}</h2>
          if (line.startsWith('**')) return <p key={i} className="mono crt-amber" style={{ fontWeight: 700, margin: '20px 0 8px', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{line.replace(/\*\*/g, '')}</p>
          if (line.trim() === '') { isFirst = false; return <div key={i} style={{ height: 12 }} /> }
          if (line.startsWith('Email')) return <p key={i} className="mono" style={{ margin: '6px 0', fontSize: 14, lineHeight: 1.7, color: 'var(--text)' }}><a href="mailto:support@csskey.com" style={{ color: 'var(--green)' }}>{line.split(': ')[1]}</a></p>

          const dc = isFirst ? 'dropcap' : ''
          isFirst = false
          return <p key={i} className={`mono ${dc}`} style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--text)', margin: '8px 0', textAlign: 'justify', hyphens: 'auto' }}>{line}</p>
        })}
      </article>
    </div>
  )
}
