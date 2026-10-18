/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — "worksheets by grade" pages for 5 school systems
   ═══════════════════════════════════════════════════════════════════════
   Usage (from apps-site/):   node tools/build-grades.js   (also in build-all)

   Reads tools/grades-data-{en,fr-es,ar}.js and writes:
     grades/index.html                      hub: every system and grade
     grades/<sys>/<slug>.html               one page per grade, written in the
                                            language parents of that system use
   Each grade page links to the worksheet generators with the right level
   preset (?level=…, read by worksheets/ws.js), to matching browser games,
   and carries tips, an FAQ (FAQPage schema) and hreflang links between
   grades of the same age in the other systems. Refreshes the
   <!--GRADEPAGES--> block of sitemap.xml.
   ═══════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BASE = 'https://kids-learning-hub.cc';
const SYSTEMS = [...require('./grades-data-en.js'), ...require('./grades-data-fr-es.js'), ...require('./grades-data-ar.js')];
const HREFLANG = { us: 'en-US', uk: 'en-GB', fr: 'fr', es: 'es', ar: 'ar' };
/* age alignment: index = approximate age − 5 (US K, UK Year 1 ≈ 5–6 years) */
const AGE0 = { us: 0, uk: 0, fr: 1, es: 1, ar: 1 };

/* worksheets that have real /worksheets/<lang>/ copies */
const WS_COPIES = new Set(require('./worksheets-data.js').map(t => t.slug));
const wsUrl = (slug, lang, level) => {
  const q = level === null || level === undefined ? '' : `level=${encodeURIComponent(level)}`;
  if (lang === 'en') return `/worksheets/${slug}.html${q ? '?' + q : ''}`;
  if (WS_COPIES.has(slug)) return `/worksheets/${lang}/${slug}.html${q ? '?' + q : ''}`;
  return `/worksheets/${slug}.html?lang=${lang}${q ? '&' + q : ''}`;
};
const gameUrl = (slug, lang) => `/play/${lang === 'en' ? '' : lang + '/'}${slug}.html`;

/* game names per language, taken from the games hub so they always match */
const hub = fs.readFileSync(path.join(ROOT, 'play', 'index.html'), 'utf8');
const slugToKey = {};
for (const m of hub.matchAll(/href="\/play\/([a-z0-9-]+)\.html">[\s\S]*?data-t="(g\d+)"/g)) if (!slugToKey[m[1]]) slugToKey[m[1]] = m[2];
const STR = Function(hub.match(/const STR = (\{[\s\S]*?\n\});/)[1].replace(/^/, 'return '))();
const gameName = (slug, lang) => (STR[lang] || STR.en)[slugToKey[slug]] || slug;
const gameIcon = {};
for (const m of hub.matchAll(/href="\/play\/([a-z0-9-]+)\.html">\s*<div class="cover" style="background:([^"]+)">([^<]+)<\/div>/g)) gameIcon[m[1]] = { bg: m[2], e: m[3] };

