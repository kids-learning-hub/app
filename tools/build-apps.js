/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — /apps/ build tool
   ═══════════════════════════════════════════════════════════════════════
   Usage (run from the apps-site/ folder):

     node tools/build-apps.js       → rebuild every /apps/ page in 4 languages
                                      and refresh the <!--APPS--> block of
                                      sitemap.xml

   Everything is driven by tools/apps-data.js. Pages are fully static —
   the content is in the HTML, not rendered by JavaScript, so it indexes.
   ═══════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');

const TOOLS = __dirname;
const ROOT = path.resolve(TOOLS, '..');            // apps-site/
const APPSDIR = path.join(ROOT, 'apps');
const BASE = 'https://kids-learning-hub.cc';
const OG_IMG = BASE + '/logos/og-share.png';
const TODAY = new Date().toISOString().slice(0, 10);

const APPS = require('./apps-data.js');

const LANGS = {
  en: { dir: 'ltr', folder: '',    ogl: 'en_US', home: 'Home',      apps: 'Apps' },
  fr: { dir: 'ltr', folder: 'fr/', ogl: 'fr_FR', home: 'Accueil',   apps: 'Applis' },
  es: { dir: 'ltr', folder: 'es/', ogl: 'es_ES', home: 'Inicio',    apps: 'Apps' },
  ar: { dir: 'rtl', folder: 'ar/', ogl: 'ar_MA', home: 'الرئيسية', apps: 'التطبيقات' },
};
const ORDER = ['en', 'fr', 'es', 'ar'];

/* ── UI strings ───────────────────────────────────────────────────────── */
const T = {
  en: { getOn: 'Get it on Google Play', free: 'Free · Android', back: '← All apps',
        whatsInside: "What's inside", faqH: 'Frequently asked questions',
        more: 'More free apps', related: 'Other apps from Kids Learning Hub',
        idxTitle: 'Our Apps — 10 Free Educational Apps for Kids | Kids Learning Hub',
        idxDesc: 'Ten free Android apps for children aged 4–12: maths, science, coding, geography, English, French, Spanish, Arabic, German and Chinese. Offline, safe, no personalised ads.',
        idxH1: 'Ten free learning apps for children aged 4–12',
        idxLede: 'Maths, science, coding, geography and six languages — every app works offline, has no chat and shows no personalised advertising. Built by a mathematics teacher.',
        alsoTry: 'Prefer to try before installing?',
        alsoTryD: 'Play the browser games or print a worksheet — no download, no sign-up.',
        games: 'Free games', sheets: 'Free worksheets' },
  fr: { getOn: 'Disponible sur Google Play', free: 'Gratuit · Android', back: '← Toutes les applis',
        whatsInside: 'Ce que contient l\'application', faqH: 'Questions fréquentes',
        more: 'Autres applis gratuites', related: 'Autres applications de Kids Learning Hub',
        idxTitle: 'Nos applis — 10 applications éducatives gratuites | Kids Learning Hub',
        idxDesc: 'Dix applications Android gratuites pour les 4–12 ans : maths, sciences, codage, géographie, anglais, français, espagnol, arabe, allemand et chinois. Hors ligne et sûres.',
        idxH1: 'Dix applications d\'apprentissage gratuites pour les 4–12 ans',
        idxLede: 'Maths, sciences, codage, géographie et six langues — chaque appli fonctionne hors ligne, sans chat et sans publicité personnalisée. Conçues par un professeur de mathématiques.',
        alsoTry: 'Envie d\'essayer avant d\'installer ?',
        alsoTryD: 'Jouez aux jeux du navigateur ou imprimez une fiche — sans téléchargement ni inscription.',
        games: 'Jeux gratuits', sheets: 'Fiches gratuites' },
  es: { getOn: 'Disponible en Google Play', free: 'Gratis · Android', back: '← Todas las apps',
        whatsInside: 'Qué incluye', faqH: 'Preguntas frecuentes',
        more: 'Más apps gratis', related: 'Otras apps de Kids Learning Hub',
        idxTitle: 'Nuestras apps — 10 apps educativas gratis para niños | Kids Learning Hub',
        idxDesc: 'Diez apps Android gratuitas para niños de 4 a 12 años: matemáticas, ciencias, programación, geografía, inglés, francés, español, árabe, alemán y chino. Sin conexión y seguras.',
        idxH1: 'Diez apps de aprendizaje gratuitas para niños de 4 a 12 años',
        idxLede: 'Matemáticas, ciencias, programación, geografía y seis idiomas — cada app funciona sin conexión, sin chat y sin publicidad personalizada. Creadas por un profesor de matemáticas.',
        alsoTry: '¿Quieres probar antes de instalar?',
        alsoTryD: 'Juega a los juegos del navegador o imprime una ficha — sin descargas ni registro.',
        games: 'Juegos gratis', sheets: 'Fichas gratis' },
  ar: { getOn: 'حمّله من Google Play', free: 'مجاني · أندرويد', back: '← كل التطبيقات',
        whatsInside: 'ماذا يضمّ التطبيق', faqH: 'أسئلة شائعة',
        more: 'تطبيقات مجانية أخرى', related: 'تطبيقات أخرى من Kids Learning Hub',
        idxTitle: 'تطبيقاتنا — 10 تطبيقات تعليمية مجانية للأطفال | Kids Learning Hub',
        idxDesc: 'عشرة تطبيقات أندرويد مجانية للأطفال من 4 إلى 12 سنة: الرياضيات والعلوم والبرمجة والجغرافيا والإنجليزية والفرنسية والإسبانية والعربية والألمانية والصينية. تعمل دون إنترنت وآمنة.',
        idxH1: 'عشرة تطبيقات تعليمية مجانية للأطفال من 4 إلى 12 سنة',
        idxLede: 'رياضيات وعلوم وبرمجة وجغرافيا وستّ لغات — كل تطبيق يعمل دون إنترنت، بلا دردشة وبلا إعلانات مخصّصة. من تصميم أستاذ رياضيات.',
        alsoTry: 'تفضّل التجربة قبل التثبيت؟',
        alsoTryD: 'العب ألعاب المتصفّح أو اطبع ورقة عمل — دون تحميل ودون تسجيل.',
        games: 'ألعاب مجانية', sheets: 'أوراق عمل مجانية' },
};

