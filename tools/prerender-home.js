/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — bake the homepage's JavaScript content into HTML
   ═══════════════════════════════════════════════════════════════════════
   Usage (from apps-site/):

     node tools/prerender-home.js       (step of build-all.js, after build-langs)

   The homepage builds its apps row, FAQ, blog cards, "why" grid… with
   render() in the browser, so a crawler that doesn't run JavaScript saw an
   almost empty page (~300 words) — one reason for the AdSense "low-value
   content" rejection. This tool serves the site on a private port, opens
   /, /fr/, /es/ and /ar/ in headless Chrome, and copies what render()
   produced back into each file:

     • every empty container render() fills (between <!--pr--> markers)
     • the text of every [data-i] element, in that page's language

   render() still runs on load and overwrites the same content, so nothing
   changes for visitors. Ads, the kids menu bar and the welcome card are
   not copied. Needs Chrome or Edge.
   ═══════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const PAGES = ['index.html', 'fr/index.html', 'es/index.html', 'ar/index.html'];
const CONTAINERS = ['navMenu', 'mMenu', 'langMenu', 'appsRow', 'whyGrid', 'faq', 'trustbar', 'footApps',
                    'blogRow', 'ageGrid', 'dcAges', 'promiseList', 'teacherBox'];
const BROWSERS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
];
const CDP_PORT = 9334;
const sleep = ms => new Promise(r => setTimeout(r, ms));

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
                '.png': 'image/png', '.webp': 'image/webp', '.json': 'application/json', '.woff2': 'font/woff2' };
function serve() {
  const server = http.createServer((req, res) => {
    let rel = decodeURIComponent(req.url.split('?')[0]);
    if (rel.endsWith('/')) rel += 'index.html';
    const file = path.join(ROOT, rel);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise(r => server.listen(0, '127.0.0.1', () => r(server)));
}

/* runs inside the page: snapshot what render() wrote */
const SNAPSHOT = `(() => {
  const out = { containers: {}, texts: {} };
  for (const id of ${JSON.stringify(CONTAINERS)}) {
    const el = document.getElementById(id);
    if (!el) continue;
    const c = el.cloneNode(true);
    c.querySelectorAll('script, ins, .ad-slot, iframe').forEach(n => n.remove());
    out.containers[id] = c.innerHTML.trim();
  }
  document.querySelectorAll('[data-i]').forEach(el => {
    if (!el.children.length) out.texts[el.dataset.i] = el.textContent;
  });
  return JSON.stringify(out);
})()`;

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function bake(file, snap) {
  let html = fs.readFileSync(file, 'utf8');
  let filled = 0;
  for (const [id, inner] of Object.entries(snap.containers)) {
    if (/<!--pr-->/.test(inner)) throw new Error(`${id}: snapshot already contains a marker`);
    const re = new RegExp(`(id="${id}"[^>]*>)(?:<!--pr-->[\\s\\S]*?<!--/pr-->)?(?=</(?:div|ul)>)`);
    if (!re.test(html)) { console.warn(`  ! #${id} not found or not empty in ${path.basename(file)}`); continue; }
    html = html.replace(re, (m, open) => open + '<!--pr-->' + inner.replace(/\$/g, '$$$$') + '<!--/pr-->');
    filled++;
  }
  let texts = 0;
  for (const [key, text] of Object.entries(snap.texts)) {
    html = html.replace(new RegExp(`(data-i="${key}"[^>]*>)[^<]*(?=<)`, 'g'), (m, open) => { texts++; return open + esc(text); });
  }
  fs.writeFileSync(file, html);
  return { filled, texts };
}

async function main() {
  const exe = BROWSERS.find(p => fs.existsSync(p));
  if (!exe) throw new Error('Chrome/Edge not found');
  const server = await serve();
  const base = `http://127.0.0.1:${server.address().port}/`;
  const profile = fs.mkdtempSync(path.join(require('os').tmpdir(), 'klh-pre-'));
  const chrome = spawn(exe, ['--headless=new', `--remote-debugging-port=${CDP_PORT}`, `--user-data-dir=${profile}`,
    '--no-first-run', '--disable-extensions', 'about:blank'], { stdio: 'ignore' });
  try {
    let ver;
    for (let i = 0; i < 40 && !ver; i++) { try { ver = await (await fetch(`http://127.0.0.1:${CDP_PORT}/json/version`)).json(); } catch { await sleep(250); } }
    if (!ver) throw new Error('browser did not start');
    const ws = new WebSocket(ver.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    let id = 0; const waiting = new Map();
    ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && waiting.has(m.id)) { waiting.get(m.id)(m); waiting.delete(m.id); } };
    const send = (method, params = {}, sessionId) => new Promise((res, rej) => {
      const mid = ++id; waiting.set(mid, m => m.error ? rej(new Error(method + ': ' + m.error.message)) : res(m.result));
      ws.send(JSON.stringify({ id: mid, method, params, sessionId }));
    });
    const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
    /* keep ads and analytics out of the snapshot (and off the network) */
    await send('Network.enable', {}, sessionId);
    await send('Network.setBlockedURLs', { urls: ['*googlesyndication*', '*googletagmanager*', '*google-analytics*', '*doubleclick*', '*youtube*'] }, sessionId);

    for (const page of PAGES) {
      const file = path.join(ROOT, page);
      if (!fs.existsSync(file)) { console.warn(`  ! ${page} missing — run build-langs.js first`); continue; }
      await send('Page.navigate', { url: base + page.replace(/index\.html$/, '') }, sessionId);
      await sleep(1500);
      const { result } = await send('Runtime.evaluate', { expression: SNAPSHOT, returnByValue: true }, sessionId);
      const snap = JSON.parse(result.value);
      if (!snap.containers.appsRow) throw new Error(`${page}: render() produced no apps row`);
      const { filled, texts } = bake(file, snap);
      console.log(`✔ ${page}: ${filled} containers, ${texts} texts baked`);
    }
    ws.close();
  } finally {
    chrome.kill();
    server.close();
  }
}
main().catch(e => { console.error('✗', e.message); process.exit(1); });