const UI = {
  en: { home: 'Home', ws: 'Worksheets', grades: 'By grade', sheetsH: n => `Printable worksheets for ${n}`, gamesH: 'Games to play online', tipsH: 'Tips for parents', faqH: 'Frequently asked questions', other: 'Other grades', systems: 'Other school systems', open: 'Open →', play: 'Play →', ages: 'Ages', ctaT: 'MathoKids — maths adventures', ctaD: 'The whole primary maths programme as a game, offline and free on Google Play.', ad: 'Advertisement' },
  fr: { home: 'Accueil', ws: 'Fiches', grades: 'Par classe', sheetsH: n => `Fiches à imprimer pour le ${n}`, gamesH: 'Jeux en ligne', tipsH: 'Conseils aux parents', faqH: 'Questions fréquentes', other: 'Autres classes', systems: 'Autres systèmes scolaires', open: 'Ouvrir →', play: 'Jouer →', ages: 'Âges', ctaT: 'MathoKids — l’aventure des maths', ctaD: 'Tout le programme de maths du primaire en jeu, hors ligne et gratuit sur Google Play.', ad: 'Publicité' },
  es: { home: 'Inicio', ws: 'Fichas', grades: 'Por curso', sheetsH: n => `Fichas para imprimir de ${n}`, gamesH: 'Juegos online', tipsH: 'Consejos para las familias', faqH: 'Preguntas frecuentes', other: 'Otros cursos', systems: 'Otros sistemas escolares', open: 'Abrir →', play: 'Jugar →', ages: 'Edades', ctaT: 'MathoKids — aventuras de matemáticas', ctaD: 'Todo el programa de matemáticas de primaria en un juego, sin conexión y gratis en Google Play.', ad: 'Publicidad' },
  ar: { home: 'الرئيسية', ws: 'أوراق العمل', grades: 'حسب الصف', sheetsH: n => `أوراق عمل للطباعة — ${n}`, gamesH: 'ألعاب على الإنترنت', tipsH: 'نصائح للآباء', faqH: 'أسئلة شائعة', other: 'صفوف أخرى', systems: 'أنظمة دراسية أخرى', open: 'افتح ←', play: 'العب ←', ages: 'الأعمار', ctaT: 'MathoKids — مغامرة الرياضيات', ctaD: 'برنامج رياضيات الابتدائي كاملًا في لعبة، دون إنترنت ومجانًا على Google Play.', ad: 'إعلان' },
};
const PACKS = require('./packs-config.js');
const PACK_T = {
  en: { h: 'Get the complete printable pack', d: n => `About 85 pages for ${n}: several different sheets for every skill on this page, each with its answer key, plus a times tables poster or game and a certificate. One PDF, ready to print — no ads, nothing to generate.`, buy: 'Buy with PayPal', note: 'Instant download after payment · cards accepted · 14-day refund guarantee', terms: 'Terms', refund: 'Refunds' },
  fr: { h: 'Le cahier complet à imprimer', d: n => `Environ 85 pages pour le ${n} : plusieurs fiches différentes pour chaque compétence de cette page, chacune avec son corrigé, plus un poster ou un jeu et un diplôme. Un seul PDF prêt à imprimer, sans publicité.`, buy: 'Acheter avec PayPal', note: 'Téléchargement immédiat après paiement · cartes acceptées · remboursement sous 14 jours', terms: 'Conditions', refund: 'Remboursements' },
  es: { h: 'El cuadernillo completo para imprimir', d: n => `Unas 85 páginas para ${n}: varias fichas distintas de cada contenido de esta página, cada una con sus soluciones, más un póster o un juego y un diploma. Un solo PDF listo para imprimir, sin anuncios.`, buy: 'Comprar con PayPal', note: 'Descarga inmediata tras el pago · se aceptan tarjetas · reembolso en 14 días', terms: 'Condiciones', refund: 'Reembolsos' },
  ar: { h: 'الكرّاسة الكاملة للطباعة', d: n => `حوالي 85 صفحة لـ${n}: عدة أوراق مختلفة لكل مهارة في هذه الصفحة، مع حلولها، وملصق أو لعبة وشهادة. ملف PDF واحد جاهز للطباعة، دون إعلانات.`, buy: 'اشترِ عبر PayPal', note: 'تحميل فوري بعد الدفع · تُقبل البطاقات البنكية · استرجاع خلال 14 يومًا', terms: 'الشروط', refund: 'الاسترجاع' },
};
function packBox(sys, g) {
  const id = PACKS.buttons[`${sys.sys}/${g.slug}`];
  if (!id) return '';
  const t = PACK_T[sys.lang];
  return `
  <section class="gr-pack">
    <img src="/packs/previews/${sys.sys}-${g.slug}.webp" alt="" width="318" height="449" loading="lazy">
    <div>
      <h2>📦 ${t.h}</h2>
      <p>${esc(t.d(g.label))}</p>
      <div class="gr-price">${PACKS.price}</div>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="${esc(id)}"><input type="hidden" name="currency_code" value="USD">
        <button class="btn primary gr-buy" type="submit">${t.buy}</button>
      </form>
      <p class="gr-note">${t.note} · <a href="/terms.html">${t.terms}</a> · <a href="/refund.html">${t.refund}</a></p>
    </div>
  </section>`;
}
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pageUrl = (sys, g) => `${BASE}/grades/${sys.sys}/${g.slug}.html`;
const ageOf = (sys, i) => AGE0[sys.sys] + i;

/* pages of the same age in the other systems (for hreflang + "other systems") */
function sameAge(age) {
  const out = [];
  for (const s of SYSTEMS) s.grades.forEach((g, i) => { if (ageOf(s, i) === age) out.push({ s, g }); });
  return out;
}

