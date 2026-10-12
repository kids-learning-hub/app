/* Kids Learning Hub — invitation Premium à l'arrivée sur le site.
   • S'affiche 4 s après l'arrivée, au plus une fois tous les 3 jours.
   • Fermeture : bouton « Plus tard », croix, touche Échap, clic à côté.
   • Langue = <html lang>, sens RTL pour l'arabe.
   • Sur une page d'appli (/apps/<appli>.html), mène à l'onglet de l'appli. */
(function () {
  var KEY = 'klh_premium_popup_at';
  var EVERY = 3 * 24 * 3600 * 1000;
  try {
    var last = +localStorage.getItem(KEY) || 0;
    if (Date.now() - last < EVERY) return;
  } catch (e) { /* stockage indisponible : on affiche quand même */ }
  if (/premium\.html/.test(location.pathname)) return;

  var lang = (document.documentElement.lang || 'en').slice(0, 2);
  var T = {
    en: { t: 'Unlock everything with Premium', s: 'All lessons, stories and activities — in one app, or in all 10 with the Pass.', go: 'See plans', later: 'Later' },
    fr: { t: 'Débloquez tout avec Premium', s: 'Toutes les leçons, histoires et activités — dans une appli, ou dans les 10 avec le Pass.', go: 'Voir les formules', later: 'Plus tard' },
    es: { t: 'Desbloquea todo con Premium', s: 'Todas las lecciones, cuentos y actividades — en una app, o en las 10 con el Pase.', go: 'Ver planes', later: 'Más tarde' },
    ar: { t: 'افتح كل شيء مع Premium', s: 'كل الدروس والقصص والأنشطة — في تطبيق واحد، أو في التطبيقات العشرة بالبطاقة الشاملة.', go: 'شاهد الخطط', later: 'لاحقًا' }
  }[lang] || null;
  if (!T) T = { t: 'Unlock everything with Premium', s: 'All lessons, stories and activities — in one app, or in all 10 with the Pass.', go: 'See plans', later: 'Later' };

  var m = location.pathname.match(/\/apps\/(?:[a-z]{2}\/)?([a-z]+kids)\.html/);
  var href = '/premium.html' + (m ? '?app=' + m[1] : '');

  function remember() { try { localStorage.setItem(KEY, String(Date.now())); } catch (e) {} }

  function show() {
    remember();
    var css = document.createElement('style');
    css.textContent =
      '.klh-pp{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(10,16,36,.55);animation:klhf .25s ease}' +
      '.klh-pp-box{position:relative;max-width:400px;width:100%;background:#fff;color:#12224E;border-radius:26px;padding:26px 22px 20px;text-align:center;' +
      'border:3px solid #EF9F27;box-shadow:0 8px 0 #BA7517;font-family:Nunito,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;animation:klhp .35s cubic-bezier(.2,.9,.3,1.3)}' +
      '.klh-pp-e{font-size:46px;line-height:1}' +
      '.klh-pp-t{font:800 24px "Baloo 2",Nunito,sans-serif;margin:8px 0 6px}' +
      '.klh-pp-s{font-size:15px;font-weight:700;color:#5F5E5A;margin:0 0 16px;line-height:1.45}' +
      '.klh-pp-go{display:block;background:#EF9F27;color:#fff;text-decoration:none;font-weight:900;font-size:18px;border-radius:16px;padding:13px;box-shadow:0 5px 0 #BA7517}' +
      '.klh-pp-go:active{transform:translateY(4px);box-shadow:0 1px 0 #BA7517}' +
      '.klh-pp-later{display:block;width:100%;min-height:44px;background:none;border:0;margin-top:8px;padding:10px 18px;color:#66799F;font-weight:800;font-size:16px;cursor:pointer;border-radius:14px}' +
      '.klh-pp-x{position:absolute;top:8px;inset-inline-end:8px;background:#F1EFE8;border:0;border-radius:50%;width:44px;height:44px;font-size:20px;cursor:pointer;color:#5F5E5A}' +
      '@keyframes klhf{from{opacity:0}}@keyframes klhp{from{transform:scale(.8);opacity:0}}';
    document.head.appendChild(css);

    var wrap = document.createElement('div');
    wrap.className = 'klh-pp';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'true');
    wrap.setAttribute('aria-label', T.t);
    if (lang === 'ar') wrap.dir = 'rtl';
    wrap.innerHTML =
      '<div class="klh-pp-box">' +
      '<button class="klh-pp-x" aria-label="×">×</button>' +
      '<div class="klh-pp-e">✨</div>' +
      '<div class="klh-pp-t"></div><p class="klh-pp-s"></p>' +
      '<a class="klh-pp-go"></a><button class="klh-pp-later"></button></div>';
    wrap.querySelector('.klh-pp-t').textContent = T.t;
    wrap.querySelector('.klh-pp-s').textContent = T.s;
    var go = wrap.querySelector('.klh-pp-go');
    go.textContent = T.go;
    go.href = href;
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

  window.addEventListener('load', function () { setTimeout(show, 4000); });
})();
