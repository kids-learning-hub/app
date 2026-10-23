/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — keep thin pages out of Google's index
   ═══════════════════════════════════════════════════════════════════════
   Usage (from apps-site/):

     node tools/build-quality.js            (last step of build-all.js)
     node tools/build-quality.js --report   (only print the list)

   AdSense rejected the site for "low-value content" (Oct 2026). Google
   judges the whole site, and many sheets/pages carry very little text in
   their static HTML (the useful part is drawn by JavaScript). Every page
   listed in sitemap.xml is measured; below MIN_WORDS it gets

     <meta name="robots" content="noindex, follow" data-klh="thin">

   and its <url> entry is removed from sitemap.xml. Visitors can still use
   it — it is simply not indexed. When a page later grows past the limit
   (e.g. a parents' guide is added), the tag is removed again on the next
   run. Pages that carry their own noindex (redirect stubs) are untouched.
   Hubs (URLs ending in "/") are never noindexed: they are navigation.
   ═══════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BASE = 'https://kids-learning-hub.cc/';
const MIN_WORDS = 200;
const REPORT_ONLY = process.argv.includes('--report');
const THIN_TAG = '<meta name="robots" content="noindex, follow" data-klh="thin">';
const THIN_RE = /\s*<meta name="robots" content="noindex, follow" data-klh="thin">/;

const fileOf = loc => {
  const rel = loc.slice(BASE.length);
  return path.join(ROOT, rel === '' || rel.endsWith('/') ? rel + 'index.html' : rel);
};

/* visible words a crawler sees without running JavaScript */
function staticWords(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ');
  return text.split(/\s+/).filter(w => w.length > 1).length;
}

const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

/* pages tagged on an earlier run are no longer in the sitemap — find them too */
const tagged = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'tools' || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html') && THIN_RE.test(fs.readFileSync(p, 'utf8'))) tagged.push(p);
  }
})(ROOT);

const thin = [], restored = [];
const seen = new Set();
for (const file of [...locs.map(fileOf), ...tagged]) {
  if (seen.has(file) || !fs.existsSync(file)) continue;
  seen.add(file);
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  if (rel.endsWith('index.html')) continue;
  let html = fs.readFileSync(file, 'utf8');
  const wasThin = THIN_RE.test(html);
  html = html.replace(THIN_RE, '');
  if (/<meta[^>]+name="robots"[^>]+noindex/i.test(html)) continue;     // own noindex (redirect stub)
  const words = staticWords(html);
  if (words < MIN_WORDS) {
    thin.push([words, rel]);
    if (!REPORT_ONLY && !wasThin) fs.writeFileSync(file, html.replace(/<head>/i, '<head>\n' + THIN_TAG));
  } else if (wasThin) {
    restored.push([words, rel]);
    if (!REPORT_ONLY) fs.writeFileSync(file, html);
  }
}

thin.sort((a, b) => a[0] - b[0]);
console.log(`Pages under ${MIN_WORDS} static words (noindex, out of the sitemap): ${thin.length}`);
for (const [w, rel] of thin) console.log(`  ${String(w).padStart(4)}  ${rel}`);
if (restored.length) {
  console.log(`Back above the limit (re-indexed): ${restored.length}`);
  for (const [w, rel] of restored) console.log(`  ${String(w).padStart(4)}  ${rel}`);
}

if (!REPORT_ONLY) {
  const thinUrls = new Set(thin.map(([, rel]) => BASE + rel));
  const before = locs.length;
  sm = sm.replace(/[ \t]*<url>\s*<loc>([^<]+)<\/loc>[\s\S]*?<\/url>\n?/g, (block, loc) => thinUrls.has(loc) ? '' : block);
  fs.writeFileSync(smPath, sm);
  console.log(`✔ sitemap.xml: ${before} → ${(sm.match(/<loc>/g) || []).length} URLs`);
}
