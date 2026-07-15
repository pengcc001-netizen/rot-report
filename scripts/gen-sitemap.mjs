import fs from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const base = 'https://rot.csskey.com'
const today = new Date().toISOString().split('T')[0]

const subtypesData = fs.readFileSync(resolve(root, 'src', 'data', 'rotSubtypes.ts'), 'utf8')
const subtypeSlugs = [...subtypesData.matchAll(/slug: "([a-z0-9-]+)"/g)].map(m => m[1])

const blogData = fs.readFileSync(resolve(root, 'src', 'data', 'blog.ts'), 'utf8')
const blogSlugs = [...new Set([...blogData.matchAll(/slug: "([a-z0-9-]+)"/g)].map(m => m[1]))]

const termsData = fs.readFileSync(resolve(root, 'src', 'data', 'brainrotTerms.ts'), 'utf8')
const termSlugs = [...new Set([...termsData.matchAll(/slug: "([a-z0-9-]+)"/g)].map(m => m[1]))]

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
const add = (p, pri) => { xml += `  <url><loc>${base}${p}</loc><lastmod>${today}</lastmod><priority>${pri}</priority></url>\n` }

add('/', 1.0)
add('/subtypes', 0.9)
add('/terms', 0.8)
add('/stages', 0.8)
add('/leaderboard', 0.7)
add('/blog', 0.8)
add('/about', 0.5)
add('/privacy', 0.3)
add('/legal-terms', 0.3)
add('/contact', 0.5)
add('/disclaimer', 0.5)

for (const slug of subtypeSlugs) add(`/subtypes/${slug}`, 0.8)
for (const slug of blogSlugs) add(`/blog/${slug}`, 0.7)
for (const slug of termSlugs) add(`/terms/${slug}`, 0.7)

xml += '</urlset>\n'

fs.writeFileSync(resolve(root, 'public', 'sitemap.xml'), xml, 'utf8')
try { fs.writeFileSync(resolve(root, 'dist', 'sitemap.xml'), xml, 'utf8') } catch {}
console.log(`Sitemap: ${11 + subtypeSlugs.length + blogSlugs.length + termSlugs.length} URLs (${subtypeSlugs.length} subtypes, ${blogSlugs.length} blog, ${termSlugs.length} terms)`)