/* ── helpers ──────────────────────────────────────────────────────────── */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const playUrl = pkg => 'https://play.google.com/store/apps/details?id=' + pkg;
const urlOf = (slug, lang) => BASE + '/apps/' + LANGS[lang].folder + (slug ? slug + '.html' : '');

function relLink(fromLang, toLang, slug) {
  const file = slug ? slug + '.html' : '';
  if (fromLang === toLang) return file || './';
  if (fromLang === 'en') return LANGS[toLang].folder + (file || '');
  if (toLang === 'en') return '../' + (file || '');
  return '../' + LANGS[toLang].folder + (file || '');
}
function hreflangBlock(slug, self) {
  let out = `<link rel="canonical" href="${self}" />\n`;
  for (const l of ORDER) out += `<link rel="alternate" hreflang="${l}" href="${urlOf(slug, l)}" />\n`;
  out += `<link rel="alternate" hreflang="x-default" href="${urlOf(slug, 'en')}" />\n`;
  return out;
}
function header(lang, slug) {
  const root = lang === 'en' ? '../' : '../../';
  const links = ORDER.map(l =>
    `<a data-l="${l}"${l === lang ? ' class="active" aria-current="page"' : ''} href="${relLink(lang, l, slug)}" hreflang="${l}">${l.toUpperCase()}</a>`).join('\n        ');
  return `<header class="top">
  <div class="top-in">
    <a class="brand" href="${root}"><img src="${root}logos/hub-logo.png" alt="Kids Learning Hub"><span><i>Kids</i> Learning Hub</span></a>
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
  const root = lang === 'en' ? '../' : '../../';
  const L = LANGS[lang];
  return `<footer class="foot">
  <div class="fb">Kids Learning Hub</div>
  <div style="opacity:.8">by VS MEDIA · <a href="${root}">${L.home}</a> · <a href="${root}about.html">About</a> · <a href="${root}privacy.html">Privacy</a></div>
  <div style="opacity:.6;margin-top:6px">© 2026 Kids Learning Hub · VS MEDIA</div>
</footer>`;
}
function headCommon(lang, o) {
  const L = LANGS[lang];
  const root = lang === 'en' ? '../' : '../../';
  const appsRoot = lang === 'en' ? '' : '../';
  return `<!DOCTYPE html>
<html lang="${lang}" dir="${L.dir}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.desc)}" />
${hreflangBlock(o.slug, o.self)}<meta name="theme-color" content="#1E5BFF" />
<link rel="icon" href="${root}logos/hub-logo.png" />

<meta property="og:type" content="website" />
<meta property="og:site_name" content="Kids Learning Hub" />
<meta property="og:url" content="${o.self}" />
<meta property="og:title" content="${esc(o.ogTitle)}" />
<meta property="og:description" content="${esc(o.desc)}" />
<meta property="og:image" content="${o.ogImage || OG_IMG}" />
<meta property="og:image:alt" content="${esc(o.ogTitle)}" />
<meta property="og:locale" content="${L.ogl}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(o.ogTitle)}" />
<meta name="twitter:description" content="${esc(o.desc)}" />
<meta name="twitter:image" content="${o.ogImage || OG_IMG}" />

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9202119066805107" crossorigin="anonymous"></script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${root}blog/article.css" />
<link rel="stylesheet" href="${appsRoot}apps.css?v=2" />
<script src="${root}analytics.js" defer></script>
<script>(function(){try{var t=localStorage.getItem('vsm_theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})();</script>

${o.jsonld.map(j => `<script type="application/ld+json">\n${JSON.stringify(j)}\n</script>`).join('\n')}
</head>
<body>
`;
}

/* ── Google Play badge (inline SVG, no external asset) ─────────────────── */
function playBadge(pkg, label) {
  return `<a class="play-btn" href="${playUrl(pkg)}" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M3.6 1.8 13.3 11.5 3.6 21.2c-.4-.3-.6-.8-.6-1.4V3.2c0-.6.2-1.1.6-1.4z"/><path fill="#FBBC04" d="m17.1 7.7 3.6 2c.9.5.9 1.9 0 2.4l-3.6 2-3-3.6 3-2.8z"/><path fill="#34A853" d="M3.6 1.8c.5-.4 1.2-.4 1.8 0l11.7 6.6-2.8 2.8L3.6 1.8z"/><path fill="#4285F4" d="M3.6 21.2 14.3 11l2.8 2.8L5.4 21.2c-.6.4-1.3.4-1.8 0z"/></svg>
      <span>${label}</span>
    </a>`;
}

/* ── MathoKids: promo video + Premium card (2026-10) ─────────────────────
   Voiced video per page language (media/mathokids-promo-<lang>.mp4). It
   autoplays muted (browsers only allow muted autoplay), loads only when it
   scrolls into view, and skips autoplay when the visitor saves data.     */
const PROMO = {
  en: { premBtn: '✨ Get Premium', watchT: 'See MathoKids in action',
        watchP: 'A 30-second tour of the adventure map, the games and the buddies.',
        sound: '🔊 Sound on', mute: '🔇 Sound off',
        premT: 'Unlock MathoKids Premium',
        premP: 'Word problems, calculation rules, certificates, photo homework help, the AR treasure hunt and all badges.',
        premFrom: 'From $1.99 / month · or all 10 apps with the Kids Learning Hub Pass.',
        premNote: 'Bought by an adult on this website. Codes work in the web and Android versions from kids-learning-hub.cc; the Google Play version stays free.' },
  fr: { premBtn: '✨ Passer à Premium', watchT: 'MathoKids en action',
        watchP: 'Une visite de 30 secondes : la carte d’aventure, les jeux et les compagnons.',
        sound: '🔊 Activer le son', mute: '🔇 Couper le son',
        premT: 'Débloquez MathoKids Premium',
        premP: 'Problèmes, règles de calcul, certificats, aide aux devoirs par photo, chasse au trésor AR et tous les badges.',
        premFrom: 'Dès 1,99 $ / mois · ou les 10 applis avec le Pass Kids Learning Hub.',
        premNote: 'Achat par un adulte sur ce site. Les codes fonctionnent dans les versions web et Android de kids-learning-hub.cc ; la version Google Play reste gratuite.' },
  es: { premBtn: '✨ Obtener Premium', watchT: 'MathoKids en acción',
        watchP: 'Un recorrido de 30 segundos: el mapa de aventuras, los juegos y los compañeros.',
        sound: '🔊 Activar sonido', mute: '🔇 Silenciar',
        premT: 'Desbloquea MathoKids Premium',
        premP: 'Problemas, reglas de cálculo, certificados, ayuda con deberes por foto, búsqueda del tesoro AR y todas las insignias.',
        premFrom: 'Desde 1,99 $ / mes · o las 10 apps con el Pase Kids Learning Hub.',
        premNote: 'Lo compra un adulto en este sitio. Los códigos funcionan en las versiones web y Android de kids-learning-hub.cc; la versión de Google Play sigue siendo gratuita.' },
  ar: { premBtn: '✨ احصل على Premium', watchT: 'شاهد MathoKids',
        watchP: 'جولة في 30 ثانية: خريطة المغامرة والألعاب والرفاق.',
        sound: '🔊 شغّل الصوت', mute: '🔇 أوقف الصوت',
        premT: 'افتح MathoKids Premium',
        premP: 'المسائل، قواعد الحساب، الشهادات، المساعدة في الواجبات بالصورة، صيد الكنوز AR وكل الشارات.',
        premFrom: 'ابتداءً من 1.99$ في الشهر · أو التطبيقات العشرة بالبطاقة الشاملة.',
        premNote: 'الشراء يقوم به شخص بالغ على هذا الموقع. تعمل الأكواد في نسختي الويب وأندرويد من kids-learning-hub.cc، أما نسخة Google Play فتبقى مجانية.' },
};
function promoSection(app, lang, root) {
  if (app.slug !== 'mathokids') return '';
  const P = PROMO[lang];
  return `
  <section class="promo">
    <div class="promo-phone">
      <video class="promo-v" id="promoV" muted loop playsinline preload="none" aria-label="${esc(P.watchT)}"
             data-src="${root}media/mathokids-promo-${lang}.mp4"></video>
      <button class="promo-sound" id="promoSound" type="button" data-on="${esc(P.sound)}" data-off="${esc(P.mute)}">${esc(P.sound)}</button>
    </div>
    <div class="promo-t">
      <h2>🎬 ${esc(P.watchT)}</h2>
      <p>${esc(P.watchP)}</p>
      <div class="promo-prem">
        <h3>${esc(P.premT)}</h3>
        <p>${esc(P.premP)}</p>
        <p class="promo-from">${esc(P.premFrom)}</p>
        <a class="prem-btn" href="${root}premium.html?app=mathokids">${esc(P.premBtn)}</a>
        <p class="promo-note">${esc(P.premNote)}</p>
      </div>
    </div>
  </section>
  <script>(function(){
    var v=document.getElementById('promoV'),b=document.getElementById('promoSound');if(!v)return;
    var saveData=navigator.connection&&navigator.connection.saveData;
    function start(){ if(!v.getAttribute('src')){ v.src=v.dataset.src; } if(saveData){ v.controls=true; return; } var p=v.play(); if(p&&p.catch)p.catch(function(){ v.controls=true; }); }
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting) start(); else if(v.getAttribute('src')&&!v.paused) v.pause(); }); },{threshold:.35}).observe(v);
    } else start();
    b.onclick=function(){ if(!v.getAttribute('src')) start(); v.muted=!v.muted; if(!v.muted){ v.currentTime=0; v.play(); } b.textContent=v.muted?b.dataset.on:b.dataset.off; };
  })();</script>
