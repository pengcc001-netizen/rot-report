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

This privacy policy explains how Rot Report ("we", "us", or "our") handles information when you visit rot.csskey.com (the "Site"). We are committed to being transparent about what we collect, how we use it, and the choices you have.

### Information We Collect

Rot Report does not collect personal information. We do not require accounts, logins, email addresses, or any form of registration. When you take the brain rot quiz, your answers are converted into an encoded string that is stored entirely in the URL of your browser. This encoded string is never transmitted to our server, never written to a database, and never associated with your identity or device. We do not collect your IP address for tracking purposes, and we do not build user profiles.

### How the Quiz Works

When you take the brain rot quiz, your answers are converted to an encoded string that is stored in the URL. This allows you to share your result by copying and pasting the link, without us storing any data on a server. The encoded string is processed entirely in your browser, meaning your answers remain on your device. If you close the page without sharing the link, your quiz results are gone.

### Cookies

We do not set cookies directly. The only cookies that may be set on your browser come from third-party advertising partners, specifically Google AdSense, as part of their ad-serving process. These cookies allow Google to display relevant ads and measure ad performance. You can review and opt out of personalized advertising at https://www.google.com/settings/ads. You can also clear cookies in your browser settings at any time.

### Google AdSense

We use Google AdSense to display ads on the Site. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet. You may learn more about how Google handles data and your privacy options by reviewing Google's Privacy Policy at https://policies.google.com/privacy. You may also opt out of personalized advertising by visiting Google Ads Settings.

### Data Security

All quiz data stays in your browser. Nothing is sent to a server, which means there is no central database that could be breached or leaked. The only data that leaves your device is what you voluntarily choose to share by copying a result URL. We cannot recover lost result links because we never store them.

### Children's Privacy

The Site is not directed at children under the age of 13, and we do not knowingly collect personal information from children under 13. Because we do not collect personal information from any users, children are not at risk of having their data stored. If you believe a child has provided information through a shared result URL, please note that we have no way to access or delete that data, as it lives only in the link itself.

### Contact

If you have any questions about this Privacy Policy, please contact us at support@csskey.com. We will do our best to respond within a reasonable timeframe.`,
  },
  terms: {
    title: 'Terms of Service',
    content: `## Terms of Service

**Last updated: July 2026**

These Terms of Service ("Terms") govern your use of rot.csskey.com (the "Site") operated by Rot Report ("we", "us", or "our"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to any part of these Terms, you should not access or use the Site.

### Acceptance of Terms

By visiting, browsing, or otherwise using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and any future modifications. We may update these Terms from time to time without prior notice. Your continued use of the Site after any changes constitutes acceptance of the revised Terms. It is your responsibility to review these Terms periodically.

### Use of Service

This site is satire and entertainment. The brain rot subtypes, ICD codes, prescriptions, and Rot Score are fictional and satirical. None of the medical-sounding terminology on this site reflects real diagnoses, conditions, or treatments. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the Site.

### Intellectual Property

All content on this Site, including but not limited to the brain rot subtypes, dictionary entries, blog posts, design, layout, and underlying code, is owned by us and protected by applicable intellectual property laws. You may share links to the Site freely. You may not copy, republish, reproduce, modify, distribute, or otherwise exploit the content without our prior written permission.

### Disclaimer of Warranties

The Site is provided "as is" and "as available", without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We make no guarantees about the accuracy, reliability, completeness, or timeliness of the content. Your reliance on the Site is at your sole risk.

### Limitation of Liability

To the fullest extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the Site. The framework is designed for humor and satire, not for guiding real-world decisions about your health.

### Contact

If you have any questions about these Terms, please contact us at support@csskey.com.`,
  },
  contact: {
    title: 'Contact',
    content: `## Contact

Found a bug, have a brainrot term suggestion, or want to share feedback about the site? Email works best. I read every message and try to respond personally when I can.

### Email

support@csskey.com

### Response Time

Most emails get a reply within two business days. If your message is complex or requires research on my end, it may take a little longer. I appreciate your patience.

### What to Include

To help me respond quickly, please include the following in your email: a clear description of the issue or suggestion, the page or feature it relates to, and any screenshots or examples if relevant. The more context you provide, the faster I can help.

### Bug Reports

If you found a bug, please include the browser and device you are using, the URL of the page where it happened, and a description of what you expected versus what actually happened. Steps to reproduce the issue are especially helpful.

### Feature Requests

Have an idea for a new brainrot term, subtype, or quiz question? Send it along. I cannot promise to implement every suggestion, but I keep a running list and prioritize based on what would help the most users.`,
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

Nothing on this site is a medical diagnosis. The subtypes are jokes about internet culture. If you are experiencing genuine cognitive difficulties, memory problems, attention issues, or any other health concerns, PLEASE CONSULT A QUALIFIED HEALTHCARE PROFESSIONAL. The content here is not a substitute for professional medical evaluation or treatment.

### NO MEDICAL ADVICE

The content on this site is not medical advice. The "prescriptions" are common-sense wellness tips (touch grass, reduce screen time, talk to people) wrapped in satirical medical packaging. They are not medical recommendations, treatment plans, or clinical guidance. Nothing here should be interpreted as a recommendation to start, stop, or change any health-related behavior.

### NO LIABILITY

We are not liable for any decisions made based on the content of this site. The Rot Score is a satirical number assigned to fictional categories. It has no clinical significance, no diagnostic value, and no relationship to actual cognitive health. You are solely responsible for how you interpret and act on the content presented here.

### Contact

If you have questions about this disclaimer, please contact us at support@csskey.com.`,
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
  const routePath = page === 'terms' ? 'legal-terms' : page
  const pageDescription = info.content.substring(0, 155).replace(/\n/g, ' ').replace(/[#*]/g, '').trim()

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
      <Helmet>
        <title>{info.title} - Rot Report</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={`${info.title} - Rot Report`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`https://rot.csskey.com/${routePath}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: `${info.title} - Rot Report`, description: pageDescription, url: `https://rot.csskey.com/${routePath}` }) }} />
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
