/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — blog build tool
   ═══════════════════════════════════════════════════════════════════════
   Usage (run from the apps-site/ folder):

     node tools/build.js articles/my-new-article.js   → generate the 4 pages
                                                        of a new article AND
                                                        rebuild indexes/sitemap/
                                                        homepage blog row
     node tools/build.js                              → only rebuild indexes,
                                                        sitemap.xml and the
                                                        homepage blog row from
                                                        tools/articles.js

   Everything is driven by the catalogue in tools/articles.js (newest first).
   Existing article pages are never touched by an index rebuild.
   ═══════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');

const TOOLS = __dirname;
const ROOT = path.resolve(TOOLS, '..');           // apps-site/
const BLOG = path.join(ROOT, 'blog');
const BASE = 'https://kids-learning-hub.cc';
const OG_IMG = BASE + '/logos/og-share.png';
const TODAY = new Date().toISOString().slice(0, 10);

const CATALOGUE = require('./articles.js');

const LANGS = {
  en: { dir: 'ltr', folder: '',    ogl: 'en_US', home: 'Home',      blog: 'Blog',      back: 'All articles',        read: 'Read article →', faq: 'Frequently asked questions', keep: 'Keep reading', ad: 'Advertisement' },
  fr: { dir: 'ltr', folder: 'fr/', ogl: 'fr_FR', home: 'Accueil',   blog: 'Blog',      back: 'Tous les articles',   read: "Lire l'article →", faq: 'Questions fréquentes',       keep: 'À lire aussi', ad: 'Publicité' },
  es: { dir: 'ltr', folder: 'es/', ogl: 'es_ES', home: 'Inicio',    blog: 'Blog',      back: 'Todos los artículos', read: 'Leer artículo →', faq: 'Preguntas frecuentes',        keep: 'Sigue leyendo', ad: 'Publicidad' },
  ar: { dir: 'rtl', folder: 'ar/', ogl: 'ar_MA', home: 'الرئيسية', blog: 'المدوّنة', back: 'كل المقالات',          read: 'اقرأ المقال ←',   faq: 'أسئلة شائعة',                 keep: 'اقرأ أيضًا',   ad: 'إعلان' },
};
const ORDER = ['en', 'fr', 'es', 'ar'];

const INDEX_META = {
  en: { title: 'Blog — Kids Learning Hub | Learning tips, activities & guides',
        desc: 'Free, expert-written tips, activities and guides to help your child learn maths, science, coding and languages the fun way — by Kids Learning Hub.',
        h1: 'The Learning Blog',
        lede: 'Free tips, activities and guides to help your child learn maths, science, coding and languages — the fun way.' },
  fr: { title: "Blog — Kids Learning Hub | Conseils, activités et guides d'apprentissage",
        desc: 'Conseils, activités et guides gratuits pour aider votre enfant à apprendre les maths, les sciences, le codage et les langues — par Kids Learning Hub.',
        h1: "Le blog d'apprentissage",
        lede: "Conseils, activités et guides gratuits pour aider votre enfant à apprendre les maths, les sciences, le codage et les langues — en s'amusant." },
  es: { title: 'Blog — Kids Learning Hub | Consejos, actividades y guías de aprendizaje',
        desc: 'Consejos, actividades y guías gratis para que tu hijo aprenda matemáticas, ciencias, programación e idiomas jugando — de Kids Learning Hub.',
        h1: 'El blog de aprendizaje',
        lede: 'Consejos, actividades y guías gratis para ayudar a tu hijo a aprender matemáticas, ciencias, programación e idiomas — jugando.' },
  ar: { title: 'المدوّنة — Kids Learning Hub | نصائح وأنشطة وأدلّة تعليمية',
        desc: 'نصائح وأنشطة وأدلّة مجانية لمساعدة طفلك على تعلّم الرياضيات والعلوم والبرمجة واللغات بالمرح — من فريق Kids Learning Hub.',
        h1: 'مدوّنة التعلّم',
        lede: 'نصائح وأنشطة وأدلّة مجانية لمساعدة طفلك على تعلّم الرياضيات والعلوم والبرمجة واللغات — بالمرح.' },
};

