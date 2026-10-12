/* Kids Learning Hub — publicité Premium + Écoles.
   • Page d'accueil (/, /fr/, /es/, /ar/) : deux cartes ancrées sur le côté
     (Premium et Écoles). Elles réapparaissent à CHAQUE retour sur l'accueil et
     restent affichées jusqu'à ce que l'utilisateur les ferme (croix de chaque carte).
   • Autres pages (pages d'applis) : fenêtre Premium 4 s après l'arrivée, au plus
     une fois tous les 3 jours, avec un lien secondaire vers l'offre Écoles.
   • Langue = <html lang>, sens RTL pour l'arabe.
   • Sur une page d'appli (/apps/<appli>.html), mène à l'onglet de l'appli. */
(function () {
  if (/(premium|schools)\.html/.test(location.pathname)) return;

  var lang = (document.documentElement.lang || 'en').slice(0, 2);
  var ALL = {
    en: { t: 'Unlock everything with Premium', s: 'All lessons, stories and activities — in one app, or in all 10 with the Pass.', go: 'See plans', later: 'Later',
          st: 'For schools', ss: 'One yearly licence for all your pupils — free 1-month trial.', sgo: 'School plans', close: 'Close' },
    fr: { t: 'Débloquez tout avec Premium', s: 'Toutes les leçons, histoires et activités — dans une appli, ou dans les 10 avec le Pass.', go: 'Voir les formules', later: 'Plus tard',
          st: 'Pour les écoles', ss: 'Une licence annuelle pour tous vos élèves — essai gratuit d’un mois.', sgo: 'Offres écoles', close: 'Fermer' },
    es: { t: 'Desbloquea todo con Premium', s: 'Todas las lecciones, cuentos y actividades — en una app, o en las 10 con el Pase.', go: 'Ver planes', later: 'Más tarde',
          st: 'Para escuelas', ss: 'Una licencia anual para todos tus alumnos — prueba gratis de un mes.', sgo: 'Planes escuelas', close: 'Cerrar' },
    ar: { t: 'افتح كل شيء مع Premium', s: 'كل الدروس والقصص والأنشطة — في تطبيق واحد، أو في التطبيقات العشرة بالبطاقة الشاملة.', go: 'شاهد الخطط', later: 'لاحقًا',
          st: 'للمدارس', ss: 'ترخيص سنوي واحد لكل تلاميذكم — تجربة مجانية لمدة شهر.', sgo: 'عروض المدارس', close: 'إغلاق' }
  };
  var T = ALL[lang] || ALL.en;

  var m = location.pathname.match(/\/apps\/(?:[a-z]{2}\/)?([a-z]+kids)\.html/);
  var premHref = '/premium.html' + (m ? '?app=' + m[1] : '');
  var isHome = /^\/(?:(?:fr|es|ar)\/?)?(?:index\.html)?$/.test(location.pathname);

  function addCss(text) {
    var css = document.createElement('style');
    css.textContent = text;
    document.head.appendChild(css);
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  /* ---------- Accueil : cartes ancrées sur le côté ---------- */
  function dock() {
    addCss(
      '.klh-dock{position:fixed;z-index:9000;bottom:calc(84px + env(safe-area-inset-bottom));inset-inline-end:16px;width:300px;max-width:calc(100vw - 32px);' +
      'display:flex;flex-direction:column;gap:10px;font-family:Nunito,-apple-system,"Segoe UI",Roboto,Arial,sans-serif}' +
      '.klh-ad{position:relative;display:flex;align-items:center;gap:12px;background:#fff;color:#12224E;border-radius:20px;padding:12px 46px 12px 12px;' +
      'text-decoration:none;border:3px solid var(--c);box-shadow:0 6px 0 var(--d),0 12px 26px rgba(10,16,36,.25);animation:klhs .45s cubic-bezier(.2,.9,.3,1.2) both}' +
      '[dir=rtl] .klh-ad{padding:12px 12px 12px 46px}' +
      '.klh-ad:nth-child(2){animation-delay:.12s}' +
      '.klh-ad-e{flex:none;width:46px;height:46px;border-radius:14px;display:grid;place-items:center;font-size:26px;background:var(--c)}' +
      '.klh-ad-b{min-width:0;display:flex;flex-direction:column;gap:2px}' +
      '.klh-ad-t{font:800 16px/1.2 "Baloo 2",Nunito,sans-serif}' +
      '.klh-ad-s{font-size:12.5px;font-weight:700;color:#5F5E5A;line-height:1.35}' +
      '.klh-ad-go{font-size:13px;font-weight:900;color:var(--d);margin-top:2px}' +
      '.klh-ad-x{position:absolute;top:4px;inset-inline-end:4px;width:40px;height:40px;border:0;border-radius:50%;background:#F1EFE8;color:#5F5E5A;font-size:18px;line-height:1;cursor:pointer}' +
      '.klh-ad-x:hover{background:#E4E1D8}' +
      '@keyframes klhs{from{opacity:0;transform:translateY(24px)}}' +
      '@media(max-width:600px){.klh-dock{inset-inline:12px;width:auto;max-width:none;bottom:calc(80px + env(safe-area-inset-bottom));gap:8px}' +
      '.klh-ad{padding:8px 44px 8px 8px;border-radius:16px}[dir=rtl] .klh-ad{padding:8px 8px 8px 44px}.klh-ad-e{width:40px;height:40px;font-size:22px}.klh-ad-s{display:none}}'
    );
    var box = el('div', 'klh-dock');
    if (lang === 'ar') box.dir = 'rtl';
    box.setAttribute('aria-label', 'Premium');

    function card(emoji, title, sub, go, href, c, d) {
      var a = el('a', 'klh-ad');
      a.href = href;
      a.style.setProperty('--c', c);
      a.style.setProperty('--d', d);
      a.appendChild(el('span', 'klh-ad-e', emoji));
      var b = el('span', 'klh-ad-b');
      b.appendChild(el('span', 'klh-ad-t', title));
      b.appendChild(el('span', 'klh-ad-s', sub));
      b.appendChild(el('span', 'klh-ad-go', go + (lang === 'ar' ? ' ←' : ' →')));
      a.appendChild(b);
      var x = el('button', 'klh-ad-x', '×');
      x.type = 'button';
      x.setAttribute('aria-label', T.close);
      x.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        a.remove();
        if (!box.children.length) box.remove();
      };
      a.appendChild(x);
      return a;
    }
    box.appendChild(card('✨', T.t, T.s, T.go, premHref, '#EF9F27', '#BA7517'));
    box.appendChild(card('🏫', T.st, T.ss, T.sgo, '/schools.html', '#378ADD', '#185FA5'));
    document.body.appendChild(box);
  }

  /* ---------- Autres pages : fenêtre Premium (tous les 3 jours) ---------- */
  var KEY = 'klh_premium_popup_at';
  var EVERY = 3 * 24 * 3600 * 1000;

  function modal() {
    try {
      var last = +localStorage.getItem(KEY) || 0;
      if (Date.now() - last < EVERY) return;
      localStorage.setItem(KEY, String(Date.now()));
    } catch (e) { /* stockage indisponible : on affiche quand même */ }

    addCss(
      '.klh-pp{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(10,16,36,.55);animation:klhf .25s ease}' +
      '.klh-pp-box{position:relative;max-width:400px;width:100%;background:#fff;color:#12224E;border-radius:26px;padding:26px 22px 20px;text-align:center;' +
      'border:3px solid #EF9F27;box-shadow:0 8px 0 #BA7517;font-family:Nunito,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;animation:klhp .35s cubic-bezier(.2,.9,.3,1.3)}' +
      '.klh-pp-e{font-size:46px;line-height:1}' +
      '.klh-pp-t{font:800 24px "Baloo 2",Nunito,sans-serif;margin:8px 0 6px}' +
      '.klh-pp-s{font-size:15px;font-weight:700;color:#5F5E5A;margin:0 0 16px;line-height:1.45}' +
      '.klh-pp-go{display:block;background:#EF9F27;color:#fff;text-decoration:none;font-weight:900;font-size:18px;border-radius:16px;padding:13px;box-shadow:0 5px 0 #BA7517}' +
      '.klh-pp-go:active{transform:translateY(4px);box-shadow:0 1px 0 #BA7517}' +
      '.klh-pp-sch{display:block;margin-top:12px;min-height:44px;padding:11px;border-radius:14px;background:#E6F1FB;color:#185FA5;text-decoration:none;font-weight:900;font-size:15px}' +
      '.klh-pp-later{display:block;width:100%;min-height:44px;background:none;border:0;margin-top:4px;padding:10px 18px;color:#66799F;font-weight:800;font-size:16px;cursor:pointer;border-radius:14px}' +
      '.klh-pp-x{position:absolute;top:8px;inset-inline-end:8px;background:#F1EFE8;border:0;border-radius:50%;width:44px;height:44px;font-size:20px;cursor:pointer;color:#5F5E5A}' +
      '@keyframes klhf{from{opacity:0}}@keyframes klhp{from{transform:scale(.8);opacity:0}}'
    );

    var wrap = el('div', 'klh-pp');
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'true');
    wrap.setAttribute('aria-label', T.t);
    if (lang === 'ar') wrap.dir = 'rtl';
    wrap.innerHTML =
      '<div class="klh-pp-box">' +
      '<button class="klh-pp-x" aria-label="×">×</button>' +
      '<div class="klh-pp-e">✨</div>' +
      '<div class="klh-pp-t"></div><p class="klh-pp-s"></p>' +
      '<a class="klh-pp-go"></a><a class="klh-pp-sch" href="/schools.html"></a><button class="klh-pp-later"></button></div>';
    wrap.querySelector('.klh-pp-t').textContent = T.t;
    wrap.querySelector('.klh-pp-s').textContent = T.s;
    var go = wrap.querySelector('.klh-pp-go');
    go.textContent = T.go;
    go.href = premHref;
    wrap.querySelector('.klh-pp-sch').textContent = '🏫 ' + T.st + ' — ' + T.sgo + (lang === 'ar' ? ' ←' : ' →');
    wrap.querySelector('.klh-pp-later').textContent = T.later;

    function close() {
      wrap.remove();
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }
    wrap.querySelector('.klh-pp-x').onclick = close;
    wrap.querySelector('.klh-pp-later').onclick = close;
    wrap.addEventListener('click', function (e) { if (e.target === wrap) close(); });
    document.addEventListener('keydown', onKey);
    document.body.appendChild(wrap);
    go.focus();
  }

  if (isHome) {
    // Réaffiché aussi quand on revient par le bouton « Retour » (page restaurée du cache).
    window.addEventListener('pageshow', function (e) {
      if (e.persisted && !document.querySelector('.klh-dock')) dock();
    });
    window.addEventListener('load', function () { setTimeout(dock, 1500); });
  } else {
    window.addEventListener('load', function () { setTimeout(modal, 4000); });
  }
})();
