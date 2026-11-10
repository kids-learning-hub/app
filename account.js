/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — "My space": favourites + optional parent account
   ═══════════════════════════════════════════════════════════════════════
   Loaded on every page by analytics.js.

   1. Adds a 👤 button to the page header → /account.html.
   2. Adds a ♡ "save" button on every worksheet, game and story page.
      Favourites live in this browser (localStorage "klh_favs").
   3. If /firebase-config.js holds a Firebase web config AND the visitor has
      signed in (flag "klh_acct"), loads Firebase and keeps the stars
      ("klh_stars", see stars.js) and the favourites in step with the
      parent's account, so they follow the family from phone to computer.

   The account belongs to an ADULT (parent or teacher). Children never sign
   in and nothing is asked about them. Nothing on the site needs an account.
   Stored per account (Firestore users/<uid>): stars, badges, favourites,
   interface language. The Firebase SDK is only downloaded for signed-in
   visitors and on /account.html — everyone else never loads it.          */
(function () {
  'use strict';
  if (window.__klhAccount) return; window.__klhAccount = true;

  var SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';
  var FAVS = 'klh_favs', STARS = 'klh_stars', FLAG = 'klh_acct';
  var L = {
    en: { space: 'My space', save: 'Save', saved: 'Saved', saveT: 'Add to my favourites' },
    fr: { space: 'Mon espace', save: 'Garder', saved: 'Gardé', saveT: 'Ajouter à mes favoris' },
    es: { space: 'Mi espacio', save: 'Guardar', saved: 'Guardado', saveT: 'Añadir a mis favoritos' },
    ar: { space: 'فضائي', save: 'احفظ', saved: 'محفوظ', saveT: 'أضِف إلى مفضّلتي' },
  };
  function lang() { var l = (document.documentElement.lang || 'en').slice(0, 2); return L[l] ? l : 'en'; }
  function get(k, d) { try { var v = JSON.parse(localStorage.getItem(k) || 'null'); return v === null ? d : v; } catch (e) { return d; } }
  function set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* ── favourites ─────────────────────────────────────────────────────── */
  /* key = path without the language folder, e.g. "worksheets/addition" */
  function pageKey() {
    var m = location.pathname.match(/^\/(worksheets|play|stories)\/(?:(?:fr|es|ar)\/)?([a-z0-9-]+)\.html$/);
    return m && m[2] !== 'index' ? m[1] + '/' + m[2] : null;
  }
  var favs = {
    list: function () { var a = get(FAVS, []); return Array.isArray(a) ? a : []; },
    has: function (k) { return favs.list().some(function (f) { return f.k === k; }); },
    toggle: function (k, title) {
      var a = favs.list(), i = a.findIndex(function (f) { return f.k === k; });
      if (i >= 0) a.splice(i, 1); else a.unshift({ k: k, t: String(title || k).slice(0, 90), ts: Date.now() });
      set(FAVS, a.slice(0, 200));
      document.dispatchEvent(new CustomEvent('klh:favs'));
      return i < 0;
    },
    url: function (k, l) { var p = k.split('/'); return '/' + p[0] + '/' + (l === 'en' ? '' : l + '/') + p[1] + '.html'; },
  };

  function css() {
    if (document.getElementById('klhAcctCss')) return;
    var st = document.createElement('style'); st.id = 'klhAcctCss';
    st.textContent =
      '.klh-me{display:inline-grid;place-items:center;width:40px;height:40px;border-radius:12px;border:1px solid var(--line,#E4ECFA);background:var(--card,#fff);font-size:19px;text-decoration:none;line-height:1;flex:none}' +
      '.klh-me:hover{border-color:#1E5BFF}.klh-me.in{box-shadow:inset 0 0 0 2px #42C85A}' +
      '.klh-fav{display:inline-flex;align-items:center;gap:6px;margin:8px 0 2px;padding:7px 14px;border-radius:999px;border:2px solid #FF4FA3;background:transparent;color:#FF4FA3;font:800 14px Nunito,system-ui,sans-serif;cursor:pointer}' +
      '.klh-fav.on{background:#FF4FA3;color:#fff}' +
      '@media print{.klh-fav,.klh-me{display:none!important}}';
    document.head.appendChild(st);
  }

  function headerButton() {
    var box = document.querySelector('.top-actions') || document.querySelector('.nav-actions');
    if (!box || /^\/account\.html/.test(location.pathname)) return;
    var a = document.getElementById('klhMe');
    if (!a) { a = document.createElement('a'); a.id = 'klhMe'; a.className = 'klh-me'; a.textContent = '👤'; box.insertBefore(a, box.firstChild); }
    var l = lang(); a.href = '/account.html' + (l === 'en' ? '' : '?lang=' + l);
    a.title = L[l].space; a.setAttribute('aria-label', L[l].space);
    a.classList.toggle('in', get(FLAG, 0) === 1);
  }

  function favButton() {
    var k = pageKey(); if (!k) return;
    var h1 = document.querySelector('h1'); if (!h1) return;
    var b = document.getElementById('klhFav');
    if (!b) {
      b = document.createElement('button'); b.id = 'klhFav'; b.type = 'button'; b.className = 'klh-fav';
      h1.insertAdjacentElement('afterend', b);
      b.addEventListener('click', function () { favs.toggle(k, (document.querySelector('h1') || {}).textContent); paint(); });
    }
    function paint() {
      var on = favs.has(k), t = L[lang()];
      b.classList.toggle('on', on); b.textContent = (on ? '♥ ' + t.saved : '♡ ' + t.save); b.title = t.saveT;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    paint();
  }

  /* ── merging two copies of the family's data ────────────────────────── */
  function mergeStars(a, b) {
    a = a && a.best ? a : { total: 0, plays: 0, best: {}, badges: [] };
    b = b && b.best ? b : { total: 0, plays: 0, best: {}, badges: [] };
    var best = {}; [a.best, b.best].forEach(function (o) { Object.keys(o || {}).forEach(function (g) {
      var v = Math.max(0, Math.min(3, parseInt(o[g], 10) || 0)); if (/^[a-z0-9-]{1,40}$/.test(g)) best[g] = Math.max(best[g] || 0, v); }); });
    var badges = []; (a.badges || []).concat(b.badges || []).forEach(function (x) { if (typeof x === 'string' && badges.indexOf(x) < 0 && badges.length < 60) badges.push(x); });
    return { total: Math.max(a.total || 0, b.total || 0), plays: Math.max(a.plays || 0, b.plays || 0), best: best, badges: badges };
  }
  function mergeFavs(a, b) {
    var seen = {}, out = [];
    (a || []).concat(b || []).forEach(function (f) {
      if (!f || typeof f.k !== 'string' || !/^(worksheets|play|stories)\/[a-z0-9-]{1,60}$/.test(f.k) || seen[f.k]) return;
      seen[f.k] = 1; out.push({ k: f.k, t: String(f.t || f.k).slice(0, 90), ts: +f.ts || 0 });
    });
    return out.sort(function (x, y) { return y.ts - x.ts; }).slice(0, 200);
  }

  /* ── Firebase (only when configured, and only when needed) ──────────── */
  var cfg = null, fb = null, user = null, listeners = [], pushTimer = null, lastPushed = '';
  function emit() { listeners.forEach(function (f) { try { f(user); } catch (e) {} }); headerButton(); }

  function loadConfig() {
    return new Promise(function (ok) {
      if (window.KLH_FIREBASE !== undefined) return ok(window.KLH_FIREBASE);
      var s = document.createElement('script'); s.src = '/firebase-config.js?v=1';
      s.onload = function () { ok(window.KLH_FIREBASE || null); }; s.onerror = function () { ok(null); };
      document.head.appendChild(s);
    });
  }
  function start() {
    if (fb) return fb;
    fb = loadConfig().then(function (c) {
      cfg = c; if (!c || !c.apiKey) return null;
      return Promise.all([import(SDK + 'firebase-app.js'), import(SDK + 'firebase-auth.js'), import(SDK + 'firebase-firestore.js')]).then(function (m) {
        var app = m[0].initializeApp(c), A = m[1], F = m[2], auth = A.getAuth(app), db = F.getFirestore(app);
        auth.languageCode = lang();
        var api = { A: A, F: F, auth: auth, db: db };
        A.onAuthStateChanged(auth, function (u) {
          user = u || null; set(FLAG, u ? 1 : 0);
          if (u) pull(api).then(emit, emit); else emit();
        });
        return api;
      });
    }).catch(function (e) { console.warn('account: Firebase not loaded', e); return null; });
    return fb;
  }
  function ref(api) { return api.F.doc(api.db, 'users', user.uid); }
  /* read the account, merge with this device, write both back */
  function pull(api) {
    return api.F.getDoc(ref(api)).then(function (snap) {
      var r = snap.exists() ? snap.data() : {};
      var stars = mergeStars(get(STARS, null), r.stars), fv = mergeFavs(favs.list(), r.favs);
      set(STARS, stars); set(FAVS, fv);
      if (window.KLH_STARS && KLH_STARS.render) KLH_STARS.render();
      document.dispatchEvent(new CustomEvent('klh:favs'));
      return push(api, true);
    });
  }
  function push(api, now) {
    if (!user) return Promise.resolve();
    clearTimeout(pushTimer);
    var go = function () {
      var data = { stars: mergeStars(get(STARS, null), null), favs: mergeFavs(favs.list(), null), lang: lang() };
      var sig = JSON.stringify(data); if (sig === lastPushed) return Promise.resolve();
      data.updated = api.F.serverTimestamp();
      return api.F.setDoc(ref(api), data, { merge: true }).then(function () { lastPushed = sig; });
    };
    if (now) return go().catch(function (e) { console.warn('account: sync failed', e); });
    pushTimer = setTimeout(function () { go().catch(function () {}); }, 2500);
    return Promise.resolve();
  }
  function changed() { if (fb && user) fb.then(function (api) { if (api) push(api, false); }); }
  document.addEventListener('klh:stars', changed);
  document.addEventListener('klh:favs', changed);

  function need() { return start().then(function (api) { if (!api) throw new Error('not-configured'); return api; }); }
  window.KLH_ACCOUNT = {
    favs: favs,
    /* resolves to true when accounts are switched on for this site */
    configured: function () { return loadConfig().then(function (c) { return !!(c && c.apiKey); }); },
    start: start,
    user: function () { return user; },
    onChange: function (f) { listeners.push(f); },
    google: function () { return need().then(function (api) { return api.A.signInWithPopup(api.auth, new api.A.GoogleAuthProvider()); }); },
    signUp: function (email, pw) { return need().then(function (api) {
      return api.A.createUserWithEmailAndPassword(api.auth, email, pw).then(function (r) { return api.A.sendEmailVerification(r.user).catch(function () {}).then(function () { return r; }); }); }); },
    signIn: function (email, pw) { return need().then(function (api) { return api.A.signInWithEmailAndPassword(api.auth, email, pw); }); },
    reset: function (email) { return need().then(function (api) { return api.A.sendPasswordResetEmail(api.auth, email); }); },
    signOut: function () { return need().then(function (api) { return push(api, true).then(function () { return api.A.signOut(api.auth); }); }); },
    /* erases the account and everything stored with it (this device keeps its own copy) */
    remove: function () { return need().then(function (api) {
      var u = api.auth.currentUser; if (!u) throw new Error('signed-out');
      clearTimeout(pushTimer);
      return api.F.deleteDoc(ref(api)).then(function () { return api.A.deleteUser(u); }); }); },
  };

  function init() {
    css(); headerButton(); favButton();
    if (get(FLAG, 0) === 1) start();           /* signed in before: keep this device in step */
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  new MutationObserver(function () { headerButton(); favButton(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