/* ── helpers ─────────────────────────────────────────────────────────── */
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripTags = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const decode = s => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
function truncate(s, n) {
  if (s.length <= n) return s;
  const cut = s.slice(0, n);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[،,;:.\s]+$/, '') + '…';
}
function urlOf(slug, lang) { return BASE + '/blog/' + LANGS[lang].folder + (slug ? slug + '.html' : ''); }
function relLink(fromLang, toLang, slug) {
  const file = slug ? slug + '.html' : '';
  if (fromLang === toLang) return file || './';
  if (fromLang === 'en') return LANGS[toLang].folder + (file || '');
  if (toLang === 'en') return '../' + (file || '');
  return '../' + LANGS[toLang].folder + (file || '');
}
function hreflangBlock(slug, self) {
  let out = '';
  for (const l of ORDER) out += `<link rel="alternate" hreflang="${l}" href="${urlOf(slug, l)}" />\n`;
  out += `<link rel="alternate" hreflang="x-default" href="${urlOf(slug, 'en')}" />\n`;
  return `<link rel="canonical" href="${self}" />\n` + out;
}
function langRedirect(lang, slug) {
  if (lang !== 'en') return '';
  const target = slug ? `+ '/' + ${JSON.stringify(slug + '.html')}` : `+ '/'`;
  return `<script>(function(){var m=location.search.match(/[?&]lang=(fr|es|ar)(?:&|$)/);if(m)location.replace(m[1]${target});})();</script>\n`;
}
function header(lang, slug) {
  const root = lang === 'en' ? '../' : '../../';
  const links = ORDER.map(l =>
    `<a data-l="${l}"${l === lang ? ' class="active" aria-current="page"' : ''} href="${relLink(lang, l, slug)}" hreflang="${l}">${l.toUpperCase()}</a>`).join('\n        ');
  return `<header class="top">
  <div class="top-in">
    <a class="brand" href="${root}index.html"><img src="${root}logos/hub-logo.png" alt="Kids Learning Hub"><span><i>Kids</i> Learning Hub</span></a>
    <div class="top-actions">
      <div class="langsw" role="group" aria-label="Language">
        ${links}
      </div>
      <button class="icon-btn" aria-label="Dark mode" onclick="(function(){var r=document.documentElement,d=r.getAttribute('data-theme')==='dark'?'light':'dark';r.setAttribute('data-theme',d);try{localStorage.setItem('vsm_theme',d)}catch(e){}})()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>
      </button>
    </div>
  </div>
</header>`;
}
function footer(lang) {
  const L = LANGS[lang];
  const root = lang === 'en' ? '../' : '../../';
  return `<footer class="foot">
  <div class="fb">Kids Learning Hub</div>
  <div style="opacity:.8">by VS MEDIA · <a href="${root}index.html">${L.home}</a> · <a href="${root}privacy.html">Privacy</a></div>
  <div style="opacity:.6;margin-top:6px">© 2026 Ayyoub EL HAJJI</div>
</footer>`;
}
function headCommon(lang, opts) {
  const L = LANGS[lang];
  const root = lang === 'en' ? '../' : '../../';
  const blogRoot = lang === 'en' ? '' : '../';
  return `<!DOCTYPE html>
<html lang="${lang}" dir="${L.dir}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${opts.title}</title>
<meta name="description" content="${esc(opts.desc)}" />
${hreflangBlock(opts.slug, opts.self)}${langRedirect(lang, opts.slug)}<meta name="theme-color" content="#1E5BFF" />
<link rel="icon" href="${root}logos/hub-logo.png" />

<meta property="og:type" content="${opts.slug ? 'article' : 'website'}" />
<meta property="og:site_name" content="Kids Learning Hub" />
<meta property="og:url" content="${opts.self}" />
<meta property="og:title" content="${opts.ogTitle}" />
<meta property="og:description" content="${esc(opts.desc)}" />
<meta property="og:image" content="${OG_IMG}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Kids Learning Hub" />
<meta property="og:locale" content="${L.ogl}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${opts.ogTitle}" />
<meta name="twitter:description" content="${esc(opts.desc)}" />
<meta name="twitter:image" content="${OG_IMG}" />

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9202119066805107" crossorigin="anonymous"></script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${blogRoot}article.css" />

${opts.jsonld.map(o => `<script type="application/ld+json">\n${JSON.stringify(o)}\n</script>`).join('\n')}
</head>
<body>
`;
}
function pcard(art, lang) {
  const L = LANGS[lang];
  return `    <a class="pcard" href="${art.slug}.html">
      <div class="cover" style="background:${art.grad}">${art.emoji}</div>
      <div class="body">
        <span class="tag ${art.tagClass}" style="align-self:flex-start">${art.tagL[lang]}</span>
        <h3>${art.cardTitle[lang]}</h3>
        <p>${art.excerpt[lang]}</p>
        <span class="read">${L.read}</span>
      </div>
    </a>`;
}
function faqSection(faq, lang) {
  const L = LANGS[lang];
  const items = faq[lang].map(([q, a]) =>
    `    <details class="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n');
  return `\n    <h2>${L.faq}</h2>\n${items}\n`;
}

/* ── 1 · generate pages for any content files passed on the CLI ─────── */
const contentFiles = process.argv.slice(2);
for (const cf of contentFiles) {
  const art = require(path.resolve(TOOLS, cf));
  const cat = CATALOGUE.find(c => c.slug === art.slug);
  if (!cat) { console.error(`✗ "${art.slug}" is not in tools/articles.js — add its catalogue entry first (at the top).`); process.exit(1); }
  for (const k of ['dataTitle', 'body', 'faq']) for (const l of ORDER) {
    if (!art[k] || !art[k][l]) { console.error(`✗ ${art.slug}: missing ${k}.${l}`); process.exit(1); }
  }
  const idx = CATALOGUE.indexOf(cat);
  const related = [CATALOGUE[(idx + 1) % CATALOGUE.length], CATALOGUE[(idx + 2) % CATALOGUE.length]];

  for (const lang of ORDER) {
    const L = LANGS[lang];
    const self = urlOf(art.slug, lang);
    let content = art.body[lang];
    if (lang !== 'en') content = content.replace(/(["'(])\.\.\//g, '$1../../');
    const ledeM = content.match(/<p class="lede">([\s\S]*?)<\/p>/);
    if (!ledeM) { console.error(`✗ ${art.slug} (${lang}): body has no <p class="lede"> paragraph`); process.exit(1); }
    const desc = truncate(stripTags(ledeM[1]), 158);
    const h1 = stripTags((content.match(/<h1>([\s\S]*?)<\/h1>/) || [, cat.cardTitle[lang]])[1]);
    const jsonld = [
      { '@context': 'https://schema.org', '@type': 'Article',
        headline: h1, description: desc, image: OG_IMG,
        author: { '@type': 'Organization', name: 'VS MEDIA' },
        publisher: { '@type': 'Organization', name: 'Kids Learning Hub',
          logo: { '@type': 'ImageObject', url: BASE + '/logos/hub-logo.png' } },
        datePublished: art.date, dateModified: TODAY,
        mainEntityOfPage: self, inLanguage: lang },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: L.home, item: BASE + '/' },
          { '@type': 'ListItem', position: 2, name: L.blog, item: urlOf('', lang) },
          { '@type': 'ListItem', position: 3, name: decode(cat.cardTitle[lang]), item: self }] },
      { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang,
        mainEntity: art.faq[lang].map(([q, a]) => (
          { '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ];
    const page = headCommon(lang, { slug: art.slug, self, title: art.dataTitle[lang], ogTitle: esc(decode(cat.cardTitle[lang])), desc, jsonld })
      + header(lang, art.slug) + `

<div class="wrap">
  <p class="crumbs"><a href="${lang === 'en' ? '../' : '../../'}index.html">${L.home}</a> › <a href="index.html">${L.blog}</a> › ${cat.tagL[lang]}</p>

  <article class="post">${content}${faqSection(art.faq, lang)}  </article>

  <div class="ad-slot"><div class="ad-label">${L.ad}</div><ins class="adsbygoogle" style="display:block;text-align:center" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-9202119066805107" data-ad-slot="1756272080"></ins></div>

  <div class="section-h"><h2>${L.keep}</h2></div>
  <div class="grid">
${related.map(r => pcard(r, lang)).join('\n')}
  </div>

  <p style="margin:28px 0 8px"><a class="backlink" href="index.html">← ${L.back}</a></p>
</div>

` + footer(lang) + `

<script src="${lang === 'en' ? '' : '../'}article.js"></script>
</body>
</html>
`;
    fs.mkdirSync(path.join(BLOG, L.folder), { recursive: true });
    fs.writeFileSync(path.join(BLOG, L.folder, art.slug + '.html'), page);
  }
  console.log(`✔ generated 4 pages for "${art.slug}"`);
}

/* ── 2 · regenerate the 4 blog index pages ───────────────────────────── */
for (const lang of ORDER) {
  const L = LANGS[lang];
  const M = INDEX_META[lang];
  const self = urlOf('', lang);
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'Blog', name: 'Kids Learning Hub Blog', url: self,
      publisher: { '@type': 'Organization', name: 'VS MEDIA',
        logo: { '@type': 'ImageObject', url: BASE + '/logos/hub-logo.png' } },
      inLanguage: lang },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: L.home, item: BASE + '/' },
        { '@type': 'ListItem', position: 2, name: L.blog, item: self }] },
  ];
  const page = headCommon(lang, { slug: '', self, title: M.title, ogTitle: esc(M.title), desc: M.desc, jsonld })
    + header(lang, '') + `

<div class="wrap wide">
  <p class="crumbs"><a href="${lang === 'en' ? '../' : '../../'}index.html">${L.home}</a> › ${L.blog}</p>

  <span class="tag tips">Kids Learning Hub</span>
  <h1 style="font-size:clamp(28px,5vw,44px);margin:14px 0 8px">${M.h1}</h1>
  <p class="lede" style="max-width:60ch">${M.lede}</p>

  <div class="grid" style="margin-top:24px">
${CATALOGUE.map(a => pcard(a, lang)).join('\n\n')}
  </div>
</div>

` + footer(lang) + `

<script src="${lang === 'en' ? '' : '../'}article.js"></script>
</body>
</html>
`;
  fs.writeFileSync(path.join(BLOG, L.folder, 'index.html'), page);
}
console.log('✔ rebuilt 4 blog index pages');

/* ── 3 · regenerate sitemap.xml ──────────────────────────────────────── */
/* stories/ section slugs (pages generated separately; listed here for the sitemap) */
const STORY_SLUGS = ['the-little-star', 'ziko-the-turtle', 'ant-and-the-rain'];
function urlOfIn(section, slug, lang) { return BASE + '/' + section + '/' + LANGS[lang].folder + (slug ? slug + '.html' : ''); }

function smEntry(slug, lang, changefreq, priority) {
  const alts = ORDER.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${urlOf(slug, l)}"/>`).join('\n')
    + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${urlOf(slug, 'en')}"/>`;
  return `  <url>
    <loc>${urlOf(slug, lang)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alts}
  </url>`;
}
function smEntryIn(section, slug, lang) {
  const alts = ORDER.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${urlOfIn(section, slug, l)}"/>`).join('\n')
    + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${urlOfIn(section, slug, 'en')}"/>`;
  return `  <url>
    <loc>${urlOfIn(section, slug, lang)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${lang === 'en' ? '0.7' : '0.6'}</priority>
${alts}
  </url>`;
}
let sm = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <url>
    <loc>${BASE}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

