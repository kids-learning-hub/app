/* Kids Learning Hub — shared worksheet framework (requires ../play/play.js).
   A page calls WS.setup({strings, levels, defaultLevel, generate, cols})
   where generate(levelId) returns an array of problems. Each problem is an
   HTML string, or {q, a} to also feed the printable answer key.

   2026-10 additions
   - Sheet number: problems come from a seeded random generator, so the
     number printed in the footer (and ?seed= in the URL) reproduces the
     exact same sheet — a teacher can print one sheet for the whole class.
   - Answer key: when problems carry answers, a toggle adds a second page.
   - Instruction line and a "How did I do?" self-check on every sheet.    */
(function(){
  const WS = { lang: 'en', level: null, cfg: null, seed: 0 };

  const UI = {
    en: { key: 'Answer key', keyT: 'Answer key', sheet: 'Sheet', instr: 'Read each question carefully and write your answer.', self: 'How did I do?' },
    fr: { key: 'Corrigé', keyT: 'Corrigé', sheet: 'Fiche', instr: 'Lis bien chaque question et écris ta réponse.', self: 'Comment ai-je réussi ?' },
    es: { key: 'Soluciones', keyT: 'Soluciones', sheet: 'Ficha', instr: 'Lee bien cada pregunta y escribe tu respuesta.', self: '¿Qué tal lo hice?' },
    ar: { key: 'الحلول', keyT: 'ورقة الحلول', sheet: 'ورقة', instr: 'اقرأ كل سؤال جيدًا واكتب جوابك.', self: 'كيف كان أدائي؟' },
  };

  /* ── seeded random (mulberry32) ── */
  let state = 1;
  function seedWith(n){ WS.seed = n; state = (n * 2654435761) >>> 0 || 1; }
  WS.random = function(){
    state |= 0; state = state + 0x6D2B79F5 | 0;
    let t = Math.imul(state ^ state >>> 15, 1 | state);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
  function newSeed(){ return 1000 + Math.floor(Math.random() * 9000); }
  function writeSeedToUrl(){
    try{ const u = new URL(location.href); u.searchParams.set('seed', WS.seed); history.replaceState(null, '', u); }catch(e){}
  }

  WS.setup = function(cfg){
    WS.cfg = cfg;
    WS.level = cfg.defaultLevel;
    const s = parseInt(new URLSearchParams(location.search).get('seed'), 10);
    seedWith(s >= 1000 && s <= 999999 ? s : newSeed());
    buildChrome();
    PLAY.init(l => {
      WS.lang = l;
      const T = cfg.strings[l] || cfg.strings.en;
      PLAY.applyStrings(T);
      renderLevels();
      renderSheet();
    });
    const rebtn = document.getElementById('newSheet');
    if (rebtn) rebtn.addEventListener('click', () => { seedWith(newSeed()); writeSeedToUrl(); renderSheet(); });
    const pbtn = document.getElementById('printSheet');
    if (pbtn) pbtn.addEventListener('click', () => window.print());
  };

  /* instruction line, self-check, sheet number, answer-key toggle + page */
  function buildChrome(){
    const sheet = document.querySelector('.sheet');
    if (!sheet) return;
    const title = document.getElementById('sheetTitle');
    if (title && !document.getElementById('sheetInstr')) title.insertAdjacentHTML('afterend', '<div class="instr" id="sheetInstr"></div>');
    const foot = sheet.querySelector('.sheet-foot');
    if (foot && !document.getElementById('selfCheck')) {
      foot.insertAdjacentHTML('beforebegin', '<div class="selfcheck" id="selfCheck"><span></span><span class="stars">☆ ☆ ☆</span></div>');
      foot.insertAdjacentHTML('beforeend', '<span class="sheetno" id="sheetNo"></span>');
    }
    if (!document.getElementById('answersSheet')) {
      sheet.insertAdjacentHTML('afterend',
        '<div class="sheet answers" id="answersSheet" hidden><div class="sheet-title" id="keyTitle"></div><div class="keygrid" id="keyGrid"></div></div>');
    }
    const controls = document.querySelector('.controls');
    if (controls && !document.getElementById('keyToggle')) {
      controls.insertAdjacentHTML('beforeend',
        '<label class="btn keytoggle" id="keyLabel" hidden><input type="checkbox" id="keyToggle"> <span>🔑</span> <span id="keyTxt"></span></label>');
      document.getElementById('keyToggle').addEventListener('change', e => {
        document.getElementById('answersSheet').hidden = !e.target.checked;
      });
      /* ?key=1 opens the sheet with its answer key already switched on */
      if (new URLSearchParams(location.search).get('key') === '1') {
        document.getElementById('keyToggle').checked = true;
        document.getElementById('answersSheet').hidden = false;
      }
    }
  }

  function renderLevels(){
    const box = document.getElementById('levels');
    if (!box || !WS.cfg.levels) return;
    box.innerHTML = '';
    WS.cfg.levels.forEach(lv => {
      const b = document.createElement('button');
      b.className = 'btn level' + (lv.id === WS.level ? ' active' : '');
      b.textContent = typeof lv.label === 'string' ? lv.label : (lv.label[WS.lang] || lv.label.en);
      b.onclick = () => { WS.level = lv.id; renderLevels(); renderSheet(); };
      box.appendChild(b);
    });
  }

  function renderSheet(){
    const grid = document.getElementById('probs');
    if (!grid) return;
    seedWith(WS.seed);                       // same seed → same sheet, whatever the language
    const items = WS.cfg.generate(WS.level).map(p => (p && typeof p === 'object') ? p : { q: p });
    grid.innerHTML = items.map((p, i) =>
      `<div class="prob${WS.cfg.itemClass ? ' ' + WS.cfg.itemClass : ''}"><span class="pn">${i + 1})</span> ${p.q}</div>`).join('');
    const T = WS.cfg.strings[WS.lang] || WS.cfg.strings.en;
    const U = UI[WS.lang] || UI.en;
    const title = T.title + (WS.cfg.levelInTitle !== false && WS.cfg.levels ? ' — ' + levelLabel() : '');
    const st = document.getElementById('sheetTitle');
    if (st) st.textContent = title;
    const ins = document.getElementById('sheetInstr');
    if (ins) ins.textContent = (T.instr || U.instr).replace('{n}', WS.level);   // {n} = current level, e.g. rounding target
    const sc = document.querySelector('#selfCheck span');
    if (sc) sc.textContent = U.self;
    const no = document.getElementById('sheetNo');
    if (no) no.textContent = U.sheet + ' #' + WS.seed;

    /* answer key */
    const hasKey = items.some(p => p.a !== undefined && p.a !== '');
    const lab = document.getElementById('keyLabel');
    if (lab) { lab.hidden = !hasKey; document.getElementById('keyTxt').textContent = U.key; }
    const ks = document.getElementById('answersSheet');
    if (ks) {
      if (!hasKey) ks.hidden = true;
      document.getElementById('keyTitle').textContent = title + ' — ' + U.keyT + '  (' + U.sheet + ' #' + WS.seed + ')';
      document.getElementById('keyGrid').innerHTML = items.map((p, i) =>
        `<div class="k"><b>${i + 1})</b> ${p.a === undefined ? '—' : p.a}</div>`).join('');
    }
  }
  function levelLabel(){
    const lv = WS.cfg.levels.find(l => l.id === WS.level);
    return typeof lv.label === 'string' ? lv.label : (lv.label[WS.lang] || lv.label.en);
  }

  /* helpers for generators */
  WS.rnd = (min, max) => min + Math.floor(WS.random() * (max - min + 1));
  WS.pick = arr => arr[Math.floor(WS.random() * arr.length)];
  WS.blank = '<span class="blank"></span>';

  window.WS = WS;
})();