const CSS = `
.gr-hero{background:var(--card);border:1px solid var(--line);border-radius:24px;box-shadow:var(--shadow);padding:22px 24px;margin-bottom:20px}
.gr-hero h1{font-size:clamp(26px,5vw,38px);margin:4px 0 10px}
.gr-hero p{color:var(--ink2);font-size:16.5px;line-height:1.7}
.gr-tag{display:inline-flex;gap:8px;align-items:center;font-weight:800;color:var(--blue);background:var(--card2);border:1px solid var(--line);border-radius:999px;padding:5px 12px;font-size:13.5px}
.gr-sec{font-size:22px;margin:26px 0 12px}
.gr-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px}
.gr-card{display:flex;flex-direction:column;background:var(--card);border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:var(--shadow);transition:transform .15s}
.gr-card:hover{transform:translateY(-3px)}
.gr-card img{width:100%;height:120px;object-fit:cover;object-position:top;background:#fff;border-bottom:1px solid var(--line)}
.gr-card .gi{height:84px;display:grid;place-items:center;font-size:40px;color:#fff}
.gr-card .b{padding:10px 14px 14px}
.gr-card b{display:block;font-size:16px}
.gr-card span{color:var(--muted);font-size:13px}
.gr-card em{display:block;font-style:normal;font-weight:800;color:var(--blue);margin-top:6px;font-size:14px}
.gr-nav{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.gr-nav a{padding:8px 14px;border-radius:12px;background:var(--card2);border:1px solid var(--line);font-weight:800;font-size:14px}
.gr-nav a.on{background:var(--grad);color:#fff;border-color:transparent}
.gr-sys{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}
.gr-pack{display:grid;grid-template-columns:170px 1fr;gap:20px;align-items:center;background:linear-gradient(135deg,#FFF4E0,#EAF2FF);border:3px solid #EF9F27;border-radius:24px;padding:18px;margin:0 0 20px;box-shadow:0 6px 0 #BA7517}
:root[data-theme="dark"] .gr-pack{background:linear-gradient(135deg,#2A2214,#14214A)}
.gr-pack img{width:100%;height:auto;border-radius:10px;box-shadow:0 8px 20px rgba(0,0,0,.18)}
.gr-pack h2{font-size:22px;margin-bottom:6px}
.gr-pack p{color:var(--ink2);line-height:1.6}
.gr-price{font-family:"Baloo 2",sans-serif;font-weight:800;font-size:30px;color:#BA7517;margin:6px 0}
.gr-buy{font-size:17px;padding:12px 22px}
.gr-note{font-size:12.5px;color:var(--muted)!important;margin-top:8px}
@media(max-width:600px){.gr-pack{grid-template-columns:1fr}.gr-pack img{max-width:180px;justify-self:center}}
.gr-sys>div{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:16px 18px;box-shadow:var(--shadow)}
.gr-sys h2{font-size:19px;margin-bottom:6px}
.gr-sys p{color:var(--muted);font-size:13.5px;margin-bottom:8px}
`;

function head({ lang, dir, title, desc, url, alts, jsonld }) {
  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}" />
