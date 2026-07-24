#!/usr/bin/env node
/**
 * IndexNow URL Submission Script
 * 
 * Reads sitemap.xml from each site, extracts URLs, and submits them
 * to the IndexNow API for faster Bing/Yandex discovery.
 * 
 * Usage: node scripts/submit-indexnow.mjs [--domain <domain>]
 * 
 * If no --domain specified, submits for all 26 sites.
 */

const INDEXNOW_KEY = '7517a6ed60632155180920c1618c00e9'
const INDEXNOW_KEY_LOCATION = 'https://[DOMAIN]/7517a6ed60632155180920c1618c00e9.txt'

const SITES = [
  'https://csskey.com',
  'https://js.csskey.com',
  'https://python.csskey.com',
  'https://sql.csskey.com',
  'https://linux.csskey.com',
  'https://html.csskey.com',
  'https://emoji.csskey.com',
  'https://mix.csskey.com',
  'https://ai.csskey.com',
  'https://font.csskey.com',
  'https://calc.csskey.com',
  'https://quiz.csskey.com',
  'https://curious.csskey.com',
  'https://wyr.csskey.com',
  'https://spark.csskey.com',
  'https://words.csskey.com',
  'https://brand.csskey.com',
  'https://rot.csskey.com',
  'https://draw.csskey.com',
  'https://aura.csskey.com',
  'https://receipt.csskey.com',
  'https://prompt.csskey.com',
  'https://vibes.csskey.com',
  'https://squad.csskey.com',
  'https://lore.csskey.com',
  'https://tools.aiprh.com',
]

async function fetchSitemapUrls(baseUrl) {
  try {
    const res = await fetch(`${baseUrl}/sitemap.xml`)
    if (!res.ok) {
      console.error(`  ✗ Failed to fetch sitemap: ${res.status}`)
      return []
    }
    const text = await res.text()
    const urls = []
    const regex = /<loc>([^<]+)<\/loc>/g
    let match
    while ((match = regex.exec(text)) !== null) {
      urls.push(match[1])
    }
    return urls
  } catch (err) {
    console.error(`  ✗ Error fetching sitemap: ${err.message}`)
    return []
  }
}

async function submitToIndexNow(urls, domain) {
  if (urls.length === 0) {
    console.log('  No URLs to submit')
    return
  }

  // IndexNow API accepts max 10,000 URLs per request
  const batchSize = 10000
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize)
    
    try {
      const res = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          host: domain.replace('https://', ''),
          key: INDEXNOW_KEY,
          keyLocation: `${domain}/${INDEXNOW_KEY}`,
          urlList: batch,
        }),
      })

      if (res.ok) {
        console.log(`  ✓ Submitted ${batch.length} URLs (HTTP ${res.status})`)
      } else if (res.status === 422) {
        console.log(`  ⚠ Key not verified yet (HTTP 422). Key file must be accessible at ${domain}/${INDEXNOW_KEY}`)
      } else {
        console.log(`  ✗ Failed (HTTP ${res.status}): ${await res.text()}`)
      }
    } catch (err) {
      console.error(`  ✗ Error: ${err.message}`)
    }
  }
}

async function main() {
  const args = process.argv.slice(2)
  let targetDomain = null
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--domain' && args[i + 1]) {
      targetDomain = args[i + 1]
      i++
    }
  }

  const sites = targetDomain 
    ? SITES.filter(s => s.includes(targetDomain))
    : SITES

  console.log(`IndexNow submission for ${sites.length} site(s)\n`)

  for (const site of sites) {
    console.log(`\n📋 ${site}`)
    
    // Fetch URLs from sitemap
    const urls = await fetchSitemapUrls(site)
    console.log(`  Found ${urls.length} URLs in sitemap`)
    
    if (urls.length === 0) {
      // At minimum, submit the homepage
      console.log(`  Submitting homepage only`)
      await submitToIndexNow([site], site)
    } else {
      await submitToIndexNow(urls, site)
    }
  }

  console.log('\n✅ Done! IndexNow will process submitted URLs within hours.')
  console.log('\nNote: Make sure the key file is accessible at:')
  console.log(`  https://[your-domain]/${INDEXNOW_KEY}`)
}

main()
