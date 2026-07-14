export default function Ad() {
  return (
    <div style={{ margin: '32px 0', textAlign: 'center', padding: '16px', background: 'var(--bg-terminal)', border: '1px dashed var(--border)' }}>
      <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-1755176881902430" data-ad-slot="1234567890" data-ad-format="auto" data-full-width-responsive="true" />
      <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }} />
    </div>
  )
}