${(alts || []).map(a => `<link rel="alternate" hreflang="${a.hl}" href="${a.href}" />`).join('\n')}
<link rel="canonical" href="${url}" />
<meta name="theme-color" content="#1E5BFF" />
<link rel="icon" href="/logos/hub-logo.png" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Kids Learning Hub" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:image" content="https://kids-learning-hub.cc/logos/og-share.png" />
<meta name="twitter:card" content="summary_large_image" />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9202119066805107" crossorigin="anonymous"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/play/play.css?v=5" />
<link rel="stylesheet" href="/worksheets/ws.css?v=4" />
<style>${CSS}</style>
<script>(function(){try{var t=localStorage.getItem('vsm_theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t)}catch(e){}})();(window.adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;</script>
<script src="/analytics.js" defer></script>
${(jsonld || []).map(j => `<script type="application/ld+json">\n${JSON.stringify(j)}\n</script>`).join('\n')}
</head>
<body>

<header class="top">
  <div class="top-in">
    <a class="brand" href="${lang === 'en' ? '/' : '/' + lang + '/'}"><img src="/logos/hub-logo.png" alt="Kids Learning Hub"><span><i>Kids</i> Learning Hub</span></a>
    <div class="top-actions">
      <button class="icon-btn" aria-label="Dark mode" onclick="(function(){var r=document.documentElement,d=r.getAttribute('data-theme')==='dark'?'light':'dark';r.setAttribute('data-theme',d);try{localStorage.setItem('vsm_theme',d)}catch(e){}})()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>
      </button>
    </div>
  </div>
</header>
`;
}
function foot(t) {
  return `
  <div class="appcta">
    <img src="/logos/mathokids.png" alt="MathoKids">
    <div><b>${esc(t.ctaT)}</b><p>${esc(t.ctaD)}</p></div>
    <a class="btn primary" href="https://play.google.com/store/apps/details?id=com.matho.primaire" target="_blank" rel="noopener">Google Play</a>
  </div>
  <div class="ad-slot"><div class="ad-label">${esc(t.ad)}</div><ins class="adsbygoogle" style="display:block;text-align:center" data-ad-format="auto" data-ad-client="ca-pub-9202119066805107" data-ad-slot="4620284747" data-full-width-responsive="true"></ins></div>
</div>

<footer class="foot">
  <div class="fb">Kids Learning Hub</div>
  <div style="opacity:.8">VS MEDIA · <a href="/grades/">Worksheets by grade</a> · <a href="/worksheets/">Worksheets</a> · <a href="/play/">Games</a> · <a href="/terms.html">Terms</a> · <a href="/privacy.html">Privacy</a></div>
  <div style="opacity:.6;margin-top:6px">© 2026 Kids Learning Hub · VS MEDIA</div>
</footer>
<script>window.addEventListener('load',function(){document.querySelectorAll('ins.adsbygoogle').forEach(function(){try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}})});</script>
</body>
</html>
`;
}

let written = 0;
const smUrls = [];

for (const sys of SYSTEMS) {
  const t = UI[sys.lang], dir = sys.lang === 'ar' ? 'rtl' : 'ltr';
  sys.grades.forEach((g, i) => {
    const url = pageUrl(sys, g);
    const peers = sameAge(ageOf(sys, i));
    const alts = peers.map(p => ({ hl: HREFLANG[p.s.sys], href: pageUrl(p.s, p.g) }));
    const xd = peers.find(p => p.s.sys === 'us') || peers[0];
    alts.push({ hl: 'x-default', href: pageUrl(xd.s, xd.g) });
    const jsonld = [
      { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: sys.lang, mainEntity: g.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.home, item: BASE + '/' },
        { '@type': 'ListItem', position: 2, name: t.grades, item: BASE + '/grades/' },
        { '@type': 'ListItem', position: 3, name: g.label, item: url }] },
    ];
    const label = g.label + (g.alt ? ` (${g.alt})` : '');
    const cards = g.sheets.map(([slug, lvl, name, d]) => `      <a class="gr-card" href="${wsUrl(slug, sys.lang, lvl)}">
        <img src="/worksheets/previews/${slug}.webp" alt="" width="397" height="280" loading="lazy">
        <div class="b"><b>${esc(name)}</b><span>${esc(d)}</span><em>${t.open}</em></div>
      </a>`).join('\n');
    const games = g.games.map(s => `      <a class="gr-card" href="${gameUrl(s, sys.lang)}">
        <div class="gi" style="background:${(gameIcon[s] || {}).bg || 'var(--grad)'}">${(gameIcon[s] || {}).e || '🎮'}</div>
        <div class="b"><b>${esc(gameName(s, sys.lang))}</b><em>${t.play}</em></div>
      </a>`).join('\n');
    const nav = sys.grades.map(o => `<a href="/grades/${sys.sys}/${o.slug}.html"${o === g ? ' class="on" aria-current="page"' : ''}>${esc(o.label)}</a>`).join('');
    const others = peers.filter(p => p.s !== sys).map(p => `<a href="/grades/${p.s.sys}/${p.g.slug}.html" hreflang="${HREFLANG[p.s.sys]}">${p.s.flag} ${esc(p.g.label)}</a>`).join('');

    const html = head({ lang: sys.lang, dir, title: g.title, desc: g.desc, url, alts, jsonld }) + `
<div class="wrap" style="max-width:1000px">
  <p class="crumbs"><a href="${sys.lang === 'en' ? '/' : '/' + sys.lang + '/'}">${t.home}</a> › <a href="/grades/">${t.grades}</a> › <span>${esc(label)}</span></p>

  <section class="gr-hero">
    <span class="gr-tag">${sys.flag} ${esc(sys.name)} · ${esc(label)}</span>
    <h1>${esc(g.h1)}</h1>
    <p>${esc(g.lede)}</p>
  </section>

${packBox(sys, g)}
  <h2 class="gr-sec">📝 ${esc(t.sheetsH(g.label))}</h2>
  <div class="gr-list">
${cards}
  </div>

  <h2 class="gr-sec">🎮 ${t.gamesH}</h2>
  <div class="gr-list">
${games}
  </div>

  <section class="ws-guide">
    <h2>${t.tipsH}</h2>
    <ul class="ws-tips">
${g.tips.map(x => `      <li>${esc(x)}</li>`).join('\n')}
    </ul>
    <h2>${t.faqH}</h2>
${g.faq.map(([q, a]) => `    <details class="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n')}
  </section>

  <h2 class="gr-sec">${t.other}</h2>
  <nav class="gr-nav">${nav}</nav>
${others ? `  <h2 class="gr-sec">${t.systems}</h2>\n  <nav class="gr-nav">${others}</nav>` : ''}
` + foot(t);
    const out = path.join(ROOT, 'grades', sys.sys, g.slug + '.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html, 'utf8');
    smUrls.push({ url, alts });
    written++;
  });
}

/* hub page */
const hubUrl = BASE + '/grades/';
const sysHtml = SYSTEMS.map(s => `    <div id="${s.sys}" dir="${s.lang === 'ar' ? 'rtl' : 'ltr'}" lang="${s.lang}">
      <h2>${s.flag} ${esc(s.hubTitle)}</h2>
      <p>${esc(s.hubIntro)}</p>
      <nav class="gr-nav">${s.grades.map(g => `<a href="/grades/${s.sys}/${g.slug}.html">${esc(g.label)}</a>`).join('')}</nav>
    </div>`).join('\n');
const hubHtml = head({ lang: 'en', dir: 'ltr', title: 'Free Printable Math Worksheets by Grade — USA, UK, France, Spain & Arab Countries | Kids Learning Hub',
  desc: 'Free printable maths worksheets by grade for every school system: US grades K–5, UK Years 1–6, French CP–CM2, Spanish 1º–6º Primaria and Arab grades 1–6.', url: hubUrl,
  jsonld: [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Worksheets by grade', url: hubUrl }] }) + `
<div class="wrap" style="max-width:1000px">
  <p class="crumbs"><a href="/">Home</a> › <a href="/worksheets/">Worksheets</a> › <span>By grade</span></p>
  <section class="gr-hero">
    <span class="gr-tag">🌍 USA · UK · France · España · العربية</span>
    <h1>Free maths worksheets by grade</h1>
    <p>Find the right worksheets for your child’s class, whatever school system you follow. Each grade page explains what children learn in maths that year and links to free printable worksheets — set to the right level — and online games. Written by a maths teacher; free, with no sign-up.</p>
  </section>
  <div class="gr-sys">
${sysHtml}
  </div>
` + foot(UI.en);
fs.writeFileSync(path.join(ROOT, 'grades', 'index.html'), hubHtml, 'utf8');
written++;

/* sitemap */
const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8');
const today = new Date().toISOString().slice(0, 10);
const block = [`  <url>\n    <loc>${hubUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`]
  .concat(smUrls.map(u => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
${u.alts.map(a => `    <xhtml:link rel="alternate" hreflang="${a.hl}" href="${a.href}"/>`).join('\n')}
  </url>`)).join('\n');
const marker = /<!--GRADEPAGES-->[\s\S]*?<!--\/GRADEPAGES-->/;
const payload = `<!--GRADEPAGES-->\n${block}\n  <!--/GRADEPAGES-->`;
sm = marker.test(sm) ? sm.replace(marker, payload) : sm.replace(/<\/urlset>/, `  ${payload}\n</urlset>`);
fs.writeFileSync(smPath, sm, 'utf8');

console.log(`✓ ${written} grade pages written (${SYSTEMS.length} school systems + hub)`);
console.log('✓ sitemap.xml <!--GRADEPAGES--> refreshed');
