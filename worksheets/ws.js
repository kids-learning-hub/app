/* Kids Learning Hub — shared worksheet framework (requires ../play/play.js).
   A page calls WS.setup({strings, levels, defaultLevel, generate, cols})
   where generate(levelId) returns an array of problem strings (HTML).     */
(function(){
  const WS = { lang: 'en', level: null, cfg: null };

  WS.setup = function(cfg){
    WS.cfg = cfg;
    WS.level = cfg.defaultLevel;
    PLAY.init(l => {
      WS.lang = l;
      const T = cfg.strings[l] || cfg.strings.en;
      PLAY.applyStrings(T);
      renderLevels();
      renderSheet();
    });
    const rebtn = document.getElementById('newSheet');
    if (rebtn) rebtn.addEventListener('click', renderSheet);
    const pbtn = document.getElementById('printSheet');
    if (pbtn) pbtn.addEventListener('click', () => window.print());
  };

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
    const probs = WS.cfg.generate(WS.level);
    grid.innerHTML = probs.map((p, i) =>
      `<div class="prob"><span class="pn">${i + 1})</span> ${p}</div>`).join('');
    const st = document.getElementById('sheetTitle');
    const T = WS.cfg.strings[WS.lang] || WS.cfg.strings.en;
    if (st) st.textContent = T.title + (WS.cfg.levelInTitle !== false && WS.cfg.levels ? ' — ' + levelLabel() : '');
  }
  function levelLabel(){
    const lv = WS.cfg.levels.find(l => l.id === WS.level);
    return typeof lv.label === 'string' ? lv.label : (lv.label[WS.lang] || lv.label.en);
  }

  /* helpers for generators */
  WS.rnd = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  WS.blank = '<span class="blank"></span>';

  window.WS = WS;
})();
