/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — static language pages
   ═══════════════════════════════════════════════════════════════════════
   Usage (run from the apps-site/ folder):

     node tools/build-langs.js

   WHY THIS EXISTS
   ───────────────
   index.html, about.html, privacy.html, play/ and worksheets/ each serve
   all four languages from ONE url via ?lang=. That is fine for humans but
   invisible to Google: hreflang annotations pointing at ?lang=fr are
   discarded, because those urls canonicalise back to the bare url.

   So this tool emits a real, separately-addressable page per language:

       /fr/            /es/            /ar/            (homepage)
       /fr/about.html  …                               (about)
       /fr/privacy.html …                              (privacy)
       /play/fr/       …                               (games)
       /worksheets/fr/ …                               (worksheets)

   Each copy gets its own <html lang>, dir, title, description, canonical
   and a full hreflang set — the signals Google actually reads — and forces
   the client-side renderer into that language on load.

   SAFETY REQUIREMENT
   ──────────────────
   Source pages must reference internal assets with ABSOLUTE paths
   ("/logos/x.png", not "logos/x.png"), otherwise a copy living one level
   deeper resolves them wrongly. The tool verifies this and refuses to
   write a page that would break. index.html was converted for this.
   ═══════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BASE = 'https://kids-learning-hub.cc';
const LANGS = ['en', 'fr', 'es', 'ar'];
const DIR = { en: 'ltr', fr: 'ltr', es: 'ltr', ar: 'rtl' };

/* Pages to localise.
   src      — source file, relative to apps-site/
   out(l)   — output path for language l
   url(l)   — public url for language l
   meta     — per-language <title> / description                          */
/* The homepage renders client-side and calls localizeMeta(), which
   overwrites <title> and the description from its own T dictionary. So the
   dictionary — not this file — is the source of truth for homepage meta.
   We read it straight out of index.html; hardcoding it here a second time
   would silently drift the moment someone edits the dictionary. */
function homepageMetaFromDictionary() {
  const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const titles = [...src.matchAll(/metaTitle:'((?:[^'\\]|\\.)*)'/g)].map(m => m[1]);
  const descs  = [...src.matchAll(/metaDesc:'((?:[^'\\]|\\.)*)'/g)].map(m => m[1]);
  if (titles.length !== LANGS.length || descs.length !== LANGS.length) {
    throw new Error(`index.html: expected ${LANGS.length} metaTitle/metaDesc pairs in the T ` +
                    `dictionary, found ${titles.length}/${descs.length}. ` +
                    `If the dictionary changed shape, update build-langs.js.`);
  }
  const out = {};
  LANGS.forEach((l, i) => { out[l] = { title: titles[i], desc: descs[i] }; });
  return out;   // dictionary order is en, fr, es, ar — same as LANGS
}

