import { Helmet } from "react-helmet-async"
import { useParams, Link } from "react-router-dom"
import { brainrotTerms } from "../data/brainrotTerms"
import Ad from "../components/Ad"
import ShareButtons from "../components/ShareButtons"

const TIER_LABELS: Record<number, string> = {
  1: "Mainstream",
  2: "Moderate",
  3: "Deep Lore",
  4: "Italian Brainrot",
}

const TIER_CHIP: Record<number, string> = {
  1: "chip-green",
  2: "chip-green",
  3: "chip-red",
  4: "chip-amber",
}

export default function TermDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const term = brainrotTerms.find(t => t.slug === slug)
  if (!term) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /><title>404 - Not Found | Rot Report</title></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const url = `https://rot.csskey.com/terms/${term.slug}`
  const related = brainrotTerms
    .filter(t => t.tier === term.tier && t.slug !== term.slug)
    .slice(0, 8)

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: "0 auto" }}>
      <Helmet>
        <title>{`${term.term} —Brainrot Term Definition | Rot Report`}</title>
        <meta
          name="description"
          content={`${term.term}: ${term.definition} Tier ${term.tier} (${TIER_LABELS[term.tier]}). Example: ${term.example}. Satire only.`}
        />
        <meta property="og:title" content={`${term.term} —Brainrot Term Definition`} />
        <meta property="og:description" content={term.definition} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Terms", "item": "https://rot.csskey.com/terms" },
            { "@type": "ListItem", "position": 2, "name": term.term, "item": url },
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${term.term} —Brainrot Term`,
          "description": term.definition,
          "url": url,
          "author": { "@type": "Person", "name": "Dev Patel" },
          "publisher": { "@type": "Organization", "name": "Rot Report" },
          "datePublished": "2026-07-01",
          "mainEntityOfPage": url,
        })}</script>
      </Helmet>

      <div style={{ marginBottom: 20 }}>
        <Link to="/terms" className="mono" style={{ color: "var(--text-faint)", fontSize: 12 }}>{"< ALL TERMS"}</Link>
      </div>

      {/* Header */}
      <div className="terminal-card" style={{ padding: "28px 24px", marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
          <h1 className="mono crt-green" style={{ fontSize: "1.75rem", fontWeight: 700 }}>{term.term}</h1>
          <span className={`chip ${TIER_CHIP[term.tier]}`} style={{ flexShrink: 0 }}>T{term.tier}</span>
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--text-faint)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {`TIER ${term.tier} —${TIER_LABELS[term.tier]}`}
        </div>
      </div>

      {/* Definition */}
      <article className="prose" style={{ marginBottom: 24 }}>
        <h2 className="terminal-label" style={{ marginBottom: 12 }}>{"> TERM DEFINITION"}</h2>
        <p className="dropcap mono" style={{ fontSize: 14, lineHeight: 1.8, color: "var(--text)", textAlign: "justify", hyphens: "auto" }}>
          {term.definition}
        </p>
      </article>

      {/* Analysis */}
      {term.analysis && (
        <article className="prose" style={{ marginBottom: 24 }}>
          <h2 className="terminal-label" style={{ marginBottom: 12 }}>{"> CULTURAL ANALYSIS"}</h2>
          {term.analysis.split("\n\n").map((para, i) => (
            <p key={i} className={i === 0 ? "dropcap" : ""} style={{
              fontSize: 14,
              lineHeight: 1.8,
              color: "var(--text)",
              margin: "12px 0",
              fontFamily: "var(--font-body)",
              textAlign: "justify",
              hyphens: "auto",
            }}>
              {para}
            </p>
          ))}
        </article>
      )}

      {/* Example */}
      <div className="terminal-card" style={{ padding: "20px 24px", marginBottom: 24 }}>
        <h2 className="terminal-label" style={{ marginBottom: 10 }}>{"> USAGE EXAMPLE"}</h2>
        <p className="mono" style={{ fontSize: 13, color: "var(--text)", padding: "4px 0", paddingLeft: 16, fontStyle: "italic" }}>
          <span className="crt-amber">{"> "}</span>{term.example}
        </p>
      </div>

      <div className="warning-box" style={{ marginBottom: 24 }}>
        <strong className="crt-amber">[!] REMINDER:</strong> This is a satirical dictionary entry about internet culture, not a real medical or academic term. Please touch grass responsibly.
      </div>

      <Ad />

      <div style={{ marginBottom: 32 }}>
        <ShareButtons url={url} title={`${term.term} —Brainrot Term (Tier ${term.tier})`} />
      </div>

      {/* Related terms */}
      {related.length > 0 && (
        <div className="terminal-card" style={{ padding: "20px 24px", marginBottom: 24 }}>
          <h2 className="terminal-label" style={{ marginBottom: 12 }}>{"> RELATED TERMS"}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {related.map(r => (
              <Link
                key={r.slug}
                to={`/terms/${r.slug}`}
                className="mono"
                style={{ fontSize: 13, color: "var(--text-soft)", padding: "6px 0", paddingLeft: 16, textDecoration: "none" }}
              >
                <span className="crt-green">{"> "}</span>{r.term}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
        <Link to="/terms" className="btn btn-ghost" style={{ fontSize: 11 }}>{"< ALL TERMS"}</Link>
        <Link to="/" className="btn btn-terminal" style={{ fontSize: 11 }}>{"> TAKE ASSESSMENT"}</Link>
      </div>
    </div>
  )
}