`;
for (const lang of ORDER) sm += smEntry('', lang, 'weekly', lang === 'en' ? '0.8' : '0.7') + '\n';
for (const art of CATALOGUE) for (const lang of ORDER) sm += smEntry(art.slug, lang, 'monthly', lang === 'en' ? '0.7' : '0.6') + '\n';
for (const lang of ORDER) sm += smEntryIn('stories', '', lang) + '\n';
for (const s of STORY_SLUGS) for (const lang of ORDER) sm += smEntryIn('stories', s, lang) + '\n';
for (const p of ['play/', 'play/times-tables.html', 'play/quick-count.html', 'play/word-match.html',
                 'play/clock-game.html', 'play/memory.html', 'play/capitals.html',
                 'worksheets/', 'worksheets/addition.html', 'worksheets/subtraction.html',
                 'worksheets/multiplication.html', 'worksheets/missing-number.html', 'worksheets/arabic-letters.html',
                 'worksheets/latin-letters.html', 'worksheets/numbers.html',
                 'worksheets/coloring.html', 'worksheets/coloring-letters.html',
                 'worksheets/certificates.html', 'worksheets/clock.html', 'worksheets/money.html',
                 'worksheets/tables-poster.html', 'worksheets/division.html', 'worksheets/compare-numbers.html',
                 'worksheets/maze.html', 'worksheets/shapes.html', 'worksheets/line-tracing.html', 'worksheets/sudoku.html',
                 'about.html']) {
  sm += `  <url>
    <loc>${BASE}/${p}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
}
sm += `  <url>
    <loc>${BASE}/privacy.html</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sm);
console.log(`✔ rebuilt sitemap.xml (${(sm.match(/<loc>/g) || []).length} URLs)`);

/* ── 4 · regenerate the homepage BLOG_POSTS block (between markers) ──── */
const idxPath = path.join(ROOT, 'index.html');
let idxHtml = fs.readFileSync(idxPath, 'utf8');
const BEGIN = '/* <BLOG_POSTS auto-generated by tools/build.js — edit tools/articles.js instead> */';
const END = '/* </BLOG_POSTS> */';
if (!idxHtml.includes(BEGIN) || !idxHtml.includes(END)) {
  console.error('✗ index.html is missing the BLOG_POSTS markers — homepage blog row NOT updated.');
} else {
  const js = str => "'" + String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
  const entries = CATALOGUE.map(a =>
    `  {slug:${js(a.slug)}, emoji:${js(a.emoji)}, grad:${js(a.grad)}, tagColor:${js(a.tagColor)},\n` +
    `   tagL:{en:${js(a.tagL.en)},fr:${js(a.tagL.fr)},es:${js(a.tagL.es)},ar:${js(a.tagL.ar)}},\n` +
    `   title:{en:${js(decode(a.cardTitle.en))},fr:${js(decode(a.cardTitle.fr))},es:${js(decode(a.cardTitle.es))},ar:${js(decode(a.cardTitle.ar))}},\n` +
    `   ex:{en:${js(a.excerpt.en)},fr:${js(a.excerpt.fr)},es:${js(a.excerpt.es)},ar:${js(a.excerpt.ar)}}},`).join('\n');
  const block = `${BEGIN}\nconst BLOG_POSTS = [\n${entries}\n];\n${END}`;
  idxHtml = idxHtml.slice(0, idxHtml.indexOf(BEGIN)) + block + idxHtml.slice(idxHtml.indexOf(END) + END.length);
  fs.writeFileSync(idxPath, idxHtml);
  console.log('✔ rebuilt homepage BLOG_POSTS row');
}

console.log('\nDone. Preview locally, then commit & push apps-site/ to publish.');