const PAGES = [
  {
    src: 'index.html',
    out: l => `${l}/index.html`,
    url: l => `${BASE}/${l}/`,
    urlEn: `${BASE}/`,
    meta: homepageMetaFromDictionary(),
  },
  {
    src: 'about.html',
    out: l => `${l}/about.html`,
    url: l => `${BASE}/${l}/about.html`,
    urlEn: `${BASE}/about.html`,
    meta: {
      fr: { title: "À propos — Le projet d'un professeur de mathématiques | Kids Learning Hub",
            desc: "Kids Learning Hub est créé par Ayyoub EL HAJJI, professeur de mathématiques au Maroc : 10 applis éducatives gratuites, fiches et jeux pour les 4–12 ans." },
      es: { title: 'Sobre nosotros — El proyecto de un profesor de matemáticas | Kids Learning Hub',
            desc: 'Kids Learning Hub lo crea Ayyoub EL HAJJI, profesor de matemáticas de Marruecos: 10 apps educativas gratis, fichas y juegos para niños de 4 a 12 años.' },
      ar: { title: 'من نحن — مشروع أستاذ رياضيات | Kids Learning Hub',
            desc: 'Kids Learning Hub من إنشاء أيوب الحاجي، أستاذ رياضيات من المغرب: 10 تطبيقات تعليمية مجانية وأوراق عمل وألعاب للأطفال من 4 إلى 12 سنة.' },
    },
  },
  {
    src: 'play/index.html',
    out: l => `play/${l}/index.html`,
    url: l => `${BASE}/play/${l}/`,
    urlEn: `${BASE}/play/`,
    meta: {
      fr: { title: 'Jeux éducatifs gratuits en ligne pour enfants | Kids Learning Hub',
            desc: 'Jeux éducatifs gratuits directement dans le navigateur : tables de multiplication, calcul, mémoire, vocabulaire et capitales. Sans téléchargement ni inscription.' },
      es: { title: 'Juegos educativos gratis online para niños | Kids Learning Hub',
            desc: 'Juegos educativos gratis en el navegador: tablas de multiplicar, cálculo, memoria, vocabulario y capitales. Sin descargas ni registro.' },
      ar: { title: 'ألعاب تعليمية مجانية للأطفال على الإنترنت | Kids Learning Hub',
            desc: 'ألعاب تعليمية مجانية تعمل في المتصفّح مباشرة: جداول الضرب والحساب والذاكرة والمفردات والعواصم. دون تحميل ودون تسجيل.' },
    },
  },
  {
    src: 'worksheets/index.html',
    out: l => `worksheets/${l}/index.html`,
    url: l => `${BASE}/worksheets/${l}/`,
    urlEn: `${BASE}/worksheets/`,
    meta: {
      fr: { title: 'Fiches gratuites à imprimer pour enfants (PDF A4) | Kids Learning Hub',
            desc: "Fiches gratuites à imprimer : addition, soustraction, tables, tracé de lettres, coloriages, labyrinthes et diplômes. Générées à l'infini, sans inscription." },
      es: { title: 'Fichas gratis para imprimir para niños (A4) | Kids Learning Hub',
            desc: 'Fichas gratis para imprimir: sumas, restas, tablas, trazado de letras, dibujos para colorear, laberintos y diplomas. Ilimitadas y sin registro.' },
      ar: { title: 'أوراق عمل مجانية للطباعة للأطفال (A4) | Kids Learning Hub',
            desc: 'أوراق عمل مجانية للطباعة: الجمع والطرح وجداول الضرب وتتبّع الحروف والتلوين والمتاهات والشهادات. تُولَّد بلا حدود ودون تسجيل.' },
    },
  },
  {
    src: 'privacy.html',
    out: l => `${l}/privacy.html`,
    url: l => `${BASE}/${l}/privacy.html`,
    urlEn: `${BASE}/privacy.html`,
    meta: {
      fr: { title: 'Confidentialité — Kids Learning Hub',
            desc: 'Comment Kids Learning Hub traite les données : pas de compte, pas de chat, pas de publicité personnalisée pour les enfants.' },
      es: { title: 'Privacidad — Kids Learning Hub',
            desc: 'Cómo trata los datos Kids Learning Hub: sin cuentas, sin chat y sin publicidad personalizada para niños.' },
      ar: { title: 'الخصوصية — Kids Learning Hub',
            desc: 'كيف يتعامل Kids Learning Hub مع البيانات: بلا حسابات ولا دردشة ولا إعلانات مخصّصة للأطفال.' },
    },
  },
];

/* ── helpers ──────────────────────────────────────────────────────────── */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function hreflangBlock(page) {
  let out = '';
  for (const l of LANGS) {
    const href = l === 'en' ? page.urlEn : page.url(l);
    out += `<link rel="alternate" hreflang="${l}" href="${href}" />\n`;
  }
  out += `<link rel="alternate" hreflang="x-default" href="${page.urlEn}" />\n`;
  return out;
}

/* Replace an existing tag, or insert before </head> if absent. */
function upsert(html, re, tag) {
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', tag + '\n</head>');
}

/* ── build ────────────────────────────────────────────────────────────── */
let written = 0, problems = [];