`;
}

/* ═══════════════ 1 · individual app pages ═══════════════════════════════ */
fs.mkdirSync(APPSDIR, { recursive: true });
for (const l of ORDER) if (l !== 'en') fs.mkdirSync(path.join(APPSDIR, l), { recursive: true });

let written = 0;

for (const app of APPS) {
  const idx = APPS.indexOf(app);
  const related = [APPS[(idx + 1) % APPS.length], APPS[(idx + 2) % APPS.length], APPS[(idx + 3) % APPS.length]];

  for (const lang of ORDER) {
    const L = LANGS[lang], S = T[lang];
    const self = urlOf(app.slug, lang);
    const root = lang === 'en' ? '../' : '../../';
    const logo = `${root}logos/${app.file}`;
    const title = lang === 'en'
      ? `${app.name} — Free ${app.subject.en} App for Kids 4–12 | Kids Learning Hub`
      : lang === 'fr' ? `${app.name} — Appli de ${app.subject.fr} gratuite pour enfants | Kids Learning Hub`
      : lang === 'es' ? `${app.name} — App de ${app.subject.es} gratis para niños | Kids Learning Hub`
      : `${app.name} — تطبيق ${app.subject.ar} مجاني للأطفال | Kids Learning Hub`;
    const desc = app.lede[lang].length > 158
      ? app.lede[lang].slice(0, 155).replace(/\s\S*$/, '') + '…'
      : app.lede[lang];

    const jsonld = [
      { '@context': 'https://schema.org', '@type': 'SoftwareApplication',
        name: app.name, operatingSystem: 'ANDROID',
        applicationCategory: 'EducationalApplication',
        applicationSubCategory: app.subject.en,
        description: app.lede[lang], inLanguage: lang,
        image: BASE + '/logos/' + app.file, url: self,
        downloadUrl: playUrl(app.pkg),
        datePublished: app.released,
        author: { '@type': 'Organization', name: 'Kids Learning Hub', url: BASE + '/' },
        publisher: { '@type': 'Organization', name: 'Kids Learning Hub',
          logo: { '@type': 'ImageObject', url: BASE + '/logos/hub-logo.png' } },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        isFamilyFriendly: true },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: L.home, item: BASE + '/' },
        { '@type': 'ListItem', position: 2, name: L.apps, item: urlOf('', lang) },
        { '@type': 'ListItem', position: 3, name: app.name, item: self }] },
      { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang,
        mainEntity: app.faq[lang].map(([q, a]) => (
          { '@type': 'Question', name: q,
            acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ];

    const stats = app.stats.map(s =>
      `      <div class="stat"><b>${esc(s.v)}</b><span>${esc(s.l[lang])}</span></div>`).join('\n');
    const features = app.features.map(f =>
      `      <div class="feat">
        <div class="feat-i" aria-hidden="true">${f.i}</div>
        <div><h3>${esc(f.t[lang])}</h3><p>${esc(f.d[lang])}</p></div>
      </div>`).join('\n');
    const faqs = app.faq[lang].map(([q, a]) =>
      `    <details class="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n');
    const rel = related.map(r =>
      `      <a class="pcard" href="${r.slug}.html">
        <div class="cover" style="background:${r.color}">${r.emoji}</div>
        <div class="body"><h3>${r.name}</h3><p>${esc(r.tagline[lang])}</p><span class="read">${esc(S.getOn)} →</span></div>
      </a>`).join('\n');

    const page = headCommon(lang, { slug: app.slug, self, title, ogTitle: `${app.name} — ${app.tagline[lang]}`, desc, jsonld, ogImage: BASE + '/logos/' + app.file })
      + header(lang, app.slug) + `
<div class="wrap wide">
  <p class="crumbs"><a href="${root}">${L.home}</a> › <a href="./">${L.apps}</a> › <span>${app.name}</span></p>

  <section class="app-hero">
    <img class="app-icon" src="${logo}" alt="${app.name} app icon" width="112" height="112" />
    <div class="app-hero-t">
      <span class="tag" style="background:${app.color}1A;color:${app.color}">${esc(app.subject[lang])}</span>
      <h1>${app.name} — ${esc(app.tagline[lang])}</h1>
      <p class="lede">${esc(app.lede[lang])}</p>
      <div class="app-actions">
        ${playBadge(app.pkg, S.getOn)}
        ${app.slug === 'mathokids' ? `<a class="prem-btn" href="${root}premium.html?app=mathokids">${esc(PROMO[lang].premBtn)}</a>` : ''}
        <span class="free-note">${esc(S.free)}</span>
      </div>
    </div>
  </section>
${promoSection(app, lang, root)}
  <div class="stats">
${stats}
  </div>

  <section class="post">
    <h2>${esc(S.whatsInside)}</h2>
    <div class="feats">
${features}
    </div>

    <h2>${esc(S.faqH)}</h2>
${faqs}
  </section>

  <div class="appcta">
    <img src="${logo}" alt="${app.name}">
    <div><b>${app.name}</b><p>${esc(app.tagline[lang])} · ${esc(S.free)}</p></div>
    ${playBadge(app.pkg, S.getOn)}
  </div>

  <h2 class="section-h">${esc(S.related)}</h2>
  <div class="grid">
${rel}
  </div>

  <p class="backlink"><a href="./">${esc(S.back)}</a></p>
</div>
` + footer(lang) + `
</body>
</html>
`;
    const out = path.join(APPSDIR, L.folder, app.slug + '.html');
    fs.writeFileSync(out, page, 'utf8');
    written++;
  }
}

