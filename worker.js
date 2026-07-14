// Valid route patterns for rot.csskey.com
const STATIC_PAGES = new Set(['/', '/subtypes', '/terms', '/stages', '/leaderboard', '/blog', '/about', '/privacy', '/terms', '/contact', '/disclaimer']);

function isValidRoute(pathname) {
  if (STATIC_PAGES.has(pathname)) return true;
  if (/^\/subtypes\/[a-z0-9-]+$/.test(pathname)) return true;
  if (/^\/terms\/[a-z0-9-]+$/.test(pathname)) return true;
  if (/^\/stages\/[1-4]$/.test(pathname)) return true;
  if (/^\/blog\/[a-z0-9-]+$/.test(pathname)) return true;
  if (/^\/r\/[A-Za-z0-9_-]+$/.test(pathname)) return true;
  return false;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '') || '/';

    let response = await env.ASSETS.fetch(request);
    if (response.status === 404) {
      const indexRequest = new Request(new URL('/index.html', url.origin), {
        method: request.method, headers: request.headers,
      });
      response = await env.ASSETS.fetch(indexRequest);
    }

    const ct = response.headers.get('content-type') || '';
    if (!ct.includes('text/html')) return response;

    const html = await response.text();
    const canonical = url.origin + path;
    const valid = isValidRoute(path);
    const statusCode = valid ? 200 : 404;

    let cleaned = html
      .replace(/<link[^>]*rel=["']canonical["'][^>]*\/?>/gi, '')
      .replace('</head>', '  <link rel="canonical" href="' + canonical + '" />\n</head>');

    const noindex = !valid || path.startsWith('/r/');
    if (noindex) {
      cleaned = cleaned
        .replace(/<meta name="robots" content="[^"]*"/i, '<meta name="robots" content="noindex,nofollow"');
      if (!cleaned.includes('name="robots" content="noindex')) {
        cleaned = cleaned.replace('</head>', '  <meta name="robots" content="noindex,nofollow" />\n</head>');
      }
    }

    return new Response(cleaned, { status: statusCode, headers: response.headers });
  },
};
