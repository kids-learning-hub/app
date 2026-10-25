/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — kids' menu bar + first-visit welcome tour (2026-10)
   ═══════════════════════════════════════════════════════════════════════
   Loaded on every page by analytics.js.

   1. Menu bar: a row of big, colourful buttons under the page header,
      visible at every screen width (swipeable on phones). Each button
      fills with its colour and bounces on hover — made for children.
   2. Welcome tour: on the visitor's first visit to a homepage
      (/, /fr/, /es/, /ar/), a short 3-step card explains what the site
      offers. Shown once (localStorage "klh_welcome"); reopen with #welcome.

   Language follows <html lang>, and both re-render if it changes.     */
(function () {
  'use strict';
  if (window.__klhKidbar) return; window.__klhKidbar = true;

  var L = {
    en: { home: 'Home', games: 'Games', sheets: 'Print', stories: 'Stories', kids: 'Kids corner', apps: 'Apps', blog: 'Parents',
          menu: 'Main menu',
          w: [ { e: '👋', t: 'Welcome to Kids Learning Hub!', p: 'A free place to learn by playing — made by a maths teacher for children aged 3 to 12 and their parents.' },
               { e: '🎮', t: 'Play, print and read', p: '24 games in your browser, hundreds of printable worksheets and paper games, and bedtime stories — in English, French, Spanish and Arabic.' },
               { e: '⭐', t: 'Earn stars and badges', p: 'Every game gives up to 3 stars. Collect them, unlock badges and print your own certificates! Parents will find guides and tips in the Parents section.' } ],
          next: 'Next', start: 'Let’s go!', skip: 'Skip', close: 'Close' },
    fr: { home: 'Accueil', games: 'Jeux', sheets: 'Imprimer', stories: 'Histoires', kids: 'Coin enfants', apps: 'Applis', blog: 'Parents',
          menu: 'Menu principal',
          w: [ { e: '👋', t: 'Bienvenue sur Kids Learning Hub !', p: 'Un espace gratuit pour apprendre en jouant — créé par un professeur de maths pour les enfants de 3 à 12 ans et leurs parents.' },
               { e: '🎮', t: 'Joue, imprime et lis', p: '24 jeux dans le navigateur, des centaines de fiches et de jeux à imprimer, et des histoires du soir — en français, anglais, espagnol et arabe.' },
               { e: '⭐', t: 'Gagne des étoiles et des badges', p: 'Chaque jeu rapporte jusqu’à 3 étoiles. Collectionne-les, débloque des badges et imprime tes diplômes ! Les parents trouveront guides et conseils dans l’espace Parents.' } ],
          next: 'Suivant', start: 'C’est parti !', skip: 'Passer', close: 'Fermer' },
    es: { home: 'Inicio', games: 'Juegos', sheets: 'Imprimir', stories: 'Cuentos', kids: 'Rincón infantil', apps: 'Apps', blog: 'Padres',
          menu: 'Menú principal',
          w: [ { e: '👋', t: '¡Bienvenido a Kids Learning Hub!', p: 'Un lugar gratuito para aprender jugando, creado por un profesor de matemáticas para niños de 3 a 12 años y sus familias.' },
               { e: '🎮', t: 'Juega, imprime y lee', p: '24 juegos en el navegador, cientos de fichas y juegos para imprimir, y cuentos para dormir — en español, inglés, francés y árabe.' },
               { e: '⭐', t: 'Gana estrellas e insignias', p: 'Cada juego da hasta 3 estrellas. ¡Colecciónalas, desbloquea insignias e imprime tus diplomas! Los padres encontrarán guías y consejos en la sección Padres.' } ],
          next: 'Siguiente', start: '¡Vamos!', skip: 'Saltar', close: 'Cerrar' },
    ar: { home: 'الرئيسية', games: 'ألعاب', sheets: 'للطباعة', stories: 'قصص', kids: 'ركن الأطفال', apps: 'تطبيقات', blog: 'للآباء',
          menu: 'القائمة الرئيسية',
          w: [ { e: '👋', t: 'مرحبًا بك في Kids Learning Hub!', p: 'فضاء مجاني للتعلّم باللعب — صمّمه أستاذ رياضيات للأطفال من 3 إلى 12 سنة ولآبائهم.' },
               { e: '🎮', t: 'العب واطبع واقرأ', p: '24 لعبة في المتصفح، ومئات أوراق العمل والألعاب للطباعة، وقصص قبل النوم — بالعربية والفرنسية والإنجليزية والإسبانية.' },
               { e: '⭐', t: 'اربح النجوم والشارات', p: 'كل لعبة تمنحك حتى 3 نجوم. اجمعها، وافتح الشارات، واطبع شهاداتك! ويجد الآباء أدلّة ونصائح في ركن الآباء.' } ],
          next: 'التالي', start: 'هيا بنا!', skip: 'تخطٍّ', close: 'إغلاق' },
  };

  /* key, emoji, colour, url(lang) */
  var p = function (l) { return l === 'en' ? '' : l + '/'; };
  var ITEMS = [
    ['home',    '🏠', '#1E5BFF', function (l) { return '/' + p(l); }],
    ['games',   '🎮', '#FF4FA3', function (l) { return '/play/' + p(l); }],
    ['sheets',  '🖨️', '#42C85A', function (l) { return '/worksheets/' + p(l); }],
    ['stories', '📖', '#7A4DFF', function (l) { return '/stories/' + p(l); }],
    ['kids',    '🎈', '#FF8A00', function (l) { return l === 'en' ? '/kids.html' : '/' + l + '/kids.html'; }],
    ['apps',    '📱', '#00B0FF', function (l) { return '/apps/' + p(l); }],
    ['blog',    '👨‍👩‍👧', '#E53935', function (l) { return '/blog/' + p(l); }],
  ];

  function lang() { var l = (document.documentElement.lang || 'en').slice(0, 2); return L[l] ? l : 'en'; }

  /* which section are we in? */
  function current() {
    var s = location.pathname.replace(/^\/(fr|es|ar)\//, '/');
    if (/^\/play\//.test(s)) return 'games';
    if (/^\/worksheets\//.test(s)) return 'sheets';
    if (/^\/stories\//.test(s)) return 'stories';
    if (/^\/kids\.html/.test(s) || /^\/(fr|es|ar)\/kids\.html/.test(location.pathname)) return 'kids';
    if (/^\/apps\//.test(s)) return 'apps';
    if (/^\/blog\//.test(s)) return 'blog';
    if (s === '/' || s === '/index.html') return 'home';
    return '';
  }

  var CSS = '' +
    '.kidbar{position:relative;z-index:40;padding:10px 12px 6px;font-family:"Baloo 2","Nunito",system-ui,sans-serif}' +
    '.kidbar ul{list-style:none;margin:0 auto;padding:4px 2px 8px;display:flex;gap:10px;justify-content:center;max-width:1100px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}' +
    '.kidbar ul::-webkit-scrollbar{display:none}' +
    '.kidbar li{flex:none}' +
    '.kidbar a{--c:#1E5BFF;display:flex;align-items:center;gap:8px;padding:8px 16px 8px 10px;border-radius:999px;text-decoration:none;font-weight:800;font-size:16px;line-height:1;' +
      'color:var(--c);background:#fff;border:3px solid var(--c);box-shadow:0 4px 0 color-mix(in srgb,var(--c) 55%,#000);transition:transform .18s cubic-bezier(.3,1.6,.5,1),background .18s,color .18s,box-shadow .18s;white-space:nowrap}' +
    '[dir="rtl"] .kidbar a{padding:8px 10px 8px 16px}' +
    '.kidbar a .ke{font-size:24px;display:inline-block;width:34px;height:34px;border-radius:50%;background:color-mix(in srgb,var(--c) 14%,#fff);display:grid;place-items:center;transition:transform .3s}' +
    '.kidbar a:hover,.kidbar a:focus-visible{background:var(--c);color:#fff;transform:translateY(-4px) rotate(-2deg) scale(1.06);box-shadow:0 8px 0 color-mix(in srgb,var(--c) 55%,#000),0 12px 22px color-mix(in srgb,var(--c) 40%,transparent)}' +
    '.kidbar li:nth-child(even) a:hover{transform:translateY(-4px) rotate(2deg) scale(1.06)}' +
    '.kidbar a:hover .ke,.kidbar a:focus-visible .ke{animation:kbJump .6s cubic-bezier(.3,1.6,.5,1);background:#fff}' +
    '.kidbar a:active{transform:translateY(2px) scale(.97);box-shadow:0 2px 0 color-mix(in srgb,var(--c) 55%,#000)}' +
    '.kidbar a.on{background:var(--c);color:#fff}' +
    '.kidbar a.on .ke{background:#fff}' +
    '.kidbar.wave li a{animation:kbWave .7s cubic-bezier(.3,1.6,.5,1) both;animation-delay:calc(var(--i) * 90ms)}' +
    '@keyframes kbJump{0%{transform:scale(1)}35%{transform:translateY(-7px) scale(1.25) rotate(-12deg)}65%{transform:translateY(0) scale(.95) rotate(8deg)}100%{transform:none}}' +
    '@keyframes kbWave{0%{transform:none}40%{transform:translateY(-8px) scale(1.05)}100%{transform:none}}' +
    ':root[data-theme="dark"] .kidbar a:not(.on):not(:hover){background:#141D3B}' +
    ':root[data-theme="dark"] .kidbar a .ke{background:color-mix(in srgb,var(--c) 25%,#141D3B)}' +
    '@media(max-width:760px){.kidbar{padding:8px 0 2px}.kidbar ul{justify-content:flex-start;padding:4px 12px 8px;gap:8px}.kidbar a{font-size:14px;padding:6px 12px 6px 7px}.kidbar a .ke{width:30px;height:30px;font-size:20px}}' +
    '@media print{.kidbar,.klh-welcome{display:none!important}}' +
    '@media(prefers-reduced-motion:reduce){.kidbar a,.kidbar a .ke{transition:none;animation:none!important}.kidbar.wave li a{animation:none}}' +
    /* welcome tour */
    '.klh-welcome{position:fixed;inset:0;z-index:10050;display:grid;place-items:center;padding:56px 16px 16px;overflow:auto;background:rgba(10,16,36,.55);backdrop-filter:blur(4px);animation:kwFade .25s ease}' +
    '.klh-welcome .kw{position:relative;width:min(440px,100%);background:#fff;color:#12224E;border-radius:28px;padding:26px 24px 20px;text-align:center;box-shadow:0 30px 80px rgba(0,0,0,.35);font-family:"Nunito",system-ui,sans-serif;animation:kwPop .4s cubic-bezier(.3,1.5,.5,1)}' +
    ':root[data-theme="dark"] .klh-welcome .kw{background:#141D3B;color:#EAF1FF}' +
    '.klh-welcome .kw-x{position:absolute;top:10px;inset-inline-end:12px;width:36px;height:36px;border-radius:50%;border:none;background:rgba(0,0,0,.06);font-size:18px;cursor:pointer;color:inherit}' +
    '.klh-welcome .kw-owl{width:96px;height:auto;margin:-64px auto 4px;display:block;filter:drop-shadow(0 8px 10px rgba(0,0,0,.2));animation:kwBob 2.4s ease-in-out infinite}' +
    '.klh-welcome .kw-e{font-size:46px;line-height:1;margin:4px 0 6px}' +
    '.klh-welcome h2{font-family:"Baloo 2",system-ui,sans-serif;font-size:24px;line-height:1.2;margin:0 0 8px}' +
    '.klh-welcome p{font-size:15.5px;line-height:1.55;margin:0 0 16px;opacity:.85}' +
    '.klh-welcome .kw-dots{display:flex;gap:7px;justify-content:center;margin-bottom:14px}' +
    '.klh-welcome .kw-dots i{width:10px;height:10px;border-radius:50%;background:#D5DEEF;transition:.2s}' +
    '.klh-welcome .kw-dots i.on{width:26px;border-radius:6px;background:#1E5BFF}' +
    '.klh-welcome .kw-btns{display:flex;gap:10px;justify-content:center}' +
    '.klh-welcome .kw-btns button{border:none;cursor:pointer;font:800 16px "Nunito",system-ui,sans-serif;border-radius:16px;padding:12px 22px}' +
    '.klh-welcome .kw-next{background:linear-gradient(135deg,#1E5BFF,#7A4DFF);color:#fff;box-shadow:0 5px 0 #163A8C}' +
    '.klh-welcome .kw-next:active{transform:translateY(3px);box-shadow:0 2px 0 #163A8C}' +
    '.klh-welcome .kw-skip{background:transparent;color:inherit;opacity:.65}' +
    '.klh-welcome .kw-body{animation:kwSlide .35s ease}' +
    '@keyframes kwFade{from{opacity:0}}@keyframes kwPop{from{transform:scale(.8) translateY(20px);opacity:0}}' +
    '@keyframes kwSlide{from{opacity:0;transform:translateX(16px)}}@keyframes kwBob{50%{transform:translateY(-6px) rotate(-4deg)}}' +
    'body.kw-open .klh-dock{display:none!important}' +
    '@media(max-height:620px){.klh-welcome .kw-owl{width:64px;margin-top:-44px}.klh-welcome .kw-e{font-size:34px}.klh-welcome h2{font-size:20px}.klh-welcome p{font-size:14px;margin-bottom:10px}}' +
    '@media(prefers-reduced-motion:reduce){.klh-welcome,.klh-welcome *{animation:none!important}}';

  function addCss() {
    if (document.getElementById('kidbarCss')) return;
    var s = document.createElement('style'); s.id = 'kidbarCss'; s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ── menu bar ── */
  var bar = null;
  function renderBar() {
    var l = lang(), t = L[l], cur = current();
    if (!bar) {
      bar = document.createElement('nav');
      bar.className = 'kidbar';
      var anchor = document.querySelector('nav.nav, header.top');
      if (anchor) anchor.insertAdjacentElement('afterend', bar);
      else document.body.insertBefore(bar, document.body.firstChild);
    }
    bar.setAttribute('aria-label', t.menu);
    bar.innerHTML = '<ul>' + ITEMS.map(function (it, i) {
      return '<li style="--i:' + i + '"><a href="' + it[3](l) + '" style="--c:' + it[2] + '"' + (cur === it[0] ? ' class="on" aria-current="page"' : '') +
        '><span class="ke" aria-hidden="true">' + it[1] + '</span>' + t[it[0]] + '</a></li>';
    }).join('') + '</ul>';
    var on = bar.querySelector('a.on');                       // keep the current section in view on phones
    if (on && on.scrollIntoView && bar.scrollWidth > bar.clientWidth) on.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  /* a little "hello" wave of the buttons a moment after the page opens, then every 20 s */
  function wave() {
    if (!bar || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    bar.classList.remove('wave'); void bar.offsetWidth; bar.classList.add('wave');
  }

  /* ── welcome tour ── */
  var KEY = 'klh_welcome', step = 0, box = null;
  function isHome() { return /^\/((fr|es|ar)\/)?(index\.html)?$/.test(location.pathname); }
  function seen() { try { return !!localStorage.getItem(KEY); } catch (e) { return true; } }
  function markSeen() { try { localStorage.setItem(KEY, '1'); } catch (e) {} }
  function closeWelcome() {
    markSeen();
    if (box) { box.remove(); box = null; }
    document.body.classList.remove('kw-open');
    document.removeEventListener('keydown', onKey);
    if (location.hash === '#welcome') history.replaceState(null, '', location.pathname + location.search);
  }
  function onKey(e) { if (e.key === 'Escape') closeWelcome(); }
  function renderWelcome() {
    var l = lang(), t = L[l], s = t.w[step], last = step === t.w.length - 1;
    box.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
    box.querySelector('.kw').innerHTML =
      '<button class="kw-x" aria-label="' + t.close + '">✕</button>' +
      '<img class="kw-owl" src="/logos/owl.svg" alt="" width="96" height="106">' +
      '<div class="kw-body"><div class="kw-e" aria-hidden="true">' + s.e + '</div><h2 id="kwTitle">' + s.t + '</h2><p>' + s.p + '</p></div>' +
      '<div class="kw-dots">' + t.w.map(function (_, i) { return '<i' + (i === step ? ' class="on"' : '') + '></i>'; }).join('') + '</div>' +
      '<div class="kw-btns">' + (last ? '' : '<button class="kw-skip">' + t.skip + '</button>') +
      '<button class="kw-next">' + (last ? t.start : t.next + (l === 'ar' ? ' ←' : ' →')) + '</button></div>';
    box.querySelector('.kw-x').onclick = closeWelcome;
    var sk = box.querySelector('.kw-skip'); if (sk) sk.onclick = closeWelcome;
    box.querySelector('.kw-next').onclick = function () { if (last) closeWelcome(); else { step++; renderWelcome(); } };
    box.querySelector('.kw-next').focus();
  }
  function openWelcome() {
    if (box) return;
    step = 0;
    box = document.createElement('div');
    box.className = 'klh-welcome';
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-labelledby', 'kwTitle');
    box.innerHTML = '<div class="kw"></div>';
    box.addEventListener('click', function (e) { if (e.target === box) closeWelcome(); });
    document.body.appendChild(box);
    document.body.classList.add('kw-open');
    document.addEventListener('keydown', onKey);
    renderWelcome();
  }

  function init() {
    addCss();
    renderBar();
    setTimeout(wave, 900);
    setInterval(function () { if (!document.hidden) wave(); }, 20000);
    /* re-render when a page switches language in place */
    new MutationObserver(function () { renderBar(); if (box) renderWelcome(); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    if (location.hash === '#welcome') openWelcome();
    else if (isHome() && !seen() && !/bot|crawl|spider|lighthouse/i.test(navigator.userAgent)) setTimeout(openWelcome, 1200);
    window.KLH_WELCOME = openWelcome;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
