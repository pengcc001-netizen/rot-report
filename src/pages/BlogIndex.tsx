import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import Ad from '../components/Ad'

export default function BlogIndex() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>Blog - Brain Rot Guides & Culture | Rot Report</title>
        <meta name="description" content={`Articles about brain rot culture, recovery strategies, and internet trends. ${blogPosts.length} guides covering brain rot, Skibidi Toilet, Italian Brainrot, and more.`} />
        <meta property="og:title" content="Blog - Brain Rot Guides & Culture" />
        <meta property="og:description" content={`Articles about brain rot culture. ${blogPosts.length} guides.`} />
        <meta property="og:url" content="https://rot.csskey.com/blog" />
      </Helmet>

      <div className="terminal-label" style={{ marginBottom: 8 }}>{'> ARCHIVE'}</div>
      <h1 className="mono" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, marginBottom: 12, color: 'var(--green)' }}>
        Articles & Guides
      </h1>
      <p className="mono" style={{ color: 'var(--text-soft)', fontSize: 13, lineHeight: 1.7, maxWidth: 560, marginBottom: 24 }}>
        Deep dives into brain rot culture, recovery strategies, and the internet trends that consumed a generation.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
        {blogPosts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <article className="terminal-card" style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <span className="chip chip-green">{post.category}</span>
                <span className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', alignSelf: 'center' }}>{post.date}</span>
              </div>
              <h2 className="mono" style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8, lineHeight: 1.3 }}>{post.title}</h2>
              <p className="mono" style={{ fontSize: 12, color: 'var(--text-soft)', lineHeight: 1.6 }}>{post.excerpt}</p>
              <div className="mono crt-green" style={{ fontSize: 11, marginTop: 8 }}>{'> READ MORE'}</div>
            </article>
          </Link>
        ))}
      </div>

      <Ad />
    </div>
  )
}