/* ═══════════════ 2 · /apps/ index in each language ══════════════════════ */
for (const lang of ORDER) {
  const L = LANGS[lang], S = T[lang];
  const self = urlOf('', lang);
  const root = lang === 'en' ? '../' : '../../';

  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage',
      name: S.idxH1, description: S.idxDesc, url: self, inLanguage: lang,
      isPartOf: { '@type': 'WebSite', name: 'Kids Learning Hub', url: BASE + '/' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: L.home, item: BASE + '/' },
      { '@type': 'ListItem', position: 2, name: L.apps, item: self }] },
    { '@context': 'https://schema.org', '@type': 'ItemList',
      name: 'Kids Learning Hub apps', numberOfItems: APPS.length,
      itemListElement: APPS.map((a, i) => ({
        '@type': 'ListItem', position: i + 1,
        item: { '@type': 'SoftwareApplication', name: a.name,
          operatingSystem: 'ANDROID', applicationCategory: 'EducationalApplication',
          image: BASE + '/logos/' + a.file, url: urlOf(a.slug, lang),
          description: a.tagline[lang],
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } } })) },
  ];

  const cards = APPS.map(a =>
    `      <a class="pcard appcard" href="${a.slug}.html">
        <div class="cover" style="background:linear-gradient(135deg,${a.color},${a.color}CC)">
          <img src="${root}logos/${a.file}" alt="${a.name} icon" width="72" height="72" loading="lazy" />
        </div>
        <div class="body">
          <span class="tag" style="align-self:flex-start;background:${a.color}1A;color:${a.color}">${esc(a.subject[lang])}</span>
          <h3>${a.name}</h3>
          <p>${esc(a.tagline[lang])}</p>
          <span class="read">${esc(S.getOn)} →</span>
        </div>
      </a>`).join('\n');

  const page = headCommon(lang, { slug: '', self, title: S.idxTitle, ogTitle: S.idxH1, desc: S.idxDesc, jsonld })
    + header(lang, '') + `
<div class="wrap wide">
  <p class="crumbs"><a href="${root}">${L.home}</a> › <span>${L.apps}</span></p>

  <h1>${esc(S.idxH1)}</h1>
  <p class="lede">${esc(S.idxLede)}</p>

  <div class="grid">
${cards}
  </div>

  <div class="appcta" style="margin-top:34px">
    <img src="${root}logos/hub-logo.png" alt="Kids Learning Hub">
    <div><b>${esc(S.alsoTry)}</b><p>${esc(S.alsoTryD)}</p></div>
    <a class="play-btn ghost" href="${root}play/">${esc(S.games)}</a>
    <a class="play-btn ghost" href="${root}worksheets/">${esc(S.sheets)}</a>
  </div>
</div>
` + footer(lang) + `
</body>
</html>
`;
  fs.writeFileSync(path.join(APPSDIR, L.folder, 'index.html'), page, 'utf8');
  written++;
}

