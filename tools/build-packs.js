/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — paid printable practice packs (one per grade page)
   ═══════════════════════════════════════════════════════════════════════
   NOT part of build-all: the PDFs are products and must never be published
   in the (public) site repository. They are written OUTSIDE apps-site:

       ../packs-out/<sys>/<pack-id>.pdf

   Usage (from apps-site/, with the site served locally):
     python -m http.server 5971                 (or the apps-site-alt preview)
     node tools/build-packs.js                  all 29 packs
     node tools/build-packs.js us/3rd-grade-math-worksheets   one pack

   Each pack = cover + contents, then for every skill of the grade page
   (tools/grades-data-*.js) several different sheets, each followed by its
   answer key, and a certificate at the end. Uses headless Chrome (CDP
   Page.printToPDF) and poppler's pdfunite to merge.
   Also writes a small cover preview to apps-site/packs/previews/<id>.webp
   (safe to publish) for the "buy the pack" boxes.
   ═══════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn, execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.resolve(ROOT, '..', 'packs-out');
const PREV = path.join(ROOT, 'packs', 'previews');
const BASE = process.env.KLH_BASE || 'http://localhost:5971';
const PORT = 9334;
const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p => fs.existsSync(p));
const PDFUNITE = ['C:/Program Files/MiKTeX/miktex/bin/x64/pdfunite.exe', 'pdfunite'].find(p => p === 'pdfunite' || fs.existsSync(p));
const SYSTEMS = [...require('./grades-data-en.js'), ...require('./grades-data-fr-es.js'), ...require('./grades-data-ar.js')];
const WS_COPIES = new Set(require('./worksheets-data.js').map(t => t.slug));
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* how many different copies of each sheet go into a pack */
const isGenerator = slug => /WS\.setup\(/.test(fs.readFileSync(path.join(ROOT, 'worksheets', slug + '.html'), 'utf8'));
const COPIES = { generator: 6, sudoku: 4, maze: 3, 'dot-to-dot': 2, numbers: 2, 'line-tracing': 2, shapes: 1 };
const copiesFor = slug => COPIES[slug] || (isGenerator(slug) ? COPIES.generator : 1);

function sheetUrl(slug, lang, level, seed) {
  const q = [];
  if (level !== null && level !== undefined) q.push('level=' + encodeURIComponent(level));
  if (seed) q.push('seed=' + seed, 'key=1');
  let p;
  if (lang === 'en') p = `/worksheets/${slug}.html`;
  else if (WS_COPIES.has(slug)) p = `/worksheets/${lang}/${slug}.html`;
  else { p = `/worksheets/${slug}.html`; q.unshift('lang=' + lang); }
  return BASE + p + (q.length ? '?' + q.join('&') : '');
}

const T = {
  en: { pack: 'Maths Practice Pack', pages: 'pages', contents: 'Contents', key: 'with answer keys', lic: 'Licence: for use by the purchasing family, or by one teacher with their own class. Please do not share or resell this file.', made: 'Made by a maths teacher · kids-learning-hub.cc', sheets: 'sheets' },
  fr: { pack: 'Cahier d’exercices de maths', pages: 'pages', contents: 'Sommaire', key: 'avec corrigés', lic: 'Licence : pour la famille qui l’a acheté, ou pour un enseignant avec sa classe. Merci de ne pas partager ni revendre ce fichier.', made: 'Conçu par un professeur de maths · kids-learning-hub.cc', sheets: 'fiches' },
  es: { pack: 'Cuadernillo de matemáticas', pages: 'páginas', contents: 'Índice', key: 'con soluciones', lic: 'Licencia: para la familia que lo ha comprado, o para un docente con su clase. Por favor, no compartas ni revendas este archivo.', made: 'Creado por un profesor de matemáticas · kids-learning-hub.cc', sheets: 'fichas' },
  ar: { pack: 'كرّاسة تمارين الرياضيات', pages: 'صفحة', contents: 'الفهرس', key: 'مع الحلول', lic: 'الترخيص: للأسرة التي اشترته، أو لمعلّم واحد مع قسمه. المرجو عدم مشاركة هذا الملف أو إعادة بيعه.', made: 'من إعداد أستاذ رياضيات · kids-learning-hub.cc', sheets: 'أوراق' },
};

function coverHtml(sys, g, items) {
  const t = T[sys.lang], dir = sys.lang === 'ar' ? 'rtl' : 'ltr';
  const label = g.label + (g.alt ? ` — ${g.alt}` : '');
  return `<!DOCTYPE html><html lang="${sys.lang}" dir="${dir}"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet">
<style>@page{size:A4;margin:0}*{box-sizing:border-box;margin:0}body{font-family:Nunito,sans-serif;color:#12224E}
.c{height:297mm;padding:22mm 18mm;display:flex;flex-direction:column;background:linear-gradient(160deg,#EAF2FF 0%,#FFF4E0 100%)}
.top{display:flex;align-items:center;gap:12px;font-family:'Baloo 2',sans-serif;font-weight:800;font-size:20px;color:#1E5BFF}.top img{width:54px}
h1{font-family:'Baloo 2',sans-serif;font-size:40pt;line-height:1.05;margin-top:24mm}
.g{display:inline-block;margin-top:6mm;background:#FF8A00;color:#fff;font-family:'Baloo 2',sans-serif;font-weight:800;font-size:22pt;padding:3mm 8mm;border-radius:6mm}
.f{font-size:14pt;margin-top:6mm;color:#41507a;font-weight:700}
.owl{width:62mm;align-self:center;margin:12mm 0 6mm}
h2{font-family:'Baloo 2',sans-serif;font-size:16pt;margin:4mm 0 2mm}
ol{padding-inline-start:7mm;font-size:12.5pt;line-height:1.7;font-weight:700}
.foot{margin-top:auto;font-size:9.5pt;color:#66799F;border-top:1px solid #c9d6ef;padding-top:4mm}</style></head><body>
<div class="c"><div class="top"><img src="${BASE}/logos/hub-logo.png" alt="">Kids Learning Hub</div>
<h1>${t.pack}</h1><div><span class="g">${sys.short} · ${label}</span></div>
<div class="f">${items.reduce((n, i) => n + i.copies, 0)} ${t.sheets} · ${t.key}</div>
<img class="owl" src="${BASE}/logos/owl.svg" alt="">
<h2>${t.contents}</h2><ol>${items.map(i => `<li>${i.name} <span style="color:#66799F">(${i.copies})</span></li>`).join('')}</ol>
<div class="foot">${t.lic}<br>${t.made}</div></div></body></html>`;
}

async function main() {
  if (!CHROME) throw new Error('Chrome/Edge not found');
  const only = process.argv[2];
  fs.mkdirSync(OUT, { recursive: true }); fs.mkdirSync(PREV, { recursive: true });
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'klh-packs-'));
  const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${path.join(tmp, 'profile')}`, '--no-first-run', '--disable-extensions', 'about:blank'], { stdio: 'ignore' });
  try {
    let ver; for (let i = 0; i < 40 && !ver; i++) { try { ver = await (await fetch(`http://127.0.0.1:${PORT}/json/version`)).json(); } catch { await sleep(250); } }
    if (!ver) throw new Error('browser did not start');
    const ws = new WebSocket(ver.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    let id = 0; const waiting = new Map();
    ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && waiting.has(m.id)) { waiting.get(m.id)(m); waiting.delete(m.id); } };
    const send = (method, params = {}, sessionId) => new Promise((res, rej) => { const mid = ++id; waiting.set(mid, m => m.error ? rej(new Error(method + ': ' + m.error.message)) : res(m.result)); ws.send(JSON.stringify({ id: mid, method, params, sessionId })); });
    const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
    await send('Page.enable', {}, sessionId);
    await send('Emulation.setEmulatedMedia', { media: 'print', features: [{ name: 'prefers-color-scheme', value: 'light' }] }, sessionId);
    const printTo = async (url, file, wait = 1800, prep = '') => {
      await send('Page.navigate', { url }, sessionId); await sleep(wait);
      if (prep) { await send('Runtime.evaluate', { expression: prep }, sessionId); await sleep(150); }
      const r = await send('Page.printToPDF', { printBackground: true, preferCSSPageSize: true }, sessionId);
      fs.writeFileSync(file, Buffer.from(r.data, 'base64'));
    };

    for (const sys of SYSTEMS) for (const g of sys.grades) {
      const packId = `${sys.sys}-${g.slug}`;
      if (only && only !== `${sys.sys}/${g.slug}`) continue;
      const items = g.sheets.filter(([slug]) => slug !== 'tables-poster' || true).map(([slug, level, name]) => ({ slug, level, name, copies: copiesFor(slug) }));
      const parts = [];
      /* cover */
      const coverFile = path.join(tmp, packId + '-cover.html'); fs.writeFileSync(coverFile, coverHtml(sys, g, items));
      const coverPdf = path.join(tmp, packId + '-0.pdf');
      await printTo('file:///' + coverFile.replace(/\\/g, '/'), coverPdf, 2500); parts.push(coverPdf);
      /* cover preview image for the website box */
      await send('Emulation.setDeviceMetricsOverride', { width: 794, height: 1123, deviceScaleFactor: 1, mobile: false }, sessionId);
      const shot = await send('Page.captureScreenshot', { format: 'webp', quality: 80, clip: { x: 0, y: 0, width: 794, height: 1123, scale: 0.4 } }, sessionId);
      fs.writeFileSync(path.join(PREV, packId + '.webp'), Buffer.from(shot.data, 'base64'));
      await send('Emulation.clearDeviceMetricsOverride', {}, sessionId);
      /* sheets */
      let n = 0;
      for (const it of items) for (let k = 0; k < it.copies; k++) {
        const seed = isGenerator(it.slug) ? 1000 + (Math.abs(hash(packId + it.slug + it.level)) % 8000) + k * 7 : null;
        const f = path.join(tmp, `${packId}-${String(++n).padStart(3, '0')}.pdf`);
        await printTo(sheetUrl(it.slug, sys.lang, it.level, seed), f, 1800, prepSheet(T[sys.lang].pack + ' · ' + g.label)); parts.push(f);
      }
      /* certificate */
      const cert = path.join(tmp, packId + '-zz.pdf');
      await printTo(`${BASE}/worksheets/certificates.html?type=math&lang=${sys.lang}`, cert, 1800,
        `document.getElementById('cDate').textContent='';document.head.insertAdjacentHTML('beforeend','<style>body::after,body::before{display:none!important}</style>')`); parts.push(cert);

      const outFile = path.join(OUT, sys.sys, packId + '.pdf');
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      execFileSync(PDFUNITE, [...parts, outFile]);
      const pages = (fs.readFileSync(outFile, 'latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
      console.log(`✔ ${path.relative(ROOT, outFile)}  ${pages} pages  ${(fs.statSync(outFile).size / 1048576).toFixed(1)} MB`);
    }
    ws.close();
  } finally { chrome.kill(); }
}
/* in a paid pack, the sheet footer names the pack instead of "Free printable worksheets" */
function prepSheet(label) {
  return `document.querySelectorAll('.sheet-foot span:first-child').forEach(function(s){s.textContent=${JSON.stringify(label)}});` +
    `document.head.insertAdjacentHTML('beforeend','<style>body::after,body::before{display:none!important}</style>')`;
}
function hash(s) { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0; return h; }
main().catch(e => { console.error('✗', e.message); process.exit(1); });
