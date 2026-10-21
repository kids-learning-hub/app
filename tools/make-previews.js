/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — worksheet preview images
   ═══════════════════════════════════════════════════════════════════════
   Renders every worksheet linked from worksheets/index.html in PRINT mode
   (exactly what the parent will print) with headless Chrome, and saves the
   top part as a small WebP in worksheets/previews/<name>.webp.

   Usage (from apps-site/, with the site served locally):
     python -m http.server 5971          (in another terminal)
     node tools/make-previews.js          [baseUrl, default http://localhost:5971]
     node tools/make-previews.js http://localhost:5971 winter-math   (just one sheet)

   Re-run whenever a worksheet's look changes. Needs Chrome or Edge.
   ═══════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'worksheets', 'previews');
const BASE = process.argv[2] || 'http://localhost:5971';
const PORT = 9333;
const BROWSERS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
];
const A4 = { w: 794, h: 1123 };          // A4 at 96 dpi
const CLIP_H = 560;                       // top half of the sheet
const SCALE = 0.5;                        // → 397 × 280 px image

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const html = fs.readFileSync(path.join(ROOT, 'worksheets', 'index.html'), 'utf8');
  const only = process.argv.slice(3);      // optional: render just these sheets
  const pages = [...new Set([...html.matchAll(/class="gcard" href="\/worksheets\/([a-z0-9-]+)\.html"/g)].map(m => m[1]))]
    .filter(p => !only.length || only.includes(p));
  if (!pages.length) throw new Error('no worksheet cards found in worksheets/index.html');
  fs.mkdirSync(OUT, { recursive: true });

  const exe = BROWSERS.find(p => fs.existsSync(p));
  if (!exe) throw new Error('Chrome/Edge not found');
  const profile = fs.mkdtempSync(path.join(require('os').tmpdir(), 'klh-prev-'));
  const chrome = spawn(exe, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`,
    '--hide-scrollbars', '--no-first-run', '--disable-extensions', 'about:blank'], { stdio: 'ignore' });

  try {
    let ver;
    for (let i = 0; i < 40 && !ver; i++) { try { ver = await (await fetch(`http://127.0.0.1:${PORT}/json/version`)).json(); } catch { await sleep(250); } }
    if (!ver) throw new Error('browser did not start');

    const ws = new WebSocket(ver.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    let id = 0; const waiting = new Map(); const events = [];
    ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && waiting.has(m.id)) { waiting.get(m.id)(m); waiting.delete(m.id); } else events.push(m); };
    const send = (method, params = {}, sessionId) => new Promise((res, rej) => {
      const mid = ++id; waiting.set(mid, m => m.error ? rej(new Error(method + ': ' + m.error.message)) : res(m.result));
      ws.send(JSON.stringify({ id: mid, method, params, sessionId }));
    });

    const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
    await send('Page.enable', {}, sessionId);
    await send('Emulation.setEmulatedMedia', { media: 'print', features: [{ name: 'prefers-color-scheme', value: 'light' }] }, sessionId);
    await send('Emulation.setDeviceMetricsOverride', { width: A4.w, height: A4.h, deviceScaleFactor: 1, mobile: false }, sessionId);

    for (const name of pages) {
      await send('Page.navigate', { url: `${BASE}/worksheets/${name}.html?lang=en` }, sessionId);
      await sleep(2200);                                   // fonts + generated problems
      const shot = await send('Page.captureScreenshot', {
        format: 'webp', quality: 82, captureBeyondViewport: false,
        clip: { x: 0, y: 0, width: A4.w, height: CLIP_H, scale: SCALE },
      }, sessionId);
      const file = path.join(OUT, name + '.webp');
      fs.writeFileSync(file, Buffer.from(shot.data, 'base64'));
      console.log(`✔ ${name}.webp  ${(fs.statSync(file).size / 1024).toFixed(1)} KB`);
    }
    ws.close();
  } finally {
    chrome.kill();
  }
}
main().catch(e => { console.error('✗', e.message); process.exit(1); });