for (const page of PAGES) {
  const srcPath = path.join(ROOT, page.src);
  if (!fs.existsSync(srcPath)) { problems.push(`missing source: ${page.src}`); continue; }
  const original = fs.readFileSync(srcPath, 'utf8');

  /* Refuse to emit a copy whose internal references would break at depth. */
  const rel = [...original.matchAll(/(?:href|src)="((?!https?:|\/\/|#|mailto:|data:|\/|\$\{)[^"]+)"/g)]
    .map(m => m[1])
    .filter(v => !v.startsWith('?'));           // ?lang= links are fine
  if (rel.length) {
    problems.push(`${page.src}: ${rel.length} relative ref(s) would break at depth — ` +
                  `convert to absolute first: ${[...new Set(rel)].slice(0, 5).join(', ')}`);
    continue;
  }

  /* Also add hreflang to the English original, pointing at the new copies. */
  const variants = [['en', page.src, page.urlEn], ...LANGS.filter(l => l !== 'en')
    .map(l => [l, page.out(l), page.url(l)])];

  for (const [lang, outRel, selfUrl] of variants) {
    let html = original;
    const m = page.meta[lang];

    html = html.replace(/<html[^>]*>/, `<html lang="${lang}" dir="${DIR[lang]}">`);

    if (m) {
      html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(m.title)}</title>`);
      html = upsert(html, /<meta name="description" content="[^"]*"\s*\/?>/,
        `<meta name="description" content="${esc(m.desc)}" />`);
      html = upsert(html, /<meta property="og:title" content="[^"]*"\s*\/?>/,
        `<meta property="og:title" content="${esc(m.title)}" />`);
      html = upsert(html, /<meta property="og:description" content="[^"]*"\s*\/?>/,
        `<meta property="og:description" content="${esc(m.desc)}" />`);
    }

    html = upsert(html, /<link rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${selfUrl}" />`);
    html = html.replace(/<link rel="alternate" hreflang="[^"]*"[^>]*>\n?/g, '');
    html = html.replace('<link rel="canonical"',
      hreflangBlock(page) + '<link rel="canonical"');
    html = upsert(html, /<meta property="og:url" content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${selfUrl}" />`);
    html = upsert(html, /<meta property="og:locale" content="[^"]*"\s*\/?>/,
      `<meta property="og:locale" content="${lang}" />`);

    /* Force the client-side renderer into this language, before it runs,
       without disturbing a visitor's own saved preference on other pages. */
    if (lang !== 'en') {
      html = html.replace('</head>',
        `<script>try{localStorage.setItem('vsm_lang',${JSON.stringify(lang)})}catch(e){}` +
        `document.documentElement.lang=${JSON.stringify(lang)};` +
        `document.documentElement.dir=${JSON.stringify(DIR[lang])};</script>\n</head>`);
    }

    const outPath = path.join(ROOT, outRel);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf8');
    written++;
  }
}

/* ── sitemap ──────────────────────────────────────────────────────────── */
if (!problems.length) {
  const smPath = path.join(ROOT, 'sitemap.xml');
  let sm = fs.readFileSync(smPath, 'utf8');
  const today = new Date().toISOString().slice(0, 10);

  const block = PAGES.map(page => {
    const alts = LANGS.map(l =>
      `    <xhtml:link rel="alternate" hreflang="${l}" href="${l === 'en' ? page.urlEn : page.url(l)}"/>`).join('\n');
    return LANGS.map(l => `  <url>
    <loc>${l === 'en' ? page.urlEn : page.url(l)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.src === 'index.html' ? '1.0' : '0.7'}</priority>
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${page.urlEn}"/>
  </url>`).join('\n');
  }).join('\n');

  const marker = /<!--LANGS-->[\s\S]*?<!--\/LANGS-->/;
  const payload = `<!--LANGS-->\n${block}\n  <!--/LANGS-->`;
  sm = marker.test(sm) ? sm.replace(marker, payload)
                       : sm.replace(/<\/urlset>/, `  ${payload}\n</urlset>`);

  /* drop now-duplicated bare entries for the pages we just emitted */
  for (const page of PAGES) {
    const dup = new RegExp(
      `  <url>\\s*<loc>${page.urlEn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</loc>(?![\\s\\S]{0,200}xhtml:link)[\\s\\S]*?</url>\\n`, 'g');
    sm = sm.replace(dup, '');
  }
  fs.writeFileSync(smPath, sm, 'utf8');
  console.log(`✓ ${written} pages written (${PAGES.length} pages × ${LANGS.length} languages)`);
  console.log('✓ sitemap.xml <!--LANGS--> block refreshed');
} else {
  console.error('✗ build aborted:\n  - ' + problems.join('\n  - '));
  process.exit(1);
}