/* ═══════════════ 3 · sitemap ════════════════════════════════════════════ */
const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8');

function smEntry(slug, priority) {
  const alts = ORDER.map(l =>
    `    <xhtml:link rel="alternate" hreflang="${l}" href="${urlOf(slug, l)}"/>`).join('\n');
  return ORDER.map(lang => `  <url>
    <loc>${urlOf(slug, lang)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${urlOf(slug, 'en')}"/>
  </url>`).join('\n');
}

const block = [smEntry('', '0.9'), ...APPS.map(a => smEntry(a.slug, '0.8'))].join('\n');
const marked = /<!--APPS-->[\s\S]*?<!--\/APPS-->/;
const payload = `<!--APPS-->\n${block}\n  <!--/APPS-->`;
if (marked.test(sm)) {
  sm = sm.replace(marked, payload);
} else {
  sm = sm.replace(/<\/urlset>/, `  ${payload}\n</urlset>`);
}
if (!/xmlns:xhtml/.test(sm)) {
  sm = sm.replace(/<urlset([^>]*)>/, '<urlset$1 xmlns:xhtml="http://www.w3.org/1999/xhtml">');
}
fs.writeFileSync(smPath, sm, 'utf8');

console.log(`✓ ${written} pages written to apps/ (${APPS.length} apps × ${ORDER.length} languages + ${ORDER.length} index pages)`);
console.log('✓ sitemap.xml <!--APPS--> block refreshed');
