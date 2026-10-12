/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — one-off cleanup (2026-10): merge duplicate articles
   ═══════════════════════════════════════════════════════════════════════
   AdSense rejected the site for "low value content": ~30 near-duplicate
   articles were published within a few days. This script folds each
   duplicate into the strongest article on the same topic:

   - removes the duplicate from tools/articles.js
   - moves its content file to tools/articles/_merged/
   - replaces its 4 pages with redirect stubs (noindex + canonical +
     instant refresh) so old links and Google keep working
   - rebuilds the "Keep reading" cards in every remaining article

   Then run:  node tools/build-all.js   (indexes, sitemap, homepages)
   ═══════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');

const TOOLS = __dirname;
const ROOT = path.resolve(TOOLS, '..');
const BLOG = path.join(ROOT, 'blog');
const BASE = 'https://kids-learning-hub.cc';
const FOLDERS = { en: '', fr: 'fr/', es: 'es/', ar: 'ar/' };
const KEEP = { en: 'Keep reading', fr: 'À lire aussi', es: 'Sigue leyendo', ar: 'اقرأ أيضًا' };
const READ = { en: 'Read article →', fr: "Lire l'article →", es: 'Leer artículo →', ar: 'اقرأ المقال ←' };

/* duplicate → article it is merged into */
const MERGE = {
  'emotional-intelligence-in-early-learning': 'developing-emotional-intelligence-in-kids',
  'overcoming-math-anxiety-kids':             'overcoming-math-anxiety-in-kids',
  'fostering-scientific-curiosity-kids':      'raising-young-scientists-secrets',
  'developing-scientific-curiosity-in-kids':  'raising-young-scientists-secrets',
  'diy-home-science-experiments':             'easy-science-experiments-for-kids',
  'smart-screen-time-for-kids':               'screen-time-safe-apps-for-kids',
  'screen-time-guide-for-parents':            'screen-time-safe-apps-for-kids',
  'teaching-coding-kids-home':                'coding-for-kids-when-to-start',
  'teaching-kids-coding-logic':               'fostering-computational-thinking-kids',
  'mastering-languages-early-childhood':      'best-age-to-learn-a-language',
  'child-language-acquisition-secrets':       'kids-language-learning-secrets',
  'math-games-primary':                       'math-games-for-kids',
  'building-working-memory-and-focus':        'boosting-child-focus-and-attention',
};

/* 1 · catalogue: drop the duplicate entries (each entry is a top-level { … } block) */
const catPath = path.join(TOOLS, 'articles.js');
let cat = fs.readFileSync(catPath, 'utf8');
for (const slug of Object.keys(MERGE)) {
  const re = new RegExp(`\\n  \\{\\n    slug: '${slug}',[\\s\\S]*?\\n  \\},`);
  if (re.test(cat)) cat = cat.replace(re, '');
  else console.warn(`  (catalogue entry not found: ${slug})`);
}
fs.writeFileSync(catPath, cat);
delete require.cache[require.resolve(catPath)];
const CATALOGUE = require(catPath);
for (const slug of Object.keys(MERGE)) {
  if (CATALOGUE.some(a => a.slug === slug)) throw new Error('still in catalogue: ' + slug);
  if (!CATALOGUE.some(a => a.slug === MERGE[slug])) throw new Error('merge target missing: ' + MERGE[slug]);
}
console.log(`✔ catalogue now has ${CATALOGUE.length} articles`);

/* 2 · move content files aside */
const merged = path.join(TOOLS, 'articles', '_merged');
fs.mkdirSync(merged, { recursive: true });
for (const slug of Object.keys(MERGE)) {
  const f = path.join(TOOLS, 'articles', slug + '.js');
  if (fs.existsSync(f)) fs.renameSync(f, path.join(merged, slug + '.js'));
}

/* 3 · redirect stubs */
for (const [from, to] of Object.entries(MERGE)) {
  for (const [lang, folder] of Object.entries(FOLDERS)) {
    const url = `${BASE}/blog/${folder}${to}.html`;
    fs.writeFileSync(path.join(BLOG, folder, from + '.html'), `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8" />
<title>Kids Learning Hub</title>
<meta name="robots" content="noindex, follow" />
<link rel="canonical" href="${url}" />
<meta http-equiv="refresh" content="0; url=${to}.html" />
<script>location.replace(${JSON.stringify(to + '.html')} + location.hash);</script>
</head>
<body><p><a href="${to}.html">${url}</a></p></body>
</html>
`);
  }
}
console.log(`✔ wrote ${Object.keys(MERGE).length * 4} redirect stubs`);

/* 4 · rebuild "Keep reading" cards in remaining articles */
function pcard(art, lang) {
  return `    <a class="pcard" href="${art.slug}.html">
      <div class="cover" style="background:${art.grad}">${art.emoji}</div>
      <div class="body">
        <span class="tag ${art.tagClass}" style="align-self:flex-start">${art.tagL[lang]}</span>
        <h3>${art.cardTitle[lang]}</h3>
        <p>${art.excerpt[lang]}</p>
        <span class="read">${READ[lang]}</span>
      </div>
    </a>`;
}
let fixed = 0;
CATALOGUE.forEach((art, idx) => {
  const related = [CATALOGUE[(idx + 1) % CATALOGUE.length], CATALOGUE[(idx + 2) % CATALOGUE.length]];
  for (const [lang, folder] of Object.entries(FOLDERS)) {
    const f = path.join(BLOG, folder, art.slug + '.html');
    if (!fs.existsSync(f)) continue;
    const html = fs.readFileSync(f, 'utf8');
    if (!Object.keys(MERGE).some(s => html.includes(s + '.html'))) continue;
    const re = new RegExp(`(<div class="section-h"><h2>${KEEP[lang]}</h2></div>\\s*<div class="grid">\\r?\\n)[\\s\\S]*?(\\r?\\n  </div>\\r?\\n)`);
    if (!re.test(html)) { console.warn(`  (no Keep-reading grid in ${folder}${art.slug}.html)`); continue; }
    fs.writeFileSync(f, html.replace(re, (_, a, b) => a + related.map(r => pcard(r, lang)).join('\n') + b));
    fixed++;
  }
});
console.log(`✔ refreshed Keep-reading cards in ${fixed} pages`);
